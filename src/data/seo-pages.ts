import type { Metadata } from "next";

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
};

export function toMetadata(page: SeoPageData): Metadata {
  return {
    title: page.meta.title,
    description: page.meta.description,
    openGraph: {
      title: page.meta.openGraphTitle ?? page.meta.title,
      description: page.meta.openGraphDescription ?? page.meta.description,
      type: "website",
    },
  };
}

export const seoPages = {
  routesHub: {
    meta: {
      title: "Norway Road Trip Routes | Norge",
      description:
        "A cinematic route hub for Norway road trips across Lofoten, Helgeland, Arctic coastlines, fjords and quiet scenic roads.",
    },
    hero: {
      label: "Planning archive",
      title: "Routes Across Norway",
      intro:
        "A route hub for travelers who prefer slower roads, coastal ferries and landscape-first itineraries.",
      imageSrc: "/images/cards/helgeland.png",
      imageAlt: "A cinematic coastal road along Northern Norway",
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
            href: "/lofoten",
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
      { label: "Lofoten Guide", href: "/lofoten" },
      { label: "Best Time to Visit Norway", href: "/best-time-to-visit-norway" },
      { label: "Northern Lights in Norway", href: "/northern-lights-norway" },
      { label: "Interactive Norway Map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Move from route ideas to geography, season and daily pacing.",
      primaryHref: "/map",
      primaryLabel: "Open map",
      secondaryHref: "/#destinations",
      secondaryLabel: "Browse destinations",
    },
  },
  lofotenRoadTrip: {
    meta: {
      title: "Lofoten Road Trip (5-7 Days) | Norge",
      description:
        "A premium placeholder guide for a 5-7 day Lofoten road trip across Arctic villages, beaches and mountain roads.",
    },
    hero: {
      label: "Route field note",
      title: "Lofoten Road Trip",
      intro:
        "A cinematic 5-7 day route through fishing villages, Arctic beaches and roads framed by sharp granite peaks.",
      imageSrc: "/images/cards/lofoten.png",
      imageAlt: "Lofoten mountains rising behind a fishing village",
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
      { label: "Routes Hub", href: "/routes" },
      { label: "Lofoten Destination Hub", href: "/lofoten" },
      { label: "Best Time to Visit Norway", href: "/best-time-to-visit-norway" },
      { label: "Northern Lights in Norway", href: "/northern-lights-norway" },
    ],
    cta: {
      label: "Next step",
      text: "Compare this route with Helgeland or move into destination-level planning.",
      primaryHref: "/routes/helgeland-coast-road-trip",
      primaryLabel: "View Helgeland route",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
  },
  helgelandCoastRoadTrip: {
    meta: {
      title: "Helgeland Coast Road Trip | Norge",
      description:
        "A cinematic placeholder guide for a slow Helgeland Coast road trip with island ferries, quiet roads and coastal landscapes.",
    },
    hero: {
      label: "Route field note",
      title: "Helgeland Coast Road Trip",
      intro:
        "A slower route for island ferries, coastal roads and long northern horizons shaped by wind and sea.",
      imageSrc: "/images/cards/helgeland.png",
      imageAlt: "Road and sea views along the Helgeland Coast",
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
      { label: "Routes Hub", href: "/routes" },
      { label: "Lofoten Road Trip", href: "/routes/lofoten-road-trip" },
      { label: "Best Time to Visit Norway", href: "/best-time-to-visit-norway" },
      { label: "Explore Norway by Map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Pair Helgeland with Lofoten or keep it as a standalone slower coastal journey.",
      primaryHref: "/routes",
      primaryLabel: "Back to route hub",
      secondaryHref: "/#destinations",
      secondaryLabel: "View destinations",
    },
  },
  northernLightsNorway: {
    meta: {
      title: "Northern Lights in Norway | Norge",
      description:
        "A cinematic placeholder guide to seeing northern lights in Norway across Tromso, Lofoten, Senja, Alta and Bodo.",
    },
    hero: {
      label: "Arctic light guide",
      title: "Northern Lights in Norway",
      intro:
        "A practical guide to Arctic locations, seasonal timing and calm planning for aurora-focused journeys.",
      imageSrc: "/images/cards/tromsø.png",
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
      { label: "Best Time to Visit Norway", href: "/best-time-to-visit-norway" },
      { label: "Routes Hub", href: "/routes" },
      { label: "Lofoten Destination Hub", href: "/lofoten" },
      { label: "Explore Norway by Map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Choose your season window, then match it with a route and base strategy.",
      primaryHref: "/best-time-to-visit-norway",
      primaryLabel: "Open seasonal guide",
      secondaryHref: "/routes",
      secondaryLabel: "Back to routes",
    },
  },
  bestTimeToVisitNorway: {
    meta: {
      title: "Best Time to Visit Norway | Norge",
      description:
        "A month-by-month seasonal placeholder guide for Norway covering winter, spring, summer, autumn, fjords, road trips and Arctic light.",
    },
    hero: {
      label: "Seasonal field guide",
      title: "Best Time to Visit Norway",
      intro:
        "A month-by-month framework for matching weather, daylight and route goals across Norway.",
      imageSrc: "/images/hero/preikestolen.png",
      imageAlt: "Norwegian fjord landscape during clear weather",
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
      { label: "Northern Lights in Norway", href: "/northern-lights-norway" },
      { label: "Routes Hub", href: "/routes" },
      { label: "Lofoten Hub", href: "/lofoten" },
      { label: "Interactive Map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Now align your season choice with a concrete route and destination sequence.",
      primaryHref: "/routes",
      primaryLabel: "Browse routes",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
  },
  lofotenHub: {
    meta: {
      title: "Lofoten Travel Guide | Norge",
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
      { label: "Lofoten Road Trip", href: "/routes/lofoten-road-trip" },
      { label: "Routes Hub", href: "/routes" },
      { label: "Best Time to Visit Norway", href: "/best-time-to-visit-norway" },
      { label: "Destinations", href: "/#destinations" },
    ],
    cta: {
      label: "Continue planning",
      text: "Use Lofoten as a base, then compare nearby northern route extensions.",
      primaryHref: "/routes",
      primaryLabel: "Explore route hub",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
  },
} as const satisfies Record<string, SeoPageData>;

