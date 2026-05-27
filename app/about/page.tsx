import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About This Portal",
  description:
    "Learn about the Norway Travel Knowledge Portal, an independent cinematic guide to Norway and Northern Norway focused on slow travel, scenic routes, local awareness and responsible exploration.",
};

const sections = [
  {
    title: "Why this portal exists",
    text: "Norway can be easy to admire and difficult to understand. Weather, distance, ferries, light and local rhythms all shape a journey here. This portal exists to help visitors read those conditions before turning them into an itinerary.",
  },
  {
    title: "Norway, seen from the north",
    text: "The project gives special attention to Northern Norway: Helgeland, Lofoten, Senja, Tromsø, Arctic roads and coastal communities where travel often moves between land, sea and changing skies.",
  },
  {
    title: "More than a booking platform",
    text: "The focus is not fast conversion or generic destination packaging. The goal is editorial guidance: places, routes, seasons and decisions explained with atmosphere and practical context.",
  },
  {
    title: "Slow travel, local awareness and responsible exploration",
    text: "Good travel in Norway is rarely about seeing everything. It is about pacing days realistically, respecting land and communities, preparing for weather and leaving fragile landscapes as you found them.",
  },
  {
    title: "Built as an independent knowledge project",
    text: "This site is being developed as a calm, public-benefit knowledge portal: useful first, visually strong, and independent enough to stay honest about tradeoffs, travel pressure and seasonal limits.",
  },
  {
    title: "Future collaborations and local partnerships",
    text: "Future partnerships may help deepen the project, but they should support trust rather than replace it. The long-term aim is to work with local voices, guides and travel partners without losing editorial clarity.",
  },
];

const callsToAction = [
  { label: "Explore the map", href: "/map" },
  { label: "Read the journal", href: "/journal" },
  { label: "Responsible travel", href: "/responsible-travel" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <section className="relative overflow-hidden px-5 pb-20 pt-6 sm:px-8 sm:pb-24 md:px-12 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,201,167,0.08),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(126,176,192,0.1),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[linear-gradient(180deg,rgba(12,23,25,0.42),transparent)]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[0.63rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/68 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Norge
          </Link>
          <nav className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 backdrop-blur-sm sm:gap-7 sm:px-6">
            <Link
              href="/map"
              className="text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
            >
              Map
            </Link>
            <Link
              href="/journal"
              className="hidden text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2] sm:block"
            >
              Journal
            </Link>
          </nav>
        </header>

        <div className="relative z-10 mx-auto max-w-7xl pt-24 sm:pt-28 lg:pt-36">
          <p className="text-[0.67rem] font-medium uppercase tracking-[0.4em] text-[#d8c9a7]/78">
            Independent knowledge project
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.2rem,8.2vw,7.4rem)] font-normal leading-[0.9] tracking-[-0.058em]">
            About This Portal
          </h1>
          <p className="mt-8 max-w-3xl text-base font-light leading-[1.85] text-[#f4efe2]/72 sm:text-lg md:text-xl">
            A cinematic travel knowledge portal for Norway and Northern Norway
            — built to help visitors understand the landscape, routes, weather,
            culture and responsibility before they plan the journey.
          </p>
        </div>
      </section>

      <section className="relative border-t border-white/8 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(126,176,192,0.07),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <aside className="lg:sticky lg:top-14 lg:self-start">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/72">
              Editorial position
            </p>
            <p className="mt-6 max-w-sm text-sm font-light leading-[1.9] text-[#f4efe2]/58 sm:text-base">
              The north should feel like the north: quiet roads, ferry decks,
              coastal weather, local communities and places worth slowing down
              for.
            </p>
          </aside>

          <div className="space-y-5">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8"
              >
                <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.5vw,3.15rem)] font-normal leading-[0.98] tracking-[-0.04em]">
                  {section.title}
                </h2>
                <p className="mt-5 max-w-3xl text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12">
        <div className="mx-auto max-w-7xl rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
            Continue exploring
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {callsToAction.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
