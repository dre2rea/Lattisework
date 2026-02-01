import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Custom easing function (ease-out cubic)
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

// Hysteresis thresholds to prevent flickering
const SHOW_THRESHOLD_MULTIPLIER = 1.5
const HIDE_THRESHOLD_MULTIPLIER = 1.0

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const isVisibleRef = useRef(false)
  const isScrollingToTopRef = useRef(false)
  const hasMountedRef = useRef(false)
  const scrollTimeoutRef = useRef<number | null>(null)
  const lastVisibilityChangeRef = useRef(0)
  const MIN_VISIBILITY_MS = 200
  const viewportHeightRef = useRef(0)

  // Custom smooth scroll with completion callback
  const smoothScrollToTop = useCallback((duration: number = 500) => {
    const startPosition = window.scrollY
    const startTime = performance.now()

    function scroll(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeOutCubic(progress)
      const targetY = Math.round(startPosition * (1 - easeProgress))

      window.scrollTo(0, targetY)

      if (progress < 1) {
        requestAnimationFrame(scroll)
      } else {
        // Scroll complete - clear the flag after a small delay for safety
        setTimeout(() => {
          isScrollingToTopRef.current = false
        }, 50)
      }
    }

    requestAnimationFrame(scroll)
  }, [])

  useEffect(() => {
    let ticking = false

    const updateViewportHeight = () => {
      viewportHeightRef.current = window.innerHeight
    }

    updateViewportHeight()

    const handleScroll = () => {
      // Skip scroll handling if not mounted yet or currently animating to top
      if (!hasMountedRef.current || isScrollingToTopRef.current) return

      const scrollY = window.scrollY
      const viewportHeight = viewportHeightRef.current || window.innerHeight
      const showThreshold = viewportHeight * SHOW_THRESHOLD_MULTIPLIER
      const hideThreshold = viewportHeight * HIDE_THRESHOLD_MULTIPLIER

      // Hysteresis: different thresholds for showing vs hiding
      const now = performance.now()

      if (!isVisibleRef.current && scrollY > showThreshold) {
        isVisibleRef.current = true
        setIsVisible(true)
        lastVisibilityChangeRef.current = now
      } else if (isVisibleRef.current && scrollY < hideThreshold) {
        if (now - lastVisibilityChangeRef.current < MIN_VISIBILITY_MS) return
        isVisibleRef.current = false
        setIsVisible(false)
        lastVisibilityChangeRef.current = now
      }
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateViewportHeight, { passive: true })

    // Delay initial scroll check to prevent flicker on mount
    // Wait for next frame + small buffer to ensure stable initial state
    requestAnimationFrame(() => {
      setTimeout(() => {
        hasMountedRef.current = true
        handleScroll()
      }, 50)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateViewportHeight)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const handleClick = () => {
    // Immediately hide button and set scrolling flag
    isScrollingToTopRef.current = true
    isVisibleRef.current = false
    setIsVisible(false)

    // Calculate duration based on scroll distance (min 400ms, max 600ms)
    const scrollDistance = window.scrollY
    const duration = Math.min(Math.max(400, scrollDistance * 0.15), 600)
    // Fallback timeout to clear flag in case scroll completion callback fails
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      isScrollingToTopRef.current = false
    }, duration + 100)

    smoothScrollToTop(duration)
  }

  return (
    <AnimatePresence mode="sync">
      {isVisible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={handleClick}
          className="fixed bottom-[30px] left-1/2 -translate-x-1/2 md:left-[30px] md:translate-x-0 z-50 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-ink text-cream border border-ink cursor-pointer transition-colors duration-200 hover:bg-cream hover:text-ink"
          aria-label="Back to top"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Arrow line up icon */}
            <path
              d="M10 16.25V5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 9.375L10 4.375L15 9.375"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
