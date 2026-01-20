import { motion } from 'framer-motion'
import type { GalleryItem } from '../types'

interface GalleryCardProps {
  item: GalleryItem
  onClick: () => void
  index: number
  useLayoutAnimation?: boolean
}

export function GalleryCard({ item, onClick, index, useLayoutAnimation = true }: GalleryCardProps) {
  return (
    <motion.article
      layout={useLayoutAnimation ? 'position' : false}
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.05,
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: { duration: 0.2 },
      }}
      className="group flex flex-col gap-[12px]"
    >
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full aspect-[1.618/1] object-cover block transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
          <span className="text-white text-sm uppercase tracking-wider">View</span>
        </div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <h3 className="text-[20px] font-bold tracking-[-0.2px] leading-[25px]">
          {item.title}
        </h3>
        <p className="text-[14px] leading-[20px] text-muted">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}
