import { useState, useMemo, useCallback } from 'react'
import type { Term, GalleryItem, FilterType } from '../types'
import { terms, getTermsByCategory, getAllTermsSorted } from '../data/terms'

// Convert Term to GalleryItem for Lightbox compatibility
export function termToGalleryItem(term: Term): GalleryItem {
  return {
    id: term.id,
    src: term.images[0], // First image as thumbnail
    title: term.label,
    description: term.description,
    category: term.category,
  }
}

export function useTerms() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Track if user has interacted with filters (for animation differentiation)
  const [isInitialMount, setIsInitialMount] = useState(true)

  // Filter terms based on active category and search query
  const getFilteredTerms = (): Term[] => {
    // If there's a search query, filter all terms by the query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      return getAllTermsSorted().filter((term) =>
        term.label.toLowerCase().includes(query)
      )
    }

    // Otherwise, filter by category
    if (activeFilter === 'all') {
      return getAllTermsSorted()
    }
    return getTermsByCategory(activeFilter).sort((a, b) => a.label.localeCompare(b.label))
  }

  const filteredTerms = getFilteredTerms()

  // Convert filtered terms to GalleryItems for Gallery component
  const galleryItems = filteredTerms.map(termToGalleryItem)

  // Handle filter change - clears search query
  // Order matters: change data first, then animation state, to avoid intermediate renders
  const handleFilterChange = useCallback((filter: FilterType) => {
    setActiveFilter(filter)
    setSearchQuery('') // Clear search when changing filter
    setIsInitialMount(false)
  }, [])

  // Handle search - sets query and switches to "all"
  // Order matters: change data first, then animation state, to avoid intermediate renders
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    setActiveFilter('all') // Switch to "all" when searching
    setIsInitialMount(false)
  }, [])

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchQuery('')
  }, [])

  const openLightbox = useCallback((item: GalleryItem) => {
    // Find the original term by id
    const term = terms.find((t) => t.id === item.id)
    if (term) {
      setSelectedTerm(term)
      setIsLightboxOpen(true)
    }
  }, [])

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false)
  }, [])

  // Convert selected term to GalleryItem for Lightbox
  const selectedItem = useMemo(() => {
    return selectedTerm ? termToGalleryItem(selectedTerm) : null
  }, [selectedTerm])

  return {
    activeFilter,
    setActiveFilter: handleFilterChange,
    searchQuery,
    setSearchQuery: handleSearch,
    clearSearch,
    filteredTerms,
    galleryItems,
    selectedTerm,
    selectedItem,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    isInitialMount,
  }
}
