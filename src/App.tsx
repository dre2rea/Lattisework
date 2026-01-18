import { Header, Sidebar, Gallery, Lightbox } from './components'
import { useTerms } from './hooks/useTerms'

function App() {
  const {
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    galleryItems,
    selectedTerm,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
  } = useTerms()

  return (
    <div className="min-h-screen px-[30px] pb-[30px]">
      <Header onSearchSubmit={setSearchQuery} />

      <div className="flex gap-[56px]">
        {/* Sidebar */}
        <Sidebar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Main content */}
        <main className="flex-1">
          <Gallery
            items={galleryItems}
            onItemClick={openLightbox}
            searchQuery={searchQuery}
          />
        </main>
      </div>

      {!searchQuery && (
        <footer className="mt-[60px] text-sm text-ink text-right">
          Created by{' '}
          <a
            href="https://x.com/narie_wjlee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted transition-colors"
          >
            Wonjae
          </a>
        </footer>
      )}

      <Lightbox
        term={selectedTerm}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  )
}

export default App
