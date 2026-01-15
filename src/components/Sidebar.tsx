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
          className={`relative text-left text-sm transition-colors cursor-pointer ${
            activeFilter === 'all' ? 'text-ink font-medium' : 'text-ink hover:text-muted'
          }`}
        >
          {activeFilter === 'all' && (
            <span className="absolute -left-3 top-0 bottom-0 w-1 bg-ink" />
          )}
          All
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
              <div className="flex flex-col gap-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => onFilterChange(category.id)}
                    className={`relative text-left text-sm transition-colors cursor-pointer ${
                      activeFilter === category.id
                        ? 'text-ink font-medium'
                        : 'text-ink hover:text-muted'
                    }`}
                  >
                    {activeFilter === category.id && (
                      <span className="absolute -left-3 top-0 bottom-0 w-1 bg-ink" />
                    )}
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
