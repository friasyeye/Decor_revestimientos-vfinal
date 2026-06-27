# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Interaction model:** static, 4 testimonial cards in a 2×2 grid
- **Background:** light sage green #dfe5d7

## DOM Structure
Section
├── H2: "From Past Participants"
├── Subtitle: "Reflections from those who've been inside the experience."
└── 2×2 grid of testimonial cards
    Each card:
    ├── Quote text
    ├── Name
    └── Role/title

## Computed Styles

### Section Container
- backgroundColor: rgb(223, 229, 215) = #dfe5d7
- paddingTop: 80px
- paddingBottom: 80px
- paddingLeft: 80px
- paddingRight: 80px

### Section Header (centered)
- textAlign: center
- marginBottom: 60px

### H2 "From Past Participants"
- fontFamily: "Instrument Serif", serif
- fontSize: 56px
- fontStyle: italic
- fontWeight: 400
- color: rgb(13, 18, 11) = #0d120b
- marginBottom: 12px

### Subtitle
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(44, 50, 41) = #2c3229

### Cards Grid
- display: grid
- gridTemplateColumns: repeat(2, 1fr)
- gap: 20px
- maxWidth: 1000px
- margin: 0 auto

### Testimonial Card
- backgroundColor: rgb(194, 200, 188) = #c2c8bc (slightly darker sage)
- borderRadius: 16px
- padding: 40px
- display: flex
- flexDirection: column
- gap: 24px

### Quote Text
- fontFamily: "Instrument Serif", serif
- fontSize: 24px
- fontStyle: italic
- color: rgb(13, 18, 11) = #0d120b
- lineHeight: 1.5
- flex: 1

### Author Name
- fontFamily: "Satoshi", sans-serif
- fontSize: 16px
- fontWeight: 500
- color: rgb(13, 18, 11) = #0d120b

### Author Role
- fontFamily: "Satoshi", sans-serif
- fontSize: 14px
- color: rgb(44, 50, 41) = #2c3229

## Testimonials Data (verbatim)
1. **Sofia Klein** — Artisan Baker
   "The setting, the pace, the level of attention. It felt more like an apprenticeship than a class."

2. **Daniel Hart** — Restaurant Owner
   "I came expecting techniques. I left with intuition. This workshop reshaped my relationship with craft."

3. **Elena Moretti** — Private Chef
   "This completely changed how I approach dough and teaching. I've never experienced anything like it."

4. **Emily Alvarez** — Food Consultant
   "This is not for everyone, and that's exactly why it's powerful. If you're serious, it's worth every investment."

## Responsive Behavior
- Desktop: 2×2 grid
- Mobile: single column stack
