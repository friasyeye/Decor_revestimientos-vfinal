# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** fixed top, transparent background
- **Screenshot:** hero screenshot shows full navbar

## DOM Structure
Fixed top bar (position: fixed, top: 0, z-index: 5, height: 76px)
├── Logo area (left): ✦ star icon + "MaestroClass" text
├── Nav links (center): Experiences | Host | Package | Location | FAQ
└── CTA button (right): "Apply Now" dark pill button

## Computed Styles

### Navbar Container
- position: fixed
- top: 0
- zIndex: 5
- height: 76px
- width: 100%
- backgroundColor: rgba(0, 0, 0, 0) (transparent)
- display: flex
- alignItems: center
- padding: 16px 24px
- justifyContent: space-between

### Logo Text "MaestroClass"
- fontFamily: "Abhaya Libre", serif
- fontSize: 20px
- color: rgb(13, 18, 11) = #0d120b
- fontWeight: 400
- letterSpacing: -0.4px
- display: flex, alignItems: center, gap: 8px (icon + text)

### Star Icon (✦)
- SVG, ~16x16px, fill: currentColor (#0d120b)
- Path: Phosphor star icon

### Nav Links (Experiences, Host, Package, Location, FAQ)
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(23, 29, 21) = #171d15
- fontWeight: 400
- letterSpacing: 0.16px
- gap between links: ~32px (flex row)

### "Apply Now" Button
- backgroundColor: rgb(23, 29, 21) = #171d15
- borderRadius: 100px (pill shape)
- padding: 12px 24px
- color: rgb(223, 229, 215) = #dfe5d7
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- fontWeight: 400
- letterSpacing: 0.16px
- cursor: pointer

## Text Content
- Logo: ✦ MaestroClass
- Nav: Experiences | Host | Package | Location | FAQ
- Button: Apply Now

## Responsive Behavior
- Desktop (1440px): full horizontal layout with all nav items visible
- Mobile (390px): hide nav links, show hamburger (keep logo + CTA)
- Breakpoint: ~768px

## Notes
- The navbar stays transparent (no background blur/color change on scroll) based on extraction
- Logo ✦ star is StarSparkleIcon from `src/components/icons.tsx`
