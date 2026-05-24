export type JournalEntry = {
  slug: string;
  title: string;
  type: string;
  location: string;
  readTime: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
};

export const featuredJournalEntry: JournalEntry = {
  slug: "the-road-to-senja",
  title: "The Road to Senja",
  type: "Field Note",
  location: "Senja, Northern Norway",
  readTime: "6 min read",
  description:
    "A quiet route through Arctic coastlines, mountain shadows and roads that seem to disappear into the sea.",
  imageSrc: "/images/cards/senja.png",
  imageAlt: "A narrow road meeting the Arctic coastline beneath mountains on Senja",
  imagePosition: "center 48%",
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "blue-hour-on-the-helgeland-coast",
    title: "Blue Hour on the Helgeland Coast",
    type: "Visual Note",
    location: "Helgeland Coast",
    readTime: "4 min read",
    description:
      "A slow evening drive where sea mist softens the islands and the last ferries cross silver water.",
    imageSrc: "/images/cards/helgeland.png",
    imageAlt: "A coastal road following calm water along the Helgeland Coast",
  },
  {
    slug: "lofoten-beyond-the-postcards",
    title: "Lofoten Beyond the Postcards",
    type: "Route Observation",
    location: "Lofoten Islands",
    readTime: "7 min read",
    description:
      "Fishing villages, rain-dark rock and quieter coves discovered beyond the familiar viewpoints.",
    imageSrc: "/images/cards/lofoten.png",
    imageAlt: "A remote fishing village framed by mountain peaks in Lofoten",
  },
  {
    slug: "when-to-visit-northern-norway",
    title: "When to Visit Northern Norway",
    type: "Seasonal Note",
    location: "Northern Norway",
    readTime: "5 min read",
    description:
      "Reading light, weather and distance before choosing the right season for an Arctic journey.",
    imageSrc: "/images/cards/troms\u00f8.png",
    imageAlt: "An Arctic coastal city beneath a changing northern sky",
  },
  {
    slug: "where-norway-feels-most-cinematic",
    title: "Where Norway Feels Most Cinematic",
    type: "Visual Essay",
    location: "Norway",
    readTime: "8 min read",
    description:
      "Landscapes where shifting weather and immense scale turn an ordinary pause into a scene.",
    imageSrc: "/images/hero/preikestolen.png",
    imageAlt: "A traveler overlooking a vast Norwegian fjord from a high cliff",
    imagePosition: "center 42%",
  },
  {
    slug: "how-to-plan-a-scenic-norway-road-trip",
    title: "How to Plan a Scenic Norway Road Trip",
    type: "Field Guide",
    location: "Coastal Norway",
    readTime: "6 min read",
    description:
      "Building a route with room for ferries, roadside pauses and unplanned coastal light.",
    imageSrc: "/images/hero/hero (2).jpg",
    imageAlt: "A quiet Norwegian landscape suited to an unhurried road journey",
  },
];
