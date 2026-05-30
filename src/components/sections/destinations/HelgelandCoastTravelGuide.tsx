import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DestinationReveal } from "./DestinationReveal";

export const helgelandCoastGuideMetadata = {
  title: "Helgeland Coast Travel Guide | Norway's Quiet Island Road Trip",
  description:
    "A cinematic slow travel guide to the Helgeland Coast in Northern Norway, with scenic roads, ferries, islands, UNESCO Vega, Torghatten, the Seven Sisters and practical route advice.",
};

const heroStats = [
  "433 km scenic route",
  "6 ferry crossings",
  "5-7 days recommended",
  "UNESCO Vega",
] as const;

const quickFacts = [
  { label: "Region", value: "Northern Norway, Nordland" },
  { label: "Best for", value: "Road trips, ferries, islands, hiking, slow travel" },
  {
    label: "Main route",
    value: "Coastal Route Fv17 / Norwegian Scenic Route Helgelandskysten",
  },
  { label: "Recommended time", value: "5-7 days" },
  { label: "Short version", value: "2-3 days" },
  { label: "Ferries", value: "Several, including six on the scenic route" },
  { label: "Best season", value: "June to September" },
  {
    label: "Known for",
    value: "Torghatten, Vega, Seven Sisters, island communities, coastal light",
  },
] as const;

const whyVisit = [
  {
    title: "A quieter alternative",
    text: "Helgeland is one of Northern Norway's most beautiful coastal regions, but it asks for less performance from the traveller. The reward is not a single famous viewpoint. It is the feeling of space between crossings, harbours, islands and weather.",
  },
  {
    title: "One of Norway's great road trips",
    text: "This is a road journey where the pauses matter as much as the driving. Fv17 moves through beaches, fjords, small ports, low islands and mountain walls that keep changing with the sea light.",
  },
  {
    title: "Ferries are part of the story",
    text: "The ferries are not interruptions. They are the rhythm of the coast: a chance to step outside, read the weather, watch silhouettes pass and let the route slow itself down.",
  },
] as const;

const seasonNotes = [
  {
    title: "Summer",
    label: "June to August",
    text: "Long light, frequent services and the easiest conditions for ferries, hiking, kayaking and island travel. In the northern parts of the region, summer can bring true midnight-sun atmosphere; farther south, the nights still stay remarkably bright.",
  },
  {
    title: "Early autumn",
    label: "September",
    text: "Quieter roads, beautiful low light and fewer visitors. Weather can be more unstable, so keep ferry timing and accommodation plans flexible.",
  },
  {
    title: "Winter",
    label: "November to March",
    text: "Atmospheric and demanding. Daylight is short, weather can close in quickly, and travellers should check roads, ferries and opening hours carefully before each stage.",
  },
  {
    title: "Spring",
    label: "April to May",
    text: "A changing season with snow still present in the mountains, fresh coastal colour and less predictable services. Beautiful, but not as straightforward as summer.",
  },
] as const;

const dayGuidance = [
  {
    label: "2-3 days",
    title: "Possible, but rushed",
    text: "Enough for a focused taste around Brønnøysund, Torghatten, Vega or a central section, but not enough for the full coastal rhythm.",
  },
  {
    label: "5-7 days",
    title: "Recommended",
    text: "The right range for a proper slow-travel experience: ferries, one or two island detours, weather buffers and time to avoid driving through every place.",
  },
  {
    label: "10+ days",
    title: "Ideal for depth",
    text: "Best if you want island hopping, hiking, kayaking, Lovund or Træna, and a northern extension toward Meløy, Svartisen or Bodø.",
  },
] as const;

const arrivalOptions = [
  "Drive north from Trøndelag or south from Bodø, using Fv17 where the coastal route is the focus.",
  "Use the E6 as the faster inland spine, then connect west to Fv17 through towns such as Mosjøen, Mo i Rana or Sandnessjøen.",
  "Arrive by train to nearby towns such as Mosjøen, Mo i Rana or Bodø, then continue by car, bus or boat depending on the route.",
  "Use coastal ships, Hurtigruten or Havila-style travel as part of a wider coastal journey where the itinerary fits.",
  "Fly via Bodø, Brønnøysund, Sandnessjøen or Mo i Rana depending on where the route begins or ends.",
] as const;

const drivingChecklist = [
  "Check ferry schedules the evening before.",
  "Keep food and water in the car.",
  "Do not rely on late arrivals.",
  "Book key accommodation in summer.",
  "Leave time for unexpected stops.",
] as const;

const places = [
  {
    title: "Brønnøysund",
    label: "Gateway town",
    text: "A practical coastal base with harbour life, services and good access to Torghatten and the southern Helgeland rhythm.",
  },
  {
    title: "Torghatten",
    label: "Iconic mountain",
    text: "The mountain with the hole through it. A short hike, a strong visual identity and one of the most memorable landmarks on the coast.",
  },
  {
    title: "Vega",
    label: "UNESCO island culture",
    text: "A World Heritage landscape connected to coastal culture, eider ducks, island roads and traditional life shaped by the sea.",
  },
  {
    title: "Sandnessjøen",
    label: "Central base",
    text: "A useful middle point for the Seven Sisters, ferries and the central Helgeland coast.",
  },
  {
    title: "The Seven Sisters",
    label: "Mountain range",
    text: "An iconic wall of peaks above the coast. Hikes are weather-dependent and best approached with realistic experience and conditions.",
  },
  {
    title: "Herøy and Dønna",
    label: "Island roads",
    text: "Open sea feeling, coastal villages, quiet roads and a slower alternative to Norway's more famous icons.",
  },
  {
    title: "Lovund",
    label: "Outer island",
    text: "Known for puffins, island life and a stronger sense of distance from the mainland.",
  },
  {
    title: "Træna",
    label: "Far out at sea",
    text: "A remote island feeling for travellers who want something unusual and have the time to let ferry logistics shape the day.",
  },
  {
    title: "Nesna",
    label: "Small coastal stop",
    text: "A quiet Helgeland stop and useful ferry connection, with the understated atmosphere that defines much of the route.",
  },
  {
    title: "Svartisen and Meløy",
    label: "Northern extension",
    text: "A dramatic contrast to the island coast, adding glacier landscape and a stronger northern finish if time allows.",
  },
] as const;

const itinerary = [
  {
    day: "Day 1",
    title: "Brønnøysund and Torghatten",
    text: "Arrive, settle into the coast and use Torghatten as the first strong landscape anchor rather than a rushed photo stop.",
  },
  {
    day: "Day 2",
    title: "Vega",
    text: "Cross toward Vega for island roads, World Heritage culture and a quieter day shaped by coastal heritage.",
  },
  {
    day: "Day 3",
    title: "North toward Sandnessjøen",
    text: "Let ferries set the pace as the route moves toward the central Helgeland coast and the Seven Sisters skyline.",
  },
  {
    day: "Day 4",
    title: "Seven Sisters, Herøy or Dønna",
    text: "Choose the day by weather: a mountain hike for experienced walkers, or slower island roads if cloud and wind move in.",
  },
  {
    day: "Day 5",
    title: "Nesna and ferry sections north",
    text: "Continue through ferry-linked coast, keeping the day light enough for pauses and missed-photo moments.",
  },
  {
    day: "Day 6",
    title: "Lovund or Træna detour",
    text: "Use the extra day for a true island extension if schedules and weather support it.",
  },
  {
    day: "Day 7",
    title: "Toward Bodø, Meløy or Svartisen",
    text: "Finish north with a glacier contrast, a slower coastal close or onward travel toward Bodø.",
  },
] as const;

const itineraryNotes = [
  {
    drivingTime: "Short",
    pace: "Relaxed",
    planningNote:
      "A gentle opening day; keep the schedule loose so the first ferry or coastal stop does not feel forced.",
  },
  {
    drivingTime: "Moderate",
    pace: "Flexible",
    planningNote:
      "Check ferry timing and leave room for a slower island rhythm rather than trying to overpack the day.",
  },
  {
    drivingTime: "Moderate",
    pace: "Weather-dependent",
    planningNote:
      "A good day for checking forecast shifts and keeping accommodation timing a little loose.",
  },
  {
    drivingTime: "Short to moderate",
    pace: "Weather-dependent",
    planningNote:
      "Decide on the hike or island route after checking conditions, not before breakfast.",
  },
  {
    drivingTime: "Moderate",
    pace: "Flexible",
    planningNote:
      "This is a good day to stay loose with departures and avoid planning too many crossings in one afternoon.",
  },
  {
    drivingTime: "Long",
    pace: "Weather-dependent",
    planningNote:
      "Book ferry and overnight logistics early if you choose the detour, especially in the main summer season.",
  },
  {
    drivingTime: "Long",
    pace: "Flexible",
    planningNote:
      "Leave time for weather and ferry changes so the last day still feels like part of the journey, not a transfer.",
  },
] as const;

const thingsToDo = [
  "Drive Fv17 slowly.",
  "Hike Torghatten.",
  "Visit the Vega World Heritage area.",
  "Explore island roads.",
  "Hike near the Seven Sisters when conditions are right.",
  "Kayak or join local boat trips where available.",
  "Photograph midnight sun and coastal light.",
  "Visit small cafes, museums and local food producers.",
  "Take ferries as scenic breaks.",
  "Slow down instead of chasing every attraction.",
] as const;

const responsibleTravel = [
  "Respect private land, working farms, homes and small harbour communities.",
  "Use marked paths and check weather before hikes.",
  "Do not disturb birdlife, especially around nesting areas and island habitats.",
  "Support local businesses, guides, cafes, museums and food producers.",
  "Avoid camping where it harms local life, fragile ground or nature.",
  "Be patient with ferries and small communities; the route works on coastal time.",
  "Leave beaches, trails, viewpoints and ferry decks cleaner than you found them.",
] as const;

const faqs = [
  {
    question: "How many days do you need on the Helgeland Coast?",
    answer:
      "Two or three days can work for a short section, but five to seven days is much better for the full slow-travel experience. Ten or more days allows island detours, hiking and weather buffers.",
  },
  {
    question: "Is the Helgeland Coast better than Lofoten?",
    answer:
      "Not better, but different. Lofoten is sharper and more famous; Helgeland is quieter, more spacious and more shaped by ferries, islands and understated coastal rhythm.",
  },
  {
    question: "When is the best time to drive the Helgeland Coast?",
    answer:
      "June to September is the easiest window, with long light, more open services and better conditions for ferries, hiking and island travel.",
  },
  {
    question: "How many ferries are on the Helgeland scenic route?",
    answer:
      "The official Norwegian Scenic Route Helgelandskysten includes six ferry crossings. Travellers should check current timetables before planning each day.",
  },
  {
    question: "Can you visit Vega without a car?",
    answer:
      "It can be possible with ferry connections and local transport or cycling, especially in season, but a car or bike gives much more flexibility. Always check current local schedules.",
  },
  {
    question: "Is the Helgeland Coast good for families?",
    answer:
      "Yes, if the itinerary is realistic. Short drive days, ferry breaks, beaches and island stops can work well, but avoid overloading the route with long transfers.",
  },
  {
    question: "Is Fv17 difficult to drive?",
    answer:
      "It is not a technical mountain road in the same way as some high passes, but it requires patience, ferry planning and attention to weather, local traffic and narrow coastal sections.",
  },
  {
    question: "Do you need to book accommodation in advance?",
    answer:
      "In summer, booking key nights in advance is wise, especially on islands and in smaller communities where capacity can be limited.",
  },
  {
    question: "Can you see the midnight sun on the Helgeland Coast?",
    answer:
      "In the northern parts and around the Arctic Circle period, yes; across the wider coast, summer still brings very long, pale nights even where the sun briefly dips.",
  },
  {
    question: "What is the most beautiful part of the Helgeland Coast?",
    answer:
      "There is no single answer. Many travellers remember Torghatten, Vega, the Seven Sisters skyline, island roads around Herøy and Dønna, or the ferry sections north toward Nesna and Meløy.",
  },
] as const;

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Helgeland Coast", href: "/destinations/helgeland-coast" },
] as const;

const guideIndexItems = [
  { label: "First impression", href: "#first-impression" },
  { label: "Why visit", href: "#why-visit" },
  { label: "Where it is", href: "#where-it-is" },
  { label: "Travel essentials", href: "#travel-essentials" },
  { label: "Best time to visit", href: "#best-time" },
  { label: "How many days", href: "#how-many-days" },
  { label: "How to get there", href: "#how-to-get-there" },
  { label: "Coastal Route Fv17", href: "#route" },
  { label: "Places worth slowing down for", href: "#places" },
  { label: "7-day itinerary", href: "#itinerary" },
  { label: "Responsible travel", href: "#responsible-travel" },
  { label: "FAQ", href: "#faq" },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: helgelandCoastGuideMetadata.title,
  description: helgelandCoastGuideMetadata.description,
  articleSection: "Destinations",
  inLanguage: "en",
  author: {
    "@type": "Organization",
    name: "Norge",
  },
  publisher: {
    "@type": "Organization",
    name: "Norge",
  },
  about: {
    "@type": "Place",
    name: "Helgeland Coast",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Nordland",
      addressCountry: "NO",
    },
  },
};

const relatedGuides = [
  { label: "Routes", href: "/routes" },
  { label: "Lofoten Islands", href: "/destinations/lofoten-islands" },
  { label: "Senja", href: "/destinations/senja" },
  { label: "Best time to visit Norway", href: "/best-time-to-visit-norway" },
  { label: "Norway road trip routes", href: "/norway-road-trip-routes" },
  { label: "Responsible travel", href: "/responsible-travel" },
  { label: "Map", href: "/map" },
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
      <p className="text-[0.63rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/72">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-[clamp(2.25rem,5vw,4.65rem)] font-normal leading-[0.94] tracking-[-0.05em] text-[#f4efe2]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/65 sm:text-base md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function AnchorButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "border-white/14 bg-white/[0.06] text-[#f4efe2]/90 hover:border-[#d8c9a7]/40 hover:text-[#f4efe2]"
      : "border-white/12 bg-transparent text-[#f4efe2]/72 hover:border-white/20 hover:text-[#f4efe2]";

  return (
    <Link
      href={href}
      className={`${className} inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55`}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
    </Link>
  );
}

export function HelgelandCoastTravelGuide() {
  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, faqJsonLd]),
        }}
      />
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <Image
          src="/images/destinations/helgeland/helgeland.jpg"
          alt="Island landscape along the Helgeland Coast in Northern Norway"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,0.94)_0%,rgba(2,5,8,0.68)_45%,rgba(2,5,8,0.26)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.58)_0%,rgba(2,5,8,0.16)_40%,rgba(2,5,8,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_30%,rgba(216,201,167,0.12),rgba(216,201,167,0)_38%)]" />

        <header className="relative z-10 px-5 py-6 sm:px-8 md:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 text-[0.66rem] font-medium uppercase tracking-[0.25em] text-[#f4efe2]/74 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Destinations
            </Link>
            <Link
              href="/map"
              className="rounded-full border border-white/12 bg-black/20 px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/78 backdrop-blur-md transition-colors hover:border-white/22 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
            >
              Map
            </Link>
          </div>
        </header>

        <div className="relative z-10 mt-auto px-5 pb-14 pt-28 sm:px-8 sm:pb-16 md:px-12 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <DestinationReveal className="max-w-6xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/84">
                Northern Norway / Slow Travel / Coastal Route Fv17
              </p>
              <h1 className="max-w-6xl font-serif text-[clamp(3.2rem,9vw,8.7rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#f4efe2]">
                Helgeland Coast Travel Guide
              </h1>
              <p className="mt-7 max-w-3xl text-base font-light leading-[1.75] text-[#f4efe2]/76 sm:text-lg md:text-xl">
                A slow travel guide to Norway&apos;s island coast of ferries,
                sea light, mountain silhouettes and quiet roads.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <AnchorButton href="#route">Explore the route</AnchorButton>
                <AnchorButton href="#best-time" variant="secondary">
                  Best time to visit
                </AnchorButton>
              </div>
            </DestinationReveal>

            <DestinationReveal
              delay={0.08}
              className="mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-[1rem] border border-white/10 bg-black/24 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]/72">
                    {stat}
                  </p>
                </div>
              ))}
            </DestinationReveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.015] px-5 sm:px-8 md:px-12">
        <dl className="mx-auto grid max-w-7xl gap-px py-6 sm:grid-cols-2 md:grid-cols-4">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="border-white/8 py-5 sm:px-5 md:border-r md:last:border-r-0">
              <dt className="text-[0.58rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/64">
                {fact.label}
              </dt>
              <dd className="mt-3 text-sm font-light leading-6 text-[#f4efe2]/82">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="border-b border-white/8 px-5 py-5 sm:px-8 md:px-12"
      >
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#f4efe2]/58">
          {breadcrumbItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className="text-[#d8c9a7]/40">
                  /
                </span>
              ) : null}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-[#d8c9a7]">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <section className="border-b border-white/8 px-5 py-6 sm:px-8 md:px-12">
        <div className="mx-auto max-w-7xl rounded-[1.15rem] border border-white/8 bg-white/[0.02] px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
            <div className="max-w-[14rem]">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#d8c9a7]/72">
                On this guide
              </p>
              <p className="mt-3 text-sm font-light leading-[1.75] text-[#f4efe2]/58">
                Jump to the sections that matter while planning the route.
              </p>
            </div>
            <nav aria-label="On this guide" className="min-w-0 flex-1">
              <div className="flex flex-wrap gap-2 sm:hidden">
                {guideIndexItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/72 transition-colors hover:border-[#d8c9a7]/30 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="hidden gap-2 sm:flex sm:flex-wrap">
                {guideIndexItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/72 transition-colors hover:border-[#d8c9a7]/30 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </section>

      <div className="px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-24 sm:space-y-28">
          <section id="first-impression" className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="01 / First impression"
                title="Lofoten gets the attention. Helgeland gives you space."
              />
            </DestinationReveal>
            <DestinationReveal
              delay={0.08}
              className="space-y-6 text-base font-light leading-[1.9] text-[#f4efe2]/70 sm:text-lg"
            >
              <p>
                Along this coast, Norway slows down into ferry crossings,
                island roads, pale beaches, fishing villages and mountains that
                rise straight from the sea. The Helgeland Coast is not a place
                to rush through. It is a route to settle into, one weather
                window, one crossing, one quiet harbour at a time.
              </p>
              <p>
                This guide is for travellers who want the north without turning
                it into a checklist. It is for road trips, ferry days, island
                detours, long summer light, sudden weather and places that feel
                stronger when you give them time. If you want a sharper coastal
                contrast, compare it with <Link href="/destinations/lofoten-islands" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Lofoten</Link> or <Link href="/destinations/senja" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Senja</Link>, then return here for a quieter pace.
              </p>
            </DestinationReveal>
          </section>

          <DestinationReveal
            delay={0.04}
            className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.02] shadow-[0_34px_110px_rgba(0,0,0,0.34)]"
          >
            <div className="relative aspect-[16/9] min-h-[260px] sm:min-h-[360px] lg:min-h-[520px]">
              <Image
                src="/images/destinations/helgeland/helgeland2.jpg"
                alt="Coastal mountains and sea light on the Helgeland Coast"
                fill
                sizes="(min-width: 1280px) 1180px, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.08)_0%,rgba(2,5,8,0.2)_54%,rgba(2,5,8,0.62)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(216,201,167,0.08),rgba(216,201,167,0)_48%)]" />
            </div>
          </DestinationReveal>

          <section id="why-visit" className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="02 / Why go"
                title="Why visit the Helgeland Coast"
                intro="This is one of Norway's best road trip regions for travellers who prefer atmosphere over rushing."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {whyVisit.map((item, index) => (
                <DestinationReveal key={item.title} delay={index * 0.06}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-7 sm:p-8">
                    <p className="text-[0.58rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/62">
                      0{index + 1}
                    </p>
                    <h3 className="mt-7 font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.82] text-[#f4efe2]/64">
                      {item.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section id="where-it-is" className="grid gap-10 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <DestinationReveal>
              <SectionHeader
                eyebrow="03 / Geography"
                title="Where the Helgeland Coast is"
              />
            </DestinationReveal>
            <DestinationReveal
              delay={0.08}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9"
            >
              <p className="text-base font-light leading-[1.9] text-[#f4efe2]/70 sm:text-lg">
                The Helgeland Coast lies in Nordland, in Northern Norway, south
                of Bodø and north of Trøndelag. It stretches through a long
                coastal landscape of islands, fjords, villages and ferry
                crossings.
              </p>
              <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/62 sm:text-base">
                Many travellers connect it with Bodø, Brønnøysund, Mo i Rana,
                Sandnessjøen, the E6 inland route and the Coastal Route Fv17.
                That flexibility is part of its appeal: you can treat Helgeland
                as a full journey or as the coastal alternative to a faster
                north-south transfer. For rail, bus and ferry combinations, use <Link href="https://entur.no" target="_blank" rel="noreferrer" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Entur</Link> and, for local ferry planning, <Link href="https://www.reisnordland.no/hjem" target="_blank" rel="noreferrer" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Reis Nordland</Link>.
              </p>
            </DestinationReveal>
          </section>

          <section id="travel-essentials" className="grid gap-10 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <DestinationReveal>
              <SectionHeader
                eyebrow="04 / Essentials"
                title="Travel essentials"
                intro="The coast is straightforward when you respect the ferries, weather and local rhythm. A little preparation keeps the trip calm."
              />
            </DestinationReveal>
            <DestinationReveal delay={0.08}>
              <dl className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Ferries",
                    "Ferries are part of the route, not interruptions. Check ferry times before each travel day, and use official planners for current schedules and disruptions instead of trying to improvise around them.",
                  ],
                  [
                    "Fuel",
                    "Keep the tank reasonably full before long coastal stretches, especially if you are leaving the main towns or travelling late in the day.",
                  ],
                  [
                    "Food",
                    "Small cafés and local shops are part of the charm, but opening hours can be limited outside summer. Carry simple food and water in the car.",
                  ],
                  [
                    "Accommodation",
                    "In June, July and August, book key overnight stops in advance, especially on islands or near popular hiking areas.",
                  ],
                  [
                    "Weather",
                    "Weather can change quickly along the coast. Check conditions before hikes, ferry-heavy days and long drives.",
                  ],
                  [
                    "Mobile signal",
                    "Coverage is generally good near towns and roads, but can be weaker in remote areas, on islands or close to mountains.",
                  ],
                  [
                    "Emergency",
                    "The Norwegian emergency numbers are 113 for medical emergency, 112 for police and 110 for fire.",
                  ],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1rem] border border-white/8 bg-white/[0.025] p-5">
                    <dt className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/70">
                      {label}
                    </dt>
                    <dd className="mt-3 text-sm font-light leading-[1.8] text-[#f4efe2]/66 sm:text-base">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/58 sm:text-base">
                For live route planning, check the official scenic-route map and ferry links, then confirm timing in Entur or Reis Nordland on the day of travel.
              </p>
            </DestinationReveal>
          </section>

          <section id="best-time" className="scroll-mt-24 border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="05 / Seasons"
                title="Best time to visit"
                intro="The route changes with light, ferry frequency and weather. Summer is easiest, but the shoulder seasons can be deeply atmospheric."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {seasonNotes.map((season, index) => (
                <DestinationReveal key={season.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-7 sm:p-8">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/68">
                      {season.label}
                    </p>
                    <h3 className="mt-5 font-serif text-3xl tracking-[-0.035em] text-[#f4efe2]">
                      {season.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.82] text-[#f4efe2]/64 sm:text-base">
                      {season.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section id="how-many-days" className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="06 / Pacing"
                title="How many days you need"
                intro="The mistake is not driving too slowly. The mistake is planning Helgeland like a highway."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {dayGuidance.map((item) => (
                <DestinationReveal key={item.label}>
                  <article className="h-full rounded-[1.2rem] border border-[#d8c9a7]/18 bg-[#d8c9a7]/[0.045] p-7 sm:p-8">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/78">
                      {item.label}
                    </p>
                    <h3 className="mt-5 font-serif text-3xl tracking-[-0.035em] text-[#f4efe2]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.82] text-[#f4efe2]/66">
                      {item.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section id="how-to-get-there" className="grid gap-10 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <DestinationReveal>
              <SectionHeader
                eyebrow="07 / Arrival"
                title="How to get there"
              />
            </DestinationReveal>
            <DestinationReveal delay={0.08}>
              <ul className="space-y-4">
                {arrivalOptions.map((option) => (
                  <li
                    key={option}
                    className="rounded-[1rem] border border-white/8 bg-white/[0.025] px-5 py-4 text-sm font-light leading-[1.78] text-[#f4efe2]/68 sm:text-base"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </DestinationReveal>
          </section>

          <section id="route" className="scroll-mt-24 border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="08 / Coastal Route Fv17"
                title="Driving the Coastal Route"
                intro="Fv17 is not just a road; it is a rhythm of driving, waiting, crossing and continuing."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
              <DestinationReveal className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.036),rgba(255,255,255,0.014))] p-7 sm:p-10">
                <p className="text-base font-light leading-[1.9] text-[#f4efe2]/70 sm:text-lg">
                  Norwegian Scenic Route Helgelandskysten runs between Holm and
                  Godøystraumen, with important coastal detours including
                  Torghatten. The official scenic route is approximately 433 km
                  and includes six ferry crossings: Holm–Vennesund,
                  Horn–Anddalsvågen, Forvik–Tjøtta, Levang–Nesna,
                  Kilboghavn–Jektvik and Ågskardet–Forøy.
                </p>
              <p className="mt-6 text-base font-light leading-[1.9] text-[#f4efe2]/70 sm:text-lg">
                The ferries slow the trip down in the best way. They also
                make planning real: check timetables, avoid overfilled days
                and use <Link href="/routes" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Routes</Link> planning to let weather decide what kind of route each stage becomes.
              </p>
              <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/60 sm:text-base">
                If your plan includes late crossings or a busy summer day, confirm the evening before and again in the morning before you drive to the quay.
              </p>
              </DestinationReveal>
              <DestinationReveal delay={0.08}>
                <div className="overflow-hidden rounded-[1.35rem] border border-[#d8c9a7]/18 bg-[#d8c9a7]/[0.045]">
                  <div className="relative aspect-[4/3] min-h-[230px] border-b border-[#d8c9a7]/14">
                    <Image
                      src="/images/destinations/helgeland/ferry.jpg"
                      alt="Ferry crossing on the Helgeland Coast in Northern Norway"
                      fill
                      sizes="(min-width: 1024px) 440px, 92vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.03)_0%,rgba(2,5,8,0.3)_100%)]" />
                  </div>
                  <div className="p-7 sm:p-8">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/78">
                      Before driving Fv17
                    </p>
                    <ul className="mt-7 space-y-4">
                      {drivingChecklist.map((item) => (
                        <li
                          key={item}
                          className="border-l border-[#d8c9a7]/30 pl-4 text-sm font-light leading-[1.75] text-[#f4efe2]/68 sm:text-base"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DestinationReveal>
            </div>
          </section>

          <section id="places" className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="09 / Places"
                title="Places worth slowing down for"
                intro="Treat these as anchors, not a checklist. The route is better when weather and ferry timing have room to breathe."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {places.map((place, index) => (
                <DestinationReveal key={place.title} delay={(index % 3) * 0.04}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-7">
                    <p className="text-[0.58rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/66">
                      {place.label}
                    </p>
                    <h3 className="mt-5 font-serif text-[2rem] leading-[0.96] tracking-[-0.04em] text-[#f4efe2]">
                      {place.title}
                    </h3>
                    <p className="mt-5 text-sm font-light leading-[1.82] text-[#f4efe2]/64">
                      {place.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section id="itinerary" className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="10 / Itinerary"
                title="Suggested 7-day itinerary"
                intro="Use this as a flexible framework, not a strict schedule. Ferries, weather and personal pace should decide the final route."
              />
            </DestinationReveal>
            <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
              {itinerary.map((stop, index) => (
                <DestinationReveal
                  key={stop.day}
                  delay={index * 0.04}
                  className="grid gap-4 py-8 sm:grid-cols-[9rem_1fr] md:grid-cols-[10rem_0.7fr_1fr] md:items-start"
                >
                  <p className="text-[0.64rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/68">
                    {stop.day}
                  </p>
                  <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                    {stop.title}
                  </h3>
                  <div className="space-y-3 text-sm font-light leading-[1.8] text-[#f4efe2]/62 sm:text-base">
                    <p>{stop.text}</p>
                    <p className="text-[#d8c9a7]/74">
                      Driving/ferry time: {itineraryNotes[index]?.drivingTime} · Pace:{" "}
                      {itineraryNotes[index]?.pace}
                    </p>
                    <p>{itineraryNotes[index]?.planningNote}</p>
                  </div>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section className="grid gap-10 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <DestinationReveal>
              <SectionHeader
                eyebrow="11 / Experiences"
                title="Things to do"
              />
            </DestinationReveal>
            <DestinationReveal delay={0.08}>
              <div className="grid gap-3 sm:grid-cols-2">
                {thingsToDo.map((item) => (
                  <div
                    key={item}
                    className="rounded-[0.95rem] border border-white/8 bg-white/[0.025] px-4 py-4 text-sm font-light leading-[1.7] text-[#f4efe2]/68"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </DestinationReveal>
          </section>

          <section id="responsible-travel" className="grid gap-10 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <DestinationReveal>
              <SectionHeader
                eyebrow="12 / Responsibility"
                title="Travel with care"
                intro="Helgeland's quietness is part of its value. Protect that by moving carefully through local communities and fragile coastal places."
              />
            </DestinationReveal>
            <DestinationReveal delay={0.08}>
              <ul className="space-y-4">
                {responsibleTravel.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1rem] border border-white/8 bg-black/15 px-5 py-4 text-sm font-light leading-[1.78] text-[#f4efe2]/68 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </DestinationReveal>
          </section>

          <section id="faq" className="grid gap-10 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <DestinationReveal>
              <SectionHeader eyebrow="13 / FAQ" title="Planning questions" />
            </DestinationReveal>
            <DestinationReveal delay={0.08} className="divide-y divide-white/8">
              {faqs.map((item) => (
                <details key={item.question} className="group py-6 first:pt-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl tracking-[-0.025em] text-[#f4efe2] marker:hidden sm:text-2xl">
                    {item.question}
                    <span className="text-lg font-light text-[#d8c9a7]/72 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/64 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </DestinationReveal>
          </section>

          <section className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <article className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.036),rgba(255,255,255,0.014))] p-8 sm:p-10">
                <SectionHeader
                  eyebrow="14 / Related guides"
                  title="Continue planning"
                  intro="Connect Helgeland with the wider Norway planning system: seasons, nearby destinations, responsible travel and the map."
                />
                <div className="mt-9 flex flex-wrap gap-3">
                  {relatedGuides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                    >
                      {guide.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                <p className="mt-8 max-w-2xl text-sm font-light leading-[1.85] text-[#f4efe2]/62 sm:text-base">
                  For a wider planning context, see <Link href="/responsible-travel" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Responsible travel</Link> or open the <Link href="/map" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Map</Link> before choosing where to start.
                </p>
              </article>
            </DestinationReveal>
          </section>
        </div>
      </div>
    </main>
  );
}
