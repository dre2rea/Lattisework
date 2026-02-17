import { motion } from 'framer-motion'

const lines = [
  'Master the visual language of',
  'AI image generation',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const lineVariants = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  },
}

export function Hero() {
  return (
    <motion.div
      className="text-[24px] md:text-[40px] font-medium leading-[1.25] tracking-[-0.4px] text-ink"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p className="m-0" variants={lineVariants}>
            {line}
          </motion.p>
        </div>
      ))}
    </motion.div>
  )
}
