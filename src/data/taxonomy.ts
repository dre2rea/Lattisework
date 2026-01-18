import type { Category } from '../types'

// Categories: Flat structure with 5 categories
export const categories: Category[] = [
  {
    id: 'framing-perspective',
    label: 'Framing & Perspective',
  },
  {
    id: 'lens-light',
    label: 'Lens & Light',
  },
  {
    id: 'art-movements',
    label: 'Art Movements',
  },
  {
    id: 'techniques',
    label: 'Techniques',
  },
  {
    id: 'materials-textures',
    label: 'Materials & Textures',
  },
]

// Helper: Get category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((cat) => cat.id === id)
}

// Helper: Get all categories
export const getAllCategories = (): Category[] => {
  return categories
}
