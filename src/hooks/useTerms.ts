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
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Filter terms based on active category
  const filteredTerms = useMemo(() => {
    if (activeFilter === 'all') {
      return getAllTermsSorted()
    }
    return getTermsByCategory(activeFilter)
  }, [activeFilter])

  // Convert filtered terms to GalleryItems for Gallery component
  const galleryItems = useMemo(() => {
    return filteredTerms.map(termToGalleryItem)
  }, [filteredTerms])

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
    setActiveFilter,
    filteredTerms,
    galleryItems,
    selectedTerm,
    selectedItem,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
  }
}
