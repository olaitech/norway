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
| `/fjords-of-norway` | Fjord travel planning | Planned; no exact route confirmed |
| `/norway-itinerary-7-days` | One-week itinerary | Planned; no exact route confirmed |
| `/norway-itinerary-10-days` | Ten-day itinerary | Planned; no exact route confirmed |

Existing route detail pages also support SEO and planning:

- `/routes/lofoten-road-trip`
- `/routes/helgeland-coast-road-trip`
- `/destinations/[slug]`

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

