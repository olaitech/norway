import { destinations, type DestinationSlug } from "./destinations";

export type MapFilterKey =
  | "all"
  | "islands"
  | "northern-lights"
  | "scenic-roads"
  | "fjords";

type DestinationMapConfig = {
  coordinates: [number, number];
  categories: Exclude<MapFilterKey, "all">[];
  googleMapsQuery: string;
};

export type MapPlace = {
  slug: DestinationSlug;
  title: string;
  description: string;
  bestSeason: string;
  idealDays: string;
  coordinates: [number, number];
  categories: Exclude<MapFilterKey, "all">[];
  href: string;
  googleMapsUrl: string;
};

export type MapFilter = {
  key: MapFilterKey;
  label: string;
};

export type FeaturedRoute = {
  id: string;
  /** Ordered [latitude, longitude] stops, not drivable road geometry. */
  routePoints: [number, number][];
  title: string;
  duration: string;
  season: string;
  description: string;
  travelNote: string;
  href?: string;
  googleMapsUrl: string;
};

const mapConfig: Record<DestinationSlug, DestinationMapConfig> = {
  "lofoten-islands": {
    coordinates: [68.12, 13.56],
    categories: ["islands", "scenic-roads", "fjords"],
    googleMapsQuery: "Lofoten Islands, Norway",
  },
  senja: {
    coordinates: [69.31, 17.48],
    categories: ["islands", "northern-lights", "scenic-roads", "fjords"],
    googleMapsQuery: "Senja, Norway",
  },
  "helgeland-coast": {
    coordinates: [65.91, 12.22],
    categories: ["islands", "scenic-roads", "fjords"],
    googleMapsQuery: "Helgeland Coast, Norway",
  },
  tromso: {
    coordinates: [69.6492, 18.9553],
    categories: ["northern-lights", "fjords"],
    googleMapsQuery: "Tromso, Norway",
  },
};

function getFact(
  destination: (typeof destinations)[number],
  label: string,
): string {
  return (
    destination.facts.find((fact) => fact.label === label)?.value ??
    "Flexible"
  );
}

export const mapPlaces: MapPlace[] = destinations.map((destination) => {
  const config = mapConfig[destination.slug];

  return {
    slug: destination.slug,
    title: destination.title,
    description: destination.subtitle,
    bestSeason: getFact(destination, "Best season"),
    idealDays: getFact(destination, "Ideal days"),
    coordinates: config.coordinates,
    categories: config.categories,
    href: `/destinations/${destination.slug}`,
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.googleMapsQuery)}`,
  };
});

export const mapFilters: MapFilter[] = [
  { key: "all", label: "All" },
  { key: "islands", label: "Islands" },
  { key: "northern-lights", label: "Northern lights" },
  { key: "scenic-roads", label: "Scenic roads" },
  { key: "fjords", label: "Fjords" },
];

function googleDirectionsUrl({
  destination,
  origin,
  waypoints,
}: {
  destination: string;
  origin: string;
  waypoints?: string[];
}) {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination,
    travelmode: "driving",
  });

  if (waypoints?.length) {
    params.set("waypoints", waypoints.join("|"));
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export const featuredRoutes: FeaturedRoute[] = [
  {
    id: "northern-norway-7-days",
    routePoints: [
      [69.6492, 18.9553], // Tromsø
      [69.31, 17.48], // Senja
      [68.2343, 14.5682], // Svolvær
      [67.9325, 13.0896], // Reine
    ],
    title: "Northern Norway 7-day route",
    duration: "7 days",
    season: "September - March",
    description:
      "Tromso, Senja and Lofoten connected by Arctic shorelines and clear-sky evenings.",
    travelNote:
      "Allow unhurried transfer days and keep aurora evenings flexible.",
    googleMapsUrl: googleDirectionsUrl({
      origin: "Tromso, Norway",
      destination: "Reine, Norway",
      waypoints: ["Senja, Norway", "Svolvaer, Norway"],
    }),
  },
  {
    title: "Helgeland Coast road trip",
    id: "helgeland-coast-road-trip",
    routePoints: [
      [65.4749, 12.2117], // Brønnøysund
      [66.0217, 12.6316], // Sandnessjøen
      [66.1967, 13.0213], // Nesna
      [67.2804, 14.4049], // Bodø
    ],
    duration: "5 - 7 days",
    season: "May - September",
    description:
      "A ferry-linked coastal passage through island detours and open sea views.",
    travelNote:
      "Crossing schedules shape each day; overnight stops reduce rushing.",
    href: "/routes/helgeland-coast-road-trip",
    googleMapsUrl: googleDirectionsUrl({
      origin: "Bronnoysund, Norway",
      destination: "Bodo, Norway",
      waypoints: ["Sandnessjoen, Norway", "Nesna, Norway"],
    }),
  },
  {
    title: "Lofoten scenic route",
    id: "lofoten-scenic-route",
    routePoints: [
      [68.2343, 14.5682], // Svolvær
      [68.1544, 14.2057], // Henningsvær
      [68.0897, 13.2296], // Ramberg
      [67.9325, 13.0896], // Reine
      [67.8806, 12.9826], // Å
    ],
    duration: "4 - 6 days",
    season: "May - October",
    description:
      "A slow western journey between harbours, beaches and mountain-framed roads.",
    travelNote:
      "Short driving distances leave time for changing weather and light.",
    href: "/routes/lofoten-road-trip",
    googleMapsUrl: googleDirectionsUrl({
      origin: "Svolvaer, Norway",
      destination: "A i Lofoten, Norway",
      waypoints: ["Henningsvaer, Norway", "Ramberg, Norway", "Reine, Norway"],
    }),
  },
];
