import type { Metadata } from "next";
import { ArrowUpRight, Check, Compass, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NavBar } from "@/src/components/navigation/NavBar";

export const metadata: Metadata = {
  title: {
    absolute: "7-day Helgeland Coast itinerary | Trips Norway",
  },
  description:
    "A practical seven-day Helgeland Coast road trip with ferry-aware planning, scenic stops and an unhurried route through Northern Norway.",
  alternates: {
    canonical: "/routes/helgeland-coast-itinerary",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const itinerarySummary = [
  { label: "Duration", value: "7 days" },
  { label: "Best suited to", value: "Car or campervan" },
  { label: "Pace", value: "Unhurried" },
  { label: "Main consideration", value: "Ferry connections" },
  { label: "Recommended season", value: "Summer, with shoulder-season trade-offs" },
] as const;

const beforeYouBegin = [
  {
    title: "Choose a practical vehicle",
    text: "A car or campervan gives the most flexibility for Fv17, but it does not remove the need to plan around crossings. Keep the vehicle suitable for narrow roads, ferry queues and the slower rhythm of a coastal drive.",
  },
  {
    title: "Build around the ferry first",
    text: "Check the current service before fixing the rest of the day. On Helgeland, a crossing is a fixed point; driving, food stops and accommodation work best when placed around it.",
  },
  {
    title: "Book overnight areas, not a rigid schedule",
    text: "Summer brings the widest choice of open accommodation and activities, but also busier crossings. Keep the framework adaptable enough for weather, queues and a longer pause at a place worth staying in.",
  },
  {
    title: "Carry the small practical things",
    text: "Keep food, water and outerwear easy to reach. Fill fuel or charge before remote stretches, and check food shops and restaurant opening hours before arriving in a smaller community.",
  },
] as const;

type ItineraryDay = {
  day: string;
  title: string;
  start: string;
  overnight: string;
  focus: string;
  stops: readonly string[];
  transport: string;
  intensity: string;
  slowDownFor: string;
  practicalNote: string;
};

const itineraryDays: readonly ItineraryDay[] = [
  {
    day: "Day 1",
    title: "Brønnøysund and Torghatten",
    start: "Brønnøysund area",
    overnight: "Brønnøysund area",
    focus: "Settle into the coast and begin with one clear landscape anchor.",
    stops: ["Brønnøysund harbour", "Torghatten"],
    transport:
      "No island detour is needed today. Use the day to check the next morning's current ferry information rather than rushing toward the first crossing.",
    intensity: "Light travel day",
    slowDownFor:
      "The walk through Torghatten, when trail and weather conditions are suitable, followed by a quieter evening near the harbour.",
    practicalNote:
      "Keep the arrival day loose. A gentle start makes the ferry-led days ahead easier to absorb.",
  },
  {
    day: "Day 2",
    title: "Vega and the southern archipelago",
    start: "Brønnøysund area",
    overnight: "Vega area or Brønnøysund area",
    focus: "Move toward Vega for island roads, World Heritage culture and a slower coastal day.",
    stops: ["Vega Archipelago cultural landscape", "Selected island roads"],
    transport:
      "Let the current island connection decide whether this works best as an overnight on Vega or a return to the mainland. Confirm the operator's service and capacity guidance before setting out.",
    intensity: "Moderate, flexible day",
    slowDownFor:
      "The mix of low island roads, sea horizons and the cultural landscape rather than trying to turn the archipelago into a checklist.",
    practicalNote:
      "Build in a buffer for the return connection and keep accommodation timing loose around the crossing.",
  },
  {
    day: "Day 3",
    title: "North toward Sandnessjøen",
    start: "Vega or Brønnøysund area",
    overnight: "Sandnessjøen area",
    focus: "Travel north through the ferry-led coast toward the Seven Sisters skyline.",
    stops: ["Selected Fv17 coastal stretches", "Small harbours and quay stops", "Seven Sisters views"],
    transport:
      "Use the ferry timetable to shape the day, not the other way around. The route has several main Fv17 crossings, and the exact sequence depends on your starting point and the current service.",
    intensity: "Moderate travel day",
    slowDownFor:
      "The first broad views of the Seven Sisters as the route reaches the central Helgeland coast.",
    practicalNote:
      "Avoid building the day around the final possible connection. The coast is better when a queue or weather change does not undo the overnight plan.",
  },
  {
    day: "Day 4",
    title: "Choose the mountains or the island roads",
    start: "Sandnessjøen area",
    overnight: "Sandnessjøen area",
    focus: "Use the weather to choose between the Seven Sisters area and the lower island roads of Herøy and Dønna.",
    stops: ["Seven Sisters area", "Herøy", "Dønna"],
    transport:
      "Herøy and Dønna are best treated as a focused island-road day. Do not add an outer-island connection as well unless the current timetable and an overnight make it genuinely calm.",
    intensity: "Light to moderate day",
    slowDownFor:
      "Low bridges, farmland and open water on the island roads, or a weather-suitable walk near the Seven Sisters.",
    practicalNote:
      "Choose the hike only after checking conditions. Individual Seven Sisters summits are substantial mountain days, not a quick roadside stop.",
  },
  {
    day: "Day 5",
    title: "Nesna and the ferry sections north",
    start: "Sandnessjøen area",
    overnight: "Nesna or a nearby coastal base",
    focus: "Continue north through the ferry-linked coast while keeping the day light enough for pauses.",
    stops: ["Selected Fv17 stages", "Nesna", "Coastal ferry quays"],
    transport:
      "Nesna is an important coastal junction toward the northern islands. Check the current route before committing to a later island detour or a fixed evening arrival.",
    intensity: "Moderate travel day",
    slowDownFor:
      "The ferry deck and the space between crossings, treating the journey as part of the route rather than lost travel time.",
    practicalNote:
      "Keep food and water in the car, and do not try to stack several crossings into one late afternoon.",
  },
  {
    day: "Day 6",
    title: "Choose one northern island",
    start: "Nesna or a nearby coastal base",
    overnight: "One northern island base",
    focus: "Choose a single island experience rather than trying to combine every northern detour.",
    stops: ["Lurøy", "Lovund", "Træna", "Rødøy"],
    transport:
      "Outer-island connections, demand stops and seasonal services vary. Confirm both the outward and return journey, plus current capacity guidance, before choosing the island.",
    intensity: "Full but unhurried travel day",
    slowDownFor:
      "A sea horizon and a limited-road island stay with enough time to be present rather than watching the clock for the next boat.",
    practicalNote:
      "An overnight is what makes this day realistic. If the connection does not support one, keep to the mainland or choose a closer coastal base instead.",
  },
  {
    day: "Day 7",
    title: "Return or continue deliberately",
    start: "Northern island or nearby mainland coast",
    overnight: "Mo i Rana area, an onward northern stop or your return route",
    focus: "Use an inland gateway, retrace a coastal connection or continue north only when the final day still has a sensible weather and ferry buffer.",
    stops: ["Mo i Rana as an inland gateway", "A selected final coastal stage"],
    transport:
      "Mo i Rana is a practical road, rail and regional-air gateway. If you are continuing along Fv17, let the current service and onward accommodation decide how far north the day should go.",
    intensity: "Full travel day",
    slowDownFor:
      "One final unplanned stop along the coast, rather than treating the last day as a transfer to get through as quickly as possible.",
    practicalNote:
      "Do not force a northern island return and a long inland transfer into the same tight day. The itinerary works because the final move stays flexible.",
  },
] as const;

const stayAreas = [
  {
    area: "Brønnøysund",
    note: "A practical southern base for harbour services, Torghatten and a Vega-focused day.",
  },
  {
    area: "Vega",
    note: "Look for an island stay only when the outward and return connections leave enough time for the place itself.",
  },
  {
    area: "Sandnessjøen",
    note: "A useful central base for the Seven Sisters, Herøy, Dønna and several short excursions from one overnight area.",
  },
  {
    area: "Nesna or one northern island",
    note: "Choose a quieter coastal base or one island overnight, then let the next day's connection set the onward plan.",
  },
] as const;

const bookingChecklist = [
  "Accommodation during busy summer periods, especially when a ferry arrival determines the evening.",
  "Your rental vehicle or campervan, with enough time to understand how toll and ferry billing will be handled.",
  "Any guided activity you decide to add, particularly where cold-water equipment or local safety knowledge matters.",
  "The current capacity and booking rules for a specific island ferry, express boat, larger vehicle or seasonal service.",
  "Updated ferry, road and weather information shortly before each important travel day.",
] as const;

const packingList = [
  "Layers, including a warm mid-layer for cool coastal evenings.",
  "A windproof, waterproof outer shell that is easy to reach on short stops and ferry decks.",
  "Walking shoes with grip for wet ground and uneven paths.",
  "A compact daypack with snacks, water and a small in-car essentials bag.",
  "A power bank and charging cable, plus an eye mask if bright summer nights affect sleep.",
] as const;

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-[clamp(2.25rem,5vw,4.65rem)] font-normal leading-[0.94] tracking-[-0.05em] text-[#f4efe2]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/68 sm:text-base md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

const buttonClassName =
  "inline-flex min-h-12 items-center gap-2 rounded-full border px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4efe2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071418] motion-reduce:transition-none";

export default function HelgelandCoastItineraryPage() {
  return (
    <main className="helgeland-itinerary-page surface-fjord-shell relative overflow-hidden text-[#f4efe2]">
      <style>{`
        @media print {
          body:has(.helgeland-itinerary-page) .global-shader-background,
          body:has(.helgeland-itinerary-page) footer,
          .helgeland-itinerary-page .itinerary-print-hidden {
            display: none !important;
          }

          .helgeland-itinerary-page,
          .helgeland-itinerary-page * {
            background: #fff !important;
            color: #171715 !important;
            box-shadow: none !important;
          }

          .helgeland-itinerary-page .itinerary-day {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .helgeland-itinerary-page a {
            text-decoration: underline;
          }
        }
      `}</style>

      <section className="relative min-h-[48rem] overflow-hidden border-b border-white/10">
        <div className="itinerary-print-hidden absolute inset-0">
          <Image
            src="/images/destinations/helgeland/helgeland-sunset.jpg"
            alt="Sunset and seabirds over the Helgeland coast in Northern Norway"
            fill
            preload
            sizes="100vw"
            className="object-cover object-[44%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,10,0.96)_0%,rgba(2,7,10,0.76)_42%,rgba(2,7,10,0.26)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,10,0.66)_0%,rgba(2,7,10,0.12)_42%,rgba(2,7,10,0.9)_100%)]" />
        </div>

        <NavBar className="itinerary-print-hidden" />

        <div className="relative z-10 mx-auto flex min-h-[48rem] max-w-7xl items-end px-5 pb-14 pt-40 sm:px-8 sm:pb-16 sm:pt-48 md:px-12 lg:pb-20">
          <div className="max-w-5xl">
            <p className="text-[0.63rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/88">
              7-day coastal itinerary
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.2rem,8vw,7.7rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#f4efe2]">
              Seven days on the Helgeland Coast
            </h1>
            <p className="mt-7 max-w-3xl text-base font-light leading-[1.8] text-[#f4efe2]/80 sm:text-lg md:text-xl">
              A ferry-aware road trip through quiet islands, coastal villages,
              dramatic mountains and some of Northern Norway&apos;s most memorable
              roads.
            </p>
            <p className="mt-5 max-w-3xl border-l border-[#c6a15b]/48 pl-4 text-sm font-light leading-[1.8] text-[#d8c9a7]/92 sm:text-base">
              Built for travellers who want enough structure to move
              confidently — without rushing through the coast.
            </p>
            <p className="mt-7 text-[0.61rem] font-medium uppercase tracking-[0.28em] text-[#f4efe2]/62">
              Prepared for Trips Norway subscribers.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(8,17,22,0.56),rgba(5,8,10,0.34))] px-5 py-7 sm:px-8 md:px-12">
        <dl className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-5">
          {itinerarySummary.map((item) => (
            <div key={item.label} className="border-b border-white/8 px-5 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-white/8 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <dt className="text-[0.58rem] font-medium uppercase tracking-[0.27em] text-[#d8c9a7]/70">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm font-light leading-6 text-[#f4efe2]/82">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-24">
        <section aria-labelledby="route-overview-title">
          <SectionHeader
            eyebrow="01 / Route overview"
            title="A framework shaped by crossings"
            intro="This south-to-north framework begins around Brønnøysund, follows selected parts of Fv17 through central Helgeland, then leaves room for one northern island stay and a flexible inland or onward finish. Seven days is useful because the coast needs ferry buffers, two-night stays and at least one day that can follow the weather."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="surface-fjord rounded-[1.35rem] p-7 sm:p-9">
              <h3 id="route-overview-title" className="font-serif text-3xl tracking-[-0.04em] text-[#f4efe2] sm:text-4xl">
                Drive Fv17 as the journey
              </h3>
              <div className="mt-5 space-y-4 text-sm font-light leading-[1.85] text-[#f4efe2]/68 sm:text-base">
                <p>
                  The official Scenic Route Helgelandskysten runs between Holm
                  and Godøystraumen, with a Torghatten detour. It is a slower,
                  landscape-led alternative to the E6, not a shortcut north.
                </p>
                <p>
                  South to north is a natural direction when continuing toward
                  Bodø, but the reverse works just as well when an arrival or
                  onward plan makes more sense. The key is to let the ferry
                  schedule set the day.
                </p>
              </div>
            </article>
            <aside className="rounded-[1.35rem] border border-[#d8c9a7]/18 bg-[#d8c9a7]/[0.055] p-7 sm:p-9">
              <Compass className="h-5 w-5 text-[#d8c9a7]" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-3xl tracking-[-0.04em] text-[#f4efe2]">
                Keep the route adjustable
              </h3>
              <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/70 sm:text-base">
                Current ferry schedules, capacity and weather can change the
                shape of a day. Check the operator&apos;s latest information before
                departure and adjust the route around the connection rather
                than trying to force the original plan.
              </p>
            </aside>
          </div>
        </section>

        <figure className="itinerary-print-hidden mt-14 overflow-hidden rounded-[1.5rem] border border-[#d8c9a7]/18 bg-[#071418] sm:mt-16">
          <div className="relative aspect-[16/10] sm:aspect-[16/7]">
            <Image
              src="/images/destinations/helgeland/helgeland-coast.jpg"
              alt="A globe-shaped marker silhouetted against an orange sunset over the sea"
              fill
              loading="lazy"
              sizes="(min-width: 1280px) 1280px, (min-width: 768px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#071418]/78 to-transparent" />
          </div>
          <figcaption className="border-t border-white/8 px-5 py-4 text-sm font-light leading-6 text-[#f4efe2]/66 sm:px-7">
            Island roads and open horizons along the Helgeland Coast.
          </figcaption>
        </figure>

        <section className="mt-16 border-t border-white/8 pt-16 sm:mt-20 sm:pt-20" aria-labelledby="before-you-begin-title">
          <SectionHeader
            eyebrow="02 / Before you begin"
            title="Plan for the coast you will actually travel"
            intro="The practical work is modest but important: prepare the vehicle, understand the crossings and leave enough space for conditions that a map cannot show."
          />
          <div id="before-you-begin-title" className="mt-10 grid gap-4 md:grid-cols-2">
            {beforeYouBegin.map((item) => (
              <article key={item.title} className="rounded-[1.15rem] border border-white/8 bg-white/[0.025] p-6 sm:p-7">
                <h3 className="font-serif text-2xl tracking-[-0.035em] text-[#f4efe2]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-[1.82] text-[#f4efe2]/66 sm:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-white/8 pt-16 sm:mt-20 sm:pt-20" aria-labelledby="itinerary-title">
          <SectionHeader
            eyebrow="03 / Seven-day itinerary"
            title="Move at the coast&apos;s rhythm"
            intro="This is a realistic sequence, not a route to complete at any cost. Each day gives the coast enough room for weather, quays and the places between the headline stops."
          />
          <div id="itinerary-title" className="mt-12 space-y-5">
            {itineraryDays.map((item, index) => (
              <div key={item.day} className="space-y-5">
                <article className="itinerary-day overflow-hidden rounded-[1.35rem] border border-[#8fafa8]/14 bg-[linear-gradient(165deg,rgba(23,35,38,0.84),rgba(8,17,22,0.94))] shadow-[0_22px_70px_rgba(0,0,0,0.18)]">
                  <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[10rem_1fr] lg:gap-12 lg:p-10">
                    <div>
                      <p className="text-[0.64rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/78">
                        {item.day}
                      </p>
                      <p className="mt-4 text-sm font-light leading-6 text-[#f4efe2]/58">
                        {item.intensity}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-serif text-[clamp(2.15rem,4.2vw,4rem)] font-normal leading-[0.94] tracking-[-0.048em] text-[#f4efe2]">
                        {item.title}
                      </h3>
                      <p className="mt-5 max-w-3xl text-base font-light leading-[1.82] text-[#f4efe2]/72 sm:text-lg">
                        {item.focus}
                      </p>

                      <dl className="mt-8 grid gap-4 border-y border-white/8 py-6 sm:grid-cols-2">
                        <div>
                          <dt className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/68">
                            Starting area
                          </dt>
                          <dd className="mt-2 text-sm font-light leading-6 text-[#f4efe2]/78">
                            {item.start}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/68">
                            Overnight area
                          </dt>
                          <dd className="mt-2 text-sm font-light leading-6 text-[#f4efe2]/78">
                            {item.overnight}
                          </dd>
                        </div>
                      </dl>

                      <div className="mt-7 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                        <div>
                          <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/68">
                            Recommended stops
                          </p>
                          <ul className="mt-4 space-y-3">
                            {item.stops.map((stop) => (
                              <li key={stop} className="border-l border-[#d8c9a7]/32 pl-4 text-sm font-light leading-6 text-[#f4efe2]/70">
                                {stop}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-5">
                          <div>
                            <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/68">
                              Ferry or transport consideration
                            </p>
                            <p className="mt-3 text-sm font-light leading-[1.82] text-[#f4efe2]/68 sm:text-base">
                              {item.transport}
                            </p>
                          </div>
                          <div className="rounded-[1rem] border border-[#c6a15b]/16 bg-[#c6a15b]/[0.045] p-5">
                            <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/76">
                              Slow down for
                            </p>
                            <p className="mt-3 text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                              {item.slowDownFor}
                            </p>
                          </div>
                          <p className="border-l border-[#8fafa8]/40 pl-4 text-sm font-light leading-[1.8] text-[#f4efe2]/62 sm:text-base">
                            {item.practicalNote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {index === 2 ? (
                  <div className="itinerary-print-hidden grid gap-5 md:grid-cols-[0.78fr_1.22fr]">
                    <figure className="overflow-hidden rounded-[1.35rem] border border-[#d8c9a7]/18 bg-[#071418]">
                      <div className="relative aspect-[4/5]">
                        <Image
                          src="/images/destinations/helgeland/ferry.jpg"
                          alt="A white vehicle ferry crossing blue water between forested mountains"
                          fill
                          loading="lazy"
                          sizes="(min-width: 768px) 38vw, calc(100vw - 40px)"
                          className="object-cover object-[center_58%]"
                        />
                      </div>
                      <figcaption className="border-t border-white/8 px-5 py-4 text-sm font-light leading-6 text-[#f4efe2]/66">
                        Ferry crossings are part of the rhythm of the journey.
                      </figcaption>
                    </figure>
                    <figure className="overflow-hidden rounded-[1.35rem] border border-[#d8c9a7]/18 bg-[#071418]">
                      <div className="relative aspect-[16/11]">
                        <Image
                          src="/images/destinations/helgeland/nordlandsbåt2.png"
                          alt="A traditional wooden boat moored beside a quay on an overcast coastal day"
                          fill
                          loading="lazy"
                          sizes="(min-width: 768px) 58vw, calc(100vw - 40px)"
                          className="object-cover object-center"
                        />
                      </div>
                      <figcaption className="border-t border-white/8 px-5 py-4 text-sm font-light leading-6 text-[#f4efe2]/66">
                        The coast has always been read from the water as well as the road.
                      </figcaption>
                    </figure>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <figure className="itinerary-print-hidden mt-16 overflow-hidden rounded-[1.5rem] border border-[#d8c9a7]/18 bg-[#071418] sm:mt-20">
          <div className="relative aspect-[16/10] sm:aspect-[21/9]">
            <Image
              src="/images/destinations/helgeland/helgeland.jpg"
              alt="A coastal village and mountains reflected in calm water in Northern Norway"
              fill
              loading="lazy"
              sizes="(min-width: 1280px) 1280px, (min-width: 768px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#071418]/74 to-transparent" />
          </div>
          <figcaption className="border-t border-white/8 px-5 py-4 text-sm font-light leading-6 text-[#f4efe2]/66 sm:px-7">
            Leave room for weather, detours and slow coastal evenings.
          </figcaption>
        </figure>

        <section className="mt-16 grid gap-10 border-t border-white/8 pt-16 sm:mt-20 sm:pt-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16" aria-labelledby="ferry-planning-title">
          <SectionHeader
            eyebrow="04 / Ferry planning"
            title="Treat the timetable as part of the road"
            intro="Ferries are not interruptions to this route. They are the connections that make the coast possible."
          />
          <div id="ferry-planning-title" className="rounded-[1.35rem] border border-[#d8c9a7]/16 bg-[linear-gradient(165deg,rgba(198,161,91,0.07),rgba(143,175,168,0.035))] p-7 sm:p-9">
            <p className="text-sm font-light leading-[1.9] text-[#f4efe2]/72 sm:text-base">
              Fv17 has six main ferry crossings, with island ferries and
              express boats adding separate connections. Schedules can vary by
              season and day, exposed crossings can be affected by weather and
              some services have limited capacity. Check the current operator
              information before leaving each base, especially before an
              important return or onward journey.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Arrive in good time on busy summer crossings and public holidays.",
                "Do not assume every island service follows ordinary road-ferry rules.",
                "Leave a buffer around a fixed accommodation check-in or another important connection.",
              ].map((item) => (
                <li key={item} className="border-l border-[#d8c9a7]/34 pl-4 text-sm font-light leading-[1.78] text-[#f4efe2]/68 sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/guides/norway-ferry-guide-for-tourists"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d8c9a7]/22 bg-white/[0.03] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/82 transition-colors duration-300 hover:border-[#d8c9a7]/50 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 motion-reduce:transition-none"
            >
              Read the Norway ferry guide
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="mt-16 grid gap-5 border-t border-white/8 pt-16 sm:mt-20 sm:pt-20 lg:grid-cols-2" aria-labelledby="stay-title">
          <SectionHeader
            eyebrow="05 / Where to stay"
            title="Stay near the next useful connection"
            intro="Choose overnight areas that make the next travel day calmer, not simply shorter on a map."
          />
          <div id="stay-title" className="grid gap-4 sm:grid-cols-2">
            {stayAreas.map((item) => (
              <article key={item.area} className="rounded-[1.1rem] border border-white/8 bg-white/[0.025] p-6">
                <MapPin className="h-4 w-4 text-[#d8c9a7]/84" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-2xl tracking-[-0.035em] text-[#f4efe2]">
                  {item.area}
                </h3>
                <p className="mt-3 text-sm font-light leading-[1.78] text-[#f4efe2]/66">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-white/8 pt-16 sm:mt-20 sm:pt-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16" aria-labelledby="book-ahead-title">
          <SectionHeader
            eyebrow="06 / What to book ahead"
            title="Reserve the parts that remove pressure"
            intro="The aim is not to overbook the coast. It is to secure the things that would make a late ferry or busy summer crossing harder to absorb."
          />
          <div id="book-ahead-title" className="space-y-4">
            {bookingChecklist.map((item, index) => (
              <div key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-[1rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.76),rgba(8,17,22,0.9))] p-5 sm:p-6">
                <span className="text-[0.62rem] font-medium tracking-[0.2em] text-[#d8c9a7]/72">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-light leading-[1.8] text-[#f4efe2]/68 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-white/8 pt-16 sm:mt-20 sm:pt-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16" aria-labelledby="packing-title">
          <SectionHeader
            eyebrow="07 / What to pack"
            title="Prepare for wind, water and short stops"
            intro="The coast can shift quickly from a calm roadside pause to wind on an exposed ferry deck. Practical layers are more useful than a single heavy outfit."
          />
          <div id="packing-title" className="rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.78),rgba(8,17,22,0.92))] p-7 sm:p-9">
            <ul className="space-y-4">
              {packingList.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-light leading-[1.8] text-[#f4efe2]/70 sm:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#d8c9a7]" strokeWidth={1.6} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/guides/what-to-pack-for-norway"
              className="mt-8 inline-flex items-center gap-2 text-sm font-light text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors duration-300 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 motion-reduce:transition-none"
            >
              Open the full Norway packing guide
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <figure className="itinerary-print-hidden mt-16 overflow-hidden rounded-[1.5rem] border border-[#d8c9a7]/18 bg-[#071418] sm:mt-20">
          <div className="relative aspect-[16/10] sm:aspect-[16/7]">
            <Image
              src="/images/destinations/helgeland/helgeland2.jpg"
              alt="A mountain-lined coastal settlement beside bright blue water in Northern Norway"
              fill
              loading="lazy"
              sizes="(min-width: 1280px) 1280px, (min-width: 768px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#071418]/72 to-transparent" />
          </div>
        </figure>

        <section className="mt-16 border-t border-white/8 pt-16 sm:mt-20 sm:pt-20" aria-labelledby="final-route-note-title">
          <div className="rounded-[1.5rem] border border-[#d8c9a7]/18 bg-[linear-gradient(145deg,rgba(198,161,91,0.08),rgba(7,20,24,0.76))] p-8 sm:p-10 lg:p-12">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/80">
              Final route note
            </p>
            <h2 id="final-route-note-title" className="mt-5 max-w-4xl font-serif text-[clamp(2.4rem,5.2vw,5rem)] font-normal leading-[0.93] tracking-[-0.052em] text-[#f4efe2]">
              Let the coast change the plan a little
            </h2>
            <p className="mt-7 max-w-3xl text-base font-light leading-[1.9] text-[#f4efe2]/72 sm:text-lg">
              This itinerary is a framework, not a race. Weather, ferry timing
              and an unexpected harbour, mountain view or island road are part
              of what makes Helgeland work. Keep the structure, then leave
              enough room to travel through the coast rather than simply across
              it.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/destinations/helgeland-coast"
                className={`${buttonClassName} border-[#c6a15b]/38 bg-[#c6a15b]/12 text-[#f4efe2] hover:border-[#d8c9a7]/70 hover:bg-[#c6a15b]/20`}
              >
                Explore the Helgeland Coast
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <Link
                href="/routes/helgeland-coast-road-trip"
                className={`${buttonClassName} border-white/14 bg-white/[0.04] text-[#f4efe2]/82 hover:border-[#d8c9a7]/42 hover:text-[#f4efe2]`}
              >
                Read the full road-trip guide
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <Link
                href="/"
                className="rounded-sm px-1 py-3 text-sm font-light text-[#f4efe2]/70 underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors duration-300 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 motion-reduce:transition-none"
              >
                Return to Trips Norway
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
