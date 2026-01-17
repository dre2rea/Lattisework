import { AnimatePresence } from 'framer-motion'
import { GalleryCard } from './GalleryCard'
import type { GalleryItem } from '../types'

interface GalleryProps {
  items: GalleryItem[]
  onItemClick: (item: GalleryItem) => void
  searchQuery?: string
}

export function Gallery({ items, onItemClick, searchQuery }: GalleryProps) {
  return (
    <div className="flex flex-col gap-[18px]">
      {/* Search results heading */}
      {searchQuery && (
        <h2 className="text-[20px] font-bold tracking-[-0.2px] leading-[25px]">
          Search results for "{searchQuery}"
        </h2>
      )}

      {/* Gallery grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[11px] gap-y-[44px]">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => onItemClick(item)}
              index={index}
            />
          ))}
        </AnimatePresence>
      </section>
    </div>
  )
}
