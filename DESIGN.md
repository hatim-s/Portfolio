---
name: Hatim Shakir Portfolio
description: An analog orbital command deck for engineering evidence, ownership, and shipped systems.
colors:
  console-black: "#0d0f0d"
  rack-charcoal: "#171a17"
  panel-metal: "#23251f"
  olive-avionics: "#3f4633"
  equipment-cream: "#e8dfc6"
  chart-paper: "#d9cba6"
  phosphor-green: "#b9ff73"
  status-amber: "#f0b537"
  guarded-red: "#d24b32"
  calibration-cobalt: "#3f6fa9"
typography:
  display:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(4.7rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.76
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(3.4rem, 6vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.02em"
  title:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: '"Clash Display", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  instrument-label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.55rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  panel: "0"
  lamp: "50%"
spacing:
  rack-gap: "0.45rem"
  panel-inset: "1.4rem"
  section-run: "clamp(5rem, 9vw, 9rem)"
components:
  guarded-action:
    backgroundColor: "#5d211a"
    textColor: "{colors.equipment-cream}"
    typography: "{typography.title}"
    rounded: "{rounded.panel}"
    padding: "0 1rem 0 1.35rem"
    height: "4.25rem"
  panel-frame:
    backgroundColor: "{colors.rack-charcoal}"
    textColor: "{colors.equipment-cream}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-inset}"
  instrument-control:
    backgroundColor: "{colors.console-black}"
    textColor: "{colors.status-amber}"
    typography: "{typography.instrument-label}"
    rounded: "{rounded.panel}"
    height: "3.1rem"
---

# Design System: Hatim Shakir Portfolio

## Overview

**Creative North Star: "The Orbital Command Deck"**

This system treats engineering as an operated mission: intent, agent behavior, workflow structure, interface state, schema contracts, and delivery lanes all remain visible on one control plane. It feels like an elite 1987 operations room upgraded for contemporary AI systems—dense, tactile, and precise without becoming a terminal skin or glossy science-fiction HUD.

The world is built from real anodized-metal texture, blackened rack frames, olive avionics, cream equipment labels, phosphor traces, amber status, guarded red action, plotted paper, reels, patch points, and mechanical counters. Web behavior stays native: semantic controls, responsive reflow, canvas signal, crisp state changes, visible focus, and a static reduced-motion frame.

**Key Characteristics:**

- Panoramic joined bays replace the generic hero and card grid.
- Evidence appears as counters, topology, tape records, and plotted paper.
- One live CRT is the authored motion moment; surrounding hardware stays stable.
- Public, private, and live states remain explicit rather than decorative.
- Physical detail comes from real texture plus code-native geometry, never from a concept mockup background.

## Colors

The palette is a full operational set: charcoal and olive carry the room, cream carries identity and reading, green indicates live signal, amber labels status, red guards action, and cobalt appears only for calibration or legacy contrast.

### Primary

- **Olive Avionics:** Owns system modules and secondary hardware fields.
- **Status Amber:** Identifies recorded metadata, active rails, and caution-level information.

### Secondary

- **Phosphor Green:** Reserved for live traces, authenticated status, and successful readiness.
- **Guarded Red:** Reserved for the primary archive action and safety-critical control language.

### Tertiary

- **Calibration Cobalt:** Marks Salesforce and technical calibration details without joining the main status hierarchy.

### Neutral

- **Console Black:** The page ground, CRT depths, and mechanical counter wells.
- **Rack Charcoal / Panel Metal:** Structural fields that separate equipment bays.
- **Equipment Cream:** Primary text and stencil lettering.
- **Chart Paper:** The only full reading-light field; used for tape labels and contribution telemetry.

### Named Rules

**The Lamp Logic Rule.** Green means ready or authenticated, amber means recorded status, and red means guarded action. Do not swap their roles for variety.

**The Paper Is Evidence Rule.** Cream paper surfaces carry records and methodology, never generic card content.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow fallback)

**Body Font:** Clash Display (with sans-serif fallback)

**Label/Mono Font:** UI monospace (with SFMono-Regular, Menlo, Monaco, Consolas fallbacks)

**Character:** Barlow Condensed behaves like aerospace stencil lettering: tall, compressed, and legible at equipment scale. Clash Display keeps narrative copy human, while monospace is restricted to dates, counters, labels, paths, access states, and measurement.

### Hierarchy

- **Display:** Semibold, up to 6rem, compressed and uppercase for the mission-lead name.
- **Headline:** Medium, up to 6rem with short line lengths for chapter statements.
- **Title:** Semibold at 2rem for tapes, drawers, and company names.
- **Body:** Regular at approximately 1rem and 1.55 line height, generally held under 65 characters.
- **Instrument label:** Medium monospace at approximately 0.55rem with 0.08em tracking and uppercase treatment.

### Named Rules

**The Three-Voice Rack Rule.** Condensed type names the hardware, Clash explains the work, and monospace measures it. Monospace never carries narrative paragraphs.

## Layout

Desktop begins as three joined instrument bays: identity at roughly 28%, live CRT at 47%, and authenticated counters at 25%. The page continues through wide rack assemblies, a four-module ownership topology, long project tapes, one paper recorder, and a final patch panel. A 0.45rem gap keeps every major region visibly separate while still reading as one console.

At 1180px the readout bay drops beneath the first two bays and the topology becomes two columns. At 820px every hero bay stacks and project tapes convert from four columns to an index-plus-record arrangement. At 520px the identity bay owns the first mobile viewport; tape actions stack, release lanes turn vertical, and data-heavy paper/rack regions scroll internally while the page itself never overflows horizontally.

**The Joined-Bay Rule.** Major sections touch through shared rack spacing and aligned frames; do not recast them as floating containers.

## Elevation & Depth

Depth is structural, not ambient. Panels use a thin hard border, one inset top glint, one inset lower well, and a low diffuse rack shadow. Mechanical windows add deeper insets; CRT and reel wells darken inward. A real low-contrast anodized-metal image supplies material variation beneath the semantic interface.

### Shadow Vocabulary

- **Rack seat:** `inset 0 1px rgba(255,255,255,.07), inset 0 -2px rgba(0,0,0,.65), 0 9px 24px rgba(0,0,0,.26)` for major frames.
- **Instrument well:** inset black depth for counters, CRT glass, reels, and patch jacks only.
- **Lamp emission:** short, colored blur local to a lit lamp or phosphor trace.

### Named Rules

**The Light Has a Source Rule.** Glow belongs only to phosphor, lamps, and energized traces. Panels do not glow.

## Shapes

The form language is rigid and rectilinear. Frames, actions, modules, tapes, paper, and controls have square corners. Circles are reserved for parts that physically rotate, receive a plug, or emit status: fasteners, lamps, reels, ports, seals, and jacks. Borders are thin; safety striping appears only at the guarded primary action.

**The Mechanical Circle Rule.** A circle must be a lamp, fastener, reel, port, seal, or jack. It is never a general container shape.

## Components

### Guarded Actions

- **Shape:** Square, at least 4.25rem tall, with a narrow amber/black safety stripe at the leading edge.
- **Primary:** Deep guarded-red field, cream stencil label, and a directional icon at the far edge.
- **Hover / Focus:** Hover raises red intensity without lift. Keyboard focus uses the global 3px phosphor outline.

### Panel Frames

- **Corner Style:** Square.
- **Background:** Charcoal, metal, or olive depending on equipment function.
- **Shadow Strategy:** Rack seat only; no floating-card elevation.
- **Border:** One thin metal edge plus four physical fasteners on principal bays.

### Instrument Controls

- **Style:** Square black key with inset lower edge and an adjacent physical status lamp.
- **State:** Selected keys light phosphor; the Live control uses amber. Active press moves two pixels and shortens the inset edge.

### Mechanical Counters

Authenticated values are split into individual dark digit windows inside one black well. Commas remain visible because they are part of the verified value. An adjacent green lamp and explicit Authenticated label carry status semantically.

### Flight Tapes

Each newest-first project is a long rack module: numerical index, paper label with date/copy/stack, reel window, then truthful Public, Private, Source, or Live actions. Hover changes the metal field rather than lifting the tape.

### Navigation and Patch Jacks

Desktop navigation uses uppercase instrument labels and tiny unlit/amber rail lamps; mobile removes destinations instead of compressing them. Contact actions are 44px-plus patch-jack links with authored library icons and text labels.

## Do's and Don'ts

### Do:

- **Do** make evidence physical through counters, paths, reels, paper, access states, and explicit methodology.
- **Do** keep every lamp color tied to its named operational role.
- **Do** preserve the single live CRT as the main motion moment and keep a complete reduced-motion frame.
- **Do** keep project chronology and private/public access readable at every breakpoint.
- **Do** use real material texture only as a subtle substrate under semantic content.

### Don't:

- **Don't** turn the system into a terminal, cyberpunk wallpaper, glossy HUD, or code-rain effect.
- **Don't** add rounded floating cards, bento layouts, or generic dashboard widgets.
- **Don't** use a composition probe or concept mockup as a production background.
- **Don't** add glow to static panels or use circular forms without a mechanical job.
- **Don't** hide evidence, actions, or content behind motion.
