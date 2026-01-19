import { motion } from 'framer-motion'
import { categories } from '../data/taxonomy'

interface SidebarProps {
  activeFilter: string // "all" | category-id
  onFilterChange: (filter: string) => void
  variant?: 'desktop' | 'mobile'
}

export function Sidebar({ activeFilter, onFilterChange, variant }: SidebarProps) {
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
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span
              className={`inline-block transition-transform duration-200 ease-out ${
                activeFilter === 'all'
                  ? 'translate-x-2.5 font-bold'
                  : 'group-hover:translate-x-2.5'
              }`}
            >
              All
            </span>
          </button>

          {/* Categories */}
          {categories.map((category) => {
            const isActive = activeFilter === category.id

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
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span
                  className={`inline-block transition-transform duration-200 ease-out ${
                    isActive
                      ? 'translate-x-2.5 font-bold'
                      : 'group-hover:translate-x-2.5'
                  }`}
                >
                  {category.label}
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
                ? 'bg-ink text-cream font-bold'
                : 'bg-cream text-ink'
            }`}
          >
            All
          </button>

          {/* Category pills */}
          {categories.map((category) => {
            const isActive = activeFilter === category.id

            return (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`shrink-0 px-2.5 py-1 text-sm border border-ink cursor-pointer transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-ink text-cream font-bold'
                    : 'bg-cream text-ink'
                }`}
              >
                {category.label}
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
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span
              className={`inline-block transition-transform duration-200 ease-out ${
                activeFilter === 'all'
                  ? 'translate-x-2.5 font-bold'
                  : 'group-hover:translate-x-2.5'
              }`}
            >
              All
            </span>
          </button>
          {categories.map((category) => {
            const isActive = activeFilter === category.id
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
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span
                  className={`inline-block transition-transform duration-200 ease-out ${
                    isActive
                      ? 'translate-x-2.5 font-bold'
                      : 'group-hover:translate-x-2.5'
                  }`}
                >
                  {category.label}
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
                ? 'bg-ink text-cream font-bold'
                : 'bg-cream text-ink'
            }`}
          >
            All
          </button>
          {categories.map((category) => {
            const isActive = activeFilter === category.id
            return (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`shrink-0 px-2.5 py-1 text-sm border border-ink cursor-pointer transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-ink text-cream font-bold'
                    : 'bg-cream text-ink'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
