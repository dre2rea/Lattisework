import type { Term } from '../types'

// Helper to generate placeholder image URLs using picsum.photos
const placeholder = (seed: string, index: number) =>
  `https://picsum.photos/seed/${seed}-${index}/800/600`

export const terms: Term[] = [
  // ============================================
  // FRAMING & PERSPECTIVE
  // ============================================
  {
    id: 'birds-eye-view',
    label: "Bird's Eye View",
    description: 'A high-angle shot looking directly down from above, creating a map-like perspective.',
    category: 'framing-perspective',
    images: [
      "/framing-perspective/Bird's eye view/bird's-eye-view-1.png",
      "/framing-perspective/Bird's eye view/bird's-eye-view-2.jpg",
      "/framing-perspective/Bird's eye view/bird's-eye-view-3..png",
      "/framing-perspective/Bird's eye view/bird's-eye-view-4.JPEG",
    ],
  },
  {
    id: 'dutch-angle',
    label: 'Dutch Angle',
    description: 'A tilted camera angle that creates visual tension and disorientation.',
    category: 'framing-perspective',
    images: [
      '/framing-perspective/Dutch angle/dutch-angle-1.png',
      '/framing-perspective/Dutch angle/dutch-angle-2.png',
      '/framing-perspective/Dutch angle/dutch-angle-3.png',
    ],
  },
  {
    id: 'over-the-shoulder-shot',
    label: 'Over-the-Shoulder Shot',
    description: 'A shot framed from behind a person, showing their perspective of a scene.',
    category: 'framing-perspective',
    images: [
      '/framing-perspective/Over-the-shoulder shot/Over-the-shoulder-shot- 1.png',
      placeholder('ots-shot', 2),
    ],
  },
  {
    id: 'worms-eye-view',
    label: "Worm's Eye View",
    description: 'An extreme low-angle shot looking upward, making subjects appear powerful or towering.',
    category: 'framing-perspective',
    images: [
      "/framing-perspective/Worm's eye view/worm's-eye-view-1.png",
      "/framing-perspective/Worm's eye view/worm's-eye-view-2.png",
      "/framing-perspective/Worm's eye view/worm's-eye-view-3.png",
    ],
  },
  {
    id: 'leading-lines',
    label: 'Leading Lines',
    description: 'Lines within an image that guide the viewer\'s eye toward a focal point.',
    category: 'framing-perspective',
    images: [
      '/framing-perspective/Leading lines/leading-lines-1.png',
      '/framing-perspective/Leading lines/leading-lines-2.png',
      '/framing-perspective/Leading lines/leading-lines-3.png',
    ],
  },
  {
    id: 'negative-space',
    label: 'Negative Space',
    description: 'Empty areas around the subject that create breathing room and visual balance.',
    category: 'framing-perspective',
    images: [
      '/framing-perspective/Negative space/negative-space-1.png',
      placeholder('negative-space', 2),
    ],
  },
  {
    id: 'rule-of-thirds',
    label: 'Rule of Thirds',
    description: 'Placing subjects along imaginary grid lines that divide the frame into nine equal parts.',
    category: 'framing-perspective',
    images: [
      '/framing-perspective/Rule of thirds/rule-of-thirds-1.png',
      '/framing-perspective/Rule of thirds/rule-of-thirds-2.png',
    ],
  },

  // ============================================
  // LENS & LIGHT
  // ============================================
  {
    id: 'backlighting',
    label: 'Backlighting',
    description: 'Light source positioned behind the subject, creating silhouettes or rim lighting.',
    category: 'lens-light',
    images: [
      '/lens-light/Backlighting/backlighting-1.png',
      '/lens-light/Backlighting/backlighting-2.jpg',
    ],
  },
  {
    id: 'chiaroscuro',
    label: 'Chiaroscuro',
    description: 'Strong contrast between light and dark areas, creating dramatic depth and volume.',
    category: 'lens-light',
    images: [
      '/lens-light/Chiaroscuro/Chiaroscuro-1.png',
      '/lens-light/Chiaroscuro/Chiaroscuro-2.png',
      '/lens-light/Chiaroscuro/Chiaroscuro-3.png',
    ],
  },
  {
    id: 'crepuscular-rays',
    label: 'Crepuscular Rays',
    description: 'Sunbeams streaming through gaps in clouds or foliage, creating dramatic light shafts.',
    category: 'lens-light',
    images: [
      '/lens-light/Crepuscular Rays/Crepuscular-rays-1.jpg',
      '/lens-light/Crepuscular Rays/Crepuscular-rays-2.png',
    ],
  },
  {
    id: 'gobo-shadow',
    label: 'Gobo Shadow',
    description: 'Patterned shadows created by placing a cutout template in front of a light source.',
    category: 'lens-light',
    images: [
      '/lens-light/Gobo Shadow/gobo-shadow-1.png',
      '/lens-light/Gobo Shadow/gobo-shadow-2.png',
    ],
  },
  {
    id: 'rim-lighting',
    label: 'Rim Lighting',
    description: 'Light that outlines the edge of a subject, separating them from the background.',
    category: 'lens-light',
    images: [
      '/lens-light/Rim Lighting/rim-lighting-1.png',
      placeholder('rim-lighting', 2),
    ],
  },
  {
    id: 'volumetric-light',
    label: 'Volumetric Light',
    description: 'Visible light beams caused by particles in the air like dust, fog, or smoke.',
    category: 'lens-light',
    images: [
      '/lens-light/Volumetric Light/volumetric-light-1.png',
      placeholder('volumetric', 2),
    ],
  },
  {
    id: 'bokeh',
    label: 'Bokeh',
    description: 'Aesthetic quality of out-of-focus blur, often showing soft circular highlights.',
    category: 'lens-light',
    images: [
      '/lens-light/Bokeh/bokeh-1.jpg',
      '/lens-light/Bokeh/bokeh-2.png',
      '/lens-light/Bokeh/bokeh-3.png',
    ],
  },
  {
    id: 'caustics',
    label: 'Caustics',
    description: 'Light patterns created by refraction through transparent or reflective surfaces.',
    category: 'lens-light',
    images: [
      '/lens-light/Caustics/caustics-1.jpg',
      '/lens-light/Caustics/caustics-2.png',
      '/lens-light/Caustics/caustics-3.png',
    ],
  },
  {
    id: 'chromatic-aberration',
    label: 'Chromatic Aberration',
    description: 'Color fringing at edges caused by lens inability to focus all wavelengths.',
    category: 'lens-light',
    images: [
      '/lens-light/Chromatic aberration/chromatic-aberration-1.jpeg',
      placeholder('chromatic', 2),
    ],
  },
  {
    id: 'lens-flare',
    label: 'Lens Flare',
    description: 'Scattered light artifacts from bright sources hitting the camera lens.',
    category: 'lens-light',
    images: [
      '/lens-light/Lens flare/lens-flare-1.jpg',
      placeholder('lens-flare', 2),
    ],
  },

  // ============================================
  // ART MOVEMENTS
  // ============================================
  {
    id: 'art-deco',
    label: 'Art Deco',
    description: 'Bold geometric patterns, rich colors, and luxurious ornamentation from the 1920s-30s.',
    category: 'art-movements',
    images: [
      '/art-movements/Art Deco/art-deco.jpg',
      placeholder('art-deco', 2),
    ],
  },
  {
    id: 'art-nouveau',
    label: 'Art Nouveau',
    description: 'Flowing organic lines, natural forms, and decorative elegance from the late 1800s.',
    category: 'art-movements',
    images: [
      '/art-movements/Art Nouveau/art-nouveau.jpg',
      placeholder('art-nouveau', 2),
    ],
  },
  {
    id: 'bauhaus',
    label: 'Bauhaus',
    description: 'Functional modernist design emphasizing geometric shapes and primary colors.',
    category: 'art-movements',
    images: [
      '/art-movements/Bauhaus/bauhaus-1.jpg',
      placeholder('bauhaus', 2),
    ],
  },
  {
    id: 'ukiyo-e',
    label: 'Ukiyo-e',
    description: 'Japanese woodblock print style with flat colors, bold outlines, and nature themes.',
    category: 'art-movements',
    images: [
      '/art-movements/Ukiyo-e/ukiyo-e-1.jpg',
      placeholder('ukiyo-e', 2),
    ],
  },

  // ============================================
  // TECHNIQUES
  // ============================================
  {
    id: 'linocut',
    label: 'Linocut',
    description: 'Relief printing from carved linoleum, producing bold contrasts and graphic shapes.',
    category: 'techniques',
    images: [
      '/techniques/Linocut/linocut-1.jpg',
      placeholder('linocut', 2),
    ],
  },
  {
    id: 'risograph',
    label: 'Risograph',
    description: 'Stencil-based printing with vibrant, slightly misregistered overlapping colors.',
    category: 'techniques',
    images: [
      '/techniques/Risograph/risograph-1.jpg',
      placeholder('risograph', 2),
    ],
  },
  {
    id: 'screenprint',
    label: 'Screenprint',
    description: 'Ink pushed through mesh stencils, creating flat colors and graphic quality.',
    category: 'techniques',
    images: [
      '/techniques/Screenprint/screenprint-1.jpg',
      placeholder('screenprint', 2),
    ],
  },
  {
    id: 'woodblock-print',
    label: 'Woodblock Print',
    description: 'Relief printing from carved wood blocks, showing wood grain texture.',
    category: 'techniques',
    images: [
      '/techniques/Woodblock print/woodblock-print-1.jpg',
      placeholder('woodblock', 2),
    ],
  },
  {
    id: 'double-exposure',
    label: 'Double Exposure',
    description: 'Two or more images superimposed, blending subjects into dreamlike composites.',
    category: 'techniques',
    images: [
      '/techniques/Double exposure/double-exposure-1.jpg',
      placeholder('double-exp', 2),
    ],
  },
  {
    id: 'long-exposure',
    label: 'Long Exposure',
    description: 'Extended shutter time capturing motion as smooth trails or silky water.',
    category: 'techniques',
    images: [
      '/techniques/Long exposure/long-exposure-1.jpg',
      placeholder('long-exp', 2),
    ],
  },
  {
    id: 'motion-blur',
    label: 'Motion Blur',
    description: 'Streaking effect from movement during exposure, conveying speed and action.',
    category: 'techniques',
    images: [
      '/techniques/Motion blur/motion-blur-1.jpg',
      '/techniques/Motion blur/motion-blur-2.png',
    ],
  },
  {
    id: 'tilt-shift',
    label: 'Tilt-Shift',
    description: 'Selective focus creating miniature model effect or corrected perspective.',
    category: 'techniques',
    images: [
      '/techniques/Tilt-shift/tilt-shift-1.jpg',
      placeholder('tilt-shift', 2),
    ],
  },

  // ============================================
  // MATERIALS & TEXTURES
  // ============================================
  {
    id: 'brushed-metal',
    label: 'Brushed Metal',
    description: 'Satin finish with fine parallel lines from mechanical polishing.',
    category: 'materials-textures',
    images: [
      '/materials-textures/Brushed metal/brushed-metal-1.jpg',
      placeholder('brushed-metal', 2),
    ],
  },
  {
    id: 'marble-veining',
    label: 'Marble Veining',
    description: 'Natural stone patterns with irregular veins and color variations.',
    category: 'materials-textures',
    images: [
      '/materials-textures/Marble veining/marble-veining-1.jpg',
      placeholder('marble', 2),
    ],
  },
  {
    id: 'weathered-wood',
    label: 'Weathered Wood',
    description: 'Aged timber showing grain, cracks, and natural patina from exposure.',
    category: 'materials-textures',
    images: [
      '/materials-textures/Weathered wood/weathered-wood-1.jpg',
      placeholder('weathered-wood', 2),
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
