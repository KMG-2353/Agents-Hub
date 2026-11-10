---
name: Agents Hub
description: Intelligent automation agents for insurance work. Each one opens as its own app.
colors:
  brand: "#2a36e8"
  brand-ink: "#ffffff"
  brand-muted: "#d3d6ff"
  ledger-grey: "#eef0f4"
  ink: "#0b0e1a"
  muted: "#545b6d"
  hairline: "#d3d8e1"
  rule-strong: "#0b0e1a"
  hover-wash: "#f7f8fb"
  brand-dark: "#2733d6"
  brand-muted-dark: "#cdd1ff"
  night-ground: "#090b12"
  ink-dark: "#e9ecf4"
  muted-dark: "#979eb2"
  hairline-dark: "#222739"
  hover-wash-dark: "#141826"
  live-dark: "#9aa2ff"
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
  button-field-icon:
    backgroundColor: "transparent"
    textColor: "{colors.brand-ink}"
    rounded: "{rounded.control}"
    size: "40px"
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

Agents Hub is one abstract working surface where insurance's ruled, tabular order meets agents doing the work. The page reads like a loss-development triangle being filled in cell by cell with no human hand: a flat electric-ultramarine field owns the top of the page, square cells on a strict grid are the only ornament, and everything below the field is organised by ruled hairlines and tabular figures on a cool grey (light) or near-black (dark) ground.

The world is flat, square and ruled. There are no gradients, no glows, no shadows, no photography and no card grid. Depth comes from the single saturated field set against a quiet ledger ground; hierarchy comes from Archivo's width axis (expanded for display and headings, normal width for reading) and from rule weight (a 2px ink rule opens a schedule, 1px hairlines divide its rows). The density is calm: one agent must look complete, fifteen must still look ordered.

The system was built to accept KMG branding later. Every saturated pixel derives from one brand token, so the identity can be swapped without touching component code.

**Key Characteristics:**
- One flat brand field at the top of the page; one accent colour across the whole system.
- Square cells (no radius) as the only ornament: hero lattice, wordmark, per-agent glyphs, status marks, favicon.
- Ruled tables, not cards: hairline rows, a heavy opening rule, column headings in small muted text.
- Archivo variable, stretched to 118-125% width for display and headings, normal width for text.
- Tabular figures for every count, year and number.
- Light and dark themes share one structure; only token values change.

## Colors

A cool, near-monochrome ledger palette with a single electric-ultramarine voice.

### Primary
- **Electric Ultramarine** (`brand`; `brand-dark` in dark theme): the hero field background, text selection, focus outlines, the Open action's hover fill, the live status cell, and the favicon. It is the only saturated colour in the system.
- **Field Ink** (`brand-ink`): text, lattice cells and controls placed on the brand field; the Open action's hover text.
- **Pale Periwinkle** (`brand-muted`; `brand-muted-dark`): secondary text on the brand field (the hero's purpose line). A hand-tuned tint of the brand, not a derived value.
- **Live Signal** (`live`): equals `brand` in light theme; lifts to a lighter periwinkle (`live-dark`) in dark theme so the live cell and "Live" label clear contrast on the night ground.

### Neutral
- **Ledger Grey** (`ledger-grey`) / **Night Ground** (`night-ground`): the page ground below the field, also the html background and scrollbar track.
- **Ink** (`ink`; `ink-dark`): headings, agent names, filled glyph cells, the active filter chip fill.
- **Muted Slate** (`muted`; `muted-dark`): descriptions, categories, column headings, footer text, the in-progress status.
- **Hairline** (`hairline`; `hairline-dark`): every 1px rule and border by default (set globally on `*`), empty glyph-cell strokes.
- **Strong Rule** (`rule-strong`): the 2px rule under a schedule heading and the outline of the Open action and active chip. It is always the ink colour.
- **Hover Wash** (`hover-wash`; `hover-wash-dark`): the row tint on hover and focus.

A `--surface` token (`#ffffff` / `#10131d`) is declared in `src/index.css` but no shipped surface uses it; it is not part of the recorded system.

### Named Rules
**The One Voice Rule.** Brand is the only accent. It appears as the hero field and in small, meaningful marks (live status, focus, selection, the Open hover). Do not add a second hue for categories, status or decoration; status is told by cell shape, not colour.

**The One-Token Brand Swap Rule.** KMG branding will replace the current ultramarine. The swap must stay a token change, never a component edit. The complete swap list is: `--brand` in both `:root` and `:root.dark`; `--brand-muted` in both (it is a tint of the brand); `--live` in `:root.dark` (light theme inherits `--brand`); `--brand-ink` if the new brand is light enough to need dark ink; `<meta name="theme-color">` in `index.html`; and the background `fill` in `public/favicon.svg`. Components must reference `var(--brand)` / `var(--live)` / `var(--brand-ink)` (or the `brand`, `live`, `brand-ink` Tailwind colours), never a literal brand hex.

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

The hero field takes about 60% of the first viewport on ≥640px (`min(62svh, 36rem)`): an 80px top bar (wordmark left, theme toggle right), then a two-column grid (1.15fr / 0.85fr from 768px) with the title block bottom-left and the lattice right, bleeding 16px past the field's padding. Below 768px the lattice shrinks to a 96px mark beside the counts.

The agent schedule is a ruled table. From 1024px each row is a five-column grid (46px glyph, minmax(14rem,1fr) name, minmax(0,1.6fr) description, 8.5rem status, Open action) with 32px column gaps and 28px vertical padding, under a caption-size column heading row. Below 1024px the row collapses to glyph, name and Open action on top, with description and status stacked beneath, indented to the name column from 640px.

Vertical rhythm: 56-80px above the schedule, 80-112px around secondary sections, 32px footer padding. Hairlines, not whitespace boxes, separate content.

**The Rows Not Cards Rule.** Collections are ruled rows in a schedule, never a grid of cards. A new agent adds a row; the layout does not change between 1 and 15 agents.

## Elevation & Depth

The system is completely flat. There is no `box-shadow` anywhere. Depth is tonal and structural: the saturated brand field sits above the neutral ground as a plane of colour, rules divide rather than lift, and interaction is shown by a tint (hover wash) and by quieting siblings to 50% opacity.

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
- **Field icon button (theme toggle):** 40px square on the brand field, 1px translucent field-ink border, field-ink icon; hover adds a 12% field-ink wash, active 20%.

### Chips
- **Style:** filter chips, 36px tall, 6px radius, 1px hairline border, Muted Slate text, 0.875rem medium. Shown only when there are at least two categories.
- **State:** active (`aria-pressed`) chips fill with ink and take ground-coloured text; inactive chips darken border and text to ink on hover.

### Cards / Containers
There are no cards. Containers are ruled bands: a schedule (2px ink rule, caption row, hairline rows), a definition list split by hairlines, and a footer under a hairline.

### Navigation
A single top bar inside the brand field: 24px lattice mark plus wordmark (title style at 0.95rem, 118% width) on the left, theme toggle on the right. No menu. The footer repeats a 16px mark and wordmark in ink.

### Agent Row (signature)
The whole row is one link that opens the agent in a new tab. Glyph, name and category, plain-language description, status mark, Open action. Hover or focus tints the row with Hover Wash and fades every other row to 50% opacity (240ms, same easing); focus uses an inset 2px brand outline.

### Agent Glyph (signature)
A 4×4 cell mark generated from the agent id: a full top row and descending stepped runs beneath, filled in ink with hairline outlines for empty cells. A live agent lights its leading cell in Live Signal. 40-46px.

### Status Mark (signature)
A single 10px cell carries state by shape, not hue: **Live** solid Live Signal cell with Live-coloured label; **Beta** outlined ink cell half-filled from the bottom with ink label; **In progress** dashed muted outline with muted label.

### Lattice (signature)
The hero's 9×9 development triangle in field ink. The upper-left triangle is solid (94% opacity, the known record); the lower-right cells are 38%-opacity outlines that fill in a slow diagonal wave (9s cycle, `cubic-bezier(0.16, 1, 0.3, 1)`, staggered by diagonal). Under reduced motion the open cells rest at 38% fill. The 3×3 wordmark mark and the favicon are reductions of the same triangle.

## Do's and Don'ts

### Do:
- **Do** reference brand colour only through `var(--brand)`, `var(--live)`, `var(--brand-ink)` and `var(--brand-muted)` so a KMG swap stays a token change.
- **Do** update `theme-color` in `index.html` and the favicon fill in `public/favicon.svg` whenever `--brand` changes.
- **Do** build any new ornament or mark from square cells on the 12-unit lattice step.
- **Do** list collections as ruled rows with a 2px ink opening rule and 1px hairlines.
- **Do** expand headings with Archivo's width axis (118-125%) and keep running text at normal width.
- **Do** use tabular figures for counts and dates.
- **Do** signal status by cell shape (solid, half, dashed) with the label always present.
- **Do** use 240ms `cubic-bezier(0.16, 1, 0.3, 1)` for state transitions and drop them under `prefers-reduced-motion`.

### Don't:
- **Don't** add a second accent hue; status, categories and decoration stay in brand plus neutrals.
- **Don't** hard-code the brand hex (or a literal white standing in for `brand-ink`) in component code.
- **Don't** use shadows, gradients, glows or blur.
- **Don't** round cells; the 6px radius is for interactive controls only.
- **Don't** present agents as a grid of cards.
- **Don't** add uppercase tracked labels or eyebrow text above headings.
