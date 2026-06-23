import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
  title: "Norway Travel Map | Routes, Destinations and Northern Norway Planning",
  description:
    "Use the Trips Norway map to understand where destinations, road trips, ferries and regions connect across Norway and Northern Norway.",
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
              href="/#destinations"
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
            href="/journal"
            className="mb-10 inline-flex items-center gap-3 text-[0.63rem] font-medium uppercase tracking-[0.29em] text-[#f4efe2]/52 transition-colors hover:text-[#f4efe2]/86"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to journal
          </Link>
          <p className="text-[0.67rem] font-medium uppercase tracking-[0.4em] text-[#d8c9a7]/78">
            Interactive field map
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.3rem,8.4vw,7.75rem)] font-normal leading-[0.9] tracking-[-0.058em]">
            Explore Norway by Map
          </h1>
          <p className="mt-7 max-w-2xl text-base font-light leading-[1.8] text-[#f4efe2]/68 sm:text-lg md:text-xl">
            Trace quiet roads, Arctic islands, fjords and remote places worth
            slowing down for.
          </p>
        </div>
      </section>

      <MapExplorer
        filters={mapFilters}
        places={mapPlaces}
        routes={featuredRoutes}
      />
      <GatewaysToNorthernNorway />

      <section className="border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <RelatedLinkCards
            eyebrow="Continue planning"
            title="Use the map as a planning bridge"
            intro="Move from the map into the routes, destinations and practical guides that shape the trip."
            links={[
              {
                label: "Destinations",
                title: "Browse Norway destinations",
                href: "/destinations",
                description: "Trace the islands, coast and Arctic cities before you settle on a base.",
              },
              {
                label: "Routes",
                title: "Compare Norway road trip routes",
                href: "/routes",
                description: "See how the coastal and island routes connect across the country.",
              },
              {
                label: "Guide",
                title: "Norway Ferry Guide for Tourists",
                href: "/guides/norway-ferry-guide-for-tourists",
                description: "Use the ferry guide to understand the crossings shown on the map.",
              },
              {
                label: "Story",
                title: "Northern Norway: A Slow Journey Through Light",
                href: "/stories/northern-norway",
                description: "Follow the map into the cinematic story and its linked planning paths.",
              },
            ]}
          />
        </div>
      </section>
      </main>
    </>
  );
}
