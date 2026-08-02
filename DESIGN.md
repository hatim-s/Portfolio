---
name: Hatim Shakir Portfolio — Signal Press
description: A kinetic independent engineering dossier printed live in the browser.
colors:
  paper: "#f1e5c8"
  paper-light: "#fff7df"
  carbon: "#171411"
  signal-vermilion: "#ed3c1f"
  electric-cobalt: "#1748c8"
  proof-yellow: "#e8ff25"
typography:
  display:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(8.5rem, 19vw, 20rem)"
    fontWeight: 700
    lineHeight: 0.56
    letterSpacing: "-0.045em"
  headline:
    fontFamily: '"Clash Display", sans-serif'
    fontSize: "clamp(3.2rem, 6vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  title:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(4.8rem, 8vw, 9rem)"
    fontWeight: 700
    lineHeight: 0.68
    letterSpacing: "-0.04em"
  body:
    fontFamily: '"Clash Display", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.62rem"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "0.08em"
rounded:
  square: "0"
components:
  button-primary:
    backgroundColor: "{colors.signal-vermilion}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1rem"
    height: "4rem"
  button-primary-hover:
    backgroundColor: "{colors.proof-yellow}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.square}"
  project-feature:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "clamp(1.5rem, 3.4vw, 3.8rem)"
---

# Design System: Hatim Shakir Portfolio — Signal Press

## Overview

**Creative North Star: "The Live Engineering Press"**

Signal Press treats the portfolio as a radical independent magazine being pulled from a printing press in real time. Engineering evidence is editorial material: authenticated contribution metrics become proof copy, ownership paths become an investigative centerfold, and chronological projects become collectible feature spreads.

The system is maximal, physical, and direct. Its energy comes from monumental sorts, deliberate plate misregistration, hard ink fields, crop furniture, folios, and the pacing between dense spreads and broad chapter breaks. It avoids detector imagery, dashboards, floating cards, glossy glass, and ornamental effects with no print-world role.

**Key Characteristics:**

- Monumental condensed display type carries names, numbers, and project titles.
- Carbon, vermilion, cobalt, and proof yellow behave as separate ink plates on warm stock.
- Rules, folios, dates, access states, registration targets, and side captions make evidence structural.
- Motion appears once as type locking into register and once as chart ink rising; it never gates content.
- Every public, private, and live state remains explicit.

## Colors

The palette is a full four-ink press on warm uncoated stock: carbon supplies authority, vermilion supplies urgency, cobalt supplies long-form depth, and yellow marks proof and navigation.

### Primary

- **Signal Vermilion:** Primary action, major chapter plate, project indexing, and overprint separation.

### Secondary

- **Electric Cobalt:** Verified proof edge, statistical poster, alternating feature ink, and the second misregistered display plate.

### Tertiary

- **Proof Yellow:** Focus, proof bars, active folios, access accents, and rare high-contrast confirmation.

### Neutral

- **Warm Newsprint:** Dominant reading stock and light foreground on dark ink.
- **Press Carbon:** Primary text, header, project field, thick rules, and hard structural borders.
- **Fresh Sheet:** A brighter paper value reserved for high-contrast foreground moments.

### Named Rules

**The Separate Plates Rule.** Vermilion means action or primary editorial force; cobalt means verified depth and large chapter fields; yellow means proof, focus, or navigation. Do not scatter all three as interchangeable accents.

**The Stock Is a Field Rule.** Warm paper owns complete regions. It is never reduced to a small cream card floating on a neutral page.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)<br>
**Body Font:** Clash Display (with sans-serif fallback)<br>
**Label/Mono Font:** UI monospace (with SFMono-Regular, Menlo, Monaco, Consolas, and monospace fallbacks)

**Character:** Barlow Condensed behaves like oversized wood and metal sorts: compressed, blunt, and built for collision. Clash Display provides heavy editorial headlines and a readable geometric body voice. Mono records dates, proof, folios, access, stack labels, and methodology only.

### Hierarchy

- **Display:** Bold, extremely condensed, tightly tracked, and allowed to overprint. Used for the cover name and authenticated total.
- **Headline:** Bold Clash Display with compressed line-height. Used for chapter and centerfold statements.
- **Title:** Bold condensed uppercase. Used for project feature names; scale adapts to keep uninterrupted names intact.
- **Body:** Regular Clash Display with 1.45–1.55 line-height and roughly 44–58 character measures in major reading regions.
- **Label:** Bold uppercase monospace with open tracking. Used for recorded metadata, never narrative paragraphs.

### Named Rules

**The Sorts, Story, Proof Rule.** Condensed type shouts the artifact, Clash tells the story, and mono certifies the evidence. Never swap their jobs for variety.

**The Intentional Collision Rule.** Display lines may overlap their colored plates and nearby furniture, but body copy and actions never collide.

## Layout

The desktop cover is a two-part broadsheet: a large editorial lead on the left and a cobalt verified-proof edge on the right. The main story moves through chapter mastheads, a twelve-column investigative centerfold, full-width project features, a back-issue contents insert, a statistical poster, and a large contact close. Hard rules join regions; offsets and rotations stay small enough to preserve reading.

At 1120px, complex project actions move below the story. At 820px, proof follows the cover, ownership bands become single-width records, and feature stories stack beside their folio. At 560px, the cover becomes a tall front page, chapter grids become one column, uninterrupted titles scale down, and actions fill the available width. Touch targets remain at least 44px. Page-level overflow is forbidden; the contribution chart alone may scroll inside its bounded poster.

**The Spread, Not Card Rule.** Projects own the full width and share one ruled axis. Do not turn them into interchangeable rounded tiles.

## Elevation & Depth

The system uses no ambient shadows or glass. Depth comes from ink-on-stock contrast, plate misregistration, screen-print halftone, crop marks, thick rule changes, and a fixed low-opacity paper grain. The authenticated total uses a small displaced carbon plate because misregistration is part of the subject's real print grammar, not generic elevation.

**The Flat Press Rule.** Surfaces stay physically flat. If a region needs hierarchy, change the ink plate, rule weight, overlap, or density before considering shadow.

## Shapes

Containers, actions, proof labels, feature spreads, and inserts use square corners. Circular geometry is reserved for registration targets. Crop corners, torn rhythms, vertical captions, and tiny rotations give the sheet its irregular edge without softening the structure.

**The Registration Circle Rule.** A circle communicates alignment or print calibration; it is not a general component radius.

## Components

### Primary Action

- **Shape:** Square, hard-bordered, slightly rotated, and at least 4rem tall.
- **Primary:** Vermilion ink with newsprint text and a direct verb-object label.
- **Hover / Focus:** Hover changes to proof yellow with carbon text; focus uses a yellow outline backed by a carbon separation ring.

### Navigation

- Compact uppercase mono links sit in a carbon masthead beside the Signal Press wordmark.
- Hover reveals a proof-yellow underline. At 560px, lower-priority destinations leave the masthead while the first-viewport project action preserves the main route.

### Access Stamps

- Public and private states appear as square proof stamps beside an ISO date.
- A missing source is represented as a labeled lock state; it never becomes a dead anchor.

### Project Feature Spread

- Each spread aligns folio, date/access, monumental title, story/stack, and actions to one ruled axis.
- Four recurring plate treatments alternate carbon, cobalt, yellow-on-paper, and vermilion without changing the information grammar.
- Hover changes the title plate or action ink; it never lifts the spread.

### Statistical Poster

- A monumental authenticated total overlaps a thirteen-slice monthly chart.
- Bars use square-root height scaling and three physical ink colors; the accompanying methodology remains visible text.
- On narrow screens the chart scrolls inside its own frame without widening the page.

## Do's and Don'ts

### Do:

- **Do** use verified numbers, dates, paths, access states, and methodology as the visual material.
- **Do** pace dense spreads with chapter fields and broad ink changes.
- **Do** keep focus, reduced motion, 44px targets, and narrow-screen reading order intact.
- **Do** reserve texture for paper, halftone, and overprint behavior native to the press world.
- **Do** keep public and private work honest and visibly distinct.

### Don't:

- **Don't** reintroduce particle systems, detector imagery, dashboards, generic card grids, glass, or glossy material.
- **Don't** replace the local display voices with a system font or a generic editorial serif.
- **Don't** use gradient text, decorative blur, soft shadows, rounded pills, or floating surfaces.
- **Don't** put mono on narrative copy or use tiny tracked labels as ornamental headings.
- **Don't** animate every section; the type lock and chart rise are the complete motion vocabulary.
