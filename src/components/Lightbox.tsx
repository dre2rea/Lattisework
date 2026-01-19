import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Term } from '../types'

interface LightboxProps {
  term: Term | null
  isOpen: boolean
  onClose: () => void
}

export function Lightbox({ term, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [displayedIndex, setDisplayedIndex] = useState(0)
  const preloadedImages = useRef<Set<string>>(new Set())

  const images = term?.images || []
  const totalImages = images.length

  // Preload an image
  const preloadImage = useCallback((src: string) => {
    if (preloadedImages.current.has(src)) return
    const img = new Image()
    img.src = src
    preloadedImages.current.add(src)
  }, [])

  // Preload adjacent images when current image changes
  useEffect(() => {
    if (!isOpen || images.length === 0) return

    // Preload current image
    preloadImage(images[currentIndex])

    // Preload next image
    if (currentIndex < images.length - 1) {
      preloadImage(images[currentIndex + 1])
    }

    // Preload previous image
    if (currentIndex > 0) {
      preloadImage(images[currentIndex - 1])
    }
  }, [currentIndex, images, isOpen, preloadImage])

  // Reset states when lightbox opens or term changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
      setDisplayedIndex(0)
      setIsImageLoaded(false)
      preloadedImages.current.clear()
    }
  }, [isOpen, term])

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setIsImageLoaded(false)
      setCurrentIndex((prev) => prev - 1)
    }
  }, [currentIndex])

  const goToNext = useCallback(() => {
    if (currentIndex < totalImages - 1) {
      setIsImageLoaded(false)
      setCurrentIndex((prev) => prev + 1)
    }
  }, [currentIndex, totalImages])

  // Handle image load - update displayed index when new image is ready
  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true)
    setDisplayedIndex(currentIndex)
  }, [currentIndex])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    },
    [onClose, goToPrevious, goToNext]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < totalImages - 1

  return (
    <AnimatePresence>
      {isOpen && term && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center flex-col"
          onClick={onClose}
        >
          {/* Image counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono">
            {currentIndex + 1} / {totalImages}
          </div>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="absolute top-4 right-4 md:top-5 md:right-8 text-white/70 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-white p-2"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Previous button - only show if not first image */}
          {hasPrevious && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 text-white/70 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-white p-2"
              aria-label="Previous image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {/* Next button - only show if not last image */}
          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 text-white/70 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-white p-2"
              aria-label="Next image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}

          {/* Image container */}
          <div className="flex items-center justify-center relative" style={{ minHeight: '60vh' }}>
            {/* Loading indicator */}
            {!isImageLoaded && currentIndex !== displayedIndex && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white/20 border-t-white/70 rounded-full animate-spin" />
              </div>
            )}

            {/* Current displayed image */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={`${term.id}-${displayedIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                src={images[displayedIndex]}
                alt={`${term.label} - Image ${displayedIndex + 1}`}
                className="max-w-[85vw] max-h-[70vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Hidden preloader for next image */}
            {currentIndex !== displayedIndex && (
              <img
                src={images[currentIndex]}
                alt=""
                className="sr-only"
                onLoad={handleImageLoad}
              />
            )}
          </div>

          {/* Term info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-white text-center mt-5 max-w-xl px-5"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="italic mb-2">{term.label}</h3>
            <p className="text-sm text-gray-400">{term.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
