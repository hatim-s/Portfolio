---
name: Hatim Shakir Portfolio
description: A kinetic paper-cinema title sequence for complex systems, evidence, and engineering work.
colors:
  projector-black: "#0a0908"
  projector-soft: "#17130f"
  uncoated-cream: "#f2e8cd"
  paper-deep: "#d8c9a2"
  cadmium-yellow: "#ffc900"
  process-cyan: "#00bddd"
  hot-magenta: "#f3006f"
  vermilion: "#f04420"
  focus-cyan: "#00d7ff"
typography:
  display:
    fontFamily: '"Barlow Condensed", sans-serif'
    fontSize: "clamp(5.5rem, 18vw, 16rem)"
    fontWeight: 700
    lineHeight: 0.73
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Barlow Condensed", sans-serif'
    fontSize: "clamp(4rem, 17vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Clash Display", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.58rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.075em"
rounded:
  square: "0"
spacing:
  action-min: "44px"
  section-mobile: "1rem"
  section-wide: "clamp(2rem, 6vw, 7rem)"
components:
  action-primary:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.projector-black}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0.9rem 1.15rem"
    height: "4rem"
  evidence-frame:
    backgroundColor: "{colors.uncoated-cream}"
    textColor: "{colors.projector-black}"
    rounded: "{rounded.square}"
    padding: "1rem"
  project-action:
    backgroundColor: "{colors.projector-black}"
    textColor: "{colors.uncoated-cream}"
    rounded: "{rounded.square}"
    padding: "0.75rem 0.9rem"
    height: "3rem"
---

# Design System: Hatim Shakir Portfolio

## Overview

**Creative North Star: "Paper Cinema / Kinetic Cut-and-Paste"**

The interface behaves like an experimental opening-title sequence colliding with an engineering production notebook. Every section is directed as a distinct scene: paper stages tear into one another, evidence is framed as contact stock, private work is handled as a dossier, and projects become one-sheets rather than interchangeable cards.

The world is physical but not nostalgic. Scanned uncoated paper supplies real material; typography, planes, timecode, redactions, registration, and diagrams stay crisp and semantic. Maximal composition is balanced by strong reading order, strict factual language, and explicit public/private states.

**Key Characteristics:**

- Projector-black and cream establish the film stock; saturated process colors own complete scenes.
- Compressed title lettering is monumental, while narrative text remains calm and readable.
- Hard color cuts, torn silhouettes, misregistration, and contact frames replace generic containers.
- Motion is sparse and native to the world: one stop-motion flight and scroll-exposed contribution frames.

## Colors

This is a full-palette system: black and cream are the stock, while yellow, cyan, magenta, and vermilion behave like separate print passes.

### Primary

- **Cadmium Action Yellow:** carries the paper-flight stage, major project scenes, and selected evidence.
- **Projector Black:** the continuous film base, body text on light stock, and high-contrast control field.

### Secondary

- **Process Cyan:** owns programme transitions, selected data, and keyboard focus.
- **Hot Magenta:** owns one-sheet scenes, misregistration, and the contribution/contact rhythm.
- **Vermilion:** carries primary actions, evidence stamps, and hard chapter cuts.

### Neutral

- **Uncoated Cream:** primary paper, light-stage copy, and the verified evidence reel.
- **Paper Deep:** low-priority copy on projector black.

### Named Rules

**The Whole-Pass Rule.** A process color owns a plane or scene; it is not sprinkled across neutral cards as decoration.

**The Evidence Contrast Rule.** Facts sit on black or cream stock with direct contrast. Halftones never run behind unprotected reading copy.

## Typography

**Display Font:** Barlow Condensed (with sans-serif fallback)

**Body Font:** Clash Display (with sans-serif fallback)

**Label/Mono Font:** UI monospace (with SFMono-Regular, Menlo, Monaco, Consolas, and monospace fallbacks)

**Character:** Barlow Condensed supplies film-title compression and poster scale. Clash Display keeps prose contemporary and human. Monospace is reserved for dates, timecode, evidence, and measurement.

### Hierarchy

- **Display:** heavy, compressed, uppercase, and allowed to exceed the conventional web scale for names and one-sheets.
- **Headline:** large condensed statements with a tight 0.82 line height and balanced wrapping.
- **Body:** regular Clash Display at a 1rem floor and 1.55 line height, generally held under 65 characters.
- **Label:** small uppercase monospace for timecode, dates, access, and technical measurement only.

### Named Rules

**The Three-Voice Rule.** Condensed type directs, Clash explains, and monospace records. Never trade their roles for variety.

**The Real-Word Rule.** Poster titles wrap only at genuine word boundaries; never fracture a name to preserve scale.

## Layout

Desktop opens as three simultaneous stages: black title, yellow paper flight, and cream evidence reel. At tablet widths the evidence reel becomes a full-width four-frame strip. At mobile the same story becomes sequential—title, flight, then 2×2 evidence—without hiding content.

Sections use scene-specific topology rather than a shared container. The dossier layers a black case file over cream stock and peels into four color planes. Project one-sheets alternate copy and architecture positions at wide widths. The contribution contact sheet uses seven frames over six offset frames on desktop and a readable two-column sequence on mobile.

Section inline space moves from 1rem on narrow screens to a fluid 2–7rem range. Principal controls are at least 44px tall; sticky navigation appears only where desktop space can support it.

## Elevation & Depth

There is no card elevation system. Depth comes from real paper texture, clipped/torn silhouettes, overlap, misregistered cyan/magenta underprints, color-field cuts, and a single soft drop shadow beneath the paper plane. Surfaces do not lift on hover.

**The Physical-Layer Rule.** If depth appears, it must describe stacked paper or ink registration; ambient glass, glowing halos, and generic hover elevation do not belong.

## Shapes

Controls and evidence frames stay square. Irregularity comes from clipped paper perimeters, not rounded containers. Circles are reserved for registration and measurement marks. The signature paper plane is exact SVG geometry with cream stock, black folds, and process-color underprints.

## Components

### Primary action

- **Shape:** a wide clipped vermilion paper strip with a 4rem minimum height.
- **State:** cyan replaces vermilion on hover; a 3px focus-cyan outline with 5px offset serves keyboard focus.
- **Copy:** direct verb-and-object labels such as “Cut to the projects.”

### Film navigation

- **Style:** projector-black rail, visible perforations, yellow brand slate, four plain-language destinations, and a cyan contact route.
- **Responsive:** destination links collapse below tablet widths; the brand remains a 44px home target.

### Verified evidence reel

- **Style:** four cream paper frames with black keylines, large condensed figures, and small real timecode/data labels.
- **Responsive:** vertical edge reel on desktop, 4-up strip on tablet, 2×2 on mobile.

### Production dossier

- **Style:** black case file over textured cream, real redaction geometry, vermilion evidence stamp, then four process-color ownership scenes.
- **Truth:** blackouts are atmosphere only; all essential ownership and evidence copy remains visible.

### Project one-sheets

- **Style:** full-width scene color, giant title, date, access stamp, technology sequence, and source/live actions.
- **State:** private work has a non-interactive lock readout rather than a dead source link.

### Contribution contact sheet

- **Style:** thirteen ruled frames with timecode, value, month, and a square-root-scaled exposure bar.
- **Motion:** bars expose with stepped view-linked motion; reduced motion shows their complete final state immediately.

## Do's and Don'ts

### Do:

- **Do** let full color fields create the scroll rhythm.
- **Do** make evidence visible as real numbers, dates, access states, architecture labels, and methodology.
- **Do** use scanned paper only where the design calls for physical stock.
- **Do** keep mobile a newly composed sequence, not a scaled desktop frame.

### Don't:

- **Don't** turn project one-sheets into a repeated card grid.
- **Don't** use glass, smooth gradients, rounded floating surfaces, or conventional portfolio minimalism.
- **Don't** use concept comps as page backgrounds or let synthetic comp details become claims.
- **Don't** place decorative labels above headings as eyebrows; timecode belongs to actual sequence or measurement.
