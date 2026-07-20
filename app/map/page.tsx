import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import "leaflet/dist/leaflet.css";

import { GatewaysToNorthernNorway } from "@/src/components/sections/map/GatewaysToNorthernNorway";
import { MapExplorer } from "@/src/components/sections/map/MapExplorer";
import { RelatedLinkCards } from "@/src/components/shared/RelatedLinkCards";
import { featuredRoutes, mapFilters, mapPlaces } from "@/src/data/map";
import { createPageMetadata } from "@/src/lib/metadata";
import {
  JsonLd,
  createBreadcrumbListJsonLd,
} from "@/src/lib/seo/jsonLd";

export const metadata = createPageMetadata({
  title: "Norway Travel Map | Destinations, Routes & Trip Planning",
  description:
    "Explore Norway on an interactive travel map. Discover destinations, scenic routes and practical guides, or open locations in Google Maps for live directions.",
  canonical: "/map",
  image: {
    url: "/images/map/map-norway.jpg",
    alt: "A map of Norway highlighting routes, destinations and northern regions",
  },
});

export default function MapPage() {
  return (
    <>
      <JsonLd
        value={createBreadcrumbListJsonLd([
          { name: "Home", href: "/" },
          { name: "Map", href: "/map" },
        ])}
      />
      <main className="relative min-h-screen overflow-hidden bg-[#050607] text-[#f4efe2]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_8%,rgba(106,151,160,0.12),transparent_31%),radial-gradient(circle_at_16%_24%,rgba(216,201,167,0.07),transparent_27%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(12,23,25,0.48),transparent)]" />

      <header className="relative z-10 px-5 py-6 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Norge home"
            className="flex items-center gap-4 text-[0.64rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2]"
          >
            <Image
              src="/images/branding/logo2.png"
              alt=""
              width={80}
              height={80}
              priority
              className="h-20 w-20 object-contain"
            />
            Norge
          </Link>
          <nav className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 backdrop-blur-sm sm:gap-7 sm:px-6">
            <Link
              href="/"
              className="hidden text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2] sm:block"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
            >
              Destinations
            </Link>
            <Link
              href="/journal"
              className="hidden text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2] sm:block"
            >
              Journal
            </Link>
            <span className="text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]">
              Map
            </span>
          </nav>
        </div>
      </header>

      <section className="relative z-10 px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 md:px-12 lg:pb-20 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/destinations"
            className="mb-10 inline-flex items-center gap-3 text-[0.63rem] font-medium uppercase tracking-[0.29em] text-[#f4efe2]/52 transition-colors hover:text-[#f4efe2]/86"
          >
            Browse all destinations
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <p className="text-[0.67rem] font-medium uppercase tracking-[0.4em] text-[#d8c9a7]/78">
            Interactive field map
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.3rem,8.4vw,7.75rem)] font-normal leading-[0.9] tracking-[-0.058em]">
            Norway Travel Map
          </h1>
          <p className="mt-7 max-w-2xl text-base font-light leading-[1.8] text-[#f4efe2]/68 sm:text-lg md:text-xl">
            Explore Norway by region, discover destinations and open locations
            directly in Google Maps for live directions, distances and route
            planning.
          </p>
          <p className="mt-4 max-w-2xl text-sm font-light leading-[1.8] text-[#f4efe2]/52 sm:text-base">
            Trips Norway connects the map with destination guides, scenic
            routes, ferry-aware travel information and practical planning
            advice.
          </p>
        </div>
      </section>

      <MapExplorer
        filters={mapFilters}
        places={mapPlaces}
        routes={featuredRoutes}
      />

      <section
        aria-labelledby="map-planning-notes"
        className="relative z-10 px-5 pb-20 sm:px-8 sm:pb-24 md:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-6 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:p-10">
          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/72">
              Practical map notes
            </p>
            <h2
              id="map-planning-notes"
              className="mt-5 max-w-md font-serif text-[clamp(2rem,4vw,3.35rem)] font-normal leading-[0.98] tracking-[-0.045em]"
            >
              From map distance to travel time
            </h2>
          </div>
          <div className="space-y-4 text-sm font-light leading-[1.85] text-[#f4efe2]/64 sm:text-base">
            <p>
              Use the map to understand where Norway&apos;s destinations are
              located. Select a place to read its Trips Norway guide or open it
              in Google Maps for live directions, distances and route planning.
            </p>
            <p>
              Driving time in Norway may be affected by ferries, mountain roads,
              weather and seasonal closures. Read the{" "}
              <Link
                href="/guides/driving-in-norway-what-visitors-should-know"
                className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
              >
                driving guide
              </Link>{" "}
              and{" "}
              <Link
                href="/guides/norway-ferry-guide-for-tourists"
                className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
              >
                ferry guide
              </Link>{" "}
              before fixing each day&apos;s timing.
            </p>
          </div>
        </div>
      </section>

      <GatewaysToNorthernNorway />

      <section className="border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <RelatedLinkCards
            eyebrow="Planning paths"
            title="Continue exploring Norway"
            intro="Move from the map into destination guides, fjord regions and road trips with realistic planning context."
            links={[
              {
                label: "Coastal passage",
                title: "Helgeland Coast",
                href: "/destinations/helgeland-coast",
                description: "Plan a slower journey through ferry crossings, island detours and open shoreline.",
              },
              {
                label: "Island archipelago",
                title: "Lofoten Islands",
                href: "/destinations/lofoten-islands",
                description: "Explore fishing villages, Arctic beaches and a weather-shaped drive along the E10.",
              },
              {
                label: "Wild island",
                title: "Senja",
                href: "/destinations/senja",
                description: "Follow a quieter northern island of fjords, ridges and scenic coastal roads.",
              },
              {
                label: "Arctic city",
                title: "Tromsø",
                href: "/destinations/tromso",
                description: "Use Tromsø as a base for northern lights, fjord trips and Arctic city days.",
              },
              {
                label: "Regional guide",
                title: "Fjords of Norway",
                href: "/fjords-of-norway",
                description: "Compare fjord regions, coastal landscapes and the pace needed for a scenic trip.",
              },
              {
                label: "Route collection",
                title: "Norway road trips",
                href: "/routes",
                description: "Compare scenic roads, ferry-linked journeys and practical route guides.",
              },
            ]}
          />
        </div>
      </section>
      </main>
    </>
  );
}
