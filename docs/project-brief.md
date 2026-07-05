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

- Homepage with a cinematic Preikestolen-led hero, the `Coastal Memory`
  fisherman video feature, the `Ways Into Norway` planning/archive section,
  an ambient divider and featured destinations.
- Destination detail pages driven by destination data.
- Journal index and article routes.
- Map page with interactive destinations, featured routes and an arrival-map
  concept for Northern Norway.
- Routes hub with Lofoten and Helgeland route detail pages.
- Seasonal, road-trip, Lofoten, fjord and Arctic-light editorial pages.
- Global footer with destination, route, guide and information links.
- Foundation trust/information pages: about, contact, privacy policy, privacy
  settings and terms.

Current homepage order:

1. `PrismaHero` using the Preikestolen image.
2. `LofotenFishermanFeature` / `Coastal Memory`.
3. `WaysIntoNorway` / Planning Archive.
4. `AmbientDivider`.
5. `FeaturedDestinations`.
6. Shared `Footer` from the root layout.

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

<!-- BEGIN:current-seo-aeo-status -->
## Current SEO/AEO foundation

The SEO/AEO foundation is already implemented. Future work should improve content depth, internal linking, validation and page quality rather than rebuilding the foundation.

Current foundation:
- This is a Next.js App Router project, not Vite.
- Do not implement Vite prerendering.
- Do not add react-helmet-async.
- Do not replace Next.js metadata handling.
- Metadata, canonical URLs, Open Graph/Twitter metadata and JSON-LD are implemented across core pages.
- `sitemap.xml` is generated from `app/sitemap.ts`.
- `app/robots.txt` is intentional and must not be reverted to `app/robots.ts`.
- `robots.txt` includes `Content-Signal: search=yes, ai-input=yes, ai-train=yes`.
- `public/llms.txt` and `public/llms-full.txt` should remain publicly available at `/llms.txt` and `/llms-full.txt`.
- `public/llms.txt` has been improved with Markdown headings and canonical links for agent readability.
- A live crawlability check exists: `npm run check:crawlability:live`.

Recent validation:
- `npm run check:seo` passed.
- `npm run check:aeo` passed.
- `npm run check:crawlability:live` passed exact.
- Live Googlebot/browser crawlability comparison passed exact on tested routes.

Observed PageSpeed desktop result:
- Performance: 99
- Accessibility: 93
- Best Practices: 100
- SEO: 100
- Agentic Browsing: 2/3.

Known notes:
- `/norway-road-trip-routes`, `/norway-itinerary-7-days` and `/norway-itinerary-10-days` are redirect stubs, not standalone canonical sitemap content pages unless the canonical strategy changes.
- Internal AEO checks may warn that `llms.txt` and `llms-full.txt` are only present in `public/`. That is intentional because they must be served from the site root.
<!-- END:current-seo-aeo-status -->

