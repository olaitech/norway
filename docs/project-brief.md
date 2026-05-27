# Norway Travel Website: Project Brief

## Purpose

This project is a premium cinematic travel website for Norway, with a strong
editorial focus on Northern Norway. It should feel like a curated visual
archive and practical planning companion, rather than a conventional tourism
portal.

Read this file before planning product, content, visual, or implementation
work. Use the linked documentation files for the detailed constraints of each
area.

## Core Vision

Create a dark, atmospheric Scandinavian travel experience shaped by:

- Cinematic landscape storytelling.
- Realistic images and route context.
- Calm, deliberate pacing and motion.
- Practical travel guidance beneath the visual presentation.
- A foundation that can later support travel partners and editorial
  collaborations.

The experience should evoke a documentary field journal: quiet roads, coastal
weather, Arctic light, ferries, fjords, and places worth moving slowly through.

## Positioning

### Audience

- Travellers planning high-intent Norway trips.
- Visitors interested in Northern Norway, road trips, seasonal light and
  dramatic landscape experiences.
- Potential future partners looking for a strong visual/editorial brand.

### Product Promise

Offer beautiful inspiration that quickly becomes useful planning information:
where to go, when to visit, how to connect destinations, and how to build a
slower route.

## Technical Foundation

Current project stack:

- Next.js App Router (`next@16.2.6`).
- React (`19.2.4`) and TypeScript.
- Tailwind CSS.
- Framer Motion for controlled UI animation.
- GSAP and Lenis available for motion and scroll experiences.
- Leaflet with OpenStreetMap tiles for the interactive map.
- Lucide React for minimal icons.
- Next/Image and Next/Font for media and typography handling.

Agent note: this repository instructs contributors to read applicable
documentation under `node_modules/next/dist/docs/` before changing Next.js
code because the installed version may differ from assumed APIs.

## Current Product Surface

Implemented or represented in the application:

- Homepage with cinematic hero, featured destinations and the `Ways Into
  Norway` scroll-reveal section.
- Destination detail pages driven by destination data.
- Journal index and article routes.
- Map page with interactive destinations, featured routes and an arrival-map
  concept for Northern Norway.
- Routes hub with Lofoten and Helgeland route detail pages.
- Seasonal and Arctic-light editorial pages.

See [site-structure.md](./site-structure.md) for the current route inventory
and [seo-pages.md](./seo-pages.md) for SEO expansion targets.

## Non-Negotiable Design Principles

- Cinematic travel documentary aesthetic.
- Dark atmospheric interface with restrained contrast.
- Scandinavian luxury: simple, spacious and intentional.
- Premium typography and editorial spacing.
- Motion that is slow, subtle and optional for reduced-motion users.
- Real map and landscape visuals over illustrative substitutes where planning
  credibility matters.
- No generic tourism-template language or decorative clutter.
- No loud colours, gimmicky interactions or animation for its own sake.

## Editorial Principles

- Write human, useful travel content, not keyword filler.
- Prefer specific planning insight: seasons, route pacing, ferry/logistics
  awareness, weather flexibility and appropriate bases.
- Treat visual atmosphere as the entry point and practical guidance as the
  reason to stay.
- Use proper Norwegian characters in visible copy: `Bodø`, `Tromsø`,
  `Vesterålen`.

## Working Rules For Future Changes

- Preserve established visual tone unless a redesign is explicitly requested.
- Check existing components and data sources before inventing new patterns.
- Keep OpenStreetMap/Google Maps route-out functionality where travel planning
  depends on it.
- Review [design-system.md](./design-system.md) before UI changes.
- Review [assets-log.md](./assets-log.md) before adding or replacing visuals.
- Record known issues in [bugs-and-cleanup.md](./bugs-and-cleanup.md).
- Update [next-steps.md](./next-steps.md) when a substantial milestone is
  completed.

