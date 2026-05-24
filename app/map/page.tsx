import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import "leaflet/dist/leaflet.css";

import { MapExplorer } from "@/src/components/sections/map/MapExplorer";
import { featuredRoutes, mapFilters, mapPlaces } from "@/src/data/map";

export const metadata: Metadata = {
  title: "Explore Norway by Map | Norge",
  description:
    "Trace featured Norwegian islands, fjords and scenic routes on an interactive travel map.",
};

export default function MapPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050607] text-[#f4efe2]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_8%,rgba(106,151,160,0.12),transparent_31%),radial-gradient(circle_at_16%_24%,rgba(216,201,167,0.07),transparent_27%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(12,23,25,0.48),transparent)]" />

      <header className="relative z-10 px-5 py-6 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Norge home"
            className="flex items-center gap-3 text-[0.64rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2]"
          >
            <Image
              src="/images/branding/logo-norge-removebg-preview.png"
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
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
    </main>
  );
}
