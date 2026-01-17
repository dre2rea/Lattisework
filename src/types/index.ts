// Meta-section groupings (FRAME, LIGHT, STYLE)
export interface MetaSection {
  id: string
  label: string // "FRAME", "LIGHT", "STYLE"
  categories: string[] // category IDs
}

// Category within a meta-section
export interface Category {
  id: string // "camera-angles"
  label: string // "Camera Angles"
  metaSection: string // "frame"
  folderName: string // "1. Camera Angles"
}

// Individual term with images
export interface Term {
  id: string // "caustics"
  label: string // "Caustics"
  description: string // Educational description
  category: string // "optical-phenomena"
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
