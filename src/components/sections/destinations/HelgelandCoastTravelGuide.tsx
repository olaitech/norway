import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GuideMetaFooter } from "@/src/components/shared/GuideMetaFooter";
import { guideSourceSets } from "@/src/data/guide-meta-sources";
import {
  JsonLd,
  createArticleJsonLd,
  createBreadcrumbListJsonLd,
  createFaqJsonLd,
} from "@/src/lib/seo/jsonLd";

import { DestinationReveal } from "./DestinationReveal";
import { HelgelandStackedPlaces } from "./HelgelandStackedPlaces";

const HELGELAND_GUIDE_REFRESH_DATE = "2026-07-10";
const HELGELAND_GUIDE_LAST_UPDATED = "July 2026";

export const helgelandCoastGuideMetadata = {
  title: "Helgeland Coast Travel Guide: Islands, Ferries and Fv17",
  description:
    "Plan a slower journey along Norway's Helgeland Coast, with practical guidance on Fv17, ferries, islands, mountain walks and coastal communities.",
};

const helgelandCoastCanonicalPath = "/destinations/helgeland-coast";
const helgelandCoastJsonLdBreadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Helgeland Coast", href: helgelandCoastCanonicalPath },
] as const;

const heroStats = [
  "433 km scenic route",
  "6 ferry crossings",
  "4–14 days by scope",
  "Vega World Heritage",
] as const;

const quickFacts = [
  { label: "Region", value: "The southern part of Northern Norway, in Nordland" },
  {
    label: "Best for",
    value: "Slow road trips, island stays, cycling, kayaking and hiking",
  },
  {
    label: "Main route",
    value: "Coastal Route Fv17 / Norwegian Scenic Route Helgelandskysten",
  },
  { label: "Selected section", value: "Allow about 4-5 days" },
  { label: "Broader journey", value: "Allow about 10-14 days" },
  { label: "Ferries", value: "Six on the scenic route, plus island links" },
  { label: "Easiest season", value: "Summer, with shoulder-season trade-offs" },
  {
    label: "Known for",
    value: "Torghatten, Vega, the Seven Sisters, island communities and coastal light",
  },
] as const;

const whyHelgelandFeelsDifferent = [
  {
    title: "A journey through several landscapes",
    text: "Helgeland is more geographically spread out than Lofoten or Senja. Low archipelagos, working farmland, coastal peaks, fjords, forests and inland valleys appear as distinct chapters rather than one compact attraction.",
  },
  {
    title: "Transport shapes the experience",
    text: "Roads, ferries and express boats set the rhythm. The map can make places look close, but every crossing, quay and island detour adds time that is better treated as part of the journey.",
  },
  {
    title: "Slow travel feels natural here",
    text: "Helgeland suits travellers who prefer fewer bases, flexible days and local coastal culture over collecting viewpoints. The region rewards time for weather changes, small communities and unplanned stops.",
  },
] as const;

const travelZones = [
  {
    label: "South Helgeland",
    title: "Brønnøysund, Torghatten and Vega",
    text: "A practical southern beginning with a coastal town, Helgeland's best-known pierced mountain and the cultural landscape of the Vega Archipelago.",
  },
  {
    label: "Central archipelago",
    title: "Sandnessjøen, Herøy and Dønna",
    text: "A ferry- and express-boat hub beneath the Seven Sisters, with low island roads, paddling water and farming communities spread across the coast.",
  },
  {
    label: "Northern coast",
    title: "Nesna, Lurøy, Lovund, Træna and Rødøy",
    text: "A more dispersed island world where choosing one or two places usually creates a calmer and more realistic journey than trying to combine them all.",
  },
  {
    label: "Inland gateways",
    title: "Mosjøen and Mo i Rana",
    text: "Useful rail, road and air gateways for connecting the coast with the E6, the Nordland Line and Helgeland's inland landscapes.",
  },
] as const;

const seasonNotes = [
  {
    title: "Summer",
    label: "Easiest for a first journey",
    text: "The most straightforward season for island hopping, kayaking, cycling and mountain walks, with long light and the widest choice of open food, accommodation and activity businesses. Northern Helgeland can have midnight sun; farther south, expect very bright summer nights rather than the same guarantee.",
  },
  {
    title: "Shoulder season",
    label: "Quieter, with more trade-offs",
    text: "Spring and autumn can bring quieter roads, dramatic light and fewer visitors. They can also mean fewer departures, shorter opening hours and greater dependence on wind and weather, so build the route around current services rather than a summer plan.",
  },
  {
    title: "Winter",
    label: "For focused, flexible stays",
    text: "Winter can suit quiet coastal or town-based stays, selected year-round operators and northern-lights evenings when skies are dark and clear. Do not plan as if the full summer island-hopping offer is available; daylight, weather and seasonal closures change the journey substantially.",
  },
] as const;

const dayGuidance = [
  {
    label: "4-5 days",
    title: "Choose one section",
    text: "Enough for a focused southern or central journey, such as Brønnøysund with Vega or Sandnessjøen with Herøy and Dønna. It is not enough for the whole coast.",
  },
  {
    label: "Around one week",
    title: "Travel one area slowly",
    text: "A realistic range for a slower southern or central journey with ferry buffers, two-night stays and one carefully chosen island detour.",
  },
  {
    label: "10-14 days",
    title: "Build a broader coastal route",
    text: "Better for combining Fv17 with southern, central and northern sections. Ferries and island stays use more time than the distance on the map suggests.",
  },
] as const;

const travelModes = [
  {
    title: "Car and ferry",
    text: "Use Fv17 for the coastal journey or the E6 as a faster inland spine, then connect west through towns such as Mosjøen, Mo i Rana and Sandnessjøen. Build ferry margins into every driving day.",
  },
  {
    title: "Express boat",
    text: "Passenger boats connect mainland hubs and many islands, making no-car island stays possible. Routes, demand stops and seasonal connections vary, so plan the return journey before choosing a base.",
  },
  {
    title: "Bicycle",
    text: "Cycle selected coastal or island stages rather than assuming the full scenic route is easy. Tunnels, wind, luggage and boat capacity matter, and a ferry or express boat can help link manageable sections.",
  },
  {
    title: "Train",
    text: "The Nordland Line serves Mosjøen and Mo i Rana, providing useful inland gateways. Continue to the coast by bus, rental vehicle or a planned boat connection.",
  },
  {
    title: "Regional air",
    text: "Regional airports can shorten the approach to Brønnøysund, Sandnessjøen, Mosjøen or Mo i Rana. Choose the arrival point only after deciding which part of Helgeland you want to explore.",
  },
  {
    title: "Public transport and bicycle",
    text: "A combination of train, bus, express boat and bicycle can work well for selected islands and towns. Keep the itinerary simple and confirm whether bicycles need space reserved on each service.",
  },
] as const;

const drivingChecklist = [
  "Check official ferry and express-boat information before each stage.",
  "Confirm booking or capacity rules for the service you plan to use.",
  "Keep food and water in the car.",
  "Avoid building the day around the final possible connection.",
  "Leave time for weather, queues and island detours.",
] as const;

const places = [
  {
    title: "Brønnøysund",
    label: "Gateway town",
    text: "A practical southern base with harbour life, regional transport and access to Torghatten and Vega. It suits travellers who want services without losing the coastal rhythm.",
  },
  {
    title: "Torghatten",
    label: "Signature landscape",
    priority: true,
    text: "The pierced mountain near Brønnøysund is a clear southern landmark and a focused walk for travellers who want one memorable landscape experience without committing to a summit day.",
  },
  {
    title: "Vega",
    label: "Signature cultural landscape",
    priority: true,
    text: "The Vega Archipelago World Heritage landscape tells a long story of fishing, farming and eider-down traditions. It suits slow island stays, cycling and cultural context rather than a rushed detour.",
  },
  {
    title: "Sandnessjøen",
    label: "Central base",
    text: "A central coastal town and useful boat hub for the Seven Sisters, Herøy, Dønna and onward journeys. It works well for travellers building several short excursions from one base.",
  },
  {
    title: "The Seven Sisters",
    label: "Signature mountain range",
    priority: true,
    text: "The seven peaks form the defining skyline above Sandnessjøen. Individual summit walks are substantial mountain days, while lower viewpoints suit travellers who want the landscape without the full ascent.",
  },
  {
    title: "Herøy and Dønna",
    label: "Signature island roads",
    priority: true,
    text: "Low islands, bridges, farmland and open sea create one of the coast's best slow-travel combinations. They particularly suit cycling, kayaking and travellers comfortable letting boat connections shape the day.",
  },
  {
    title: "Nesna",
    label: "Coastal junction",
    text: "A small mainland stop with important links towards the northern islands. It is most useful as a calm staging point rather than a place to overfill with attractions.",
  },
  {
    title: "Lurøy",
    label: "Island municipality",
    text: "A dispersed mix of mainland coast and islands where the journey matters as much as the arrival. It suits travellers choosing one local base and planning carefully around boats.",
  },
  {
    title: "Lovund and Træna",
    label: "Signature outer islands",
    priority: true,
    text: "Two distinct outer-island communities with strong sea horizons and limited-road travel. Choose one unless you have generous time, and treat wildlife, weather and connections as conditions rather than promises.",
  },
  {
    title: "Rødøy",
    label: "Northern island stop",
    text: "An island and coastal area known for the profile of Rødøyløva and a quieter northern pace. It suits travellers who can stay flexible and avoid turning the visit into a tight transfer day.",
  },
  {
    title: "Mosjøen",
    label: "Rail and inland gateway",
    text: "A historic town on the Nordland Line and E6, useful for moving between the coast and inland Helgeland. It suits rail arrivals and travellers adding town culture to a coastal route.",
  },
  {
    title: "Mo i Rana",
    label: "Northern inland gateway",
    text: "A larger service centre with road, rail and regional air connections. It is a practical entry or exit point for northern Helgeland and inland landscape journeys.",
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
    title: "Choose one northern island",
    text: "Use the extra day for Lovund, Træna, Lurøy or Rødøy only when the connection and an overnight stay create a calm route.",
  },
  {
    day: "Day 7",
    title: "Return or continue deliberately",
    text: "Use an inland gateway, retrace a coastal connection or continue north only if the final travel day still has a realistic weather and ferry buffer.",
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
      "Choose the island only after checking both arrival and departure connections, accommodation and current capacity guidance.",
  },
  {
    drivingTime: "Long",
    pace: "Flexible",
    planningNote:
      "Leave time for weather and ferry changes so the last day still feels like part of the journey, not a transfer.",
  },
] as const;

const thingsToDo = [
  "Drive selected stages of Fv17 and treat each ferry as part of the route.",
  "Walk through Torghatten when trail and weather conditions are suitable.",
  "Spend time with the cultural landscape of the Vega World Heritage area.",
  "Island-hop by ferry or express boat without trying to combine every island.",
  "Hike near the Seven Sisters at a level matched to your experience.",
  "Kayak with appropriate cold-water equipment or a qualified local guide.",
  "Cycle quiet island roads and selected sections of the coast.",
  "Meet coastal culture through museums, small-scale food and local stays.",
  "Experience long summer light without promising midnight sun everywhere.",
  "Look for northern lights only in dark seasons and when skies are clear.",
] as const;

const slowTravelPrinciples = [
  "Leave room for ferry queues, weather changes and cancelled connections.",
  "Choose one or two islands instead of treating the archipelago as a checklist.",
  "Stay two nights when arrival and departure consume much of each day.",
  "Check food shops and restaurant opening hours before reaching a small community.",
  "Consider leaving the car on the mainland for islands with few or narrow roads.",
  "Treat the crossing as part of the experience rather than lost travel time.",
] as const;

const responsibleTravel = [
  "Respect private land, working farms, homes and small harbour communities.",
  "Use established campsites and motorhome facilities where possible; do not assume an attractive pull-off is a suitable overnight place.",
  "Use marked paths, check mountain weather and choose hikes that match your experience.",
  "Keep clear of nesting birds and check local drone restrictions before flying.",
  "Treat kayaking as cold-water travel and use appropriate safety equipment or a qualified guide.",
  "Support local businesses, guides, cafés, museums and food producers.",
  "Park only where it is safe and permitted, and never block ferry queues, roads or private access.",
  "Take all waste with you and leave beaches, trails, viewpoints and ferry areas clean.",
] as const;

const faqs = [
  {
    question: "Where is Helgeland in Norway?",
    answer:
      "Helgeland is the southern part of Northern Norway, in Nordland. It stretches from inland mountains and towns to a long coast of fjords, islands, skerries and communities between Trøndelag and the Bodø region.",
  },
  {
    question: "How many days do you need for the Helgeland Coast?",
    answer:
      "Allow about four or five days for one selected section, around one week for a slower southern or central journey, and roughly 10 to 14 days for a broader route with island detours.",
  },
  {
    question: "Is the Helgeland Coast the same as Kystriksveien?",
    answer:
      "Not exactly. Kystriksveien is the wider coastal road connection between Steinkjer and Bodø. Norwegian Scenic Route Helgelandskysten is a 433-kilometre section between Holm and Godøystraumen, following much of Fv17 with a detour to Torghatten.",
  },
  {
    question: "Can you drive the Helgeland Coast without taking ferries?",
    answer:
      "You can use the E6 and connecting roads to avoid some coastal crossings, but the official scenic route includes six ferries. Avoiding them changes the character and geography of the journey.",
  },
  {
    question: "Do you need to book the ferries?",
    answer:
      "Booking and capacity rules vary between ferries, express boats, vehicles and seasons. Check the specific journey with Reis Nordland or the relevant official operator before departure rather than relying on one rule for the whole coast.",
  },
  {
    question: "Can you visit Helgeland without a car?",
    answer:
      "Yes, for a carefully selected route. The Nordland Line, regional buses, express boats, ferries and bicycles can link towns and islands, but connections may be limited or seasonal and the itinerary should stay simple.",
  },
  {
    question: "Which Helgeland islands are easiest to combine?",
    answer:
      "Herøy and Dønna form a natural central pairing. Farther north, it is usually calmer to choose one main island such as Lovund, Træna or Rødøy and build around current boat connections instead of trying to combine all three.",
  },
  {
    question: "Is Helgeland quieter than Lofoten?",
    answer:
      "Helgeland often feels less concentrated because attractions and communities are spread across a much larger area. Individual places can still be busy in summer, so the difference is geographic rhythm rather than a guarantee of solitude.",
  },
  {
    question: "When is the best time to visit Helgeland?",
    answer:
      "Summer is the easiest season for ferries, island stays, cycling, kayaking and hiking. Spring and autumn can be quieter but have fewer services, while winter is better suited to focused, flexible stays than a full summer-style island route.",
  },
  {
    question: "Can you see the northern lights on Helgeland?",
    answer:
      "Yes, during dark parts of the year when the sky is clear and aurora activity reaches the region. It is never guaranteed, and cloud, coastal weather and limited winter services should shape the plan.",
  },
  {
    question: "Is the Helgeland Coast suitable for campervans?",
    answer:
      "It can work well for campervans if you allow ferry margins and use established camping or motorhome facilities. Never block ferry queues, narrow roads, viewpoints or private access, and check vehicle rules for each crossing.",
  },
  {
    question: "Are the Seven Sisters suitable for beginners?",
    answer:
      "The individual summits are substantial mountain walks and are not automatically beginner routes. Less experienced walkers should consider lower viewpoints or guided options and always match the route to current weather, terrain and personal ability.",
  },
] as const;

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Helgeland Coast", href: "/destinations/helgeland-coast" },
] as const;

const guideIndexItems = [
  { label: "What it is", href: "#first-impression" },
  { label: "Why it feels different", href: "#why-visit" },
  { label: "Understand the coast", href: "#understand-coast" },
  { label: "Travel essentials", href: "#travel-essentials" },
  { label: "Best time to visit", href: "#best-time" },
  { label: "How many days", href: "#how-many-days" },
  { label: "How to travel", href: "#how-to-get-there" },
  { label: "Coastal Route Fv17", href: "#route" },
  { label: "Places", href: "#places" },
  { label: "Travel slowly", href: "#travel-slowly" },
  { label: "Responsible travel", href: "#responsible-travel" },
  { label: "FAQ", href: "#faq" },
] as const;

const faqJsonLd = createFaqJsonLd(faqs);

const relatedGuides = [
  { label: "Helgeland Coast road trip", href: "/routes/helgeland-coast-road-trip" },
  { label: "Norway ferry guide", href: "/guides/norway-ferry-guide-for-tourists" },
  { label: "Driving in Norway", href: "/guides/driving-in-norway-what-visitors-should-know" },
  { label: "Camping rules", href: "/guides/camping-rules-in-norway" },
  { label: "Best time for Northern Norway", href: "/guides/best-time-to-visit-northern-norway" },
  { label: "Northern Norway without a car", href: "/guides/how-to-travel-northern-norway-without-a-car" },
  { label: "Responsible travel", href: "/responsible-travel" },
  { label: "Map", href: "/map" },
] as const;

function SectionHeader({
  eyebrow,
  title,
  intro,
  wideOnDesktop = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  wideOnDesktop?: boolean;
}) {
  return (
    <div className={wideOnDesktop ? "max-w-3xl xl:max-w-4xl" : "max-w-3xl"}>
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
    <>
      <JsonLd
        value={[
          createBreadcrumbListJsonLd(helgelandCoastJsonLdBreadcrumbs),
          createArticleJsonLd({
            headline: helgelandCoastGuideMetadata.title,
            description: helgelandCoastGuideMetadata.description,
            url: helgelandCoastCanonicalPath,
            image: "/images/cards/helgeland.png",
            articleSection: "Destinations",
            dateModified: HELGELAND_GUIDE_REFRESH_DATE,
          }),
          faqJsonLd,
        ]}
      />
      <main className="surface-fjord-shell min-h-screen text-[#f4efe2]">
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <Image
          src="/images/cards/helgeland.png"
          alt="Islands, sea and mountain silhouettes along the Helgeland Coast"
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
              className="rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.76),rgba(8,17,22,0.52))] px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/78 backdrop-blur-md transition-colors hover:border-white/22 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
            >
              Map
            </Link>
          </div>
        </header>

        <div className="relative z-10 mt-auto px-5 pb-14 pt-28 sm:px-8 sm:pb-16 md:px-12 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <DestinationReveal className="max-w-6xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/84">
                Helgeland / Southern Northern Norway / Coastal Route Fv17
              </p>
              <h1 className="max-w-6xl font-serif text-[clamp(3.2rem,9vw,8.7rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#f4efe2]">
                Helgeland Coast Travel Guide
              </h1>
              <p className="mt-7 max-w-3xl text-base font-light leading-[1.75] text-[#f4efe2]/76 sm:text-lg md:text-xl">
                A practical introduction to a wide coastal region of ferries,
                islands, mountain walks and communities best understood slowly.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <AnchorButton href="/routes/helgeland-coast-road-trip">
                  Plan the road trip
                </AnchorButton>
                <AnchorButton href="#understand-coast" variant="secondary">
                  Understand the coast
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
                  className="rounded-[1rem] border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.72),rgba(8,17,22,0.5))] px-4 py-4 backdrop-blur-sm"
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
                    className="inline-flex items-center rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.72),rgba(8,17,22,0.5))] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/72 transition-colors hover:border-[#d8c9a7]/30 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
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
                    className="inline-flex items-center rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.72),rgba(8,17,22,0.5))] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/72 transition-colors hover:border-[#d8c9a7]/30 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
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
                eyebrow="01 / Direct answer"
                title="What is the Helgeland Coast?"
              />
            </DestinationReveal>
            <DestinationReveal
              delay={0.08}
              className="space-y-6 text-base font-light leading-[1.9] text-[#f4efe2]/70 sm:text-lg"
            >
              <p>
                Helgeland is the southern part of Northern Norway, in Nordland.
                The region reaches from fjords, forests and inland mountains to
                a long coast of islands, skerries, farming landscapes and small
                communities, with Brønnøysund, Sandnessjøen, Mosjøen and Mo i
                Rana as its four regional cities.
              </p>
              <p>
                Visit for a journey shaped by ferries, Fv17, island stays,
                mountain walks and coastal culture rather than one compact set
                of sights. Compared with <Link href="/destinations/lofoten-islands" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Lofoten</Link> or <Link href="/destinations/senja" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Senja</Link>, Helgeland is more dispersed and asks for more transport planning, which is exactly why it works so well for slow travel.
              </p>
            </DestinationReveal>
          </section>

          <DestinationReveal
            delay={0.04}
            className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.02] shadow-[0_34px_110px_rgba(0,0,0,0.34)]"
          >
            <div className="relative aspect-[16/9] min-h-[260px] sm:min-h-[360px] lg:min-h-[520px]">
              <Image
                src="/images/cards/helgeland.png"
                alt="A broad island landscape under low evening light on the Helgeland Coast"
                fill
                          sizes="(min-width: 1280px) 380px, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.08)_0%,rgba(2,5,8,0.2)_54%,rgba(2,5,8,0.62)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(216,201,167,0.08),rgba(216,201,167,0)_48%)]" />
            </div>
          </DestinationReveal>

          <section id="why-visit" className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="02 / Character"
                title="Why Helgeland feels different"
                intro="The coast is less one concentrated attraction than a sequence of landscapes, crossings and communities."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {whyHelgelandFeelsDifferent.map((item, index) => (
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

          <section id="understand-coast" className="scroll-mt-24 border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="03 / Geography"
                title="Understand the coast"
                intro="A practical way to read Helgeland is as four travel zones. These are planning shortcuts, not formal administrative regions."
              />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {travelZones.map((zone, index) => (
                <DestinationReveal key={zone.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-7 sm:p-8">
                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/68">
                      {zone.label}
                    </p>
                    <h3 className="mt-5 font-serif text-3xl leading-[1.02] tracking-[-0.035em] text-[#f4efe2]">
                      {zone.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.82] text-[#f4efe2]/64 sm:text-base">
                      {zone.text}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
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
                Timetables, vessel capacity and seasonal connections can
                change. Always verify the final journey with official transport
                providers before departure, using tools such as <Link href="https://entur.no" target="_blank" rel="noreferrer" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Entur</Link> and <Link href="https://www.reisnordland.no" target="_blank" rel="noreferrer" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Reis Nordland</Link>.
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
            <div className="mt-12 grid gap-5 md:grid-cols-3">
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

          <section id="how-to-get-there" className="grid gap-10 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <DestinationReveal>
              <SectionHeader
                eyebrow="07 / Transport"
                title="How to travel through Helgeland"
                intro="Choose the transport around the part of the region you want to understand, not the other way around."
              />
            </DestinationReveal>
            <DestinationReveal delay={0.08}>
              <dl className="grid gap-4 sm:grid-cols-2">
                {travelModes.map((mode) => (
                  <div
                    key={mode.title}
                    className="rounded-[1rem] border border-white/8 bg-white/[0.025] p-5"
                  >
                    <dt className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {mode.title}
                    </dt>
                    <dd className="mt-3 text-sm font-light leading-[1.8] text-[#f4efe2]/66 sm:text-base">
                      {mode.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </DestinationReveal>
          </section>

          <section id="route" className="scroll-mt-24 border-t border-white/8 pt-16 sm:pt-20">
            <span id="scenic-route" className="block scroll-mt-24" aria-hidden="true" />
            <span id="ferries" className="block scroll-mt-24" aria-hidden="true" />
            <span
              id="official-planners"
              className="block scroll-mt-24"
              aria-hidden="true"
            />
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
                  and includes six ferry crossings. It follows much of Fv17 and
                  works as a slower, more experience-led alternative to the E6.
                </p>
                <p className="mt-6 text-base font-light leading-[1.9] text-[#f4efe2]/70 sm:text-lg">
                  The ferries slow the trip down in the best way. They also make
                  planning real: use the <Link href="/routes/helgeland-coast-road-trip" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Helgeland Coast road-trip guide</Link> for route rhythm and the <Link href="/guides/norway-ferry-guide-for-tourists" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">Norway ferry guide</Link> for wider planning context.
                </p>
                <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/60 sm:text-base">
                  Confirm current timetables, capacity and seasonal connections
                  with official operators before driving to the quay.
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
                wideOnDesktop
              />
            </DestinationReveal>
            <HelgelandStackedPlaces places={places} />
          </section>

          <section id="travel-slowly" className="scroll-mt-24 border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionHeader
                eyebrow="10 / Slow travel"
                title="Travel slowly through Helgeland"
                intro="Leave room for crossings, weather and communities. This one-week framework is a starting point, not a schedule to complete at any cost."
              />
            </DestinationReveal>
            <p className="mt-10 text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
              A flexible one-week framework
            </p>
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
            <DestinationReveal className="mt-10 rounded-[1.25rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.72),rgba(8,17,22,0.88))] p-7 sm:p-9">
              <h3 className="font-serif text-3xl tracking-[-0.035em] text-[#f4efe2]">
                Keep the route breathable
              </h3>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {slowTravelPrinciples.map((item) => (
                  <li
                    key={item}
                    className="border-l border-[#d8c9a7]/30 pl-4 text-sm font-light leading-[1.8] text-[#f4efe2]/66 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <AnchorButton href="/routes/helgeland-coast-road-trip">
                  Open the road-trip guide
                </AnchorButton>
              </div>
            </DestinationReveal>
          </section>

          <section className="grid gap-10 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <DestinationReveal>
              <SectionHeader
                eyebrow="11 / Experiences"
                title="Signature experiences"
                intro="Choose a small number and leave enough time for the journey between them."
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
                    className="rounded-[1rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.78),rgba(8,17,22,0.92))] px-5 py-4 text-sm font-light leading-[1.78] text-[#f4efe2]/68 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/60 sm:text-base">
                Read the <Link href="/guides/camping-rules-in-norway" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">camping rules for Norway</Link> and the wider <Link href="/responsible-travel" className="text-[#d8c9a7] underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]">responsible travel guide</Link> before choosing overnight stops or outdoor activities.
              </p>
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
                    <span aria-hidden="true" className="text-lg font-light text-[#d8c9a7]/72 transition-transform group-open:rotate-45">
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
                  intro="Move from regional understanding into route, ferry, driving, camping, seasonal and no-car planning."
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

          <section className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <GuideMetaFooter
                lastUpdated={HELGELAND_GUIDE_LAST_UPDATED}
                sources={guideSourceSets.destinationHelgeland}
              />
            </DestinationReveal>
          </section>
        </div>
      </div>
      </main>
    </>
  );
}
