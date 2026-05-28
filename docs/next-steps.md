# Next Steps

## Required Reading For Major Tasks

Before making major design or content changes, future Codex/Copilot tasks must
read:

- [project-vision.md](./project-vision.md)
- [design-system.md](./design-system.md)
- [site-structure.md](./site-structure.md)
- [next-steps.md](./next-steps.md)

All major work should preserve the calm, cinematic Scandinavian direction
defined in `project-vision.md`: atmospheric, trustworthy, useful, visually
premium and never a generic tourism-template experience.

## Current Implementation Snapshot

The current workspace includes:

- A homepage flow of `PrismaHero`, `Coastal Memory` fisherman video,
  `WaysIntoNorway`, `AmbientDivider` and `FeaturedDestinations`.
- A shared global footer with links to destinations, routes, journal, map,
  responsible travel, guide pages and information/legal pages.
- Basic professional pages for about, contact, privacy policy, privacy
  settings and terms.
- SEO-friendly routes for `/norway-road-trip-routes`,
  `/lofoten-travel-guide` and `/fjords-of-norway`.
- Warm beige editorial card styling for homepage planning/archive cards and
  destination text panels.
- Adjusted homepage spacing to avoid large empty scroll areas between sections
  and above the footer.

## Current Work Plan

### 1. Stabilize The Project After Map Experiments

Goal: establish a reliable baseline before expanding features or content.

- Review the recent `/map` page and arrival-map changes together as one
  coherent user flow.
- Confirm that existing interactive map functionality, route links and
  destination links still work as intended.
- Check desktop and mobile layout behavior, overflow and reduced-motion
  presentation.
- Avoid further redesign work until warnings and obvious regressions are
  resolved.
- Keep unrelated refactors out of this stabilization pass.

Completion criteria:

- `/map` loads cleanly and remains usable.
- The arrival-map section supports rather than obscures travel planning.
- No known regressions from recent experiments remain unresolved.

### 2. Resolve Browser Warnings And Visible Text Issues

Goal: remove avoidable browser-console noise and correct visible copy before
additional page development.

Checklist:

- Fix the duplicate React child key warning involving `/routes`.
- Fix the logo image loading/priority warning using the appropriate current
  Next.js image API for the installed project version.
- Replace visible encoded Norwegian text such as `Bod\u00f8` and
  `Troms\u00f8` with real characters.
- Check related visible names such as `Vesterålen` for correct display.
- Run lint/build and inspect the affected views in the browser after fixes.

Required visible spellings:

- `Bodø`
- `Tromsø`
- `Vesterålen`

Completion criteria:

- No duplicate `/routes` key warning on the affected UI.
- No actionable logo image LCP/loading warning on the affected above-the-fold
  view.
- No escaped or corrupted Norwegian characters visible to users.

### 3. Improve The Map Page With The Real Map Image

Goal: make `/map` feel like a premium, credible travel-planning experience
rather than an abstract visual experiment.

Primary visual asset:

- `/images/map/map-norway.jpg`

Direction:

- Use the real map image as the foundation for the Northern Norway arrival-map
  presentation.
- Keep any overlay route lines, markers or motion restrained and geographically
  supportive.
- Preserve map readability; do not darken or cover important details.
- Retain useful OpenStreetMap and external route-planning functionality already
  present elsewhere on the page.
- Continue to respect reduced-motion preferences and mobile layout needs.

Completion criteria:

- The map feature is visually cinematic while remaining recognizably useful as
  a map.
- No abstract coastline substitute replaces the real image.
- Practical travel-planning links remain available.

### 4. Deepen SEO Content And Resolve Canonical Route Pairs

Goal: turn the current route shells/aliases into a clear, non-duplicative SEO
structure with useful practical content.

Recently completed or represented foundation pages:

- `/about`
- `/contact`
- `/privacy`
- `/privacy-settings`
- `/responsible-travel`
- `/terms`
- `/destinations`
- `/norway-road-trip-routes`
- `/lofoten-travel-guide`
- `/fjords-of-norway`

Before implementation:

- Confirm whether `/norway-road-trip-routes` should become canonical or
  whether `/routes` should remain canonical with redirects/canonical metadata.
- Confirm whether `/lofoten-travel-guide` should become canonical or whether
  `/lofoten` should remain canonical with redirects/canonical metadata.
- Review [seo-pages.md](./seo-pages.md) and avoid creating conflicting
  navigation or duplicated thin content.

Content priorities:

- A practical route-selection framework by region, season and trip length.
- Strong links to Lofoten, Helgeland, Northern Norway arrival gateways and the
  map experience.
- Realistic pacing, ferry/logistics awareness and weather flexibility.
- Human editorial writing that supports search intent without keyword filler.
- Fjord travel guidance with concrete regions, pacing and transport context.
- Planned one-week and ten-day itinerary pages that do not overpromise all of
  Norway in too little time.

Completion criteria:

- Canonical URL strategy is clear.
- Each page provides meaningful planning value, not only cinematic presentation.
- Internal links connect naturally to maps, routes, seasonal guidance and
  destinations.

## Work Order

Proceed in this order:

1. Stabilize `/map` and assess current recent changes.
2. Resolve warnings and visible encoding issues.
3. Refine the real-image arrival-map presentation.
4. Resolve canonical strategy and deepen SEO guide content.
5. Continue broader content and editorial development only after the above
   baseline is reliable.

## Implementation Guardrails

- Keep the cinematic, quiet, Nordic identity intact.
- Prefer real landscape and map visuals over generic or decorative substitutes.
- Do not use loud animation, cluttered components or generic tourism marketing
  patterns.
- Maintain accessibility, performance and mobile quality as part of every
  major change.
- Inspect existing route, component and data patterns before implementing new
  work.
- Verify factual/travel-planning content before treating it as publication
  ready.
- Run appropriate verification for code changes, normally `npm run lint` and
  `npm run build`, plus browser inspection for visual or console-warning work.

## Later Opportunities

After the current work plan is complete:

- Expand high-intent guides for Lofoten, fjords and Norway itineraries.
- Develop a stronger premium Journal archive.
- Add responsible-travel and local-context content.
- Plan a partner/media-kit page when content depth and visual consistency are
  established.
- Implement a real privacy preference system only when the site actually uses
  optional cookies, analytics, embedded media or marketing scripts. Future
  implementation must block non-essential analytics before consent, store
  consent locally, allow changes from `/privacy-settings`, cover necessary,
  analytics, embedded media and marketing categories, and keep the UI
  GDPR-friendly, transparent and aligned with the premium Scandinavian design.
- Prepare the platform for future travel collaborations without compromising
  editorial trust.
