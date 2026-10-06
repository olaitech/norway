# Affiliate foundation — Step 1

The equipment catalogue lives in `src/data/partners/affiliate.ts` and is deliberately
empty. Existing experience partner data and analytics remain separate.

`src/types/affiliate.ts` defines a discriminated product/collection union. Each item
can belong to multiple collection keys. The collection selector excludes disabled
items, and both cards also return nothing for a disabled item.

Use `AffiliateProductCard` for one product and `AffiliateCollectionCard` for a
curated search. Both accept `item`, `headingLevel` (defaults to 3), and
`showDisclosure` (defaults to true). Collection cards explicitly describe browsing
a selection and have a different default CTA. These are static components with
no click tracking or motion.

For grouped placements, render a visible `AffiliateDisclosure` beside the group
before setting `showDisclosure={false}` on its cards. Custom disclosure text can
be stored on each record or passed to the shared disclosure component.

Supply the complete verified EPN URL unchanged. `customId` documents the tracking
ID already present in that URL; it is not appended by a component. Updating links
requires only a data change. Product records optionally support `ebayItemId`.

Without an image, cards use a short decorative editorial rule rather than an
empty thumbnail. Future images require `imageUrl` and `imageAlt`, and use
Next/Image. Remote images require a separately approved, narrowly scoped
Next.js image configuration in a later step; no external domains are added here.

Run `node scripts/check-affiliate-foundation.mjs` for isolated rendering checks.
Its fixtures use reserved `.invalid` URLs and never enter application data or
routes. No preview route or production placement is created.

