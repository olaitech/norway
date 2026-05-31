export type GuidedSearchEntry = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
  priority?: number;
};

export const guidedSearchSuggestions = [
  "Senja ferry",
  "Svipper Senja",
  "Senja without a car",
  "Lofoten ferry",
  "Tromso northern lights",
  "Camping rules",
  "Wild camping Norway",
  "Helgeland ferry",
  "Fv17",
  "Scenic route Senja",
] as const;

export const guidedSearchIndex: GuidedSearchEntry[] = [
  {
    id: "senja-ferries",
    title: "Senja ferries and official planners",
    description:
      "Use the Senja ferry and planner section for Brensholmen-Botnhamn, Andenes-Gryllefjord, Svipper and Entur.",
    href: "/destinations/senja#senja-ferries",
    category: "Destination",
    priority: 10,
    keywords: [
      "senja ferry",
      "senja ferries",
      "svipper senja",
      "andenes gryllefjord",
      "brensholmen botnhamn",
      "official planners senja",
      "senja transport planner",
    ],
  },
  {
    id: "senja-getting-around",
    title: "Getting around Senja without a car",
    description:
      "Plan no-car and low-car movement on Senja, including public transport constraints and practical route pacing.",
    href: "/destinations/senja#getting-around",
    category: "Destination",
    priority: 9,
    keywords: [
      "senja without a car",
      "senja without car",
      "how do i get around senja without a car",
      "senja public transport",
      "senja bus",
      "no car senja",
      "getting around senja",
    ],
  },
  {
    id: "senja-scenic-route",
    title: "Senja scenic route planning",
    description:
      "Find scenic-route guidance for Senja with slower pacing, viewpoints and weather-aware road planning.",
    href: "/destinations/senja#scenic-route",
    category: "Destination",
    priority: 8,
    keywords: [
      "scenic route senja",
      "senja scenic route",
      "national scenic route senja",
      "senja viewpoints",
      "bergsbotn tungeneset",
    ],
  },
  {
    id: "lofoten-ferries",
    title: "Lofoten ferries and official planners",
    description:
      "Open Lofoten ferry guidance with Bodoe-Moskenes context and official planner links.",
    href: "/destinations/lofoten-islands#ferries",
    category: "Destination",
    priority: 10,
    keywords: [
      "lofoten ferry",
      "lofoten ferries",
      "bodo moskenes ferry",
      "bodo to moskenes",
      "bognes lodingen",
      "lofoten ferry schedule",
      "official planners lofoten",
    ],
  },
  {
    id: "tromso-northern-lights",
    title: "Tromso northern lights planning",
    description:
      "Go straight to northern-lights strategy in Tromso with season windows, weather limits and realistic expectations.",
    href: "/destinations/tromso#northern-lights",
    category: "Destination",
    priority: 10,
    keywords: [
      "tromso northern lights",
      "tromso aurora",
      "northern lights tromso",
      "best time aurora tromso",
      "tromso aurora forecast",
    ],
  },
  {
    id: "tromso-getting-around",
    title: "Getting around Tromso",
    description:
      "Use this section for airport transfer, no-car travel and winter mobility decisions in Tromso.",
    href: "/destinations/tromso#getting-around",
    category: "Destination",
    priority: 7,
    keywords: [
      "tromso without a car",
      "tromso public transport",
      "getting around tromso",
      "tromso airport transfer",
      "tromso bus",
    ],
  },
  {
    id: "helgeland-ferries",
    title: "Helgeland ferries and crossings",
    description:
      "Jump to Helgeland ferry sections with Fv17 crossing rhythm and day-by-day planning notes.",
    href: "/destinations/helgeland-coast#ferries",
    category: "Destination",
    priority: 9,
    keywords: [
      "helgeland ferry",
      "helgeland ferries",
      "coastal route ferries",
      "ferry crossings helgeland",
      "reis nordland helgeland",
    ],
  },
  {
    id: "helgeland-fv17",
    title: "Fv17 Helgeland coastal route",
    description:
      "Open the Fv17 Helgeland route entry point for scenic-road context and section-level travel planning.",
    href: "/routes/helgeland-coastal-route",
    category: "Route",
    priority: 10,
    keywords: [
      "fv17",
      "fv 17",
      "helgeland coastal route",
      "helgeland scenic route",
      "scenic route helgeland",
      "helgelandskysten",
    ],
  },
  {
    id: "responsible-camping",
    title: "Camping rules and wild camping in Norway",
    description:
      "Read camping guidance with right-to-roam limits, legal distance rules and low-impact campsite behavior.",
    href: "/responsible-travel#camping",
    category: "Guidance",
    priority: 10,
    keywords: [
      "camping rules",
      "wild camping norway",
      "right to roam norway",
      "free camping norway",
      "camping laws norway",
      "campervan rules norway",
    ],
  },
  {
    id: "responsible-winter-driving",
    title: "Winter driving safety in Norway",
    description:
      "Use this section for winter driving risk control, route buffers and weather-first road decisions.",
    href: "/responsible-travel#winter-driving",
    category: "Guidance",
    priority: 8,
    keywords: [
      "winter driving",
      "winter driving norway",
      "snow driving norway",
      "icy roads norway",
      "driving in snow",
      "winter road safety norway",
    ],
  },
  {
    id: "lofoten-guide",
    title: "Lofoten Islands travel guide",
    description:
      "Destination-level planning for ferries, bases, where to stay, road pacing and travel seasons in Lofoten.",
    href: "/destinations/lofoten-islands",
    category: "Destination",
    priority: 6,
    keywords: [
      "lofoten",
      "lofoten travel guide",
      "where to stay lofoten",
      "lofoten road trip",
      "lofoten planning",
    ],
  },
  {
    id: "senja-guide",
    title: "Senja travel guide",
    description:
      "Destination guide for Senja with scenic route pacing, ferries, hikes, stays and weather-aware planning.",
    href: "/destinations/senja",
    category: "Destination",
    priority: 6,
    keywords: [
      "senja",
      "senja travel guide",
      "senja itinerary",
      "senja where to stay",
      "senja planning",
    ],
  },
  {
    id: "helgeland-guide",
    title: "Helgeland Coast travel guide",
    description:
      "Destination guide for ferry-linked days, Fv17 pacing and quiet-coast route choices in Helgeland.",
    href: "/destinations/helgeland-coast",
    category: "Destination",
    priority: 6,
    keywords: [
      "helgeland",
      "helgeland coast",
      "helgeland travel guide",
      "helgeland route",
      "coastal norway road trip",
    ],
  },
  {
    id: "tromso-guide",
    title: "Tromso travel guide",
    description:
      "Plan Tromso with northern lights, city logistics, winter activities, stays and no-car options.",
    href: "/destinations/tromso",
    category: "Destination",
    priority: 6,
    keywords: [
      "tromso",
      "tromso travel guide",
      "tromso itinerary",
      "tromso where to stay",
      "arctic city guide",
    ],
  },
  {
    id: "routes-hub",
    title: "Norway road trip routes hub",
    description:
      "Browse route frameworks and connect destinations, ferries and realistic timing windows.",
    href: "/routes",
    category: "Route",
    priority: 5,
    keywords: [
      "routes",
      "norway road trip routes",
      "route planning norway",
      "coastal routes norway",
      "ferry route norway",
    ],
  },
  {
    id: "map-tool",
    title: "Explore Norway by map",
    description:
      "Use the map to compare destination positions, distances and route flow before locking a plan.",
    href: "/map",
    category: "Tool",
    priority: 4,
    keywords: [
      "map",
      "norway map",
      "distance planning",
      "travel map",
      "destinations map",
    ],
  },
  {
    id: "responsible-hub",
    title: "Responsible travel in Norway",
    description:
      "Practical guidance on weather, safety, road behavior, local respect and low-impact travel habits.",
    href: "/responsible-travel",
    category: "Guidance",
    priority: 5,
    keywords: [
      "responsible travel",
      "travel safety",
      "what not to do",
      "road safety norway",
      "leave no trace norway",
    ],
  },
  {
    id: "about-norge",
    title: "About Norge",
    description:
      "Read the editorial approach behind the portal and how guides are structured for practical planning.",
    href: "/about",
    category: "About",
    priority: 3,
    keywords: [
      "about",
      "about norge",
      "about this website",
      "who made this guide",
      "editorial approach",
    ],
  },
  {
    id: "journal",
    title: "Journal archive",
    description:
      "Browse destination stories, atmosphere notes and visual entries from across Norway.",
    href: "/journal",
    category: "Journal",
    priority: 3,
    keywords: [
      "journal",
      "travel journal",
      "stories",
      "photo journal",
      "norway notes",
    ],
  },
];
