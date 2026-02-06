import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-cream px-[30px] py-6 max-w-[574px] w-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-sm text-ink leading-[25px] mt-5">
              <p>Lattisework is a visual glossary for AI image generation. All images are created in Midjourney by <a href="https://x.com/narie_wjlee" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">Wonjae</a>.</p>
            </div>
            <div className="flex justify-end mt-2">
              <button
                onClick={onClose}
                className="px-3.5 py-1.5 text-sm bg-cream text-ink border border-ink cursor-pointer transition-all duration-200 "
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
