import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DestinationReveal } from "./DestinationReveal";

export const tromsoTravelGuideMetadata = {
  title:
    "Tromso Travel Guide: Northern Lights, Winter Tours, Midnight Sun & Where to Stay",
  description:
    "Plan a slower, smarter trip to Tromso in Northern Norway. Explore northern lights, midnight sun, winter tours, city life, transport, where to stay and what not to do.",
} as const;

const quickFacts = [
  { label: "Region", value: "Troms, Northern Norway" },
  { label: "Arctic Circle", value: "About 350 km north" },
  { label: "Main airport", value: "Tromso Airport Langnes" },
  {
    label: "Best for",
    value:
      "Northern lights, winter tours, Arctic city life, no-car travellers and fjords",
  },
  { label: "Northern lights", value: "September to early April" },
  { label: "Midnight sun", value: "Around 20 May to 22 July" },
  { label: "Whale watching", value: "Beginning of November to end of January" },
  { label: "Public transport", value: "Svipper and Entur" },
  { label: "Recommended stay", value: "3-4 nights winter, 2-3 nights summer" },
  {
    label: "Car",
    value:
      "Optional in city; useful for Kvaloya and Sommaroy; risky in winter if inexperienced",
  },
] as const;

const guideNav = [
  { label: "Why visit", href: "#why-visit" },
  { label: "Best time", href: "#best-time" },
  { label: "How many days", href: "#how-many-days" },
  { label: "Getting there", href: "#how-to-get-to-tromso" },
  { label: "Northern lights", href: "#northern-lights" },
  { label: "Winter activities", href: "#winter-activities" },
  { label: "Summer", href: "#summer-midnight-sun" },
  { label: "Where to stay", href: "#where-to-stay" },
  { label: "City life", href: "#city-life" },
  { label: "Itineraries", href: "#itineraries" },
  { label: "What not to do", href: "#things-not-to-do" },
  { label: "Responsible travel", href: "#responsible-travel" },
  { label: "FAQ", href: "#tromso-faq" },
] as const;

const whyVisit = [
  {
    title: "Strong aurora base",
    text: "Tromso is one of the easiest Arctic city bases for northern lights planning, especially for first-time winter travellers.",
  },
  {
    title: "Real city rhythm",
    text: "You get restaurants, museums and harbour life without losing access to mountain weather, fjord landscapes and dark winter skies.",
  },
  {
    title: "Easy airport access",
    text: "Short airport transfer times and frequent regional connections reduce friction compared with more remote bases.",
  },
  {
    title: "No-car friendly",
    text: "Many travellers can structure a good trip around tours, city walking and public transport.",
  },
  {
    title: "Tour depth in winter",
    text: "Whale watching, dog sledding, reindeer experiences, cruises and mountain viewpoints can all be combined with weather flexibility.",
  },
  {
    title: "Summer contrast",
    text: "Midnight sun, coastal drives and long evenings make Tromso a different city in warm months.",
  },
] as const;

const bestTimeCards = [
  {
    title: "Winter",
    season: "November-March",
    bestFor:
      "Northern lights, polar-night blue light, whale watching, dog sledding and Arctic city atmosphere.",
    tradeOff:
      "Short daylight, clouds, storms, high prices, icy roads and no aurora guarantee.",
  },
  {
    title: "Spring",
    season: "April-May",
    bestFor: "Returning light, snow atmosphere and quieter travel windows.",
    tradeOff: "Aurora fades with brighter nights and mixed snowmelt conditions.",
  },
  {
    title: "Summer",
    season: "June-August",
    bestFor:
      "Midnight sun, Fjellheisen, Kvaloya, Sommaroy, hiking, road trips and outdoor city life.",
    tradeOff: "No visible northern lights, and weather can still be cold or windy.",
  },
  {
    title: "Autumn",
    season: "September-October",
    bestFor: "Early aurora windows, color shifts and quieter atmosphere.",
    tradeOff: "Wet and unstable weather cycles.",
  },
] as const;

const bestByGoal = [
  { goal: "Northern lights", window: "September to early April" },
  { goal: "Whale watching", window: "Beginning of November to end of January" },
  { goal: "Midnight sun", window: "Around 20 May to 22 July" },
  { goal: "Road trips", window: "Summer to early autumn" },
  { goal: "Hiking", window: "Summer to early autumn" },
  { goal: "Winter atmosphere", window: "December to March" },
] as const;

const dayGuidance = [
  { title: "2 days", text: "City break or stopover format." },
  { title: "3 days", text: "Good first-time minimum." },
  { title: "4 days", text: "Better northern lights and winter balance." },
  {
    title: "5+ days",
    text: "Add Kvaloya, Sommaroy, Lyngen or Senja extensions.",
  },
] as const;

const getToTromso = [
  {
    title: "Tromso Airport Langnes",
    text: "The main arrival point for most Arctic city trips.",
  },
  {
    title: "Airport transfer options",
    text: "Airport bus, local bus, taxi and rental car all operate, with options varying by time and season.",
  },
  {
    title: "Regional links",
    text: "Plane, bus and relevant boat links can connect Tromso to wider Northern Norway routes.",
  },
  {
    title: "Official planning tools",
    text: "Use Avinor, Svipper and Entur for current transport information.",
  },
] as const;

const gettingAround = [
  "Tromso works well without a car if you stay central and use tours.",
  "Public transport works for city, airport, Tromsdalen and selected nearby zones.",
  "Rental cars help with Kvaloya, Sommaroy and flexible photography plans.",
  "Winter driving should only be done by travellers confident on snow and ice.",
  "Central parking can be limited or expensive.",
  "Do not stop dangerously for aurora photos on roads.",
] as const;

const transportLinks = [
  {
    title: "Avinor Tromso Airport",
    href: "https://www.avinor.no/en/airport/Tromso/",
  },
  {
    title: "Avinor public transport",
    href: "https://www.avinor.no/en/airport/Tromso/info/public-transportation/",
  },
  { title: "Svipper", href: "https://svipper.no/" },
  { title: "Entur", href: "https://entur.no/" },
] as const;

const northernLightsLinks = [
  {
    title: "Visit Tromso northern lights",
    href: "https://www.visittromso.no/northern-lights",
  },
  {
    title: "Norway Lights Tromso",
    href: "https://www.norway-lights.com/destinations/tromso",
  },
  { title: "Yr weather", href: "https://www.yr.no/" },
] as const;

const winterActivities = [
  {
    title: "Northern lights tours",
    text: "Useful for weather reading, transport and dark-sky location flexibility.",
  },
  {
    title: "Whale watching",
    text: "Seasonal and weather-dependent. Sightings are never guaranteed.",
  },
  {
    title: "Fjord cruises",
    text: "Good lower-impact option when mountain roads are poor.",
  },
  {
    title: "Dog sledding",
    text: "Book with operators that communicate welfare standards and conditions clearly.",
  },
  {
    title: "Reindeer and Sami cultural experiences",
    text: "Choose respectful operators and treat culture as living community life, not costume tourism.",
  },
  {
    title: "Snowshoeing",
    text: "Useful active option for short winter daylight windows.",
  },
  {
    title: "Fjellheisen in winter",
    text: "Strong city-overview option when visibility allows.",
  },
  {
    title: "Museums as weather backup",
    text: "Essential on cloud-heavy or stormy days.",
  },
] as const;

const winterLinks = [
  {
    title: "Visit Tromso whale watching",
    href: "https://www.visittromso.no/whale-watching",
  },
  {
    title: "Whale watching guidelines",
    href: "https://www.visittromso.no/whale-watching-guidelines",
  },
  { title: "NorWhale", href: "https://www.norwhale.org/en" },
  {
    title: "Visit Tromso how to dress",
    href: "https://www.visittromso.no/how-to-dress",
  },
] as const;

const summerHighlights = [
  "Midnight sun period around late May to late July.",
  "Fjellheisen and Storsteinen viewpoints.",
  "Kvaloya and Sommaroy road-trip loops.",
  "Hiking and fjord tour windows.",
  "Telegrafbukta and coastal evening pauses.",
  "Arctic-Alpine Botanical Garden and museums.",
  "Festival and outdoor city-life season.",
] as const;

const summerLinks = [
  {
    title: "Visit Tromso midnight sun",
    href: "https://www.visittromso.no/midnight-sun",
  },
  { title: "Fjellheisen", href: "https://www.fjellheisen.no/engelsk/fjellheisen-home" },
] as const;

const stayAreas = [
  {
    area: "City centre / harbour",
    text: "Best for first-timers, tours, food and no-car travel.",
  },
  {
    area: "Tromsdalen",
    text: "Useful for cabins, camping and access toward Fjellheisen and the Arctic Cathedral.",
  },
  {
    area: "Kvaloya / Sommaroy",
    text: "Slower coastal stays with stronger landscape focus.",
  },
  {
    area: "Malangen / Lyngen",
    text: "Regional extension zones, not central city replacements.",
  },
] as const;

const stayNames = [
  "Clarion Hotel The Edge",
  "Radisson Blu Hotel Tromso",
  "Scandic Ishavshotel",
  "Thon Hotel Tromso",
  "Thon Hotel Polar",
  "Clarion Collection Hotel Aurora",
  "Clarion Collection Hotel With",
  "Quality Hotel Saga",
  "Comfort Hotel Xpress Tromso",
  "Enter Hotels / Enter Tromso apartments",
  "Yggdrasil Farmhotel",
  "Sommaroy Arctic Hotel",
  "Malangen Resort",
  "Lyngen Lodge",
  "Tromso Lodge & Camping",
] as const;

const places = [
  {
    title: "Tromso city centre",
    mood: "Compact Arctic city rhythm with short distances and strong winter atmosphere.",
    note: "Good base for no-car travellers and evening flexibility.",
    tags: "City, no-car",
  },
  {
    title: "Tromso harbour",
    mood: "Working waterfront and low-light city texture.",
    note: "Best in early morning or late evening walks.",
    tags: "Harbour, photography",
  },
  {
    title: "Fjellheisen / Storsteinen",
    mood: "Panoramic city-fjord contrast.",
    note: "Check weather and visibility before going.",
    tags: "Viewpoint, city overview",
  },
  {
    title: "Arctic Cathedral",
    mood: "Distinctive architecture and winter-lit city identity.",
    note: "Combine with Tromsdalen routing.",
    tags: "Architecture, culture",
  },
  {
    title: "Polaria",
    mood: "Accessible Arctic interpretation space.",
    note: "Useful weather backup with educational focus.",
    tags: "Indoor, family",
  },
  {
    title: "Polar Museum",
    mood: "Expedition history and Arctic context.",
    note: "Strong half-day companion to harbour walks.",
    tags: "Museum, history",
  },
  {
    title: "Perspektivet Museum",
    mood: "City narratives and social history perspectives.",
    note: "Useful indoor option in poor weather.",
    tags: "Museum, city life",
  },
  {
    title: "Tromso University Museum",
    mood: "Broader regional and natural context.",
    note: "Good foundation for longer Arctic trips.",
    tags: "Museum, context",
  },
  {
    title: "Telegrafbukta",
    mood: "Calm shoreline close to city life.",
    note: "Easy short stop for slower pacing.",
    tags: "Coast, easy access",
  },
  {
    title: "Prestvannet",
    mood: "Quiet urban-nature pause.",
    note: "Simple low-effort walk option.",
    tags: "Nature, urban",
  },
  {
    title: "Kvaloya",
    mood: "Roadside mountain-fjord shifts outside city scale.",
    note: "Best with car and flexible weather timing.",
    tags: "Road trip, nature",
  },
  {
    title: "Ersfjordbotn",
    mood: "Fjord curve and mountain-wall compression.",
    note: "Treat as quality stop rather than quick pass-through.",
    tags: "Fjord, photography",
  },
  {
    title: "Sommaroy",
    mood: "Coastal openness and summer-night color.",
    note: "Can be weather-exposed and schedule-sensitive.",
    tags: "Coast, day trip",
  },
  {
    title: "Lyngen Alps",
    mood: "Sharp alpine profile with strong seasonal variation.",
    note: "Works best as extension rather than rushed day add-on.",
    tags: "Extension, mountains",
  },
  {
    title: "Sami culture experiences",
    mood: "Living culture and local knowledge transmission.",
    note: "Prioritize respectful operators and clear context.",
    tags: "Culture, ethics",
  },
] as const;

const itineraryOptions = [
  {
    title: "2 days in Tromso",
    text: "City core plus one Arctic experience, with realistic expectations.",
  },
  {
    title: "3 days in Tromso",
    text: "Balanced first visit with northern lights attempts, city life and one weather-flex day.",
  },
  {
    title: "4-day winter itinerary",
    text: "More room for tours, weather buffers and conservative aurora planning.",
  },
  {
    title: "5 days plus extension",
    text: "Add Kvaloya, Sommaroy, Lyngen or Senja without compressing the city base.",
  },
  {
    title: "No-car Tromso itinerary",
    text: "Central stay, public transport and curated tours instead of self-drive risk.",
  },
  {
    title: "Northern lights-focused itinerary",
    text: "Three or more nights, flexible evening blocks and no guarantee mindset.",
  },
  {
    title: "Summer midnight-sun itinerary",
    text: "Long-light pacing with fjord drives, city evenings and less pressure on dark-sky timing.",
  },
] as const;

const thingsNotToDo = [
  {
    label: "Official guidance",
    text: "Do not expect northern lights to be guaranteed.",
  },
  {
    label: "Editorial planning advice",
    text: "Do not stay only one night if aurora is the main goal.",
  },
  {
    label: "Official guidance",
    text: "Do not dress for city winter when booking outdoor tours.",
  },
  {
    label: "Traveller-reported theme",
    text: "Do not rely on Tromso city centre alone for nature experiences.",
  },
  {
    label: "Official guidance",
    text: "Do not rent a car in winter unless confident on snow and ice.",
  },
  {
    label: "Official guidance",
    text: "Do not stop dangerously on roads to photograph aurora.",
  },
  {
    label: "Official guidance",
    text: "Do not book animal-based activities without checking ethics.",
  },
  {
    label: "Editorial planning advice",
    text: "Do not underestimate prices.",
  },
  {
    label: "Traveller-reported theme",
    text: "Do not assume public transport reaches every fjord and viewpoint easily.",
  },
  {
    label: "Editorial planning advice",
    text: "Do not ignore weather cancellation risks.",
  },
  {
    label: "Official guidance",
    text: "Do not treat Sami culture as a tourist costume.",
  },
  {
    label: "Official guidance",
    text: "Do not fly drones without checking rules.",
  },
  {
    label: "Editorial planning advice",
    text: "Do not skip buffer time before flights and tours.",
  },
] as const;

const responsibleTravel = [
  "Leave no trace.",
  "Treat winter safety as non-negotiable.",
  "Respect mountain and weather limits.",
  "Keep roadside aurora photography safe.",
  "Respect local communities around Kvaloya, Sommaroy and Lyngen.",
  "Treat Sami culture with respect and context.",
  "Apply animal-tourism ethics and ask questions before booking.",
  "Follow whale watching guidelines.",
  "Use proper waste and toilet facilities.",
  "Choose lower-impact public transport when practical.",
  "Check drone rules before every flight.",
  "Support local businesses where possible.",
  "Be aware of overtourism and cruise pressure patterns.",
] as const;

const droneLinks = [
  {
    title: "Visit Tromso drones and photography",
    href: "https://www.visittromso.no/drones-and-photography",
  },
  {
    title: "Avinor drone ban advice",
    href: "https://www.avinor.no/en/practical-info/drone/Drone-ban-advice/",
  },
  {
    title: "Luftfartstilsynet drone rules",
    href: "https://www.luftfartstilsynet.no/en/drones/",
  },
] as const;

const faqItems = [
  {
    question: "Is Tromso worth visiting if I do not see the northern lights?",
    answer:
      "Yes. City life, museums, fjords, winter atmosphere and summer light still make Tromso rewarding without aurora success.",
  },
  {
    question: "How many days do I need in Tromso?",
    answer:
      "Three days is a good first target, with four days stronger for winter flexibility.",
  },
  {
    question: "Can I visit Tromso without a car?",
    answer:
      "Yes. Central stays, tours and public transport can cover a large share of first-time itineraries.",
  },
  {
    question: "What is the best month for northern lights in Tromso?",
    answer:
      "There is no guaranteed month, but September to early April gives the main dark-sky window.",
  },
  {
    question: "Can I see northern lights from the city?",
    answer:
      "Sometimes, but darker locations usually offer better visibility when skies are clear.",
  },
  {
    question: "When is the midnight sun in Tromso?",
    answer: "Around 20 May to 22 July.",
  },
  {
    question: "When is whale watching season in Tromso?",
    answer:
      "Commonly beginning of November to end of January, with weather and wildlife variability.",
  },
  {
    question: "Is Tromso expensive?",
    answer:
      "It can be, especially in winter high season, so early planning and flexible choices help.",
  },
  {
    question: "Is winter driving in Tromso difficult?",
    answer:
      "It can be challenging for inexperienced drivers due to snow, ice and fast weather shifts.",
  },
  {
    question: "Should I choose Tromso, Lofoten, Senja or Alta?",
    answer:
      "Tromso is often the easiest first Arctic base; Lofoten and Senja are more road-trip dependent; Alta can suit specific northern-lights or inland priorities.",
  },
  {
    question: "Where should I stay in Tromso for a first trip?",
    answer:
      "City centre or harbour areas are usually the simplest first choice for transport and tour logistics.",
  },
  {
    question: "Are drone flights allowed in Tromso?",
    answer:
      "Only under strict rules, and airport-controlled airspace limits are significant. Always verify before flight.",
  },
] as const;

const relatedGuides = [
  {
    label: "Destination",
    title: "Lofoten Islands",
    href: "/destinations/lofoten-islands",
  },
  { label: "Destination", title: "Senja", href: "/destinations/senja" },
  {
    label: "Destination",
    title: "Helgeland Coast",
    href: "/destinations/helgeland-coast",
  },
  {
    label: "Planning",
    title: "Northern Lights in Norway",
    href: "/northern-lights-norway",
  },
  {
    label: "Planning",
    title: "Best Time to Visit Norway",
    href: "/best-time-to-visit-norway",
  },
  {
    label: "Route hub",
    title: "Norway Road Trip Routes",
    href: "/norway-road-trip-routes",
  },
  {
    label: "Guidance",
    title: "Responsible Travel",
    href: "/responsible-travel",
  },
  { label: "Route hub", title: "All Routes", href: "/routes" },
  { label: "Tool", title: "Norway Map", href: "/map" },
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

export function TromsoTravelGuide() {
  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <section className="relative flex min-h-[92svh] flex-col overflow-hidden">
        <Image
          src="/images/destinations/tromso/tromso-header.jpg"
          alt="Tromso city lights surrounded by Arctic mountains at night"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,4,7,0.94)_0%,rgba(2,4,7,0.66)_44%,rgba(2,4,7,0.24)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,7,0.58)_0%,rgba(2,4,7,0.14)_40%,rgba(2,4,7,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(146,171,188,0.12),rgba(146,171,188,0)_34%)]" />

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
                Northern Norway / Troms
              </p>
              <h1 className="mt-5 font-serif text-[clamp(3.35rem,9.8vw,8.7rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#f4efe2]">
                Tromso Travel Guide
              </h1>
              <p className="mt-6 max-w-3xl text-base font-light leading-[1.82] text-[#f4efe2]/74 sm:text-lg md:text-xl">
                Tromso feels like a real city placed inside a huge Arctic
                amphitheatre. Come for the northern lights, but do not make your
                whole trip depend on one sky.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#itineraries"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/86 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  Plan your Tromso route
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
            <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-5">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-white/10 pr-5 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
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
                title="Arctic city life with weather reality"
                intro="Tromso is one of the easiest Northern Norway bases for first-time Arctic travellers, but the best trips still leave room for clouds, late nights and changing plans."
              />
            </DestinationReveal>
            <DestinationReveal
              delay={0.08}
              className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10"
            >
              <p className="text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                One hour can look like a city break, the next can feel like a
                mountain-weather decision. That duality is Tromso&apos;s strength.
              </p>
              <p className="mt-6 text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                Use the city for comfort and logistics, then let weather and
                visibility choose when to push into fjords, coast and aurora
                windows.
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
                intro="Jump directly to the planning blocks that matter most."
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
              <SectionIntro label="03 / Perspective" title="Why visit Tromso" />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {whyVisit.map((item, index) => (
                <DestinationReveal key={item.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-7">
                    <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      {item.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section
            id="where-tromso-is"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="04 / Orientation"
                title="Where Tromso is"
                intro="Tromso lies in Northern Norway around 350 km north of the Arctic Circle, with city life on Tromsoya and quick access toward Tromsdalen and Kvaloya."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <DestinationReveal>
                <article className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <p className="text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                    Tromso works as a city base for northern lights tours, fjord
                    outings, museums and food, while still connecting to Kvaloya,
                    Sommaroy, Lyngen and Senja extension planning.
                  </p>
                  <p className="mt-6 text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                    This makes it one of the most practical first-stop choices
                    for travellers who want Arctic conditions without full remote
                    logistics complexity.
                  </p>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <aside className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
                    Practical anchors
                  </p>
                  <ul className="mt-6 space-y-4 text-sm font-light leading-[1.8] text-[#f4efe2]/68 sm:text-base">
                    <li>Tromsoya urban core</li>
                    <li>Tromsdalen mainland side</li>
                    <li>Kvaloya access corridor</li>
                    <li>Airport-close route transitions</li>
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
                title="Best time to visit Tromso"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {bestTimeCards.map((card, index) => (
                <DestinationReveal key={card.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-7">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/72">
                      {card.season}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      <span className="text-[#f4efe2]/82">Best for:</span>{" "}
                      {card.bestFor}
                    </p>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      <span className="text-[#f4efe2]/82">Trade-off:</span>{" "}
                      {card.tradeOff}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
            <DestinationReveal delay={0.1} className="mt-8">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-6 sm:p-8">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                  Best by goal
                </p>
                <div className="mt-5 divide-y divide-white/8 border-y border-white/8">
                  {bestByGoal.map((item) => (
                    <div
                      key={item.goal}
                      className="grid gap-2 py-4 sm:grid-cols-[1.2fr_0.8fr]"
                    >
                      <p className="text-sm font-light leading-[1.75] text-[#f4efe2]/72">
                        {item.goal}
                      </p>
                      <p className="text-sm font-light leading-[1.75] text-[#d8c9a7]/78 sm:text-right">
                        {item.window}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </DestinationReveal>
          </section>

          <section
            id="how-many-days"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="06 / Planning"
                title="How many days do you need in Tromso?"
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
            id="how-to-get-to-tromso"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="07 / Access"
                title="How to get to Tromso"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {getToTromso.map((item, index) => (
                <DestinationReveal key={item.title} delay={index * 0.05}>
                  <article className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-7">
                    <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      {item.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
            <DestinationReveal delay={0.08} className="mt-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {transportLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[1.15rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 transition-colors hover:border-[#d8c9a7]/34 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#f4efe2]/66 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </DestinationReveal>
          </section>

          <section
            id="getting-around-tromso"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="08 / Mobility"
                title="Getting around Tromso"
              />
            </DestinationReveal>
            <DestinationReveal delay={0.06} className="mt-12">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
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
          </section>

          <section
            id="northern-lights"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="09 / Aurora"
                title="Northern lights in Tromso"
                intro="Tromso is a strong aurora base because it sits under the auroral oval, but clear sky matters as much as aurora activity."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
              <DestinationReveal>
                <article className="relative min-h-[340px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[420px]">
                  <Image
                    src="/images/destinations/tromso/tromso-nordlys.jpg"
                    alt="Northern lights above the Tromso region in winter"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.1)_0%,rgba(3,8,10,0.42)_48%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Aurora window
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      September to early April is the main season, but no sky is
                      guaranteed.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <article className="relative min-h-[340px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[420px]">
                  <Image
                    src="/images/destinations/tromso/tromso-aurora-view.jpg"
                    alt="Aurora over snowy mountains near Tromso"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.08)_0%,rgba(3,8,10,0.42)_48%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Reality check
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Camera sensors often show stronger color than the naked
                      eye in weak aurora conditions.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
            </div>
            <DestinationReveal delay={0.08} className="mt-8">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                <ul className="space-y-4 text-sm font-light leading-[1.8] text-[#f4efe2]/68 sm:text-base">
                  <li>Season is generally September to early April.</li>
                  <li>Aurora is never guaranteed.</li>
                  <li>Clear sky matters as much as solar activity.</li>
                  <li>City viewing can work, but darker zones are usually better.</li>
                  <li>Tours often drive away from city cloud cover patterns.</li>
                  <li>Stay at least 3 nights if aurora is the main goal.</li>
                </ul>
              </article>
            </DestinationReveal>
            <DestinationReveal delay={0.1} className="mt-6">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-6 sm:p-7">
                <p className="text-sm font-light leading-[1.85] text-[#f4efe2]/70 sm:text-base">
                  You are not paying for a guaranteed sky. A good aurora tour
                  gives you local weather reading, safe transport, warm logistics
                  and better odds, not control over clouds.
                </p>
              </article>
            </DestinationReveal>
            <DestinationReveal delay={0.1} className="mt-8">
              <div className="grid gap-4 md:grid-cols-3">
                {northernLightsLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[1.15rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 transition-colors hover:border-[#d8c9a7]/34 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#f4efe2]/66 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </DestinationReveal>
          </section>

          <section
            id="winter-activities"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="10 / Winter activities"
                title="Winter activities and tours"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[0.98fr_1.02fr]">
              <DestinationReveal>
                <article className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[430px]">
                  <Image
                    src="/images/destinations/tromso/tromso-winter-landscape.jpg"
                    alt="Majestic winter landscape near Tromso in Northern Norway"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.08)_0%,rgba(3,8,10,0.42)_48%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Winter context
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Short daylight and weather shifts should shape every tour
                      day.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {winterActivities.map((item, index) => (
                  <DestinationReveal key={item.title} delay={index * 0.04}>
                    <article className="h-full rounded-[1.15rem] border border-white/10 bg-white/[0.02] p-6">
                      <h3 className="font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                        {item.text}
                      </p>
                    </article>
                  </DestinationReveal>
                ))}
              </div>
            </div>
            <DestinationReveal delay={0.08} className="mt-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {winterLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[1.15rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 transition-colors hover:border-[#d8c9a7]/34 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#f4efe2]/66 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </DestinationReveal>
          </section>

          <section
            id="summer-midnight-sun"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="11 / Summer"
                title="Summer and midnight sun"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="grid gap-5">
                <DestinationReveal>
                  <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                    <ul className="space-y-4">
                      {summerHighlights.map((item) => (
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
                <DestinationReveal delay={0.05}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {summerLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-[1.15rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 transition-colors hover:border-[#d8c9a7]/34 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                            {item.title}
                          </h3>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-[#f4efe2]/66 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </a>
                    ))}
                  </div>
                </DestinationReveal>
              </div>
              <DestinationReveal delay={0.08}>
                <article className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[430px]">
                  <Image
                    src="/images/destinations/tromso/tromso-summer-night.jpg"
                    alt="Bright summer night over the coast near Tromso"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.06)_0%,rgba(3,8,10,0.42)_48%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Midnight-sun season
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Long-light travel supports slower evenings, later drives
                      and urban-coastal combinations.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
            </div>
          </section>

          <section
            id="where-to-stay"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="12 / Accommodation areas"
                title="Where to stay in Tromso"
                intro="Use area choices as planning tools, not rankings."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stayAreas.map((item, index) => (
                <DestinationReveal key={item.area} delay={index * 0.04}>
                  <article className="h-full rounded-[1.15rem] border border-white/8 bg-white/[0.02] p-6">
                    <h3 className="font-serif text-xl tracking-[-0.03em] text-[#f4efe2]">
                      {item.area}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      {item.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section
            id="stays-worth-researching"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="13 / Research names"
                title="Hotels, lodges and cabins worth researching"
                intro="These are well-known places worth researching, not ranked recommendations."
              />
            </DestinationReveal>
            <DestinationReveal delay={0.06} className="mt-12">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                <div className="flex flex-wrap gap-2">
                  {stayNames.map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/76"
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm font-light leading-[1.85] text-[#f4efe2]/68 sm:text-base">
                  Availability, prices, ownership, opening hours and tour
                  meeting points can change. Always check official websites,
                  trusted booking channels and cancellation terms before booking.
                </p>
              </article>
            </DestinationReveal>
          </section>

          <section
            id="city-life"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="14 / Urban Arctic"
                title="Food, culture and city life"
                intro="Tromso is a real Arctic city, not only a tour base."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[0.98fr_1.02fr]">
              <DestinationReveal>
                <article className="relative min-h-[340px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[420px]">
                  <Image
                    src="/images/destinations/tromso/tromso-ishavskatedralen.jpg"
                    alt="The Arctic Cathedral in Tromso during winter"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.1)_0%,rgba(3,8,10,0.42)_48%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      City and architecture
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Tromso combines urban routines with clear Arctic identity.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <ul className="space-y-4">
                    {[
                      "Seafood and northern ingredients shape much of the city menu landscape.",
                      "Cafes are important pacing anchors during dark winter days.",
                      "Museums provide Arctic history and weather-resilient activity blocks.",
                      "Sami Week requires cultural respect and context-aware participation.",
                      "Festival season includes TIFF, Northern Lights Festival, Midnight Sun Marathon, Bukta Festival and Sami Week.",
                    ].map((item) => (
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
            </div>
          </section>

          <section
            id="places-worth-slowing-down"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="15 / Places"
                title="Places and day trips worth slowing down for"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {places.map((place, index) => (
                <DestinationReveal key={place.title} delay={index * 0.03}>
                  <article className="h-full rounded-[1.15rem] border border-white/10 bg-white/[0.02] p-6">
                    <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {place.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      {place.mood}
                    </p>
                    <p className="mt-3 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      <span className="text-[#f4efe2]/82">Practical note:</span>{" "}
                      {place.note}
                    </p>
                    <p className="mt-4 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#d8c9a7]/70">
                      {place.tags}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section
            id="itineraries"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="16 / Itineraries"
                title="Suggested Tromso itineraries"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {itineraryOptions.map((item, index) => (
                <DestinationReveal key={item.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-7">
                    <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.82] text-[#f4efe2]/64">
                      {item.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
            <DestinationReveal delay={0.1} className="mt-6">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-6 sm:p-7">
                <p className="text-sm font-light leading-[1.85] text-[#f4efe2]/70 sm:text-base">
                  Treat these as frameworks, not fixed schedules. Weather,
                  clouds, tour timing, road conditions and daylight should shape
                  the final route.
                </p>
              </article>
            </DestinationReveal>
          </section>

          <section
            id="things-not-to-do"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="17 / Trust notes"
                title="Things not to do in Tromso"
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
                label="18 / Responsibility"
                title="Responsible travel in Tromso"
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
                    Drone restrictions
                  </p>
                  <p className="mt-5 text-sm font-light leading-[1.8] text-[#f4efe2]/68 sm:text-base">
                    Tromso has strict drone constraints because of airport and
                    controlled airspace. Always verify legal status before each
                    flight session.
                  </p>
                  <div className="mt-6 space-y-3">
                    {droneLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-[0.9rem] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-light text-[#f4efe2]/72 transition-colors hover:border-[#d8c9a7]/32 hover:text-[#f4efe2]"
                      >
                        <span>{item.title}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    ))}
                  </div>
                </article>
              </DestinationReveal>
            </div>
          </section>

          <section
            id="tromso-faq"
            className="grid gap-10 border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
          >
            <DestinationReveal>
              <SectionIntro label="19 / FAQ" title="Tromso FAQ" />
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
                label="20 / Continue planning"
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
