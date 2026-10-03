# Plan 004: Establish explicit ownership for destination facts and dates

## Status

TODO / P2 / architecture and metadata / effort M / risk MED. Depends on editorial confirmation of review-date semantics and compact summaries. Planned at `5260391`, 2026-10-04. This is a gated implementation plan, not permission to invent facts or dates.

## Why / current state

`src/data/destinations.ts:74` labels Lofoten Best season May–September, while approved LofotenIslandsTravelGuide.tsx:640 says year-round with seasonal purposes. Data :356 labels Tromso September–March while TromsoTravelGuide.tsx:792 covers winter and summer. Map consumers at `src/data/map.ts:83–84` look up these facts by display-label string; MapExplorer renders them at :60/:64.

`src/data/guide-meta-sources.ts:3` has `GUIDE_LAST_UPDATED = "May 2026"`. Senja and Tromso footers consume it, but their Article schema uses2026-06-25. `app/sitemap.ts:41–44` gives all four destinations the June25 site-wide date, while Lofoten Article saysJuly21 and Helgeland July10. Review date and structural modification date can legitimately differ only if labels and semantics make that intentional.

## Scope / conventions

Allowed after confirmation: new `src/data/destination-planning.ts`; planning fact references in the four guides, `src/data/destinations.ts`, `src/data/map.ts`, and per-destination dates in `app/sitemap.ts`; new `scripts/check-destination-planning.mjs`. Do not alter unrelated uses of GUIDE_LAST_UPDATED, global source sets, canonicals, page text, section order, images, partner data, packages or shared styling. Keep facts in readonly typed records, using existing DestinationSlug. Preserve distinct short and detailed wording when useful.

No universal page renderer. No CMS. No commercialization. Project intent calls for honest practical travel information and a cinematic editorial identity, not generated filler.

## Commands / steps

1. `git diff --stat 5260391..HEAD -- src/data src/components/sections/destinations app/sitemap.ts`; inspect only relevant changes and `git status --short`. Stop on conflicting unpublished edits.
2. Prepare a four-destination fact/date mapping for human confirmation. Keep existing approved long summaries. Propose short summaries that preserve seasonal qualifications. Ask specifically which dates represent actual editorial review versus page modification; do not use today's date or the commit date as invented review evidence. If dates remain unknown, STOP the date portion and report the missing decision.
3. Add a typed record keyed by DestinationSlug with named planning fields and intentionally separate compact summaries, plus clearly defined date fields. Use type-only imports where necessary to avoid a runtime cycle with destinations.ts. Validate keys, nonempty values and ISO dates.
   Create a small no-new-dependency checker using installed TypeScript transpilation/parser or an equivalent existing Node-compatible path. Model failure reporting on scripts/check-seo-foundation.mjs. Include pure-validator cases for missing destination, malformed date, duplicate identity and intentional short/long summary differences. `node scripts/check-destination-planning.mjs` => all cases pass and four records validated.
4. Make AtAGlance/map facts consume the record; retain legacy data fields only as projections when other callers need them. Do not keep conflicting authored copies. Verify `/map` summaries and each destination match the approved mapping, with no accidental copy of one destination's content into another.
5. Wire the confirmed date semantics to guide footers, Article schema and sitemap. Use explicit deterministic values, never Date.now(). If review and modification dates differ, test their distinct fields rather than imposing false equality.
6. `npm run lint`, `npx tsc --noEmit`, `npm run check:seo`, `npm run check:aeo`, `node scripts/check-destination-planning.mjs`, `git diff --check` => exit0. Existing three SEO/two AEO warnings allowed. With implementation authorization, `npm run build` => exit0 and all destination pages generated.

## Done criteria / browser verification

- Four records with editor-confirmed values and explicit date meanings.
- Map and page summaries reflect the same destination planning intent.
- Parsed Article and sitemap dates match the approved date fields; visible labels accurately describe them.
- Canonical URLs, existing anchors, imagery and section order unchanged.
- No dependency/runtime import cycle; validation succeeds; only allowed files changed.
- Reviewer verifies real rendered outputs, not just a test that repeats its own fixture values.

## Git workflow / STOP / maintenance

Stay on current branch; no commit, push, merge, install or deployment. Stop if dates cannot be substantiated, if travel facts need outside research beyond approved content, if a shared-data change would rewrite unrelated pages, or on two failed validation attempts. Record blocked decisions. Future editorial reviews update the single record intentionally; CI and reviewers should check map/guide/sitemap propagation. Update README status only after evidence-backed review.
