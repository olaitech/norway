import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DestinationReveal } from "./DestinationReveal";

export const lofotenIslandsTravelGuideMetadata = {
  title:
    "Lofoten Islands Travel Guide: Where to Stay, Ferries, Itinerary & What Not to Do",
  description:
    "Plan a slower, smarter trip to the Lofoten Islands with this source-backed guide to seasons, ferries, road trips, rorbuer, camping, villages and responsible travel.",
} as const;

const quickFacts = [
  { label: "Region", value: "Northern Norway, Nordland" },
  { label: "Main road", value: "E10" },
  { label: "Practical hubs", value: "Svolvær, Leknes, Reine / Moskenes" },
  { label: "Local airports", value: "Svolvær and Leknes" },
  { label: "Larger airport", value: "Harstad / Narvik Evenes" },
  { label: "Ferry route", value: "Bodø-Værøy-Røst-Moskenes" },
  {
    label: "Best for",
    value:
      "Road trips, photography, hiking, Arctic light, rorbuer and slower travel",
  },
  {
    label: "Planning warning",
    value: "Summer is busy, and weather can disrupt transport",
  },
] as const;

const guideNav = [
  { label: "Why visit", href: "#why-visit" },
  { label: "Best time", href: "#best-time" },
  { label: "How many days", href: "#how-many-days" },
  { label: "Ferries and transport", href: "#how-to-get-to-lofoten" },
  { label: "Where to stay", href: "#where-to-stay" },
  { label: "Rorbuer", href: "#rorbuer-and-cabins" },
  { label: "Camping", href: "#camping-and-campervan" },
  { label: "Places", href: "#places-worth-slowing-down" },
  { label: "Itinerary", href: "#suggested-itinerary" },
  { label: "What not to do", href: "#things-not-to-do" },
  { label: "Responsible travel", href: "#responsible-travel" },
  { label: "FAQ", href: "#lofoten-faq" },
] as const;

const whyVisit = [
  "Lofoten is extraordinary, but the islands reward travellers who slow down, keep plans realistic and leave room for weather changes.",
  "The villages, harbours and roads are not a backdrop. They are lived-in communities with local routines, working fisheries and limited infrastructure.",
  "A strong Lofoten trip is less about chasing every viewpoint and more about choosing a calm base, timing your drives and letting the light shape the day.",
] as const;

const bestTimeCards = [
  {
    title: "June-August",
    text: "Longest daylight and easiest logistics for hiking, beaches and evening drives, but also the busiest period with higher pressure on roads and stays.",
  },
  {
    title: "September-October",
    text: "A practical shoulder season with softer light, fewer visitors and a quieter pace. Weather is more changeable, so keep plans flexible.",
  },
  {
    title: "November-March",
    text: "Darker, more demanding months with winter conditions and northern lights potential. Build conservative plans and expect weather interruptions.",
  },
  {
    title: "April-May",
    text: "A transitional season with growing daylight and mixed ground conditions. Useful if you want fewer crowds without deep winter complexity.",
  },
] as const;

const dayGuidance = [
  {
    title: "2-3 days",
    text: "A short first look. Choose one base and avoid trying to cover the full island chain.",
  },
  {
    title: "4-5 days",
    text: "A good first road trip length, with enough room for one or two bases and basic weather flexibility.",
  },
  {
    title: "7 days",
    text: "A stronger pace for slower travel, route buffers and better light windows for photography.",
  },
  {
    title: "10+ days",
    text: "Ideal for deeper hiking, side trips, Værøy or Røst extensions, and a calmer travel rhythm.",
  },
] as const;

const getToLofoten = [
  {
    title: "By ferry from Bodø to Moskenes",
    text: "One of the most direct western approaches, especially for car travellers continuing into Reine, Hamnøy and nearby villages.",
  },
  {
    title: "By road and ferry via Bognes-Lødingen",
    text: "A practical route when entering Lofoten through the mainland road network and ferry crossings.",
  },
  {
    title: "By air to Svolvær, Leknes, Evenes or Bodø",
    text: "Choose your airport by where you want to start driving and how much transfer time you can tolerate.",
  },
  {
    title: "By public transport",
    text: "Use Entur and Reis Nordland to combine buses, ferries and local segments in one plan.",
  },
] as const;

const gettingAround = [
  "Car is the most flexible option for photography, hikes, beaches, off-peak light and side roads.",
  "Bus is possible along the main corridor, but less flexible than driving.",
  "Public transport requires careful planning, especially outside peak periods.",
  "Bike travel can be scenic but requires awareness of weather, traffic and narrow roads.",
  "Guided tours can help no-car travellers or winter visitors.",
  "Ferry and express boat connections should always be checked through official planners.",
] as const;

const ferryPlannerLinks = [
  {
    title: "Visit Lofoten ferry information",
    href: "https://visitlofoten.com/en/topic/ferry-and-express-boat-timetables-to-lofoten/",
  },
  { title: "Reis Nordland", href: "https://www.reisnordland.no/" },
  {
    title: "Torghatten Bodø-Værøy-Røst-Moskenes",
    href: "https://www.torghatten.no/our-routes/18-782",
  },
  {
    title: "Torghatten Bognes-Lødingen",
    href: "https://www.torghatten.no/en/our-routes/18-703",
  },
  { title: "Entur", href: "https://entur.no/" },
  { title: "Avinor", href: "https://www.avinor.no/" },
] as const;

const whereToStayAreas = [
  {
    area: "Svolvær",
    text: "Practical base for first or last nights, food, tours, shopping and transport.",
  },
  {
    area: "Kabelvåg",
    text: "Calmer cultural base near Svolvær, useful for travellers who want a softer village feel while staying practical.",
  },
  {
    area: "Henningsvær",
    text: "Atmospheric village base for food, harbour walks, photography, galleries and slower travel.",
  },
  {
    area: "Leknes / Ballstad",
    text: "Central logistics and quieter coastal base if you want to explore both east and west.",
  },
  {
    area: "Ramberg / Flakstad",
    text: "Beach, camping and coastal-light base, often better for open landscapes and slower road-trip days.",
  },
  {
    area: "Reine / Hamnøy / Sørvågen / Å",
    text: "Iconic western base for rorbuer, mountain views, ferry access and photography, but often busy and expensive in peak season.",
  },
  {
    area: "Nusfjord",
    text: "Heritage-focused base with a historic fishing-village atmosphere and slower pace.",
  },
] as const;

const hotelExamples = [
  "Thon Hotel Svolvær",
  "Thon Hotel Lofoten",
  "Scandic Svolvær",
  "Scandic Vestfjord Lofoten",
  "Henningsvær Bryggehotell",
  "Nusfjord Arctic Resort",
] as const;

const rorbuerExamples = [
  "Svinøya Rorbuer",
  "Lofoten Rorbuer",
  "Henningsvær Rorbuer",
  "Eliassen Rorbuer",
  "Reine Rorbuer",
  "Nusfjord Arctic Resort",
  "Å Rorbuer",
  "Holmen Lofoten",
] as const;

const campingExamples = [
  "Lofoten Beach Camp",
  "Ramberg Resort",
  "Hov Gård Lofoten",
] as const;

const campingRules = [
  "Use official campsites where possible.",
  "Do not camp on private property or farmland.",
  "Do not drive off-road.",
  "Do not park in passing places.",
  "Stay at least 150 metres from occupied buildings when wild camping under the right to roam.",
  "Pack out waste.",
  "Use official toilets and disposal points.",
  "Follow local signs.",
  "Peak summer can create pressure near beaches, villages, trailheads and parking areas.",
] as const;

const placesWorthSlowingDown = [
  {
    title: "Henningsvær",
    text: "Harbour life, galleries and evening light that suits a slower base rather than a short stop.",
  },
  {
    title: "Unstad and nearby beaches",
    text: "Strong surf and changing weather moods. Good for patient coastal time, not rushed checklists.",
  },
  {
    title: "Nusfjord",
    text: "A heritage fishing village where architecture and pace matter as much as viewpoints.",
  },
  {
    title: "Reine and Hamnøy",
    text: "Iconic mountain-water composition that is best experienced early or late, outside peak rush hours.",
  },
  {
    title: "Flakstad and Ramberg coast",
    text: "Wide beaches, softer horizons and good conditions for slower scenic drives.",
  },
  {
    title: "Å and Sørvågen",
    text: "Western edge villages with maritime character, practical ferry context and strong evening atmosphere.",
  },
] as const;

const itinerary = [
  {
    day: "Day 1",
    title: "Arrive and settle",
    text: "Start in Svolvær, Kabelvåg or Henningsvær. Keep the first day short and absorb local rhythm.",
  },
  {
    day: "Day 2",
    title: "Eastern villages and coast",
    text: "Use short drives and village walks instead of long mileage. Keep room for light and weather.",
  },
  {
    day: "Day 3",
    title: "Central transition",
    text: "Move west toward Leknes, Ballstad or Ramberg with one or two focused stops.",
  },
  {
    day: "Day 4",
    title: "Beach and mountain balance",
    text: "Choose one landscape type for the day and avoid over-packing viewpoints.",
  },
  {
    day: "Day 5",
    title: "Reine / Hamnøy zone",
    text: "Stay near the western classics and plan around crowd patterns and shifting light.",
  },
  {
    day: "Day 6",
    title: "Weather buffer day",
    text: "Use this day for a deferred hike, ferry-dependent move, or simple village time.",
  },
  {
    day: "Day 7",
    title: "Exit with margin",
    text: "Keep departure timing conservative for ferries, airport transfers or long drives out.",
  },
] as const;

const thingsNotToDo = [
  {
    label: "Editorial planning advice",
    text: "Do not plan too many places in one day.",
  },
  {
    label: "Traveller-reported theme",
    text: "Do not rely on wild camping everywhere.",
  },
  {
    label: "Official guidance",
    text: "Do not park in passing places or private areas.",
  },
  {
    label: "Official guidance",
    text: "Do not drive off-road.",
  },
  {
    label: "Editorial planning advice",
    text: "Do not underestimate weather.",
  },
  {
    label: "Official guidance",
    text: "Do not hike exposed routes without proper gear.",
  },
  {
    label: "Editorial planning advice",
    text: "Do not treat villages as photo sets.",
  },
  {
    label: "Official guidance",
    text: "Do not fly drones without checking rules.",
  },
  {
    label: "Traveller-reported theme",
    text: "Do not assume summer means quiet roads.",
  },
  {
    label: "Editorial planning advice",
    text: "Do not arrive in peak season without accommodation.",
  },
  {
    label: "Editorial planning advice",
    text: "Do not trust old ferry screenshots.",
  },
  {
    label: "Editorial planning advice",
    text: "Do not build a no-car itinerary around wishful thinking.",
  },
] as const;

const responsibleTravel = [
  "Camp legally.",
  "Use toilets and waste stations.",
  "Respect private property.",
  "Do not block roads.",
  "Buy local.",
  "Stay longer in fewer places.",
  "Be humble with weather.",
  "Check drone rules.",
  "Remember villages are homes first and attractions second.",
] as const;

const faqItems = [
  {
    question: "Is Lofoten worth visiting?",
    answer:
      "Yes, especially for travellers who enjoy dramatic coastal landscapes and can plan with realistic pace and weather flexibility.",
  },
  {
    question: "How many days do you need in Lofoten?",
    answer:
      "Four to five days works for a first trip, while seven days gives a better balance for weather buffers and slower travel.",
  },
  {
    question: "What is the best month to visit Lofoten?",
    answer:
      "There is no single best month. June to August is easiest for logistics, while September and October often feel calmer.",
  },
  {
    question: "Can you visit Lofoten without a car?",
    answer:
      "Yes, but bus and ferry planning must be done carefully. Entur and Reis Nordland are essential tools.",
  },
  {
    question: "Where should first-time visitors stay?",
    answer:
      "A practical approach is one eastern base and one western base, depending on arrival route and trip length.",
  },
  {
    question: "Is the Bodø-Moskenes ferry reliable?",
    answer:
      "It is a key connection, but schedules and departures can be affected by operational changes and weather.",
  },
  {
    question: "Can you see northern lights in Lofoten?",
    answer:
      "Yes, during darker months with clear skies, but weather and cloud cover determine actual visibility.",
  },
  {
    question: "When is midnight sun in Lofoten?",
    answer:
      "Midnight sun conditions are associated with the summer period around late May to mid July.",
  },
  {
    question: "Is wild camping allowed in Lofoten?",
    answer:
      "The right to roam applies with rules. Respect distance requirements, private property and local restrictions.",
  },
  {
    question: "Are Lofoten roads difficult to drive?",
    answer:
      "Roads are generally manageable, but can be narrow, busy in summer and exposed to changing weather.",
  },
  {
    question: "Is Lofoten too crowded in summer?",
    answer:
      "Some hotspots can be crowded in peak weeks. Early starts, slower routing and advance booking help.",
  },
  {
    question: "Can I fly a drone in Lofoten?",
    answer:
      "Yes, only when rules are followed. Always check local restrictions and aviation guidance before flying.",
  },
  {
    question: "What should I avoid doing in Lofoten?",
    answer:
      "Avoid rushed itineraries, illegal parking, off-road driving and treating villages as unmanaged tourist zones.",
  },
  {
    question: "Is Lofoten good for families?",
    answer:
      "Yes, if days are paced well and routes avoid long, tiring transfer blocks.",
  },
  {
    question: "How expensive is Lofoten?",
    answer:
      "Lofoten can be expensive, especially in peak summer. Early planning and flexible base choices help manage costs.",
  },
] as const;

const relatedGuides = [
  { href: "/destinations/senja", title: "Senja", label: "Destination" },
  {
    href: "/destinations/helgeland-coast",
    title: "Helgeland Coast",
    label: "Destination",
  },
  { href: "/destinations/tromso", title: "Tromso", label: "Destination" },
  {
    href: "/norway-road-trip-routes",
    title: "Norway Road Trip Routes",
    label: "Route hub",
  },
  {
    href: "/best-time-to-visit-norway",
    title: "Best Time to Visit Norway",
    label: "Planning",
  },
  {
    href: "/northern-lights-norway",
    title: "Northern Lights in Norway",
    label: "Planning",
  },
  {
    href: "/norway-itinerary-7-days",
    title: "Norway Itinerary 7 Days",
    label: "Itinerary",
  },
  {
    href: "/norway-itinerary-10-days",
    title: "Norway Itinerary 10 Days",
    label: "Itinerary",
  },
  {
    href: "/responsible-travel",
    title: "Responsible Travel",
    label: "Guidance",
  },
  { href: "/map", title: "Norway Map", label: "Tool" },
] as const;

type SectionIntroProps = {
  label: string;
  title: string;
  intro?: string;
};

function SectionIntro({ label, title, intro }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-[0.63rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/72">
        {label}
      </p>
      <h2 className="mt-4 font-serif text-[clamp(2.1rem,4.8vw,4rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[#f4efe2]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function LofotenIslandsTravelGuide() {
  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <section className="relative flex min-h-[92svh] flex-col overflow-hidden">
        <Image
          src="/images/destinations/lofoten/lofoten-hero-reine-hamnoy.jpg"
          alt="Red rorbuer and steep mountains in Lofoten under soft Arctic light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,0.92)_0%,rgba(2,5,8,0.66)_42%,rgba(2,5,8,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.52)_0%,rgba(2,5,8,0.12)_38%,rgba(2,5,8,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_26%,rgba(216,201,167,0.1),rgba(216,201,167,0)_34%)]" />

        <header className="relative z-10 px-5 py-6 sm:px-8 md:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[0.63rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Norge
            </Link>
            <Link
              href="/destinations"
              className="rounded-full border border-white/12 bg-black/24 px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/78 backdrop-blur-md transition-colors hover:border-white/22 hover:text-[#f4efe2]"
            >
              Destinations
            </Link>
          </div>
        </header>

        <div className="relative z-10 mt-auto px-5 pb-14 pt-20 sm:px-8 sm:pb-16 md:px-12 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-5xl">
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.38em] text-[#d8c9a7]/82">
                Northern Norway / Above the Arctic Circle
              </p>
              <h1 className="mt-5 font-serif text-[clamp(3.35rem,9.8vw,8.7rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#f4efe2]">
                Lofoten Islands Travel Guide
              </h1>
              <p className="mt-6 max-w-3xl text-base font-light leading-[1.82] text-[#f4efe2]/74 sm:text-lg md:text-xl">
                A cinematic but practical guide to Norway&apos;s weather-shaped
                islands where red cabins, steep mountains and Arctic light are
                strongest when you slow down and plan realistically.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#suggested-itinerary"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/86 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  Plan your Lofoten route
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="#things-not-to-do"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-transparent px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/74 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  Read what not to do
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.015] px-5 sm:px-8 md:px-12">
        <div className="mx-auto max-w-7xl py-9 sm:py-11">
          <DestinationReveal className="w-full">
            <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-white/10 pr-5 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                >
                  <dt className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/62">
                    {fact.label}
                  </dt>
                  <dd className="mt-3 text-sm font-light leading-[1.75] text-[#f4efe2]/82 sm:text-base">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </DestinationReveal>
        </div>
      </section>

      <div className="px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-24 sm:space-y-28">
          <section
            id="first-impression"
            className="grid gap-10 scroll-mt-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16"
          >
            <DestinationReveal>
              <SectionIntro
                label="01 / First impression"
                title="Extraordinary landscapes, lived-in communities"
                intro="Lofoten is extraordinary, but it is not a film set. It is a chain of small communities where weather, roads, ferries and local routines matter every day."
              />
            </DestinationReveal>
            <DestinationReveal
              delay={0.08}
              className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10"
            >
              <p className="text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                The islands reward travellers who stay longer in fewer places,
                plan transport honestly and accept that mountain weather can
                change your day quickly.
              </p>
              <p className="mt-6 text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                Build your route around practical bases, leave margin for ferry
                shifts and avoid overpacking each day. That is where the best
                Lofoten experiences usually come from.
              </p>
            </DestinationReveal>
          </section>

          <section
            id="on-this-guide"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="02 / Navigation"
                title="On this guide"
                intro="Jump directly to the sections you need while planning."
              />
            </DestinationReveal>
            <DestinationReveal delay={0.06} className="mt-10">
              <div className="flex flex-wrap gap-3">
                {guideNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:border-[#d8c9a7]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </DestinationReveal>
          </section>

          <section
            id="why-visit"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="03 / Perspective"
                title="Why visit Lofoten"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {whyVisit.map((paragraph, index) => (
                <DestinationReveal key={paragraph} delay={index * 0.06}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-[linear-gradient(165deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-7 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/62">
                      0{index + 1}
                    </p>
                    <p className="mt-7 text-sm font-light leading-[1.82] text-[#f4efe2]/64 sm:text-base">
                      {paragraph}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section
            id="where-it-is"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="04 / Orientation"
                title="Where Lofoten is"
                intro="Lofoten sits in Nordland above the Arctic Circle, linked by the E10 and several ferry-dependent edges."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <DestinationReveal>
                <article className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <p className="text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                    Think of the islands as a connected corridor rather than one
                    single place. Svolvær, Leknes and the Reine / Moskenes zone
                    each suit different route styles.
                  </p>
                  <p className="mt-6 text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                    Travel is usually simple in stable weather and more complex
                    when wind, sea state or visibility shifts. Keep each move
                    realistic and give yourself route margin.
                  </p>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <aside className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
                    Practical anchors
                  </p>
                  <ul className="mt-6 space-y-4 text-sm font-light leading-[1.8] text-[#f4efe2]/68 sm:text-base">
                    <li>Svolvær and Leknes are the main practical hubs.</li>
                    <li>Reine / Moskenes supports western routing and ferry exits.</li>
                    <li>Evenes and Bodø are major transport gateways.</li>
                    <li>E10 is the road spine across the island chain.</li>
                  </ul>
                </aside>
              </DestinationReveal>
            </div>
          </section>

          <section
            id="best-time"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="05 / Seasons"
                title="Best time to visit Lofoten"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {bestTimeCards.map((card, index) => (
                <DestinationReveal key={card.title} delay={index * 0.06}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-7 sm:p-8">
                    <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.82] text-[#f4efe2]/64 sm:text-base">
                      {card.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section
            id="how-many-days"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="06 / Planning"
                title="How many days do you need in Lofoten?"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {dayGuidance.map((item, index) => (
                <DestinationReveal key={item.title} delay={index * 0.06}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-7 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/62">
                      {item.title}
                    </p>
                    <p className="mt-5 text-sm font-light leading-[1.82] text-[#f4efe2]/64 sm:text-base">
                      {item.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section
            id="how-to-get-to-lofoten"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="07 / Access"
                title="How to get to Lofoten"
                intro="Treat arrival as route planning, not one transfer step. Ferry, road and air choices all affect your daily rhythm."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
              <DestinationReveal>
                <article className="relative min-h-[340px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[420px]">
                  <Image
                    src="/images/destinations/lofoten/lofoten-ferry-bodo-moskenes.jpg"
                    alt="Ferry connection between Bodø and Moskenes in Lofoten"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.12)_0%,rgba(3,8,10,0.42)_44%,rgba(3,8,10,0.88)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Ferry approach
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Bodø-Moskenes is a key corridor for west-focused routes.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <article className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {getToLofoten.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1rem] border border-white/8 bg-white/[0.02] p-5"
                      >
                        <h3 className="font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </DestinationReveal>
            </div>
          </section>

          <section
            id="getting-around"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="08 / Mobility"
                title="Getting around Lofoten"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
              <DestinationReveal>
                <article className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <ul className="space-y-4">
                    {gettingAround.map((item) => (
                      <li
                        key={item}
                        className="border-b border-white/6 pb-4 text-sm font-light leading-[1.8] text-[#f4efe2]/68 last:border-b-0 last:pb-0 sm:text-base"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <article className="relative min-h-[340px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[420px]">
                  <Image
                    src="/images/destinations/lofoten/lofoten-e10-road-trip.jpg"
                    alt="Scenic road through mountains and coastline in Lofoten"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.1)_0%,rgba(3,8,10,0.42)_42%,rgba(3,8,10,0.88)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      E10 corridor
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Keep daily distances modest and choose fewer, stronger
                      stops.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
            </div>
            <DestinationReveal delay={0.06} className="mt-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {ferryPlannerLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[1.15rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 transition-colors hover:border-[#d8c9a7]/34 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/72">
                          Official planner
                        </p>
                        <h3 className="mt-3 font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                          {item.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#f4efe2]/66 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </DestinationReveal>
            <DestinationReveal delay={0.1} className="mt-6">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-6 sm:p-7">
                <p className="text-sm font-light leading-[1.85] text-[#f4efe2]/70 sm:text-base">
                  Always check official planners before travel. Ferry schedules
                  can change, and weather can disrupt departures.
                </p>
              </article>
            </DestinationReveal>
          </section>

          <section
            id="where-to-stay"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="09 / Accommodation areas"
                title="Where to stay in Lofoten"
                intro="These are practical bases and well-known areas to compare, not a ranking."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <DestinationReveal>
                <article className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[460px]">
                  <Image
                    src="/images/destinations/lofoten/lofoten-henningsvaer-harbour.jpg"
                    alt="Harbour and village life in Henningsvær, Lofoten"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.08)_0%,rgba(3,8,10,0.42)_50%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Village life
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Henningsvær is a strong example of a slower village base.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {whereToStayAreas.map((item) => (
                    <article
                      key={item.area}
                      className="rounded-[1.15rem] border border-white/8 bg-white/[0.02] p-5"
                    >
                      <h3 className="font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                        {item.area}
                      </h3>
                      <p className="mt-3 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </DestinationReveal>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Hotels travellers often research",
                  items: hotelExamples,
                },
                {
                  title: "Camping and campervan names",
                  items: campingExamples,
                },
              ].map((group) => (
                <DestinationReveal key={group.title}>
                  <article className="rounded-[1.2rem] border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      {group.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((name) => (
                        <span
                          key={name}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/76"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </article>
                </DestinationReveal>
              ))}
            </div>
            <DestinationReveal delay={0.1} className="mt-6">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-6 sm:p-7">
                <p className="text-sm font-light leading-[1.85] text-[#f4efe2]/70 sm:text-base">
                  Availability, prices and ownership can change. Always check
                  official websites, trusted booking channels, parking rules and
                  cancellation terms before booking.
                </p>
              </article>
            </DestinationReveal>
          </section>

          <section
            id="rorbuer-and-cabins"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="10 / Rorbuer"
                title="Rorbuer and cabins in Lofoten"
                intro="Traditional fishermen's cabins, often restored into atmospheric accommodation near harbours, fjords and working coastal villages."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
              <DestinationReveal>
                <article className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[460px]">
                  <Image
                    src="/images/destinations/lofoten/lofoten-rorbuer-hamnoy.jpg"
                    alt="Traditional red fishermen cabins in Hamnøy, Lofoten"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.1)_0%,rgba(3,8,10,0.42)_50%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Cabin atmosphere
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Rorbu stays can define the character of a Lofoten trip.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <p className="text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                    Rorbuer can be one of the most memorable ways to stay in
                    Lofoten, but they are also popular and can be expensive in
                    peak season.
                  </p>
                  <p className="mt-6 text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                    These are well-known names travellers often encounter when
                    researching rorbu stays.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {rorbuerExamples.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/76"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="mt-8 text-sm font-light leading-[1.85] text-[#f4efe2]/68 sm:text-base">
                    Book early in summer if this stay style is important to your
                    itinerary.
                  </p>
                </article>
              </DestinationReveal>
            </div>
          </section>

          <section
            id="camping-and-campervan"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="11 / Camping"
                title="Camping and campervan travel in Lofoten"
                intro="Camping can be beautiful, but it needs more planning than social media suggests."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
              <DestinationReveal>
                <article className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[460px]">
                  <Image
                    src="/images/destinations/lofoten/lofoten-midnight-sun-beach.jpg"
                    alt="Midnight sun over a beach in Lofoten during summer"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.06)_0%,rgba(3,8,10,0.38)_46%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Coastal light
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Scenic camps are possible, but responsibility matters more
                      than photo timing.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <ul className="space-y-4">
                    {campingRules.map((point) => (
                      <li
                        key={point}
                        className="border-b border-white/6 pb-4 text-sm font-light leading-[1.8] text-[#f4efe2]/68 last:border-b-0 last:pb-0 sm:text-base"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </DestinationReveal>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Visit Lofoten camping",
                  href: "https://visitlofoten.com/en/welcome-to-lofoten-camping/",
                },
                {
                  title: "Visit Lofoten right to roam",
                  href: "https://visitlofoten.com/en/the-right-to-roam-freedom-with-responsibility-in-the-great-outdoors/",
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.15rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 transition-colors hover:border-[#d8c9a7]/34 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/72">
                        Official source
                      </p>
                      <h3 className="mt-3 font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                        {link.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#f4efe2]/66 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section
            id="places-worth-slowing-down"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="12 / Places"
                title="Places worth slowing down for"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {placesWorthSlowingDown.map((place, index) => (
                <DestinationReveal key={place.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-7">
                    <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {place.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      {place.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section
            id="suggested-itinerary"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="13 / Itinerary"
                title="Suggested Lofoten itinerary"
                intro="Use this as a pacing model, not a fixed checklist."
              />
            </DestinationReveal>
            <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
              {itinerary.map((item, index) => (
                <DestinationReveal
                  key={item.day}
                  delay={index * 0.04}
                  className="grid gap-4 py-8 sm:grid-cols-[8rem_1fr] md:grid-cols-[9rem_0.8fr_1fr] md:items-start"
                >
                  <p className="text-[0.64rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/68">
                    {item.day}
                  </p>
                  <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-[1.8] text-[#f4efe2]/62 sm:text-base">
                    {item.text}
                  </p>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section
            id="things-not-to-do"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="14 / Trust notes"
                title="Things not to do in Lofoten"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {thingsNotToDo.map((item, index) => (
                <DestinationReveal
                  key={`${item.label}-${item.text}`}
                  delay={index * 0.03}
                >
                  <article className="h-full rounded-[1.15rem] border border-white/10 bg-white/[0.02] p-6">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/72">
                      {item.label}
                    </p>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/66">
                      {item.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section
            id="responsible-travel"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="15 / Responsibility"
                title="Responsible travel in Lofoten"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
              <DestinationReveal>
                <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {responsibleTravel.map((item) => (
                      <li
                        key={item}
                        className="rounded-[0.95rem] border border-white/8 bg-white/[0.02] px-4 py-3 text-sm font-light leading-[1.7] text-[#f4efe2]/68"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
                    Drone guidance
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      {
                        label: "Visit Lofoten drone guide",
                        href: "https://visitlofoten.com/en/droneguide/",
                      },
                      {
                        label: "Norwegian Civil Aviation Authority",
                        href: "https://www.luftfartstilsynet.no/en/drones/flying-in-norway/",
                      },
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-[0.9rem] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-light text-[#f4efe2]/72 transition-colors hover:border-[#d8c9a7]/32 hover:text-[#f4efe2]"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    ))}
                  </div>
                </article>
              </DestinationReveal>
            </div>
          </section>

          <section
            id="lofoten-faq"
            className="grid gap-10 border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
          >
            <DestinationReveal>
              <SectionIntro label="16 / FAQ" title="Lofoten FAQ" />
            </DestinationReveal>
            <DestinationReveal delay={0.08} className="divide-y divide-white/8">
              {faqItems.map((item) => (
                <details key={item.question} className="group py-6 first:pt-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl tracking-[-0.025em] text-[#f4efe2] marker:hidden sm:text-2xl">
                    {item.question}
                    <span className="text-lg font-light text-[#d8c9a7]/72 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-xl pt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/64 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </DestinationReveal>
          </section>

          <section
            id="related-guides"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="17 / Continue planning"
                title="Related guides"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedGuides.map((guide, index) => (
                <DestinationReveal key={guide.href} delay={index * 0.04}>
                  <Link
                    href={guide.href}
                    className="group block h-full rounded-[1.2rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-7 transition-colors hover:border-[#d8c9a7]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:p-8"
                  >
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/72">
                      {guide.label}
                    </p>
                    <h3 className="mt-5 font-serif text-2xl tracking-[-0.035em] text-[#f4efe2]">
                      {guide.title}
                    </h3>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/74 transition-colors group-hover:text-[#f4efe2]">
                      Open guide
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                </DestinationReveal>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
