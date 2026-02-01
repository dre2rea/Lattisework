import { useMemo, useEffect } from 'react'
import { Header, Sidebar, Gallery, Lightbox, StructuredData, BackToTop } from './components'
import { useTerms } from './hooks/useTerms'
import { useImagePreload } from './hooks/useImagePreload'

function App() {
  // Reset scroll position on page load/refresh
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    // Force scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

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
    isInitialMount,
  } = useTerms()

  // Preload images only on initial load - skip for filter changes to prevent flicker
  const imageUrls = useMemo(() => galleryItems.map((item) => item.src), [galleryItems])
  const preloadReady = useImagePreload(imageUrls)
  const imagesReady = isInitialMount ? preloadReady : true

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
            imagesReady={imagesReady}
            isInitialMount={isInitialMount}
          />
        </main>
      </div>

      {!searchQuery && imagesReady && (
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

      {!isLightboxOpen && <BackToTop />}
    </div>
  )
}

export default App
