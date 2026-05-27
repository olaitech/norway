# SEO Pages

## Purpose

This document defines the editorial SEO page set and prevents future work from
confusing target URLs with routes already implemented in the application.

Before creating pages, confirm:

- The preferred canonical slug.
- Whether an existing route should remain canonical, redirect or become an
  alias.
- Metadata, internal linking and content depth requirements.

## Current Status

| Target URL | Topic | Current implementation status |
| --- | --- | --- |
| `/best-time-to-visit-norway` | Seasonal planning | Route exists |
| `/norway-road-trip-routes` | Road trip route hub | Topic exists at `/routes`; canonical decision needed |
| `/lofoten-travel-guide` | Lofoten planning guide | Topic exists at `/lofoten`; canonical decision needed |
| `/northern-lights-norway` | Aurora planning | Route exists |
| `/responsible-travel` | Responsible tourism pillar | Route exists |
| `/about` | Project trust and editorial positioning | Route exists |
| `/fjords-of-norway` | Fjord travel planning | Planned; no exact route confirmed |
| `/norway-itinerary-7-days` | One-week itinerary | Planned; no exact route confirmed |
| `/norway-itinerary-10-days` | Ten-day itinerary | Planned; no exact route confirmed |

Existing route detail pages also support SEO and planning:

- `/routes/lofoten-road-trip`
- `/routes/helgeland-coast-road-trip`
- `/destinations/[slug]`

## Sitemap TODOs

These requested URLs are intentionally excluded from `app/sitemap.ts` until
matching routes or canonical redirect decisions exist:

- TODO: Add `/destinations` to the sitemap only after a destination index route
  exists.
- TODO: Decide whether `/norway-road-trip-routes` should become canonical or
  redirect to `/routes`.
- TODO: Decide whether `/lofoten-travel-guide` should become canonical or
  redirect to `/lofoten`.
- TODO: Create or route `/fjords-of-norway` before adding it to the sitemap.
- TODO: Create or route `/norway-itinerary-7-days` before adding it to the
  sitemap.
- TODO: Create or route `/norway-itinerary-10-days` before adding it to the
  sitemap.

## Page Briefs

### Best Time To Visit Norway

**Search intent:** understand months, daylight, weather and the right season
for a desired trip.

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

Core sections:

- Route-selection framework by days and season.
- Lofoten and Helgeland featured routes.
- Arrival gateways and ferry implications.
- Driving pace and weather buffers.
- Link to interactive/arrival map.

URL decision required: retain `/routes` as canonical or introduce
`/norway-road-trip-routes` with an appropriate redirect/canonical strategy.

### Lofoten Travel Guide

**Search intent:** plan a Lofoten trip with bases, season, route and standout
experiences.

Core sections:

- When to visit.
- Where to base a stay.
- Village/beach/scenic-road rhythm.
- Arrival and driving strategy.
- Suggested short itinerary.

URL decision required: retain `/lofoten` as canonical or introduce the longer
SEO slug deliberately.

### Northern Lights In Norway

**Search intent:** choose where and when to see aurora with realistic
expectations.

Core sections:

- Viewing season and darkness windows.
- Tromsø, Lofoten, Senja and Alta as bases.
- Cloud/weather flexibility.
- Multi-night planning.
- Winter transport and comfort considerations.

Internal links: seasonal guide, map, relevant destinations and routes.

### Responsible Travel In Norway

**Search intent:** understand how to travel through Norway respectfully,
realistically and safely.

Status: route created at `/responsible-travel`.

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

Content role:

- Establish independent editorial positioning.
- Explain the Northern Norway perspective.
- Clarify that the site is a knowledge portal, not a generic booking platform.
- Link naturally to map, journal and responsible-travel content.

### Fjords Of Norway

**Search intent:** compare fjord regions and plan a scenic trip.

Core sections:

- Region overview without attempting to cover all Norway superficially.
- When fjords pair well with road trips.
- Coastal versus inland experiences.
- Practical transport/pace guidance.
- Link routes and map concepts where relevant.

### Norway Itinerary: 7 Days

**Search intent:** find a feasible first-trip plan.

Content direction:

- Choose one geographic focus rather than promising all of Norway.
- Explain arrival/departure logic and daily transfer limits.
- Provide variations by season or northern focus.
- Link deeper guides for each major stop.

### Norway Itinerary: 10 Days

**Search intent:** create a slower, broader Norway route with enough margin.

Content direction:

- Extend a coherent region pairing, such as Northern Norway arrival gateways
  with Lofoten/Helgeland or Tromsø/Senja.
- Include rest/weather-buffer days.
- Explain ferry and transport assumptions clearly.

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
