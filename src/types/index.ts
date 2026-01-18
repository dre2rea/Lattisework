// Category definition
export interface Category {
  id: string // "framing-perspective"
  label: string // "Framing & Perspective"
}

// Individual term with images
export interface Term {
  id: string // "caustics"
  label: string // "Caustics"
  description: string // Educational description
  category: string // "lens-light"
  images: string[] // ["/4. Optical Phenomena/Caustics/caustics-1.jpg", ...]
}

// Legacy interface for Lightbox compatibility
export interface GalleryItem {
  id: string
  src: string
  title: string
  description: string
  category: string
}

// Filter type for navigation
export type FilterType = 'all' | string
