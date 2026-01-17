# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
npm run dev      # Start dev server (Vite with HMR, typically on port 5173)
npm run build    # TypeScript check + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Architecture Overview

**Stack**: React 19 + TypeScript + Vite 7 + Tailwind CSS 4 + Framer Motion

**Lattisework** is a visual glossary for Midjourney prompting vocabulary. The app features hierarchical taxonomy-based navigation with a visual-first learning experience.

### Project Structure

```
/src
├── /components     # React UI components (Header, Sidebar, Gallery, Lightbox, etc.)
├── /hooks          # Custom React hooks (useTerms for hierarchical filtering)
├── /data           # Static data (taxonomy, terms)
├── /types          # TypeScript type definitions
├── App.tsx         # Root component - two-column layout with sidebar + main content
└── main.tsx        # React entry point

/public             # Gallery images organized by category folders (1-8)
├── 1. Camera Angles/
├── 2. Composition/
├── 3. Lighting & Mood/
├── 4. Optical Phenomena/
├── 5. Art Movement/
├── 6. Printmaking/
├── 7. Photo Effects/
└── 8. Materials & Textures/
```

### Taxonomy Hierarchy

**3 Meta-Sections → 8 Categories → 40+ Terms**

1. **FRAME**: Camera Angles, Composition
2. **LIGHT**: Lighting & Mood, Optical Phenomena
3. **STYLE**: Art Movement, Printmaking, Photo Effects, Materials & Textures

### State Management

Uses React hooks with no external state library:
- `useTerms.ts` - Central hook managing hierarchical filtering (active category, selected term, lightbox)
- `useMemo` for filtering operations
- `useCallback` for memoized event handlers
- URL state sync for shareable category links

### Component Architecture

**Container/Presentation pattern**:
- `App.tsx` is the container with two-column layout (sidebar + main content)
- All child components are presentational and receive props
- Uses barrel exports (`/src/components/index.ts`) for clean imports

**Data flow**: App → Sidebar/Header/Gallery/Lightbox

**Layout Structure**:
- Sidebar: Fixed left (193px width), hierarchical navigation
- Main content: Logo + SearchBar header, 3-column gallery grid

### Components

| Component | Purpose |
|-----------|---------|
| `Sidebar.tsx` | Hierarchical navigation (meta-sections → categories) |
| `SearchBar.tsx` | Search input + button (placeholder for now) |
| `Logo.tsx` | "Lattisework." brand text |
| `Header.tsx` | Logo (left) + SearchBar (right) |
| `Gallery.tsx` | 3-column grid of term cards |
| `GalleryCard.tsx` | Term thumbnail with title and description |
| `Lightbox.tsx` | Full-view modal with image carousel for multiple images per term |

### Styling System

**Tailwind CSS 4** with custom theme variables defined in `index.css`:
- `--color-cream` (#fafafa) - Background
- `--color-ink` (#09090b) - Primary text
- `--color-muted-light` (#71717a) - Meta-section labels
- `--color-text-placeholder` (#909090) - Search placeholder
- `--color-border-dark` (#000000) - Search/button borders

**Typography**: Courier New (monospace) as primary font

**Framer Motion** for animations:
- `AnimatePresence` for exit animations
- Hover animations on gallery thumbnails
- Motion components for smooth transitions

### Key Patterns

1. **Sidebar Navigation**: Active category indicated with 4px black bar; meta-section labels non-clickable
2. **Gallery Grid**: 3 columns, 11px horizontal gap, 44px vertical gap
3. **Term Cards**: First image as thumbnail; title (bold 20px) + description (14px)
4. **Lightbox Carousel**: Horizontal carousel for 3-6 images per term
5. **Type Safety**: All components fully typed; use `Term`, `Category`, `MetaSection` interfaces
6. **Keyboard Accessibility**: Escape key closes lightbox
7. **Responsive Design**: Mobile-first with collapsible sidebar (sticky top with expand/collapse)
8. **URL Routing**: Categories accessible via URL for shareability

### TypeScript Configuration

- Strict mode enabled
- Target: ES2022
- Module: ESNext
- No unused locals/parameters allowed

### Data Structures

```typescript
interface MetaSection {
  id: string
  label: string        // "FRAME", "LIGHT", "STYLE"
  categories: string[] // category IDs
}

interface Category {
  id: string           // "camera-angles"
  label: string        // "Camera Angles"
  metaSection: string  // "frame"
  folderName: string   // "1. Camera Angles"
}

interface Term {
  id: string           // "caustics"
  label: string        // "Caustics"
  description: string  // Educational description
  category: string     // "optical-phenomena"
  images: string[]     // ["/4. Optical Phenomena/Caustics/caustics-1.jpg", ...]
}

// Legacy interface for Lightbox compatibility
interface GalleryItem {
  id: string
  src: string
  title: string
  description: string
  category: string
}
```

### Adding Features

- **New components**: Add to `/src/components/` with TypeScript interfaces, export via barrel
- **New state logic**: Create custom hooks in `/src/hooks/`
- **New terms**: Add to `/src/data/terms.ts` following `Term` interface
- **New categories**: Update `/src/data/taxonomy.ts`
- **New types**: Add to `/src/types/index.ts`
- **Images**: Follow `[term]-[number].jpg` naming convention

### Build Process

1. TypeScript compiler validates types (`tsc -b`)
2. Vite bundles with React + Tailwind CSS plugins
3. Output to `/dist` directory

### Performance Optimizations

- Memoization with `useMemo` for filtering
- `useCallback` for stable function references
- CSS `object-fit` for responsive images
- Lazy loading for gallery images
- Consider virtualization if term count exceeds 100+

### Figma Reference

**Primary Frame**: Node 781:430 - Home Page Design
- File: `VHFXiHFpdSOUXCVzhBt721/Lattisework`
- Use `mcp__figma__get_design_context` tool with this fileKey and nodeId for design details
