import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Responsible Travel in Norway",
  description:
    "A practical guide to responsible travel in Norway, covering slow travel, weather, safety, local communities, ferry planning, Sami cultural awareness and leave-no-trace principles.",
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
  "Plan daily distances with pauses, daylight and fatigue in mind.",
  "Carry layers, water, charged devices and route alternatives.",
  "Confirm parking, camping and access rules locally.",
  "Leave beaches, trails, viewpoints and ferry quays cleaner than you found them.",
];

export default function ResponsibleTravelPage() {
  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <section className="relative overflow-hidden px-5 pb-20 pt-6 sm:px-8 sm:pb-24 md:px-12 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(216,201,167,0.07),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(126,176,192,0.1),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[linear-gradient(180deg,rgba(12,23,25,0.46),transparent)]" />

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

      <section className="relative border-t border-white/8 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_24%,rgba(126,176,192,0.07),transparent_34%),radial-gradient(circle_at_12%_88%,rgba(216,201,167,0.05),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/72">
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
                className="rounded-[1.2rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.032)_0%,rgba(255,255,255,0.014)_100%)] p-7"
              >
                <p className="text-[0.58rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/70">
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

      <section className="border-t border-white/8 px-5 py-20 sm:px-8 sm:py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
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
                className="rounded-[1rem] border border-white/8 bg-black/15 px-5 py-4 text-sm font-light leading-[1.75] text-[#f4efe2]/68 sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            About the portal
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/map"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            Explore the map
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
