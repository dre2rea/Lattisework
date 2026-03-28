import { useState, useMemo, useCallback } from 'react'
import type { CategoryId, Term, GalleryItem, FilterType } from '../types'
import { terms, getTermsByCategory, getAllTermsSorted } from '../data/terms'
import { categories as taxonomyCategories } from '../data/taxonomy'

// Convert Term to GalleryItem for Lightbox compatibility
export function termToGalleryItem(term: Term): GalleryItem {
  return {
    id: term.id,
    src: term.images[0], // First image as thumbnail
    title: term.label,
    description: term.description,
    category: term.category,
    addedDate: term.addedDate,
  }
}

export function useTerms() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Track if user has interacted with filters (for animation differentiation)
  const [isInitialMount, setIsInitialMount] = useState(true)
  const allTerms = terms
  const categories = taxonomyCategories

  const termCounts = useMemo(() => {
    const counts = categories.reduce((acc, category) => {
      acc[category.id] = 0
      return acc
    }, {} as Record<CategoryId, number>)
    for (const term of allTerms) {
      counts[term.category] += 1
    }
    return counts
  }, [allTerms, categories])

  const totalCount = allTerms.length

  // Filter terms based on active category and search query
  const filteredTerms = useMemo((): Term[] => {
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
  }, [activeFilter, searchQuery])

  // Convert filtered terms to GalleryItems for Gallery component
  const galleryItems = useMemo(() => filteredTerms.map(termToGalleryItem), [filteredTerms])

  const getSuggestions = useCallback((query: string): Term[] => {
    if (!query.trim()) return []
    const normalizedQuery = query.toLowerCase()
    return allTerms
      .filter((term) => term.label.toLowerCase().includes(normalizedQuery))
      .slice(0, 5)
  }, [allTerms])

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
    const term = allTerms.find((t) => t.id === item.id)
    if (term) {
      setSelectedTerm(term)
      setIsLightboxOpen(true)
    }
  }, [allTerms])

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false)
  }, [])

  // Convert selected term to GalleryItem for Lightbox
  const selectedItem = useMemo(() => {
    return selectedTerm ? termToGalleryItem(selectedTerm) : null
  }, [selectedTerm])

  return {
    allTerms,
    categories,
    termCounts,
    totalCount,
    getSuggestions,
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
