# Site Structure

## Current Route Inventory

The list below records routes currently represented in the project. Check the
application route tree again before changing navigation or adding aliases.

| Route | Current purpose |
| --- | --- |
| `/` | Homepage: hero, featured destinations and `Ways Into Norway` |
| `/destinations/[slug]` | Destination detail pages sourced from destination data |
| `/journal` | Cinematic journal archive/index |
| `/journal/[slug]` | Journal article detail route |
| `/map` | Interactive travel map, featured routes and Northern Norway arrival-map section |
| `/routes` | Routes hub / road-trip planning page |
| `/routes/lofoten-road-trip` | Lofoten route detail |
| `/routes/helgeland-coast-road-trip` | Helgeland Coast route detail |
| `/best-time-to-visit-norway` | Seasonal planning page |
| `/northern-lights-norway` | Northern lights planning page |
| `/lofoten` | Lofoten editorial/destination hub page |

## Page Composition

### Homepage

Primary files and responsibilities:

| Area | Source |
| --- | --- |
| Route composition | `app/page.tsx` |
| Hero and navigation | `components/prisma-hero.tsx` |
| Featured destinations | `src/components/sections/destinations/FeaturedDestinations.tsx` |
| Ways Into Norway | `src/components/sections/home/WaysIntoNorway.tsx` |
| Sticky reveal display | `components/ui/sticky-scroll-reveal.tsx` |

### Destination Experience

| Area | Source |
| --- | --- |
| Route | `app/destinations/[slug]/page.tsx` |
| Page presentation | `src/components/sections/destinations/DestinationPage.tsx` |
| Content records | `src/data/destinations.ts` |

Current destination set includes Lofoten Islands, Senja, Helgeland Coast and
Tromsø.

### Journal

| Area | Source |
| --- | --- |
| Index route | `app/journal/page.tsx` |
| Article route | `app/journal/[slug]/page.tsx` |
| Journal presentation | `src/components/sections/journal/` |
| Journal data | `src/data/journal.ts`, `src/data/journal-articles.ts` |

### Map And Routes

| Area | Source |
| --- | --- |
| Map route | `app/map/page.tsx` |
| Interactive OpenStreetMap display | `src/components/sections/map/MapExplorer.tsx` |
| Northern arrival-map feature | `src/components/sections/map/GatewaysToNorthernNorway.tsx` |
| Map and featured-route data | `src/data/map.ts` |
| Route/SEO page display | `src/components/sections/seo/CinematicSeoPage.tsx` |
| Structured SEO content | `src/data/seo-pages.ts` |

The interactive map includes Google Maps outbound planning links and
OpenStreetMap tiles. Preserve this practical functionality during visual
enhancements.

## Current Content Architecture

- Page layouts are defined in App Router route files.
- Reusable display components live primarily under `src/components/sections/`.
- Content-rich destination and SEO views are driven by structured records under
  `src/data/`.
- Public media should be referenced from `/images/...` and `/video/...` paths.

## Planned/Requested SEO Route Alignment

Several editorial topics are desired using explicit SEO-friendly URL names.
Some currently exist through shorter or different routes:

| Requested topic path | Current closest route | Planning note |
| --- | --- | --- |
| `/norway-road-trip-routes` | `/routes` | Decide whether to add canonical alias or migrate route |
| `/lofoten-travel-guide` | `/lofoten` | Decide canonical URL and redirect/internal-link approach |
| `/fjords-of-norway` | None confirmed | New route/content needed |
| `/norway-itinerary-7-days` | None confirmed | New route/content needed |
| `/norway-itinerary-10-days` | None confirmed | New route/content needed |

See [seo-pages.md](./seo-pages.md) before implementing new pages or aliases.

## Navigation Guidance

- Keep the homepage navigation visually minimal.
- Make internal links support planning journeys: destination to season, season
  to route, route to map, journal to related planning page.
- Avoid adding duplicate visible navigation entries solely to target alternate
  SEO slugs.
- Establish canonical URLs before broadening cross-linking.

