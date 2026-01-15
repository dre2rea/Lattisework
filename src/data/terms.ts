import type { Term } from '../types'

export const terms: Term[] = [
  // ============================================
  // CAMERA ANGLES (1. Camera Angles)
  // ============================================
  {
    id: 'birds-eye-view',
    label: "Bird's Eye View",
    description: 'A high-angle shot looking directly down from above, creating a map-like perspective.',
    category: 'camera-angles',
    images: ["/1. Camera Angles/Bird's eye view/bird's-eye-view-1.png"],
  },
  {
    id: 'dutch-angle',
    label: 'Dutch Angle',
    description: 'A tilted camera angle that creates visual tension and disorientation.',
    category: 'camera-angles',
    images: ['/1. Camera Angles/Dutch angle/dutch-angle-1.png'],
  },
  {
    id: 'over-the-shoulder-shot',
    label: 'Over-the-Shoulder Shot',
    description: 'A shot framed from behind a person, showing their perspective of a scene.',
    category: 'camera-angles',
    images: ['/1. Camera Angles/Over-the-shoulder shot/Over-the-shoulder-shot- 1.png'],
  },
  {
    id: 'worms-eye-view',
    label: "Worm's Eye View",
    description: 'An extreme low-angle shot looking upward, making subjects appear powerful or towering.',
    category: 'camera-angles',
    images: ["/1. Camera Angles/Worm's eye view/worm's-eye-view-1.png"],
  },

  // ============================================
  // COMPOSITION (2. Composition)
  // ============================================
  {
    id: 'leading-lines',
    label: 'Leading Lines',
    description: 'Lines within an image that guide the viewer\'s eye toward a focal point.',
    category: 'composition',
    images: ['/2. Composition/Leading lines/leading-lines-1.png'],
  },
  {
    id: 'negative-space',
    label: 'Negative Space',
    description: 'Empty areas around the subject that create breathing room and visual balance.',
    category: 'composition',
    images: ['/2. Composition/Negative space/negative-space-1.png'],
  },
  {
    id: 'rule-of-thirds',
    label: 'Rule of Thirds',
    description: 'Placing subjects along imaginary grid lines that divide the frame into nine equal parts.',
    category: 'composition',
    images: ['/2. Composition/Rule of thirds/rule-of-thirds-1.png'],
  },

  // ============================================
  // LIGHTING & MOOD (3. Lighting & Mood)
  // ============================================
  {
    id: 'backlighting',
    label: 'Backlighting',
    description: 'Light source positioned behind the subject, creating silhouettes or rim lighting.',
    category: 'lighting-mood',
    images: ['/3. Lighting & Mood/Backlighting/backlighting-1.jpg'],
  },
  {
    id: 'chiaroscuro',
    label: 'Chiaroscuro',
    description: 'Strong contrast between light and dark areas, creating dramatic depth and volume.',
    category: 'lighting-mood',
    images: ['/3. Lighting & Mood/Chairoscuro/Chairoscuro-1.jpg'],
  },
  {
    id: 'golden-hour',
    label: 'Golden Hour',
    description: 'Warm, soft lighting that occurs shortly after sunrise or before sunset.',
    category: 'lighting-mood',
    images: ['/3. Lighting & Mood/Golden hour/golden-hour-1.png'],
  },
  {
    id: 'rembrandt-lighting',
    label: 'Rembrandt Lighting',
    description: 'Portrait lighting creating a triangle of light on the shadowed cheek.',
    category: 'lighting-mood',
    images: ['/3. Lighting & Mood/Rembrandt lighting/rembrandt-lighting-1.jpg'],
  },

  // ============================================
  // OPTICAL PHENOMENA (4. Optical Phenomena)
  // ============================================
  {
    id: 'bokeh',
    label: 'Bokeh',
    description: 'Aesthetic quality of out-of-focus blur, often showing soft circular highlights.',
    category: 'optical-phenomena',
    images: ['/4. Optical Phenomena/Bokeh/bokeh-1.jpg'],
  },
  {
    id: 'caustics',
    label: 'Caustics',
    description: 'Light patterns created by refraction through transparent or reflective surfaces.',
    category: 'optical-phenomena',
    images: ['/4. Optical Phenomena/Caustics/caustics-1.jpg'],
  },
  {
    id: 'chromatic-aberration',
    label: 'Chromatic Aberration',
    description: 'Color fringing at edges caused by lens inability to focus all wavelengths.',
    category: 'optical-phenomena',
    images: ['/4. Optical Phenomena/Chromatic aberration/chromatic-aberration-1.jpeg'],
  },
  {
    id: 'lens-flare',
    label: 'Lens Flare',
    description: 'Scattered light artifacts from bright sources hitting the camera lens.',
    category: 'optical-phenomena',
    images: ['/4. Optical Phenomena/Lens flare/lens-flare-1.jpg'],
  },

  // ============================================
  // ART MOVEMENT (5. Art Movement)
  // ============================================
  {
    id: 'art-deco',
    label: 'Art Deco',
    description: 'Bold geometric patterns, rich colors, and luxurious ornamentation from the 1920s-30s.',
    category: 'art-movement',
    images: ['/5. Art Movement/Art Deco/art-deco.jpg'],
  },
  {
    id: 'art-nouveau',
    label: 'Art Nouveau',
    description: 'Flowing organic lines, natural forms, and decorative elegance from the late 1800s.',
    category: 'art-movement',
    images: ['/5. Art Movement/Art Nouveau/art-nouveau.jpg'],
  },
  {
    id: 'bauhaus',
    label: 'Bauhaus',
    description: 'Functional modernist design emphasizing geometric shapes and primary colors.',
    category: 'art-movement',
    images: ['/5. Art Movement/Bauhaus/bauhaus-1.jpg'],
  },
  {
    id: 'ukiyo-e',
    label: 'Ukiyo-e',
    description: 'Japanese woodblock print style with flat colors, bold outlines, and nature themes.',
    category: 'art-movement',
    images: ['/5. Art Movement/Ukiyo-e/ukiyo-e-1.jpg'],
  },

  // ============================================
  // PRINTMAKING (6. Printmaking)
  // ============================================
  {
    id: 'linocut',
    label: 'Linocut',
    description: 'Relief printing from carved linoleum, producing bold contrasts and graphic shapes.',
    category: 'printmaking',
    images: ['/6. Printmaking/Linocut/linocut-1.jpg'],
  },
  {
    id: 'risograph',
    label: 'Risograph',
    description: 'Stencil-based printing with vibrant, slightly misregistered overlapping colors.',
    category: 'printmaking',
    images: ['/6. Printmaking/Risograph/risograph-1.jpg'],
  },
  {
    id: 'screenprint',
    label: 'Screenprint',
    description: 'Ink pushed through mesh stencils, creating flat colors and graphic quality.',
    category: 'printmaking',
    images: ['/6. Printmaking/Screenprint/screenprint-1.jpg'],
  },
  {
    id: 'woodblock-print',
    label: 'Woodblock Print',
    description: 'Relief printing from carved wood blocks, showing wood grain texture.',
    category: 'printmaking',
    images: ['/6. Printmaking/Woodblock print/woodblock-print-1.jpg'],
  },

  // ============================================
  // PHOTO EFFECTS (7. Photo Effects)
  // ============================================
  {
    id: 'double-exposure',
    label: 'Double Exposure',
    description: 'Two or more images superimposed, blending subjects into dreamlike composites.',
    category: 'photo-effects',
    images: ['/7. Photo Effects/Double exposure/double-exposure-1.jpg'],
  },
  {
    id: 'long-exposure',
    label: 'Long Exposure',
    description: 'Extended shutter time capturing motion as smooth trails or silky water.',
    category: 'photo-effects',
    images: ['/7. Photo Effects/Long exposure/long-exposure-1.jpg'],
  },
  {
    id: 'motion-blur',
    label: 'Motion Blur',
    description: 'Streaking effect from movement during exposure, conveying speed and action.',
    category: 'photo-effects',
    images: ['/7. Photo Effects/Motion blur/motion-blur-1.jpg'],
  },
  {
    id: 'tilt-shift',
    label: 'Tilt-Shift',
    description: 'Selective focus creating miniature model effect or corrected perspective.',
    category: 'photo-effects',
    images: ['/7. Photo Effects/Tilt-shift/tilt-shift-1.jpg'],
  },

  // ============================================
  // MATERIALS & TEXTURES (8. Materials & Textures)
  // ============================================
  {
    id: 'brushed-metal',
    label: 'Brushed Metal',
    description: 'Satin finish with fine parallel lines from mechanical polishing.',
    category: 'materials-textures',
    images: ['/8. Materials & Textures/Brushed metal/brushed-metal-1.jpg'],
  },
  {
    id: 'marble-veining',
    label: 'Marble Veining',
    description: 'Natural stone patterns with irregular veins and color variations.',
    category: 'materials-textures',
    images: ['/8. Materials & Textures/Marble veining/marble-veining-1.jpg'],
  },
  {
    id: 'weathered-wood',
    label: 'Weathered Wood',
    description: 'Aged timber showing grain, cracks, and natural patina from exposure.',
    category: 'materials-textures',
    images: ['/8. Materials & Textures/Weathered wood/weathered-wood-1.jpg'],
  },
]

// Helper: Get terms by category ID
export const getTermsByCategory = (categoryId: string): Term[] => {
  return terms.filter((term) => term.category === categoryId)
}

// Helper: Get all terms sorted alphabetically
export const getAllTermsSorted = (): Term[] => {
  return [...terms].sort((a, b) => a.label.localeCompare(b.label))
}

// Helper: Get term by ID
export const getTermById = (id: string): Term | undefined => {
  return terms.find((term) => term.id === id)
}
