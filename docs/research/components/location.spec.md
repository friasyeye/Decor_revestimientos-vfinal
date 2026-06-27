# LocationSection Specification

## Overview
- **Target file:** `src/components/LocationSection.tsx`
- **Interaction model:** static
- **Background:** light sage green #dfe5d7

## DOM Structure
Section (sage green bg)
├── 2 aerial estate photos (side by side, full-bleed with slight border radius)
├── Section header
│   ├── H2: "Set in the Heart of Tuscany"
│   └── Subtitle: "Where tradition, land, and craft intersect."
└── Description text + location detail

## Computed Styles

### Section Container
- backgroundColor: rgb(223, 229, 215) = #dfe5d7
- paddingTop: 0 (images flush to top of section)
- paddingBottom: 80px

### Photos Container
- display: grid
- gridTemplateColumns: 1fr 2fr (first photo smaller, second wider)
- gap: 8px
- marginBottom: 80px
- width: 100%

### Photo Images
- width: 100%
- height: 400px (approx)
- objectFit: cover
- borderRadius: 16px
- overflow: hidden
- First image: height ~380px
- Second image: height ~380px

### Text Block (centered)
- textAlign: center
- paddingLeft: 80px
- paddingRight: 80px
- maxWidth: 800px
- margin: 0 auto

### H2 "Set in the Heart of Tuscany"
- fontFamily: "Instrument Serif", serif
- fontSize: 56px
- fontStyle: italic
- fontWeight: 400
- color: rgb(13, 18, 11) = #0d120b
- marginBottom: 12px

### Subtitle "Where tradition, land, and craft intersect."
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(44, 50, 41) = #2c3229
- marginBottom: 40px

### Description
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(44, 50, 41) = #2c3229
- lineHeight: 1.7
- maxWidth: 640px
- margin: 0 auto
- marginBottom: 12px

## Assets
- Aerial photo 1 (smaller): `public/images/3iC1MXJJcUe9OZi5KP7RvyfbzXE.jpg` — Tuscan estate aerial view
- Aerial photo 2 (wider): `public/images/qi31jTCjPGBFLq2Bsxyr7jMEt3U.jpg` — Tuscan estate vineyards aerial

## Text Content (verbatim)
- H2: "Set in the Heart of Tuscany"
- Subtitle: "Where tradition, land, and craft intersect."
- Para 1: "The masterclass takes place in a private Tuscan estate."
- Para 2: "This location is surrounded by olive groves and vineyards, far from tourist routes and distractions. The climate, ingredients, and pace of life here are essential to understanding the craft. Exact location details are shared after your application is approved."

## Responsive Behavior
- Desktop: side-by-side photos (1fr 2fr), text centered
- Mobile: stack photos vertically, text block padding reduced
