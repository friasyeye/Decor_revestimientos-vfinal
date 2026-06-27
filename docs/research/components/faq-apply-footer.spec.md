# FAQ + Apply + Footer Specification

## FAQ Section
- **Target file:** `src/components/FAQSection.tsx`
- **Background:** light sage green #dfe5d7
- **Interaction model:** click-to-expand accordion

### DOM Structure
Section (sage green)
├── Left column (sidebar):
│   ├── Text: "Couldn't find your question?"
│   ├── Text: "Get in touch with us!"
│   └── 3 social icon buttons (Instagram, Phone, Email) — dark circular buttons
└── Right column (accordion):
    └── 6 FAQ accordion items (expand/collapse on click)

### Layout
- display: grid
- gridTemplateColumns: 1fr 2fr
- gap: 80px
- paddingTop: 80px
- paddingBottom: 80px
- paddingLeft: 80px
- paddingRight: 80px
- alignItems: start
- backgroundColor: #dfe5d7

### Sidebar Text
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(44, 50, 41) = #2c3229
- lineHeight: 1.5
- marginBottom: 24px

### Social Icon Buttons
- backgroundColor: rgb(44, 50, 41) = #2c3229
- borderRadius: 50% (circular)
- width: 48px
- height: 48px
- display: flex, alignItems: center, justifyContent: center
- color: #dfe5d7
- display: flex, gap: 12px (row of 3 icons)
- Icons: Instagram, Phone, Email — each ~20px

### FAQ Accordion Item
- borderBottom: 1px solid rgba(13,18,11,0.2)
- paddingTop: 20px
- paddingBottom: 20px
- cursor: pointer
- display: flex
- justifyContent: space-between
- alignItems: center

### FAQ Question Text
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(13, 18, 11) = #0d120b
- fontWeight: 400

### FAQ Expand Icon
- A "+" icon (round dark circle with + inside)
- backgroundColor: rgb(44, 50, 41) = #2c3229 (or #0d120b)
- borderRadius: 50%
- width: 32px, height: 32px
- color: #dfe5d7
- display: flex, alignItems: center, justifyContent: center

### FAQ Answer Text (when expanded)
- fontFamily: "Satoshi", sans-serif
- fontSize: 16px
- color: rgb(44, 50, 41) = #2c3229
- lineHeight: 1.6
- paddingBottom: 12px

### FAQ Questions (verbatim)
1. "Who is this for?"
2. "How many people attend each edition?"
3. "Is accommodation included?"
4. "What language is the workshop conducted in?"
5. "How does the application process work?"
6. "Can I attend with a partner or team member?"

(No answers visible — they're hidden until expanded. Use placeholder answers.)

---

## Apply Section
- **Target file:** `src/components/ApplySection.tsx`
- **Background:** alternating light (#dfe5d7) and dark (#0d120b) — the form area is light sage

### DOM Structure
Section (sage bg)
├── Header (centered):
│   ├── H2: "Apply for A Seat" (large italic)
│   └── Description paragraph
└── 2-column layout:
    ├── Left: tall image of dough on wooden board
    └── Right: application form

### Apply Section Header
- textAlign: center
- paddingTop: 80px
- paddingBottom: 48px
- paddingLeft: 80px
- paddingRight: 80px
- backgroundColor: #dfe5d7

### H2 "Apply for A Seat"
- fontFamily: "Instrument Serif", serif
- fontSize: 64px
- fontStyle: italic
- fontWeight: 400
- color: rgb(13, 18, 11) = #0d120b
- marginBottom: 16px

### Description
- fontFamily: "Satoshi", sans-serif
- fontSize: 18px
- color: rgb(44, 50, 41) = #2c3229
- maxWidth: 600px
- margin: 0 auto
- textAlign: center
- lineHeight: 1.6

### Description text: "Participation is limited and intentionally curated. We review every application to ensure alignment, commitment, and a focused group environment. Pricing and availability are shared privately with approved applicants."

### Form Container (2-column)
- display: grid
- gridTemplateColumns: 1fr 1fr
- backgroundColor: #dfe5d7
- paddingLeft: 80px
- paddingRight: 80px
- paddingBottom: 80px
- gap: 48px
- alignItems: start

### Form Image (left)
- borderRadius: 16px
- overflow: hidden
- Image: `public/images/xkarbZrnCBVYbD2kRRdam9aKt0.jpg` (OR use another relevant bread image)
- Actually the apply section image is dough on wood board - likely `public/images/rurWZkxRma3VIOLcSkpiVf8YaL0.jpg`
- height: ~500px
- objectFit: cover

### Form Fields (right column)
Form fields with labels above inputs:
1. "Your full name" — text input
2. "Your email" — email input
3. "Current role or practice" — text input
4. "How would you describe your current skill level?" — radio buttons: Foundational / Intermediate / Advanced / Professional
5. "Anything else we should know?" — textarea
6. Submit button: "Submit" — full width, dark bg #171d15, text #dfe5d7, borderRadius 16px, padding 16px

### Input Field Styles
- backgroundColor: rgba(0,0,0,0) (transparent)
- border: 1px solid rgba(13,18,11,0.3)
- borderRadius: 8px
- padding: 12px 16px
- fontFamily: "Satoshi", sans-serif
- fontSize: 16px
- color: #0d120b
- width: 100%
- marginBottom: 20px

### Label Styles
- fontFamily: "Satoshi", sans-serif
- fontSize: 14px
- color: #2c3229
- marginBottom: 6px
- display: block

---

## Footer
- **Target file:** `src/components/Footer.tsx`
- **Background:** dark olive green rgb(90, 96, 86) = #5a6056

### DOM Structure
Footer (dark olive bg)
├── Left: Logo (✦ MaestroClass) + tagline + "Created by Struxent"
├── Center: (empty space)
├── Navigation column: "Navigation" header + 5 links
└── Social column: "Social" header + 4 links

### Footer Container
- backgroundColor: rgb(90, 96, 86) = #5a6056
- paddingTop: 60px
- paddingBottom: 60px
- paddingLeft: 80px
- paddingRight: 80px
- display: grid
- gridTemplateColumns: 2fr 1fr 1fr 1fr
- gap: 40px
- alignItems: start

### Logo Area
- ✦ star icon + "MaestroClass" text
- fontFamily: "Abhaya Libre", serif
- fontSize: 20px
- color: #dfe5d7
- marginBottom: 12px

### Tagline
- fontFamily: "Satoshi", sans-serif
- fontSize: 14px
- color: rgba(223,229,215,0.7)
- lineHeight: 1.5
- marginBottom: 40px
- maxWidth: 280px

### "Created by Struxent"
- fontFamily: "Satoshi", sans-serif
- fontSize: 13px
- color: rgba(223,229,215,0.5)

### Column Headers ("Navigation", "Social")
- fontFamily: "Satoshi", sans-serif
- fontSize: 14px
- fontWeight: 500
- color: #dfe5d7
- letterSpacing: 0.5px
- marginBottom: 16px
- textTransform: uppercase (or just regular)

### Links
- fontFamily: "Satoshi", sans-serif
- fontSize: 16px
- color: rgba(223,229,215,0.75)
- display: block
- marginBottom: 12px
- hover: color #dfe5d7

### Navigation links: Experiences | Host | Package | Location | FAQ
### Social links: Instagram | Youtube | X/Twitter | Threads

## Responsive Behavior (all sections)
- Desktop (1440px): full layouts as described
- Mobile (390px): single column, reduced padding
