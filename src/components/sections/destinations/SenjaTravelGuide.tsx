import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DestinationReveal } from "./DestinationReveal";

export const senjaTravelGuideMetadata = {
  title: "Senja Travel Guide: Best Time, Scenic Route, Hikes, Ferries & Where to Stay",
  description:
    "Plan a slower, smarter trip to Senja in Northern Norway. Explore the scenic route, Segla and Hesten hikes, ferries, places to stay, best seasons, camping rules and responsible travel advice.",
} as const;

const quickFacts = [
  { label: "Location", value: "Troms, Northern Norway" },
  {
    label: "Best for",
    value: "Road trips, photography, hiking, northern lights, slow travel",
  },
  { label: "Best road", value: "Senja Scenic Route / National Scenic Route" },
  { label: "Gateway", value: "Finnsnes / Silsand via Gisund Bridge" },
  { label: "Recommended stay", value: "2-4 days" },
  { label: "Car", value: "Strongly recommended for first-time visitors" },
  { label: "Ferries", value: "Brensholmen-Botnhamn and Andenes-Gryllefjord" },
  { label: "Official planners", value: "Svipper, Entur, Avinor, Visit Senja" },
] as const;

const guideNav = [
  { label: "Why visit", href: "#why-visit" },
  { label: "Best time", href: "#best-time" },
  { label: "How many days", href: "#how-many-days" },
  { label: "Getting there", href: "#how-to-get-to-senja" },
  { label: "Ferries", href: "#senja-ferries" },
  { label: "Where to stay", href: "#where-to-stay" },
  { label: "Camping", href: "#camping-and-campervan" },
  { label: "Places", href: "#places-worth-slowing-down" },
  { label: "Hikes", href: "#hikes-and-viewpoints" },
  { label: "Itinerary", href: "#suggested-itinerary" },
  { label: "What not to do", href: "#things-not-to-do" },
  { label: "Responsible travel", href: "#responsible-travel" },
  { label: "FAQ", href: "#senja-faq" },
] as const;

const whyVisit = [
  {
    title: "Wilder than Lofoten",
    text: "Senja is a wilder, quieter complement to Lofoten, with less polish and more weather-driven mood across the outer coast.",
  },
  {
    title: "Scenic route rhythm",
    text: "The national scenic route is compact but weather-dependent. Small viewpoints and villages reward patient travel more than aggressive day plans.",
  },
  {
    title: "Hike and light potential",
    text: "Segla, Hesten and nearby mountain lines create strong hiking and photography opportunities, with midnight sun in summer and northern lights in darker months.",
  },
  {
    title: "Village scale matters",
    text: "Most settlements are small and lived-in. Respect for parking, local roads and service limitations is essential.",
  },
] as const;

const bestTimeCards = [
  {
    title: "Summer",
    season: "June-August",
    bestFor:
      "Midnight sun, road trips, hiking, scenic route stops, camping and family travel.",
    note: "Visit Senja lists midnight sun roughly from 20 May to 24 July.",
    tradeOff:
      "Higher visitor pressure, tighter parking around popular stops and ferry planning demand.",
  },
  {
    title: "Autumn",
    season: "September-October",
    bestFor: "Colors, mood, photography, quieter roads and early aurora windows.",
    note: "A strong period for low-angle light and slower pacing.",
    tradeOff: "Shorter days and more unstable weather.",
  },
  {
    title: "Winter",
    season: "November-March",
    bestFor: "Northern lights, Arctic atmosphere, snow and dramatic weather.",
    note: "Aurora season is commonly treated as September-April, with polar night around 29 November to 22 January.",
    tradeOff:
      "Winter driving complexity, limited daylight and possible service reductions.",
  },
  {
    title: "Spring",
    season: "April-May",
    bestFor: "Quieter travel, mixed snow-coast contrast and lower visitor pressure.",
    note: "Useful transition period for flexible road travelers.",
    tradeOff: "Wet terrain, snowmelt and hiking limitations in higher areas.",
  },
] as const;

const bestByGoal = [
  { goal: "Midnight sun and summer hiking", window: "June-July" },
  { goal: "Quieter scenic driving", window: "September-October" },
  { goal: "Northern lights and winter mood", window: "October-March" },
  { goal: "Lower pressure shoulder travel", window: "April-May" },
] as const;

const dayGuidance = [
  {
    title: "1 day",
    text: "Possible from Tromso, but rushed and highly weather-dependent.",
  },
  {
    title: "2 days",
    text: "Minimum for a scenic route sample with one overnight.",
  },
  {
    title: "3-4 days",
    text: "Recommended for slower travel and weather buffers.",
  },
  {
    title: "5+ days",
    text: "Best for hikers, photographers, aurora travelers and deep slow travel.",
  },
] as const;

const getToSenja = [
  {
    title: "By car via Finnsnes / Gisund Bridge",
    text: "The practical year-round mainland connection for most travelers.",
  },
  {
    title: "By ferry Brensholmen-Botnhamn",
    text: "Useful route from the Tromso side when schedules and season align.",
  },
  {
    title: "By ferry Andenes-Gryllefjord",
    text: "A seasonal corridor often used between Vesteralen and Senja.",
  },
  {
    title: "By air via Bardufoss, Tromso or Evenes",
    text: "Choose airport by onward route, rental-car availability and transfer tolerance.",
  },
  {
    title: "By public transport",
    text: "Use Entur and Svipper to combine bus and ferry legs before committing plans.",
  },
] as const;

const gettingAround = [
  "Car is strongly recommended for first-time visitors.",
  "Public transport is possible but limiting for outer-coast flexibility.",
  "Winter driving requires confidence, patience and weather awareness.",
  "Campervans must respect narrow roads and passing places.",
  "Scenic stops are often small, so do not rush your route.",
] as const;

const planners = [
  {
    title: "Svipper ferry routes",
    href: "https://svipper.no/menu/travel/timetables-and-maps/ferry-routes/",
  },
  {
    title: "Svipper bus routes",
    href: "https://svipper.no/menu/travel/timetables-and-maps/bus-routes/",
  },
  { title: "Entur", href: "https://entur.no/" },
  { title: "Avinor", href: "https://www.avinor.no/" },
  {
    title: "Visit Senja travel info",
    href: "https://www.visitsenja.no/en/traveller-information/travel-to-senja",
  },
  {
    title: "Norwegian Scenic Routes Senja",
    href: "https://www.nasjonaleturistveger.no/en/routes/senja/",
  },
] as const;

const stayAreas = [
  {
    area: "Hamn / western Senja",
    text: "Strong base for outer-coast atmosphere and iconic mountain-water contrast.",
  },
  {
    area: "Mefjordvaer / northern Senja",
    text: "Useful for coastal mood, day hikes and changing weather drama.",
  },
  {
    area: "Skaland / scenic route",
    text: "Practical for scenic-route flow and shorter transitions between viewpoints.",
  },
  {
    area: "Torsken / village base",
    text: "Small-community pace with access to western and central road corridors.",
  },
  {
    area: "South Senja / Aanderdalen",
    text: "Quieter base profile with slower road rhythm and nature focus.",
  },
  {
    area: "Finnsnes / practical gateway",
    text: "Transit-efficient anchor for arrivals, late check-ins and early departures.",
  },
] as const;

const researchStays = [
  "Hamn i Senja",
  "Mefjord Brygge",
  "Senja Fjordhotell",
  "Skagi Senja Hotel & Lodge / Skagi Bed",
  "Torsken Brygge / Senja by Heart",
  "Norwegian Wild",
  "Camp Steinfjord",
  "Senja Camping",
  "Fjordbotn Camping",
] as const;

const campingRules = [
  "Use designated campsites and motorhome pitches whenever possible.",
  "Do not camp closer than 150 metres from inhabited houses or cabins.",
  "Avoid private property, farmland and fragile terrain.",
  "Do not drive off-road.",
  "Do not park in passing places on narrow roads.",
  "Take all rubbish with you.",
  "Empty toilets and wastewater only at proper emptying stations.",
  "Respect signs.",
  "Use established toilets where available.",
  "Keep dogs under control and respect wildlife.",
  "Campfire rules apply, including seasonal fire restrictions.",
] as const;

const places = [
  {
    title: "Finnsnes / Silsand",
    mood: "Practical island gateway with steady services and calmer transitions.",
    note: "Best for first or last overnight logistics.",
    tags: "Gateway, logistics",
  },
  {
    title: "Gryllefjord",
    mood: "Wind-shaped harbour atmosphere on the western side.",
    note: "Check seasonal ferry context before planning this as a transfer node.",
    tags: "Ferry context, west coast",
  },
  {
    title: "Torsken",
    mood: "Small village scale with strong coastal light shifts.",
    note: "Services can be limited outside peak periods.",
    tags: "Village base, slow travel",
  },
  {
    title: "Senjahopen",
    mood: "Working harbour character and maritime pace.",
    note: "Good stop for observing local life rather than rushing through.",
    tags: "Harbour, local rhythm",
  },
  {
    title: "Mefjordvaer",
    mood: "Narrow coast geometry, dramatic peaks and weather texture.",
    note: "A strong base for short outings and flexible day plans.",
    tags: "Base option, photography",
  },
  {
    title: "Ersfjord / Ersfjordstranda",
    mood: "Open shoreline framed by steep mountain walls.",
    note: "Parking can be tight in summer and at popular photo windows.",
    tags: "Beach, scenic stop",
  },
  {
    title: "Hamn",
    mood: "Historic outpost feel with exposed sea atmosphere.",
    note: "Works well for slower western-route overnights.",
    tags: "Outer coast, overnight",
  },
  {
    title: "Skaland",
    mood: "Quiet village setting within scenic-route flow.",
    note: "Good for splitting longer scenic days into manageable stages.",
    tags: "Scenic route, practical stop",
  },
  {
    title: "Bergsbotn",
    mood: "Elevated fjord view with sharp topographic contrast.",
    note: "Treat it as one strong stop, not one of many rushed viewpoints.",
    tags: "Viewpoint, short stop",
  },
  {
    title: "Tungeneset",
    mood: "Boardwalk perspective into serrated mountain skyline.",
    note: "Exposure can be high in wind and wet weather.",
    tags: "Viewpoint, weather-sensitive",
  },
  {
    title: "Husoy",
    mood: "Compact island-community footprint with strong character.",
    note: "Respect village parking and residential context.",
    tags: "Community, photography",
  },
  {
    title: "Botnhamn",
    mood: "Transport-oriented coast node with practical role.",
    note: "Useful in ferry-linked route frameworks.",
    tags: "Ferry, gateway",
  },
  {
    title: "Fjordgard",
    mood: "Sheltered village context near famous hiking terrain.",
    note: "Plan parking and timing early in busy hiking windows.",
    tags: "Hike access, village",
  },
  {
    title: "Aanderdalen National Park",
    mood: "Forest and mountain contrast rare in northern island travel.",
    note: "Respect protected-area guidance and trail conditions.",
    tags: "Nature, protected area",
  },
  {
    title: "Senja Scenic Route",
    mood: "A compact sequence of changing weather, sea, peaks and villages.",
    note: "Best experienced with buffer time, not a compressed checklist.",
    tags: "Road trip, scenic route",
  },
] as const;

const hikes = [
  {
    title: "Segla",
    difficulty: "Popular and steep",
    note: "Very weather-sensitive route with exposure risk in poor conditions.",
  },
  {
    title: "Hesten",
    difficulty: "Moderate to demanding",
    note: "Known for the classic view toward Segla. Check ground conditions before committing.",
  },
  {
    title: "Sukkertoppen",
    difficulty: "Moderate",
    note: "Strong payoff hike when visibility is stable.",
  },
  {
    title: "Barden",
    difficulty: "Moderate",
    note: "Useful mountain option in flexible weather windows.",
  },
  {
    title: "Husfjellet",
    difficulty: "Moderate",
    note: "Popular option with broad outlook and variable underfoot conditions.",
  },
  {
    title: "Tungeneset",
    difficulty: "Easy viewpoint access",
    note: "High-value stop for low effort, but exposed in rough weather.",
  },
  {
    title: "Bergsbotn viewpoint",
    difficulty: "Easy viewpoint access",
    note: "Designed stop with broad fjord perspective.",
  },
  {
    title: "Ersfjordstranda",
    difficulty: "Easy shoreline stop",
    note: "Atmospheric beach area for short walks and weather watching.",
  },
  {
    title: "Aanderdalen National Park hikes",
    difficulty: "Variable",
    note: "Trail choice depends on season, terrain and your mountain experience.",
  },
] as const;

const itineraryOptions = [
  {
    title: "1 day",
    subtitle: "Rushed Tromso / Senja sample",
    text: "Only workable if weather and transfers align. Focus on one corridor, not the full island.",
  },
  {
    title: "2 days",
    subtitle: "Scenic route sample",
    text: "One overnight and conservative driving give a better first impression than a same-day loop.",
  },
  {
    title: "3-4 days",
    subtitle: "Recommended slow travel route",
    text: "Balanced pace for scenic stops, village time and weather adaptation.",
  },
  {
    title: "5+ days",
    subtitle: "Photographer / hiker / aurora version",
    text: "Best for deeper mountain choices, light windows and true route flexibility.",
  },
] as const;

const thingsNotToDo = [
  { label: "Editorial planning advice", text: "Do not plan Senja as a quick photo stop between Tromso and Lofoten." },
  { label: "Official guidance", text: "Do not trust old ferry screenshots." },
  { label: "Traveller-reported theme", text: "Do not rely on public transport without careful planning." },
  { label: "Editorial planning advice", text: "Do not underestimate weather and fog." },
  { label: "Official guidance", text: "Do not drive too fast on narrow roads." },
  { label: "Official guidance", text: "Do not park in passing places, private areas or village driveways." },
  { label: "Official guidance", text: "Do not start Segla or Hesten without checking conditions and gear." },
  { label: "Traveller-reported theme", text: "Do not assume restaurants and shops are open late or year-round." },
  { label: "Editorial planning advice", text: "Do not arrive in peak season without accommodation." },
  { label: "Official guidance", text: "Do not camp on private land, fragile terrain or too close to homes." },
  { label: "Official guidance", text: "Do not fly drones without checking rules." },
  { label: "Editorial planning advice", text: "Do not treat Husoy, Mefjordvaer or Fjordgard as photo props." },
] as const;

const responsibleTravel = [
  "Leave no trace.",
  "Camp legally.",
  "Respect private land.",
  "Treat mountain safety as a planning requirement, not an afterthought.",
  "Keep weather flexibility in every route block.",
  "Treat winter driving with caution.",
  "Use proper waste and toilet facilities.",
  "Respect birdlife and sensitive nature zones.",
  "Respect Aanderdalen National Park rules.",
  "Check drone rules before flight.",
  "Support local businesses where possible.",
] as const;

const faqItems = [
  {
    question: "Is Senja worth visiting?",
    answer:
      "Yes, especially if you want a wilder and quieter northern island route with strong landscape contrast and slower pacing.",
  },
  {
    question: "How many days do you need in Senja?",
    answer:
      "Three to four days is the strongest first-trip range, with two days as a minimum sample.",
  },
  {
    question: "Do you need a car in Senja?",
    answer:
      "For most first-time visitors, yes. Public transport exists but limits flexibility and timing.",
  },
  {
    question: "Can you visit Senja from Tromso in one day?",
    answer:
      "It is possible, but often rushed and strongly weather-dependent.",
  },
  {
    question: "What is the best time to visit Senja?",
    answer:
      "Summer is easiest for access and hiking, while autumn and winter offer stronger mood with higher weather complexity.",
  },
  {
    question: "Where should you stay in Senja?",
    answer:
      "Choose by route rhythm: Finnsnes for logistics, outer-coast villages for atmosphere, and scenic-route zones for balanced driving days.",
  },
  {
    question: "Is Hesten or Segla better?",
    answer:
      "Hesten is widely known for the classic view toward Segla. Both are weather-sensitive and should be planned cautiously.",
  },
  {
    question: "Can you see northern lights in Senja?",
    answer:
      "Yes, in darker months with clear sky conditions and stable weather windows.",
  },
  {
    question: "Can you camp in Senja?",
    answer:
      "Yes, with legal-distance rules, private-land respect and proper waste and toilet practices.",
  },
  {
    question: "Are the Senja ferries year-round?",
    answer:
      "Some routes are seasonal or timetable-dependent. Always verify with official planners close to travel day.",
  },
] as const;

const relatedGuides = [
  { label: "Destination", title: "Lofoten Islands", href: "/destinations/lofoten-islands" },
  { label: "Destination", title: "Tromso", href: "/destinations/tromso" },
  { label: "Destination", title: "Helgeland Coast", href: "/destinations/helgeland-coast" },
  { label: "Planning", title: "Northern Lights in Norway", href: "/northern-lights-norway" },
  { label: "Route hub", title: "Norway Road Trip Routes", href: "/norway-road-trip-routes" },
  { label: "Planning", title: "Best Time to Visit Norway", href: "/best-time-to-visit-norway" },
  { label: "Guidance", title: "Responsible Travel", href: "/responsible-travel" },
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

export function SenjaTravelGuide() {
  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <section className="relative flex min-h-[92svh] flex-col overflow-hidden">
        <Image
          src="/images/destinations/senja/senja-hero.jpg"
          alt="Dramatic mountains and fjord landscape on Senja in moody northern light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,4,7,0.94)_0%,rgba(2,4,7,0.68)_44%,rgba(2,4,7,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,7,0.56)_0%,rgba(2,4,7,0.12)_40%,rgba(2,4,7,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_28%,rgba(155,180,196,0.12),rgba(155,180,196,0)_34%)]" />

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
                Senja Travel Guide
              </h1>
              <p className="mt-6 max-w-3xl text-base font-light leading-[1.82] text-[#f4efe2]/74 sm:text-lg md:text-xl">
                Senja does not reveal itself all at once. One moment the road
                runs quietly beside a fjord, the next a mountain wall rises out
                of cloud and the next village seems impossibly small.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#suggested-itinerary"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/86 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  Plan your Senja route
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
                title="A quieter, weather-shaped island"
                intro="Senja rewards travellers who slow down, check the weather, respect the villages and leave room for the unexpected."
              />
            </DestinationReveal>
            <DestinationReveal
              delay={0.08}
              className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10"
            >
              <p className="text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                This is not a checklist destination. Road choices, ferry
                timing, fog and wind can all reshape the day, and that is part
                of the island&apos;s character.
              </p>
              <p className="mt-6 text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                A strong Senja trip usually means fewer bases, conservative
                driving blocks and enough flexibility to pause when conditions
                are good.
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
                intro="Jump to the sections you need while planning."
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
              <SectionIntro label="03 / Perspective" title="Why visit Senja" />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="grid gap-5 sm:grid-cols-2">
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
              <DestinationReveal delay={0.08}>
                <article className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[420px]">
                  <Image
                    src="/images/destinations/senja/peaks-of-senja.jpg"
                    alt="Jagged mountain peaks on Senja rising above the sea"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.08)_0%,rgba(3,8,10,0.44)_48%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Mountain character
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Senja&apos;s outer coast combines jagged profiles, sea
                      exposure and rapid mood shifts.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
            </div>
          </section>

          <section
            id="where-senja-is"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="04 / Orientation"
                title="Where Senja is"
                intro="Senja lies in Troms in Northern Norway and connects to the mainland via the Gisund Bridge near Finnsnes."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <DestinationReveal>
                <article className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <p className="text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                    Senja works well with Tromso, Bardufoss, Vesteralen and
                    Lofoten route planning, but it is best treated as its own
                    weather-dependent island journey.
                  </p>
                  <p className="mt-6 text-base font-light leading-[1.9] text-[#f4efe2]/68 sm:text-lg">
                    Finnsnes and Silsand are the practical year-round gateway
                    for most arrivals and departures.
                  </p>
                </article>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <aside className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
                    Practical anchors
                  </p>
                  <ul className="mt-6 space-y-4 text-sm font-light leading-[1.8] text-[#f4efe2]/68 sm:text-base">
                    <li>Finnsnes / Silsand gateway</li>
                    <li>Gisund Bridge mainland access</li>
                    <li>Scenic route along outer coast segments</li>
                    <li>Ferry-linked entries from Tromso and Vesteralen</li>
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
              <SectionIntro label="05 / Seasons" title="Best time to visit Senja" />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-[0.98fr_1.02fr]">
              <DestinationReveal>
                <article className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0b0c] sm:min-h-[420px]">
                  <Image
                    src="/images/destinations/senja/senja-sunset.jpg"
                    alt="Sunset over the coast of Senja in Northern Norway"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.08)_0%,rgba(3,8,10,0.44)_48%,rgba(3,8,10,0.9)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
                      Seasonal mood
                    </p>
                    <p className="mt-4 max-w-md text-sm font-light leading-[1.8] text-[#f4efe2]/74 sm:text-base">
                      Light, weather and ferry pattern shifts define the season
                      more than calendar labels.
                    </p>
                  </div>
                </article>
              </DestinationReveal>
              <div className="grid gap-5 md:grid-cols-2">
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
                        {card.note}
                      </p>
                      <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                        <span className="text-[#f4efe2]/82">Trade-off:</span>{" "}
                        {card.tradeOff}
                      </p>
                    </article>
                  </DestinationReveal>
                ))}
              </div>
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
                title="How many days do you need in Senja?"
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
            id="how-to-get-to-senja"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="07 / Access"
                title="How to get to Senja"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {getToSenja.map((item, index) => (
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
          </section>

          <section
            id="getting-around-senja"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="08 / Mobility"
                title="Getting around Senja"
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
            id="senja-ferries"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="09 / Ferries and planners"
                title="Senja ferries and official planners"
              />
            </DestinationReveal>
            <DestinationReveal delay={0.06} className="mt-12">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {planners.map((item) => (
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
                  Do not trust old ferry screenshots. Use official planners the
                  day before and the morning of travel. Timetables, weather and
                  seasonal routes can change.
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
                label="10 / Accommodation areas"
                title="Where to stay in Senja"
                intro="Area-based planning is usually more useful than searching for one perfect stay."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                label="11 / Research names"
                title="Hotels, lodges and cabins worth researching"
                intro="These are well-known places worth researching, not ranked recommendations."
              />
            </DestinationReveal>
            <DestinationReveal delay={0.06} className="mt-12">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                <div className="flex flex-wrap gap-2">
                  {researchStays.map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/76"
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <p className="mt-8 text-sm font-light leading-[1.85] text-[#f4efe2]/68 sm:text-base">
                  Availability, opening hours, prices and ownership can change.
                  Always check official websites, trusted booking channels,
                  ferry timing and cancellation terms before booking.
                </p>
              </article>
            </DestinationReveal>
          </section>

          <section
            id="camping-and-campervan"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="12 / Camping"
                title="Camping and campervan travel in Senja"
                intro="Camping can be excellent here, but only when legal-distance rules and local limits are respected."
              />
            </DestinationReveal>
            <DestinationReveal delay={0.06} className="mt-12">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                <ul className="space-y-4">
                  {campingRules.map((item) => (
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
            id="places-worth-slowing-down"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="13 / Places"
                title="Places worth slowing down for"
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
            id="hikes-and-viewpoints"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="14 / Hikes and viewpoints"
                title="Best hikes and viewpoints in Senja"
                intro="Hiking choices should be weather-first and safety-first. Check UT.no, forecasts and local condition updates before departure."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {hikes.map((item, index) => (
                <DestinationReveal key={item.title} delay={index * 0.03}>
                  <article className="h-full rounded-[1.15rem] border border-white/10 bg-white/[0.02] p-6">
                    <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#d8c9a7]/70">
                      {item.difficulty}
                    </p>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      {item.note}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
            <DestinationReveal delay={0.1} className="mt-6">
              <article className="rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-6 sm:p-7">
                <p className="text-sm font-light leading-[1.85] text-[#f4efe2]/70 sm:text-base">
                  Treat mountain routes as condition-dependent decisions. DNT
                  mountain safety principles and current local weather should
                  always override social media plans.
                </p>
              </article>
            </DestinationReveal>
          </section>

          <section
            id="suggested-itinerary"
            className="border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20"
          >
            <DestinationReveal>
              <SectionIntro
                label="15 / Itinerary"
                title="Suggested Senja itinerary"
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {itineraryOptions.map((item, index) => (
                <DestinationReveal key={item.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-7">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/62">
                      {item.title}
                    </p>
                    <h3 className="mt-5 font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {item.subtitle}
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
                  ferries, daylight and local conditions should shape your final
                  route.
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
                label="16 / Trust notes"
                title="Things not to do in Senja"
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
                label="17 / Responsibility"
                title="Responsible travel in Senja"
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
                        label: "Visit Senja drone information",
                        href: "https://www.visitsenja.no/en/traveller-information/travel-to-senja",
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
            id="senja-faq"
            className="grid gap-10 border-t border-white/8 pt-16 scroll-mt-24 sm:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
          >
            <DestinationReveal>
              <SectionIntro label="18 / FAQ" title="Senja FAQ" />
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
                label="19 / Continue planning"
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
