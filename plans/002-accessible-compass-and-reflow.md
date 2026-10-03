# Plan 002: Correct destination selection semantics and narrow-screen reflow

## Status

TODO / P1 / accessibility and responsive correctness / M / risk MED. Independent of 001; execute after it for isolated review. Planned at `5260391`, 2026-10-04. Not authorization to implement.

## Current state and intent

`src/components/sections/destinations/LofotenLocationCompass.tsx:121–138` renders every article and sets inactive classes to `pointer-events-none z-0 translate-y-2 opacity-0`. It does not set hidden or aria-hidden. Browser accessibility tree exposes all six articles labelled Selected place, while only one is visible. Buttons at :88–93 already have aria-pressed, aria-controls and arrow/Home/End handling. Preserve those.

`src/components/sections/destinations/HelgelandCoastTravelGuide.tsx:977–997` has `grid gap-8 lg:grid-cols-[1.08fr_0.92fr]`, padded children and `aspect-[4/3] min-h-[230px]`. At 320px viewport, document scrollWidth is 329px; Fv17 children end at x328.66. This is real overflow. Correct local geometry; don't add global clipping.

## Scope / conventions

Only the two files above. No shared styles, text, imagery, destinations, schema or packages. Reference `DestinationSection.tsx` uses min-w-0 for constrained children; reuse that principle where measured. Keep dark Scandinavian visual treatment, established crops and all content/IDs. Do not convert the compass into a different widget.

## Steps and verification

1. `git diff --stat 5260391..HEAD -- src/components/sections/destinations/LofotenLocationCompass.tsx src/components/sections/destinations/HelgelandCoastTravelGuide.tsx`; compare live code and `git status --short`. Confirm the original failures at /destinations/lofoten-islands and /destinations/helgeland-coast in a local browser.
2. Make inactive compass panels inaccessible to assistive technology while preserving their layout footprint if required for stable height. A local aria-hidden state keyed to isSelected is suitable for current text-only panels; evaluate inert if interactive descendants ever exist. Keep controls focusable, exactly one aria-pressed=true, matching aria-controls target. Preserve server-rendered content and document a no-JS reading approach; do not silently create inaccessible fallback content.
   Browser assertions after initial render and every button/Arrow/Home/End action: selected buttons count 1; selected panel aria-hidden is not true; all five others aria-hidden=true (or genuinely hidden); accessible article count in the panel container 1. Confirm no hidden panel contains an operable focus target. Test first/last wrap and reduced-motion preference. No source text removal.
3. Correct Helgeland grid child min sizing and aspect/min-height interaction with explicit constraints derived from actual browser geometry. Start with local min-w-0/width constraints and wrapping; verify before adding further classes. Do not change assets or aspect ratio globally.
   At 320,390,768,1024,1440 widths, assert `document.documentElement.scrollWidth <= window.innerWidth`. Check Fv17 text and checklist bounds remain inside content padding; capture before/after screenshots. At 200% browser zoom verify reading and controls. Other destinations should retain their previous geometry.
4. Run `npm run lint`, `npx tsc --noEmit`, `git diff --check` => exit0. If implementation is approved, `npm run build` => exit0 and four destination routes. Use existing browser tooling; no package installation.

## Test plan / done criteria

There is no existing destination browser test suite to copy. Use the installed browser CLI for real DOM/accessibility assertions, recording exact results rather than inventing a framework. No new snapshot mirror tests. Completion requires one accessible selected compass panel, working keyboard transitions, no 320px document overflow, unchanged text/images/anchors, and successful validation. User visual review is required before declaring layout parity approved.

## Git workflow / STOP / maintenance

Keep branch, no commit/push/merge/install. Stop on unexplained drift, two failed corrections, unresolved no-JS behavior, an apparent need for global styles, or a broader design change. Report instead of concealing overflow. Future links/buttons inside panels require a fresh focus audit; changing min heights or padding requires repeating narrow-width checks. Update plan status only after review evidence.
