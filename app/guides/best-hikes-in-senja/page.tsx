import "leaflet/dist/leaflet.css";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  Backpack,
  Clock3,
  CloudSun,
  ExternalLink as ExternalLinkIcon,
  Footprints,
  MapPin,
  Mountain,
  ParkingCircle,
  Route,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

import { SenjaHikesMap } from "@/src/components/guides/senja/SenjaHikesMap";
import { AnswerBlock } from "@/src/components/shared/AnswerBlock";
import { TrustBox } from "@/src/components/shared/TrustBox";
import { createPageMetadata } from "@/src/lib/metadata";
import {
  JsonLd,
  createArticleJsonLd,
  createBreadcrumbListJsonLd,
  createFaqJsonLd,
} from "@/src/lib/seo/jsonLd";

const CANONICAL_PATH = "/guides/best-hikes-in-senja";
const HERO_IMAGE =
  "/images/guides/best-hikes-in-senja/segla-from-hesten.jpg";

const routeLinks = {
  hesten:
    "https://ut.no/turforslag/112336088/topptur-tl-hesten-og-stavelitippen-i-fjordgard-med-videre-muligheter",
  segla: "https://ut.no/turforslag/1110112/segla-639-moh",
  husfjellet: "https://ut.no/turforslag/111656037/husfjellet",
  barden: "https://ut.no/turforslag/118001562",
  grytetippenKeipen:
    "https://www.outdooractive.com/en/route/hiking-trail/senja/grytetippen/56037996/",
  sukkertoppen:
    "https://ut.no/turforslag/118544/sukkertoppen-456-moh",
  anderdalen: "https://ut.no/turforslag/1112155078",
  dronningruta:
    "https://www.visitsenja.no/en/vandring/fotturer-s%C3%B8r-Senja",
  leirpollfjellet:
    "https://ut.no/turforslag/111738394/leirpollfjellet",
  knuten:
    "https://ut.no/turforslag/117801797/knuten-5-turer-med-turbo",
} as const;

type Hike = {
  name: string;
  distance: string;
  time: string;
  elevation: string;
  difficulty: string;
  start: string;
  bestFor: string;
  source: string;
  sourceLabel: string;
};

const hikes: readonly Hike[] = [
  {
    name: "Hesten and Stavelitippen",
    distance: "About 4.5 km loop",
    time: "About 3 hr",
    elevation: "About 489 m",
    difficulty: "Demanding",
    start: "Fjordgård / Seglavegen",
    bestFor: "The classic view towards Segla",
    source: routeLinks.hesten,
    sourceLabel: "UT.no route",
  },
  {
    name: "Segla",
    distance: "About 4.6 km return",
    time: "About 3 hr 30 min",
    elevation: "About 588 m",
    difficulty: "Demanding",
    start: "Fjordgård school area",
    bestFor: "Climbing the iconic peak itself",
    source: routeLinks.segla,
    sourceLabel: "UT.no route",
  },
  {
    name: "Husfjellet",
    distance: "About 8.1 km return",
    time: "About 4 hr",
    elevation: "About 645 m",
    difficulty: "Moderate",
    start: "Skaland",
    bestFor: "A broad Bergsfjorden panorama",
    source: routeLinks.husfjellet,
    sourceLabel: "UT.no route",
  },
  {
    name: "Barden",
    distance: "About 5.9 km return",
    time: "About 5 hr",
    elevation: "About 609 m",
    difficulty: "Demanding",
    start: "Fjordgård; alternatives exist",
    bestFor: "A quieter ridge and two-fjord view",
    source: routeLinks.barden,
    sourceLabel: "UT.no route",
  },
  {
    name: "Grytetippen and Keipen",
    distance: "Roughly 8–10 km, route dependent",
    time: "Allow about 5–7 hr",
    elevation: "820 m+; more for both peaks",
    difficulty: "Demanding",
    start: "Mefjordeidet / road 862 area",
    bestFor: "Two summits and a major mountain day",
    source: routeLinks.grytetippenKeipen,
    sourceLabel: "Current route overview",
  },
  {
    name: "Sukkertoppen",
    distance: "About 4 km return",
    time: "About 3 hr",
    elevation: "About 430 m",
    difficulty: "Demanding",
    start: "Hamn / Nikkelverket",
    bestFor: "Steep coastal views over Bergsøyene",
    source: routeLinks.sukkertoppen,
    sourceLabel: "UT.no route",
  },
  {
    name: "Ånderdalen nature trail",
    distance: "About 4–4.5 km loop",
    time: "Roughly 2–4 hr",
    elevation: "About 111 m on the longer loop",
    difficulty: "Family-friendly to moderate",
    start: "Tranøybotn entrance",
    bestFor: "Forest, water and national-park landscape",
    source: routeLinks.anderdalen,
    sourceLabel: "UT.no route",
  },
  {
    name: "Dronningruta / Dronningstien",
    distance: "About 8 km one way",
    time: "Allow about 3–4 hr one way",
    elevation: "Not consistently published",
    difficulty: "Easy to moderate",
    start: "Hofsøy or Ryvoll",
    bestFor: "Gentle coastal scenery on South Senja",
    source: routeLinks.dronningruta,
    sourceLabel: "Visit Senja route",
  },
  {
    name: "Leirpollfjellet",
    distance: "About 3.6 km return",
    time: "About 1 hr",
    elevation: "About 165 m",
    difficulty: "Moderate",
    start: "Lanesåsen, south of Stonglandseidet",
    bestFor: "A short walk with a large island view",
    source: routeLinks.leirpollfjellet,
    sourceLabel: "UT.no route",
  },
  {
    name: "Knuten in Mefjordvær",
    distance: "About 0.6 km one way",
    time: "About 1 hr",
    elevation: "About 71 m",
    difficulty: "Easy",
    start: "Mefjordvær football ground",
    bestFor: "A short viewpoint and midnight sun",
    source: routeLinks.knuten,
    sourceLabel: "UT.no route",
  },
] as const;

const coreHikes = [
  {
    id: "hike-hesten",
    index: "01",
    title: "Hesten",
    facts: "~4.5 km loop · ~3 hr · ~489 m · demanding",
    text: "Choose Hesten when the view of Segla is the goal. The route rises from the Seglavegen side of Fjordgård through wet ground, rock and steeper upper terrain; the combined UT.no loop also visits Stavelitippen. The ridge has serious drops, so keep well back from edges and turn around when cloud, wind, snow or slippery rock removes your margin.",
    source: routeLinks.hesten,
  },
  {
    id: "hike-segla",
    index: "02",
    title: "Segla",
    facts: "~4.6 km return · ~3 hr 30 min · ~588 m · demanding",
    text: "Segla is the climb to the landmark itself, not the route for the familiar profile photograph. From the school side of Fjordgård, the final ridge becomes steep, loose and exposed. Rockfall from hikers above is a real concern. Choose it only with stable weather, sure footing and comfort in steep terrain; otherwise stop at the lower viewpoint or choose Hesten on another day.",
    source: routeLinks.segla,
  },
  {
    id: "hike-husfjellet",
    index: "03",
    title: "Husfjellet",
    facts: "~8.1 km return · ~4 hr · ~645 m · moderate",
    text: "Husfjellet is the most approachable of the larger mountain days in this guide, with a clear trail from marked parking at Skaland and a steady climb through Sommardalen. It still covers real distance, wet ground and an exposed final viewpoint. It suits walkers who want a wide Bergsfjorden panorama without Segla’s steep finish, but not anyone unprepared for a four-hour mountain outing.",
    source: routeLinks.husfjellet,
  },
  {
    id: "hike-barden",
    index: "04",
    title: "Barden",
    facts: "~5.9 km return · ~5 hr · ~609 m · demanding",
    text: "Barden gives you space, a high plateau and views across Mefjorden and Ørnfjorden. This comparison uses the Fjordgård route; the Mefjordeidet alternative has different distance and ascent figures. Expect boggy ground followed by a steeper upper section. It is often quieter than Hesten, but that does not make it easier or less weather-sensitive.",
    source: routeLinks.barden,
  },
  {
    id: "hike-grytetippen-keipen",
    index: "05",
    title: "Grytetippen and Keipen",
    facts: "roughly 8–10 km · 5–7 hr · 820 m+ · demanding",
    text: "This is a substantial two-summit day rather than a quick extension. Route totals vary with the start and whether you climb one or both peaks; published descriptions place the start around Mefjordeidet or road 862. Expect sustained ascent, rocky ground and exposed summit edges. Carry a proper route map and choose one peak when time, weather or energy is already narrowing the day.",
    source: routeLinks.grytetippenKeipen,
  },
  {
    id: "hike-sukkertoppen",
    index: "06",
    title: "Sukkertoppen",
    facts: "~4 km return · ~3 hr · ~430 m · demanding",
    text: "Sukkertoppen is short on the map but steep in practice. Routes begin near Hamn or Nikkelverket and meet before the final climb, where a chain assists on the steepest section. The reward is an open view over Bergsfjorden and Bergsøyene. Avoid the upper section in strong wind, poor visibility or when wet rock makes the descent uncertain.",
    source: routeLinks.sukkertoppen,
  },
] as const;

const easierWalks = [
  {
    id: "walk-anderdalen",
    title: "Ånderdalen nature trail",
    meta: "About 4–4.5 km · 2–4 hr · family-friendly to moderate",
    text: "A gentler introduction to Senja through old pine forest, water and a partly accessible gravel trail. The longer Simlestien loop adds wetter, less even ground. Check current national-park notices, including seasonal nature protections, before setting out.",
    source: routeLinks.anderdalen,
  },
  {
    id: "walk-dronningruta",
    title: "Dronningruta / Dronningstien",
    meta: "About 8 km one way · allow 3–4 hr · easy to moderate",
    text: "Visit Senja currently describes Dronningruta from Hofsøy to Ryvoll via Stongodden as roughly 8 km one way. It follows low coastal terrain, beaches and rock slabs, with a wetter inland return option. Arrange the return before starting and do not confuse it with similarly named hikes elsewhere in Norway.",
    source: routeLinks.dronningruta,
  },
  {
    id: "walk-leirpollfjellet",
    title: "Leirpollfjellet",
    meta: "About 3.6 km return · 1 hr · 165 m · moderate",
    text: "This short South Senja walk starts around Lanesåsen, about two kilometres south of Stonglandseidet. The trail is relatively gentle and quickly opens views towards the islands, but wet ground and wind still matter. UT.no and Visit Senja publish slightly different distance conventions, so check the route you intend to follow.",
    source: routeLinks.leirpollfjellet,
  },
  {
    id: "walk-knuten",
    title: "Knuten in Mefjordvær",
    meta: "About 1 hr · easy · 71 m ascent on the direct route",
    text: "Knuten is the compact viewpoint option: a marked climb from the old football ground with a wide look over Mefjordvær and the sea. It can be linked with the wider village trail network. Even here, exposed coastal wind and slick ground can turn an easy classification into an uncomfortable outing.",
    source: routeLinks.knuten,
  },
] as const;

const faqItems = [
  {
    question: "What is the best hike in Senja?",
    answer:
      "Hesten is the best-known choice for the classic view towards Segla. Husfjellet is a strong alternative for a broader coastal panorama and a friendlier trail, while the best choice on any day still depends on weather, ground conditions and experience.",
  },
  {
    question: "Should I hike Hesten or Segla?",
    answer:
      "Choose Hesten to see and photograph Segla. Choose Segla to climb the mountain itself. Segla has a steeper, looser and more exposed finish, and neither route should be treated as a simple photo walk.",
  },
  {
    question: "Are the hikes in Senja suitable for beginners?",
    answer:
      "Some are. Knuten, sections of the Ånderdalen trail, Dronningruta and Leirpollfjellet are the most approachable options here. Short distance does not remove wind, wet ground, cold or exposure, so beginners should still make a conservative plan.",
  },
  {
    question: "When is the best time to hike in Senja?",
    answer:
      "The usual high-mountain hiking window is from roughly mid-June into September, but snow and trail conditions vary each year. August and September can be excellent, yet daylight, temperature and weather margins become smaller.",
  },
  {
    question: "Can I hike in Senja without a car?",
    answer:
      "It is possible to reach some Senja communities by bus, but services and useful same-day connections are limited. Check Entur and the current local timetable before travel, and do not assume a bus will align with a mountain day or late return.",
  },
  {
    question: "Where can I park for Hesten and Segla?",
    answer:
      "Use the marked public parking areas in Fjordgård and follow the signs for the route you intend to walk. Parking arrangements, summer overflow areas and charges can change, so confirm the signs on arrival and never use private driveways.",
  },
  {
    question: "Is Breitinden safe to hike without a guide?",
    answer:
      "Breitinden is not a standard tourist hike. Current routes can be steep, exposed and very demanding, so visitors without suitable mountain experience should use a certified local guide and obtain current local advice.",
  },
  {
    question: "Do I need special equipment for hiking in Senja?",
    answer:
      "For mountain routes, carry supportive hiking footwear, waterproof and windproof layers, extra warmth, food, water, offline navigation, a charged phone and first-aid supplies. Winter and avalanche terrain require different skills and equipment and are outside this summer guide.",
  },
] as const;

const sources = [
  {
    label: "UT.no: current route descriptions",
    href: "https://ut.no/utforsker/omrade/1223/senja/turforslag",
  },
  {
    label: "Visit Senja: hiking in the Senja region",
    href: "https://www.visitsenja.no/en/travelstyle/biking-and-hiking",
  },
  {
    label: "Senja municipality: outdoor-use guidance",
    href: "https://www.senja.kommune.no/aktuelt/ferietid-i-friluft-regler-og-rad-for-bruk-av-friluftsomrader.8931.aspx",
  },
  {
    label: "Northern Norway: 16 hikes on Senja",
    href: "https://nordnorge.com/en/artikkel/16-hikes-on-senja-island-offer-endless-beauty/",
  },
  {
    label: "Varsom: current hazard forecasts",
    href: "https://www.varsom.no/en/",
  },
  {
    label: "OpenStreetMap",
    href: "https://www.openstreetmap.org/copyright",
  },
] as const;

const photoCredits = [
  {
    subject: "Segla seen from the Hesten ridge (hero)",
    source:
      "https://commons.wikimedia.org/wiki/File:View_towards_Segla_from_ridge_at_Hesten_in_Senja,_Troms_og_Finnmark,_Norway,_2022_August.jpg",
    crop: "Resized local derivative; responsive cover crop in the hero.",
  },
  {
    subject: "Ridge panorama between Segla and Hesten",
    source:
      "https://commons.wikimedia.org/wiki/File:View_from_a_ridge_between_Segla_and_Hesten,_Senja,_Norway,_2014_August.jpg",
    crop: "Resized local derivative; displayed at its full panoramic ratio.",
  },
  {
    subject: "Keipen and Grytetippen seen from Hesten",
    source:
      "https://commons.wikimedia.org/wiki/File:Keipen_and_Grytetippen_from_Hesten_in_Senja,_Troms_og_Finnmark,_Norway,_2022_August.jpg",
    crop: "Resized local derivative; mild responsive cover crop.",
  },
  {
    subject: "Tungeneset and Steinfjorden in April",
    source:
      "https://commons.wikimedia.org/wiki/File:Coast_of_Tungeneset_and_Steinfjorden_in_Senja,_Troms,_Norway,_2017_April_-_2.jpg",
    crop: "Resized local derivative; displayed at its full wide ratio.",
  },
] as const;

export const metadata = createPageMetadata({
  title: "Best Hikes in Senja, Norway: 10 Scenic Trails",
  description:
    "Compare the best hikes in Senja, including Hesten, Segla, Husfjellet and easier walks, with trail times, difficulty, maps and safety advice.",
  canonical: CANONICAL_PATH,
  type: "article",
  image: {
    url: HERO_IMAGE,
    alt: "Segla rising between Ørnfjorden and Mefjorden, seen from the Hesten ridge on Senja",
    width: 1920,
    height: 1039,
  },
});

function SourceLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 underline decoration-[#d8c9a7]/30 underline-offset-4 transition-colors hover:text-[#f4efe2] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60 ${className}`}
    >
      <span>{children}</span>
      <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

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
      <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#c6a15b]/78">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-serif text-[clamp(2.55rem,6vw,5rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[#f4efe2]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-6 max-w-2xl text-base font-light leading-[1.88] text-[#f4efe2]/68 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export default function BestHikesInSenjaPage() {
  return (
    <>
      <JsonLd
        value={[
          createBreadcrumbListJsonLd([
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Best Hikes in Senja", href: CANONICAL_PATH },
          ]),
          createArticleJsonLd({
            headline: "Best Hikes in Senja, Norway: 10 Scenic Trails",
            description:
              "Compare ten hikes and walks in Senja, including Hesten, Segla, Husfjellet and easier coastal or forest alternatives.",
            url: CANONICAL_PATH,
            image: HERO_IMAGE,
            articleSection: "Senja Hiking",
            datePublished: "2026-07-31",
            dateModified: "2026-07-31",
          }),
          createFaqJsonLd(faqItems),
        ]}
      />

      <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#071014_0%,#0a171b_48%,#071014_100%)] text-[#f4efe2]">
        <section className="relative isolate min-h-[48rem] overflow-hidden px-5 pb-16 pt-8 sm:min-h-[53rem] sm:px-8 sm:pb-20 sm:pt-10 md:px-12 lg:min-h-[57rem]">
          <Image
            src={HERO_IMAGE}
            alt="Segla rising between Ørnfjorden and Mefjorden, seen from the Hesten ridge on Senja"
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover object-[58%_center] sm:object-[center_48%]"
          />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(4,9,12,0.93)_0%,rgba(4,9,12,0.58)_48%,rgba(4,9,12,0.12)_100%),linear-gradient(0deg,rgba(4,9,12,0.98)_0%,rgba(4,9,12,0.12)_58%,rgba(4,9,12,0.36)_100%)]" />
          <div className="pointer-events-none absolute -bottom-40 right-[-10rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-[#315b61]/20 blur-[110px]" />

          <div className="relative mx-auto max-w-7xl">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-[#071014]/45 px-4 py-2 text-[0.61rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 backdrop-blur-md transition-colors hover:border-white/25 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/65"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Back to guides
            </Link>

            <div className="flex min-h-[40rem] max-w-4xl flex-col justify-end pt-28 sm:min-h-[44rem] sm:pt-36 lg:min-h-[48rem]">
              <p className="text-[0.63rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/88">
                Senja field guide · 10 routes compared
              </p>
              <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.6rem,9.5vw,7.75rem)] font-normal leading-[0.84] tracking-[-0.068em] text-[#f4efe2]">
                Best Hikes in Senja, Norway
              </h1>
              <p className="mt-7 max-w-2xl text-base font-light leading-[1.82] text-[#f4efe2]/78 sm:text-lg md:text-xl">
                Senja combines sharp coastal peaks, deep fjords and short
                approaches with terrain that can become demanding very quickly.
                Compare the island&apos;s best-known hikes, understand Hesten versus
                Segla, and choose a route that fits your time and experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/62">
                <span>Updated 31 July 2026</span>
                <span>1–7 hour outings</span>
                <span>Easy to demanding</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#compare"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4efe2] px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#0b1518] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071014]"
                >
                  Compare hikes
                  <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href="#senja-hiking-map"
                  className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-[#071014]/45 px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#f4efe2] backdrop-blur-md transition-colors hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/65"
                >
                  Open route map
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 px-5 py-14 sm:px-8 sm:py-20 md:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <AnswerBlock
              label="The short answer"
              title="Match the hike to the view you actually want."
              summary="The famous mountain and the famous photograph are not the same outing. Start with the experience, then let conditions decide whether the mountain is sensible that day."
              bullets={[
                "Choose Hesten for the famous view towards Segla.",
                "Choose Segla to climb the iconic mountain itself.",
                "Choose Husfjellet for an accessible trail with a large coastal panorama.",
                "Choose Barden for a quieter mountain experience.",
                "Choose Ånderdalen or Knuten for an easier walk.",
              ]}
            />

            <div className="mt-10 flex flex-col gap-4 border-l border-[#d8c9a7]/22 pl-5 text-sm font-light leading-[1.8] text-[#f4efe2]/64 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:pl-6">
              <p className="max-w-3xl">
                Distances, ascent and times are approximate. Different starts,
                return choices and tracking methods produce different totals;
                always open the current route description before departure.
              </p>
              <Link
                href="/destinations/senja"
                className="shrink-0 text-[#d8c9a7] underline decoration-[#d8c9a7]/30 underline-offset-4 transition-colors hover:text-[#f4efe2] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60"
              >
                Planning a wider trip? Read the complete Senja travel guide.
              </Link>
            </div>
          </div>
        </section>

        <section
          id="compare"
          className="scroll-mt-24 border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Route comparison"
              title="Ten Senja hikes at a glance"
              intro="Use this as a first filter, not a promise of conditions. The classification shown follows the cited route where possible, while weather can move every hike into a harder category."
            />

            <div className="mt-12 hidden overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/10 lg:block">
              <table className="w-full table-fixed border-collapse text-left">
                <caption className="sr-only">
                  Comparison of ten hikes and walks in Senja, Norway
                </caption>
                <thead className="bg-white/[0.035] text-[0.57rem] font-semibold uppercase tracking-[0.17em] text-[#d8c9a7]/78">
                  <tr>
                    <th scope="col" className="w-[16%] px-5 py-4">Hike</th>
                    <th scope="col" className="w-[11%] px-4 py-4">Distance</th>
                    <th scope="col" className="w-[9%] px-4 py-4">Time</th>
                    <th scope="col" className="w-[9%] px-4 py-4">Ascent</th>
                    <th scope="col" className="w-[10%] px-4 py-4">Level</th>
                    <th scope="col" className="w-[15%] px-4 py-4">Start area</th>
                    <th scope="col" className="w-[18%] px-4 py-4">Best for</th>
                    <th scope="col" className="w-[12%] px-4 py-4">Current info</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8 text-sm font-light leading-[1.65] text-[#f4efe2]/68">
                  {hikes.map((hike) => (
                    <tr key={hike.name} className="align-top transition-colors hover:bg-white/[0.025]">
                      <th scope="row" className="px-5 py-5 font-serif text-lg font-normal leading-[1.2] text-[#f4efe2]">
                        {hike.name}
                      </th>
                      <td className="px-4 py-5">{hike.distance}</td>
                      <td className="px-4 py-5">{hike.time}</td>
                      <td className="px-4 py-5">{hike.elevation}</td>
                      <td className="px-4 py-5">{hike.difficulty}</td>
                      <td className="px-4 py-5">{hike.start}</td>
                      <td className="px-4 py-5">{hike.bestFor}</td>
                      <td className="px-4 py-5">
                        <SourceLink href={hike.source} className="text-[#d8c9a7]">
                          {hike.sourceLabel}
                        </SourceLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid gap-4 lg:hidden">
              {hikes.map((hike, index) => (
                <article
                  key={hike.name}
                  className="rounded-[1.15rem] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] p-6"
                >
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[#c6a15b]/78">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-[1.85rem] font-normal leading-[1] tracking-[-0.035em] text-[#f4efe2]">
                    {hike.name}
                  </h3>
                  <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 text-sm font-light leading-[1.55] text-[#f4efe2]/68">
                    <div>
                      <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.19em] text-[#d8c9a7]/64">Distance</dt>
                      <dd className="mt-1.5">{hike.distance}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.19em] text-[#d8c9a7]/64">Time</dt>
                      <dd className="mt-1.5">{hike.time}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.19em] text-[#d8c9a7]/64">Ascent</dt>
                      <dd className="mt-1.5">{hike.elevation}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.19em] text-[#d8c9a7]/64">Level</dt>
                      <dd className="mt-1.5">{hike.difficulty}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.19em] text-[#d8c9a7]/64">Start area</dt>
                      <dd className="mt-1.5">{hike.start}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-[0.56rem] font-semibold uppercase tracking-[0.19em] text-[#d8c9a7]/64">Best for</dt>
                      <dd className="mt-1.5">{hike.bestFor}</dd>
                    </div>
                  </dl>
                  <SourceLink href={hike.source} className="mt-6 text-sm text-[#d8c9a7]">
                    {hike.sourceLabel}
                  </SourceLink>
                </article>
              ))}
            </div>

            <p className="mt-7 max-w-4xl text-sm font-light leading-[1.8] text-[#f4efe2]/54">
              The local source calls the South Senja coastal route
              Dronningruta; it is also referred to as Dronningstien. Its current
              description is about 8 km one way, not a fixed 8.6 km loop. For
              Grytetippen and Keipen, totals change significantly with the start
              and whether one or both summits are included.
            </p>
          </div>
        </section>

        <section className="border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="The essential choice"
              title="Hesten or Segla: which hike should you choose?"
              intro="Choose the mountain that matches your purpose. The viewpoint and the summit create two very different days, even though both are reached from Fjordgård."
            />

            <figure className="mt-12 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#050b0d]">
              <Image
                src="/images/guides/best-hikes-in-senja/segla-hesten-panorama.jpg"
                alt="Panorama from the ridge between Segla and Hesten with Øyfjorden to the left and Mefjorden to the right"
                width={1920}
                height={617}
                sizes="(min-width: 1280px) 1200px, (min-width: 768px) 94vw, 100vw"
                className="h-auto w-full object-contain"
              />
              <figcaption className="border-t border-white/8 px-5 py-4 text-xs font-light leading-[1.7] text-[#f4efe2]/54 sm:px-6">
                The two-fjord panorama between Segla and Hesten. Hesten gives
                the familiar view towards Segla; standing on Segla removes that
                profile from the scene.
              </figcaption>
            </figure>

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <article className="border-t border-[#d8c9a7]/26 pt-7">
                <p className="text-[0.59rem] font-semibold uppercase tracking-[0.28em] text-[#c6a15b]/78">Choose Hesten when</p>
                <h3 className="mt-4 font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-normal leading-[0.94] tracking-[-0.045em]">The view is the destination.</h3>
                <p className="mt-5 text-base font-light leading-[1.86] text-[#f4efe2]/67">
                  Hesten is the route most visitors mean when they picture
                  Segla rising like a sail above the fjord. The upper ridge is
                  still steep and edged by serious drops. It is a mountain hike,
                  not an easy walk to a camera position.
                </p>
              </article>
              <article className="border-t border-[#d8c9a7]/26 pt-7">
                <p className="text-[0.59rem] font-semibold uppercase tracking-[0.28em] text-[#c6a15b]/78">Choose Segla when</p>
                <h3 className="mt-4 font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-normal leading-[0.94] tracking-[-0.045em]">You want the steeper summit.</h3>
                <p className="mt-5 text-base font-light leading-[1.86] text-[#f4efe2]/67">
                  Segla climbs the icon itself. The finish is steeper, looser
                  and more exposed than Hesten, with rockfall potential from
                  people above. Start, parking and current trail notices must be
                  checked separately for the exact route.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:gap-16">
              <SectionHeader
                eyebrow="The six mountain days"
                title="Choose the character of the climb"
                intro="These are the main mountain hikes in the guide. Every time is an estimate without long stops, and every summit is optional when wind, visibility or footing deteriorates."
              />
              <figure className="relative aspect-[3/2] overflow-hidden rounded-[1.35rem] border border-white/10">
                <Image
                  src="/images/guides/best-hikes-in-senja/keipen-grytetippen.jpg"
                  alt="Keipen and Grytetippen above Ørnfjorden, viewed from Hesten on Senja"
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 768px) 94vw, 100vw"
                  className="object-cover object-[center_48%]"
                />
              </figure>
            </div>

            <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
              {coreHikes.map((hike) => (
                <article key={hike.id} id={hike.id} className="scroll-mt-24 border-t border-white/12 pt-6">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#c6a15b]/75">{hike.index}</p>
                  <h3 className="mt-4 font-serif text-[2.35rem] font-normal leading-[0.98] tracking-[-0.045em] text-[#f4efe2]">{hike.title}</h3>
                  <p className="mt-4 text-[0.61rem] font-medium uppercase tracking-[0.18em] text-[#d8c9a7]/66">{hike.facts}</p>
                  <p className="mt-5 text-sm font-light leading-[1.86] text-[#f4efe2]/64 sm:text-base">{hike.text}</p>
                  <SourceLink href={hike.source} className="mt-5 text-sm text-[#d8c9a7]">Check the current route</SourceLink>
                </article>
              ))}
            </div>

            <TrustBox
              label="Advanced route warning"
              title="Breitinden is not a standard tourist hike"
              summary="Breitinden is Senja island's highest mountain, but current approaches can be steep, exposed and very demanding. It should not be presented alongside ordinary self-guided day walks."
              safetyNote="Use a certified local guide unless you already have the route-finding, scrambling and exposure experience the current conditions require. Obtain current local information; this guide intentionally gives no step-by-step navigation."
              sources={[
                { label: "Visit Senja hiking overview", href: "https://www.visitsenja.no/en/travelstyle/biking-and-hiking" },
                { label: "UT.no Breitinden route", href: "https://ut.no/turforslag/1112122" },
              ]}
              lastUpdated="31 July 2026"
              className="mt-16 border-[#c6a15b]/22 bg-[linear-gradient(145deg,rgba(198,161,91,0.08),rgba(255,255,255,0.012))]"
            />
          </div>
        </section>

        <section className="border-t border-white/8 bg-[#d8c9a7] px-5 py-16 text-[#132024] sm:px-8 sm:py-20 md:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#5f583f]">Lower ground, larger margins</p>
              <h2 className="mt-5 font-serif text-[clamp(2.55rem,6vw,5rem)] font-normal leading-[0.92] tracking-[-0.055em]">Easier hikes and walks in Senja</h2>
              <p className="mt-6 max-w-2xl text-base font-light leading-[1.88] text-[#1b2a2e]/72 sm:text-lg">
                Easier is relative. Wet bog, coastal wind, cold rain and slippery
                rock can make a short route demanding, even when the map looks
                gentle and the elevation number is small.
              </p>
            </div>

            <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
              {easierWalks.map((walk) => (
                <article key={walk.id} id={walk.id} className="scroll-mt-24 border-t border-[#132024]/20 pt-6">
                  <div className="flex items-start gap-4">
                    <Footprints className="mt-1 h-5 w-5 shrink-0 text-[#675b3e]" aria-hidden="true" />
                    <div>
                      <h3 className="font-serif text-[2.1rem] font-normal leading-[1] tracking-[-0.04em]">{walk.title}</h3>
                      <p className="mt-3 text-[0.61rem] font-semibold uppercase tracking-[0.18em] text-[#675b3e]">{walk.meta}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm font-light leading-[1.86] text-[#1b2a2e]/72 sm:text-base">{walk.text}</p>
                  <SourceLink href={walk.source} className="mt-5 text-sm text-[#403a2b] decoration-[#403a2b]/30 hover:text-black focus-visible:ring-[#403a2b]/60">Check the current route</SourceLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="senja-hiking-map"
          className="scroll-mt-24 border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Orientation"
              title="Senja hiking map"
              intro="The map shows the whole island rather than zooming into one summit. Markers are hiking areas and approximate starts, not navigation tracks; use the linked route description and an offline topographic map on the trail."
            />

            <div className="mt-12">
              <SenjaHikesMap />
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {hikes.map((hike) => (
                <article key={`map-${hike.name}`} className="flex gap-4 border-t border-white/10 pt-5">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#c6a15b]" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-xl font-normal text-[#f4efe2]">{hike.name}</h3>
                    <p className="mt-2 text-sm font-light leading-[1.65] text-[#f4efe2]/62">Start area: {hike.start}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-[#d8c9a7]/58">{hike.difficulty}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-xs font-light leading-[1.75] text-[#f4efe2]/48">
              Place and peak positions were checked against OpenStreetMap data;
              the Grytetippen/Keipen start area was cross-checked against the
              current route description. Map tiles and place data © OpenStreetMap contributors.
            </p>
          </div>
        </section>

        <section className="border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-16">
              <figure className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#050b0d]">
                <Image
                  src="/images/guides/best-hikes-in-senja/tungeneset-steinfjorden.jpg"
                  alt="Snow-covered coast at Tungeneset and Steinfjorden on Senja in April"
                  width={1920}
                  height={830}
                  sizes="(min-width: 1024px) 52vw, (min-width: 768px) 94vw, 100vw"
                  className="h-auto w-full object-contain"
                />
              </figure>
              <div>
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#c6a15b]/78">Conditions before ambition</p>
                <h2 className="mt-5 font-serif text-[clamp(2.55rem,6vw,4.8rem)] font-normal leading-[0.92] tracking-[-0.055em]">The coast can look like spring while the mountains remain winter.</h2>
                <p className="mt-6 text-base font-light leading-[1.88] text-[#f4efe2]/68 sm:text-lg">
                  A dry road and a bright shoreline do not confirm a snow-free
                  summit. High routes often settle into summer around mid-June,
                  but every year differs, and early autumn snow can close the
                  practical window again.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
              <article className="border-t border-white/12 pt-6">
                <CloudSun className="h-5 w-5 text-[#c6a15b]" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl font-normal">Best time to hike in Senja</h3>
                <p className="mt-4 text-sm font-light leading-[1.84] text-[#f4efe2]/63">For higher routes, roughly mid-June through September is the usual starting point, not a guarantee. August and September can be beautiful, with faster changes in daylight, temperature and storms.</p>
              </article>
              <article className="border-t border-white/12 pt-6">
                <TrendingUp className="h-5 w-5 text-[#c6a15b]" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl font-normal">Weather and trail conditions</h3>
                <p className="mt-4 text-sm font-light leading-[1.84] text-[#f4efe2]/63">Summits can be colder and far windier than the trailhead. Expect wet bog on several routes, loose sand and gravel on Segla, and unprotected drops. Reassess at each terrain change.</p>
              </article>
              <article className="border-t border-white/12 pt-6">
                <Backpack className="h-5 w-5 text-[#c6a15b]" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl font-normal">What to bring</h3>
                <p className="mt-4 text-sm font-light leading-[1.84] text-[#f4efe2]/63">Carry mountain footwear, a windproof layer, rainwear, extra warmth, food, water, offline navigation, a charged phone and first aid. Pack for a delay, not only the moving time.</p>
              </article>
              <article className="border-t border-white/12 pt-6">
                <ShieldAlert className="h-5 w-5 text-[#c6a15b]" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl font-normal">Mountain safety</h3>
                <p className="mt-4 text-sm font-light leading-[1.84] text-[#f4efe2]/63">Ankle injuries and rapid cooling are realistic risks. Turn around before footing or visibility fails. Winter hiking and avalanche terrain need separate training, forecasts and equipment and are not covered here.</p>
              </article>
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              <SourceLink href="https://www.yr.no/en" className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-[#d8c9a7] no-underline">Check Yr weather</SourceLink>
              <SourceLink href="https://www.varsom.no/en/" className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-[#d8c9a7] no-underline">Check Varsom hazards</SourceLink>
              <SourceLink href="https://ut.no/" className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-[#d8c9a7] no-underline">Open UT.no</SourceLink>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <SectionHeader
              eyebrow="Shared trailheads"
              title="Parking and responsible visits"
              intro="Fjordgård and several other trailheads serve small communities. A full parking area is a reason to change the plan, not to create a new parking space."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: ParkingCircle,
                  title: "Use marked parking",
                  text: "Use public or signed spaces in Fjordgård and at other trailheads. Never block a private driveway, tunnel approach, passing place or emergency access.",
                },
                {
                  icon: Clock3,
                  title: "Expect change and capacity limits",
                  text: "Charges, overflow areas and local arrangements can change. Read signs on arrival. Popular starts can fill in high season, and availability is never guaranteed.",
                },
                {
                  icon: Route,
                  title: "Stay on durable routes",
                  text: "Follow the established trail, especially through wet ground and fragile vegetation. Shortcuts widen erosion and move pressure into the surrounding landscape.",
                },
                {
                  icon: Footprints,
                  title: "Leave the place intact",
                  text: "Carry all waste out, keep noise low and give residents, livestock and wildlife room. Leave No Trace applies at the car park as much as on the summit.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[1.1rem] border border-white/9 bg-white/[0.018] p-6">
                  <item.icon className="h-5 w-5 text-[#c6a15b]" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl font-normal tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-4 text-sm font-light leading-[1.82] text-[#f4efe2]/62">{item.text}</p>
                </article>
              ))}
              <p className="sm:col-span-2 text-sm font-light leading-[1.8] text-[#f4efe2]/56">
                Senja municipality&apos;s current trail plan lists Segla parking for
                Hesten and Segla, and parking south of Ørnfjordtunnelen for
                Grytetippen and Keipen. On-site signs and current local notices
                take precedence over this summary.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Questions before the trail" title="Senja hiking FAQ" />
            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {faqItems.map((item, index) => (
                <article key={item.question} className="grid gap-4 py-7 md:grid-cols-[3rem_0.8fr_1.2fr] md:gap-8 md:py-9">
                  <p className="text-[0.57rem] font-semibold uppercase tracking-[0.23em] text-[#c6a15b]/76">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="font-serif text-[1.7rem] font-normal leading-[1.08] tracking-[-0.035em] text-[#f4efe2]">{item.question}</h3>
                  <p className="text-sm font-light leading-[1.84] text-[#f4efe2]/64 sm:text-base">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#c6a15b]/78">Sources</p>
                <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-normal leading-[0.94] tracking-[-0.05em]">Trail information and official resources</h2>
                <p className="mt-6 max-w-xl text-sm font-light leading-[1.85] text-[#f4efe2]/60 sm:text-base">Route facts were checked on 31 July 2026. Open the individual route link for the most relevant description, then confirm weather, hazards, parking signs and local notices immediately before the hike.</p>
                <ul className="mt-8 space-y-3">
                  {sources.map((source) => (
                    <li key={source.href}>
                      <SourceLink href={source.href} className="text-sm text-[#d8c9a7] sm:text-base">{source.label}</SourceLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#c6a15b]/78">Image provenance</p>
                <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-normal leading-[0.94] tracking-[-0.05em]">Photo credits</h2>
                <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
                  {photoCredits.map((credit) => (
                    <article key={credit.source} className="py-6">
                      <h3 className="font-serif text-xl font-normal text-[#f4efe2]">{credit.subject}</h3>
                      <p className="mt-3 text-sm font-light leading-[1.75] text-[#f4efe2]/62">
                        Photograph by Simo Räsänen (Wikimedia Commons), licensed
                        under{" "}
                        <SourceLink href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-[#d8c9a7]">CC BY-SA 4.0</SourceLink>.
                      </p>
                      <p className="mt-2 text-xs font-light leading-[1.7] text-[#f4efe2]/48">{credit.crop}</p>
                      <SourceLink href={credit.source} className="mt-3 text-sm text-[#d8c9a7]">View the original file on Wikimedia Commons</SourceLink>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-light leading-[1.75] text-[#f4efe2]/54">Independent planning guidance. Current official information always overrides this page.</p>
              <Link href="/destinations/senja" className="inline-flex items-center gap-2 text-sm text-[#d8c9a7] underline decoration-[#d8c9a7]/30 underline-offset-4 transition-colors hover:text-[#f4efe2] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60">
                Continue to the complete Senja travel guide
                <Mountain className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
