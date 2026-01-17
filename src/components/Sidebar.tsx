import { motion } from 'framer-motion'
import { metaSections, getCategoriesByMetaSection } from '../data/taxonomy'

interface SidebarProps {
  activeFilter: string // "all" | category-id
  onFilterChange: (filter: string) => void
}

export function Sidebar({ activeFilter, onFilterChange }: SidebarProps) {
  return (
    <aside className="w-[193px] shrink-0">
      <nav className="flex flex-col gap-6">
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

        {/* Meta-sections with categories */}
        {metaSections.map((metaSection) => {
          const categories = getCategoriesByMetaSection(metaSection.id)

          return (
            <div key={metaSection.id} className="flex flex-col gap-2">
              {/* Meta-section label (non-clickable) */}
              <span className="text-xs text-muted uppercase tracking-wider">
                {metaSection.label}
              </span>

              {/* Categories */}
              <div className="flex flex-col gap-2">
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
              </div>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
