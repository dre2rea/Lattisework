import { AnimatePresence, LayoutGroup } from 'framer-motion'
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
          {items.length === 0
            ? `No terms found matching "${searchQuery}"`
            : `Search results for "${searchQuery}"`}
        </h2>
      )}

      {/* Gallery grid with FLIP animation */}
      <LayoutGroup>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[11px] gap-y-[44px]">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => onItemClick(item)}
                index={index}
                useLayoutAnimation={true}
              />
            ))}
          </AnimatePresence>
        </section>
      </LayoutGroup>
    </div>
  )
}
