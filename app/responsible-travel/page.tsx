import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { GuideMetaFooter } from "@/src/components/shared/GuideMetaFooter";
import {
  GUIDE_LAST_UPDATED,
  guideSourceSets,
} from "@/src/data/guide-meta-sources";

export const metadata: Metadata = {
  title: "Responsible Travel in Norway",
  description:
    "A practical guide to responsible travel in Norway, covering slow travel, weather, safety, local communities, ferry planning, Sami cultural awareness and leave-no-trace principles.",
  alternates: {
    canonical: "/responsible-travel",
  },
};

const principles = [
  {
    title: "Travel slowly",
    text: "Choose fewer places and give them more time. Long daylight can make distances feel easier than they are, especially in the north.",
  },
  {
    title: "Respect private land and local communities",
    text: "Many beautiful views sit close to homes, working farms, harbours and small roads. Park carefully, keep access clear and treat quiet places as lived-in places.",
  },
  {
    title: "Weather changes plans",
    text: "Wind, rain, snow, fog and coastal storms can reshape a route quickly. Build flexible days and keep lower-level alternatives ready.",
  },
  {
    title: "Mountain and coastal safety",
    text: "Check local conditions before hikes, shore walks and winter drives. Turning back is normal travel judgement, not a failed day.",
  },
  {
    title: "Ferry routes and realistic distances",
    text: "Ferries are part of the journey, but they also set the rhythm. Check seasonal schedules and avoid planning tight same-day connections.",
  },
  {
    title: "Leave no trace",
    text: "Carry out what you bring in, stay on durable ground where possible and avoid disturbing wildlife, vegetation and fragile coastal edges.",
  },
  {
    title: "Cultural awareness in Sami areas",
    text: "Northern travel can pass through Sami landscapes and reindeer herding areas. Give animals space, follow local advice and treat cultural places with care.",
  },
  {
    title: "Support local businesses",
    text: "Choose local guides, places to stay, cafes, ferries, museums and makers when possible. Travel spending matters most when it stays connected to local communities.",
  },
];

const checklist = [
  "Check weather, road and ferry conditions before each transfer.",
  "For winter driving, use proper winter tires, add time buffers and avoid long mountain transfers in unstable conditions.",
  "Plan daily distances with pauses, daylight and fatigue in mind.",
  "Carry layers, water, charged devices and route alternatives.",
  "Confirm parking, camping and access rules locally.",
  "Wild camping requires right-to-roam distance: stay at least 150 metres from inhabited houses and leave no trace.",
  "Leave beaches, trails, viewpoints and ferry quays cleaner than you found them.",
];

export default function ResponsibleTravelPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,var(--deep-fjord)_0%,var(--polar-night)_100%)] text-[#f4efe2]">
      <section className="relative overflow-hidden px-5 pb-20 pt-6 sm:px-8 sm:pb-24 md:px-12 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(198,161,91,0.07),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(143,175,168,0.1),transparent_34%),linear-gradient(180deg,rgba(16,26,30,0.22),rgba(5,8,10,0))]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[linear-gradient(180deg,rgba(8,17,22,0.52),transparent)]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[0.63rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/68 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Norge
          </Link>
          <nav className="flex items-center gap-4 rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.76),rgba(8,17,22,0.5))] px-4 py-2.5 backdrop-blur-sm sm:gap-7 sm:px-6">
            <Link
              href="/about"
              className="text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
            >
              About
            </Link>
            <Link
              href="/map"
              className="hidden text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2] sm:block"
            >
              Map
            </Link>
          </nav>
        </header>

        <div className="relative z-10 mx-auto max-w-7xl pt-24 sm:pt-28 lg:pt-36">
          <p className="text-[0.67rem] font-medium uppercase tracking-[0.4em] text-[#d8c9a7]/78">
            Travel with care
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.15rem,8vw,7.2rem)] font-normal leading-[0.9] tracking-[-0.058em]">
            Responsible Travel in Norway
          </h1>
          <p className="mt-8 max-w-3xl text-base font-light leading-[1.85] text-[#f4efe2]/72 sm:text-lg md:text-xl">
            Norway rewards slow, prepared and respectful travel. The landscapes
            are open and dramatic, but they are also fragile, weather-shaped
            and home to local communities.
          </p>
        </div>
      </section>

      <section
        id="winter-driving"
        className="relative border-t border-white/8 bg-[linear-gradient(180deg,rgba(8,17,22,0.22),rgba(5,8,10,0.08))] px-5 py-20 scroll-mt-24 sm:px-8 sm:py-24 md:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_24%,rgba(143,175,168,0.07),transparent_34%),radial-gradient(circle_at_12%_88%,rgba(198,161,91,0.05),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.33em] text-[#c6a15b]/72">
              Core principles
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2.35rem,5vw,4.4rem)] font-normal leading-[0.94] tracking-[-0.048em]">
              Better travel starts before arrival.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-[1.2rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.82)_0%,rgba(8,17,22,0.94)_100%)] p-7 shadow-[0_20px_64px_rgba(0,0,0,0.18)]"
              >
                <p className="text-[0.58rem] font-medium uppercase tracking-[0.29em] text-[#c6a15b]/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-[1.9rem] font-normal leading-[0.98] tracking-[-0.035em]">
                  {principle.title}
                </h3>
                <p className="mt-5 text-sm font-light leading-[1.82] text-[#f4efe2]/64">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="camping"
        className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(8,17,22,0.18),rgba(5,8,10,0.08))] px-5 py-20 scroll-mt-24 sm:px-8 sm:py-24 md:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.84),rgba(8,17,22,0.94))] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/76">
              Before you go
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,4.4vw,4rem)] font-normal leading-[0.96] tracking-[-0.045em]">
              Practical checklist
            </h2>
            <p className="mt-6 max-w-xl text-sm font-light leading-[1.85] text-[#f4efe2]/62 sm:text-base">
              Responsible travel is not only a value. It is a planning method:
              slower days, better preparation and more respect for local
              conditions.
            </p>
          </div>

          <ul className="space-y-4">
            {checklist.map((item) => (
              <li
                key={item}
                className="rounded-[1rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(8,17,22,0.86),rgba(23,35,38,0.74))] px-5 py-4 text-sm font-light leading-[1.75] text-[#f4efe2]/68 shadow-[0_16px_52px_rgba(0,0,0,0.16)] sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-[#c6a15b]/20 bg-[linear-gradient(165deg,rgba(198,161,91,0.08),rgba(143,175,168,0.04))] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
          >
            About the portal
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/map"
            className="inline-flex items-center gap-2 rounded-full border border-[#c6a15b]/20 bg-[linear-gradient(165deg,rgba(198,161,91,0.08),rgba(143,175,168,0.04))] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
          >
            Explore the map
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mx-auto mt-10 max-w-7xl">
          <div className="border-t border-white/8 pt-14 sm:pt-16">
            <GuideMetaFooter
              lastUpdated={GUIDE_LAST_UPDATED}
              sources={guideSourceSets.campingResponsibleTravel}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
