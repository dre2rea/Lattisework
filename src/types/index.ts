export const CATEGORY_IDS = [
  'framing-perspective',
  'lens-light',
  'art-movements',
  'techniques',
  'materials-textures',
] as const

export type CategoryId = (typeof CATEGORY_IDS)[number]
export type FilterType = 'all' | CategoryId

// Category definition
export interface Category {
  id: CategoryId // "framing-perspective"
  label: string // "Framing & Perspective"
}

// Individual term with images
export interface Term {
  id: string // "caustics"
  label: string // "Caustics"
  description: string // Educational description
  category: CategoryId // "lens-light"
  images: string[] // ["/4. Optical Phenomena/Caustics/caustics-1.jpg", ...]
  addedDate?: string // ISO date string, e.g. "2026-02-13"
}

// Legacy interface for Lightbox compatibility
export interface GalleryItem {
  id: string
  src: string
  title: string
  description: string
  category: CategoryId
  addedDate?: string // ISO date string, e.g. "2026-02-13"
}
