# Site Structure

Primary URLs below are the canonical live content pages.
Redirect stubs are listed separately so future AI/Codex sessions do not treat
them as standalone content pages.

`Primary URL` means the canonical route that should be used in copy, internal
links and SEO planning.

## Current Route Inventory

The list below records routes currently represented in the project. Check the
application route tree again before changing navigation or adding aliases.

| Route | Route type | Current purpose |
| --- | --- | --- |
| `/` | Primary live page | Homepage: hero, `Coastal Memory`, `Ways Into Norway`, ambient divider and featured destinations |
| `/destinations` | Primary live page | Destination index page |
| `/destinations/[slug]` | Primary live template | Destination detail pages sourced from destination data |
| `/journal` | Primary live page | Cinematic journal archive/index |
| `/journal/[slug]` | Primary live template | Journal article detail route |
| `/guides` | Primary live page | Practical guide archive/index |
| `/stories/northern-norway` | Primary live story page | Long-form story/article feature used by the story feature and map links |
| `/map` | Primary live page | Interactive travel map, featured routes and Northern Norway arrival-map section |
| `/routes` | Primary live page | Routes hub / road-trip planning page |
| `/routes/lofoten-road-trip` | Primary live route detail | Lofoten route detail |
| `/routes/helgeland-coast-road-trip` | Primary live route detail | Helgeland Coast route detail |
| `/best-time-to-visit-norway` | Primary live page | Seasonal planning page |
| `/norway-road-trip-routes` | Redirect stub -> `/routes` | Legacy SEO alias; do not treat as a separate content page |
| `/lofoten-travel-guide` | Redirect stub -> `/destinations/lofoten-islands` | Legacy SEO alias; do not treat as a separate content page |
| `/northern-lights-norway` | Primary live page | Northern lights planning page |
| `/fjords-of-norway` | Primary live page | Introductory fjord travel planning page |
| `/responsible-travel` | Primary live page | Responsible tourism pillar page |
| `/lofoten` | Redirect stub -> `/destinations/lofoten-islands` | Legacy redirect for the canonical Lofoten destination page |
| `/about` | Primary live page | Independent portal positioning and trust page |
| `/contact` | Primary live page | Contact and collaboration information page |
| `/privacy` | Primary live page | Plain-English privacy policy |
| `/privacy-settings` | Primary live placeholder | Placeholder privacy settings center; not a functional consent system yet |
| `/terms` | Primary live page | Terms of use |

## Guide Pages

Guide detail routes live under `/guides/*`.

Canonical live guide pages currently include:

- `/guides/best-time-to-visit-northern-norway`
- `/guides/driving-in-norway-what-visitors-should-know`
- `/guides/how-to-see-the-northern-lights-in-norway`
- `/guides/norway-ferry-guide-for-tourists`
- `/guides/how-to-travel-northern-norway-without-a-car`
- `/guides/how-expensive-is-norway-for-tourists`
- `/guides/50-local-money-saving-tips-for-norway`
- `/guides/best-hikes-in-senja`
- `/guides/camping-rules-in-norway`
- `/guides/what-to-pack-for-norway`

Short legacy guide slugs such as `/guides/driving-in-norway`,
`/guides/norway-ferry-guide`, `/guides/7-days-in-northern-norway` and
`/guides/10-days-in-northern-norway` are redirect stubs and should not be
treated as separate content pages.

## Redirect Stubs And Alias Routes

| Route | Redirects to | Route type | Notes |
| --- | --- | --- | --- |
| `/norway-road-trip-routes` | `/routes` | Redirect stub | Legacy SEO alias; do not treat as a separate content page |
| `/lofoten-travel-guide` | `/destinations/lofoten-islands` | Redirect stub | Legacy SEO alias; do not treat as a separate content page |
| `/lofoten` | `/destinations/lofoten-islands` | Redirect stub | Legacy redirect for the canonical Lofoten destination page |
| `/norway-itinerary-7-days` | `/routes/lofoten-road-trip` | Redirect stub | Legacy itinerary alias; do not treat as a separate content page |
| `/norway-itinerary-10-days` | `/routes/helgeland-coast-road-trip` | Redirect stub | Legacy itinerary alias; do not treat as a separate content page |
| `/guides/driving-in-norway` | `/guides/driving-in-norway-what-visitors-should-know` | Redirect stub | Legacy guide alias; do not treat as a separate content page |
| `/guides/norway-ferry-guide` | `/guides/norway-ferry-guide-for-tourists` | Redirect stub | Legacy guide alias; do not treat as a separate content page |
| `/guides/7-days-in-northern-norway` | `/routes/lofoten-road-trip` | Redirect stub | Legacy guide alias; do not treat as a separate content page |
| `/guides/10-days-in-northern-norway` | `/routes/helgeland-coast-road-trip` | Redirect stub | Legacy guide alias; do not treat as a separate content page |
| `/routes/helgeland-coastal-route` | `/destinations/helgeland-coast#scenic-route` | Redirect stub | Legacy anchor alias; do not treat as a separate content page |

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
TromsÃ¸.

### Journal

| Area | Source |
| --- | --- |
| Index route | `app/journal/page.tsx` |
| Article route | `app/journal/[slug]/page.tsx` |
| Journal presentation | `src/components/sections/journal/` |
| Journal data | `src/data/journal.ts`, `src/data/journal-articles.ts` |

### Guides

| Area | Source |
| --- | --- |
| Index route | `app/guides/page.tsx` |
| Guide archive cards | `app/guides/page.tsx` |
| Guide article pages | `app/guides/*/page.tsx` |
| Guide article presentation | `src/components/guides/GuideArticleLayout.tsx` |

Redirect aliases in `app/guides/` and the legacy itinerary slugs are listed in
the redirect table above.

### Stories

| Area | Source |
| --- | --- |
| Story route | `app/stories/northern-norway/page.tsx` |
| Story presentation | `src/components/stories/NorthernNorwayStory.tsx` |

The project currently has one live story page at `/stories/northern-norway`.
There is no `/stories` index page yet.

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
The route hub is canonical at `/routes`; legacy aliases such as
`/norway-road-trip-routes` and `/routes/helgeland-coastal-route` should stay
in the redirect table, not the live inventory.

## Current Content Architecture

- Page layouts are defined in App Router route files.
- Reusable display components live primarily under `src/components/sections/`.
- Content-rich destination and SEO views are driven by structured records under
  `src/data/`.
- Public media should be referenced from `/images/...` and `/video/...` paths.

## SEO Route Alignment

Several editorial topics use explicit SEO-friendly URL names. Some also have
shorter legacy/current equivalents, so canonical strategy still matters.

| Topic path | Primary URL | Current route status | Planning note |
| --- | --- | --- | --- |
| `/routes` | `/routes` | Primary live page | Canonical road-trip route hub. |
| `/norway-road-trip-routes` | `/routes` | Redirect stub | Legacy SEO alias; do not treat as a separate content page. |
| `/destinations/lofoten-islands` | `/destinations/lofoten-islands` | Primary live page | Canonical Lofoten destination page. |
| `/lofoten` | `/destinations/lofoten-islands` | Redirect stub | Legacy redirect for the canonical Lofoten destination page. |
| `/lofoten-travel-guide` | `/destinations/lofoten-islands` | Redirect stub | Legacy SEO alias; do not treat as a separate content page. |
| `/guides/driving-in-norway-what-visitors-should-know` | `/guides/driving-in-norway-what-visitors-should-know` | Primary live guide page | Canonical driving guide. |
| `/guides/driving-in-norway` | `/guides/driving-in-norway-what-visitors-should-know` | Redirect stub | Legacy guide alias; do not treat as a separate content page. |
| `/guides/norway-ferry-guide-for-tourists` | `/guides/norway-ferry-guide-for-tourists` | Primary live guide page | Canonical ferry guide. |
| `/guides/norway-ferry-guide` | `/guides/norway-ferry-guide-for-tourists` | Redirect stub | Legacy guide alias; do not treat as a separate content page. |
| `/routes/lofoten-road-trip` | `/routes/lofoten-road-trip` | Primary live route detail | Canonical Lofoten route detail. |
| `/routes/helgeland-coast-road-trip` | `/routes/helgeland-coast-road-trip` | Primary live route detail | Canonical Helgeland route detail. |
| `/routes/helgeland-coastal-route` | `/destinations/helgeland-coast#scenic-route` | Redirect stub | Anchor alias; do not treat as a standalone content page. |
| `/fjords-of-norway` | `/fjords-of-norway` | Primary live page | Expand practical depth before treating as complete. |
| `/guides/7-days-in-northern-norway` | `/routes/lofoten-road-trip` | Redirect stub | Legacy itinerary alias; not a content page. |
| `/guides/10-days-in-northern-norway` | `/routes/helgeland-coast-road-trip` | Redirect stub | Legacy itinerary alias; not a content page. |
| `/norway-itinerary-7-days` | `/routes/lofoten-road-trip` | Redirect stub | Legacy itinerary alias; not a content page. |
| `/norway-itinerary-10-days` | `/routes/helgeland-coast-road-trip` | Redirect stub | Legacy itinerary alias; not a content page. |

See [seo-pages.md](./seo-pages.md) before implementing new pages or aliases.

## Navigation Guidance

- Keep the homepage navigation visually minimal.
- Make internal links support planning journeys: destination to season, season
  to route, route to map, journal to related planning page.
- Avoid adding duplicate visible navigation entries solely to target alternate
  SEO slugs.
- Prefer canonical URLs in copy and links; redirect stubs should never be
  described as independent content pages.
- Establish canonical URLs before broadening cross-linking.

<!-- BEGIN:current-route-canonical-guidance -->
## Current route and canonical guidance

Use canonical URLs in copy, metadata, sitemap planning and internal linking.

Current guidance:
- `/routes` is the canonical route hub.
- `/norway-road-trip-routes` is a redirect/legacy alias unless explicitly changed later.
- `/destinations/lofoten-islands` is the canonical Lofoten destination page.
- `/lofoten` and `/lofoten-travel-guide` are redirect/legacy aliases unless explicitly changed later.
- `/norway-itinerary-7-days` and `/norway-itinerary-10-days` are redirect stubs, not completed standalone itinerary pages.
- Redirect stubs should not be treated as independent content pages or added as standalone sitemap entries unless the canonical strategy changes.
<!-- END:current-route-canonical-guidance -->

