export type StartHereCategory =
  | "routes"
  | "destinations"
  | "seasons"
  | "northern-lights"
  | "responsible-travel"
  | "map"
  | "budget"
  | "transport";

export type StartHereItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  category: StartHereCategory;
  intentKeywords: string[];
  searchKeywords: string[];
  relatedHrefs: string[];
  priority: number;
  icon: string;
};

export const startHereItems: StartHereItem[] = [
  {
    id: "plan-road-trip",
    eyebrow: "ROUTES",
    title: "I want to plan a road trip",
    description:
      "Scenic roads, ferry crossings and slower routes through Norway's most dramatic landscapes.",
    href: "/routes",
    category: "routes",
    intentKeywords: [
      "plan a road trip",
      "road trip",
      "driving route",
      "scenic route",
      "norway itinerary",
      "coastal route",
      "ferry route",
    ],
    searchKeywords: [
      "routes",
      "road trip norway",
      "norway road trip",
      "scenic roads",
      "fv17",
      "helgeland coastal route",
      "lofoten route",
      "senja route",
    ],
    relatedHrefs: ["/routes", "/map", "/destinations"],
    priority: 100,
    icon: "Route",
  },
  {
    id: "choose-destination",
    eyebrow: "DESTINATIONS",
    title: "I want to choose a destination",
    description:
      "Compare Lofoten, Senja, Helgeland, Tromso and other places worth slowing down for.",
    href: "/destinations",
    category: "destinations",
    intentKeywords: [
      "choose a destination",
      "where should i go",
      "best places in norway",
      "places to visit",
      "destinations",
    ],
    searchKeywords: [
      "lofoten",
      "senja",
      "helgeland",
      "tromso",
      "northern norway destinations",
      "where to go in norway",
    ],
    relatedHrefs: [
      "/destinations/lofoten-islands",
      "/destinations/senja",
      "/destinations/helgeland-coast",
      "/destinations/tromso",
    ],
    priority: 95,
    icon: "MapPin",
  },
  {
    id: "understand-seasons",
    eyebrow: "SEASONS",
    title: "I want to understand the seasons",
    description:
      "Midnight sun, northern lights, winter roads, summer crowds and when Norway feels at its best.",
    href: "/best-time-to-visit-norway",
    category: "seasons",
    intentKeywords: [
      "best time to visit norway",
      "when to visit norway",
      "norway seasons",
      "summer or winter",
      "midnight sun",
      "winter travel",
    ],
    searchKeywords: [
      "best time",
      "seasons",
      "midnight sun",
      "winter",
      "summer",
      "northern lights season",
      "weather norway",
    ],
    relatedHrefs: ["/northern-lights-norway", "/responsible-travel", "/routes"],
    priority: 90,
    icon: "CalendarDays",
  },
  {
    id: "see-northern-lights",
    eyebrow: "AURORA",
    title: "I want to see the northern lights",
    description:
      "Where to go, when to travel and what to understand before chasing aurora skies.",
    href: "/northern-lights-norway",
    category: "northern-lights",
    intentKeywords: [
      "see northern lights",
      "northern lights",
      "aurora",
      "aurora borealis",
      "northern lights norway",
      "tromso northern lights",
    ],
    searchKeywords: [
      "northern lights",
      "aurora",
      "tromso aurora",
      "lofoten northern lights",
      "senja northern lights",
      "winter norway",
    ],
    relatedHrefs: [
      "/destinations/tromso",
      "/best-time-to-visit-norway",
      "/destinations/senja",
    ],
    priority: 88,
    icon: "Sparkles",
  },
  {
    id: "travel-responsibly",
    eyebrow: "RESPONSIBLE TRAVEL",
    title: "I want to travel responsibly",
    description:
      "Camping rules, fragile nature, local communities, weather safety and respectful travel.",
    href: "/responsible-travel",
    category: "responsible-travel",
    intentKeywords: [
      "travel responsibly",
      "camping rules",
      "wild camping",
      "leave no trace",
      "responsible travel",
      "sustainable travel",
    ],
    searchKeywords: [
      "camping rules norway",
      "wild camping norway",
      "allemannsretten",
      "leave no trace",
      "nature respect",
      "local communities",
      "safety",
    ],
    relatedHrefs: [
      "/responsible-travel#camping",
      "/responsible-travel#winter-driving",
      "/map",
    ],
    priority: 85,
    icon: "Leaf",
  },
  {
    id: "use-map",
    eyebrow: "MAP",
    title: "I want to use the map",
    description:
      "See where places actually are, how far apart they feel, and how routes connect.",
    href: "/map",
    category: "map",
    intentKeywords: [
      "use the map",
      "map",
      "where is",
      "route map",
      "norway map",
      "travel distances",
    ],
    searchKeywords: [
      "map",
      "norway map",
      "destinations map",
      "route planner",
      "driving distance",
      "google maps",
    ],
    relatedHrefs: ["/routes", "/destinations", "/routes"],
    priority: 80,
    icon: "Map",
  },
  {
    id: "save-money",
    eyebrow: "BUDGET",
    title: "I want to save money",
    description:
      "Local, practical ways to make Norway easier on your travel budget.",
    href: "/guides/50-local-money-saving-tips-for-norway",
    category: "budget",
    intentKeywords: [
      "save money",
      "budget norway",
      "cheap norway",
      "money saving tips",
      "travel norway on a budget",
    ],
    searchKeywords: [
      "budget",
      "save money norway",
      "cheap travel norway",
      "food prices norway",
      "transport costs",
      "camping budget",
    ],
    relatedHrefs: [
      "/responsible-travel",
      "/routes",
      "/guides/how-to-travel-northern-norway-without-a-car",
    ],
    priority: 75,
    icon: "Wallet",
  },
  {
    id: "without-car",
    eyebrow: "TRANSPORT",
    title: "I want to travel without a car",
    description:
      "Buses, ferries, flights and realistic ways to move through Northern Norway.",
    href: "/guides/how-to-travel-northern-norway-without-a-car",
    category: "transport",
    intentKeywords: [
      "travel without a car",
      "without car",
      "public transport norway",
      "bus ferry norway",
      "northern norway without car",
    ],
    searchKeywords: [
      "without a car",
      "bus",
      "ferry",
      "svipper",
      "entur",
      "avinor",
      "public transport",
      "northern norway transport",
    ],
    relatedHrefs: [
      "/destinations/senja#getting-around",
      "/destinations/senja#senja-ferries",
      "/map",
    ],
    priority: 78,
    icon: "Bus",
  },
];

function normalizeSearchInput(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, " ");
}

function scoreTokenPresence(value: string, tokens: readonly string[], weight: number) {
  const normalizedValue = normalizeSearchInput(value);
  return tokens.reduce((total, token) => {
    if (token.length < 2) {
      return total;
    }

    return normalizedValue.includes(token) ? total + weight : total;
  }, 0);
}

export function getStartHereItems() {
  return [...startHereItems].sort((left, right) => {
    if (left.priority !== right.priority) {
      return right.priority - left.priority;
    }

    return left.title.localeCompare(right.title);
  });
}

export function getStartHereItemById(id: string) {
  return startHereItems.find((item) => item.id === id);
}

export function getStartHereItemsByCategory(category: StartHereCategory) {
  return getStartHereItems().filter((item) => item.category === category);
}

export function getRelatedStartHereItems(currentHref: string, limit = 3) {
  const normalizedHref = currentHref.trim();
  const normalizedLimit = Math.max(0, limit);

  return getStartHereItems()
    .filter((item) => item.href !== normalizedHref)
    .sort((left, right) => {
      const leftRelated = left.relatedHrefs.includes(normalizedHref) ? 1 : 0;
      const rightRelated = right.relatedHrefs.includes(normalizedHref) ? 1 : 0;

      if (leftRelated !== rightRelated) {
        return rightRelated - leftRelated;
      }

      if (left.priority !== right.priority) {
        return right.priority - left.priority;
      }

      return left.title.localeCompare(right.title);
    })
    .slice(0, normalizedLimit);
}

export function searchStartHereItems(query: string, limit = 5) {
  const normalizedQuery = normalizeSearchInput(query);
  const normalizedLimit = Math.max(0, limit);

  if (!normalizedQuery) {
    return [];
  }

  const queryTokens = normalizedQuery.split(" ").filter(Boolean);

  const scoredItems = startHereItems
    .map((item) => {
      const normalizedTitle = normalizeSearchInput(item.title);
      const normalizedDescription = normalizeSearchInput(item.description);
      const normalizedIntentKeywords = item.intentKeywords.map((keyword) =>
        normalizeSearchInput(keyword),
      );
      const normalizedSearchKeywords = item.searchKeywords.map((keyword) =>
        normalizeSearchInput(keyword),
      );

      let score = 0;

      if (normalizedIntentKeywords.some((keyword) => keyword === normalizedQuery)) {
        score += 240;
      }

      if (normalizedSearchKeywords.some((keyword) => keyword === normalizedQuery)) {
        score += 200;
      }

      if (normalizedTitle === normalizedQuery) {
        score += 180;
      } else if (normalizedTitle.includes(normalizedQuery)) {
        score += 140;
      }

      if (normalizedDescription.includes(normalizedQuery)) {
        score += 90;
      }

      if (normalizedIntentKeywords.some((keyword) => keyword.includes(normalizedQuery))) {
        score += 120;
      }

      if (normalizedSearchKeywords.some((keyword) => keyword.includes(normalizedQuery))) {
        score += 105;
      }

      score += scoreTokenPresence(item.title, queryTokens, 22);
      score += scoreTokenPresence(item.description, queryTokens, 10);

      score += normalizedIntentKeywords.reduce((total, keyword) => {
        return total + scoreTokenPresence(keyword, queryTokens, 16);
      }, 0);

      score += normalizedSearchKeywords.reduce((total, keyword) => {
        return total + scoreTokenPresence(keyword, queryTokens, 13);
      }, 0);

      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (left.score !== right.score) {
        return right.score - left.score;
      }

      if (left.item.priority !== right.item.priority) {
        return right.item.priority - left.item.priority;
      }

      return left.item.title.localeCompare(right.item.title);
    });

  return scoredItems.slice(0, normalizedLimit).map((entry) => entry.item);
}
