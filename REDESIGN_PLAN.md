# Lattisework Redesign Plan

## Overview
Transform personal image gallery into Lattisework - a visual glossary for Midjourney prompting vocabulary. The redesign shifts from simple category filtering to hierarchical taxonomy-based navigation with a visual-first learning experience.

## Figma Reference
**Primary Frame**: Node 781:430 - Home Page Design
- File: `VHFXiHFpdSOUXCVzhBt721/Lattisework`
- Shows complete home page layout with hierarchical navigation and grid

**Key Design Elements Extracted**:
- Logo in header ("Lattisework.")
- Search functionality (input + button)
- Left sidebar with meta-section hierarchy
- 3-column visual card grid
- Courier New typography
- Clean spacing and layout

## Current vs. New Architecture

### Current State
```
- Simple flat category filtering (all, surrealism, high-angle, painterly)
- Horizontal FilterButtons component
- Personal bio header
- 3 sample gallery items
```

### New State
```
- Hierarchical taxonomy: 3 meta-sections → 8 categories → 40+ terms
- Vertical sidebar navigation showing full hierarchy
- Brand-focused header (logo + search)
- Visual glossary with educational descriptions
```

## Data Model Changes

### New Taxonomy Structure

**Meta-Sections** (3):
1. **FRAME**: Camera Angles, Composition
2. **LIGHT**: Lighting & Mood, Optical Phenomena
3. **STYLE**: Art Movement, Printmaking, Photo Effects, Materials & Textures

**Categories** (8 total) - mapped from public folder structure:
- `1. Camera Angles` → `camera-angles`
- `2. Composition` → `composition`
- `3. Lighting & Mood` → `lighting-mood`
- `4. Optical Phenomena` → `optical-phenomena`
- `5. Art Movement` → `art-movement`
- `6. Printmaking` → `printmaking`
- `7. Photo Effects` → `photo-effects`
- `8. Materials & Textures` → `materials-textures`

**Terms** (40+ total) - examples:
- Camera Angles: Bird's eye view, Dutch angle, Over-the-shoulder shot, Worm's eye view
- Optical Phenomena: Bokeh, Caustics, Chromatic aberration, Lens flare
- Printmaking: Linocut, Risograph, Screenprint, Woodblock print
- (See full list in public folder subdirectories)

### New Data Files

**`src/data/taxonomy.ts`** - Hierarchical structure:
```typescript
interface MetaSection {
  id: string
  label: string  // "FRAME", "LIGHT", "STYLE"
  categories: string[]  // category IDs
}

interface Category {
  id: string  // "camera-angles"
  label: string  // "Camera Angles"
  metaSection: string  // "frame"
  folderName: string  // "1. Camera Angles"
}

interface Term {
  id: string  // "caustics"
  label: string  // "Caustics"
  description: string  // "Light patterns created by refraction..."
  category: string  // "optical-phenomena"
  images: string[]  // ["/4. Optical Phenomena/Caustics/caustics-1.jpg"]
}
```

**`src/data/terms.ts`** - All 40+ terms with descriptions:
- Extract from public folder structure
- Each term includes: id, label, description, category, image paths
- Descriptions follow Figma examples (concise, educational)

### Updated Types

**`src/types/index.ts`**:
```typescript
export interface MetaSection {
  id: string
  label: string
  categories: string[]
}

export interface Category {
  id: string
  label: string
  metaSection: string
  folderName: string
}

export interface Term {
  id: string
  label: string
  description: string
  category: string
  images: string[]
}

// Keep GalleryItem for backward compatibility with Lightbox
export interface GalleryItem {
  id: string
  src: string
  title: string
  description: string
  category: string
}
```

## Component Changes

### Components to CREATE

#### 1. **`Sidebar.tsx`**
- Replaces `FilterButtons.tsx`
- Hierarchical navigation matching Figma design
- Shows all meta-sections with nested categories
- "All" option at top with active indicator (black bar)
- Meta-section labels in gray uppercase
- Category labels in black regular weight
- Click handlers for filtering

**Props**:
```typescript
interface SidebarProps {
  activeFilter: string  // "all" | category-id
  onFilterChange: (filter: string) => void
}
```

#### 2. **`SearchBar.tsx`**
- Search input + button from Figma design
- Matches Figma styling (border, padding, colors)
- Initially can be non-functional placeholder
- Future: search/filter terms by keyword

**Props**:
```typescript
interface SearchBarProps {
  onSearch?: (query: string) => void
}
```

#### 3. **`Logo.tsx`** (optional, can be inline)
- "Lattisework." text with styling
- Matches Figma typography

### Components to MODIFY

#### 4. **`Header.tsx`**
**Current**: Personal bio ("Hi! I'm Wonjae...")
**New**: Logo (left) + SearchBar (right)
- Remove bio/title props
- Add Logo and SearchBar components
- Flex layout: space-between
- Match Figma spacing (30px from edges based on design)

#### 5. **`GalleryCard.tsx`**
**Current**: Aspect ratio 1.618:1, animation delays
**New**: Match Figma card design
- Update aspect ratio to match Figma (~4:3 or auto-fit)
- Title in bold 20px with -0.2px tracking
- Description in regular 14px
- 12px gap between image and text
- 6px gap between title and description
- Remove or adjust animation timing if needed

#### 6. **`Gallery.tsx`**
**Current**: Grid with responsive columns
**New**: 3-column grid with proper gaps
- Update to fixed 3 columns (shown in Figma)
- Gap: 11px horizontal, 44px vertical (from Figma)
- Maintain responsive behavior for mobile

#### 7. **`App.tsx`**
**Current**: Vertical stack layout
**New**: Two-column layout (sidebar + main)
- Sidebar fixed on left (193px width from Figma)
- Main content area on right (starts at 279px from left)
- Update state management for hierarchical filtering
- Remove old header bio props

### Components to PRESERVE

#### 8. **`Lightbox.tsx`**
- Keep existing functionality!
- May need minor styling updates to match new design language
- Convert Term → GalleryItem for compatibility

### Components to DELETE

- **`FilterButtons.tsx`** - Replaced by Sidebar
- **`Footer.tsx`** - Remove entirely from current design

## File Changes Summary

### New Files
- `src/components/Sidebar.tsx` - Hierarchical navigation
- `src/components/SearchBar.tsx` - Search functionality
- `src/components/Logo.tsx` - Brand logo (or inline in Header)
- `src/data/taxonomy.ts` - Meta-sections and categories definitions
- `src/data/terms.ts` - All 40+ terms with metadata
- `src/hooks/useTerms.ts` - New hook for term filtering logic

### Modified Files
- `src/components/Header.tsx` - Logo + SearchBar layout
- `src/components/GalleryCard.tsx` - Updated styling to match Figma
- `src/components/Gallery.tsx` - 3-column grid layout
- `src/components/index.ts` - Export new components
- `src/App.tsx` - Two-column layout + hierarchical state
- `src/types/index.ts` - Add MetaSection, Category, Term interfaces
- `src/index.css` - Update color tokens to match Figma

### Deleted Files
- `src/components/FilterButtons.tsx` - No longer needed
- `src/data/galleryItems.ts` - Replaced by terms.ts (or keep for reference)
- `src/hooks/useGallery.ts` - Replaced by useTerms.ts (or refactor)

### Files to Preserve
- `src/components/Lightbox.tsx` - Keep existing
- `src/components/Footer.tsx` - Keep existing (may update later)

## Styling Updates

### Design Tokens (`src/index.css`)

**Color Updates**:
```css
/* Current */
--color-ink: #251717;

/* New (from Figma) */
--color-ink: #09090b;  /* Matches neutral/950 from Figma */

/* Add new tokens */
--color-muted-light: #71717a;  /* For meta-section labels */
--color-text-placeholder: #909090;  /* For search placeholder */
--color-border-dark: #000000;  /* For search/buttons */
```

**Typography**:
- Already using Courier New as fallback - make it primary
- Update font-family to prioritize Courier New
```css
--font-mono: 'Courier New', 'JetBrains Mono', Courier, monospace;
```

### Component-Specific Styles

**Sidebar**:
- Width: 193px (from Figma measurements)
- Left position: 30px
- Top position: 93px
- Gap between sections: 24px
- Active indicator: 4px black bar

**Header**:
- Top position: 30px
- Padding: 30px horizontal
- Space-between layout

**Gallery Grid**:
- 3 columns
- Gap: 11px (horizontal), 44px (vertical)
- Start position: 279px from left

**Search**:
- Input: 230px width, 0.8px black border
- Button: Black background, cream text
- Both: 4px vertical padding, 10px/8px horizontal padding


## Implementation Order

### Phase 1: Data Foundation
1. Create `src/data/taxonomy.ts` with meta-sections and categories
2. Create `src/data/terms.ts` with all terms (can start with subset for testing)
3. Update `src/types/index.ts` with new interfaces
4. Script to auto-generate terms from public folder structure (optional but recommended)

### Phase 2: Core Components
1. Create `Logo.tsx` component
2. Create `SearchBar.tsx` component (placeholder functionality)
3. Modify `Header.tsx` to use Logo + SearchBar
4. Create `Sidebar.tsx` with hierarchical navigation

### Phase 3: Layout Restructure
1. Update `src/index.css` with new color tokens
2. Modify `App.tsx` for two-column layout
3. Create/update `useTerms.ts` hook for filtering logic
4. Wire up Sidebar filtering to main content

### Phase 4: Gallery Updates
1. Modify `GalleryCard.tsx` styling to match Figma
2. Modify `Gallery.tsx` for 3-column grid layout
3. Update grid spacing and positioning

### Phase 5: Integration & Polish
1. Connect Term data to Gallery display
2. Update Lightbox to work with Term → GalleryItem conversion
3. Test all navigation paths (All, meta-sections, categories)
4. Responsive design adjustments for mobile

### Phase 6: Enhancement (Post-MVP)
1. Implement search functionality
2. Add animations/transitions
3. Footer updates (if needed)
4. Performance optimization for large term dataset

## Questions & Ambiguities

### 1. Term Descriptions
**Question**: Should I write all 40+ term descriptions, or do you have them prepared?
- **Options**:
  - A) Auto-generate descriptions from folder names (less ideal)
  - B) You provide a list/file with descriptions
  - C) I research and write accurate Midjourney-specific descriptions
  - D) Start with subset, you'll fill in rest later

- **Wonjae's answer**:
    - A) many of the terms themselves will be swapped out later. Many are placeholders so the quality of the description doesn't matter as much.      


### 2. Search Functionality
**Question**: Should search be functional in initial implementation?
- **Options**:
  - A) Placeholder only (UI matches design, no functionality)
  - B) Basic term name filtering
  - C) Full-text search across names + descriptions

- **Wonjae's answer**:
    - A) for now. We will build this out later when the basic scaffolding and structure is solidly in place.


### 3. Navigation Behavior
**Question**: How should category selection work? -> Just like the current design, clicking a cateogry only shows terms from that category. 
- **Current assumption**: Clicking a category shows only terms from that category
- **Questions**:
  - Should clicking meta-section labels (FRAME/LIGHT/STYLE) do anything? -> meta-section labels such as frame, light, style are NOT clickable. 
  - Should clicking "All" show all terms across all categories? -> yes in alphabetical order
  - Should there be URL routing (e.g., `/category/optical-phenomena`)? -> URL routing would be great since it's good for sharability and SEO. 


### 4. Multiple Images per Term
**Question**: Some terms have only one image, others could have multiple. How to handle?
- **Options**:
  - A) Show first image only in grid
  - B) Show all images (multiple cards per term)
  - C) Carousel/slideshow in lightbox for multiple images

- **Wonjae's answer**:
    - C) in the grid, only the first image is shown as thumbnail. In the lightbox multiple images are shown in a horizontal carousel format. The number of images per term varies from 3-6. 
    - by the way, keep current hover animation on the thumbnails on the home page. 

### 5. Mobile Layout
**Question**: How should the sidebar behave on mobile?
- **Options**:
  - A) Collapse to hamburger menu
  - B) Horizontal scrollable tabs
  - C) Separate page/view
  - D) Sticky top section with expand/collapse

- **Wonjae's answer**:
    - D) for now. 


### 6. Image File Naming Convention
**Question**: Images are named like `caustics-1.jpg`, `linocut-1.jpg`. Is this consistent? -> No. refer to my answer below.  
- If more images are added, should they follow `[term]-[number].jpg` pattern? -> yes this format looks better than the current format. 
- Should I build auto-discovery logic or explicit image lists? -> explicit image list


### 7. Film Stocks Category
**Question**: Taxonomy mentioned "Film Stocks" but I don't see this folder in public/
- Should this category be added? -> No
- Or was it removed from scope? -> Yes it's removed. It's descoped. 


### 8. Existing Sample Photos
**Question**: What to do with current `photo1.png`, `photo3.png` in public root?
- Keep for reference/testing? -> Nope
- Delete as they're replaced by categorized content? -> Yes, you can delete them. 


## Technical Considerations

### Performance
- **Lazy loading**: Consider lazy loading images in gallery grid
- **Virtualization**: If term count grows significantly (100+), consider virtual scrolling
- **Image optimization**: Thumbnails vs. full-res for grid vs. lightbox

### Accessibility
- Maintain keyboard navigation for sidebar
- ARIA labels for hierarchical navigation structure
- Alt text for all term images (can use term name + description)
- Focus management for lightbox

### State Management
- Current `useGallery` hook works well for flat structure
- New `useTerms` hook needs hierarchical filtering logic
- Consider URL state sync for shareable links to specific categories

### Data Generation
- Recommend creating a script to auto-generate `terms.ts` from public folder structure
- Descriptions would still need manual curation for quality
- Can provide starter script if helpful

## Migration Strategy

### Backward Compatibility
- Keep existing `galleryItems.ts` temporarily for reference
- Keep `Lightbox` component unchanged initially
- Create adapter function: `Term → GalleryItem` for lightbox display

### Incremental Rollout
1. Build new components alongside old ones
2. Create feature flag in App.tsx to toggle old/new UI
3. Test thoroughly before removing old code
4. Clean up old components once stable

## Success Criteria

✅ **Visual Parity**: Matches Figma design (layout, spacing, typography, colors)
✅ **Hierarchical Navigation**: Sidebar shows all meta-sections → categories
✅ **Filtering**: Clicking categories correctly filters displayed terms
✅ **Existing Functionality**: Lightbox still works for viewing term images
✅ **Data Completeness**: All 40+ terms represented with images and descriptions
✅ **Responsive**: Works on mobile (even if sidebar behavior differs)
✅ **Performance**: Fast load and smooth interactions

## Next Steps

**Awaiting your approval and clarification on**:
1. Term descriptions approach (Question #1)
2. Search functionality scope (Question #2)
3. Navigation behavior details (Question #3)
4. Multiple images handling (Question #4)
5. Mobile sidebar approach (Question #5)
6. Film Stocks category status (Question #7)

**Once approved, I will**:
1. Start with Phase 1 (Data Foundation)
2. Implement components in order
3. Maintain existing lightbox functionality throughout
4. Provide progress updates at each phase
