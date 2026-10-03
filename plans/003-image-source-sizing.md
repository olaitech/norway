# Plan 003: Align responsive image sources with real destination slots

## Status

TODO / P2 / performance / S–M / risk LOW. Depends on plan002 for final Helgeland slot geometry. Planned at `5260391`, 2026-10-04. No implementation authorization implied.

## Current state

Files under `src/components/sections/destinations/`:

- HelgelandCoastTravelGuide.tsx:859 uses `sizes="(min-width: 1280px) 380px, 92vw"` on the broad landscape after field-note features. At viewport1440 it renders 1278px wide. Ferry :1002 advertises440px but renders565px.
- TromsoTravelGuide.tsx:1120/:1141 and several other panels use `(min-width: 1024px) 48vw, 100vw`; measured at2560 viewport, their actual width remains628px while48vw is1229px.
- LofotenIslandsTravelGuide.tsx:757 and SenjaTravelGuide.tsx:716 share this uncapped half-width pattern.
- The new Tromso image at :1101 has explicit5029x3353 dimensions and a capped full-width sizes expression; preserve it.

Wrong source sizes can undersample Helgeland or oversupply other guides. Do not claim exact saved bytes until measured. Cached larger candidates can remain selected after viewport resizing.

## Scope / conventions

Only sizes attributes in the four guide files. No image replacement, rename, crop, animation, priority changes, package install, metadata or shared-component changes. Next/Image is already used. Preserve the approved cinematic design and each asymmetric grid. Use Tromso's full-width intrinsic photo sizes as an example, not a universal value to copy onto half-width slots.

## Steps and commands

1. Drift: `git diff --stat 5260391..HEAD -- src/components/sections/destinations`; inspect relevant image attributes and plan002 geometry. Stop if page layouts differ materially from cited patterns.
2. Record CSS slot widths for each affected image at320,390,768,1024,1440,2560 and DPR1/2 using fresh browser contexts. Lazy images must be scrolled into view and decoded before reading currentSrc/naturalWidth. Record viewport, slot width, sizes, requested candidate and transferred bytes. Fresh loads, not shrinking an already-loaded desktop page.
3. Set accurate capped full/half/asymmetric sizes expressions based on container max-width, horizontal padding and gaps. Keep `fill`/intrinsic dimensions and object-fit/position unchanged. Do not mechanically replace all48vw with one constant.
   Verify same matrix: source selection tracks slot geometry; Helgeland broad image no longer declares380px at desktop. Screenshots show unchanged composition. Confirm image responses200 and decoded naturalWidth>0. Compare fresh network requests before/after; report improvements or lack of measured savings honestly.
4. `npm run lint`, `npx tsc --noEmit`, `git diff --check` => exit0. `git diff --stat` and diff review must show only in-scope media attributes. When authorized, `npm run build` => exit0.

## Tests and done criteria

Use existing installed browser tools; there is no image-specific test suite. No new dependencies or brittle snapshots. Done: all images load, desktop/mobile crops remain approved, under-declared Helgeland width is fixed, capped panels no longer grow their declared width indefinitely, validations pass. Record browser DPR, viewport and cache state. Do not require a particular source candidate size where Next's configured candidate rounding legitimately differs from CSS pixels.

## Git workflow / STOP / maintenance

No branch switch, commit, push, merge or install. Stop if fixing sizes requires asset edits, layout changes beyond plan002, or if checks fail twice. Review future max-width/grid/padding edits together with sizes; raw JPEG dimensions alone do not determine delivered bandwidth. Update README status after review, not after a plausible code edit.
