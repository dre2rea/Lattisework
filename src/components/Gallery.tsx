import { AnimatePresence, LayoutGroup } from 'framer-motion'
import { GalleryCard } from './GalleryCard'
import { LoadingAnimation } from './LoadingAnimation'
import type { GalleryItem } from '../types'

interface GalleryProps {
  items: GalleryItem[]
  onItemClick: (item: GalleryItem) => void
  searchQuery?: string
  imagesReady: boolean
}

export function Gallery({ items, onItemClick, searchQuery, imagesReady }: GalleryProps) {
  // Use FLIP animation for filter navigation, slide-up for search results
  const useFlipAnimation = !searchQuery

  const gridContent = items.map((item, index) => (
    <GalleryCard
      key={item.id}
      item={item}
      onClick={() => onItemClick(item)}
      index={index}
      useLayoutAnimation={useFlipAnimation}
      ready={imagesReady}
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

      {/* Loading state */}
      {!imagesReady && items.length > 0 && <LoadingAnimation />}

      {/* Gallery grid - FLIP animation for filters, simple slide-up for search */}
      {imagesReady && useFlipAnimation ? (
        <LayoutGroup>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[11px] gap-y-[44px] transition-[gap] duration-300 ease-out">
            <AnimatePresence mode="popLayout">
              {gridContent}
            </AnimatePresence>
          </section>
        </LayoutGroup>
      ) : imagesReady ? (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[11px] gap-y-[44px] transition-[gap] duration-300 ease-out">
          {gridContent}
        </section>
      ) : null}
    </div>
  )
}
