export type HomeSearchEntry = {
  href: string;
  route: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
};

export const homeSearchSuggestions = [
  "Lofoten ferry",
  "Senja without a car",
  "Tromsø northern lights",
  "Helgeland road trip",
  "Camping rules",
  "Where to stay",
  "What not to do",
] as const;

export const homeSearchIndex: HomeSearchEntry[] = [
  {
    href: "/destinations/helgeland-coast",
    route: "/destinations/helgeland-coast",
    title: "Helgeland Coast Travel Guide",
    description:
      "Plan a calm coastal route with ferry timing, realistic daily distances, quiet road rhythm and practical route notes.",
    category: "Destination",
    keywords: [
      "helgeland road trip",
      "helgeland ferry",
      "coastal ferry",
      "slow travel",
      "where to stay",
      "what not to do",
      "coastal planning",
    ],
  },
  {
    href: "/destinations/lofoten-islands",
    route: "/destinations/lofoten-islands",
    title: "Lofoten Islands Travel Guide",
    description:
      "Find practical guidance on ferries, rorbuer, where to stay, seasonal travel, transport planning and route pacing.",
    category: "Destination",
    keywords: [
      "lofoten ferry",
      "bodo moskenes ferry",
      "rorbuer",
      "camping",
      "where to stay",
      "road trip",
      "what not to do",
    ],
  },
  {
    href: "/destinations/senja",
    route: "/destinations/senja",
    title: "Senja Travel Guide",
    description:
      "Explore planning notes for scenic drives, no-car options, weather buffers, fjord viewpoints and slower day pacing.",
    category: "Destination",
    keywords: [
      "senja without car",
      "senja ferry",
      "senja public transport",
      "senja route",
      "where to stay",
      "hiking",
      "camping",
    ],
  },
  {
    href: "/destinations/tromso",
    route: "/destinations/tromso",
    title: "Tromso Travel Guide",
    description:
      "Plan northern lights trips, airport logistics, no-car travel, winter tours, city stays and weather-aware itineraries.",
    category: "Destination",
    keywords: [
      "tromso airport",
      "tromsø airport",
      "tromso northern lights",
      "tromsø northern lights",
      "tromso without car",
      "tromsø without car",
      "where to stay",
      "winter tours",
      "what not to do",
      "best time",
    ],
  },
  {
    href: "/routes",
    route: "/routes",
    title: "Norway Road Trip Routes",
    description:
      "Browse core route frameworks for coastal roads, ferry-linked segments and landscape-first journey planning.",
    category: "Route hub",
    keywords: [
      "road trip",
      "helgeland road trip",
      "lofoten road trip",
      "route planning",
      "ferry route",
      "scenic drives",
    ],
  },
  {
    href: "/map",
    route: "/map",
    title: "Explore Norway by Map",
    description:
      "Use the interactive map to compare destinations, trace routes and understand travel distances before locking plans.",
    category: "Tool",
    keywords: [
      "map",
      "route map",
      "distance planning",
      "destinations map",
      "travel planning",
    ],
  },
  {
    href: "/responsible-travel",
    route: "/responsible-travel",
    title: "Responsible Travel in Norway",
    description:
      "Read practical guidance on camping rules, local respect, safety, ferry timing, weather awareness and leave-no-trace habits.",
    category: "Guidance",
    keywords: [
      "responsible travel",
      "camping rules",
      "leave no trace",
      "sami culture",
      "what not to do",
      "weather safety",
    ],
  },
  {
    href: "/best-time-to-visit-norway",
    route: "/best-time-to-visit-norway",
    title: "Best Time to Visit Norway",
    description:
      "Compare seasons, travel windows and light conditions so your route and activities match realistic weather expectations.",
    category: "Planning",
    keywords: [
      "best time to visit",
      "seasons",
      "midnight sun",
      "winter travel",
      "northern norway weather",
    ],
  },
  {
    href: "/northern-lights-norway",
    route: "/northern-lights-norway",
    title: "Northern Lights in Norway",
    description:
      "Understand aurora seasonality, location strategy, weather limits and realistic expectations across Northern Norway.",
    category: "Planning",
    keywords: [
      "northern lights",
      "aurora",
      "tromso northern lights",
      "best time",
      "weather clouds",
      "what not to do",
    ],
  },
  {
    href: "/norway-road-trip-routes",
    route: "/norway-road-trip-routes",
    title: "Norway Road Trip Routes Hub",
    description:
      "Start from route overviews and connect destinations, ferries and seasonal timing into a practical travel plan.",
    category: "Route hub",
    keywords: [
      "norway road trip routes",
      "route hub",
      "ferry planning",
      "slow travel",
      "helgeland road trip",
      "lofoten road trip",
    ],
  },
];
