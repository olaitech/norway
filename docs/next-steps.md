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

### 4. Continue SEO Content Work With Norway Road Trip Routes

Goal: begin the next content phase with a high-intent road-trip planning page.

Starting target:

- `/norway-road-trip-routes`

Before implementation:

- Confirm whether `/norway-road-trip-routes` should become the canonical route
  or whether current `/routes` content should be migrated, aliased or
  redirected.
- Review [seo-pages.md](./seo-pages.md) and avoid creating conflicting
  navigation or duplicated thin content.

Content priorities:

- A practical route-selection framework by region, season and trip length.
- Strong links to Lofoten, Helgeland, Northern Norway arrival gateways and the
  map experience.
- Realistic pacing, ferry/logistics awareness and weather flexibility.
- Human editorial writing that supports search intent without keyword filler.

Completion criteria:

- Canonical URL strategy is clear.
- The page provides meaningful planning value, not only cinematic presentation.
- Internal links connect naturally to maps, routes, seasonal guidance and
  destinations.

## Work Order

Proceed in this order:

1. Stabilize `/map` and assess current recent changes.
2. Resolve warnings and visible encoding issues.
3. Refine the real-image arrival-map presentation.
4. Start `/norway-road-trip-routes` SEO content work.
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
- Prepare the platform for future travel collaborations without compromising
  editorial trust.

