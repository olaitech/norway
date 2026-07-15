export type RouteFinderQuestionId =
  | "duration"
  | "experience"
  | "transport"
  | "season";

export type RouteFinderAnswerValue =
  | "three-to-four-days"
  | "five-to-seven-days"
  | "eight-to-ten-days"
  | "two-weeks"
  | "quiet-coastlines"
  | "dramatic-fjords"
  | "arctic-light"
  | "mountains-and-trails"
  | "islands-and-ferries"
  | "rental-car"
  | "public-transport"
  | "car-and-ferry"
  | "still-deciding"
  | "winter"
  | "spring"
  | "summer"
  | "autumn";

export type RouteFinderAnswers = Partial<
  Record<RouteFinderQuestionId, RouteFinderAnswerValue>
>;

export type RouteFinderQuestion = {
  id: RouteFinderQuestionId;
  eyebrow: string;
  title: string;
  description: string;
  choices: ReadonlyArray<{
    id: RouteFinderAnswerValue;
    label: string;
    description: string;
  }>;
};

export type RouteFinderGuide = {
  title: string;
  href: string;
};

export type RouteFinderRecommendation = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  guides: ReadonlyArray<RouteFinderGuide>;
  matches: Record<RouteFinderQuestionId, ReadonlyArray<RouteFinderAnswerValue>>;
};

export const routeFinderQuestions = [
  {
    id: "duration",
    eyebrow: "01 / Pace",
    title: "How much time do you have?",
    description: "A little space in the itinerary makes weather, ferries and light part of the journey.",
    choices: [
      { id: "three-to-four-days", label: "3–4 days", description: "One focused landscape" },
      { id: "five-to-seven-days", label: "5–7 days", description: "A considered route" },
      { id: "eight-to-ten-days", label: "8–10 days", description: "Room for detours" },
      { id: "two-weeks", label: "Two weeks", description: "A slower, wider journey" },
    ],
  },
  {
    id: "experience",
    eyebrow: "02 / Landscape",
    title: "What do you want to feel?",
    description: "Choose the landscape that should guide the route, not a checklist to rush through.",
    choices: [
      { id: "quiet-coastlines", label: "Quiet coastlines", description: "Open sea and unhurried roads" },
      { id: "dramatic-fjords", label: "Dramatic fjords", description: "Water, height and long views" },
      { id: "arctic-light", label: "Arctic light", description: "Low sun, blue hour or aurora" },
      { id: "mountains-and-trails", label: "Mountains and trails", description: "Peaks, paths and weather" },
      { id: "islands-and-ferries", label: "Islands and ferries", description: "Crossings as part of the day" },
    ],
  },
  {
    id: "transport",
    eyebrow: "03 / Movement",
    title: "How would you like to move?",
    description: "The best route is the one that suits your confidence, time and appetite for connections.",
    choices: [
      { id: "rental-car", label: "Rental car", description: "Flexible scenic stops" },
      { id: "public-transport", label: "Public transport", description: "Base yourself and go lightly" },
      { id: "car-and-ferry", label: "Car and ferry", description: "Roads linked by crossings" },
      { id: "still-deciding", label: "Still deciding", description: "Keep the route adaptable" },
    ],
  },
  {
    id: "season",
    eyebrow: "04 / Season",
    title: "When are you travelling?",
    description: "Season changes the daylight, driving conditions and rhythm of every route.",
    choices: [
      { id: "winter", label: "Winter", description: "Snow, darkness and aurora" },
      { id: "spring", label: "Spring", description: "Longer days and a quieter pace" },
      { id: "summer", label: "Summer", description: "Midnight light and fuller crossings" },
      { id: "autumn", label: "Autumn", description: "Low light and changing weather" },
    ],
  },
] as const satisfies ReadonlyArray<RouteFinderQuestion>;

export const routeFinderRecommendations = [
  {
    id: "lofoten-road-trip",
    eyebrow: "Primary route / Lofoten",
    title: "Lofoten Road Trip",
    summary: "A measured east-to-west journey through fishing villages, mountain roads, beaches and changing Arctic weather.",
    href: "/routes/lofoten-road-trip",
    imageSrc: "/images/cards/lofoten.png",
    imageAlt: "Mountain peaks rising beyond a coastal road in Lofoten",
    guides: [
      { title: "Lofoten Islands guide", href: "/destinations/lofoten-islands" },
      { title: "Driving in Norway", href: "/guides/driving-in-norway-what-visitors-should-know" },
    ],
    matches: {
      duration: ["five-to-seven-days", "eight-to-ten-days"],
      experience: ["arctic-light", "mountains-and-trails", "islands-and-ferries"],
      transport: ["rental-car", "car-and-ferry", "still-deciding"],
      season: ["spring", "summer", "autumn"],
    },
  },
  {
    id: "helgeland-coast-road-trip",
    eyebrow: "Primary route / Helgeland",
    title: "Helgeland Coast Road Trip",
    summary: "An unhurried coastal passage of island ferries, quiet roads and wide northern horizons from Brønnøysund toward Bodø.",
    href: "/routes/helgeland-coast-road-trip",
    imageSrc: "/images/cards/helgeland.png",
    imageAlt: "A road following the open Helgeland coastline",
    guides: [
      { title: "Helgeland Coast guide", href: "/destinations/helgeland-coast" },
      { title: "Norway ferry guide", href: "/guides/norway-ferry-guide-for-tourists" },
    ],
    matches: {
      duration: ["five-to-seven-days", "eight-to-ten-days", "two-weeks"],
      experience: ["quiet-coastlines", "islands-and-ferries"],
      transport: ["rental-car", "car-and-ferry", "still-deciding"],
      season: ["spring", "summer", "autumn"],
    },
  },
  {
    id: "fjords-of-norway",
    eyebrow: "Landscape guide / Western Norway",
    title: "Fjords of Norway",
    summary: "Use the fjords as a route framework, then shape realistic days around roads, weather windows and the landscapes you want to linger in.",
    href: "/fjords-of-norway",
    imageSrc: "/images/destinations/fjords/norway-fjord1.jpg",
    imageAlt: "A Norwegian fjord enclosed by steep mountains",
    guides: [
      { title: "Best time to visit Norway", href: "/best-time-to-visit-norway" },
      { title: "Open the Norway map", href: "/map" },
    ],
    matches: {
      duration: ["three-to-four-days", "five-to-seven-days", "eight-to-ten-days", "two-weeks"],
      experience: ["dramatic-fjords", "mountains-and-trails"],
      transport: ["rental-car", "still-deciding"],
      season: ["spring", "summer", "autumn"],
    },
  },
  {
    id: "northern-lights-norway",
    eyebrow: "Seasonal guide / Arctic Norway",
    title: "Northern Lights in Norway",
    summary: "A winter-first planning path for travellers who want to build a flexible Arctic stay around darkness, weather and patient evenings outdoors.",
    href: "/northern-lights-norway",
    imageSrc: "/images/cards/tromso.png",
    imageAlt: "Aurora over snowy mountains near Tromsø",
    guides: [
      { title: "How to see the northern lights", href: "/guides/how-to-see-the-northern-lights-in-norway" },
      { title: "Tromsø guide", href: "/destinations/tromso" },
    ],
    matches: {
      duration: ["three-to-four-days", "five-to-seven-days"],
      experience: ["arctic-light", "mountains-and-trails"],
      transport: ["public-transport", "rental-car", "still-deciding"],
      season: ["winter"],
    },
  },
  {
    id: "senja-coastal-journey",
    eyebrow: "Destination route / Senja",
    title: "Senja Coastal Journey",
    summary: "A compact northern route for mountain edges, quiet beaches and viewpoint roads, best approached with time to adapt to the weather.",
    href: "/destinations/senja",
    imageSrc: "/images/cards/senja.png",
    imageAlt: "Mountain-lined coast on Senja",
    guides: [
      { title: "Northern Norway without a car", href: "/guides/how-to-travel-northern-norway-without-a-car" },
      { title: "Open the Norway map", href: "/map" },
    ],
    matches: {
      duration: ["three-to-four-days", "five-to-seven-days"],
      experience: ["quiet-coastlines", "mountains-and-trails", "islands-and-ferries"],
      transport: ["rental-car", "car-and-ferry", "still-deciding"],
      season: ["spring", "summer", "autumn"],
    },
  },
] as const satisfies ReadonlyArray<RouteFinderRecommendation>;
