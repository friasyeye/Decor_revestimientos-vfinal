# WorkshopGallerySection Specification

## Overview
- **Target file:** `src/components/WorkshopGallerySection.tsx`
- **Interaction model:** static photo grid
- **Background:** light sage green #dfe5d7

## DOM Structure
Section
├── H2: "Moments from the Workshop"
├── Subtitle: "Quiet mornings. Fire-lit nights. Work worth remembering."
└── Photo grid (masonry-like, 3 columns, ~10 images)

## Computed Styles

### Section Container
- backgroundColor: rgb(223, 229, 215) = #dfe5d7
- paddingTop: 80px
- paddingBottom: 80px
- paddingLeft: 80px
- paddingRight: 80px

### Section Header
- textAlign: center
- marginBottom: 48px

### H2 "Moments from the Workshop"
- fontFamily: "Instrument Serif", serif
- fontSize: 64px
- fontStyle: italic
- fontWeight: 400
- color: rgb(13, 18, 11) = #0d120b
- marginBottom: 12px

### Subtitle
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(44, 50, 41) = #2c3229

### Photo Grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 12px
- maxWidth: 1200px
- margin: 0 auto

### Grid Images
- borderRadius: 12px
- overflow: hidden
- objectFit: cover
- width: 100%
- Some images span 2 columns for variety

## Assets (10 workshop images)
- `public/images/z821vNPNUJeKcWr76E0f3cymNo.jpg` — Group around wooden table with older teacher
- `public/images/mKRu7f0u4HUSaV8Zd395eBgOE.jpg` — Family meal outdoors at vineyard
- `public/images/IHsObMetV7AEeyjOW0zgKhm5o9U.jpg` — Three people removing bread from oven
- `public/images/AWlL1H4QLEme1sD4dGqa7dvnr8.jpg` — Group of smiling people in casual clothing
- `public/images/1v28XS77BccorWaMJ7suXwVaKMo.jpg` — Three people stacking firewood
- `public/images/rurWZkxRma3VIOLcSkpiVf8YaL0.jpg` — People in aprons shaping dough at table
- `public/images/Ns2lwideopI3LuOCH5Oythwj2U.jpg` — Five people sitting at table outdoors
- `public/images/VdvQOfJqXkm5iAiVXPlg5cBzdQ.jpg` — People under olive trees in conversation
- `public/images/YoOdBvIm6cyatNpumE2HZD5YB2I.jpg` — Group outside rustic stone building
- `public/images/kdn9lH05Uzi5oqeiBS5oKBY6Q.jpg` — Four people walking vineyard path

## Responsive Behavior
- Desktop: 3-column grid
- Mobile: 2-column or 1-column grid
