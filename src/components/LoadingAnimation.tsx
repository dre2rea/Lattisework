import { motion } from 'framer-motion'

/**
 * Lattice Weave loading animation - intersecting lines with alternating origins
 */
export function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center h-[200px]">
      <div className="relative w-[40px] h-[40px]">
        {/* Horizontal lines */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 h-[2px] bg-ink"
            style={{
              top: `${i * 50}%`,
              width: '100%',
              transformOrigin: i % 2 === 0 ? 'left' : 'right',
            }}
            animate={{
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.1,
            }}
          />
        ))}
        {/* Vertical lines */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 w-[2px] bg-muted"
            style={{
              left: `${i * 50}%`,
              height: '100%',
              transformOrigin: i % 2 === 0 ? 'top' : 'bottom',
            }}
            animate={{
              scaleY: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3 + i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  )
}
