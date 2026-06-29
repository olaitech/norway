import type { Metadata } from "next";

import {
  GUIDE_LAST_UPDATED,
  guideSourceSets,
} from "@/src/data/guide-meta-sources";
import { SITE_NAME } from "@/src/config/site";
import type { BreadcrumbItem } from "@/src/lib/seo/jsonLd";

const CURRENT_ARTICLE_UPDATE_DATE = "2026-06-25";

export type SeoCard = {
  title: string;
  description: string;
  label?: string;
  href?: string;
};

export type SeoSection = {
  label: string;
  title: string;
  intro: string;
  cards: SeoCard[];
};

export type SeoPageData = {
  meta: {
    title: string;
    description: string;
    openGraphTitle?: string;
    openGraphDescription?: string;
  };
  hero: {
    label: string;
    title: string;
    intro: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: string;
  };
  sections: SeoSection[];
  relatedLinks: Array<{ label: string; href: string }>;
  cta: {
    label: string;
    text: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref: string;
    secondaryLabel: string;
  };
  publishedDate?: string;
  updatedDate?: string;
  guideMeta?: {
    lastUpdated: string;
    sources: ReadonlyArray<{ label: string; href: string }>;
  };
  jsonLd?: {
    breadcrumbs: readonly BreadcrumbItem[];
    article?: boolean;
  };
};

export function toMetadata(page: SeoPageData, canonicalPath: string): Metadata {
  const openGraphTitle = page.meta.openGraphTitle ?? page.meta.title;
  const openGraphDescription =
    page.meta.openGraphDescription ?? page.meta.description;

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: openGraphTitle,
      description: openGraphDescription,
      url: canonicalPath,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: page.hero.imageSrc,
          alt: page.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: openGraphDescription,
      images: [page.hero.imageSrc],
    },
  };
}

export const seoPages = {
  routesHub: {
    meta: {
      title: "Norway Road Trip Routes",
      description:
        "A cinematic route hub for Norway road trips across Lofoten, Helgeland, Arctic coastlines, fjords and quiet scenic roads.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Routes", href: "/routes" },
      ],
    },
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
    hero: {
      label: "Planning archive",
      title: "Routes Across Norway",
      intro:
        "A route hub for travelers who prefer slower roads, coastal ferries and landscape-first itineraries.",
      imageSrc: "/images/cards/helgeland.png",
      imageAlt: "A coastal road threading through sea and mountain scenery in Northern Norway",
      imagePosition: "center 45%",
    },
    sections: [
      {
        label: "01 / Core routes",
        title: "Northern road trip blueprints",
        intro:
          "Start with the strongest route ideas, then adjust the pace around weather, ferries and light.",
        cards: [
          {
            label: "5-7 days",
            title: "Lofoten Road Trip",
            description:
              "Arctic villages, mountain roads and beaches linked by short drives and dramatic weather.",
            href: "/routes/lofoten-road-trip",
          },
          {
            label: "Slow coastal route",
            title: "Helgeland Coast Road Trip",
            description:
              "Island hopping, ferries and quiet roads from Bronnoysund toward the Arctic shoreline.",
            href: "/routes/helgeland-coast-road-trip",
          },
          {
            label: "Arctic options",
            title: "Tromso, Senja and Lyngen",
            description:
              "Build an Arctic loop around winter light, sea-level roads and compact mountain distances.",
            href: "/northern-lights-norway",
          },
        ],
      },
      {
        label: "02 / Landscape directions",
        title: "Choose your entry into Norway",
        intro:
          "Every route can begin from light, season or geography. The best entry point depends on what you want to feel.",
        cards: [
          {
            label: "Season first",
            title: "Plan by light windows",
            description:
              "Use shoulder seasons, midnight sun or northern lights periods to shape the route.",
            href: "/best-time-to-visit-norway",
          },
          {
            label: "Destination first",
            title: "Use Lofoten as a route anchor",
            description:
              "Treat Lofoten as a base and connect outward with short extensions and ferry crossings.",
            href: "/destinations/lofoten-islands",
          },
          {
            label: "Map first",
            title: "Trace roads, ferries and detours",
            description:
              "Use the map to compare coastal alternatives before committing to nightly stops.",
            href: "/map",
          },
        ],
      },
      {
        label: "03 / Practical rhythm",
        title: "Slow planning notes",
        intro:
          "A calm route works better than an ambitious one. Build in weather buffers and short drive days.",
        cards: [
          {
            title: "Ferry timing matters",
            description:
              "Check major ferry legs first, then lock accommodation around those crossings.",
          },
          {
            title: "Keep margin in the schedule",
            description:
              "Leave spare half-days for closed roads, strong winds or unexpected places worth staying longer.",
          },
          {
            title: "Drive less, see more",
            description:
              "In Northern Norway, long summer light can hide distance fatigue. Keep daily ranges conservative.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Plan the Lofoten destination guide", href: "/destinations/lofoten-islands" },
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "See the northern lights guide", href: "/northern-lights-norway" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Move from route ideas to geography, season and daily pacing.",
      primaryHref: "/map",
      primaryLabel: "Open map",
      secondaryHref: "/#destinations",
      secondaryLabel: "Browse destinations",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.roadTripScenic,
    },
  },
  lofotenRoadTrip: {
    meta: {
      title: "Lofoten Road Trip (5-7 Days)",
      description:
        "A 5-7 day Lofoten road trip guide focused on island roads, ferries, weather windows and realistic pacing between fishing villages.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Routes", href: "/routes" },
        { name: "Lofoten Road Trip", href: "/routes/lofoten-road-trip" },
      ],
      article: true,
    },
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
    hero: {
      label: "Route field note",
      title: "Lofoten Road Trip",
      intro:
        "A cinematic 5-7 day route through fishing villages, Arctic beaches and roads framed by sharp granite peaks.",
      imageSrc: "/images/cards/lofoten.png",
      imageAlt: "Fishing villages and steep mountains in Lofoten at dusk",
    },
    sections: [
      {
        label: "01 / Suggested rhythm",
        title: "How 5-7 days can flow",
        intro:
          "Keep the route compact. Move westward gradually and avoid changing accommodation every night.",
        cards: [
          {
            label: "Day 1-2",
            title: "Arrive and settle east",
            description:
              "Start around Svolvaer or Henningsvaer with short drives and evening harbor walks.",
          },
          {
            label: "Day 3-4",
            title: "Move through central islands",
            description:
              "Link mountain viewpoints, white-sand beaches and small villages without rushing.",
          },
          {
            label: "Day 5-7",
            title: "End farther west",
            description:
              "Use Reine and nearby roads for weather windows, photography and slower final days.",
          },
        ],
      },
      {
        label: "02 / Signature moments",
        title: "What defines the route",
        intro:
          "This road trip works best when landscape, weather and light become the core itinerary.",
        cards: [
          {
            title: "Arctic villages",
            description:
              "Small harbors and red cabins create quiet cultural anchors between scenic drives.",
          },
          {
            title: "Mountain roads",
            description:
              "Short stretches can feel epic. Stop often and keep your daily drive targets low.",
          },
          {
            title: "Beaches and weather",
            description:
              "White beaches under fast-moving skies change character by the hour.",
          },
        ],
      },
      {
        label: "03 / Light and season",
        title: "Midnight sun to northern lights",
        intro:
          "Lofoten is cinematic year-round, but each season changes road conditions and mood.",
        cards: [
          {
            label: "May-July",
            title: "Midnight sun season",
            description:
              "Extended daylight supports flexible driving and late-night viewpoints.",
          },
          {
            label: "Late Sep-March",
            title: "Northern lights potential",
            description:
              "Dark hours return and aurora opportunities increase with clear skies.",
          },
          {
            label: "Shoulder months",
            title: "Quieter roads",
            description:
              "Spring and autumn usually bring fewer visitors and strong atmospheric contrasts.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Browse the route hub", href: "/routes" },
      { label: "Read the Lofoten destination guide", href: "/destinations/lofoten-islands" },
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "See the northern lights guide", href: "/northern-lights-norway" },
    ],
    cta: {
      label: "Next step",
      text: "Compare this route with Helgeland or move into destination-level planning.",
      primaryHref: "/routes/helgeland-coast-road-trip",
      primaryLabel: "View Helgeland route",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.roadTripScenic,
    },
  },
  helgelandCoastRoadTrip: {
    meta: {
      title: "Helgeland Coast Road Trip",
      description:
        "A slower Helgeland Coast road trip guide built around ferry crossings, island stops, coastal roads and realistic pacing between small communities.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Routes", href: "/routes" },
        {
          name: "Helgeland Coast Road Trip",
          href: "/routes/helgeland-coast-road-trip",
        },
      ],
      article: true,
    },
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
    hero: {
      label: "Route field note",
      title: "Helgeland Coast Road Trip",
      intro:
        "A slower route for island ferries, coastal roads and long northern horizons shaped by wind and sea.",
      imageSrc: "/images/cards/helgeland.png",
      imageAlt: "Island coastline and a quiet road along the Helgeland Coast",
      imagePosition: "center 42%",
    },
    sections: [
      {
        label: "01 / Route character",
        title: "Why Helgeland feels different",
        intro:
          "Helgeland is less about single iconic stops and more about rhythm, ferries and calm landscapes.",
        cards: [
          {
            title: "Island hopping pace",
            description:
              "Ferries naturally slow the trip and create a more intentional travel cadence.",
          },
          {
            title: "Coastal road continuity",
            description:
              "Frequent shoreline access keeps the sea present throughout most of the route.",
          },
          {
            title: "Lower visual noise",
            description:
              "Smaller settlements and open horizons make it ideal for reflective road travel.",
          },
        ],
      },
      {
        label: "02 / Places to shape around",
        title: "Anchor points",
        intro:
          "Build around a few distinct clusters and avoid overloading the route with daily transfers.",
        cards: [
          {
            label: "Mountain backdrop",
            title: "Seven Sisters range",
            description:
              "Use viewpoints and detours where weather reveals the mountain wall above the coast.",
          },
          {
            label: "Island detour",
            title: "Donna and Heroy",
            description:
              "Quiet roads, sea-facing farms and small harbors define this slower segment.",
          },
          {
            label: "Ferry junction",
            title: "Coastal crossing nodes",
            description:
              "Check key ferry transitions before booking stays and daily stops.",
          },
        ],
      },
      {
        label: "03 / Seasonal notes",
        title: "When to go",
        intro:
          "Late spring to early autumn is usually easiest for driving and island logistics.",
        cards: [
          {
            label: "May-Aug",
            title: "Long daylight and stable rhythm",
            description:
              "Best window for extended evening stops and flexible coastal detours.",
          },
          {
            label: "Sep-Oct",
            title: "Atmospheric shoulder season",
            description:
              "Fewer travelers, darker skies and strong weather texture across the coast.",
          },
          {
            label: "Winter",
            title: "Selective route planning",
            description:
              "Possible in parts, but weather and ferry changes require tighter planning margins.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Browse the route hub", href: "/routes" },
      { label: "See the Lofoten road trip", href: "/routes/lofoten-road-trip" },
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Pair Helgeland with Lofoten or keep it as a standalone slower coastal journey.",
      primaryHref: "/routes",
      primaryLabel: "Back to route hub",
      secondaryHref: "/#destinations",
      secondaryLabel: "View destinations",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.destinationHelgeland,
    },
  },
  northernLightsNorway: {
    meta: {
      title: "Northern Lights in Norway",
      description:
        "A Northern Norway aurora guide focused on darkness, cloud cover, patience and realistic planning from Tromso, Lofoten, Senja and beyond.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Guides", href: "/guides" },
        { name: "Northern Lights in Norway", href: "/northern-lights-norway" },
      ],
      article: true,
    },
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
    hero: {
      label: "Arctic light guide",
      title: "Northern Lights in Norway",
      intro:
        "A practical guide to Arctic locations, seasonal timing and calm planning for aurora-focused journeys.",
      imageSrc: "/images/cards/tromso.png",
      imageAlt: "Arctic coastline in Northern Norway under winter light",
      imagePosition: "center 44%",
    },
    sections: [
      {
        label: "01 / Core locations",
        title: "Where to base your trip",
        intro:
          "The strongest aurora bases combine dark skies, road access and weather flexibility.",
        cards: [
          {
            title: "Tromso",
            description:
              "Reliable winter access and strong infrastructure for short aurora windows.",
          },
          {
            title: "Lofoten and Senja",
            description:
              "More dramatic coastal foregrounds with variable weather and road conditions.",
          },
          {
            title: "Alta and Bodo",
            description:
              "Useful alternatives for broader Arctic routing and multi-stop winter trips.",
          },
        ],
      },
      {
        label: "02 / Season window",
        title: "Late September to March",
        intro:
          "Darkness returns in autumn, peaks through winter, then slowly recedes into spring.",
        cards: [
          {
            label: "Sep-Nov",
            title: "Early season",
            description:
              "Milder temperatures and more flexible road travel with shorter snow periods.",
          },
          {
            label: "Dec-Feb",
            title: "Deep winter",
            description:
              "Longest dark hours, but stronger weather risk and tighter road planning.",
          },
          {
            label: "March",
            title: "Late winter contrast",
            description:
              "A balanced period with snow landscapes and slightly longer daylight.",
          },
        ],
      },
      {
        label: "03 / Practical field notes",
        title: "Planning for clear skies",
        intro:
          "Aurora travel is about probability, not guarantees. Build the plan around flexibility.",
        cards: [
          {
            title: "Use moving forecasts",
            description:
              "Check cloud and wind patterns daily and keep location choices open.",
          },
          {
            title: "Stay multiple nights",
            description:
              "A single clear night can define the trip. Avoid one-night stopovers.",
          },
          {
            title: "Balance comfort and access",
            description:
              "Choose bases with both quick road exits and warm recovery between sessions.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "Browse the route hub", href: "/routes" },
      { label: "Read the Lofoten destination guide", href: "/destinations/lofoten-islands" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Choose your season window, then match it with a route and base strategy.",
      primaryHref: "/best-time-to-visit-norway",
      primaryLabel: "Open seasonal guide",
      secondaryHref: "/routes",
      secondaryLabel: "Back to routes",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.northernLightsWeatherSafety,
    },
  },
  fjordsOfNorway: {
    meta: {
      title: "Fjords of Norway",
      description:
        "A cinematic introductory guide to the fjords of Norway, with practical planning notes for routes, seasons, ferries and slow travel.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Guides", href: "/guides" },
        { name: "Fjords of Norway", href: "/fjords-of-norway" },
      ],
      article: true,
    },
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
    hero: {
      label: "Landscape guide",
      title: "Fjords of Norway",
      intro:
        "A calm planning guide to deep water, steep mountains, ferry routes and the slower rhythm of fjord travel.",
      imageSrc: "/images/hero/preikestolen.png",
      imageAlt: "Steep fjord walls rising above calm water",
      imagePosition: "center 45%",
    },
    sections: [
      {
        label: "01 / Landscape character",
        title: "Where water shapes the route",
        intro:
          "Norway's fjords are not one destination. They are a way of moving through the country: by road, ferry, viewpoint, village and weather window.",
        cards: [
          {
            title: "Western fjords",
            description:
              "Classic steep-sided fjord landscapes, long viewpoints and road journeys shaped by tunnels, ferries and mountain passes.",
          },
          {
            title: "Northern fjords",
            description:
              "Quieter Arctic fjords with broader light, smaller communities and routes that often connect coast, islands and inland valleys.",
          },
          {
            title: "Ferry rhythm",
            description:
              "Fjord travel often depends on crossing schedules. Treat ferries as part of the experience, not an interruption.",
          },
        ],
      },
      {
        label: "02 / Planning notes",
        title: "Build time into every fjord day",
        intro:
          "A strong fjord itinerary leaves room for slow roads, weather changes, viewpoints and short pauses that rarely fit into a rushed schedule.",
        cards: [
          {
            title: "Choose fewer bases",
            description:
              "Staying longer in fewer places usually works better than changing accommodation every night.",
            href: "/responsible-travel",
          },
          {
            title: "Plan by season",
            description:
              "Late spring through early autumn is usually easiest for roads, ferries and high mountain access.",
            href: "/best-time-to-visit-norway",
          },
          {
            title: "Use the map early",
            description:
              "Distances can look short across water but become longer once roads, ferries and detours are included.",
            href: "/map",
          },
        ],
      },
      {
        label: "03 / Travel style",
        title: "Fjords reward slower movement",
        intro:
          "The most memorable fjord days are often simple: one road, one ferry, one village, one weather break.",
        cards: [
          {
            title: "Road trips",
            description:
              "Fjord drives are best planned with conservative daily distances and frequent stops.",
            href: "/routes",
          },
          {
            title: "Photography",
            description:
              "Low cloud, rain and shifting light can make fjord landscapes more atmospheric than clear midday sun.",
          },
          {
            title: "Local awareness",
            description:
              "Small fjord communities are lived-in places. Park carefully, respect private land and support local businesses.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Browse Norway road trip routes", href: "/routes" },
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "See responsible travel advice", href: "/responsible-travel" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Place the fjords inside a realistic route, then adjust the journey around season, ferry timing and weather.",
      primaryHref: "/routes",
      primaryLabel: "Browse road trip routes",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.roadTripScenic,
    },
  },
  bestTimeToVisitNorway: {
    meta: {
      title: "Best Time to Visit Norway",
      description:
        "Month-by-month guidance for choosing Norway's best travel season by daylight, weather, road conditions, northern lights and midnight sun.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Guides", href: "/guides" },
        { name: "Best Time to Visit Norway", href: "/best-time-to-visit-norway" },
      ],
      article: true,
    },
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
    hero: {
      label: "Seasonal field guide",
      title: "Best Time to Visit Norway",
      intro:
        "A month-by-month framework for matching weather, daylight and route goals across Norway.",
      imageSrc: "/images/hero/preikestolen.png",
      imageAlt: "A traveler on Preikestolen above a fjord in clear light",
      imagePosition: "center 45%",
    },
    sections: [
      {
        label: "01 / Month by month",
        title: "Season rhythm at a glance",
        intro:
          "Use these windows as planning anchors, then refine with route and weather realities.",
        cards: [
          {
            label: "Jan-Mar",
            title: "Winter depth",
            description:
              "Snow, dark skies and strong northern lights potential in Arctic regions.",
          },
          {
            label: "Apr-May",
            title: "Spring transition",
            description:
              "Longer days and calmer shoulder-season pacing for mixed road conditions.",
          },
          {
            label: "Jun-Aug",
            title: "Summer light",
            description:
              "Midnight sun in the north and longer driving flexibility across most regions.",
          },
          {
            label: "Sep-Oct",
            title: "Autumn contrast",
            description:
              "Cooler air, lower traffic and the start of darker aurora-friendly nights.",
          },
          {
            label: "Nov-Dec",
            title: "Early winter return",
            description:
              "Darkness settles back in with increasing snow risk and fewer daylight hours.",
          },
        ],
      },
      {
        label: "02 / By travel goal",
        title: "Match season to intent",
        intro:
          "Start with what you want to experience, then choose timing and geography around it.",
        cards: [
          {
            title: "Northern lights",
            description:
              "Late September through March, with winter offering the longest dark windows.",
            href: "/northern-lights-norway",
          },
          {
            title: "Midnight sun drives",
            description:
              "June and July in Northern Norway for late-evening landscape access.",
          },
          {
            title: "Road trips and fjords",
            description:
              "Late spring to early autumn for easier roads and broader ferry frequency.",
            href: "/routes",
          },
        ],
      },
      {
        label: "03 / Shoulder season advantage",
        title: "When Norway feels most balanced",
        intro:
          "Shoulder months can deliver a strong mix of atmosphere, access and lower crowd pressure.",
        cards: [
          {
            title: "May and early June",
            description:
              "Long days arrive without peak-season density in many regions.",
          },
          {
            title: "Late September",
            description:
              "Autumn color, darker evenings and manageable road travel in the north.",
          },
          {
            title: "Early October",
            description:
              "A transition point where weather turns more dramatic but still workable.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "See the northern lights guide", href: "/northern-lights-norway" },
      { label: "Browse the route hub", href: "/routes" },
      { label: "Read the Lofoten destination guide", href: "/destinations/lofoten-islands" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Now align your season choice with a concrete route and destination sequence.",
      primaryHref: "/routes",
      primaryLabel: "Browse routes",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.northernLightsWeatherSafety,
    },
  },
  lofotenHub: {
    meta: {
      title: "Lofoten Travel Guide",
      description:
        "A premium destination hub for Lofoten with villages, road trips, seasons, beaches, northern lights and photography notes.",
    },
    hero: {
      label: "Destination hub",
      title: "Lofoten",
      intro:
        "A cinematic destination overview of villages, roads, light and seasonal pacing across the Lofoten Islands.",
      imageSrc: "/images/cards/lofoten.png",
      imageAlt: "Lofoten coastline and peaks in changing Arctic weather",
      imagePosition: "center 48%",
    },
    sections: [
      {
        label: "01 / Places",
        title: "Villages and local rhythm",
        intro:
          "Lofoten is best explored as a sequence of small bases connected by short but dramatic drives.",
        cards: [
          {
            title: "Harbor villages",
            description:
              "Fishing villages provide compact stays with strong access to coast and mountains.",
          },
          {
            title: "Beach landscapes",
            description:
              "Arctic beaches add openness and contrast to tighter village streets.",
          },
          {
            title: "Roadside viewpoints",
            description:
              "Frequent pull-offs make it easy to shape days around light conditions.",
          },
        ],
      },
      {
        label: "02 / Planning",
        title: "Routes, seasons and light",
        intro:
          "Plan Lofoten by combining route length with season windows and daily drive margins.",
        cards: [
          {
            title: "Lofoten road trip (5-7 days)",
            description:
              "A practical structure for moving east to west without overloading each day.",
            href: "/routes/lofoten-road-trip",
          },
          {
            title: "Northern lights season",
            description:
              "Late September to March offers the best darkness window for aurora attempts.",
            href: "/northern-lights-norway",
          },
          {
            title: "Summer midnight sun",
            description:
              "Extended daylight opens room for late drives, hikes and calmer pacing.",
            href: "/best-time-to-visit-norway",
          },
        ],
      },
      {
        label: "03 / Slow travel notes",
        title: "Photography and pace",
        intro:
          "Weather moves quickly in Lofoten. Keep plans flexible and let location changes follow the sky.",
        cards: [
          {
            title: "Stay longer in fewer places",
            description:
              "Two or three bases often work better than a daily accommodation change.",
          },
          {
            title: "Use weather as direction",
            description:
              "Shift between coast and interior roads based on cloud, wind and light breaks.",
          },
          {
            title: "Prioritize dawn and late evening",
            description:
              "Low-angle Arctic light often creates the most cinematic color and texture.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Plan the Lofoten road trip", href: "/routes/lofoten-road-trip" },
      { label: "Browse the route hub", href: "/routes" },
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "Return to destinations", href: "/#destinations" },
    ],
    cta: {
      label: "Continue planning",
      text: "Use Lofoten as a base, then compare nearby northern route extensions.",
      primaryHref: "/routes",
      primaryLabel: "Explore route hub",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.destinationLofoten,
    },
  },
} as const satisfies Record<string, SeoPageData>;
