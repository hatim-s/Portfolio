---
name: Hatim Shakir Portfolio
description: A particle-collider event recorder for engineering work, ownership, and signal.
colors:
  ink: "#061129"
  ink-2: "#020814"
  blue: "#173fd1"
  blue-electric: "#214bd8"
  orange: "#ff5600"
  bone: "#eeeada"
  acid: "#d7ff1f"
  muted: "#aeb9d8"
typography:
  display:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(7rem, 12vw, 12rem)"
    fontWeight: 600
    lineHeight: 0.68
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"Clash Display", sans-serif'
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  title:
    fontFamily: '"Clash Display", sans-serif'
    fontSize: "clamp(2.4rem, 5vw, 5.7rem)"
    fontWeight: 650
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  body:
    fontFamily: '"Clash Display", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.68rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  square: "0"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink-2}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0.95rem 1.05rem 0.95rem 1.35rem"
    height: "4rem"
  button-primary-hover:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
  calibration-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.acid}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.35rem 0.5rem"
  project-ledger-row:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.bone}"
    rounded: "{rounded.square}"
    padding: "clamp(1.4rem, 3vw, 3rem)"
---

# Design System: Hatim Shakir Portfolio

## Overview

**Creative North Star: "The Recorded Event Chamber"**

This system treats engineering as a recorded event: decisions leave trajectories from state and schema through interface and release. It is cinematic, technical, and densely instrumented, using a particle-detector image, a live canvas trace field, measured labels, and verified activity readouts as the visual proof layer.

The world is maximal without becoming ornamental. Monumental condensed type collides with narrow rails and plotted signal; hot-orange control planes cut through ultramarine and near-black fields; bone reading surfaces interrupt the dark run. It explicitly refuses the generic developer hero and repeated floating-card grid.

**Key Characteristics:**

- Monumental condensed naming overlaps the detector field.
- Dense rails, ticks, rules, telemetry, and plotted data make evidence visible.
- Hot orange drives actions and major signal; chartreuse marks calibration and focus.
- Square instrument controls and hard section boundaries preserve mechanical precision.
- Public and private work share one newest-first ledger without misrepresenting access.

## Colors

The palette behaves like detector hardware under ultraviolet light: two ink depths carry the chamber, two ultramarines separate systems, bone carries readable matter, and orange plus acid mark different levels of urgency.

### Primary

- **Hot Control Orange:** The dominant action and recorded-signal color for the primary action, active indices, ownership axes, the signal section, and selected detector tracks.

### Secondary

- **Ultramarine Structure:** The grounded blue field used for archive bands, branded evidence, and structural separation.
- **Electric Ultramarine:** The brighter blue used for contact, interactive ledger states, and energetic depth.

### Tertiary

- **Calibration Acid:** A rare chartreuse used for focus outlines, calibration corners, detector points, selection, and hover confirmation.

### Neutral

- **Deep Instrument Ink:** The main page field and dark text on light or high-energy surfaces.
- **Void Ink:** The deepest section and telemetry surface, used where the signal needs maximum contrast.
- **Warm Detector Bone:** Primary reading color on dark fields and the full experience-section surface.
- **Cool Readout Muted:** Secondary labels and low-priority telemetry on dark fields.

### Named Rules

**The Split-Signal Rule.** Orange means action or primary recorded energy; acid means calibration, focus, or confirmation. Do not use them interchangeably.

**The Bone Interruption Rule.** Light surfaces are deliberate chapter changes, not a default card color.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)<br>
**Body Font:** Clash Display (with sans-serif fallback)<br>
**Label/Mono Font:** UI monospace (with SFMono-Regular, Menlo, Monaco, Consolas, and monospace fallbacks)

**Character:** Barlow Condensed turns the name into monumental equipment labeling. Clash Display carries assertive editorial reading, while the monospace layer makes dates, indices, evidence, and telemetry feel recorded rather than decorated.

### Hierarchy

- **Display:** Semibold, tightly tracked, uppercase, and compressed vertically; reserved for the two-line first-viewport name and allowed to overlap the event chamber.
- **Headline:** Heavy, tightly tracked section statements with balanced wrapping and short measures, typically no more than 8–13 characters per line.
- **Title:** Large project and record names that carry the same compressed rhythm at a smaller scale.
- **Body:** Regular Clash Display for explanations, typically limited to 43–65 characters per line and set at a readable 1.45–1.55 line height.
- **Label:** Small uppercase monospace with open tracking for dates, run numbers, telemetry, access states, evidence, and chart coordinates.

### Named Rules

**The Three-Instrument Rule.** Use condensed display for identity, Clash for narrative and titles, and monospace only for recorded metadata.

## Layout

The desktop first viewport is a four-part instrument: numbered rail, narrative and monumental name, dense chamber, then verified edge readouts. The main sections use asymmetric two-column grids, offset evidence bands, hard ledger rows, and vertical detector spines instead of centered card collections. Repeated 1px rules establish alignment and continuity.

Section padding follows a fluid block and inline rhythm. At the 1100px breakpoint, the header simplifies, readouts move over the chamber, ownership and project ledgers reduce columns, and the signal section becomes a single column. At 760px, the numbered rail and secondary navigation items disappear, the chamber moves behind the copy, readouts become a 2×2 block, ledgers become two-column records, and month labels turn vertical. Touch-bearing links remain at least 2.75rem high, with principal controls at 4rem or more.

**The Ledger-Not-Grid Rule.** Repeated work belongs in ruled rows with dates, access, evidence, and actions aligned to a shared axis; do not convert it into a generic card grid.

## Elevation & Depth

The system has no ambient drop shadows. Depth comes from near-black and ultramarine tonal layers, translucent overlays, 1px rule lines, a fixed particle texture, image/canvas screen blending, and the occasional inset ring used only inside circular detector markers. Surfaces remain flat at rest; hover states change field color rather than lifting.

**The No-Lift Rule.** Never add card shadows or hover elevation. Change color, rule position, or padding to show state.

## Shapes

The dominant form language is square and rectilinear: actions, tags, telemetry plates, ledger rows, readout blocks, and section fields use zero radius. Hairline borders and hard full-width boundaries make the interface feel calibrated. Circles are reserved for detector geometry—rail nodes, plotted rings, and the event core—and are not a general component radius.

**The Instrument-Corner Rule.** Controls and containers stay square; circular forms must communicate measurement or detection.

## Components

### Primary Action

- **Shape:** A wide square control with a 4rem minimum height and an arrow held at the far edge.
- **Default:** Hot-orange field, void-ink text, uppercase Clash label, and asymmetric horizontal padding.
- **Hover / Focus:** Hover changes the field to calibration acid without lift. Keyboard focus uses the global 3px acid outline with a 4px offset.

### Navigation

- **Style:** Compact uppercase monospace links sit in a ruled header; orange numerical prefixes connect navigation to the recorder index.
- **State:** Default links use bone, hover moves to acid, and the hero ruler marks the current item in orange. Mobile removes low-priority destinations instead of squeezing all labels.

### Calibration Tags

- **Style:** Small square, 1px acid-outlined tags with uppercase monospace text and a translucent ink field when laid over the chamber.
- **Use:** Access state, chamber coordinates, or calibration telemetry only; they are not promotional badges.

### Project Ledger Rows

- **Corner Style:** Full-width, square, ruled records.
- **Background:** Void ink at rest; hover cycles through electric ultramarine, hot orange, and calibration acid by row.
- **Depth:** No shadow. Column rules, large index numerals, and the field-color transition provide structure and feedback.
- **Content:** Number, date/access, title/body/technology labels, then source or live actions. Private records replace unavailable source links with a lock state.

### Event Chamber

The signature component layers a detector photograph, a responsive canvas, circular rings, 96 ticks, seeded particle trajectories, square hit points, a glowing collision core, frame corners, and edge telemetry. Fine tracks are predominantly blue; orange is reserved for selected trajectories and major ticks; acid marks sparse calibration hits. Pointer parallax is disabled for coarse pointers. Animation stops while offscreen, and reduced-motion renders a deterministic static frame.

### Signal Chart

Thirteen ruled columns plot monthly contribution volume. Bars rise from a hard baseline with square-root scaling; values and month names use monospace labels. The chart keeps its density on small screens by scrolling horizontally and rotating month labels rather than collapsing into a decorative summary.

## Do's and Don'ts

### Do:

- **Do** make evidence visible through numbers, dates, access states, plotted data, and technical readouts.
- **Do** keep actions, tags, ledgers, and information surfaces square and shadowless.
- **Do** use orange for primary energy and acid for calibration, focus, and confirmation.
- **Do** preserve the complete static detector frame and near-instant state changes when reduced motion is requested.
- **Do** keep public and private project states explicit and readable.

### Don't:

- **Don't** fall back to a centered developer hero followed by a generic card grid.
- **Don't** add rounded pills, soft cards, glassmorphism, or ambient drop shadows.
- **Don't** use the monospace face for narrative paragraphs or the condensed face for dense reading.
- **Don't** animate the chamber for coarse pointers, offscreen visitors, or reduced-motion users.
- **Don't** hide evidence behind purely decorative motion or inaccessible interactions.
