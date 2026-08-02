---
name: Hatim Shakir Portfolio
description: A tactile concrete observatory for engineering ownership, project evidence, and working rhythm.
colors:
  void: "#181714"
  shadow-concrete: "#24211c"
  warm-concrete: "#b7a894"
  limestone: "#e7dfcf"
  oxidized-brass: "#9b7a43"
  brass-light: "#d0ad68"
  oxblood: "#6d1b26"
  registration-cobalt: "#17498f"
typography:
  display:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(3.5rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"Clash Display", "Helvetica Neue", sans-serif'
    fontSize: "clamp(3.3rem, 6vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(2.2rem, 4vw, 4rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Clash Display", "Helvetica Neue", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
rounded:
  structural: "0"
spacing:
  registration: "1rem"
  room: "1.5rem"
  chamber: "3rem"
  atrium: "5rem"
components:
  threshold-primary:
    backgroundColor: "{colors.oxidized-brass}"
    textColor: "{colors.limestone}"
    typography: "{typography.label}"
    rounded: "{rounded.structural}"
    padding: "1rem 1.2rem 1rem 1.5rem"
    height: "4.5rem"
  threshold-primary-hover:
    backgroundColor: "{colors.brass-light}"
    textColor: "{colors.void}"
    rounded: "{rounded.structural}"
  pavilion-opening:
    backgroundColor: "{colors.void}"
    textColor: "{colors.limestone}"
    typography: "{typography.label}"
    rounded: "{rounded.structural}"
    padding: "1.2rem 1.4rem"
    height: "5rem"
---

# Design System: Hatim Shakir Portfolio

## Overview

**Creative North Star: "The Concrete Observatory"**

The portfolio behaves like a monumental public structure built for close inspection. Visitors cross an atrium, descend through a load-bearing enterprise core, move between project pavilions, and read contribution history as an engraved light instrument. Evidence is part of the architecture rather than a layer of badges applied afterward.

The world is tactile and maximal, but every material has a job. Real concrete texture carries the focal planes; HTML, CSS, and SVG carry perspective, light, charts, and interaction so the site remains responsive and readable. Near-black voids create the quiet needed between dense rooms, while brass, oxblood, and cobalt behave as construction materials and registration marks rather than generic accents.

**Key Characteristics:**

- Monumental type sits inside spatial planes, never inside floating cards.
- Warm limestone and concrete are interrupted by black light wells and oxblood circulation cores.
- Brass datums hold proof, actions, and measurement; cobalt registers rare technical points.
- Scroll movement feels like crossing chambers, with a complete static reduced-motion state.
- Public and private work remain explicit, chronological, and equally legible.

## Colors

The palette is a full architectural material system: two deep neutrals establish void and shadow, two mineral neutrals carry reading surfaces, and three restrained construction colors separate action, circulation, and registration.

### Primary

- **Oxblood Circulation Core:** The large vertical cores, select project masses, and structural interruptions that guide movement.

### Secondary

- **Oxidized Brass Datum:** The first-fold evidence rail, primary threshold, measurement surfaces, and high-value metadata.
- **Registration Cobalt:** Rare survey marks, service-shaft indicators, and Salesforce annex identification.

### Tertiary

- **Brass Light:** Hover confirmation, focus, readable data on dark surfaces, and bright edges within the brass family.

### Neutral

- **Observatory Void:** The main project field, contact chamber, and highest-contrast reading surface.
- **Shadow Concrete:** The UnifyApps floors and deep structural recesses.
- **Warm Concrete:** The material bridge between limestone and void.
- **Cut Limestone:** The main light reading surface and primary text on dark chambers.

### Named Rules

**The Material Role Rule.** Oxblood moves visitors, brass measures or opens, and cobalt registers. Do not swap these roles for decorative variety.

**The Void Earns Density Rule.** Near-black fields surround the densest evidence; light stone is reserved for spatial arrival and chapter changes.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow fallback)<br>
**Body Font:** Clash Display (with Helvetica Neue fallback)<br>
**Label Font:** Barlow Condensed

**Character:** Barlow Condensed has the compression and vertical force of architectural wayfinding and concrete inscription. Clash Display keeps technical explanations direct and contemporary without turning the portfolio into a plan drawing or terminal interface.

### Hierarchy

- **Display:** Bold, uppercase, compressed, and capped at 6rem; used for identity and pavilion names.
- **Headline:** Semibold Clash Display with tight tracking and a 6rem ceiling; used for chamber-defining statements.
- **Title:** Bold condensed type for institutional names such as Salesforce and smaller structural records.
- **Body:** Regular Clash Display around 1rem, with a 1.55–1.6 line height and 34–58 character measures depending on the room.
- **Label:** Semibold condensed uppercase with open tracking for dates, levels, access state, methods, and actions.

### Named Rules

**The Inscription and Explanation Rule.** Condensed type names, measures, and directs; Clash Display explains. Neither face impersonates the other role.

**The Heading Carries Itself Rule.** Do not place kickers or eyebrows above headings. Supporting role and context belong below the statement or on an independent structural datum.

## Layout

Desktop composition uses an asymmetric architectural section: a six-level index, a broad textured wall, a black light well, and a full-width brass datum. Subsequent chambers use different spatial densities inside the same grammar: UnifyApps stacks around a service shaft, projects alternate mass and openings, the archive becomes a foundation register, and contributions converge on a sundial origin.

Spacing expands by room rather than repeating one container rhythm. Tight internal groups begin around 1rem–1.5rem; room separation grows to 3rem; chamber and atrium transitions reach 5rem and beyond. Main reading regions cap near 86rem so material planes retain scale on wide screens.

At 1120px, floor evidence reflows beneath its title and narrative. At 820px, the atrium becomes a single processional column, metrics become a 2×2 datum, ownership becomes a vertical section, and pavilions use a persistent number mass beside the text. At 460px, hero copy clears the light shaft, archives simplify, and all touch actions preserve at least 44px of height.

**The Chamber Sequence Rule.** A new section changes density, direction, or material; it does not repeat the preceding section inside a new rectangle.

## Elevation & Depth

Depth is structural rather than atmospheric. Broad, offset, softened shadows belong only where one architectural plane clearly sits in front of another: the lintel over the well, the brass threshold over the void, the UnifyApps core over limestone, and the sundial wall over shadow concrete. Tonal recession and clip-path silhouettes do the rest. No ambient card shadow exists.

### Shadow Vocabulary

- **Cantilever Shadow:** Large 32–64px soft shadows with a 20–42px offset, used on major slabs.
- **Threshold Shadow:** A tighter 10–30px offset shadow below the primary action.
- **Recess Shadow:** Inset or negative-space shadow inside the light well only.

### Named Rules

**The Load Must Be Visible Rule.** A shadow needs a believable plane and direction. Do not add hover lift, halos, or fake embossed material.

## Shapes

The system is rectilinear and square. Controls, registers, floor slabs, and openings use zero radius. Large clip-path cuts create lintels, sloped construction masses, and threshold silhouettes; they belong to spatial composition, not to small component decoration. Circles appear only in the sundial as measured data points and origins.

**The Structural Corner Rule.** Corners stay square. A diagonal cut must communicate mass, passage, or measured geometry.

## Components

### Threshold Actions

- **Shape:** Wide, square, and at least 4.5rem high, with the action and arrow held at opposite edges.
- **Primary:** Oxidized brass over concrete texture with cut-limestone text and a real slab shadow.
- **Hover / Focus:** Hover moves to brass light and void text. Keyboard focus uses a 3px brass-light outline with a 4px offset.

### Navigation

- **Style:** Condensed uppercase text on the void header; the logo combines semantic text with an authored geometric SVG registration mark.
- **State:** Hover moves to brass light. On narrow screens, the central navigation is removed while Résumé and the identity remain accessible.

### Evidence Datum

- **Style:** A full-width brass `dl` with four equal proof fields, numerical definitions larger than their terms, and hard dividers.
- **Responsive:** Becomes two columns on mobile without changing the facts or reading order.

### Ownership Floors

- **Style:** One continuous dark structural core with four horizontal floors, a vertical brass shaft, and a cobalt position indicator.
- **Content:** Each floor carries a number, ownership area, operating signal, description, and evidence note. The floors are not independent cards.

### Project Pavilions

- **Style:** Full-width architectural sections combining a numbered mass, date/access bay, project room, and source/live opening.
- **State:** Source and live openings invert to brass light on hover. Private records remain text states with lock icons, never dead links.

### Contribution Sundial

- **Style:** Semantic SVG rays, arcs, origin, and gnomon on a concrete plate, paired with an accessible numeric register and visible methodology.
- **Motion:** Static by default; the surrounding chamber participates in the shared scroll arrival only when supported and allowed.

## Do's and Don'ts

### Do:

- **Do** use material planes at room scale rather than applying texture to every small element.
- **Do** keep claims tied to authenticated metrics, chronological projects, or contribution evidence.
- **Do** use structural shadow, overlap, and negative space to create physical depth.
- **Do** keep public, private, source, and live states visibly distinct.
- **Do** preserve a complete reduced-motion experience and direct keyboard focus.

### Don't:

- **Don't** reintroduce detectors, dashboards, editorial-zine columns, glass, rounded cards, or generic portfolio grids.
- **Don't** ship a concept comp, architectural photograph, or rasterized UI as the page background.
- **Don't** use CSS bevels, embossed text, gradient text, glowing edges, or decorative blueprint grids to imitate material.
- **Don't** put an eyebrow above a heading or turn architectural labels into decorative technical costume.
- **Don't** give every section the same density, silhouette, or reveal motion.
