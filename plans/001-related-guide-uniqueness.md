# Plan 001: Remove redundant related-guide destinations

## Status

TODO / P1 / correctness and regression coverage / effort S / risk LOW / depends on none. Planned at `5260391`, 2026-10-04. This is a plan, not authorization to execute.

## Why and current state

Tromso's relatedGuides includes `{ title: "Norway Road Trip Routes", href: "/routes" }` at `src/components/sections/destinations/TromsoTravelGuide.tsx:614` and `{ label: "Route hub", title: "All Routes", href: "/routes" }` at :621. The map at :1579 keys DestinationReveal by guide.href. Browser on localhost:3000/destinations/tromso reports the duplicate /routes React key. Senja's corresponding array at :506/:509 has the same redundant destinations but uses a unique href-title key at :1322.

Keep the more descriptive Norway Road Trip Routes entry, remove only the redundant All Routes entry from each of those lists. Retain all other destinations and the existing valid /routes URL. Never fix this by random/index keys or suppressing console errors. Lofoten and Helgeland are read-only regression subjects.

## Scope and conventions

Only modify TromsoTravelGuide.tsx, SenjaTravelGuide.tsx in the directory above, and create `scripts/check-destination-related-links.mjs`. No metadata, page order, image, CSS, package or lockfile edits. Keep static readonly arrays and current cinematic cards. Existing script style: `scripts/check-seo-foundation.mjs` prints useful errors and exits nonzero.

Project design: calm dark editorial, existing imagery, no generic booking cards. No affiliate changes. Node24, npm, Next16 App Router; use existing dependencies only.

## Commands and steps

1. Drift check: `git diff --stat 5260391..HEAD -- src/components/sections/destinations/TromsoTravelGuide.tsx src/components/sections/destinations/SenjaTravelGuide.tsx`. Inspect `git status --short` and verify the excerpts still match. Stop on unexplained drift; do not overwrite user changes.
2. Add the script using the already-installed TypeScript parser to inspect ONLY the top-level relatedGuides arrays in the four named guides (LofotenIslandsTravelGuide, SenjaTravelGuide, HelgelandCoastTravelGuide, TromsoTravelGuide). Resolve literal hrefs through readonly/as wrappers. Reject duplicate destinations within each array and fail closed if an expected array cannot be analyzed. Repeated labels across unrelated arrays are not errors.
   Verify: `node scripts/check-destination-related-links.mjs` initially fails with Tromso and Senja /routes duplicates. Include pure validator self-tests using node:assert, with unique list success, duplicate failure, and malformed/missing array failure; do not mutate source fixtures.
3. Remove only the two redundant related-guide entries. Verify the same command exits 0 for all four guides. Use `git diff --stat` to confirm only the permitted files changed.
4. Run `npm run lint`, `npx tsc --noEmit`, `npm run check:seo`, `npm run check:aeo`, `git diff --check`; all must exit 0 (documented 3 SEO/2 AEO warnings allowed). A production build may be run only when implementation is authorized, using `npm run build`; expect all four routes to generate.
5. With an available local development server and installed browser tooling, open each destination with a fresh console. Assert zero duplicate-key messages and exactly one /routes card inside Tromso and Senja #related-guides. Other page/footer /routes links are legitimate. Check the href still navigates to the route hub. Do not interact with newsletter submission or external services.

## Done criteria and tests

- Validator self-tests and all four source arrays pass.
- Browser console warning is absent; one related /routes card remains in each affected page.
- Required commands exit 0, only allowed files changed, no suppressed warning or artificial key workaround.
- Record commands and browser observations in the review report; update README status only after review.

## Git workflow / STOP / maintenance

Stay on the existing branch. No commit, push, merge, install or branch switch without separate user authorization. Stop if lists intentionally need multiple distinct actions to the same URL, if parser cannot safely recognize the arrays, if a command fails twice, or if changes require out-of-scope files. Do not invent replacement links. Future related content should have one meaningful entry per destination; CI wiring can be a separately approved follow-up.
