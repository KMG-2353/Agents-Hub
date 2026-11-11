---
name: Agents Hub
description: Intelligent automation agents for insurance work. Each one opens as its own app.
colors:
  kmg-1: "#d47f2e"
  kmg-2: "#ec9e39"
  kmg-3: "#e9bc5a"
  kmg-4: "#6aa063"
  kmg-5: "#5b86e2"
  kmg-6: "#456aba"
  brand: "#3f62b0"
  brand-ink: "#ffffff"
  brand-muted: "#e3e9f8"
  ledger-grey: "#f4f4f1"
  ink: "#111216"
  muted: "#5b5e66"
  hairline: "#dcdcd6"
  rule-strong: "#111216"
  hover-wash: "#fafaf8"
  live: "#3b7a36"
  brand-dark: "#34539a"
  brand-muted-dark: "#d9e2f6"
  night-ground: "#0f1013"
  ink-dark: "#ecedef"
  muted-dark: "#9a9ea8"
  hairline-dark: "#26282e"
  hover-wash-dark: "#17181c"
  live-dark: "#7db574"
  focus-dark: "#89a9ef"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 8.5vw, 6rem)"
    fontWeight: 640
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 118"
  lead:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    fontFeature: "'tnum'"
  caption:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.33
rounded:
  none: "0px"
  control: "6px"
spacing:
  gutter-sm: "20px"
  gutter-md: "40px"
  gutter-lg: "64px"
  row-y: "28px"
  section: "80px"
  section-lg: "112px"
  container: "1280px"
components:
  button-open:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "40px"
  button-open-hover:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brand-ink}"
  chip-filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "36px"
  chip-filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ledger-grey}"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    size: "40px"
  button-icon-hover:
    backgroundColor: "{colors.hover-wash}"
  hero-field:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brand-ink}"
  agent-row:
    backgroundColor: "transparent"
    padding: "28px 12px"
  agent-row-hover:
    backgroundColor: "{colors.hover-wash}"
---

# Design System: Agents Hub

## Overview

**Creative North Star: "The Self-Completing Table"**

Agents Hub is one abstract working surface where insurance's ruled, tabular order meets agents doing the work, carried in the KMG identity. The page reads like a loss-development triangle being filled in cell by cell with no human hand: a KMG top bar carries the KMG mark, a flat KMG-blue field owns the top of the page and lands on the six-shade KMG band, square cells on a strict grid are the only ornament, and everything below is organised by ruled hairlines and tabular figures on a paper-neutral (light) or near-black (dark) ground.

The world is flat, square and ruled. There are no gradients, no glows, no shadows, no photography and no card grid. Depth comes from the single saturated field set against a quiet ledger ground; hierarchy comes from Archivo's width axis (expanded for display and headings, normal width for reading) and from rule weight (a 2px ink rule opens a schedule, 1px hairlines divide its rows). The density is calm: one agent must look complete, fifteen must still look ordered.

KMG branding is applied as tokens: the six KMG shades and the KMG blue are declared once in `src/index.css`, and every saturated pixel derives from them.

**Key Characteristics:**
- A KMG top bar (KMG mark, divider, "Intelligent Automation", theme toggle) on the page ground.
- One flat KMG-blue field at the top of the page, closed by the six-shade KMG band.
- The KMG warm shades appear only inside the lattice and the band; blue does all interface work.
- Square cells (no radius) as the only ornament: hero lattice, wordmark, per-agent glyphs, status marks, favicon.
- Ruled tables, not cards: hairline rows, a heavy opening rule, column headings in small muted text.
- Archivo variable, stretched to 118-125% width for display and headings, normal width for text.
- Tabular figures for every count, year and number.
- Light and dark themes share one structure; only token values change.

## Colors

A paper-neutral ledger palette with the KMG blue as the working voice and the KMG spectrum reserved for the brand's own marks.

### KMG spectrum
The six shades sampled from the KMG logo and colour bar, left to right. They are identical in both themes and are never used for text.
- **KMG Dark Orange** (`kmg-1`, #d47f2e), **KMG Orange** (`kmg-2`, #ec9e39), **KMG Gold** (`kmg-3`, #e9bc5a), **KMG Green** (`kmg-4`, #6aa063), **KMG Light Blue** (`kmg-5`, #5b86e2), **KMG Blue** (`kmg-6`, #456aba).
- Used in exactly three places: the KMG mark's corner glyph, the KMG band under the hero field, and the lattice's projected cells (dark orange, orange, gold, green, two diagonals each). The favicon's projected cells use orange and gold.

### Primary
- **KMG Field Blue** (`brand`; `brand-dark` in dark theme): KMG Blue deepened one step (#456aba to #3f62b0) so white text clears 5.9:1 and the tinted lead clears 4.9:1. It is the hero field, text selection, the light-theme focus outline, the Open action's hover fill, the theme colour and the favicon tile.
- **Field Ink** (`brand-ink`): text and known lattice cells on the field; the Open action's hover text.
- **Field Tint** (`brand-muted`; `brand-muted-dark`): the hero's purpose line on the field. A pale tint of the field blue, hand-tuned for contrast.
- **Live Green** (`live`; `live-dark`): KMG Green deepened for text (#3b7a36, 4.7:1 on the ground) and lifted in dark theme (#7db574). The live status cell and label, and the live corner on an agent icon.
- **Focus** (`focus`): equals `brand` in light theme; lifts to a lighter KMG blue (`focus-dark`, #89a9ef) in dark theme so the outline clears 3:1 on the night ground.

### Neutral
- **Ledger Ground** (`ledger-grey`) / **Night Ground** (`night-ground`): the page and top-bar ground, also the html background and scrollbar track. Slightly warm so it sits with the KMG oranges.
- **Ink** (`ink`; `ink-dark`): headings, agent names, the KMG letters, filled glyph cells, the active filter chip fill.
- **Muted Slate** (`muted`; `muted-dark`): descriptions, categories, column headings, footer text, the in-progress status.
- **Hairline** (`hairline`; `hairline-dark`): every 1px rule and border by default (set globally on `*`), the top bar's bottom rule, empty glyph-cell strokes.
- **Strong Rule** (`rule-strong`): the 2px rule under a schedule heading and the outline of the Open action and active chip. It is always the ink colour.
- **Hover Wash** (`hover-wash`; `hover-wash-dark`): the row tint on hover and focus; the theme toggle's hover fill.

A `--surface` token (`#ffffff` / `#17181c`) is declared in `src/index.css` but no shipped surface uses it; it is not part of the recorded system.

### Named Rules
**The Blue Works, The Spectrum Signs Rule.** KMG blue is the only interface accent (field, focus, selection, Open hover). The six-shade spectrum is the brand's signature and appears only in the KMG mark, the KMG band and the lattice. Do not use the spectrum to colour categories, agents, buttons or text. Status adds Live Green and is still told by cell shape first, with its label always present.

**The Token Swap Rule.** Brand values live only in `src/index.css`. To retune: `--kmg-1..6` in `:root`; `--brand` and `--brand-muted` in both `:root` and `:root.dark`; `--live` and `--focus` in both; `<meta name="theme-color">` in `index.html`; `theme_color` in `public/site.webmanifest`; the fills in `public/favicon.svg` and the raster icons generated from it. Components reference `var(--brand)`, `var(--kmg-n)`, `var(--live)`, `var(--focus)` or their Tailwind colours, never a literal hex.

## Typography

**Display Font:** Archivo Variable, width axis at 125% (with Archivo, ui-sans-serif, system-ui)
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** Archivo with tabular figures; no separate mono face

**Character:** One grotesque family doing two jobs. Stretched wide and tight-tracked it becomes a confident, engineered display voice; at normal width it reads plainly. The width axis, not a second family, carries the hierarchy.

### Hierarchy
- **Display** (640, clamp(3.25rem, 8.5vw, 6rem), 0.92, 125% width, balanced wrap): the hero title only, on the brand field.
- **Headline** (600, 1.875rem to 2.25rem; 1.5rem to 1.75rem for secondary sections, 118% width): section headings such as "Agents" and "Reading the status".
- **Title** (600, 1.25rem to 1.375rem, 1.25, 118% width): agent names in the schedule; also the wordmark at 0.95rem.
- **Lead** (400, 1.125rem to 1.25rem, 1.625): the one-line purpose under the display title, in Pale Periwinkle.
- **Body** (400, 0.975rem to 1rem, 1.625, max 62ch): agent descriptions and explanatory paragraphs, in Muted Slate.
- **Label** (500-600, 0.875rem, tabular figures): buttons, chips, status labels, counts, categories, footer.
- **Caption** (500, 0.75rem, sentence case): table column headings, in Muted Slate.

### Named Rules
**The Width Carries Rank Rule.** Display and headings are expanded (118-125%); running text is never expanded. Do not introduce a second typeface for headings.

**The Tabular Figures Rule.** Counts, years and any numeric column use `tabular-nums`.

**The Sentence Case Rule.** Labels and column headings are sentence case at normal tracking. No uppercase tracked labels.

## Layout

A single centred column, max 80rem (1280px), with side gutters of 20px (mobile), 40px (≥640px) and 64px (≥1024px). The hero field is full-bleed; its content shares the same container.

The top bar sits on the page ground above the field: 72px tall on mobile, 80px from 640px, closed by a hairline. The hero field below it takes about half the first viewport on ≥640px (`min(52svh, 31rem)`) and ends on the 6px KMG band: a two-column grid (1.15fr / 0.85fr from 768px) with the title block bottom-left and the lattice right, bleeding 16px past the field's padding. Below 768px the lattice shrinks to a 96px mark beside the counts.

The agent schedule is a ruled table. From 1024px each row is a five-column grid (46px glyph, minmax(14rem,1fr) name, minmax(0,1.6fr) description, 8.5rem status, Open action) with 32px column gaps and 28px vertical padding, under a caption-size column heading row. Below 1024px the row collapses to glyph, name and Open action on top, with description and status stacked beneath, indented to the name column from 640px.

Vertical rhythm: 56-80px above the schedule, 80-112px around secondary sections, 32px footer padding. Hairlines, not whitespace boxes, separate content.

**The Rows Not Cards Rule.** Collections are ruled rows in a schedule, never a grid of cards. A new agent adds a row; the layout does not change between 1 and 15 agents.

## Elevation & Depth

The system is completely flat. There is no `box-shadow` anywhere. Depth is tonal and structural: the saturated brand field sits above the neutral ground as a plane of colour, the KMG band is a hard-stopped row of six flat blocks (never a gradient), rules divide rather than lift, and interaction is shown by a tint (hover wash) and by quieting siblings to 50% opacity.

**The Flat Ledger Rule.** No shadows, gradients, glows or blur. If something needs emphasis, give it the brand colour, a heavier rule, or quiet everything else.

## Shapes

Two shapes only. Cells are perfectly square with sharp corners (0 radius): lattice cells, glyph cells, status cells, the favicon's cells. Interactive controls (Open action, filter chips, theme toggle) take a modest 6px radius, the only radius in the system (the favicon tile also uses it). Borders are 1px hairlines; the schedule heading rule is 2px in ink.

The cell grammar is fixed: square cells on a 12-unit step with a 2-3 unit gap (9-10 unit cell). Filled cells are solid; empty cells are 1px outlines. Every ornament in the system is built from this grammar.

**The Square Cell Rule.** Ornament is square cells on a strict grid, nothing else. No circles, blobs, illustrations or icon tiles as decoration. Functional UI icons (sun/moon, up-right arrow) are 16-18px line icons at stroke 2-2.25.

## Components

### Buttons
Quiet outlined controls that fill with brand when their row is pointed at.
- **Shape:** gently rounded (6px).
- **Open action (primary):** transparent, 1px Strong Rule border, ink text, 0.875rem semibold, 40px tall, 14px horizontal padding, trailing up-right arrow. It is a visual affordance inside a row-wide link.
- **Hover / Focus:** when the row is hovered or focused, the action fills with brand, border and text switch to brand / brand-ink, and the arrow nudges 2px up-right; 240ms `cubic-bezier(0.16, 1, 0.3, 1)`. Removed under reduced motion.
- **Icon button (theme toggle):** 40px square in the top bar, 1px hairline border, ink icon; hover steps the border to Strong Rule and fills with Hover Wash.

### Chips
- **Style:** filter chips, 36px tall, 6px radius, 1px hairline border, Muted Slate text, 0.875rem medium. Shown only when there are at least two categories.
- **State:** active (`aria-pressed`) chips fill with ink and take ground-coloured text; inactive chips darken border and text to ink on hover.

### Cards / Containers
There are no cards. Containers are ruled bands: a schedule (2px ink rule, caption row, hairline rows), a definition list split by hairlines, and a footer under a hairline.

### Navigation
A single top bar on the page ground, above the field: the KMG mark (24px tall on mobile, 32px from 640px), a hairline divider, and "Intelligent Automation" (title style at 0.875rem, 0.95rem from 640px, 118% width) on the left; the theme toggle on the right. No menu. The footer keeps a 16px lattice mark and the "Agents Hub" wordmark in ink.

### KMG Mark (brand)
`src/components/KmgLogo.tsx`. The KMG letters are an alpha mask cut from the supplied logo (`src/assets/kmg-letters.png`, 458×174) and filled with `currentColor`, so they are ink in light theme and light ink in dark. The corner glyph is redrawn as six vector facets in `--kmg-1..6`. The "KEY MANAGEMENT GROUP" line is omitted at header size. Always place it on a neutral ground: its blue facets disappear on the KMG-blue field.

### KMG Band (brand)
Six equal, hard-stopped blocks of `--kmg-1..6`, 6px tall, full-bleed, closing the hero field. It is the only place the full spectrum appears as a rule.

### Agent Row (signature)
The whole row is one link that opens the agent in a new tab (rows without a `url` render as plain rows with a muted "No link yet" and no hover response). Icon, name and category, plain-language description, status mark, Open action. Hover or focus tints the row with Hover Wash and fades every other row to 50% opacity (240ms, same easing); focus uses an inset 2px brand outline.

### Agent Icon (signature)
The agent's mark when it declares an `icon` in `src/agents.ts`: a Lucide icon (20px, 1.75 stroke, ink) centred in a hairline square cell (40-46px, 0 radius, the lattice's unit). A live agent lights an 8px Live Green cell at the tile's top-right corner. On a linked row's hover or focus the tile border steps up to Strong Rule. Icons come from Lucide only, one per agent, chosen for what the agent produces or checks. An agent with no icon falls back to its Agent Glyph.

### Agent Glyph (signature)
The fallback mark for agents without an icon. A 4×4 cell mark generated from the agent id: a full top row and descending stepped runs beneath, filled in ink with hairline outlines for empty cells. A live agent lights its leading cell in Live Green. 40-46px.

### Status Mark (signature)
A single 10px cell carries state by shape, not hue: **Live** solid Live Green cell with Live-coloured label; **Beta** outlined ink cell half-filled from the bottom with ink label; **In progress** dashed muted outline with muted label.

### Lattice (signature)
The hero's 9×9 development triangle. The upper-left triangle is solid field ink (94% opacity, the known record); the lower-right cells are 38%-opacity field-ink outlines that fill in the KMG shades in a slow diagonal wave (dark orange at the known edge, then orange, gold and green toward the far corner, two diagonals each; 9s cycle, `cubic-bezier(0.16, 1, 0.3, 1)`, staggered by diagonal). Under reduced motion the projected cells rest fully filled. The 3×3 footer mark and the favicon are reductions of the same triangle; the favicon fills its projected cells in KMG orange and gold on the KMG-blue tile. Favicon set: `favicon.svg`, `favicon.ico` (32px), `apple-touch-icon.png` (180, full-bleed), `icon-192/512.png` and `site.webmanifest` in `public/`.

## Do's and Don'ts

### Do:
- **Do** reference brand colour only through `var(--brand)`, `var(--kmg-n)`, `var(--live)`, `var(--focus)`, `var(--brand-ink)` and `var(--brand-muted)`.
- **Do** update `theme-color` in `index.html`, `theme_color` in the manifest and the favicon set whenever `--brand` changes.
- **Do** keep the KMG mark on a neutral ground and let its letters follow the text colour.
- **Do** build any new ornament or mark from square cells on the 12-unit lattice step.
- **Do** list collections as ruled rows with a 2px ink opening rule and 1px hairlines.
- **Do** expand headings with Archivo's width axis (118-125%) and keep running text at normal width.
- **Do** use tabular figures for counts and dates.
- **Do** signal status by cell shape (solid, half, dashed) with the label always present.
- **Do** use 240ms `cubic-bezier(0.16, 1, 0.3, 1)` for state transitions and drop them under `prefers-reduced-motion`.

### Don't:
- **Don't** spread the KMG spectrum into interface colour; categories, buttons and text stay in blue plus neutrals.
- **Don't** hard-code a brand hex (or a literal white standing in for `brand-ink`) in component code.
- **Don't** recolour or redraw the KMG letters; use the supplied mask.
- **Don't** use shadows, gradients, glows or blur.
- **Don't** round cells; the 6px radius is for interactive controls only.
- **Don't** present agents as a grid of cards.
- **Don't** add uppercase tracked labels or eyebrow text above headings.
