# MaestroSection Specification

## Overview
- **Target file:** `src/components/MaestroSection.tsx`
- **Interaction model:** static, centered layout
- **Background:** light sage green #dfe5d7 (continues from experiences section)

## DOM Structure
Section (sage green bg)
├── Label: "Meet the Maestro" (small caps / label text)
├── H2: "Giovanni Rossi"
├── Large portrait photo (full width, rounded)
└── Two-column bio text

## Computed Styles

### Section Container
- backgroundColor: rgb(223, 229, 215) = #dfe5d7
- paddingTop: 80px
- paddingBottom: 80px
- paddingLeft: 80px
- paddingRight: 80px

### Label "Meet the Maestro"
- fontFamily: "Satoshi", sans-serif
- fontSize: 14px
- letterSpacing: 0.5px
- color: rgb(44, 50, 41) = #2c3229
- textAlign: center
- marginBottom: 8px

### H2 "Giovanni Rossi"
- fontFamily: "Instrument Serif", serif
- fontSize: 64px
- fontStyle: italic
- fontWeight: 400
- color: rgb(13, 18, 11) = #0d120b
- textAlign: center
- marginBottom: 40px

### Portrait Image
- width: 100%
- maxWidth: 900px
- margin: 0 auto
- borderRadius: 16px
- overflow: hidden
- aspectRatio: 16/9 roughly
- objectFit: cover

### Bio Text Block
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 32px
- maxWidth: 900px
- margin: 40px auto 0
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(44, 50, 41) = #2c3229
- lineHeight: 1.7

## Assets
- Portrait: `public/images/5qnNbBZBmCAAJDt4Jo1UUDzZyRk.jpg` (Man in apron, flour-dusted hands, rustic kitchen)

## Text Content (verbatim)
- Label: "Meet the Maestro"
- H2: "Giovanni Rossi"
- Bio paragraph 1: "For over 20 years, Giovanni has studied dough the way others study wine. His training was shaped by the old masters of Neapolitan pizza, then refined in the countryside of Tuscany, where slower rhythms allowed technique to evolve into instinct."
- Bio paragraph 2: "His work has fed Michelin-star kitchens, private estates, and chefs who came for mastery. Those who learn from him don't leave with recipes. They leave with judgment, confidence, and a deeper relationship to their work."

## Responsive Behavior
- Desktop: portrait image full width (~900px max), bio in 2 columns
- Mobile: portrait full width, bio in 1 column
