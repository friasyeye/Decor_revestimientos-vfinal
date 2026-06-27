# WhatsIncludedSection Specification

## Overview
- **Target file:** `src/components/WhatsIncludedSection.tsx`
- **Interaction model:** scroll-driven (cards animate/rotate as user scrolls past large heading text) — simplified to static stacked card display
- **Background:** very dark near-black #0d120b

## DOM Structure
Section (dark bg)
├── Large heading "What's Included" (massive, fills viewport width, cream color)
└── 4 rotated/stacked photo cards overlaid on the heading
    Each card:
    ├── Background image (from the 4 "services" images)
    ├── Category title (e.g. "Accommodation")
    └── Description text

## Design Note
In the original, as you scroll, different cards rotate into view in front of the large heading text.
For our implementation: display all 4 cards in a responsive 2×2 grid layout (since we cannot easily replicate the exact Framer scroll-driven effect).

## Computed Styles

### Section Container
- backgroundColor: rgb(13, 18, 11) = #0d120b
- paddingTop: 100px
- paddingBottom: 100px
- paddingLeft: 80px
- paddingRight: 80px
- position: relative

### Large Heading "What's Included"
- fontFamily: "Instrument Serif", serif
- fontSize: clamp(80px, 12vw, 160px) (fills full viewport width)
- fontStyle: italic
- fontWeight: 400
- color: rgb(223, 229, 215) = #dfe5d7
- lineHeight: 0.9
- letterSpacing: -2px
- textAlign: center
- marginBottom: 80px
- opacity: 0.9

### Cards Grid
- display: grid
- gridTemplateColumns: repeat(2, 1fr)
- gap: 24px
- maxWidth: 900px
- margin: 0 auto

### Individual Card
- position: relative
- borderRadius: 20px
- overflow: hidden
- aspectRatio: 3/4 (portrait)
- cursor: default

### Card Image
- width: 100%
- height: 100%
- objectFit: cover
- position: absolute
- inset: 0

### Card Overlay (gradient from bottom)
- position: absolute
- inset: 0
- background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 50%)

### Card Text (bottom of card)
- position: absolute
- bottom: 0
- left: 0
- right: 0
- padding: 24px
- color: rgb(223, 229, 215) = #dfe5d7

### Card Category Title
- fontFamily: "Instrument Serif", serif
- fontSize: 28px
- fontStyle: italic
- fontWeight: 400
- marginBottom: 8px

### Card Description
- fontFamily: "Satoshi", sans-serif
- fontSize: 14px
- lineHeight: 1.5
- opacity: 0.85

## Cards Data (4 cards)
1. **Personal Guidance**
   - Image: `public/images/PQG2GwhLLy7cIzpYItvStfLPNgQ.jpg`
   - Description: "Direct access to the maestro throughout the experience."

2. **Culinary**
   - Image: `public/images/jUruyIReP2hMt6XoadJ6BFLSk5E.jpg`
   - Description: "Private estate dinners, local wine pairings, and a guided market immersion with regional producers"

3. **Materials**
   - Image: `public/images/hYOHLXabWyjdEekAjazyOqWm8Y.jpg`
   - Description: "Every session, ingredient, tool, and resource is provided."

4. **Accommodation**
   - Image: `public/images/wXeQRFjGVqNnDdqh4kbOSklmvWY.jpg`
   - Description: "Two nights in a secluded countryside estate, shared only with fellow participants."

## Responsive Behavior
- Desktop: 2×2 card grid
- Mobile: single column cards
