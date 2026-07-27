export type JournalArticleImage = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
};

export type JournalArticleImageGroup = {
  images: JournalArticleImage[];
  caption?: string;
};

export type JournalArticleSection = {
  heading: string;
  body: string[];
  image?: JournalArticleImage;
  imageGroups?: JournalArticleImageGroup[];
  sourceMarker?: string;
  variant?: "testimony";
};

export type JournalArticlePracticalNote = {
  label: string;
  value: string;
};

export type JournalArticleFieldNoteEntry = {
  dateLabel: string;
  title: string;
  sections: JournalArticleSection[];
};

export type JournalArticleLink = {
  label: string;
  href: string;
};

export type JournalArticleTimelineItem = {
  period: string;
  label: string;
};

export type JournalArticleSource = JournalArticleLink & {
  marker: string;
};

export type JournalArticleSourceGroup = {
  title: string;
  sources: JournalArticleSource[];
};

export type HistoricalArticlePeriod = {
  id: string;
  years: string;
  label: string;
};

export type HistoricalArticleImageLabel = {
  category: string;
  caption: string;
  provenance?: string;
};

export type HistoricalArticleObjectRecordDetail = {
  label: string;
  value: string;
};

export type HistoricalArticleObjectRecord = {
  id: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageLabel: HistoricalArticleImageLabel;
  narrative: string[];
  inventoryNumber: string;
  technicalDetails: HistoricalArticleObjectRecordDetail[];
};

export type HistoricalArticleEvidenceFact = {
  year: string;
  fact: string;
  sourceMarker: string;
};

export type HistoricalArticleStoryBlock =
  | {
      type: "intro" | "section";
      periodId: string;
      sectionHeading: string;
      tone?: "dark" | "paper";
      eyebrow?: string;
    }
  | {
      type: "chapter";
      id: string;
      periodId: string;
      chapterLabel: string;
      title: string;
      sectionHeading: string;
      imageSrc: string;
      supportingImageSrcs?: string[];
      imagePosition: "left" | "right";
      imageLayout?: "wide";
      tone?: "dark" | "paper";
      imageLabel: HistoricalArticleImageLabel;
      relatedObjectRecord?: HistoricalArticleObjectRecord;
    }
  | {
      type: "transition";
      periodId: string;
      year: string;
      line: string;
    }
  | {
      type: "evidence";
      periodId: string;
      facts: HistoricalArticleEvidenceFact[];
    }
  | {
      type: "humanStory";
      periodId: string;
      sectionHeading: string;
      sourceMarkers: string[];
      steps: string[];
    }
  | {
      type: "closing";
      periodId: string;
      sectionHeading: string;
      imageSrcs: string[];
    };

export type HistoricalArticleExperience = {
  heroTitleLines?: string[];
  periods: HistoricalArticlePeriod[];
  storyBlocks: HistoricalArticleStoryBlock[];
};

const CURRENT_ARTICLE_UPDATE_DATE = "2026-06-25";

export type JournalArticle = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  kicker?: string;
  schemaSection?: string;
  region: string;
  readTime: string;
  image: string;
  imageAlt: string;
  heroImageFit?: "cover" | "contain";
  heroOverlayOpacity?: number;
  excerpt: string;
  cardExcerpt?: string;
  seoTitle: string;
  seoDescription: string;
  publishedDate?: string;
  updatedDate?: string;
  publishedLabel: string;
  updatedLabel: string;
  highlights: string[];
  practicalNotes: JournalArticlePracticalNote[];
  sections?: JournalArticleSection[];
  fieldNoteEntries?: JournalArticleFieldNoteEntry[];
  timeline?: JournalArticleTimelineItem[];
  sourceGroups?: JournalArticleSourceGroup[];
  sourcesNote?: string;
  historicalExperience?: HistoricalArticleExperience;
  relatedSlugs: string[];
  relatedLinks?: JournalArticleLink[];
  relatedLinksLabel?: string;
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "field-notes-heroy-helgeland",
    title: "Field Notes from Herøy",
    subtitle:
      "A growing collection of photographs, observations and local stories from a journey through Herøy on the Helgeland coast.",
    category: "Field Notes",
    kicker: "Field Notes · Herøy · Helgeland Coast",
    region: "Herøy, Helgeland",
    readTime: "7 min read",
    image: "/images/journal/helgeland/heroy/heroy-red-boathouses.jpg",
    imageAlt: "Traditional red boathouses beside the sea on Herøy, Helgeland",
    heroOverlayOpacity: 0.84,
    excerpt:
      "A growing field journal from four slow days on Herøy, following quiet roads, small harbours and the everyday coastal landscapes between planned stops.",
    seoTitle: "Field Notes from Herøy, Helgeland",
    seoDescription:
      "A growing field journal from Herøy on the Helgeland coast, following quiet roads, small harbours, local life and four days of coastal photography.",
    publishedDate: "2026-07-15",
    updatedDate: "2026-07-17",
    publishedLabel: "First entry: 15 July",
    updatedLabel: "Updated: 17 July 2026",
    highlights: [
      "A first quiet-morning note and a four-day field collection from Herøy.",
      "Small harbours, fields, coastal water and everyday island life photographed slowly.",
      "A café pause on Seløy, in Herøy municipality.",
    ],
    practicalNotes: [
      {
        label: "Field collection",
        value: "Four days driving the roads of Herøy",
      },
      {
        label: "Photographs",
        value: "Made on Herøy, with a café stop on Seløy",
      },
      {
        label: "Landscape",
        value: "Small harbours, fields, sheltered water and island roads",
      },
      {
        label: "Travel mood",
        value: "Quiet, local and unhurried",
      },
    ],
    fieldNoteEntries: [
      {
        dateLabel: "15 July",
        title: "A Quiet Morning on Herøy",
        sections: [
          {
            heading: "Low clouds over Herøy",
            body: [
              "This morning, I got up with my daughter at half past eight.",
              "While she settled into the day, I made a cup of coffee and looked out across the water, waiting for my laptop to start. Outside, the coast was quiet. There were no cars rushing through the streets and no people hurrying to work. I could hear gulls above the shoreline and the soft movement of waves against the rocks.",
              "I had brought my family to Herøy for four days — a few days for small discoveries, fishing, watching boats and slowing down together. My daughter loves boats, and out here there is always something moving across the water, even when everything else feels still.",
              "For me, the journey is also about finding a little peace. Leaving the noise and pace of town behind for a few days. Waking up somewhere where the morning does not immediately ask anything from you.",
              "Sitting at the table with a warm cup of coffee in my hand, I opened the computer and began writing about the quiet life here on the Helgeland coast — while actually living inside it.",
              "I feel privileged to be able to work this way. From a wooden cabin on an island, surrounded by my family, the sea and a landscape that moves at a different pace.",
              "This is not a polished travel campaign or a story written months after returning home. It is a field note written in the moment, from Herøy, while the gulls are still calling outside and the coffee is still warm.",
            ],
            image: {
              src: "/images/journal/helgeland/heroy/heroy-cabin-workspace.jpg",
              alt: "Laptop and coffee on a cabin table while working from Herøy",
            },
          },
          {
            heading: "A quieter version of the coast",
            body: [
              "This is not the dramatic, sunlit version of Northern Norway usually shown in travel campaigns. It is something quieter and perhaps more honest: changing weather, still water, weathered timber and the feeling that life here follows the sea rather than the clock.",
              "I have set up my laptop at the kitchen table inside a warm wooden cabin. The amber lights above the table create a small pocket of warmth against the grey coastal day outside. It is a surprisingly good place to work on Trips Norway — surrounded by the landscapes the website is trying to describe.",
            ],
            image: {
              src: "/images/journal/helgeland/heroy/heroy-floating-dock.jpg",
              alt: "Floating dock and yellow kayak in sheltered coastal water on Herøy",
            },
          },
          {
            heading: "Entering the island landscape",
            body: [
              "Travelling through Herøy feels less like arriving at one single attraction and more like slowly entering a coastal landscape shaped by boats, bridges, sheltered water, changing weather and small communities.",
            ],
            image: {
              src: "/images/journal/helgeland/heroy/heroy-grass-path.jpg",
              alt: "Green grass path leading towards coastal houses on Herøy",
            },
          },
        ],
      },
      {
        dateLabel: "Field collection · four days on Herøy",
        title: "Four Days Along the Island Roads",
        sections: [
          {
            heading: "A quieter Herøy, found between planned stops",
            body: [
              "Over four days on Herøy, the road rarely moved far from the water. It passed small harbours, weathered houses, green fields and places where boats remained part of ordinary life.",
              "These photographs were made while driving without a fixed list of attractions. Together they form a record of the quieter Herøy found between planned stops.",
            ],
          },
          {
            heading: "Harbours Beside the Road",
            body: [
              "On Herøy, the boundary between road and harbour often feels slight. A turn can open onto a sheltered inlet, a line of small boats or a set of steps leading directly into clear coastal water.",
            ],
            image: {
              src: "/images/destinations/helgeland/field-notes-heroy/heroy-quiet-harbour-boats.jpg",
              alt: "Small boats moored in a sheltered harbour on Herøy beneath low summer clouds.",
            },
            imageGroups: [
              {
                images: [
                  {
                    src: "/images/destinations/helgeland/field-notes-heroy/heroy-sea-bathing-steps.jpg",
                    alt: "Wooden and metal bathing steps descending into clear coastal water on Herøy.",
                  },
                  {
                    src: "/images/destinations/helgeland/field-notes-heroy/heroy-ducks-coastal-pond.jpg",
                    alt: "Ducks crossing a sheltered coastal pond beside a road on Herøy.",
                  },
                ],
                caption:
                  "Small details from the road: bathing steps and a sheltered coastal pond on Herøy.",
              },
            ],
          },
          {
            heading: "Between Fields and Salt Water",
            body: [
              "Red farm buildings and weathered timber stand within a landscape where cultivated ground, exposed rock and sea are never far apart. The scale is modest, but the relationship between buildings and coastline gives the islands much of their character.",
            ],
            image: {
              src: "/images/destinations/helgeland/field-notes-heroy/heroy-red-farm-buildings.jpg",
              alt: "Traditional red farm buildings surrounded by green fields on Herøy.",
            },
            imageGroups: [
              {
                images: [
                  {
                    src: "/images/destinations/helgeland/field-notes-heroy/heroy-weathered-coastal-house.jpg",
                    alt: "A weathered wooden coastal house among summer wildflowers on Herøy.",
                  },
                  {
                    src: "/images/destinations/helgeland/field-notes-heroy/heroy-bygdesamling-exterior.jpg",
                    alt: "The red timber exterior of Herøy Bygdesamling beneath an overcast sky.",
                    label: "Documentary note",
                    caption:
                      "Herøy Bygdesamling photographed from the exterior during the four-day field collection.",
                  },
                ],
                caption:
                  "Weathered timber and a red collection building, photographed without assigning wider historical detail.",
              },
            ],
          },
          {
            heading: "A Pause on Seløy",
            body: [
              "One of the warmer stops came indoors, at a small café on Seløy. After several hours on the road, books, baking and conversation offered a different kind of field note: a reminder that the coast is not only scenery, but also a place of everyday work and meeting.",
            ],
            imageGroups: [
              {
                images: [
                  {
                    src: "/images/destinations/helgeland/field-notes-heroy/heroy-seloy-local-cafe.jpg",
                    alt: "Visitors inside a small local café on Seløy in Herøy.",
                  },
                ],
                caption:
                  "A smaller field-note photograph from a café on Seløy in Herøy municipality. People are not identified.",
              },
            ],
          },
          {
            heading: "The Coast Is Always Present",
            body: [
              "Bridges make the journey possible by road, but the sea remains present in every direction. From a sunlit pier, a bridge crossing or a quiet sailboat in sheltered water, movement through Herøy still feels shaped by the coastline.",
            ],
            image: {
              src: "/images/destinations/helgeland/field-notes-heroy/heroy-summer-pier.jpg",
              alt: "Sunlight over a wooden pier and sheltered coastal water on Herøy.",
            },
            imageGroups: [
              {
                images: [
                  {
                    src: "/images/destinations/helgeland/field-notes-heroy/heroy-coastal-bridge.jpg",
                    alt: "A low coastal bridge crossing sheltered water between the islands of Herøy.",
                  },
                  {
                    src: "/images/destinations/helgeland/field-notes-heroy/heroy-sailboat-and-boathouse.jpg",
                    alt: "A sailboat and red boathouse beside a sheltered inlet on Herøy.",
                  },
                ],
                caption:
                  "Road connections and sheltered water, photographed while moving through Herøy.",
              },
            ],
          },
          {
            heading: "The road worth leaving",
            body: [
              "These are not photographs of a single attraction. They are fragments of four days spent moving slowly through Herøy — stopping when the light, the water or a small piece of ordinary island life made the road worth leaving.",
            ],
          },
        ],
      },
    ],
    relatedSlugs: [
      "blue-hour-on-the-helgeland-coast",
      "how-to-plan-a-scenic-norway-road-trip",
      "the-road-to-senja",
    ],
    relatedLinks: [
      {
        label: "Explore the Helgeland Coast",
        href: "/destinations/helgeland-coast",
      },
      {
        label: "Plan the Helgeland Coast road trip",
        href: "/routes/helgeland-coast-road-trip",
      },
      { label: "Browse the Journal", href: "/journal" },
    ],
  },
  {
    slug: "life-on-the-helgeland-coast-around-1900",
    title: "Life on the Helgeland Coast",
    subtitle:
      "Across the islands of Helgeland, preserved rooms and everyday objects open a window onto a coastal society shaped by fishing, small-scale farming, family labour and the sea.",
    category: "Coastal History",
    kicker: "Coastal History · 1890–1955",
    schemaSection: "Coastal History, 1890–1955",
    region: "Helgeland Coast",
    readTime: "13 min read",
    image:
      "/images/destinations/helgeland/coastal-history/heroy-coastal-history-red-table-room.jpg",
    imageAlt:
      "Preserved coastal sitting room with red tablecloths and historic furniture in Helgeland",
    heroImageFit: "contain",
    excerpt:
      "The communities were connected by boats, trade, letters and shared institutions, but life was never identical from one island to the next. These rooms gain meaning when read alongside photographs, public records, local histories and later memories.",
    cardExcerpt:
      "A visual history of everyday life on the Helgeland coast, from household work and schools to wartime change.",
    seoTitle: "Life on the Helgeland Coast, 1890–1955",
    seoDescription:
      "Explore everyday life on the Helgeland coast from 1890 to 1955 through preserved homes, coastal work, schools, fishing communities and carefully sourced wartime history.",
    publishedDate: "2026-07-17",
    updatedDate: "2026-07-27",
    publishedLabel: "Published: 17 July 2026",
    updatedLabel: "Updated: 27 July 2026",
    highlights: [
      "Preserved interiors and objects photographed across the Helgeland coast.",
      "Everyday work, learning, travel and changing connections between 1890 and 1955.",
      "Local evidence placed beside carefully separated national historical context.",
    ],
    practicalNotes: [
      {
        label: "Focus",
        value: "Everyday life across Helgeland’s varied coastal communities.",
      },
      {
        label: "Period",
        value: "Approximately 1890–1955.",
      },
      {
        label: "Photographs",
        value: "Preserved interiors and objects photographed across Helgeland; individual provenance is not assumed.",
      },
    ],
    timeline: [
      {
        period: "1890–1914",
        label: "Fishing, farming and household production",
      },
      {
        period: "1914–1918",
        label: "Neutrality, shortages and rising prices",
      },
      {
        period: "1918–1940",
        label: "Education, motorboats and uneven modernisation",
      },
      {
        period: "1940–1945",
        label: "Occupation, rationing and resistance",
      },
      {
        period: "1945–1955",
        label: "Reconstruction and changing connections",
      },
    ],
    historicalExperience: {
      heroTitleLines: ["Life on the", "Helgeland Coast"],
      periods: [
        {
          id: "home-and-work",
          years: "1890–1914",
          label: "Home and coastal work",
        },
        {
          id: "neutrality",
          years: "1914–1918",
          label: "A neutral country under pressure",
        },
        {
          id: "transition",
          years: "1918–1940",
          label: "A coast in transition",
        },
        {
          id: "occupation",
          years: "1940–1945",
          label: "Occupation",
        },
        {
          id: "connections",
          years: "1945–1955",
          label: "New connections",
        },
      ],
      storyBlocks: [
        {
          type: "intro",
          periodId: "home-and-work",
          sectionHeading: "Rooms that remember",
          eyebrow: "A visual record, read with care",
        },
        {
          type: "chapter",
          id: "room",
          periodId: "home-and-work",
          chapterLabel: "Object chapter I",
          title: "The room",
          sectionHeading: "The coastal home",
          imageSrc:
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-kitchen.jpg",
          supportingImageSrcs: [
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-piano.jpg",
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-sitting-room-portraits.jpg",
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-window-parlour.jpg",
          ],
          imagePosition: "right",
          imageLabel: {
            category: "Preserved interior",
            caption:
              "A coastal kitchen and living space photographed in a preserved collection on Helgeland.",
            provenance:
              "Exact household, island and object history have not yet been independently verified.",
          },
        },
        {
          type: "chapter",
          id: "loom",
          periodId: "home-and-work",
          chapterLabel: "Object chapter II",
          title: "The loom",
          sectionHeading: "Work made by hand",
          imageSrc:
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-loom.jpg",
          supportingImageSrcs: [
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-sewing-room.jpg",
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-log-room.jpg",
          ],
          imagePosition: "left",
          imageLabel: {
            category: "Preserved workroom",
            caption:
              "A loom photographed among preserved interior materials and practical household equipment on Helgeland.",
            provenance:
              "The photograph is used as a visual entry point, not as evidence for a named household or year.",
          },
        },
        {
          type: "section",
          periodId: "home-and-work",
          sectionHeading: "Between sea and land",
        },
        {
          type: "chapter",
          id: "island-boat",
          periodId: "home-and-work",
          chapterLabel: "Object chapter III",
          title: "The island boat",
          sectionHeading: "Fishing, farming and women’s work",
          imageSrc:
            "/images/destinations/helgeland/heroy-island-boat.png",
          imagePosition: "left",
          imageLayout: "wide",
          imageLabel: {
            category: "Preserved coastal boat",
            caption:
              "A boat connected to Sørøya in Austbø, used first for local fishing and later as an island boat for journeys to shared summer pastures.",
            provenance:
              "Bought by Nils Hermansen from Rana in 1872 and retained by the family until Hans Nilssen of Husvær donated it to Herøy bygdesamling in 1975. The boat is now preserved in Storbåtnaustet on Herøy. Ownership and use history supplied with the object information; an exact collection catalogue reference has not yet been added.",
          },
          relatedObjectRecord: {
            id: "enigheten",
            eyebrow: "Object record · 1914",
            heading: "Enigheten — a restored firroring",
            subheading:
              "Built for fishing, rowing and sailing with a broad load",
            imageSrc:
              "/images/destinations/helgeland/nordlandsbåt2.png",
            imageWidth: 802,
            imageHeight: 570,
            imageLabel: {
              category: "Restored Nordland boat",
              caption:
                "Enigheten, a firroring built at Bjerka in Sør-Rana in 1914 and later used for fishing, rowing and sailing.",
              provenance:
                "Collection reference HBS.G.10252. The object history, measurements and technical description were supplied from the available collection information. An exact public catalogue URL has not yet been added.",
            },
            narrative: [
              "Read together, the two boats document different parts of everyday coastal life without sharing the same use or ownership history. The Sørøya boat connects local fishing with women’s journeys to shared summer grazing, while Enigheten preserves a separate record of fishing, rowing, sailing, transport, ownership and restoration.",
              "The firroring Enigheten was built in 1914 by P. J. Breivik at Bjerka in Hemnes, Sør-Rana. According to the supplied object record, the boat was reportedly registered for fishing.",
              "Toralf Kristian Heen of Nordværnes bought Enigheten around 1990 from an older trader at Forstranda in Gildeskål. A later account attached to the boat says that it had once either been accepted as security for goods or used as payment. This has not been independently verified.",
              "Heen last used the boat at the national gathering in Brønnøysund in 2003. Geir Olsen of Indre Kvarøy bought it in 2017. During the same year, he exchanged it for a firroring managed by Helgeland Museum. That other boat had previously belonged to Olsen’s grandfather and had been bought by Herøy historielag during the 1970s for NOK 400.",
              "Enigheten is a broad-built Nordland boat with six strakes, five thwarts and four pairs of oars. It was rigged for a traditional “sneseil” and has four pairs of thole-pin positions. The boat is described as heavy to row but stable under sail with a broad load, and particularly well suited to gill-net fishing.",
              "The hull is tarred and protected below the waterline with antifouling paint. The supplied object description records red, white and pale-green paint on the upper strake, black-and-white splashboards, dark internal trim and pale yellow, red and white details above a tarred interior bottom.",
            ],
            inventoryNumber: "HBS.G.10252",
            technicalDetails: [
              { label: "Name", value: "Enigheten" },
              { label: "Object", value: "Nordland boat" },
              {
                label: "Classifications",
                value: "Nordlandsbåt · Ranværingsbåt · Firroring",
              },
              { label: "Built", value: "1914" },
              { label: "Builder", value: "P. J. Breivik" },
              {
                label: "Place built",
                value: "Bjerka, Hemnes, Sør-Rana",
              },
              {
                label: "Dimensions",
                value:
                  "Length 760 cm · Width 205 cm · Stem height 176 cm",
              },
              {
                label: "Construction and equipment",
                value:
                  "Six strakes · five thwarts · four pairs of oars · four pairs of thole-pin positions · rigged for “sneseil” · relatively broad construction · additional splashboards that can be raised",
              },
              {
                label: "Recorded use and performance",
                value:
                  "Fishing · sailing · rowing · transport · gill-net fishing · heavy to row · stable under sail with a broad load",
              },
            ],
          },
        },
        {
          type: "section",
          periodId: "home-and-work",
          sectionHeading: "A house could also be a workplace",
        },
        {
          type: "transition",
          periodId: "neutrality",
          year: "1914",
          line: "The war did not cross Norway’s border. Its consequences did.",
        },
        {
          type: "section",
          periodId: "neutrality",
          sectionHeading: "A neutral country, but not untouched",
        },
        {
          type: "transition",
          periodId: "transition",
          year: "1918",
          line: "New machines reached the coast. Old routines did not disappear.",
        },
        {
          type: "chapter",
          id: "written-word",
          periodId: "transition",
          chapterLabel: "Object chapter IV",
          title: "The written word",
          sectionHeading: "School, writing and connection",
          imageSrc:
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-typewriter-desk.jpg",
          supportingImageSrcs: [
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-schoolroom.jpg",
          ],
          imagePosition: "right",
          tone: "paper",
          imageLabel: {
            category: "Writing and learning",
            caption:
              "Writing tools and teaching materials photographed in preserved coastal collections.",
            provenance:
              "The typewriter is not presented as an ordinary household possession without documented provenance.",
          },
        },
        {
          type: "chapter",
          id: "sea",
          periodId: "transition",
          chapterLabel: "Object chapter V",
          title: "The sea",
          sectionHeading: "Motors, teachers and a changing coast",
          imageSrc:
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-model-boats.jpg",
          supportingImageSrcs: [
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-old-photographs.jpg",
          ],
          imagePosition: "left",
          tone: "paper",
          imageLabel: {
            category: "Maritime object",
            caption:
              "Model fishing boats and maritime objects photographed in a preserved Helgeland collection.",
            provenance:
              "The objects are not assigned here to a named island, household or date.",
          },
        },
        {
          type: "evidence",
          periodId: "transition",
          facts: [
            {
              year: "1907",
              fact: "The oldest part of the Zahl commercial building on Nesna dates from 1907.",
              sourceMarker: "1",
            },
            {
              year: "1918",
              fact: "Teacher education opened on Nesna with 56 students.",
              sourceMarker: "3",
            },
            {
              year: "1920–1940",
              fact: "A Helgeland Museum photograph documents fish-processing work associated with Dønna.",
              sourceMarker: "6",
            },
            {
              year: "1942",
              fact: "Construction of Grønsvik coastal fort began during the German occupation.",
              sourceMarker: "8",
            },
          ],
        },
        {
          type: "transition",
          periodId: "occupation",
          year: "1940",
          line: "Occupation entered ordinary rooms.",
        },
        {
          type: "section",
          periodId: "occupation",
          sectionHeading: "Occupation and everyday adaptation",
        },
        {
          type: "humanStory",
          periodId: "occupation",
          sectionHeading: "Lånan: a quiet island becomes part of the war",
          sourceMarkers: ["9", "10"],
          steps: [
            "A remote island became connected to clandestine communication and weapons transport.",
            "German forces moved closer to discovering the operation.",
            "Children and adults were evacuated towards Shetland during the night.",
            "Some details survive through later family memory and still require archival verification.",
          ],
        },
        {
          type: "transition",
          periodId: "connections",
          year: "1945",
          line: "Peace arrived before every shortage ended.",
        },
        {
          type: "section",
          periodId: "connections",
          sectionHeading: "After 1945",
        },
        {
          type: "closing",
          periodId: "connections",
          sectionHeading: "What the objects leave behind",
          imageSrcs: [
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-window-parlour.jpg",
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-log-room.jpg",
            "/images/destinations/helgeland/coastal-history/heroy-coastal-history-old-photographs.jpg",
          ],
        },
      ],
    },
    sections: [
      {
        heading: "Rooms that remember",
        body: [
          "A merchant household on Nesna, a fishing family on Træna and a household in the outer islands of Vega could live with very different resources, routines and access to the wider world.",
          "These rooms cannot tell every story on their own. Their objects become most meaningful when placed beside photographs, public records, local histories and the memories of people who lived along the coast.",
          "They do, however, retain traces of daily routines, skilled work, family life and practical adaptation in a landscape closely tied to the sea.",
        ],
      },
      {
        heading: "The coastal home",
        body: [
          "Living rooms, kitchens and sleeping spaces formed the centre of family life. Furniture was made to last, rooms were used carefully, and useful objects could remain in a household for generations.",
          "Around the turn of the twentieth century, many homes along the Helgeland coast were places for both living and working. Cooking, sewing, weaving, repairing equipment, writing letters and preparing for journeys could all happen beneath the same roof.",
          "The preserved interiors show different arrangements of floorboards, furniture, portraits, books, textiles and tables prepared for work or company. They should be read as distinct rooms rather than a single model for every coastal household.",
        ],
        imageGroups: [
          {
            images: [
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-kitchen.jpg",
                alt: "Preserved kitchen and dining room from a coastal home in Helgeland",
              },
            ],
            caption: "A preserved kitchen and dining room from a coastal home in Helgeland.",
          },
          {
            images: [
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-piano.jpg",
                alt: "Black upright piano with portraits and household objects",
              },
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-sitting-room-portraits.jpg",
                alt: "Sitting room with framed portraits and traditional furniture",
              },
            ],
            caption: "Furniture, portraits and household objects retained within preserved interiors.",
          },
          {
            images: [
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-window-parlour.jpg",
                alt: "Preserved parlour with traditional furniture beside a coastal window",
              },
            ],
            caption: "A parlour arranged beside a coastal window.",
          },
        ],
      },
      {
        heading: "Work made by hand",
        body: [
          "Much of everyday life depended on practical knowledge. Weaving looms, sewing machines, tools and worktables point to clothes and household items being made, repaired and reused.",
          "These skills were part of maintaining a household in communities where distance, weather and limited access to goods mattered. The work and resources available, however, differed between households and social groups.",
        ],
        imageGroups: [
          {
            images: [
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-loom.jpg",
                alt: "Historic weaving loom with woven textiles in a preserved Helgeland interior",
              },
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-sewing-room.jpg",
                alt: "Historic sewing room with sewing machine and practical equipment",
              },
            ],
            caption: "Practical work that supported household life along the coast.",
          },
        ],
      },
      {
        heading: "Between sea and land",
        body: [
          "For many coastal households, work did not belong to a single occupation. Fishing, livestock, small plots of cultivated land, food preservation, textile work and the repair of tools and clothing formed parts of the same household economy.",
          "The balance differed between communities and social groups. Fishing-farming households depended on seasonal work and the labour of several family members, while merchants, officials and larger trading households could occupy very different homes and employ servants or other workers.",
          "The sea provided food, work and transport, but it also brought risk. Boats connected the islands to churches, schools, doctors, shops and trading centres. When weather prevented travel, distance became more than a line on a map.",
        ],
        imageGroups: [
          {
            images: [
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-log-room.jpg",
                alt: "Wooden workroom with traditional clothing, textiles and storage chests",
              },
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-model-boats.jpg",
                alt: "Model fishing boats and maritime objects from the Helgeland coast",
              },
            ],
            caption: "A preserved workroom and maritime objects photographed across Helgeland.",
          },
        ],
      },
      {
        heading: "Fishing, farming and women’s work",
        body: [
          "Nils Hermansen of Sørøya in Austbø bought this boat from Rana in 1872. It was said to have been fairly newly built at the time, although it had already had another owner. The boat remained in the family until Hans Nilssen of Husvær gave it to Herøy bygdesamling in 1975.",
          "Until around 1920, it was used for local fishing. Edvard Nilssen used it particularly often, usually together with his neighbour Konrad Olsen. Their fishing grounds included the waters around Flæsen and Ytterholmen.",
          "The boat later served for many years as an “øybåt” — an island boat used by women rowing out to milk cattle in the morning and evening. While the cows grazed collectively on the islands, each farm was required to provide boats according to an agreed rota.",
          "The women rowed together from Øybåtstøa, in the centre of the settlement, to the islands where summer barns and grazing cattle were located. The boat is now preserved in Storbåtnaustet on Herøy.",
        ],
        image: {
          src: "/images/destinations/helgeland/heroy-island-boat.png",
          alt: "Long traditional wooden boat with green gunwales displayed beside a red boathouse on Herøy",
        },
        imageGroups: [
          {
            images: [
              {
                src: "/images/destinations/helgeland/nordlandsbåt2.png",
                alt: "Restored Nordland firroring Enigheten moored beside a quay with its mast, rigging and painted wooden hull visible",
              },
            ],
          },
        ],
      },
      {
        heading: "A house could also be a workplace",
        body: [
          "Not every preserved coastal interior represents a small fishing household. On Nesna, the Zahl family’s commercial building combined trade and domestic life under the same roof. Its oldest section dates from 1907, and the building held a shop as well as living quarters for the merchant family, servants and employees.",
          "This offers a useful contrast to smaller fishing-farming households. Coastal society included labourers, boat owners, merchants, tenant families, teachers, officials and people who moved between several forms of work.",
        ],
        sourceMarker: "[1]",
      },
      {
        heading: "School, writing and connection",
        body: [
          "Education connected even small coastal communities to wider changes in Norwegian society. By the early twentieth century, permanent school buildings had replaced most travelling schools nationally, although distance and scattered settlement continued to shape local education.",
          "Helgeland Museum preserves Klokkergården on Nesna, a school building dating from 1823. Nesna later became an important educational centre: in 1918 a new teacher-training school opened with 56 students, including 34 women taking a one-year course for small-school teachers alongside students following a three-year teacher programme.",
          "Letters, newspapers, school records and municipal documents also connected the islands. A preserved typewriter can illustrate this expanding world of writing and administration, but it is not presented here as an ordinary household possession without documented provenance.",
        ],
        sourceMarker: "[2–4]",
        imageGroups: [
          {
            images: [
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-typewriter-desk.jpg",
                alt: "Typewriters, documents and writing tools on a historic worktable",
              },
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-schoolroom.jpg",
                alt: "Preserved classroom with wooden desks, teaching materials and a globe",
              },
            ],
            caption: "Writing, records and teaching materials from preserved coastal collections.",
          },
        ],
      },
      {
        heading: "A neutral country, but not untouched",
        body: [
          "Norway remained neutral throughout the First World War, but neutrality did not protect households from the economic consequences of the conflict.",
          "Imports became more difficult, goods grew scarce and prices rose sharply. Statistics Norway estimates that Norwegian living costs increased by 156 per cent between 1914 and 1918.",
          "For the Helgeland coast, these national conditions provide important context. The exact effects on individual islands — food supplies, fishing prices, shipping risks and local rationing — varied and require evidence from local newspapers and municipal records.",
        ],
        sourceMarker: "[11–12]",
      },
      {
        heading: "Motors, teachers and a changing coast",
        body: [
          "During the early decades of the twentieth century, new technologies gradually changed work and communication along the coast.",
          "Arkiv i Nordland preserves interviews collected in 1981 about the transition to motor-powered fishing boats in Rødøy between 1900 and 1920. These later recollections preserve memories of a change that affected travel, fishing range and working routines, but they remain recollections recorded decades afterwards.",
          "Modernisation did not arrive everywhere at once. Motorboats, electricity, telephones and radios reached different communities at different times, while older household routines continued alongside new technology.",
          "A Helgeland Museum catalogue entry for a fish-processing photograph estimated to date from 1920–1940 associates its use with Dønna. The catalogue treats Dønna as certain but the photographed location itself as probable; it is a separate record, not an attribution for the photograph shown here.",
        ],
        sourceMarker: "[5–6]",
        imageGroups: [
          {
            images: [
              {
                src: "/images/destinations/helgeland/coastal-history/heroy-coastal-history-old-photographs.jpg",
                alt: "Historic photographs showing boats and coastal settlements in Helgeland",
              },
            ],
            caption: "Historic photographs from a preserved Helgeland collection; the individual scenes are not assigned to a specific island here.",
          },
        ],
      },
      {
        heading: "Occupation and everyday adaptation",
        body: [
          "The German occupation from 1940 to 1945 changed both the visible landscape and the routines of ordinary life along the Helgeland coast.",
          "Military installations were established at strategic points, including Grønsvik in Lurøy, Ylvingen in Vega and sites around Nesna. Grønsvik coastal fort was constructed as part of the Atlantic Wall, and Helgeland Museum records that prisoners of war were forced to take part in its construction.",
          "For civilians, occupation also meant rationing, restrictions, shortages and uncertainty. Nationally, food, clothing, fuel and other necessities became increasingly regulated. Local experiences nevertheless differed according to access to fishing, livestock, cultivated land, shops and transport.",
        ],
        sourceMarker: "[7–8, 13]",
      },
      {
        heading: "Lånan: a quiet island becomes part of the war",
        body: [
          "One of the strongest preserved stories comes from Lånan in the Vega archipelago.",
          "Later family accounts describe how the small island community became connected to clandestine communication and the transport of weapons from Britain. As German forces moved closer to discovering the operation, the civilian population was evacuated to Shetland during the night of 31 August to 1 September 1944.",
          "The published accounts name members of the Nilsen and Johansen families and describe children and adults leaving with little warning. Some details survive through later family memories rather than contemporary diaries, so vessel movements, passenger numbers and individual resistance roles need cautious treatment until matched with naval and archival records.",
        ],
        sourceMarker: "[9–10]",
        variant: "testimony",
      },
      {
        heading: "After 1945",
        body: [
          "Peace did not immediately restore every connection or remove every shortage. Rationing continued for some goods, while communities faced the practical work of rebuilding, adapting military structures and modernising transport, schools and homes.",
          "During the following decade, improved boats, communications and public services gradually reduced some forms of isolation. At the same time, population movement began changing many of the smallest island communities. Detailed Helgeland evidence for 1945–1955 still requires additional local research.",
        ],
      },
      {
        heading: "What the objects leave behind",
        body: [
          "The preserved rooms do not offer a single picture of life on the Helgeland coast. They belong to different buildings, communities and social worlds.",
          "Together, however, they preserve traces of the work that filled ordinary days: cooking, repairing, weaving, writing, teaching, storing food and preparing for another journey across the water.",
          "Their value lies not in pretending that time has stood still, but in allowing the surviving objects to meet the records and memories of the people who lived here.",
        ],
      },
    ],
    sourceGroups: [
      {
        title: "Local museums and archives",
        sources: [
          {
            marker: "1",
            label: "Helgeland Museum: Nesna Museum and the Zahl commercial building",
            href: "https://helgelandmuseum.no/besokssted/nesna-museum/",
          },
          {
            marker: "2",
            label: "Helgeland Museum: Old-fashioned school in old school buildings",
            href: "https://helgelandmuseum.no/tema/gammeldags-skole-i-gamle-skolehus/",
          },
          {
            marker: "3",
            label: "Arkiv i Nordland: The twentieth century in Nesna",
            href: "https://arkivinordland.no/fylkesleksikon/innhold/1900-tallet/1900-tallet-i-nesna.37962.aspx",
          },
          {
            marker: "4",
            label: "Nord University: The history of Høgskolen i Nesna",
            href: "https://www.nord.no/om/var-historie/hogskolen-i-nesna",
          },
          {
            marker: "5",
            label: "Arkivportalen: Arkiv i Nordland collections on coastal change",
            href: "https://www.arkivportalen.no/contributor/ca0a47ad-f9e7-4775-9364-12562405a6ad?ins=AIN",
          },
          {
            marker: "6",
            label: "DigitaltMuseum: Work at a fish-processing site",
            href: "https://digitaltmuseum.no/021017513889/arbeid-pa-fiskebruk",
          },
          {
            marker: "7",
            label: "Helgeland Museum: War and occupation history",
            href: "https://helgelandmuseum.no/tema/krig-og-okkupasjonshistorie/",
          },
          {
            marker: "8",
            label: "Helgeland Museum: Grønsvik coastal fort",
            href: "https://helgelandmuseum.no/besokssted/gronsvik-kystfort/",
          },
          {
            marker: "9",
            label: "Lånan: Krigen på Lånan (PDF)",
            href: "https://lanan.no/wp-content/uploads/2021/04/BA_Krigen-pa%CC%8A-Lanan.pdf",
          },
          {
            marker: "10",
            label: "Lånan: When the war came to Lånan",
            href: "https://lanan.no/about-lanan/da-krigen-kom-til-lanan/?lang=en",
          },
        ],
      },
      {
        title: "National historical context",
        sources: [
          {
            marker: "11",
            label: "Statistics Norway: The boom during the First World War",
            href: "https://www.ssb.no/nasjonalregnskap-og-konjunkturer/artikler-og-publikasjoner/hoykonjunkturen-under-1-verdenskrig",
          },
          {
            marker: "12",
            label: "Store norske leksikon: Norway during the First World War",
            href: "https://snl.no/Noreg_under_f%C3%B8rste_verdskrigen",
          },
          {
            marker: "13",
            label: "Norgeshistorie: Everyday life during the Second World War",
            href: "https://www.norgeshistorie.no/andre-verdenskrig/1703-hverdagsliv-under-andre-verdenskrig-.html",
          },
        ],
      },
    ],
    sourcesNote:
      "This visual essay combines photographs of preserved interiors with material from museums, archives and edited historical sources. The photographs have not been assigned to individual households or islands unless provenance has been independently documented. Research into local First World War conditions, individual object histories and some wartime accounts remains ongoing.",
    relatedSlugs: [
      "field-notes-heroy-helgeland",
      "blue-hour-on-the-helgeland-coast",
      "the-road-to-senja",
    ],
    relatedLinksLabel: "Continue exploring",
    relatedLinks: [
      {
        label: "Explore the Helgeland Coast",
        href: "/destinations/helgeland-coast",
      },
      {
        label: "Plan the Helgeland Coast road trip",
        href: "/routes/helgeland-coast-road-trip",
      },
      { label: "Browse the Journal", href: "/journal" },
    ],
  },
  {
    slug: "the-road-to-senja",
    title: "The Road to Senja",
    subtitle:
      "A quiet route through Arctic coastlines, mountain shadows and roads that seem to disappear into the sea.",
    category: "Field Note",
    region: "Senja, Northern Norway",
    readTime: "6 min read",
    image: "/images/cards/senja.png",
    imageAlt: "A moody coastal road on Senja with mountains and low Arctic cloud",
    excerpt:
      "A quiet route through Arctic coastlines, mountain shadows and roads that seem to disappear into the sea.",
    seoTitle:
      "The Road to Senja - A Cinematic Travel Guide to Norway's Wild Arctic Island",
    seoDescription:
      "Explore Senja in Northern Norway through a cinematic route guide covering scenic roads, fjords, ferries, seasons, viewpoints and practical travel notes.",
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
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
    imageAlt: "A calm coastal road and sea at blue hour on the Helgeland Coast",
    excerpt:
      "A slow evening drive where sea mist softens the islands and the last ferries cross silver water.",
    seoTitle: "Blue Hour on the Helgeland Coast",
    seoDescription:
      "A short visual note from Norway's Helgeland Coast during blue hour with practical timing for ferries and coastal pauses.",
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
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
    imageAlt: "A quiet Lofoten fishing village beneath steep mountains and changing weather",
    excerpt:
      "Fishing villages, rain-dark rock and quieter coves discovered beyond the familiar viewpoints.",
    seoTitle: "Lofoten Beyond the Postcards",
    seoDescription:
      "A concise field note on finding quieter roads and villages in Lofoten while keeping a slower cinematic travel pace.",
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
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
    image: "/images/cards/tromso.png",
    imageAlt: "Northern Norway coastline under changing Arctic sky",
    excerpt:
      "Reading light, weather and distance before choosing the right season for an Arctic journey.",
    seoTitle: "When to Visit Northern Norway",
    seoDescription:
      "A compact seasonal note on choosing the right time for Northern Norway based on light, weather and route goals.",
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
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
      "An editorial essay on scale, weather and roads, and the cinematic feeling Norway creates on slower journeys.",
    category: "Visual Essay",
    region: "Norway",
    readTime: "8 min read",
    image: "/images/hero/preikestolen.png",
    imageAlt: "A traveler sitting on Preikestolen above a Norwegian fjord at dusk",
    excerpt:
      "Landscapes where shifting weather and immense scale turn an ordinary pause into a scene.",
    seoTitle: "Where Norway Feels Most Cinematic",
    seoDescription:
      "An editorial essay on Norway's scale, weather and road geometry, and why the country often feels most cinematic in motion.",
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
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
    imageAlt: "Aurora above a fjord village and mountain coast in northern Norway",
    excerpt:
      "Building a route with room for ferries, roadside pauses and unplanned coastal light.",
    seoTitle: "How to Plan a Scenic Norway Road Trip",
    seoDescription:
      "A concise planning note for scenic Norway road trips with route pacing, ferry strategy and seasonal buffers.",
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
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
