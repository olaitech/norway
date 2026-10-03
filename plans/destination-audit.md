# Destination-system audit

Date: 2026-10-04. Baseline: `5260391`. Scope: Lofoten, Senja, Helgeland, Tromso, their shared components, route metadata, map data, and directly relevant validation infrastructure. Source paths below are relative to the repository root. `D/` means `src/components/sections/destinations/`.

## Evidence and verification

- Read the improve skill, audit playbook, plan template, closing-the-loop guidance, project instructions, design/product intent, relevant source and CI configuration.
- Inspected current local development server at localhost:3000; did not start or stop the user's server. Opened and closed a separate audit browser session.
- Reproduced Tromso console error: `Encountered two children with the same key ... /routes`. The source pattern also exists at checkpoint `578c068`; this is pre-existing content, not caused by the new northern-lights image.
- Browser checks on all four pages: one H1 and one main, no duplicate DOM IDs, no unresolved same-page hash links, parseable JSON-LD. Canonical paths align with the source metadata. No assertion that every external link remains available.
- Checked layout widths 320, 390, 768, 1440; additional Tromso 2560 measurement. Helgeland has 329px document scroll width at a 320px viewport; other checked page/width combinations did not show horizontal document overflow. Browser scrollbar reduces content width by 15px in this environment.
- Accessibility snapshot confirms all six Lofoten compass articles are exposed despite five having opacity 0. This is browser accessibility-tree evidence, not a full screen-reader certification.
- Source AST inspection found duplicate related-guide hrefs only in Tromso and Senja among these lists. Repeated category labels are legitimate and not automatically key defects. Referenced literal page image paths exist locally.
- `npm run lint`: exit 0. `npx tsc --noEmit`: exit 0. SEO check: 0 errors / 3 documented redirect warnings. AEO check: 0 errors / 2 documented public-file warnings.
- `npm audit --omit=dev --json`: 5 flagged packages (1 critical, 3 high, 1 moderate); this is a dependency report, not an exploitability result. No fix command run.
- No fresh production build, Lighthouse, CrUX/CWV measurements, throttled performance trace, full keyboard/screen-reader matrix, production deployment audit or external travel-fact verification. Previous build results are not presented as fresh audit results.

## Findings by priority

### F01 — P1: Duplicate related-guide data produces Tromso React key warning

- Evidence: `D/TromsoTravelGuide.tsx:614` and `:621` both use `/routes`; `:1579` uses `key={guide.href}`. Live development browser reproduced the exact warning. `D/SenjaTravelGuide.tsx:506,509` also repeats the destination, but `:1322` keys by href plus title and does not have this collision.
- Why it matters: React cannot uniquely identify siblings; update behavior is unsupported. Readers also see two cards for the same destination.
- Recommended fix: keep one meaningful route-hub card per related-guide list. Do not change to an index/random/composite key solely to conceal duplicate editorial data. Add a scoped regression check for these lists.
- Scope: local data correction plus validation. Effort S; risk LOW; confidence HIGH. See plan 001.

### F02 — P1: Lofoten inactive compass panels remain exposed to assistive technology

- Evidence: `D/LofotenLocationCompass.tsx:121–138` hides inactive panels only with opacity and pointer-events. Browser reported five opacity-0 panels with no hidden/aria-hidden state; accessibility snapshot contains all six articles, each labelled Selected place.
- Why it matters: the accessibility representation contradicts the selected visual state and presents inactive content as selected.
- Recommended fix: expose only the active panel to assistive technology while retaining stable layout, keyboard controls and authored text. Account for future focusable content and no-JavaScript behavior; do not blindly hide all fallback content.
- Scope: local interactive component. Effort S–M; risk MED (layout/fallback); confidence HIGH. See plan 002.

### F03 — P1: Helgeland overflows horizontally on narrow screens

- Evidence: `D/HelgelandCoastTravelGuide.tsx:977–997`, Fv17 grid with automatic minimum widths, padded prose and an aspect-ratio/min-height ferry panel. At 320px viewport: scrollWidth 329; Fv17 children extend to x=328.66, outside the page. The image slot computes approximately 307px wide despite a roughly 265px content column.
- Why it matters: reading requires horizontal movement at narrow widths/zoom, undermining responsive reflow.
- Recommended fix: constrain grid child minimum widths and media sizing locally; allow text wrapping. Preserve aspect/crop intentionally and do not mask the problem with global overflow-x:hidden. Verify narrow layout and large-screen framing.
- Scope: local Helgeland layout. Effort S–M; risk MED; confidence HIGH for overflow, MED for the minimal final CSS correction until tested. See plan 002.

### F04 — P1: Triage the installed Next.js advisory against the Windows runtime

- Evidence: `package.json:27` pins Next 16.2.12. Audit flags `GHSA-p293-qw3h-jr36`; the official advisory includes >=16.0.0 <16.3.3 on Windows-hosted applications without Cache Components. The local process is Next dev on Windows and listens on `::` port 3000. `next.config.ts:3` does not enable Cache Components. Network/firewall exposure outside the host was not assessed.
- Why it matters: this is a relevant local runtime prerequisite, distinct from whether a Vercel production deployment is affected. No exploitation or compromise was demonstrated.
- Recommended fix: a separate approved dependency-maintenance task should confirm runtime applicability, select a currently patched compatible release, and verify full build/routes/images. Review other reported image-optimization advisories against actual formats/hosting; do not use `npm audit fix --force` blindly.
- Scope: repository-level dependency maintenance, outside destination source fixes. Effort M; risk MED; confidence HIGH for installed range and Windows environment, MED for actual exposure.
- Primary source: https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36 . Additional conditional advisories: https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4 and https://github.com/vercel/next.js/security/advisories/GHSA-vcvr-r3jv-pc5j . No `next/og`/ImageResponse use or local AVIF files were found by scoped source/file search; these conditional reports are not labelled confirmed destination exploits.

### F05 — P2: Image source sizing disagrees with rendered geometry

- Evidence: `D/HelgelandCoastTravelGuide.tsx:859` says desktop 380px for a full-width slot measured 1278px at viewport 1440. Its ferry at `:1002` says 440px versus measured 565px. `D/TromsoTravelGuide.tsx:1120,1141` says 48vw for 628px panels at viewport 2560 (advertised width 1229px). Similar capped-container mismatch: `D/LofotenIslandsTravelGuide.tsx:757`, `D/SenjaTravelGuide.tsx:716`.
- Why it matters: undersized candidates can soften images; oversized candidates can waste bandwidth. Exact byte/CWV costs were not measured, and existing browser caches can hide candidate-selection differences.
- Recommended fix: calculate sizes from actual capped columns/full-width slots, then verify fresh loads at DPR 1/2, mobile, desktop and ultrawide. Preserve source images and approved crops. The new Tromso full-width photo already declares intrinsic dimensions and capped sizes; do not replace it.
- Scope: local media attributes across pages. Effort S–M; risk LOW; confidence HIGH. See plan 003.

### F06 — P2: Review dates disagree between visible copy, schema and sitemap

- Evidence: `src/data/guide-meta-sources.ts:3` says May 2026; Senja `:1354` and Tromso `:1609` use it. Their Article dates are June 25 at `:549` and `:661`. `app/sitemap.ts:8,41–44,56` gives all destinations June 25; Lofoten Article uses July21 at `:507`, Helgeland July10 at `:523`.
- Why it matters: readers and machines receive different freshness claims, and separate constants are already drifting.
- Recommended fix: distinguish editorial review date from structural modification date if needed, with deliberate documented semantics. Use one verified date source per semantic field; align displayed reviewed/updated labels, Article and sitemap appropriately. Do not stamp today's date merely because JSX moved.
- Scope: small architectural metadata consolidation. Effort M; risk LOW–MED; confidence HIGH. See plan 004.

### F07 — P2: Map and destination planning summaries have diverged

- Evidence: `src/data/destinations.ts:74` labels Lofoten best season May–September; approved guide `:640` says year-round with purpose-specific seasons. Data `:356` labels Tromso September–March; guide `:792` includes winter and summer. These are active facts: `src/data/map.ts:83–84` feeds `src/components/sections/map/MapExplorer.tsx:60,64`.
- Why it matters: visitors see different planning framing across the same product. Short and long summaries need not be identical, but seasonal qualifications should not disappear silently.
- Recommended fix: a typed planning record with explicitly authored compact and detailed summaries, shared by the map and at-a-glance. Preserve destination-specific editorial prose and get editorial agreement on facts.
- Scope: architectural data ownership. Effort M; risk MED; confidence HIGH for drift, no claim that summer-only or winter-only travel is inherently false. See plan 004.

### F08 — P2: Guide navigation and shared editorial chrome are inconsistent

- Evidence: plain index divs in Lofoten `:622`, Senja `:663`, Tromso `:774`, versus named nav in Helgeland `:670`. Repeated SectionIntro implementations: Lofoten `:477`, Senja `:519`, Tromso `:631`. Four guide files are approximately 1,200–1,600 lines; metadata branches at `app/destinations/[slug]/page.tsx:44,73,102,131`.
- Why it matters: navigation landmarks are missing on three long pages; simple shared changes need several parallel edits.
- Recommended fix: first add named nav semantics locally. Then extract narrow section-intro/index helpers with explicit variants. Keep authored composition and do not force Helgeland's unique features into a uniform template.
- Scope: local semantic corrections followed by incremental architecture. Effort M; risk MED for extraction, LOW for nav semantics; confidence HIGH.

### F09 — P2: Regression gates do not cover destination runtime contracts

- Evidence: `package.json:8–16` provides lint/build/foundation checks but no destination behavior tests. `.github/workflows/quality-check.yml:40–47` runs foundation checks and build. `scripts/check-public-routes.mjs` checks HTTP/redirect/sitemap, not browser console, related-list uniqueness, selected-panel accessibility or responsive overflow. The key warning survives successful lint/TypeScript/build.
- Why it matters: new destinations can repeat real defects without failing existing gates.
- Recommended fix: small no-new-dependency source/data checks and browser acceptance for the four routes. Test genuine contracts, not exact snapshots of all editorial wording. Add browser CI only as a separately scoped tooling choice.
- Scope: validation architecture. Effort M; risk LOW; confidence HIGH. Regression cases are embedded in plans 001–004.

### F10 — P2 investigation: Reveal wrappers change element type after mount

- Evidence: `D/DestinationReveal.tsx:22–29` returns section before mount, then motion.section with initial opacity 0; `src/hooks/useMounted.ts:6–9` schedules the switch. Guides contain 35–55 literal wrapper sites, some expanded by maps. FAQ disclosures and links sit inside these subtrees.
- Why it matters: the root type change remounts descendants and can take visible server content into a hidden animation state. Focus/disclosure/hash timing and performance impacts need controlled reproduction, not assumption.
- Recommended investigation: slow hydration, direct hash, keyboard focus, details state and reduced-motion tests. Only if confirmed, use a stable progressively enhanced wrapper while preserving no-JS visibility.
- Scope: shared architectural behavior. Effort M; risk MED; confidence HIGH for type switch, MED for user-visible harm. No automatic motion rewrite recommended.

### F11 — P3: FAQ schema policy varies

- Evidence: Helgeland `:445,525` emits FAQPage from visible data; the other three emit only Article/BreadcrumbList despite visible FAQ sections. Browser confirms this difference.
- Why it matters: inconsistent machine-readable structure, not a broken page or demonstrated SEO loss.
- Recommended fix: decide a policy; if FAQPage is desired, generate it from the same visible arrays with the existing serializer. No promised rankings or rich results.
- Scope: local consistency. Effort S; risk LOW; confidence HIGH for inconsistency, unmeasured benefit.

### F12 — P3: Review image rhythm only if user behavior justifies it

- Evidence: Tromso `:1101–1157` places the approved large aurora image before two aurora panels; practical checklist follows at `:1160`. On mobile the panels stack. Senja has comparatively few photographic pauses across a long guide.
- Why it matters: different image density can lengthen the journey to practical guidance. This is an editorial tradeoff, not a confirmed usability defect; visual approval takes precedence over generic aesthetic preferences.
- Recommendation: defer. If future review shows friction, interleave existing guidance and imagery without removing approved assets or inventing copy.
- Scope: optional local editorial polish. Effort S; risk MED of undoing approval; confidence HIGH for structure, LOW for negative user impact.

## Architecture and commercial readiness

Strengths: server-rendered editorial compositions; native FAQ disclosures; semantic dl facts; named shared sections; priority hero images; local image optimization; stable canonical URLs; safe JSON-LD escaping. No destination data-fetch waterfall or mutable API boundary is introduced by these pages.

Preserve Lofoten's compass, Senja's hikes/ferry context, Helgeland's Fv17/island/field-note structure, and Tromso's city-base/seasonal approach. The system should share small reliable primitives and authoritative identity/fact records, not share all narrative content or section order.

Before scaling, explicitly choose the new-destination path: current four slugs use custom branches (`app/destinations/[slug]/page.tsx:198–214`), while a separate older `DestinationPage` fallback remains. Do not delete it in this audit or silently adopt it as the new default.

Future commercial layer: `src/types/partners.ts:1–16` and `src/data/partners/experiences.ts:8` already provide an empty typed product collection and selectors. DestinationSection children can host an optional module later. Keep that data separate from editorial facts; use stable destination IDs, verified products, explicit disclosures, safe outbound-link policy, empty/unavailable states and measured impact. No widget, provider onboarding, placeholder product, price or booking claim is needed now. The current empty collection is intentional, not a bug.

## Deferred and unaudited

- Full production/Vercel security assessment, external operator facts, link availability and API/Entur integration are outside this destination audit.
- Comprehensive WCAG certification, contrast measurement, real screen-reader tests, production CWV and cold-cache network profiling remain future measurement work.
- No forced CMS migration, large universal renderer, new commercial layer, automatic dependency update or redesign.
- No fake author identities, fabricated review dates or new travel claims.
- All source remains unchanged; only plans documents are added.
