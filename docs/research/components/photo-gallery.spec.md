# PhotoGallerySection Specification

## Overview
- **Target file:** `src/components/PhotoGallerySection.tsx`
- **Interaction model:** static (4 portrait-oriented photos in a row on dark background)
- **Background:** dark green #2c3229

## DOM Structure
Section with dark background
└── 4-column flex row of portrait photo cards (each with rounded corners)
    ├── Card 1: Vineyard with Tuscan villa (tall)
    ├── Card 2: Bread making at sunset (tallest, offset upward)
    ├── Card 3: Stone farmhouse kitchen (tall)
    └── Card 4: Dirt road with cypress trees (tall)

## Computed Styles

### Section Container
- backgroundColor: rgb(44, 50, 41) = #2c3229
- paddingTop: 80px
- paddingBottom: 80px
- paddingLeft: 60px
- paddingRight: 60px
- overflow: hidden

### Photos Row
- display: flex
- flexDirection: row
- gap: 16px
- alignItems: flex-start (cards align at top but have offset transforms)
- justifyContent: center
- width: 100%
- maxWidth: 1200px
- margin: 0 auto

### Individual Photo Cards
- borderRadius: 16px
- overflow: hidden
- flex: 1
- aspectRatio varies (roughly 3:4 portrait orientation)
- Approximate dimensions each: ~280px wide

### Card Vertical Offset (staggered effect)
- Card 1 (vineyard villa): marginTop: 0px
- Card 2 (bread making): marginTop: -40px (offset up slightly, taller card)
- Card 3 (stone kitchen): marginTop: 0px
- Card 4 (cypress road): marginTop: 0px

### Images
- width: 100%
- height: 100%
- objectFit: cover
- display: block

## Assets (in order)
- Card 1: `public/images/oxAs3awJ7m9V4sHOKzuHAiL0b0.jpg` — Tuscan villa vineyard
- Card 2: `public/images/CMSqKS7ljFjUX1ul6BIQXpe0Pc.jpg` — Bread baking at sunset
- Card 3: `public/images/S4ZTmItkEi1cWGNHDbJEN0O1zY.jpg` — Stone farmhouse kitchen
- Card 4: `public/images/catBe2oDLW9NxJc1PzHxZSn6xY.jpg` — Cypress tree dirt road

## Responsive Behavior
- Desktop (1440px): 4 columns flex row
- Tablet (768px): 2×2 grid
- Mobile (390px): 2×2 grid or single column
