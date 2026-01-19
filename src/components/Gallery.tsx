import { AnimatePresence, LayoutGroup } from 'framer-motion'
import { GalleryCard } from './GalleryCard'
import type { GalleryItem } from '../types'

interface GalleryProps {
  items: GalleryItem[]
  onItemClick: (item: GalleryItem) => void
  searchQuery?: string
}

export function Gallery({ items, onItemClick, searchQuery }: GalleryProps) {
  // Use FLIP animation for filter navigation, slide-up for search results
  const useFlipAnimation = !searchQuery

  const gridContent = items.map((item, index) => (
    <GalleryCard
      key={item.id}
      item={item}
      onClick={() => onItemClick(item)}
      index={index}
      useLayoutAnimation={useFlipAnimation}
    />
  ))

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

      {/* Gallery grid - FLIP animation for filters, simple slide-up for search */}
      {useFlipAnimation ? (
        <LayoutGroup>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[11px] gap-y-[44px]">
            <AnimatePresence mode="popLayout">
              {gridContent}
            </AnimatePresence>
          </section>
        </LayoutGroup>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[11px] gap-y-[44px]">
          {gridContent}
        </section>
      )}
    </div>
  )
}
