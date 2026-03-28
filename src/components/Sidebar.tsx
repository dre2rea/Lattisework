import { motion } from 'framer-motion'
import type { Category, CategoryId, FilterType } from '../types'

interface SidebarProps {
  categories: Category[]
  termCounts: Record<CategoryId, number>
  totalCount: number
  activeFilter: FilterType // "all" | category-id
  onFilterChange: (filter: FilterType) => void
  variant?: 'desktop' | 'mobile'
}

export function Sidebar({ categories, termCounts, totalCount, activeFilter, onFilterChange, variant }: SidebarProps) {
  // Desktop Sidebar
  if (variant === 'desktop') {
    return (
      <aside className="w-[193px] shrink-0">
        <nav className="flex flex-col gap-2">
          {/* All option */}
          <button
            onClick={() => onFilterChange('all')}
            className="group relative text-left text-sm text-ink cursor-pointer"
          >
            {activeFilter === 'all' && (
              <motion.span
                layoutId="active-indicator"
                className="absolute left-0 top-0.5 bottom-0.5 w-1 bg-ink"
                transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
              />
            )}
            <span
              className={`inline-block transition-transform duration-200 ease-out ${
                activeFilter === 'all'
                  ? 'translate-x-2.5 font-medium'
                  : 'font-light group-hover:translate-x-2.5'
              }`}
            >
              All ({totalCount})
            </span>
          </button>

          {/* Categories */}
          {categories.map((category) => {
            const isActive = activeFilter === category.id
            const count = termCounts[category.id] || 0

            return (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className="group relative text-left text-sm text-ink cursor-pointer"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute left-0 top-0.5 bottom-0.5 w-1 bg-ink"
                    transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                  />
                )}
                <span
                  className={`inline-block transition-transform duration-200 ease-out ${
                    isActive
                      ? 'translate-x-2.5 font-medium'
                      : 'font-light group-hover:translate-x-2.5'
                  }`}
                >
                  {category.label} ({count})
                </span>
              </button>
            )
          })}
        </nav>
      </aside>
    )
  }

  // Mobile Pill Tabs
  if (variant === 'mobile') {
    return (
      <nav className="overflow-x-auto scrollbar-hide -mx-4 px-4 mb-6">
        <div className="flex gap-1.5 w-max">
          {/* All pill */}
          <button
            onClick={() => onFilterChange('all')}
            className={`shrink-0 px-2.5 py-1 text-sm border border-ink cursor-pointer transition-colors ${
              activeFilter === 'all'
                ? 'bg-ink text-cream font-medium'
                : 'bg-cream text-ink font-light'
            }`}
          >
            All ({totalCount})
          </button>

          {/* Category pills */}
          {categories.map((category) => {
            const isActive = activeFilter === category.id
            const count = termCounts[category.id] || 0

            return (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`shrink-0 px-2.5 py-1 text-sm border border-ink cursor-pointer transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-ink text-cream font-medium'
                    : 'bg-cream text-ink font-light'
                }`}
              >
                {category.label} ({count})
              </button>
            )
          })}
        </div>
      </nav>
    )
  }

  // Default: render both with responsive visibility
  return (
    <>
      {/* Desktop Sidebar - hidden on mobile */}
      <aside className="hidden md:block w-[193px] shrink-0">
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => onFilterChange('all')}
            className="group relative text-left text-sm text-ink cursor-pointer"
          >
            {activeFilter === 'all' && (
              <motion.span
                layoutId="active-indicator"
                className="absolute left-0 top-0.5 bottom-0.5 w-1 bg-ink"
                transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
              />
            )}
            <span
              className={`inline-block transition-transform duration-200 ease-out ${
                activeFilter === 'all'
                  ? 'translate-x-2.5 font-medium'
                  : 'font-light group-hover:translate-x-2.5'
              }`}
            >
              All ({totalCount})
            </span>
          </button>
          {categories.map((category) => {
            const isActive = activeFilter === category.id
            const count = termCounts[category.id] || 0
            return (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className="group relative text-left text-sm text-ink cursor-pointer"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute left-0 top-0.5 bottom-0.5 w-1 bg-ink"
                    transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                  />
                )}
                <span
                  className={`inline-block transition-transform duration-200 ease-out ${
                    isActive
                      ? 'translate-x-2.5 font-medium'
                      : 'font-light group-hover:translate-x-2.5'
                  }`}
                >
                  {category.label} ({count})
                </span>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Mobile Pill Tabs - hidden on desktop */}
      <nav className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 mb-6">
        <div className="flex gap-1.5 w-max">
          <button
            onClick={() => onFilterChange('all')}
            className={`shrink-0 px-2.5 py-1 text-sm border border-ink cursor-pointer transition-colors ${
              activeFilter === 'all'
                ? 'bg-ink text-cream font-medium'
                : 'bg-cream text-ink font-light'
            }`}
          >
            All ({totalCount})
          </button>
          {categories.map((category) => {
            const isActive = activeFilter === category.id
            const count = termCounts[category.id] || 0
            return (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`shrink-0 px-2.5 py-1 text-sm border border-ink cursor-pointer transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-ink text-cream font-medium'
                    : 'bg-cream text-ink font-light'
                }`}
              >
                {category.label} ({count})
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
