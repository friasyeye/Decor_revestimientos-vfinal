# ExperiencesSection Specification

## Overview
- **Target file:** `src/components/ExperiencesSection.tsx`
- **Interaction model:** static alternating layout (odd: image-left text-right, even: text-left image-right)
- **Background:** light sage green rgb(223, 229, 215) = #dfe5d7

## DOM Structure
Section (sage green bg)
├── Section Header
│   ├── H2: "What the 48 Hours Hold"
│   └── Subtitle: "Every moment designed for depth, craft, and mastery."
└── 5× Experience Items (alternating layout)
    Each item:
    ├── Number badge (e.g. "001") - small pill badge
    ├── Image (rounded, ~480px wide)
    └── Text block (H3 + description)

## Alternating Layout Pattern
- Odd items (1,3,5): Image LEFT, Text RIGHT
- Even items (2,4): Text LEFT, Image RIGHT
- A vertical center divider line (1px, ~rgba(13,18,11,0.2)) runs between image and text columns
- Number badge is centered between items

## Computed Styles

### Section Container
- backgroundColor: rgb(223, 229, 215) = #dfe5d7
- paddingTop: 120px
- paddingBottom: 120px
- paddingLeft: 80px
- paddingRight: 80px

### Section Header (centered)
- textAlign: center
- marginBottom: 80px

### H2 Header "What the 48 Hours Hold"
- fontFamily: "Instrument Serif", serif
- fontSize: 64px
- fontStyle: italic
- fontWeight: 400
- color: rgb(13, 18, 11) = #0d120b
- letterSpacing: -0.32px
- lineHeight: 1.1
- marginBottom: 16px

### Subtitle
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(44, 50, 41) = #2c3229
- lineHeight: 1.6

### Experience Item Container
- display: flex
- flexDirection: row (reversed for even items)
- alignItems: center
- gap: 48px
- marginBottom: 80px
- position: relative

### Number Badge (e.g. "001")
- backgroundColor: rgb(44, 50, 41) = #2c3229 with ~40% opacity, or #2c3229 at reduced opacity
- color: rgb(223, 229, 215) = #dfe5d7
- fontFamily: "Satoshi", sans-serif
- fontSize: 14px
- fontWeight: 500
- borderRadius: 8px
- padding: 4px 10px
- position: centered between items (absolutely positioned, centered horizontally)
- display: inline-block

### Experience Image
- width: ~480px (flex: 0 0 480px)
- height: ~360px
- borderRadius: 16px
- objectFit: cover
- overflow: hidden

### Center Divider Line
- width: 1px
- backgroundColor: rgba(13, 18, 11, 0.15)
- alignSelf: stretch (full height of item)

### H3 Experience Title
- fontFamily: "Instrument Serif", serif
- fontSize: 40px
- fontStyle: italic
- fontWeight: 400
- color: rgb(13, 18, 11) = #0d120b
- letterSpacing: -0.2px
- marginBottom: 16px

### Experience Description
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(44, 50, 41) = #2c3229
- lineHeight: 1.7
- maxWidth: 440px

## Experience Items Data (verbatim)
1. **001 - The Science of Sourdough**
   - Image: `public/images/CTYQjTOJGK5FVvbAkfOYUFmkVNQ.jpg` (sourdough jars and notebook)
   - Description: "Master fermentation, hydration, and heat through guided dough work and live-fire baking. Learn why dough behaves the way it does, not just how to follow a recipe."
   - Layout: Image LEFT, Text RIGHT

2. **002 - The Tuscan Market Immersion**
   - Image: `public/images/uy1XcmmT2qiaTBk18eoukQqlPk.jpg` (outdoor market with vegetables)
   - Description: "Walk the local markets with a chef's eye. Source flour, tomatoes, and basil directly from the people who grow and make them."
   - Layout: Text LEFT, Image RIGHT

3. **003 - Private Wood-Fired Sessions**
   - Image: `public/images/imeUcyMMbKYRMNhUDuVvx4Ns6mg.jpg` (wood-fired pizza oven)
   - Description: "Hands-on oven time with direct, personal feedback. No demonstrations. No spectators. We make sure every participant works the fire."
   - Layout: Image LEFT, Text RIGHT

4. **004 - Sunset Estate Dinner**
   - Image: `public/images/WRCbmp2tgPvD2rZF622bBKVrbt0.jpg` (rustic outdoor dining table)
   - Description: "An intimate dinner featuring your own creations, shared at a private Tuscan estate with all the participants as the sun goes down."
   - Layout: Text LEFT, Image RIGHT

5. **005 - From Technique to Instinct**
   - Image: `public/images/xkarbZrnCBVYbD2kRRdam9aKt0.jpg` (kneading dough on wooden counter)
   - Description: "Move beyond measurements and timers. Learn to read dough, feel fermentation, and work with confidence under real conditions."
   - Layout: Image LEFT, Text RIGHT

## Responsive Behavior
- Desktop (1440px): alternating 2-column layout with divider
- Mobile (390px): stack vertically, image on top, text below, no divider
- Breakpoint: ~768px
