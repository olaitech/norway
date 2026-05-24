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
  title: string;
  duration: string;
  season: string;
  description: string;
  travelNote: string;
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
    duration: "5 - 7 days",
    season: "May - September",
    description:
      "A ferry-linked coastal passage through island detours and open sea views.",
    travelNote:
      "Crossing schedules shape each day; overnight stops reduce rushing.",
    googleMapsUrl: googleDirectionsUrl({
      origin: "Bronnoysund, Norway",
      destination: "Bodo, Norway",
      waypoints: ["Sandnessjoen, Norway", "Nesna, Norway"],
    }),
  },
  {
    title: "Lofoten scenic route",
    duration: "4 - 6 days",
    season: "May - October",
    description:
      "A slow western journey between harbours, beaches and mountain-framed roads.",
    travelNote:
      "Short driving distances leave time for changing weather and light.",
    googleMapsUrl: googleDirectionsUrl({
      origin: "Svolvaer, Norway",
      destination: "A i Lofoten, Norway",
      waypoints: ["Henningsvaer, Norway", "Ramberg, Norway", "Reine, Norway"],
    }),
  },
];
