import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { AnswerBlock } from "@/src/components/shared/AnswerBlock";
import { GuideMetaFooter } from "@/src/components/shared/GuideMetaFooter";
import { createPageMetadata } from "@/src/lib/metadata";
import {
  JsonLd,
  createArticleJsonLd,
  createBreadcrumbListJsonLd,
} from "@/src/lib/seo/jsonLd";

const CANONICAL_PATH = "/guides/camping-rules-in-norway";
const HERO_IMAGE = "/images/guides/camping-rules/hero-tent.jpg";

const famousHikes = [
  ["Preikestolen", "Lysefjorden, Rogaland", "Around 4 hours", "Moderate"],
  ["Trolltunga", "Hardanger", "8–12 hours", "Very demanding"],
  ["Kjerag and Kjeragbolten", "Lysefjorden, Rogaland", "6–10 hours", "Demanding"],
  ["Besseggen", "Jotunheimen", "6–8 hours", "Demanding"],
  ["Romsdalseggen", "Åndalsnes", "7–8 hours", "Demanding"],
  ["Reinebringen", "Lofoten", "2–3 hours", "Moderate, but steep"],
  ["Galdhøpiggen", "Jotunheimen", "5–8 hours", "Moderate to demanding"],
  ["Gaustatoppen", "Telemark", "4–6 hours", "Moderate"],
  ["Segla and Hesten", "Senja", "3–5 hours", "Moderate"],
  ["Dronningruta", "Vesterålen", "5–8 hours", "Demanding"],
  ["Ryten and Kvalvika Beach", "Lofoten", "4–6 hours", "Moderate"],
  ["Svolværgeita", "Lofoten", "Guided climbing route", "Very demanding"],
  ["Keiservarden", "Bodø", "2–3 hours", "Easy to moderate"],
  ["Torghatten", "Helgeland", "1–2 hours", "Easy"],
  ["The Seven Sisters", "Helgeland", "Varies", "Demanding"],
  ["Helgelandstrappa", "Mosjøen", "2–4 hours", "Moderate"],
  ["Måtinden", "Andøya", "3–4 hours", "Moderate"],
  ["Knivskjellodden", "North Cape", "5–7 hours", "Moderate"],
  ["Fløya and Sherpatrappa", "Tromsø", "2–4 hours", "Moderate"],
  ["Stetind", "Narvik/Tysfjord", "Guided climbing route", "Very demanding"],
  ["Aurlandsdalen", "Vestland", "6–8 hours", "Demanding"],
  ["Skåla", "Loen", "7–9 hours", "Very demanding"],
  ["Rampestreken", "Åndalsnes", "2–3 hours", "Moderate"],
  ["Kattanakken", "Briksdalen", "7–9 hours", "Very demanding"],
  ["Molden", "Luster", "4–6 hours", "Moderate"],
] as const;

const sources = [
  {
    label: "Norwegian Environment Agency: camping and hammocks",
    href: "https://www.miljodirektoratet.no/ansvarsomrader/friluftsliv/friluftsliv-og-allemannsretten/telt-og-hengekoye/",
  },
  {
    label: "Visit Norway: mountain safety",
    href: "https://www.visitnorway.com/safe-travel/mountain-safety/",
  },
  {
    label: "Visit Norway: the Mountain Code",
    href: "https://www.visitnorway.com/safe-travel/mountain-safety/the-mountain-code/",
  },
  { label: "Yr weather forecasts", href: "https://www.yr.no/en" },
  { label: "Varsom hazard forecasts", href: "https://www.varsom.no/en/" },
] as const;

export const metadata = createPageMetadata({
  title: "Camping Rules in Norway & Famous Hikes | Trips Norway",
  description:
    "Plan responsible camping in Norway with right-to-roam, campfire and campervan guidance, plus 25 famous hikes and current mountain-safety advice.",
  canonical: CANONICAL_PATH,
  type: "article",
  image: {
    url: HERO_IMAGE,
    alt: "A small tent on a grassy mountain hillside above layers of Norwegian peaks at dusk",
    width: 2734,
    height: 4096,
  },
});

function EditorialImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </figure>
  );
}

export default function CampingRulesInNorwayPage() {
  return (
    <>
      <JsonLd
        value={[
          createBreadcrumbListJsonLd([
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Camping Rules in Norway", href: CANONICAL_PATH },
          ]),
          createArticleJsonLd({
            headline: "Camping Rules in Norway",
            description:
              "Responsible wild-camping guidance for Norway, with current mountain-safety advice and 25 famous hikes to plan carefully.",
            url: CANONICAL_PATH,
            image: HERO_IMAGE,
            articleSection: "Responsible Outdoor Travel",
            dateModified: "2026-07-31",
          }),
        ]}
      />
      <main className="min-h-screen bg-[linear-gradient(180deg,var(--deep-fjord)_0%,var(--polar-night)_100%)] text-[#f4efe2]">
        <section className="relative isolate min-h-[43rem] overflow-hidden px-5 pb-16 pt-8 sm:min-h-[47rem] sm:px-8 sm:pb-20 sm:pt-10 md:px-12 lg:min-h-[50rem]">
          <Image
            src={HERO_IMAGE}
            alt="A small tent on a grassy mountain hillside above layers of Norwegian peaks at dusk"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[center_54%]"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,8,10,0.92)_0%,rgba(5,8,10,0.58)_48%,rgba(5,8,10,0.2)_100%),linear-gradient(0deg,rgba(5,8,10,0.96)_0%,rgba(5,8,10,0.12)_58%,rgba(5,8,10,0.36)_100%)]" />

          <div className="relative mx-auto flex max-w-7xl justify-between gap-5">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#081116]/42 px-4 py-2 text-[0.61rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 backdrop-blur-sm transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/65"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Back to guides
            </Link>
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col justify-end pt-44 sm:pt-52 lg:pt-60">
            <p className="text-[0.63rem] font-medium uppercase tracking-[0.35em] text-[#d8c9a7]/88">
              Responsible outdoor travel
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.35rem,8.3vw,7rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#f4efe2]">
              Camping Rules in Norway
            </h1>
            <p className="mt-7 max-w-2xl text-base font-light leading-[1.84] text-[#f4efe2]/78 sm:text-lg md:text-xl">
              Wild camping can be a quiet, memorable part of a Norwegian trip.
              Plan around the right to roam, local conditions and the people
              who live close to the landscape.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/62">
              <span>Camping and hiking guide</span>
              <span>12 min read</span>
              <span>Updated 31 July 2026</span>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 px-5 py-14 sm:px-8 sm:py-20 md:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <AnswerBlock
              title="Camping freedom comes with clear boundaries."
              summary="The right to roam is generous, but the best trips still respect distance, access, fire rules and the places people actually live."
              bullets={[
                "Stay at least 150 metres from inhabited houses and cabins.",
                "Choose uncultivated land, check local restrictions and leave no trace.",
                "Use official weather and hazard forecasts before any overnight or hike.",
              ]}
            />

            <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
              <EditorialImage
                src="/images/guides/camping-rules/tent-by-mountain-lake-norway.jpg"
                alt="A yellow tent beside a mountain lake in Norway"
                className="min-h-[25rem] rounded-[1.3rem]"
                sizes="(min-width: 1024px) 34vw, 100vw"
                priority
              />
              <div className="max-w-2xl">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/75">
                  The right to roam
                </p>
                <h2 className="mt-5 font-serif text-[clamp(2.45rem,5vw,4.5rem)] font-normal leading-[0.93] tracking-[-0.05em]">
                  Camp with room for nature and neighbours.
                </h2>
                <p className="mt-6 text-base font-light leading-[1.87] text-[#f4efe2]/70 sm:text-lg">
                  Norway&apos;s right to roam, known as <em>allemannsretten</em>,
                  generally allows short stays on uncultivated land. For a tent,
                  the practical baseline is to stay at least 150 metres from the
                  nearest inhabited house or cabin.
                </p>
                <p className="mt-5 text-base font-light leading-[1.87] text-[#f4efe2]/70 sm:text-lg">
                  The rule is an invitation to use the outdoors carefully, not a
                  promise that every scenic pull-off or shoreline is a campsite.
                  Around homes, farms and busy destinations, give people and
                  vegetation more space than the minimum.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <section className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8">
                <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[0.97] tracking-[-0.042em]">
                  Where you should not camp
                </h2>
                <ul className="mt-6 space-y-3 text-sm font-light leading-[1.8] text-[#f4efe2]/70 sm:text-base">
                  <li>On cultivated fields, active farmland or fragile ground.</li>
                  <li>In private zones close to homes and cabins.</li>
                  <li>Where signs prohibit camping or overnight parking.</li>
                  <li>Anywhere your tent, vehicle or noise blocks access for others.</li>
                </ul>
              </section>
              <section className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8">
                <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[0.97] tracking-[-0.042em]">
                  Campervans and motorhomes
                </h2>
                <ul className="mt-6 space-y-3 text-sm font-light leading-[1.8] text-[#f4efe2]/70 sm:text-base">
                  <li>Do not assume a scenic lay-by allows overnight parking.</li>
                  <li>Respect all no-parking, no-camping and local access signs.</li>
                  <li>Choose designated motorhome areas or campsites where possible.</li>
                  <li>Never empty greywater or toilet waste in nature.</li>
                </ul>
              </section>
            </div>

            <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              <div className="max-w-2xl">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/75">
                  Campfires and safety
                </p>
                <h2 className="mt-5 font-serif text-[clamp(2.45rem,5vw,4.5rem)] font-normal leading-[0.93] tracking-[-0.05em]">
                  A campfire starts with a conditions check.
                </h2>
                <p className="mt-6 text-base font-light leading-[1.87] text-[#f4efe2]/70 sm:text-lg">
                  Fire restrictions can change with the season, drought and local
                  risk. Check the rules for your exact area before lighting any
                  open flame, use established fire-safe places where possible,
                  and do not leave a fire until it is completely out.
                </p>
                <p className="mt-5 text-base font-light leading-[1.87] text-[#f4efe2]/70 sm:text-lg">
                  Pack out every trace, keep noise low, and have a backup
                  overnight option when weather or crowding changes the plan.
                </p>
              </div>
              <EditorialImage
                src="/images/guides/camping-rules/campfire-coffee-norwegian-mountains.jpg"
                alt="A kettle pouring coffee beside a fjord in the Norwegian mountains"
                className="min-h-[26rem] rounded-[1.3rem]"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </div>

            <section className="mt-20 border-t border-white/8 pt-16 sm:pt-20">
              <div className="max-w-3xl">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/75">
                  Before each overnight
                </p>
                <h2 className="mt-5 font-serif text-[clamp(2.45rem,5vw,4.5rem)] font-normal leading-[0.93] tracking-[-0.05em]">
                  Keep a calm alternative ready.
                </h2>
              </div>
              <ol className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  "Check weather and hazard conditions for your exact area.",
                  "Confirm restrictions, access and parking rules locally.",
                  "Choose durable ground away from homes, cabins and farmland.",
                  "Plan a second place in case of crowding, wind or closure.",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="rounded-[1.1rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.72),rgba(8,17,22,0.9))] p-5 text-sm font-light leading-[1.76] text-[#f4efe2]/70 sm:p-6 sm:text-base"
                  >
                    <span className="text-[0.61rem] font-medium tracking-[0.24em] text-[#d8c9a7]/78">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4">{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-20 border-t border-white/8 pt-16 sm:pt-20">
              <div className="max-w-3xl">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/75">
                  More to explore
                </p>
                <h2 className="mt-5 font-serif text-[clamp(2.45rem,5vw,4.5rem)] font-normal leading-[0.93] tracking-[-0.05em]">
                  Find the next reason to stay outside.
                </h2>
              </div>
              <div className="mt-9 grid gap-5 lg:grid-cols-2">
                <a
                  href="https://www.dnt.no/hytter/anbefalte-hytter/dnt-gir-deg-sommer-ved-kysten/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative isolate flex min-h-[22rem] overflow-hidden rounded-[1.3rem] border border-white/12 p-6 text-left transition-colors hover:border-[#d8c9a7]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/70 sm:min-h-[25rem] sm:p-8"
                >
                  <Image
                    src="/images/guides/camping-rules/coastal-wild-camping-norway.jpg"
                    alt="A tent on a rocky Norwegian coast beside the sea"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="-z-20 object-cover transition-transform duration-500 ease-out sm:group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
                  />
                  <span className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(5,8,10,0.94)_0%,rgba(5,8,10,0.25)_78%)]" />
                  <span className="mt-auto max-w-md">
                    <span className="inline-flex items-center gap-2 text-[0.61rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/88">
                      External link
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="mt-4 block font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94] tracking-[-0.045em] text-[#f4efe2]">
                      Summer by the Norwegian coast
                    </span>
                    <span className="mt-4 block text-sm font-light leading-[1.75] text-[#f4efe2]/78 sm:text-base">
                      DNT&apos;s coastal cabin inspiration for a slower summer route.
                    </span>
                  </span>
                </a>

                <Link
                  href="#famous-hikes"
                  className="group relative isolate flex min-h-[22rem] overflow-hidden rounded-[1.3rem] border border-white/12 p-6 text-left transition-colors hover:border-[#d8c9a7]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/70 sm:min-h-[25rem] sm:p-8"
                >
                  <Image
                    src="/images/guides/camping-rules/card-trips.jpg"
                    alt="Norwegian mountains reflected in a calm lake"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="-z-20 object-cover transition-transform duration-500 ease-out sm:group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
                  />
                  <span className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(5,8,10,0.94)_0%,rgba(5,8,10,0.24)_82%)]" />
                  <span className="mt-auto max-w-md">
                    <span className="text-[0.61rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/88">
                      On this page
                    </span>
                    <span className="mt-4 block font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.94] tracking-[-0.045em] text-[#f4efe2]">
                      Norway&apos;s most famous hikes
                    </span>
                    <span className="mt-4 block text-sm font-light leading-[1.75] text-[#f4efe2]/78 sm:text-base">
                      Compare 25 well-known routes before you make a plan.
                    </span>
                  </span>
                </Link>
              </div>
            </section>

            <section id="famous-hikes" className="mt-20 scroll-mt-24 border-t border-white/8 pt-16 sm:mt-24 sm:pt-20">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
                <div className="max-w-3xl">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/75">
                    Hiking inspiration
                  </p>
                  <h2 className="mt-5 font-serif text-[clamp(2.6rem,5.6vw,5.1rem)] font-normal leading-[0.9] tracking-[-0.055em]">
                    Norway&apos;s most famous hikes
                  </h2>
                  <p className="mt-7 text-base font-light leading-[1.87] text-[#f4efe2]/70 sm:text-lg">
                    These routes span coastal paths, mountain ridges and guided
                    climbs. The times and difficulty below are useful starting
                    points, not a substitute for current route information.
                  </p>
                </div>
                <EditorialImage
                  src="/images/guides/camping-rules/nature-clean.jpg"
                  alt="A mountain rising above a pale Norwegian beach and sea"
                  className="min-h-[20rem] rounded-[1.3rem]"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </div>

              <div className="mt-12 hidden overflow-hidden rounded-[1.3rem] border border-white/10 lg:block">
                <table className="w-full border-collapse text-left">
                  <caption className="sr-only">
                    Norway&apos;s most famous hikes, with area, typical time and difficulty.
                  </caption>
                  <thead className="bg-white/[0.045] text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#d8c9a7]/80">
                    <tr>
                      <th scope="col" className="px-6 py-4">Hike</th>
                      <th scope="col" className="px-6 py-4">Area</th>
                      <th scope="col" className="px-6 py-4">Typical time</th>
                      <th scope="col" className="px-6 py-4">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8">
                    {famousHikes.map(([name, area, time, difficulty]) => (
                      <tr key={name} className="bg-white/[0.012]">
                        <th scope="row" className="px-6 py-4 font-serif text-lg font-normal tracking-[-0.02em] text-[#f4efe2]">
                          {name}
                        </th>
                        <td className="px-6 py-4 text-sm font-light text-[#f4efe2]/70">{area}</td>
                        <td className="px-6 py-4 text-sm font-light text-[#f4efe2]/70">{time}</td>
                        <td className="px-6 py-4 text-sm font-light text-[#f4efe2]/70">{difficulty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-10 grid gap-4 lg:hidden">
                {famousHikes.map(([name, area, time, difficulty]) => (
                  <article key={name} className="rounded-[1.1rem] border border-white/10 bg-white/[0.025] p-5">
                    <h3 className="font-serif text-[1.55rem] font-normal leading-[1.02] tracking-[-0.03em] text-[#f4efe2]">
                      {name}
                    </h3>
                    <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                      <div>
                        <dt className="text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#d8c9a7]/70">Area</dt>
                        <dd className="mt-1.5 font-light leading-[1.5] text-[#f4efe2]/72">{area}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#d8c9a7]/70">Typical time</dt>
                        <dd className="mt-1.5 font-light leading-[1.5] text-[#f4efe2]/72">{time}</dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#d8c9a7]/70">Difficulty</dt>
                        <dd className="mt-1.5 font-light leading-[1.5] text-[#f4efe2]/72">{difficulty}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>

              <aside className="mt-12 rounded-[1.3rem] border border-[#c6a15b]/24 bg-[linear-gradient(135deg,rgba(198,161,91,0.12),rgba(23,35,38,0.72))] p-7 sm:p-8" aria-labelledby="hike-safety-title">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/82">Safety first</p>
                <h3 id="hike-safety-title" className="mt-4 font-serif text-[clamp(1.95rem,4vw,3.2rem)] font-normal leading-[0.96] tracking-[-0.04em]">
                  Conditions shape every hike.
                </h3>
                <p className="mt-5 max-w-4xl text-sm font-light leading-[1.84] text-[#f4efe2]/76 sm:text-base">
                  Weather, trail conditions, snow, season, daylight and your own fitness can change both the time and difficulty of a route. Check an official <a className="underline decoration-[#d8c9a7]/45 underline-offset-4 hover:text-white" href="https://www.yr.no/en" target="_blank" rel="noopener noreferrer">Yr forecast</a>, relevant <a className="underline decoration-[#d8c9a7]/45 underline-offset-4 hover:text-white" href="https://www.varsom.no/en/" target="_blank" rel="noopener noreferrer">Varsom hazard advice</a> and <a className="underline decoration-[#d8c9a7]/45 underline-offset-4 hover:text-white" href="https://www.visitnorway.com/safe-travel/mountain-safety/the-mountain-code/" target="_blank" rel="noopener noreferrer">the Mountain Code</a> before you set out. Turn around if the conditions do not match your plan.
                </p>
              </aside>
            </section>

            <GuideMetaFooter className="mt-16" lastUpdated="31 July 2026" sources={sources} />
          </div>
        </section>
      </main>
    </>
  );
}
