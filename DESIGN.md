---
name: Hatim Shakir Portfolio
description: A bioluminescent memory garden for engineering evidence, ownership, and work.
colors:
  peat: "#050807"
  peat-soft: "#09100d"
  aubergine: "#1b1021"
  cyan: "#49e8ec"
  chlorophyll: "#80e270"
  ember: "#f47d3f"
  moon: "#efedd9"
  moon-muted: "#c2c8b6"
typography:
  display:
    fontFamily: '"Gloock", Georgia, serif'
    fontSize: "clamp(4.1rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Gloock", Georgia, serif'
    fontSize: "clamp(3.1rem, 6.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Gloock", Georgia, serif'
    fontSize: "clamp(2rem, 3.5vw, 3.35rem)"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: '"Clash Display", "Avenir Next", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"Clash Display", "Avenir Next", sans-serif'
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.04em"
rounded:
  seed-husk: "46% 54% 49% 51% / 60% 46% 54% 40%"
  organism: "48% 52% 45% 55% / 55% 42% 58% 45%"
spacing:
  touch: "2.75rem"
  section-inline: "clamp(1.25rem, 5vw, 6rem)"
  section-block: "clamp(5.5rem, 10vw, 10rem)"
components:
  seed-action:
    backgroundColor: "{colors.moon}"
    textColor: "{colors.peat}"
    rounded: "{rounded.seed-husk}"
    padding: "0.75rem 1.2rem 0.75rem 0.9rem"
    height: "5.15rem"
  seed-action-hover:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.peat}"
    rounded: "{rounded.organism}"
  root-heart:
    backgroundColor: "{colors.moon}"
    textColor: "{colors.peat}"
    rounded: "{rounded.organism}"
    padding: "3.2rem 1.7rem"
---

# Design System: Hatim Shakir Portfolio

## Overview

**Creative North Star: "The Bioluminescent Memory Garden"**

Engineering evidence is treated as living memory: contributions fruit at the ends of roots, product ownership forms a shared underground system, projects sit in a seed archive, and a year of work leaves a seasonal ring study. The world is immersive and densely authored, but facts remain semantic and readable before the visual organism begins moving.

The garden is midnight-dark because the portfolio is meant for focused exploration under screen light. Wet botanical material and responsive linework replace the Event Recorder's mechanical instruments. The system rejects dashboard composition, repeated card grids, glass surfaces, and generic neon fields.

**Key Characteristics:**

- A separately rendered fibrous trunk composes with live canvas roots and spores.
- High-contrast moonlit serif forms create a botanical editorial silhouette.
- Cyan marks memory and connection; chlorophyll marks growth; ember marks rare hot nodes.
- Organic silhouettes are reserved for meaningful organisms and actions, not used as soft decoration everywhere.
- Evidence remains explicit: dates, access states, methodology, and source/live actions are never hidden by the metaphor.

## Colors

The full palette is drenched across large chapter fields, with three biological signals held to distinct roles.

### Primary

- **Bioluminescent Memory Cyan:** The main connective signal for roots, active links, the seasonal canopy, and keyboard focus.

### Secondary

- **Living Chlorophyll:** Growth, navigation marks, technical subheads, and the full practice-tissue chapter.
- **Fruiting Ember:** Rare terminal nodes and unusually concentrated activity; never a general action color.

### Tertiary

- **Deep Aubergine Membrane:** The seed archive and final clearing use aubergine to separate living chapters from peat-dark space.

### Neutral

- **Midnight Peat:** Main ground and dark text on pale or green fields.
- **Soft Peat:** The seasonal study's slightly lifted dark field.
- **Milky Moonlight:** Primary reading color and the seed-husk action.
- **Lichen Moon:** Secondary reading color on dark fields.

### Named Rules

**The Biological Signal Rule.** Cyan connects, chlorophyll grows, and ember fruits. A component does not swap those meanings for novelty.

**The Chapter Field Rule.** Color owns full habitats—peat hero, moon roots, aubergine archive, green tissue—instead of appearing as scattered accent confetti.

## Typography

**Display Font:** Gloock (with Georgia and serif fallback)

**Body Font:** Clash Display (with Avenir Next and sans-serif fallback)

**Character:** Gloock's elongated high-contrast forms read like botanical specimen lettering at large scale. Clash Display keeps descriptions, navigation, data, and actions direct without falling into technical-costume monospace.

### Hierarchy

- **Display:** Regular Gloock, capped at 6rem with a tight 0.82 line height; used for the two-line name.
- **Headline:** Regular Gloock, fluid from 3.1rem to 6rem; used for chapter statements with safe wrapping.
- **Title:** Regular Gloock, fluid from 2rem to 3.35rem; used for ownership roots and archives.
- **Body:** Regular Clash Display at 1rem and 1.65 line height; constrained to roughly 65–68 characters where reading is dense.
- **Label:** Regular Clash Display at 0.72rem with modest tracking; used for dates, access, methodology, and evidence—not as an invented eyebrow.

### Named Rules

**The Living Letter Rule.** Display type may overlap the organism and compress vertically, but narrative copy stays unwarped and calmly measured.

**The No Technical Costume Rule.** Data is allowed to look like the rest of the garden. Monospace is not required to make evidence credible.

## Layout

Desktop uses asymmetric habitats instead of a centered container: the first viewport is a left clearing against a right trunk, the experience chapter is a sticky root heart feeding four branches, and the project archive is one continuous specimen stream. Section padding follows the fluid block and inline spacing tokens rather than a uniform wrapper.

At 1100px, navigation and project actions simplify. At 760px, every multi-column habitat becomes a single rooted stream: hero metrics form a 2×2 bed, ownership branches hang below the heart, seed specimens use a narrow persistent spine, and the canopy legend becomes a three-column key. All 390px captures retain the same content order and exact width without horizontal scroll.

**The Rooted Sequence Rule.** Repeated information joins a shared connective structure. It does not become a free-floating card collection.

## Elevation & Depth

Depth is layered rather than lifted. The hero combines one genuine wet-fiber raster plate with canvas glow, translucent CSS membranes, and dark tonal overlap. Later chapters are intentionally flatter so the focal organism stays singular. No generic glass system or ambient card shadow exists.

### Shadow Vocabulary

- **Node Bloom:** Bounded 5–18px cyan/ember glows mark terminal biological energy in the canvas and canopy.
- **Membrane Depth:** Large inset and soft ambient shadows are limited to irregular botanical membranes and never used under rectangular content.

**The Material Before Glow Rule.** A glow may reveal a root or spore; it cannot substitute for the material the focal element promises.

## Shapes

The system uses asymmetric biological silhouettes: seed husks, membranes, core rings, and root lines. Their uneven elliptical radii are meaning-bearing. Reading surfaces remain open or ruled rather than placed inside rounded rectangles. Circles appear only as growth rings, spores, and root terminals.

**The Organism-Only Curve Rule.** Organic radii belong to something alive or to an action framed as a seed; ordinary information does not receive a decorative blob container.

## Components

### Seed Action

- **Shape:** A wide irregular husk with a second offset botanical outline.
- **Primary:** Moonlight on peat with an authored seed SVG, direct action text, and downward route cue.
- **Hover / Focus:** Hover blooms to cyan and changes the husk silhouette; focus uses the global 3px cyan outline with a 5px offset.

### Navigation

- A small seed mark and restrained Clash labels sit along one root-hair line. Desktop shows four destinations and a contact action; mobile preserves brand and contact instead of squeezing the whole nav.
- Hover and focus move to cyan. Touch-bearing links maintain at least 2.75rem height.

### Seed Specimen

- Each project is a full-width ruled specimen with seed index, real date/access, large title, description, technology list, and honest source/live/private state.
- Seed chroma rotates through cyan, chlorophyll, ember, and moon while the reading surface stays aubergine.

### Root Heart and Branches

- The central UnifyApps organism is sticky on desktop and static on mobile. Four branches connect with explicit line geometry; each contains a title, system action, description, and evidence note.

### Seasonal Canopy

- Thirteen SVG branches use square-root-scaled reach, accompanied by a semantic ordered legend and methodology. The high July node fruits in ember.

### Living Trunk

- A compressed production plate supplies wet material. Canvas 2D adds recursive fibers, terminal glows, pointer pull, and spores; rendering pauses offscreen and becomes deterministic under reduced motion.

## Do's and Don'ts

### Do:

- **Do** make verified numbers, dates, and access states part of the organism rather than a separate dashboard.
- **Do** keep raster material separate from semantic text and responsive interaction.
- **Do** reserve ember for rare, concentrated fruiting signals.
- **Do** provide a complete static composition when reduced motion is requested.
- **Do** reflow root systems into one clear stream on small screens.

### Don't:

- **Don't** load approved comps as production backgrounds or rasterize semantic UI.
- **Don't** rebuild the world as neon gradients, particles, a terminal, or a command dashboard.
- **Don't** use glass panels, repeated equal cards, gradient text, or decorative eyebrow labels.
- **Don't** introduce generic rounded rectangles into the specimen archive.
- **Don't** animate offscreen or make motion carry information unavailable in the static document.
