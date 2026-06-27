# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static (full-viewport hero, sticky positioned in Framer but we render as normal section)
- **Background images:** layered Tuscany landscape

## DOM Structure
Full-viewport section (min-height: 100vh)
├── Background layer: sky gradient image (CQolT7pNbKjqpl7iVfUegyYCSEE.jpg)
├── Background layer: vineyard landscape (WHoMq8xXXy3ogXpDpTqBo3Wth0A.png) overlaid
├── Foreground content (centered, ~upper 60% of viewport):
│   ├── H1: "The Lost Art of Dough" (large italic serif)
│   ├── Subtitle paragraph (centered)
│   └── "Apply for a Seat" CTA button

## Computed Styles

### Section Container
- minHeight: 100vh
- position: relative
- display: flex
- alignItems: center
- justifyContent: center
- overflow: hidden
- backgroundColor: #0d120b (dark fallback)

### Background Images
- Both images: position: absolute, inset: 0, width: 100%, height: 100%, objectFit: cover
- Sky gradient (CQolT7pNbKjqpl7iVfUegyYCSEE.jpg): z-index 0, bottom layer
- Vineyard landscape (WHoMq8xXXy3ogXpDpTqBo3Wth0A.png): z-index 1, top layer (this is the main visible image)
- The landscape PNG has transparent areas at top, letting sky gradient show through

### Content Container
- position: relative
- zIndex: 2
- display: flex
- flexDirection: column
- alignItems: center
- textAlign: center
- padding: 0 24px
- maxWidth: 900px

### H1 Title "The Lost Art of Dough"
- fontFamily: "Instrument Serif", serif
- fontSize: 88px (desktop)
- fontWeight: 400
- color: rgb(13, 18, 11) = #0d120b
- lineHeight: 96.8px (1.1)
- letterSpacing: -0.32px
- fontStyle: italic (it appears italic in the screenshot)
- marginBottom: 24px

### Subtitle paragraph
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(13, 18, 11) = #0d120b
- lineHeight: 1.6
- textAlign: center
- maxWidth: 480px
- marginBottom: 40px

### "Apply for a Seat" Button
- backgroundColor: rgb(13, 18, 11) = #0d120b
- color: rgb(223, 229, 215) = #dfe5d7
- borderRadius: 100px
- padding: 16px 32px
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- fontWeight: 400
- border: none
- cursor: pointer
- display: inline-block

## Text Content (verbatim)
- H1: "The Lost Art of Dough"
- Subtitle: "A 48-Hour immersive masterclass in sourdough, fire, and Italian tradition. Hosted in the hills of Tuscany. Limited to twelve artisans."
- Button: "Apply for a Seat"

## Assets
- Sky bg: `public/images/CQolT7pNbKjqpl7iVfUegyYCSEE.jpg`
- Landscape: `public/images/WHoMq8xXXy3ogXpDpTqBo3Wth0A.png`

## Responsive Behavior
- Desktop (1440px): H1 at 88px, content centered
- Mobile (390px): H1 at ~48px, subtitle at 16px, button full-width
- Breakpoint: ~768px
