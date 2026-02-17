import type { GalleryItem } from '../types'

interface GalleryCardProps {
  item: GalleryItem
  onClick: () => void
  index: number
  ready?: boolean
  isInitialMount?: boolean
}

// Check if the term was added within the last 7 days
function isNewTerm(addedDate?: string): boolean {
  if (!addedDate) return false
  const added = new Date(addedDate)
  const now = new Date()
  const diffDays = (now.getTime() - added.getTime()) / (1000 * 60 * 60 * 24)
  return diffDays <= 7
}

export function GalleryCard({ item, onClick, index, ready = true, isInitialMount = true }: GalleryCardProps) {
  const isNew = isNewTerm(item.addedDate)
  // Use CSS animations for initial load, plain HTML for filter changes
  // This eliminates Framer Motion's internal state as a flicker source
  const animationStyle = isInitialMount && ready
    ? {
        animation: `slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.05}s both`,
      }
    : undefined

  return (
    <article
      style={animationStyle}
      className="flex flex-col gap-[12px]"
    >
      <div
        className="group relative overflow-hidden cursor-pointer will-change-transform transform-gpu"
        onClick={onClick}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full aspect-[1.618/1] object-cover block transform-gpu backface-hidden scale-100 transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
          <span className="text-border text-sm font-light">View more</span>
        </div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex items-center gap-[10px]">
          <h3 className="text-[18px] font-semibold tracking-[-0.2px] leading-[25px]">
            {item.title}
          </h3>
          {isNew && (
            <span className="bg-ink text-cream text-[11px] font-regular-[20px] px-[6px] flex items-center justify-center">
              NEW
            </span>
          )}
        </div>
        <p className="text-[14px] leading-[20px] text-muted font-light">
          {item.description}
        </p>
      </div>
    </article>
  )
}
