import { GalleryCard } from './GalleryCard'
import { LoadingAnimation } from './LoadingAnimation'
import type { GalleryItem } from '../types'

interface GalleryProps {
  items: GalleryItem[]
  onItemClick: (item: GalleryItem) => void
  searchQuery?: string
  imagesReady: boolean
  isInitialMount?: boolean
}

export function Gallery({ items, onItemClick, searchQuery, imagesReady, isInitialMount = true }: GalleryProps) {
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

      {/* Gallery grid - consistent structure to prevent remounting */}
      {imagesReady && (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[11px] gap-y-[44px] transition-[gap] duration-300 ease-out">
          {items.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => onItemClick(item)}
              index={index}
              ready={imagesReady}
              isInitialMount={isInitialMount}
            />
          ))}
        </section>
      )}
    </div>
  )
}
