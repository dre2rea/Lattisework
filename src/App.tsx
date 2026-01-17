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
    <div className="min-h-screen px-[30px] pb-10">
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

      <Lightbox
        term={selectedTerm}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  )
}

export default App
