# SEO Pages

## Purpose

This document defines the editorial SEO page set and prevents future work from
confusing target URLs with routes already implemented in the application.

Treat canonical live URLs as the source of truth. Redirect stubs may exist for
legacy or SEO-friendly slugs, but they should not be documented as separate
content pages.

Before creating pages, confirm:

- The preferred canonical slug.
- Whether an existing route should remain canonical, redirect or become an
  alias.
- Metadata, internal linking and content depth requirements.

## Canonical Live Pages

| Canonical URL | Topic | Current implementation status |
| --- | --- | --- |
| `/best-time-to-visit-norway` | Seasonal planning | Primary live page |
| `/northern-lights-norway` | Aurora planning | Primary live page |
| `/responsible-travel` | Responsible tourism pillar | Primary live page |
| `/about` | Project trust and editorial positioning | Primary live page |
| `/contact` | Contact and collaboration information | Primary live page |
| `/privacy` | Privacy policy | Primary live page |
| `/privacy-settings` | Privacy preference placeholder | Primary live placeholder; not a real consent system yet |
| `/terms` | Terms of use | Primary live page |
| `/destinations` | Destination index | Primary live page |
| `/destinations/lofoten-islands` | Lofoten destination page | Primary live page |
| `/fjords-of-norway` | Fjord travel planning | Primary live page with introductory guide content |
| `/routes` | Road trip route hub | Primary live page |
| `/routes/lofoten-road-trip` | Lofoten road trip detail | Primary live route detail |
| `/routes/helgeland-coast-road-trip` | Helgeland Coast road trip detail | Primary live route detail |
| `/guides` | Practical guide archive | Primary live page |
| `/guides/best-time-to-visit-northern-norway` | Seasonal guide | Primary live guide page |
| `/guides/driving-in-norway-what-visitors-should-know` | Driving guide | Primary live guide page |
| `/guides/how-to-see-the-northern-lights-in-norway` | Aurora guide | Primary live guide page |
| `/guides/norway-ferry-guide-for-tourists` | Ferry guide | Primary live guide page |
| `/guides/how-to-travel-northern-norway-without-a-car` | Transport guide | Primary live guide page |
| `/guides/how-expensive-is-norway-for-tourists` | Budget guide | Primary live guide page |
| `/guides/50-local-money-saving-tips-for-norway` | Budget guide | Primary live guide page |
| `/guides/camping-rules-in-norway` | Outdoor travel guide | Primary live guide page |
| `/guides/what-to-pack-for-norway` | Packing guide | Primary live guide page |

## Redirect Stubs And Alias Routes

| Alias URL | Primary URL | Current implementation status | Notes |
| --- | --- | --- | --- |
| `/norway-road-trip-routes` | `/routes` | Redirect stub | Legacy SEO alias; do not treat as a separate content page |
| `/lofoten-travel-guide` | `/destinations/lofoten-islands` | Redirect stub | Legacy SEO alias; do not treat as a separate content page |
| `/lofoten` | `/destinations/lofoten-islands` | Redirect stub | Legacy redirect for the canonical Lofoten destination page |
| `/guides/driving-in-norway` | `/guides/driving-in-norway-what-visitors-should-know` | Redirect stub | Legacy guide alias; do not treat as a separate content page |
| `/guides/norway-ferry-guide` | `/guides/norway-ferry-guide-for-tourists` | Redirect stub | Legacy guide alias; do not treat as a separate content page |
| `/guides/7-days-in-northern-norway` | `/routes/lofoten-road-trip` | Redirect stub | Legacy itinerary alias; not a content page |
| `/guides/10-days-in-northern-norway` | `/routes/helgeland-coast-road-trip` | Redirect stub | Legacy itinerary alias; not a content page |
| `/norway-itinerary-7-days` | `/routes/lofoten-road-trip` | Redirect stub | Legacy itinerary alias; not a content page |
| `/norway-itinerary-10-days` | `/routes/helgeland-coast-road-trip` | Redirect stub | Legacy itinerary alias; not a content page |
| `/routes/helgeland-coastal-route` | `/destinations/helgeland-coast#scenic-route` | Redirect stub | Anchor alias; not a standalone page |

## Sitemap Status And TODOs

The sitemap should follow the canonical live URLs above. Redirect stubs are
intentionally not treated as standalone content pages.

Remaining SEO TODOs:

- TODO: Expand `/fjords-of-norway` beyond introductory content before treating
  it as complete.

## Page Briefs

These briefs cover the top-level editorial pages below. Live guide articles are
listed in the canonical table above and should keep their primary URLs, but
they do not need separate briefs in this document. Redirect aliases are
documented in the table and do not need separate briefs.

### Best Time To Visit Norway

**Search intent:** understand months, daylight, weather and the right season
for a desired trip.

Primary URL: `/best-time-to-visit-norway`

Core sections:

- Month/season overview.
- Northern lights versus midnight sun.
- Best season for road trips and fjords.
- Northern Norway timing considerations.
- Practical packing and weather-flexibility note.

Internal links: northern lights, route hub, Lofoten, map.

### Norway Road Trip Routes

**Search intent:** compare possible driving routes and choose a realistic
itinerary.

Primary URL: `/routes`

Core sections:

- Route-selection framework by days and season.
- Lofoten and Helgeland featured routes.
- Arrival gateways and ferry implications.
- Driving pace and weather buffers.
- Link to interactive/arrival map.

Redirect stub: `/norway-road-trip-routes`

### Lofoten Travel Guide

**Search intent:** plan a Lofoten trip with bases, season, route and standout
experiences.

Primary URL: `/destinations/lofoten-islands`

Core sections:

- When to visit.
- Where to base a stay.
- Village/beach/scenic-road rhythm.
- Arrival and driving strategy.
- Suggested short itinerary.

Redirect stubs: `/lofoten`, `/lofoten-travel-guide`

### Northern Lights In Norway

**Search intent:** choose where and when to see aurora with realistic
expectations.

Primary URL: `/northern-lights-norway`

Core sections:

- Viewing season and darkness windows.
- Tromso, Lofoten, Senja and Alta as bases.
- Cloud/weather flexibility.
- Multi-night planning.
- Winter transport and comfort considerations.

Internal links: seasonal guide, map, relevant destinations and routes.

### Responsible Travel In Norway

**Search intent:** understand how to travel through Norway respectfully,
realistically and safely.

Status: route created at `/responsible-travel`.

Primary URL: `/responsible-travel`

Core sections:

- Travel slowly.
- Respect private land and local communities.
- Weather, mountain and coastal safety.
- Ferry routes and realistic distances.
- Leave no trace.
- Sami cultural awareness.
- Support local businesses.
- Practical pre-trip checklist.

Internal links: about, map, routes and future responsible-travel articles.

### About This Portal

**Search intent:** understand who the project is for and why it exists.

Status: route created at `/about`.

Primary URL: `/about`

Content role:

- Establish independent editorial positioning.
- Explain the Northern Norway perspective.
- Clarify that the site is a knowledge portal, not a generic booking platform.
- Link naturally to map, journal and responsible-travel content.

### Fjords Of Norway

**Search intent:** compare fjord regions and plan a scenic trip.

Primary URL: `/fjords-of-norway`

Core sections:

- Region overview without attempting to cover all Norway superficially.
- When fjords pair well with road trips.
- Coastal versus inland experiences.
- Practical transport/pace guidance.
- Link routes and map concepts where relevant.

## Metadata Checklist

Each published SEO page should have:

- A unique title and meta description written for the page intent.
- A single clear H1.
- A real, relevant hero image with accurate alt text.
- Open Graph metadata.
- Meaningful internal links.
- Canonical/redirect decisions for overlapping route names.
- Copy reviewed for Norwegian characters and factual currency.

## Content Review Standard

Do not publish a page that is only a cinematic shell. A page is ready when it
contains enough practical guidance for a traveller to make at least one real
planning decision.
