import type { Term } from '../types'

// Helper to generate placeholder image URLs using picsum.photos
const placeholder = (seed: string, index: number) =>
  `https://picsum.photos/seed/${seed}-${index}/800/600`

export const terms: Term[] = [
  // ============================================
  // CAMERA ANGLES (1. Camera Angles)
  // ============================================
  {
    id: 'birds-eye-view',
    label: "Bird's Eye View",
    description: 'A high-angle shot looking directly down from above, creating a map-like perspective.',
    category: 'camera-angles',
    images: [
      "/1. Camera Angles/Bird's eye view/bird's-eye-view-1.png",
      placeholder('birds-eye', 2),
      placeholder('birds-eye', 3),
      placeholder('birds-eye', 4),
    ],
  },
  {
    id: 'dutch-angle',
    label: 'Dutch Angle',
    description: 'A tilted camera angle that creates visual tension and disorientation.',
    category: 'camera-angles',
    images: [
      '/1. Camera Angles/Dutch angle/dutch-angle-1.png',
      placeholder('dutch-angle', 2),
      placeholder('dutch-angle', 3),
      placeholder('dutch-angle', 4),
      placeholder('dutch-angle', 5),
    ],
  },
  {
    id: 'over-the-shoulder-shot',
    label: 'Over-the-Shoulder Shot',
    description: 'A shot framed from behind a person, showing their perspective of a scene.',
    category: 'camera-angles',
    images: [
      '/1. Camera Angles/Over-the-shoulder shot/Over-the-shoulder-shot- 1.png',
      placeholder('ots-shot', 2),
      placeholder('ots-shot', 3),
      placeholder('ots-shot', 4),
    ],
  },
  {
    id: 'worms-eye-view',
    label: "Worm's Eye View",
    description: 'An extreme low-angle shot looking upward, making subjects appear powerful or towering.',
    category: 'camera-angles',
    images: [
      "/1. Camera Angles/Worm's eye view/worm's-eye-view-1.png",
      placeholder('worms-eye', 2),
      placeholder('worms-eye', 3),
      placeholder('worms-eye', 4),
      placeholder('worms-eye', 5),
    ],
  },

  // ============================================
  // COMPOSITION (2. Composition)
  // ============================================
  {
    id: 'leading-lines',
    label: 'Leading Lines',
    description: 'Lines within an image that guide the viewer\'s eye toward a focal point.',
    category: 'composition',
    images: [
      '/2. Composition/Leading lines/leading-lines-1.png',
      placeholder('leading-lines', 2),
      placeholder('leading-lines', 3),
      placeholder('leading-lines', 4),
    ],
  },
  {
    id: 'negative-space',
    label: 'Negative Space',
    description: 'Empty areas around the subject that create breathing room and visual balance.',
    category: 'composition',
    images: [
      '/2. Composition/Negative space/negative-space-1.png',
      placeholder('negative-space', 2),
      placeholder('negative-space', 3),
      placeholder('negative-space', 4),
      placeholder('negative-space', 5),
    ],
  },
  {
    id: 'rule-of-thirds',
    label: 'Rule of Thirds',
    description: 'Placing subjects along imaginary grid lines that divide the frame into nine equal parts.',
    category: 'composition',
    images: [
      '/2. Composition/Rule of thirds/rule-of-thirds-1.png',
      placeholder('rule-thirds', 2),
      placeholder('rule-thirds', 3),
      placeholder('rule-thirds', 4),
    ],
  },

  // ============================================
  // LIGHTING & MOOD (3. Lighting & Mood)
  // ============================================
  {
    id: 'backlighting',
    label: 'Backlighting',
    description: 'Light source positioned behind the subject, creating silhouettes or rim lighting.',
    category: 'lighting-mood',
    images: [
      '/3. Lighting & Mood/Backlighting/backlighting-1.jpg',
      placeholder('backlighting', 2),
      placeholder('backlighting', 3),
      placeholder('backlighting', 4),
      placeholder('backlighting', 5),
    ],
  },
  {
    id: 'chiaroscuro',
    label: 'Chiaroscuro',
    description: 'Strong contrast between light and dark areas, creating dramatic depth and volume.',
    category: 'lighting-mood',
    images: [
      '/3. Lighting & Mood/Chairoscuro/Chairoscuro-1.jpg',
      placeholder('chiaroscuro', 2),
      placeholder('chiaroscuro', 3),
      placeholder('chiaroscuro', 4),
    ],
  },
  {
    id: 'golden-hour',
    label: 'Golden Hour',
    description: 'Warm, soft lighting that occurs shortly after sunrise or before sunset.',
    category: 'lighting-mood',
    images: [
      '/3. Lighting & Mood/Golden hour/golden-hour-1.png',
      placeholder('golden-hour', 2),
      placeholder('golden-hour', 3),
      placeholder('golden-hour', 4),
      placeholder('golden-hour', 5),
      placeholder('golden-hour', 6),
    ],
  },
  {
    id: 'rembrandt-lighting',
    label: 'Rembrandt Lighting',
    description: 'Portrait lighting creating a triangle of light on the shadowed cheek.',
    category: 'lighting-mood',
    images: [
      '/3. Lighting & Mood/Rembrandt lighting/rembrandt-lighting-1.jpg',
      placeholder('rembrandt', 2),
      placeholder('rembrandt', 3),
      placeholder('rembrandt', 4),
    ],
  },

  // ============================================
  // OPTICAL PHENOMENA (4. Optical Phenomena)
  // ============================================
  {
    id: 'bokeh',
    label: 'Bokeh',
    description: 'Aesthetic quality of out-of-focus blur, often showing soft circular highlights.',
    category: 'optical-phenomena',
    images: [
      '/4. Optical Phenomena/Bokeh/bokeh-1.jpg',
      placeholder('bokeh', 2),
      placeholder('bokeh', 3),
      placeholder('bokeh', 4),
      placeholder('bokeh', 5),
    ],
  },
  {
    id: 'caustics',
    label: 'Caustics',
    description: 'Light patterns created by refraction through transparent or reflective surfaces.',
    category: 'optical-phenomena',
    images: [
      '/4. Optical Phenomena/Caustics/caustics-1.jpg',
      placeholder('caustics', 2),
      placeholder('caustics', 3),
      placeholder('caustics', 4),
    ],
  },
  {
    id: 'chromatic-aberration',
    label: 'Chromatic Aberration',
    description: 'Color fringing at edges caused by lens inability to focus all wavelengths.',
    category: 'optical-phenomena',
    images: [
      '/4. Optical Phenomena/Chromatic aberration/chromatic-aberration-1.jpeg',
      placeholder('chromatic', 2),
      placeholder('chromatic', 3),
      placeholder('chromatic', 4),
      placeholder('chromatic', 5),
    ],
  },
  {
    id: 'lens-flare',
    label: 'Lens Flare',
    description: 'Scattered light artifacts from bright sources hitting the camera lens.',
    category: 'optical-phenomena',
    images: [
      '/4. Optical Phenomena/Lens flare/lens-flare-1.jpg',
      placeholder('lens-flare', 2),
      placeholder('lens-flare', 3),
      placeholder('lens-flare', 4),
    ],
  },

  // ============================================
  // ART MOVEMENT (5. Art Movement)
  // ============================================
  {
    id: 'art-deco',
    label: 'Art Deco',
    description: 'Bold geometric patterns, rich colors, and luxurious ornamentation from the 1920s-30s.',
    category: 'art-movement',
    images: [
      '/5. Art Movement/Art Deco/art-deco.jpg',
      placeholder('art-deco', 2),
      placeholder('art-deco', 3),
      placeholder('art-deco', 4),
      placeholder('art-deco', 5),
    ],
  },
  {
    id: 'art-nouveau',
    label: 'Art Nouveau',
    description: 'Flowing organic lines, natural forms, and decorative elegance from the late 1800s.',
    category: 'art-movement',
    images: [
      '/5. Art Movement/Art Nouveau/art-nouveau.jpg',
      placeholder('art-nouveau', 2),
      placeholder('art-nouveau', 3),
      placeholder('art-nouveau', 4),
    ],
  },
  {
    id: 'bauhaus',
    label: 'Bauhaus',
    description: 'Functional modernist design emphasizing geometric shapes and primary colors.',
    category: 'art-movement',
    images: [
      '/5. Art Movement/Bauhaus/bauhaus-1.jpg',
      placeholder('bauhaus', 2),
      placeholder('bauhaus', 3),
      placeholder('bauhaus', 4),
      placeholder('bauhaus', 5),
      placeholder('bauhaus', 6),
    ],
  },
  {
    id: 'ukiyo-e',
    label: 'Ukiyo-e',
    description: 'Japanese woodblock print style with flat colors, bold outlines, and nature themes.',
    category: 'art-movement',
    images: [
      '/5. Art Movement/Ukiyo-e/ukiyo-e-1.jpg',
      placeholder('ukiyo-e', 2),
      placeholder('ukiyo-e', 3),
      placeholder('ukiyo-e', 4),
    ],
  },

  // ============================================
  // PRINTMAKING (6. Printmaking)
  // ============================================
  {
    id: 'linocut',
    label: 'Linocut',
    description: 'Relief printing from carved linoleum, producing bold contrasts and graphic shapes.',
    category: 'printmaking',
    images: [
      '/6. Printmaking/Linocut/linocut-1.jpg',
      placeholder('linocut', 2),
      placeholder('linocut', 3),
      placeholder('linocut', 4),
      placeholder('linocut', 5),
    ],
  },
  {
    id: 'risograph',
    label: 'Risograph',
    description: 'Stencil-based printing with vibrant, slightly misregistered overlapping colors.',
    category: 'printmaking',
    images: [
      '/6. Printmaking/Risograph/risograph-1.jpg',
      placeholder('risograph', 2),
      placeholder('risograph', 3),
      placeholder('risograph', 4),
    ],
  },
  {
    id: 'screenprint',
    label: 'Screenprint',
    description: 'Ink pushed through mesh stencils, creating flat colors and graphic quality.',
    category: 'printmaking',
    images: [
      '/6. Printmaking/Screenprint/screenprint-1.jpg',
      placeholder('screenprint', 2),
      placeholder('screenprint', 3),
      placeholder('screenprint', 4),
      placeholder('screenprint', 5),
    ],
  },
  {
    id: 'woodblock-print',
    label: 'Woodblock Print',
    description: 'Relief printing from carved wood blocks, showing wood grain texture.',
    category: 'printmaking',
    images: [
      '/6. Printmaking/Woodblock print/woodblock-print-1.jpg',
      placeholder('woodblock', 2),
      placeholder('woodblock', 3),
      placeholder('woodblock', 4),
    ],
  },

  // ============================================
  // PHOTO EFFECTS (7. Photo Effects)
  // ============================================
  {
    id: 'double-exposure',
    label: 'Double Exposure',
    description: 'Two or more images superimposed, blending subjects into dreamlike composites.',
    category: 'photo-effects',
    images: [
      '/7. Photo Effects/Double exposure/double-exposure-1.jpg',
      placeholder('double-exp', 2),
      placeholder('double-exp', 3),
      placeholder('double-exp', 4),
      placeholder('double-exp', 5),
    ],
  },
  {
    id: 'long-exposure',
    label: 'Long Exposure',
    description: 'Extended shutter time capturing motion as smooth trails or silky water.',
    category: 'photo-effects',
    images: [
      '/7. Photo Effects/Long exposure/long-exposure-1.jpg',
      placeholder('long-exp', 2),
      placeholder('long-exp', 3),
      placeholder('long-exp', 4),
    ],
  },
  {
    id: 'motion-blur',
    label: 'Motion Blur',
    description: 'Streaking effect from movement during exposure, conveying speed and action.',
    category: 'photo-effects',
    images: [
      '/7. Photo Effects/Motion blur/motion-blur-1.jpg',
      placeholder('motion-blur', 2),
      placeholder('motion-blur', 3),
      placeholder('motion-blur', 4),
      placeholder('motion-blur', 5),
      placeholder('motion-blur', 6),
    ],
  },
  {
    id: 'tilt-shift',
    label: 'Tilt-Shift',
    description: 'Selective focus creating miniature model effect or corrected perspective.',
    category: 'photo-effects',
    images: [
      '/7. Photo Effects/Tilt-shift/tilt-shift-1.jpg',
      placeholder('tilt-shift', 2),
      placeholder('tilt-shift', 3),
      placeholder('tilt-shift', 4),
    ],
  },

  // ============================================
  // MATERIALS & TEXTURES (8. Materials & Textures)
  // ============================================
  {
    id: 'brushed-metal',
    label: 'Brushed Metal',
    description: 'Satin finish with fine parallel lines from mechanical polishing.',
    category: 'materials-textures',
    images: [
      '/8. Materials & Textures/Brushed metal/brushed-metal-1.jpg',
      placeholder('brushed-metal', 2),
      placeholder('brushed-metal', 3),
      placeholder('brushed-metal', 4),
      placeholder('brushed-metal', 5),
    ],
  },
  {
    id: 'marble-veining',
    label: 'Marble Veining',
    description: 'Natural stone patterns with irregular veins and color variations.',
    category: 'materials-textures',
    images: [
      '/8. Materials & Textures/Marble veining/marble-veining-1.jpg',
      placeholder('marble', 2),
      placeholder('marble', 3),
      placeholder('marble', 4),
    ],
  },
  {
    id: 'weathered-wood',
    label: 'Weathered Wood',
    description: 'Aged timber showing grain, cracks, and natural patina from exposure.',
    category: 'materials-textures',
    images: [
      '/8. Materials & Textures/Weathered wood/weathered-wood-1.jpg',
      placeholder('weathered-wood', 2),
      placeholder('weathered-wood', 3),
      placeholder('weathered-wood', 4),
      placeholder('weathered-wood', 5),
    ],
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
