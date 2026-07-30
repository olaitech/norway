import type { Metadata } from "next";
import Link from "next/link";

import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { seoPages, toMetadata } from "@/src/data/seo-pages";

export const metadata: Metadata = toMetadata(
  seoPages.helgelandCoastRoadTrip,
  "/routes/helgeland-coast-road-trip",
);

export default function HelgelandCoastRoadTripPage() {
  return (
    <CinematicSeoPage
      page={seoPages.helgelandCoastRoadTrip}
      canonicalPath="/routes/helgeland-coast-road-trip"
      featureSection={
        <section
          id="live-ferry-departures"
          aria-labelledby="live-ferry-departures-heading"
          className="border-t border-white/8 pt-14 sm:pt-16"
        >
          <div className="rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.8),rgba(8,17,22,0.94))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#c6a15b]/76">
              Ferry planning
            </p>
            <h2
              id="live-ferry-departures-heading"
              className="mt-4 font-serif text-[clamp(2.1rem,4.2vw,3.7rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[#f4efe2]"
            >
              Looking for live ferry departures?
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-light leading-[1.8] text-[#f4efe2]/64 sm:text-base">
              Live Helgeland Coast ferry departures now live in the Norway
              Ferry Guide, alongside practical timing and payment advice.
            </p>
            <Link
              href="/guides/norway-ferry-guide-for-tourists#live-ferry-departures"
              className="mt-7 inline-flex min-h-11 items-center rounded-full border border-[#c6a15b]/32 px-4 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/84 transition-colors hover:border-[#c6a15b]/56 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#081116]"
            >
              View live ferry departures
            </Link>
          </div>
        </section>
      }
    />
  );
}
