import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
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
  const [lastOpenedTermId, setLastOpenedTermId] = useState<string | null>(null)

  const images = useMemo(() => term?.images || [], [term?.images])
  const totalImages = images.length

  // Reset states when lightbox opens or term changes (adjusting state during render)
  if (isOpen && term && term.id !== lastOpenedTermId) {
    setLastOpenedTermId(term.id)
    setCurrentIndex(0)
    setDisplayedIndex(0)
    setIsImageLoaded(false)
  }

  // Clear tracked term when closing
  if (!isOpen && lastOpenedTermId !== null) {
    setLastOpenedTermId(null)
  }

  // Clear preloaded images cache when term changes (refs must be accessed in effects)
  useEffect(() => {
    preloadedImages.current.clear()
  }, [lastOpenedTermId])

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
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Desktop-only progress indicator */}
          <div className="hidden xl:flex absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono p-2 h-10 items-center">
            {currentIndex + 1} / {totalImages}
          </div>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="absolute top-4 right-4 md:top-5 md:right-8 text-white/70 bg-transparent border-none cursor-pointer transition-[color,top,right] duration-300 ease-out hover:text-white p-2"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Desktop-only side chevrons */}
          {hasPrevious && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 z-10 text-white/70 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-white p-2"
              aria-label="Previous image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="hidden xl:block absolute right-7 top-1/2 -translate-y-1/2 z-10 text-white/70 bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-white p-2"
              aria-label="Next image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}

          {/* Main content block - vertically centered as one unit */}
          <div className="flex flex-col items-center w-[90vw] xl:w-[85vw]">
            {/* Image container */}
            <div
              className="flex items-center justify-center relative xl:min-h-[60vh]"
              onClick={(e) => e.stopPropagation()}
            >
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
                  className="max-w-[90vw] xl:max-w-[85vw] max-h-[50vh] xl:max-h-[70vh] object-contain"
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

            {/* Mobile/Tablet navigation row: [<] [2/4] [>] */}
            <div
              className="flex xl:hidden items-center justify-center gap-4 mt-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={goToPrevious}
                disabled={!hasPrevious}
                className={`p-2 transition-colors duration-200 ${
                  hasPrevious ? 'text-white/70 hover:text-white cursor-pointer' : 'text-white/20 cursor-default'
                }`}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <span className="text-white/70 text-sm font-mono min-w-[3rem] text-center">
                {currentIndex + 1} / {totalImages}
              </span>
              <button
                onClick={goToNext}
                disabled={!hasNext}
                className={`p-2 transition-colors duration-200 ${
                  hasNext ? 'text-white/70 hover:text-white cursor-pointer' : 'text-white/20 cursor-default'
                }`}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Term info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-white text-center mt-3 xl:mt-5 max-w-xl px-1 xl:px-5 transition-[margin,padding] duration-300 ease-out"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="italic mb-1 xl:mb-2 transition-[margin] duration-300 ease-out">{term.label}</h3>
              <p className="text-sm text-gray-400">{term.description}</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
