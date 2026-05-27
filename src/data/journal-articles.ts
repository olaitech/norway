export type JournalArticleSection = {
  heading: string;
  body: string[];
};

export type JournalArticlePracticalNote = {
  label: string;
  value: string;
};

export type JournalArticle = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  region: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  publishedLabel: string;
  updatedLabel: string;
  highlights: string[];
  practicalNotes: JournalArticlePracticalNote[];
  sections: JournalArticleSection[];
  relatedSlugs: string[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "the-road-to-senja",
    title: "The Road to Senja",
    subtitle:
      "A quiet route through Arctic coastlines, mountain shadows and roads that seem to disappear into the sea.",
    category: "Field Note",
    region: "Senja, Northern Norway",
    readTime: "6 min read",
    image: "/images/cards/senja.png",
    imageAlt:
      "A moody coastal road on Senja with mountains, fjords and low Arctic cloud",
    excerpt:
      "A quiet route through Arctic coastlines, mountain shadows and roads that seem to disappear into the sea.",
    seoTitle:
      "The Road to Senja - A Cinematic Travel Guide to Norway's Wild Arctic Island",
    seoDescription:
      "Explore Senja in Northern Norway through a cinematic route guide covering scenic roads, fjords, ferries, seasons, viewpoints and practical travel notes.",
    publishedLabel: "Field note",
    updatedLabel: "Updated for current Norway travel planning",
    highlights: [
      "Drive one of Norway's most atmospheric coastal routes",
      "Combine Senja with Tromso, Andoya or a wider Northern Norway road trip",
      "Experience fjords, fishing villages, beaches and sharp Arctic mountains",
      "Best explored slowly, with time for weather, ferries and unplanned stops",
    ],
    practicalNotes: [
      {
        label: "Best for",
        value:
          "Slow road trips, photography, fjords, Arctic coastlines and travellers who want something quieter than Lofoten.",
      },
      {
        label: "Suggested time",
        value:
          "2-4 days for Senja itself, longer if combined with Tromso, Andoya or Lofoten.",
      },
      {
        label: "Best season",
        value:
          "June to September for long drives and hiking; late September to March for northern lights and winter atmosphere.",
      },
      {
        label: "Route style",
        value:
          "Coastal roads, ferry connections, small villages, viewpoints and weather-dependent stops.",
      },
      {
        label: "Good to know",
        value:
          "Ferry schedules, road conditions and weather can shape the journey, especially outside summer.",
      },
    ],
    sections: [
      {
        heading: "An island that feels larger than the map",
        body: [
          "Senja does not arrive loudly. It appears slowly, as the road starts to bend toward darker mountains, narrow fjords and small settlements held close to the coast. On a map, the island looks manageable. In real life, it feels much larger - not because of distance alone, but because the landscape constantly asks you to stop.",
          "Norway's second-largest island sits in Northern Norway, between Tromso, Andoya and the open Norwegian Sea. It has the kind of geography that makes a road trip feel cinematic without trying too hard: steep mountains dropping into cold water, beaches that appear suddenly between cliffs, fishing villages facing the weather, and roads that seem to follow the edge of the world.",
          "The Road to Senja is not only one road. It is a mood. It is the feeling of driving with low cloud over the peaks, watching the sea change colour every few minutes, and realizing that the best parts of the journey are not always marked as attractions.",
        ],
      },
      {
        heading: "Why Senja works so well as a cinematic route",
        body: [
          "Senja is often described as a quieter alternative to Lofoten, but that is only partly true. It has the sharp mountains, Arctic beaches and fishing villages people associate with Northern Norway, but the rhythm is different. The island feels less staged, less polished, and more elemental. It is a place where the road still feels connected to local life.",
          "The National Scenic Route Senja follows some of the island's most dramatic coastal scenery. Along the way, the landscape shifts between open sea, narrow fjords, mountain walls and small villages. The route is not about rushing from one famous viewpoint to the next. It works best when you let the weather lead. A grey day can make the mountains feel heavier and more powerful. A clear evening can turn an ordinary bend in the road into a scene you remember for years.",
          "For a cinematic Norway website, Senja is exactly the kind of destination that belongs near the centre of the story. It gives travellers what they are really looking for when they search for Norway: scale, silence, wild weather, northern light and a sense of being far from the ordinary.",
        ],
      },
      {
        heading: "How to reach Senja",
        body: [
          "Most travellers approach Senja from Tromso, Bardufoss, Andoya or as part of a wider Northern Norway road trip. From Tromso, the journey can be shaped by the ferry connection between Brensholmen and Botnhamn when it is operating, or by driving inland and entering the island by road. From the west, the Gryllefjord-Andenes ferry can connect Senja with Andoya, creating one of the most rewarding coastal route combinations in Northern Norway.",
          "These ferry links are part of what makes the region feel special. They turn the journey into something slower and more physical. You wait at the quay. You watch the weather move across the water. You understand that in Northern Norway, travel is not only about roads - it is also about crossings.",
          "For practical planning, travellers should always check current ferry timetables, seasonal operation and road conditions before building a tight itinerary. Senja rewards flexible planning. A route that looks simple in a spreadsheet may feel very different when fog settles over the pass or when the evening light makes you stop every ten minutes.",
        ],
      },
      {
        heading: "What to see along the way",
        body: [
          "The most memorable stops on Senja are often shaped by the coast. Roads curve between mountain and sea. Beaches appear in unexpected places. Viewpoints are built into the landscape rather than placed above it. Places like Bergsbotn, Tungeneset, Ersfjordstranda and the outer coastal areas show why Senja has become one of Northern Norway's most atmospheric road trip destinations.",
          "But the deeper appeal is not only in named stops. It is in the transitions. A tunnel opening onto a fjord. A narrow road passing red and white houses below a dark mountain. A beach glowing pale under a heavy sky. A fishing harbour where the only movement is a gull, a rope, a boat, the weather.",
          "That is why Senja works better as a slow route than a checklist. You can see the highlights in a day, but you will not really feel the island that way. Two to four days gives you space to let the landscape breathe.",
        ],
      },
      {
        heading: "When to drive the Road to Senja",
        body: [
          "Summer brings long days, open roads, hiking possibilities and the soft intensity of Arctic light. From June into August, Senja becomes easier to explore, especially for first-time visitors who want flexibility and safer driving conditions. This is also the season when the island's beaches, mountain trails and coastal viewpoints are at their most accessible.",
          "September can be one of the most beautiful months. The crowds are thinner, the air turns sharper, the colours deepen and the first northern lights can return when the sky is dark and clear enough. It is a strong shoulder-season choice for travellers who want atmosphere without the peak-summer pressure.",
          "Winter changes Senja completely. Roads, weather and daylight require more care, but the reward is huge: blue hour, snow-covered peaks, polar-night mood and the possibility of aurora above fjords and mountains. Winter Senja is not the easiest version of the island, but it may be the most cinematic.",
        ],
      },
      {
        heading: "How long should you stay?",
        body: [
          "If Senja is part of a larger Northern Norway route, two nights can give a meaningful first impression. You can drive parts of the scenic route, stop at the major viewpoints and still have time for one slow evening by the coast. Three to four nights is better if you want to photograph changing light, hike, wait for weather windows or combine the island with Tromso or Andoya.",
          "A rushed day trip is possible, but it turns Senja into scenery instead of experience. The island is not built for speed. It is built for pauses - the kind where you pull over without knowing exactly why, step out into wind, and suddenly understand why people travel so far north.",
          "For a first visit, a good rhythm is simple: arrive without a packed schedule, choose a coastal base, drive one section of the route each day, and leave room for the weather to change your plan.",
        ],
      },
      {
        heading: "Who Senja is perfect for",
        body: [
          "Senja is ideal for travellers who want Northern Norway without feeling like they are following the exact same route as everyone else. It suits photographers, road trip travellers, slow travellers, hikers and people drawn to places that still feel slightly raw.",
          "It is less ideal for those who want constant restaurants, nightlife, shopping or highly organized tourism infrastructure. Senja has comfort, cabins, places to stay and memorable food experiences, but the island's real luxury is space. The value is in the road, the silence, the weather and the feeling of being close to something elemental.",
          "That is what makes Senja different. It does not try to impress you at every second. It simply lets the landscape do the work.",
        ],
      },
      {
        heading: "Final note",
        body: [
          "The Road to Senja is not a route you should overplan. Give it time. Let the ferries, clouds, sea and light become part of the journey. Some places in Norway are famous because they photograph well. Senja stays with you because it changes while you are there.",
          "It is a place for travellers who understand that the best roads are not always the fastest ones. Sometimes the road that matters is the one that makes you slow down.",
        ],
      },
    ],
    relatedSlugs: [
      "lofoten-beyond-the-postcards",
      "when-to-visit-northern-norway",
      "how-to-plan-a-scenic-norway-road-trip",
    ],
  },
  {
    slug: "blue-hour-on-the-helgeland-coast",
    title: "Blue Hour on the Helgeland Coast",
    subtitle:
      "An evening road note from ferries, coastal inlets and quiet islands under soft northern light.",
    category: "Visual Note",
    region: "Helgeland Coast",
    readTime: "4 min read",
    image: "/images/cards/helgeland.png",
    imageAlt: "Calm sea and coastal road on the Helgeland Coast at dusk",
    excerpt:
      "A slow evening drive where sea mist softens the islands and the last ferries cross silver water.",
    seoTitle: "Blue Hour on the Helgeland Coast | Journal | Norge",
    seoDescription:
      "A short visual note from Norway's Helgeland Coast during blue hour with practical timing for ferries and coastal pauses.",
    publishedLabel: "Published: May 2026",
    updatedLabel: "Updated: May 2026",
    highlights: [
      "Blue-hour light often lasts longer than expected along open coast.",
      "Ferry timing can define the whole evening rhythm.",
      "Small harbors offer the calmest late-day viewpoints.",
    ],
    practicalNotes: [
      { label: "Suggested duration", value: "2-3 days around key ferry legs." },
      { label: "Best season", value: "Late spring to early autumn." },
      { label: "Route pairing", value: "Works well with the Helgeland road trip route." },
    ],
    sections: [
      {
        heading: "Evening Window",
        body: [
          "The coast settles into a narrow tonal range in late evening. Mountains flatten, water brightens, and distances feel longer than they are.",
        ],
      },
      {
        heading: "Ferry-Led Movement",
        body: [
          "Treat ferry departures as anchors, then leave room between crossings for short shoreline detours.",
        ],
      },
    ],
    relatedSlugs: [
      "how-to-plan-a-scenic-norway-road-trip",
      "where-norway-feels-most-cinematic",
      "the-road-to-senja",
    ],
  },
  {
    slug: "lofoten-beyond-the-postcards",
    title: "Lofoten Beyond the Postcards",
    subtitle:
      "A short route observation on quieter corners of Lofoten beyond the familiar stopping points.",
    category: "Route Observation",
    region: "Lofoten Islands",
    readTime: "7 min read",
    image: "/images/cards/lofoten.png",
    imageAlt: "Lofoten village and mountains in shifting weather",
    excerpt:
      "Fishing villages, rain-dark rock and quieter coves discovered beyond the familiar viewpoints.",
    seoTitle: "Lofoten Beyond the Postcards | Journal | Norge",
    seoDescription:
      "A concise field note on finding quieter roads and villages in Lofoten while keeping a slower cinematic travel pace.",
    publishedLabel: "Published: May 2026",
    updatedLabel: "Updated: May 2026",
    highlights: [
      "Small detours often outperform iconic stops at peak hours.",
      "Weather direction can quickly improve visibility on neighboring roads.",
      "Fewer base changes make Lofoten feel less rushed.",
    ],
    practicalNotes: [
      { label: "Trip length", value: "5-7 days for a balanced route." },
      { label: "Best approach", value: "Use two or three base stays, not daily moves." },
      { label: "Continue to", value: "Pair with Senja or a longer northern route." },
    ],
    sections: [
      {
        heading: "Beyond Main Viewpoints",
        body: [
          "Lofoten opens up when you accept that the best frames are sometimes between official stops.",
        ],
      },
      {
        heading: "Working with Light",
        body: [
          "Use low-angle morning and evening windows to revisit the same road in a new mood.",
        ],
      },
    ],
    relatedSlugs: [
      "the-road-to-senja",
      "where-norway-feels-most-cinematic",
      "how-to-plan-a-scenic-norway-road-trip",
    ],
  },
  {
    slug: "when-to-visit-northern-norway",
    title: "When to Visit Northern Norway",
    subtitle:
      "A seasonal note on timing, light windows and route intent across Arctic Norway.",
    category: "Seasonal Note",
    region: "Northern Norway",
    readTime: "5 min read",
    image: "/images/cards/tromsø.png",
    imageAlt: "Northern Norway coastline under changing Arctic sky",
    excerpt:
      "Reading light, weather and distance before choosing the right season for an Arctic journey.",
    seoTitle: "When to Visit Northern Norway | Journal | Norge",
    seoDescription:
      "A compact seasonal note on choosing the right time for Northern Norway based on light, weather and route goals.",
    publishedLabel: "Published: May 2026",
    updatedLabel: "Updated: May 2026",
    highlights: [
      "Late spring and early autumn often balance access and atmosphere.",
      "Winter adds aurora potential but requires tighter weather margins.",
      "Summer enables long-light road days across wider distances.",
    ],
    practicalNotes: [
      { label: "Aurora period", value: "Late September through March." },
      { label: "Road-trip window", value: "May through September for easiest logistics." },
      { label: "Best for first trip", value: "June or early September." },
    ],
    sections: [
      {
        heading: "Season by Intent",
        body: [
          "Choose the season by priority: aurora, long-light drives, or lower crowd pressure.",
        ],
      },
      {
        heading: "Plan Around Flexibility",
        body: [
          "Build daily margin into any season because Arctic weather shifts can be abrupt.",
        ],
      },
    ],
    relatedSlugs: [
      "the-road-to-senja",
      "how-to-plan-a-scenic-norway-road-trip",
      "lofoten-beyond-the-postcards",
    ],
  },
  {
    slug: "where-norway-feels-most-cinematic",
    title: "Where Norway Feels Most Cinematic",
    subtitle:
      "A visual essay placeholder on scale, weather and roads that shape Norway's strongest moods.",
    category: "Visual Essay",
    region: "Norway",
    readTime: "8 min read",
    image: "/images/hero/preikestolen.png",
    imageAlt: "A traveler above a Norwegian fjord at a high viewpoint",
    excerpt:
      "Landscapes where shifting weather and immense scale turn an ordinary pause into a scene.",
    seoTitle: "Where Norway Feels Most Cinematic | Journal | Norge",
    seoDescription:
      "A short visual essay placeholder exploring where Norway's scale, weather and road geometry feel most cinematic.",
    publishedLabel: "Published: May 2026",
    updatedLabel: "Updated: May 2026",
    highlights: [
      "Scale and silence often matter more than headline landmarks.",
      "Coastal transitions create stronger cinematic contrast than fixed viewpoints.",
      "Routes with slower pacing produce better visual memory.",
    ],
    practicalNotes: [
      { label: "Best use", value: "Treat as inspiration before route planning." },
      { label: "Pair with", value: "Use alongside route and seasonal guides." },
      { label: "Focus", value: "Plan for atmosphere, not stop-count." },
    ],
    sections: [
      {
        heading: "Landscape as Narrative",
        body: [
          "Norway feels most cinematic where roads, water and mountain walls share the same frame.",
        ],
      },
      {
        heading: "Pacing as Composition",
        body: [
          "A slower route turns changing weather into part of the story rather than a disruption.",
        ],
      },
    ],
    relatedSlugs: [
      "blue-hour-on-the-helgeland-coast",
      "lofoten-beyond-the-postcards",
      "the-road-to-senja",
    ],
  },
  {
    slug: "how-to-plan-a-scenic-norway-road-trip",
    title: "How to Plan a Scenic Norway Road Trip",
    subtitle:
      "A practical planning note on pacing, ferries and route structure for a calmer Norway journey.",
    category: "Field Guide",
    region: "Coastal Norway",
    readTime: "6 min read",
    image: "/images/hero/hero (2).jpg",
    imageAlt: "A scenic Norwegian landscape suited to a road trip",
    excerpt:
      "Building a route with room for ferries, roadside pauses and unplanned coastal light.",
    seoTitle: "How to Plan a Scenic Norway Road Trip | Journal | Norge",
    seoDescription:
      "A concise planning note for scenic Norway road trips with route pacing, ferry strategy and seasonal buffers.",
    publishedLabel: "Published: May 2026",
    updatedLabel: "Updated: May 2026",
    highlights: [
      "Plan around ferry constraints before selecting daily stops.",
      "Route quality improves when drive days stay conservative.",
      "Weather buffers are non-negotiable in coastal Norway.",
    ],
    practicalNotes: [
      { label: "Daily drive target", value: "Keep most days below 3-4 hours net driving." },
      { label: "Ferry method", value: "Lock major crossings first, then lodging." },
      { label: "Best first routes", value: "Start with Lofoten or Helgeland structures." },
    ],
    sections: [
      {
        heading: "Start with Constraints",
        body: [
          "Strong route plans begin with ferries, daylight windows and realistic transfer days.",
        ],
      },
      {
        heading: "Protect the Pace",
        body: [
          "Leave intentional slack in the schedule so weather and light can shape the final route.",
        ],
      },
    ],
    relatedSlugs: [
      "blue-hour-on-the-helgeland-coast",
      "when-to-visit-northern-norway",
      "the-road-to-senja",
    ],
  },
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}

export function getRelatedJournalArticles(article: JournalArticle) {
  return article.relatedSlugs
    .map((relatedSlug) => getJournalArticle(relatedSlug))
    .filter((related): related is JournalArticle => related !== undefined);
}
