# Site Structure

## Current Route Inventory

The list below records routes currently represented in the project. Check the
application route tree again before changing navigation or adding aliases.

| Route | Current purpose |
| --- | --- |
| `/` | Homepage: hero, `Coastal Memory`, `Ways Into Norway`, ambient divider and featured destinations |
| `/destinations` | Destination index page |
| `/destinations/[slug]` | Destination detail pages sourced from destination data |
| `/journal` | Cinematic journal archive/index |
| `/journal/[slug]` | Journal article detail route |
| `/map` | Interactive travel map, featured routes and Northern Norway arrival-map section |
| `/routes` | Routes hub / road-trip planning page |
| `/routes/lofoten-road-trip` | Lofoten route detail |
| `/routes/helgeland-coast-road-trip` | Helgeland Coast route detail |
| `/best-time-to-visit-norway` | Seasonal planning page |
| `/norway-road-trip-routes` | SEO-friendly road-trip route hub using the current routes content |
| `/lofoten-travel-guide` | SEO-friendly Lofoten guide using the current Lofoten hub content |
| `/northern-lights-norway` | Northern lights planning page |
| `/fjords-of-norway` | Introductory fjord travel planning page |
| `/responsible-travel` | Responsible tourism pillar page |
| `/lofoten` | Lofoten editorial/destination hub page |
| `/about` | Independent portal positioning and trust page |
| `/contact` | Contact and collaboration information page |
| `/privacy` | Plain-English privacy policy |
| `/privacy-settings` | Placeholder privacy settings center; not a functional consent system yet |
| `/terms` | Terms of use |

## Page Composition

### Homepage

Primary files and responsibilities:

| Area | Source |
| --- | --- |
| Route composition | `app/page.tsx` |
| Hero and navigation | `components/prisma-hero.tsx` |
| Coastal Memory video feature | `src/components/sections/atmosphere/LofotenFishermanFeature.tsx` |
| Ways Into Norway | `src/components/sections/home/WaysIntoNorway.tsx` |
| Sticky reveal display | `components/ui/sticky-scroll-reveal.tsx` |
| Ambient transition | `src/components/ui/ambient-divider.tsx` |
| Featured destinations | `src/components/sections/destinations/FeaturedDestinations.tsx` |

Current homepage section order is:

1. `PrismaHero`
2. `LofotenFishermanFeature`
3. `WaysIntoNorway`
4. `AmbientDivider`
5. `FeaturedDestinations`

The shared footer is rendered from `app/layout.tsx` through
`src/components/layout/Footer.tsx`, so it appears after route content.

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

## SEO Route Alignment

Several editorial topics use explicit SEO-friendly URL names. Some also have
shorter legacy/current equivalents, so canonical strategy still matters.

| Topic path | Current route status | Planning note |
| --- | --- | --- |
| `/norway-road-trip-routes` | Route exists and currently reuses the routes hub content | Decide canonical URL versus `/routes`; avoid long-term duplicate thin content |
| `/lofoten-travel-guide` | Route exists and currently reuses the Lofoten hub content | Decide canonical URL versus `/lofoten`; avoid long-term duplicate thin content |
| `/fjords-of-norway` | Route exists with introductory guide content | Expand practical depth before treating as complete |
| `/norway-itinerary-7-days` | Not implemented | Planned SEO/content page |
| `/norway-itinerary-10-days` | Not implemented | Planned SEO/content page |

See [seo-pages.md](./seo-pages.md) before implementing new pages or aliases.

## Navigation Guidance

- Keep the homepage navigation visually minimal.
- Make internal links support planning journeys: destination to season, season
  to route, route to map, journal to related planning page.
- Avoid adding duplicate visible navigation entries solely to target alternate
  SEO slugs.
- Establish canonical URLs before broadening cross-linking.
