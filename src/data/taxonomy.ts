import type { MetaSection, Category } from '../types'

// Meta-sections: Top-level groupings
export const metaSections: MetaSection[] = [
  {
    id: 'frame',
    label: 'FRAME',
    categories: ['camera-angles', 'composition'],
  },
  {
    id: 'light',
    label: 'LIGHT',
    categories: ['lighting-mood', 'optical-phenomena'],
  },
  {
    id: 'style',
    label: 'STYLE',
    categories: ['art-movement', 'printmaking', 'photo-effects', 'materials-textures'],
  },
]

// Categories: Nested under meta-sections
export const categories: Category[] = [
  // FRAME
  {
    id: 'camera-angles',
    label: 'Camera Angles',
    metaSection: 'frame',
    folderName: '1. Camera Angles',
  },
  {
    id: 'composition',
    label: 'Composition',
    metaSection: 'frame',
    folderName: '2. Composition',
  },
  // LIGHT
  {
    id: 'lighting-mood',
    label: 'Lighting & Mood',
    metaSection: 'light',
    folderName: '3. Lighting & Mood',
  },
  {
    id: 'optical-phenomena',
    label: 'Optical Phenomena',
    metaSection: 'light',
    folderName: '4. Optical Phenomena',
  },
  // STYLE
  {
    id: 'art-movement',
    label: 'Art Movement',
    metaSection: 'style',
    folderName: '5. Art Movement',
  },
  {
    id: 'printmaking',
    label: 'Printmaking',
    metaSection: 'style',
    folderName: '6. Printmaking',
  },
  {
    id: 'photo-effects',
    label: 'Photo Effects',
    metaSection: 'style',
    folderName: '7. Photo Effects',
  },
  {
    id: 'materials-textures',
    label: 'Materials & Textures',
    metaSection: 'style',
    folderName: '8. Materials & Textures',
  },
]

// Helper: Get category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((cat) => cat.id === id)
}

// Helper: Get categories by meta-section ID
export const getCategoriesByMetaSection = (metaSectionId: string): Category[] => {
  return categories.filter((cat) => cat.metaSection === metaSectionId)
}

// Helper: Get meta-section by ID
export const getMetaSectionById = (id: string): MetaSection | undefined => {
  return metaSections.find((ms) => ms.id === id)
}
