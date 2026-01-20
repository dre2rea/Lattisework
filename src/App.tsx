import { Header, Sidebar, Gallery, Lightbox, StructuredData } from './components'
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
    <div className="min-h-screen px-4 pb-6 md:px-[30px] md:pb-[30px] max-w-[1920px] mx-auto transition-[padding] duration-300 ease-out">
      <StructuredData />
      <h1 className="sr-only">Lattisework – Midjourney Visual Glossary</h1>
      <Header onSearchSubmit={setSearchQuery} />

      {/* Mobile pill tabs - rendered above gallery */}
      <div className="md:hidden">
        <Sidebar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          variant="mobile"
        />
      </div>

      <div className="md:flex md:gap-[56px] transition-[gap] duration-300 ease-out">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            variant="desktop"
          />
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <Gallery
            items={galleryItems}
            onItemClick={openLightbox}
            searchQuery={searchQuery}
          />
        </main>
      </div>

      {!searchQuery && (
        <footer className="mt-10 md:mt-[60px] text-sm text-ink text-right transition-[margin] duration-300 ease-out">
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
