import type { Term } from '../types'

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
      "/1-framing-perspective/Bird's eye view/bird's-eye-view-1.png",
      "/1-framing-perspective/Bird's eye view/bird's-eye-view-2.jpg",
      "/1-framing-perspective/Bird's eye view/bird's-eye-view-3.jpg",
      "/1-framing-perspective/Bird's eye view/bird's-eye-view-4.png",
    ],
  },
  {
    id: 'dutch-angle',
    label: 'Dutch Angle',
    description: 'A tilted camera angle that creates visual tension and disorientation.',
    category: 'framing-perspective',
    images: [
      '/1-framing-perspective/Dutch angle/dutch-angle-1.png',
      '/1-framing-perspective/Dutch angle/dutch-angle-2.png',
      '/1-framing-perspective/Dutch angle/dutch-angle-3.png',
    ],
  },
  {
    id: 'isometric',
    label: 'Isometric',
    description: 'A method of visual representation where three-dimensional objects are drawn with equal angles between axes.',
    category: 'framing-perspective',
    images: [
      '/1-framing-perspective/Isometric/isometric-1.jpg',
      '/1-framing-perspective/Isometric/isometric-2.jpg',
      '/1-framing-perspective/Isometric/isometric-3.jpg',
    ],
  },
  {
    id: 'leading-lines',
    label: 'Leading Lines',
    description: "Lines within an image that guide the viewer's eye toward a focal point.",
    category: 'framing-perspective',
    images: [
      '/1-framing-perspective/Leading lines/leading-lines-1.png',
      '/1-framing-perspective/Leading lines/leading-lines-2.png',
      '/1-framing-perspective/Leading lines/leading-lines-3.png',
    ],
  },
  {
    id: 'rule-of-thirds',
    label: 'Rule of Thirds',
    description: 'Placing subjects along imaginary grid lines that divide the frame into nine equal parts.',
    category: 'framing-perspective',
    images: [
      '/1-framing-perspective/Rule of thirds/rule-of-thirds-1.png',
      '/1-framing-perspective/Rule of thirds/rule-of-thirds-2.png',
    ],
  },
  {
    id: 'tilt-shift',
    label: 'Tilt-Shift',
    description: 'Selective focus creating miniature model effect or corrected perspective.',
    category: 'framing-perspective',
    images: [
      '/1-framing-perspective/Tilt-shift/tilt-shift-2.jpg',
    ],
  },
  {
    id: 'worms-eye-view',
    label: "Worm's Eye View",
    description: 'An extreme low-angle shot looking upward, making subjects appear powerful or towering.',
    category: 'framing-perspective',
    images: [
      "/1-framing-perspective/Worm's eye view/worm's-eye-view-1.png",
      "/1-framing-perspective/Worm's eye view/worm's-eye-view-2.png",
      "/1-framing-perspective/Worm's eye view/worm's-eye-view-3.png",
    ],
  },
  {
    id: 'cutaway',
    label: 'Cutaway',
    description: 'A view showing the interior of an object by removing a section of the exterior.',
    category: 'framing-perspective',
    images: [
      '/1-framing-perspective/Cutaway/cutaway-1.jpg',
      '/1-framing-perspective/Cutaway/cutaway-2.jpg',
      '/1-framing-perspective/Cutaway/cutaway-3.jpeg',
      '/1-framing-perspective/Cutaway/cutaway-4.jpg',
      '/1-framing-perspective/Cutaway/cutaway-5.jpeg',
    ],
  },
  {
    id: 'diptych',
    label: 'Diptych',
    description: 'A work of art consisting of two panels or sections, often hinged together or displayed side by side.',
    category: 'framing-perspective',
    images: [
      '/1-framing-perspective/Diptych/diptych-1.jpg',
      '/1-framing-perspective/Diptych/diptych-2.jpeg',
    ],
  },
  {
    id: 'flat-lay',
    label: 'Flat-Lay',
    description: 'A photograph taken from directly above, with objects arranged on a flat surface.',
    category: 'framing-perspective',
    images: [
      '/1-framing-perspective/Flat-lay/flat-lay-1.jpeg',
      '/1-framing-perspective/Flat-lay/flat-lay-2.jpeg',
      '/1-framing-perspective/Flat-lay/flat-lay-3.jpg',
    ],
  },
  {
    id: 'orthographic',
    label: 'Orthographic',
    description: 'A projection method showing objects without perspective distortion, used in technical drawings.',
    category: 'framing-perspective',
    images: [
      '/1-framing-perspective/Orthographic/orthographic-1.jpg',
      '/1-framing-perspective/Orthographic/orthographic-2.jpg',
      '/1-framing-perspective/Orthographic/orthographic-3.jpg',
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
      '/2-lens-light/Backlighting/backlighting-1.png',
      '/2-lens-light/Backlighting/backlighting-2.jpg',
    ],
  },
  {
    id: 'bokeh',
    label: 'Bokeh',
    description: 'Aesthetic quality of out-of-focus blur, often showing soft circular highlights.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Bokeh/bokeh-2.png',
      '/2-lens-light/Bokeh/bokeh-3.png',
    ],
  },
  {
    id: 'caustics',
    label: 'Caustics',
    description: 'Light patterns created by refraction through transparent or reflective surfaces.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Caustics/caustics-1.jpg',
      '/2-lens-light/Caustics/caustics-2.png',
      '/2-lens-light/Caustics/caustics-3.png',
    ],
  },
  {
    id: 'chiaroscuro',
    label: 'Chiaroscuro',
    description: 'Strong contrast between light and dark areas, creating dramatic depth and volume.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Chiaroscuro/Chiaroscuro-1.png',
      '/2-lens-light/Chiaroscuro/Chiaroscuro-2.png',
      '/2-lens-light/Chiaroscuro/Chiaroscuro-3.png',
    ],
  },
  {
    id: 'chromatic-aberration',
    label: 'Chromatic Aberration',
    description: 'Color fringing at edges caused by lens inability to focus all wavelengths.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Chromatic aberration/chromatic-aberration-1.png',
      '/2-lens-light/Chromatic aberration/chromatic-aberration-2.png',
      '/2-lens-light/Chromatic aberration/chromatic-aberration-3.jpg',
    ],
  },
  {
    id: 'crepuscular-rays',
    label: 'Crepuscular Rays',
    description: 'Sunbeams streaming through gaps in clouds or foliage, creating dramatic light shafts.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Crepuscular Rays/Crepuscular-rays-1.png',
      '/2-lens-light/Crepuscular Rays/Crepuscular-rays-2.png',
    ],
  },
  {
    id: 'gobo-shadow',
    label: 'Gobo Shadow',
    description: 'Patterned shadows created by placing a cutout template in front of a light source.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Gobo Shadow/gobo-shadow-1.png',
      '/2-lens-light/Gobo Shadow/gobo-shadow-2.png',
    ],
  },
  {
    id: 'kaleidoscope',
    label: 'Kaleidoscope',
    description: 'Symmetrical patterns created by mirrors reflecting colorful objects or light.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Kaleidoscope/kaleidoscope-1.png',
      '/2-lens-light/Kaleidoscope/kaleidoscope-2.png',
    ],
  },
  {
    id: 'lens-flare',
    label: 'Lens Flare',
    description: 'Scattered light artifacts from bright sources hitting the camera lens.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Lens flare/lens-flare-1.jpg',
      '/2-lens-light/Lens flare/lens-flare-2.jpg',
      '/2-lens-light/Lens flare/lens-flare-3.jpg',
    ],
  },
  {
    id: 'rim-lighting',
    label: 'Rim Lighting',
    description: 'Light that outlines the edge of a subject, separating them from the background.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Rim Lighting/rim-lighting-1.png',
      '/2-lens-light/Rim Lighting/rim-lighting-2.jpg',
      '/2-lens-light/Rim Lighting/rim-lighting-3.jpg',
    ],
  },
  {
    id: 'volumetric-light',
    label: 'Volumetric Light',
    description: 'Visible light beams caused by particles in the air like dust, fog, or smoke.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Volumetric Light/volumetric-light-1.jpg',
      '/2-lens-light/Volumetric Light/volumetric-light-2.png',
      '/2-lens-light/Volumetric Light/volumetric-light-3.jpg',
    ],
  },
  {
    id: 'anaglyph',
    label: 'Anaglyph',
    description: 'A stereoscopic 3D effect achieved by encoding each eye\'s image using filters of different colors.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Anaglyph/anaglyph-1.jpg',
      '/2-lens-light/Anaglyph/anaglyph-2.jpg',
      '/2-lens-light/Anaglyph/anaglyph-3.jpg',
    ],
  },
  {
    id: 'dappled-light',
    label: 'Dappled Light',
    description: 'Soft, mottled patterns of light and shadow created by sunlight filtering through leaves or openings.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Dappled light/dappled-light-1.jpg',
      '/2-lens-light/Dappled light/dappled-light-2.jpg',
      '/2-lens-light/Dappled light/dappled-light-3.jpg',
      '/2-lens-light/Dappled light/dappled-light-4.jpeg',
    ],
  },
  {
    id: 'fisheye-view',
    label: 'Fisheye View',
    description: 'An ultra-wide-angle lens effect creating a hemispherical, barrel-distorted image.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Fisheye view/fisheye-view-1.jpg',
      '/2-lens-light/Fisheye view/fisheye-view-2.jpeg',
      '/2-lens-light/Fisheye view/fisheye-view-3.jpg',
    ],
  },
  {
    id: 'moire-pattern',
    label: 'Moiré Pattern',
    description: 'Visual interference pattern created when two grids or patterns overlap at an angle.',
    category: 'lens-light',
    images: [
      '/2-lens-light/Moire pattern/moire-pattern-1.jpg',
      '/2-lens-light/Moire pattern/moire-pattern-2.jpg',
      '/2-lens-light/Moire pattern/moire-pattern-3.jpg',
    ],
  },

  // ============================================
  // ART MOVEMENTS
  // ============================================
  {
    id: 'afrofuturism',
    label: 'Afrofuturism',
    description: 'A cultural aesthetic combining African diaspora culture with technology, science fiction, and futuristic themes.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Afrofuturism/afrofuturism-1.jpg',
      '/3-art-movements/Afrofuturism/afrofuturism-2.jpg',
      '/3-art-movements/Afrofuturism/afrofuturism-3.jpg',
      '/3-art-movements/Afrofuturism/afrofuturism-4.jpg',
    ],
  },
  {
    id: 'art-deco',
    label: 'Art Deco',
    description: 'Bold geometric patterns, rich colors, and luxurious ornamentation from the 1920s-30s.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Art Deco/art-deco-1.jpg',
      '/3-art-movements/Art Deco/art-deco-2.jpg',
      '/3-art-movements/Art Deco/art-deco-3.jpg',
      '/3-art-movements/Art Deco/art-deco-4.jpg',
    ],
  },
  {
    id: 'art-nouveau',
    label: 'Art Nouveau',
    description: 'Flowing organic lines, natural forms, and decorative elegance from the late 1800s.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Art Nouveau/art-nouveau-1.jpg',
      '/3-art-movements/Art Nouveau/art-nouveau-2.jpg',
      '/3-art-movements/Art Nouveau/art-nouveau-3.jpg',
      '/3-art-movements/Art Nouveau/art-nouveau-4.jpg',
    ],
  },
  {
    id: 'bauhaus',
    label: 'Bauhaus',
    description: 'Functional modernist design emphasizing geometric shapes and primary colors.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Bauhaus/bauhaus-1.jpg',
      '/3-art-movements/Bauhaus/bauhaus-2.jpg',
      '/3-art-movements/Bauhaus/bauhaus-3.jpg',
      '/3-art-movements/Bauhaus/bauhaus-4.jpg',
      '/3-art-movements/Bauhaus/bauhaus-5.jpg',
    ],
  },
  {
    id: 'de-stijl',
    label: 'De Stijl',
    description: 'Dutch artistic movement using primary colors and geometric abstraction.',
    category: 'art-movements',
    images: [
      '/3-art-movements/De stijl/de-stijl-1.jpg',
      '/3-art-movements/De stijl/de-stijl-2.jpg',
      '/3-art-movements/De stijl/de-stijl-3.jpg',
    ],
  },
  {
    id: 'fauvist',
    label: 'Fauvist',
    description: 'Bold, vibrant colors and simplified forms emphasizing painterly qualities over realism.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Fauvist/fauvist-1.jpg',
      '/3-art-movements/Fauvist/fauvist-2.jpg',
      '/3-art-movements/Fauvist/fauvist-3.jpg',
      '/3-art-movements/Fauvist/fauvist-4.jpg',
    ],
  },
  {
    id: 'hudson-river-school',
    label: 'Hudson River School',
    description: 'American art movement emphasizing romantic landscapes with dramatic light and natural beauty.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Hudson River School/hudson-river-school-1.jpg',
      '/3-art-movements/Hudson River School/hudson-river-school-2.jpeg',
      '/3-art-movements/Hudson River School/hudson-river-school-3.jpg',
    ],
  },
  {
    id: 'memphis-design',
    label: 'Memphis Design',
    description: 'Bold, postmodern style featuring bright colors, geometric shapes, and playful patterns from the 1980s.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Memphis design/memphis-design-1.jpg',
      '/3-art-movements/Memphis design/memphis-design-2.jpeg',
      '/3-art-movements/Memphis design/memphis-design-3.jpeg',
    ],
  },
  {
    id: 'neo-noir',
    label: 'Neo-Noir',
    description: 'Modern interpretation of film noir with high contrast, shadows, and moody atmosphere.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Neo-noir/neo-noir-1.jpg',
      '/3-art-movements/Neo-noir/neo-noir-2.jpg',
      '/3-art-movements/Neo-noir/neo-noir-3.jpg',
      '/3-art-movements/Neo-noir/neo-noir-4.jpg',
    ],
  },
  {
    id: 'pointillism',
    label: 'Pointillism',
    description: 'Painting technique using small dots of color that blend optically when viewed from distance.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Pointillism/pointillism-1.png',
      '/3-art-movements/Pointillism/pointillism-2.jpg',
      '/3-art-movements/Pointillism/pointillism-3.jpg',
      '/3-art-movements/Pointillism/pointillism-4.jpg',
      '/3-art-movements/Pointillism/pointillism-5.jpg',
    ],
  },
  {
    id: 'rococo',
    label: 'Rococo',
    description: 'Ornate 18th-century style featuring elaborate curves, pastel colors, and asymmetrical designs.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Rococo/rococo-1.jpg',
      '/3-art-movements/Rococo/rococo-2.jpg',
      '/3-art-movements/Rococo/rococo-3.jpg',
      '/3-art-movements/Rococo/rococo-4.jpg',
    ],
  },
  {
    id: 'trompe-loeil',
    label: "Trompe-l'œil",
    description: 'Realistic imagery creating optical illusion that depicted objects exist in three dimensions.',
    category: 'art-movements',
    images: [
      "/3-art-movements/Trompe-l'œil/Trompe-l'œil-1.jpg",
      "/3-art-movements/Trompe-l'œil/Trompe-l'œil-2.jpg",
      "/3-art-movements/Trompe-l'œil/Trompe-l'œil-3.jpg",
      "/3-art-movements/Trompe-l'œil/Trompe-l'œil-4.jpg",
    ],
  },
  {
    id: 'ukiyo-e',
    label: 'Ukiyo-e',
    description: 'Japanese woodblock print style with flat colors, bold outlines, and nature themes.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Ukiyo-e/ukiyo-e-1.jpg',
      '/3-art-movements/Ukiyo-e/ukiyo-e-2.jpg',
      '/3-art-movements/Ukiyo-e/ukiyo-e-3.jpg',
    ],
  },
  {
    id: 'vaporwave',
    label: 'Vaporwave',
    description: 'Retro-futuristic aesthetic combining 80s/90s nostalgia with surreal digital imagery.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Vaporwave/vaporware-1.jpg',
      '/3-art-movements/Vaporwave/vaporware-2.jpg',
      '/3-art-movements/Vaporwave/vaporware-3.jpg',
    ],
  },
  {
    id: 'y2k-aesthetics',
    label: 'Y2K Aesthetics',
    description: 'Late 90s/early 2000s visual style featuring chrome, translucent plastics, and techno-optimism.',
    category: 'art-movements',
    images: [
      '/3-art-movements/Y2K aesthetics/y2k-aesthetics-1.jpg',
      '/3-art-movements/Y2K aesthetics/y2k-aesthetics-2.jpg',
    ],
  },

  // ============================================
  // TECHNIQUES
  // ============================================
  {
    id: 'contour-drawing',
    label: 'Contour Drawing',
    description: 'Drawing technique focusing on the outline and edges of a subject without shading.',
    category: 'techniques',
    images: [
      '/4-techniques/Contour drawing/contour-drawing-1.jpg',
      '/4-techniques/Contour drawing/contour-drawing-2.jpg',
    ],
  },
  {
    id: 'cross-hatching',
    label: 'Cross-Hatching',
    description: 'Drawing technique using intersecting sets of parallel lines to create shading and texture.',
    category: 'techniques',
    images: [
      '/4-techniques/Cross-hatching/cross-hatching-1.jpg',
      '/4-techniques/Cross-hatching/cross-hatching-3.jpg',
      '/4-techniques/Cross-hatching/cross-hatching-4.jpg',
    ],
  },
  {
    id: 'cyanotype',
    label: 'Cyanotype',
    description: 'Photographic printing process producing cyan-blue prints using iron compounds.',
    category: 'techniques',
    images: [
      '/4-techniques/Cyanotype/cyanotype-1.jpg',
      '/4-techniques/Cyanotype/cyanotype-3.jpg',
      '/4-techniques/Cyanotype/cyanotype-4.jpg',
    ],
  },
  {
    id: 'double-exposure',
    label: 'Double Exposure',
    description: 'Two or more images superimposed, blending subjects into dreamlike composites.',
    category: 'techniques',
    images: [
      '/4-techniques/Double exposure/double-exposure-1.jpg',
      '/4-techniques/Double exposure/double-exposure-2.jpg',
      '/4-techniques/Double exposure/double-exposure-3.jpg',
      '/4-techniques/Double exposure/double-exposure-4.jpg',
      '/4-techniques/Double exposure/double-exposure-5.jpg',
    ],
  },
  {
    id: 'frottage',
    label: 'Frottage',
    description: 'Technique of rubbing pencil or crayon over textured surfaces to create patterns.',
    category: 'techniques',
    images: [
      '/4-techniques/Frottage/frottage-2.jpg',
      '/4-techniques/Frottage/frottage-3.jpg',
    ],
  },
  {
    id: 'linocut',
    label: 'Linocut',
    description: 'Relief printing from carved linoleum, producing bold contrasts and graphic shapes.',
    category: 'techniques',
    images: [
      '/4-techniques/Linocut/linocut-1.jpg',
      '/4-techniques/Linocut/linocut-2.jpg',
      '/4-techniques/Linocut/linocut-3.jpg',
    ],
  },
  {
    id: 'lithography',
    label: 'Lithography',
    description: 'Printing process based on the immiscibility of oil and water on a flat stone or metal plate.',
    category: 'techniques',
    images: [
      '/4-techniques/Lithography/lithography-2.jpg',
      '/4-techniques/Lithography/lithography-3.jpg',
    ],
  },
  {
    id: 'long-exposure',
    label: 'Long Exposure',
    description: 'Extended shutter time capturing motion as smooth trails or silky water.',
    category: 'techniques',
    images: [
      '/4-techniques/Long exposure/long-exposure-1.png',
      '/4-techniques/Long exposure/long-exposure-2.png',
      '/4-techniques/Long exposure/long-exposure-3.jpg',
      '/4-techniques/Long exposure/long-exposure-4.jpg',
    ],
  },
  {
    id: 'risograph',
    label: 'Risograph',
    description: 'Stencil-based printing with vibrant, slightly misregistered overlapping colors.',
    category: 'techniques',
    images: [
      '/4-techniques/Risograph/risograph-1.jpg',
      '/4-techniques/Risograph/risograph-2.jpg',
      '/4-techniques/Risograph/risograph-3.jpg',
    ],
  },
  {
    id: 'glitch-art',
    label: 'Glitch Art',
    description: 'Digital or analog errors aesthetically exploited to create striking visual effects.',
    category: 'techniques',
    images: [
      '/4-techniques/Glitch Art/glitch-art-1.jpg',
      '/4-techniques/Glitch Art/glitch-art-2.jpg',
      '/4-techniques/Glitch Art/glitch-art-3.jpg',
      '/4-techniques/Glitch Art/glitch-art-4.jpg',
      '/4-techniques/Glitch Art/glitch-art-5.jpg',
    ],
  },
  {
    id: 'impasto',
    label: 'Impasto',
    description: 'Thick application of paint that creates visible texture and three-dimensional surface.',
    category: 'techniques',
    images: [
      '/4-techniques/Impasto/impasto-1.jpg',
      '/4-techniques/Impasto/impasto-2.jpg',
      '/4-techniques/Impasto/impasto-3.jpg',
      '/4-techniques/Impasto/impasto-4.jpg',
    ],
  },
  {
    id: 'infrared',
    label: 'Infrared',
    description: 'Photography capturing infrared light, creating surreal images with white foliage and dark skies.',
    category: 'techniques',
    images: [
      '/4-techniques/Infrared/infrared-1.jpg',
      '/4-techniques/Infrared/infrared-2.jpg',
      '/4-techniques/Infrared/infrared-3.jpeg',
    ],
  },
  {
    id: 'pixel-sort',
    label: 'Pixel Sort',
    description: 'Digital glitch art technique that rearranges pixels based on their values, creating streaked distortion effects.',
    category: 'techniques',
    images: [
      '/4-techniques/Pixel sort/pixel-sort-1.jpg',
      '/4-techniques/Pixel sort/pixel-sort-2.jpg',
    ],
  },

  // ============================================
  // MATERIALS & TEXTURES
  // ============================================
  {
    id: 'chevron',
    label: 'Chevron',
    description: 'V-shaped pattern creating a zigzag design often used in textiles and decoration.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Chevron/chevron-1.jpg',
      '/5-materials-textures/Chevron/chevron-2.jpg',
      '/5-materials-textures/Chevron/chevron-3.png',
    ],
  },
  {
    id: 'chrome',
    label: 'Chrome',
    description: 'Highly reflective metallic finish with mirror-like surface quality.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Chrome/chrome-1.jpg',
      '/5-materials-textures/Chrome/chrome-2.jpg',
      '/5-materials-textures/Chrome/chrome-3.jpg',
      '/5-materials-textures/Chrome/chrome-4.jpg',
    ],
  },
  {
    id: 'crystalline',
    label: 'Crystalline',
    description: 'Geometric mineral structures with faceted surfaces that refract and reflect light.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Crystalline/crystalline-1.webp',
      '/5-materials-textures/Crystalline/crystalline-2.webp',
      '/5-materials-textures/Crystalline/crystalline-3.webp',
    ],
  },
  {
    id: 'felted',
    label: 'Felted',
    description: 'Soft, dense textile made from matted fibers with a fuzzy, warm appearance.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Felted/felted-1.jpg',
      '/5-materials-textures/Felted/felted-2.jpg',
      '/5-materials-textures/Felted/felted-3.jpg',
    ],
  },
  {
    id: 'frosted-glass',
    label: 'Frosted Glass',
    description: 'Translucent glass with a diffused, etched surface that scatters light.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Frosted Glass/frosted-glass-1.jpg',
      '/5-materials-textures/Frosted Glass/frosted-glass-2.jpg',
    ],
  },
  {
    id: 'geode',
    label: 'Geode',
    description: 'Crystalline rock formation with hollow cavities lined with colorful mineral crystals.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Geode/geode-1.jpg',
      '/5-materials-textures/Geode/geode-2.jpg',
      '/5-materials-textures/Geode/geode-3.jpg',
    ],
  },
  {
    id: 'gingham',
    label: 'Gingham',
    description: 'Lightweight woven fabric with a checkered pattern of colored and white squares.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Gingham/Gingham-1.jpeg',
      '/5-materials-textures/Gingham/Gingham-2.jpeg',
    ],
  },
  {
    id: 'houndstooth',
    label: 'Houndstooth',
    description: 'Classic textile pattern with abstract four-pointed shapes resembling a broken check.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Houndstooth/houndstooth-1.jpg',
      '/5-materials-textures/Houndstooth/houndstooth-2.jpg',
    ],
  },
  {
    id: 'marble-veining',
    label: 'Marble Veining',
    description: 'Natural stone patterns with irregular veins and color variations.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Marble veining/marble-veining-1.jpg',
      '/5-materials-textures/Marble veining/marble-veining-2.jpg',
      '/5-materials-textures/Marble veining/marble-veining-3.jpg',
    ],
  },
  {
    id: 'mycelium',
    label: 'Mycelium',
    description: 'Organic network of fungal threads creating intricate, web-like natural patterns.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Mycelium/mycelium-1.jpg',
      '/5-materials-textures/Mycelium/mycelium-2.jpg',
      '/5-materials-textures/Mycelium/mycelium-3.png',
    ],
  },
  {
    id: 'paisley',
    label: 'Paisley',
    description: 'Ornamental design featuring curved, teardrop-shaped motifs of Persian origin.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Paisley/paisley-1.jpg',
      '/5-materials-textures/Paisley/paisley-2.jpg',
    ],
  },
  {
    id: 'patina',
    label: 'Patina',
    description: 'Aged surface appearance developed over time through oxidation and wear.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Patina/patina-1.jpg',
      '/5-materials-textures/Patina/patina-2.jpg',
      '/5-materials-textures/Patina/patina-3.jpg',
      '/5-materials-textures/Patina/patina-4.jpg',
    ],
  },
  {
    id: 'plaid',
    label: 'Plaid',
    description: 'Pattern of crossed horizontal and vertical bands in multiple colors.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Plaid/plaid-1.jpg',
      '/5-materials-textures/Plaid/plaid-2.jpg',
      '/5-materials-textures/Plaid/plaid-3.jpg',
    ],
  },
  {
    id: 'rattan',
    label: 'Rattan',
    description: 'Woven palm fiber material with a natural, tropical aesthetic used in furniture and decor.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Rattan/rattan-1.jpg',
      '/5-materials-textures/Rattan/rattan-2.jpg',
      '/5-materials-textures/Rattan/rattan-3.jpeg',
    ],
  },
  {
    id: 'terrazzo',
    label: 'Terrazzo',
    description: 'Composite material with marble, quartz, or glass chips set in cement or resin, creating speckled patterns.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Terrazzo/terrazzo-1.jpg',
      '/5-materials-textures/Terrazzo/terrazzo-2.jpg',
      '/5-materials-textures/Terrazzo/terrazzo-3.jpg',
    ],
  },
  {
    id: 'velvet',
    label: 'Velvet',
    description: 'Luxurious fabric with a soft, dense pile that creates rich light and shadow.',
    category: 'materials-textures',
    images: [
      '/5-materials-textures/Velvet/velvet-1.jpg',
      '/5-materials-textures/Velvet/velvet-2.jpg',
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
