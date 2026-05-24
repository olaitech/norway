export type DestinationSlug =
  | "lofoten-islands"
  | "senja"
  | "helgeland-coast"
  | "tromso";

type DestinationFact = {
  label: string;
  value: string;
};

type DestinationHighlight = {
  title: string;
  description: string;
};

type DestinationRouteStop = {
  days: string;
  title: string;
  description: string;
};

type DestinationFaq = {
  question: string;
  answer: string;
};

export type Destination = {
  slug: DestinationSlug;
  title: string;
  subtitle: string;
  label: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
  metaTitle: string;
  metaDescription: string;
  facts: DestinationFact[];
  whyVisit: string[];
  bestTime: DestinationHighlight[];
  thingsToDo: DestinationHighlight[];
  route: DestinationRouteStop[];
  quietMoments: string;
  photographyNotes: string;
  faq: DestinationFaq[];
};

export const destinations: Destination[] = [
  {
    slug: "lofoten-islands",
    title: "Lofoten Islands",
    subtitle: "Dramatic peaks & fishing villages",
    label: "Island archipelago | Nordland",
    intro:
      "A chain of steep mountains, sheltered harbours and long coastal light, made for an unhurried drive between small fishing villages.",
    imageSrc: "/images/cards/lofoten.png",
    imageAlt:
      "Mountain peaks rising above a small coastal village in the Lofoten Islands",
    imagePosition: "center center",
    metaTitle: "Lofoten Islands | Norge Destinations",
    metaDescription:
      "Explore a cinematic placeholder guide to the Lofoten Islands, with seasonal notes, quiet experiences and a suggested coastal route.",
    facts: [
      { label: "Best season", value: "May - September" },
      { label: "Region", value: "Nordland" },
      { label: "Travel style", value: "Coastal road trip" },
      { label: "Ideal days", value: "4 - 6 days" },
    ],
    whyVisit: [
      "Lofoten brings sharp alpine scenery directly to the sea. Red cabins, narrow beaches and weather moving across the peaks make even short drives feel memorable.",
      "The islands reward a slower pace: one village base, early walks and enough room in the schedule to follow changing light.",
    ],
    bestTime: [
      {
        title: "Late spring and summer",
        description:
          "Long daylight opens up hiking, kayaking and quiet evening beach walks beneath the midnight sun.",
      },
      {
        title: "Autumn and winter",
        description:
          "More changeable weather brings softer light, fewer visitors and chances of northern lights above the fishing villages.",
      },
    ],
    thingsToDo: [
      {
        title: "Village mornings",
        description:
          "Begin in Reine or Henningsvaer before the roads and harbours become busier.",
      },
      {
        title: "Coastal trails",
        description:
          "Choose a short ridge or shoreline walk based on conditions and visibility.",
      },
      {
        title: "Sheltered beaches",
        description:
          "Pause at pale-sand coves framed by dark peaks and Atlantic water.",
      },
    ],
    route: [
      {
        days: "Days 1 - 2",
        title: "Svolvaer to Henningsvaer",
        description:
          "Ease into the islands with harbour walks, galleries and a nearby coastal viewpoint.",
      },
      {
        days: "Days 3 - 4",
        title: "Ramberg and Reine",
        description:
          "Follow the E10 west, stopping for beaches and slow afternoons among the fishing villages.",
      },
      {
        days: "Days 5 - 6",
        title: "Moskenes light",
        description:
          "Leave time for a weather-dependent hike or a final quiet morning beside the water.",
      },
    ],
    quietMoments:
      "Walk a harbour edge just after first light, when the boats are still and the mountain reflections hold for a few minutes.",
    photographyNotes:
      "Pack a wide lens for peaks and shoreline, plus a light telephoto for cabins and layered ridges. Weather shifts quickly, so keep protection close.",
    faq: [
      {
        question: "Do I need a car in Lofoten?",
        answer:
          "A car gives the most flexibility for remote beaches and changing weather, although the main villages can be combined with local transport in season.",
      },
      {
        question: "How many bases should I choose?",
        answer:
          "For a four to six day trip, two bases usually keep drives short while giving access to both eastern and western islands.",
      },
      {
        question: "Is summer the only time to visit?",
        answer:
          "No. Summer is easiest for long days outdoors, while shoulder seasons and winter offer quieter roads and a very different atmosphere.",
      },
    ],
  },
  {
    slug: "senja",
    title: "Senja",
    subtitle: "Norway's hidden cinematic island",
    label: "Wild island | Troms",
    intro:
      "A quieter northern island where steep coastal ridges, narrow fjords and small communities meet along one of Norway's most atmospheric roads.",
    imageSrc: "/images/cards/senja.png",
    imageAlt: "Steep coastal mountains and water on the island of Senja",
    imagePosition: "center center",
    metaTitle: "Senja | Norge Destinations",
    metaDescription:
      "Discover a calm placeholder travel guide to Senja, including seasonal advice, island experiences and a suggested scenic route.",
    facts: [
      { label: "Best season", value: "June - October" },
      { label: "Region", value: "Troms" },
      { label: "Travel style", value: "Scenic island drive" },
      { label: "Ideal days", value: "3 - 5 days" },
    ],
    whyVisit: [
      "Senja offers northern drama with a sense of space. Viewpoints appear above deep water, while small villages provide quiet pauses between the island's more rugged sections.",
      "It suits travellers looking for landscape first, with simple days built around weather, walking and the road itself.",
    ],
    bestTime: [
      {
        title: "Summer light",
        description:
          "Open mountain paths and extended daylight make it easy to combine viewpoints, beaches and longer drives.",
      },
      {
        title: "Early autumn",
        description:
          "Clearer evenings can bring northern lights, while subdued colours settle across the coastline.",
      },
    ],
    thingsToDo: [
      {
        title: "National scenic route",
        description:
          "Drive the island's western edge slowly, allowing time for the designed lookout stops.",
      },
      {
        title: "Bergsbotn viewpoint",
        description:
          "Look across the fjord from an elevated platform with a broad sense of the terrain.",
      },
      {
        title: "Quiet shorelines",
        description:
          "Find a calm beach or harbour for an evening pause when the light begins to lower.",
      },
    ],
    route: [
      {
        days: "Day 1",
        title: "Finnsnes to Mefjordvaer",
        description:
          "Cross onto Senja and settle near the dramatic northern coastline.",
      },
      {
        days: "Days 2 - 3",
        title: "Scenic route viewpoints",
        description:
          "Follow the outer road through Tungeneset and Bergsbotn, adapting stops to the weather.",
      },
      {
        days: "Days 4 - 5",
        title: "Southern return",
        description:
          "Take a gentler final day through sheltered fjords before leaving the island.",
      },
    ],
    quietMoments:
      "Wait beside a smooth fjord after an evening shower, when cloud breaks reveal isolated peaks without needing to go anywhere else.",
    photographyNotes:
      "The island works especially well in low cloud and side light. A polarising filter can help manage wet road and water reflections between showers.",
    faq: [
      {
        question: "Is Senja suitable for a short visit?",
        answer:
          "Three days provides a meaningful introduction, but extra time makes the trip less dependent on a single spell of good weather.",
      },
      {
        question: "Can Senja be combined with Tromso?",
        answer:
          "Yes. It is a natural pairing for a northern journey, with ferry and road options varying by season.",
      },
      {
        question: "Are hiking plans weather dependent?",
        answer:
          "Very much so. Coastal mountain conditions can change quickly, so keep flexible lower-level alternatives available.",
      },
    ],
  },
  {
    slug: "helgeland-coast",
    title: "Helgeland Coast",
    subtitle: "Quiet roads & Arctic shoreline",
    label: "Coastal passage | Nordland",
    intro:
      "A composed journey of ferry crossings, low island silhouettes and open coastal roads along a less hurried stretch of northern Norway.",
    imageSrc: "/images/cards/helgeland.png",
    imageAlt: "An open road following the rugged shoreline of the Helgeland Coast",
    imagePosition: "center center",
    metaTitle: "Helgeland Coast | Norge Destinations",
    metaDescription:
      "Plan a slow placeholder journey along the Helgeland Coast with seasonal guidance, island stops and a suggested ferry-linked route.",
    facts: [
      { label: "Best season", value: "May - September" },
      { label: "Region", value: "Nordland" },
      { label: "Travel style", value: "Ferry road journey" },
      { label: "Ideal days", value: "5 - 7 days" },
    ],
    whyVisit: [
      "Helgeland is a route rather than a single viewpoint: ocean horizons, distinctive mountain forms and ferry decks that turn travel time into part of the experience.",
      "It is suited to travellers who prefer lightly planned days, small island detours and long pauses beside the water.",
    ],
    bestTime: [
      {
        title: "Late spring",
        description:
          "Fresh landscapes and quieter roads make a relaxed start to the coastal ferry season.",
      },
      {
        title: "High summer",
        description:
          "Regular connections, mild days and near-continuous light support cycling, island hopping and slow driving.",
      },
    ],
    thingsToDo: [
      {
        title: "Ferry crossings",
        description:
          "Use the coastal connections as viewing platforms across islands and mountain profiles.",
      },
      {
        title: "Island detours",
        description:
          "Spend a night on a smaller island for walking paths, beaches and a quieter horizon.",
      },
      {
        title: "Coastal cycling",
        description:
          "Choose a manageable section of quiet road for an open-air view of the shoreline.",
      },
    ],
    route: [
      {
        days: "Days 1 - 2",
        title: "Brannoysund and Vega",
        description:
          "Begin in the south with island landscapes and an unhurried overnight detour.",
      },
      {
        days: "Days 3 - 4",
        title: "Sandnessjoen coastline",
        description:
          "Move north by ferry and road beneath the Seven Sisters mountain range.",
      },
      {
        days: "Days 5 - 7",
        title: "Towards Bodo",
        description:
          "Continue through smaller crossings and shoreline pauses before the route's northern finish.",
      },
    ],
    quietMoments:
      "Take the outside deck on a late ferry crossing and watch low islands pass in near silence under a wide northern sky.",
    photographyNotes:
      "A simple travel kit works best here. Look for repeating ferry ramps, roadside grasses and distant mountain silhouettes to give the open landscape scale.",
    faq: [
      {
        question: "Do ferry schedules shape the journey?",
        answer:
          "Yes. Check seasonal schedules while planning each day and leave comfortable margins between connections.",
      },
      {
        question: "Is this route best by car?",
        answer:
          "A car makes island stops straightforward, while confident cyclists can build a rewarding shorter itinerary around select crossings.",
      },
      {
        question: "How long should the full coast take?",
        answer:
          "Five to seven days gives enough time for ferry travel and one or two slower island stays without rushing north.",
      },
    ],
  },
  {
    slug: "tromso",
    title: "Troms\u00f8",
    subtitle: "Northern lights & Arctic city life",
    label: "Arctic city | Troms",
    intro:
      "A compact northern city framed by mountains and water, balancing warm interiors, Arctic culture and easy departures into darker skies.",
    imageSrc: "/images/cards/troms\u00f8.png",
    imageAlt: "Tromso waterfront beneath an Arctic evening sky",
    imagePosition: "center center",
    metaTitle: "Troms\u00f8 | Norge Destinations",
    metaDescription:
      "Explore a refined placeholder guide to Tromso, including northern seasons, city experiences and quiet Arctic excursions.",
    facts: [
      { label: "Best season", value: "September - March" },
      { label: "Region", value: "Troms" },
      { label: "Travel style", value: "Arctic city break" },
      { label: "Ideal days", value: "3 - 4 days" },
    ],
    whyVisit: [
      "Tromso provides an accessible northern base without losing the feeling of wilderness. Restaurants, museums and harbour walks sit close to fjords and dark-sky excursions.",
      "In winter it offers a comfortable rhythm: brief daylight outside, warm city pauses and flexible evenings for aurora conditions.",
    ],
    bestTime: [
      {
        title: "Autumn to early spring",
        description:
          "Dark evenings create the setting for northern lights trips, with winter adding snow and polar-night atmosphere.",
      },
      {
        title: "Late spring and summer",
        description:
          "Midnight sun changes the city tempo and supports bright-night hikes, cruises and coastal drives.",
      },
    ],
    thingsToDo: [
      {
        title: "Harbour and culture",
        description:
          "Explore the compact centre, Arctic exhibitions and a quiet cafe between outings.",
      },
      {
        title: "Mountain outlook",
        description:
          "Take in the city, islands and surrounding peaks from an elevated viewpoint.",
      },
      {
        title: "Dark-sky evening",
        description:
          "Travel away from city light with a flexible aurora outing guided by the forecast.",
      },
    ],
    route: [
      {
        days: "Day 1",
        title: "City arrival",
        description:
          "Settle in with a harbour walk, local dinner and a first look at the evening forecast.",
      },
      {
        days: "Day 2",
        title: "Views and Arctic culture",
        description:
          "Combine city museums with a mountain outlook before a possible night excursion.",
      },
      {
        days: "Days 3 - 4",
        title: "Fjord edge",
        description:
          "Choose a coastal drive or boat journey, keeping one more evening open for clear skies.",
      },
    ],
    quietMoments:
      "Leave the centre after fresh snow and walk beside the harbour as reflected lights soften on the dark water.",
    photographyNotes:
      "For winter evenings, carry spare batteries and a stable tripod. Balance aurora ambitions with blue-hour city frames when clouds remain overhead.",
    faq: [
      {
        question: "Can I see northern lights from the city?",
        answer:
          "They can appear above Tromso, but moving away from urban light generally improves visibility and the experience.",
      },
      {
        question: "Do I need a rental car?",
        answer:
          "No for a city-based trip. Guided excursions and local transport cover many highlights, while a car adds flexibility for daylight drives.",
      },
      {
        question: "Is Tromso only a winter destination?",
        answer:
          "No. Winter is popular for darkness and snow, while summer offers midnight sun and a different range of outdoor days.",
      },
    ],
  },
];

export const featuredDestinations = destinations.map(
  ({ slug, title, subtitle, imageSrc, imageAlt }) => ({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    href: `/destinations/${slug}`,
  }),
);

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getRelatedDestinations(slug: DestinationSlug) {
  return destinations.filter((destination) => destination.slug !== slug);
}
