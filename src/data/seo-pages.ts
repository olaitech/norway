import type { Metadata } from "next";

import {
  GUIDE_LAST_UPDATED,
  guideSourceSets,
} from "@/src/data/guide-meta-sources";
import { SITE_NAME } from "@/src/config/site";
import type { BreadcrumbItem } from "@/src/lib/seo/jsonLd";

const CURRENT_ARTICLE_UPDATE_DATE = "2026-06-25";

export type SeoCard = {
  title: string;
  description: string;
  label?: string;
  href?: string;
  externalUrl?: string;
  secondaryExternalUrl?: string;
};

export type SeoSection = {
  label: string;
  title: string;
  intro: string;
  cards: SeoCard[];
  layout?: "cards" | "list" | "split" | "constellation";
  media?: {
    imageSrc: string;
    imageAlt: string;
    imagePosition?: string;
    captionLabel?: string;
    caption?: string;
  };
};

export type SeoPageData = {
  meta: {
    title: string;
    description: string;
    openGraphTitle?: string;
    openGraphDescription?: string;
  };
  hero: {
    label: string;
    title: string;
    intro: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: string;
    overlayOpacity?: number;
  };
  sections: SeoSection[];
  relatedLinks: Array<{ label: string; href: string }>;
  answerBlock?: {
    label?: string;
    title: string;
    summary: string;
    bullets?: readonly string[];
  };
  cta: {
    label: string;
    text: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref: string;
    secondaryLabel: string;
  };
  publishedDate?: string;
  updatedDate?: string;
  guideMeta?: {
    lastUpdated: string;
    sources: ReadonlyArray<{ label: string; href: string }>;
  };
  jsonLd?: {
    breadcrumbs: readonly BreadcrumbItem[];
    article?: boolean;
  };
};

export function toMetadata(page: SeoPageData, canonicalPath: string): Metadata {
  const openGraphTitle = page.meta.openGraphTitle ?? page.meta.title;
  const openGraphDescription =
    page.meta.openGraphDescription ?? page.meta.description;

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: openGraphTitle,
      description: openGraphDescription,
      url: canonicalPath,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: page.hero.imageSrc,
          alt: page.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: openGraphDescription,
      images: [page.hero.imageSrc],
    },
  };
}

export const seoPages = {
  routesHub: {
    meta: {
      title: "Norway Road Trip Routes",
      description:
        "A cinematic route hub for Norway road trips across Lofoten, Helgeland, Arctic coastlines, fjords and quiet scenic roads.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Routes", href: "/routes" },
      ],
    },
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
    hero: {
      label: "Planning archive",
      title: "Routes Across Norway",
      intro:
        "A route hub for travelers who prefer slower roads, coastal ferries and landscape-first itineraries.",
      imageSrc: "/images/cards/helgeland.png",
      imageAlt: "A coastal road threading through sea and mountain scenery in Northern Norway",
      imagePosition: "center 45%",
    },
    sections: [
      {
        label: "01 / Core routes",
        title: "Northern road trip blueprints",
        intro:
          "Start with the strongest route ideas, then adjust the pace around weather, ferries and light.",
        cards: [
          {
            label: "5-7 days",
            title: "Lofoten Road Trip",
            description:
              "Arctic villages, mountain roads and beaches linked by short drives and dramatic weather.",
            href: "/routes/lofoten-road-trip",
          },
          {
            label: "Slow coastal route",
            title: "Helgeland Coast Road Trip",
            description:
              "Island hopping, ferries and quiet roads from Bronnoysund toward the Arctic shoreline.",
            href: "/routes/helgeland-coast-road-trip",
          },
          {
            label: "Arctic options",
            title: "Tromso, Senja and Lyngen",
            description:
              "Build an Arctic loop around winter light, sea-level roads and compact mountain distances.",
            href: "/northern-lights-norway",
          },
        ],
      },
      {
        label: "02 / Landscape directions",
        title: "Choose your entry into Norway",
        intro:
          "Every route can begin from light, season or geography. The best entry point depends on what you want to feel.",
        cards: [
          {
            label: "Season first",
            title: "Plan by light windows",
            description:
              "Use shoulder seasons, midnight sun or northern lights periods to shape the route.",
            href: "/best-time-to-visit-norway",
          },
          {
            label: "Destination first",
            title: "Use Lofoten as a route anchor",
            description:
              "Treat Lofoten as a base and connect outward with short extensions and ferry crossings.",
            href: "/destinations/lofoten-islands",
          },
          {
            label: "Map first",
            title: "Trace roads, ferries and detours",
            description:
              "Use the map to compare coastal alternatives before committing to nightly stops.",
            href: "/map",
          },
        ],
      },
      {
        label: "03 / Practical rhythm",
        title: "Slow planning notes",
        intro:
          "A calm route works better than an ambitious one. Build in weather buffers and short drive days.",
        cards: [
          {
            title: "Ferry timing matters",
            description:
              "Check major ferry legs first, then lock accommodation around those crossings.",
          },
          {
            title: "Keep margin in the schedule",
            description:
              "Leave spare half-days for closed roads, strong winds or unexpected places worth staying longer.",
          },
          {
            title: "Drive less, see more",
            description:
              "In Northern Norway, long summer light can hide distance fatigue. Keep daily ranges conservative.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Plan the Lofoten destination guide", href: "/destinations/lofoten-islands" },
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "See the northern lights guide", href: "/northern-lights-norway" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Move from route ideas to geography, season and daily pacing.",
      primaryHref: "/map",
      primaryLabel: "Open map",
      secondaryHref: "/#destinations",
      secondaryLabel: "Browse destinations",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.roadTripScenic,
    },
  },
  lofotenRoadTrip: {
    meta: {
      title: "Lofoten Road Trip: 3, 5 or 7 Days",
      description:
        "A practical Lofoten road trip guide for 3, 5 or 7 days, with an arrival-aware E10 route, ferry planning, bases, parking and weather checks.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Routes", href: "/routes" },
        { name: "Lofoten Road Trip", href: "/routes/lofoten-road-trip" },
      ],
      article: true,
    },
    updatedDate: "2026-07-21",
    hero: {
      label: "Route field note",
      title: "Lofoten Road Trip",
      intro:
        "A practical driving guide through fishing villages, Arctic beaches and roads framed by sharp granite peaks.",
      imageSrc: "/images/cards/lofoten.png",
      imageAlt: "Fishing villages and steep mountains in Lofoten at dusk",
    },
    answerBlock: {
      label: "At a glance",
      title: "Drive Lofoten as a slow E10 journey",
      summary:
        "Five to seven days is the strongest first-trip range, but the route works in either direction. Start east to west from Evenes or Svolvær, or west to east after a Bodø–Moskenes vehicle ferry; short map distances become longer once stops, weather, traffic and parking are part of the day.",
      bullets: [
        "Norwegian Scenic Route Lofoten follows E10 between Å and Raftsundet, with worthwhile detours rather than a one-way official direction.",
        "Use three days for one part of the islands, five days for eastern/central and western Lofoten, and seven days for a slower full-route journey with a flexible day.",
        "Plan ferry crossings, accommodation, parking pressure and current road conditions together before fixing each day.",
      ],
    },
    sections: [
      {
        label: "01 / Route direction",
        title: "Choose direction by arrival point",
        intro:
          "Norwegian Scenic Route Lofoten runs between Å and Raftsundet along E10, with detours to villages and beaches. It works equally well in either direction; let your airport, ferry or onward journey decide the order.",
        layout: "list",
        cards: [
          {
            label: "Evenes or Svolvær arrival",
            title: "Drive east to west",
            description:
              "Evenes → Svolvær → Henningsvær → Haukland / Unstad → Nusfjord → Ramberg → Hamnøy → Sakrisøy → Reine → Å. Treat Henningsvær, Haukland, Unstad and Nusfjord as detours from the E10 spine, not additions to one rushed transfer day.",
          },
          {
            label: "Bodø–Moskenes vehicle ferry",
            title: "Drive west to east",
            description:
              "Moskenes, with Å as a short terminal spur if it matters to you, → Reine → Sakrisøy → Hamnøy → Ramberg → Nusfjord → Haukland / Unstad → Henningsvær → Svolvær → onward toward Evenes or Vesterålen. This avoids driving back west after arriving at the western ferry terminal.",
          },
          {
            label: "Scenic Route context",
            title: "Use detours selectively",
            description:
              "The official Scenic Route gives a useful framework, but it is not a checklist. Keep beach, harbour and photo detours inside the region where you are sleeping, then leave time for weather and parking.",
          },
        ],
      },
      {
        label: "02 / Timeframes",
        title: "Match the route to your days",
        intro:
          "The practical difference between three, five and seven days is how much of the island chain you choose, not how quickly you drive between the same named stops.",
        cards: [
          {
            label: "3 days",
            title: "Choose one side",
            description:
              "Use one base and choose either the eastern/central side around Svolvær, Henningsvær and Haukland, or the western side around Ramberg, Reine and Å. Skip the far end of the islands rather than collecting every stop.",
          },
          {
            label: "5 days",
            title: "Use two bases",
            description:
              "Combine eastern or central Lofoten with the west, changing base once. Leave one flexible period for weather, a beach, a hike or a slower village day instead of filling every afternoon.",
          },
          {
            label: "7 days",
            title: "Travel the full route slowly",
            description:
              "Use two or three bases, include the full E10 corridor and keep a flexible day for weather, hiking, photography or a ferry change. The extra time is for margin, not longer daily mileage.",
          },
        ],
      },
      {
        label: "03 / Bases",
        title: "Change bases only when it saves driving",
        intro:
          "A base change trades checkout time for fewer repeated drives. Choose it when the next area will shape more than one day, not simply to sleep nearer to one viewpoint.",
        cards: [
          {
            label: "One base",
            title: "Best for a short trip",
            description:
              "Use one practical region when you have three days or less: an eastern base in Svolvær, Kabelvåg or Henningsvær, a central base around Leknes, Ballstad or Ramberg / Flakstad, or a western base around Reine, Hamnøy, Sakrisøy, Sørvågen or Å.",
          },
          {
            label: "Two bases",
            title: "Best first-trip balance",
            description:
              "For five days, pair an eastern or central base with a western base. This keeps the E10 route connected without changing accommodation every night or repeating long drives across the islands.",
          },
          {
            label: "Three bases",
            title: "Only with a full week",
            description:
              "A week can support eastern, central and western regions if you value different morning and evening light. Keep the third base optional when weather or ferry timing changes the plan.",
          },
        ],
      },
      {
        label: "04 / Ferries and boats",
        title: "Check the exact boat before planning a car route",
        intro:
          "Ferries are part of the route, but not every water connection moves vehicles. Check the current operator information before committing to an arrival or departure day.",
        cards: [
          {
            title: "Bodø–Moskenes by vehicle ferry",
            description:
              "The Bodø–Moskenes service can carry vehicles. Reservations may cover part of the capacity, while ordinary quay queuing may still be possible under current operator guidance; rules, capacity and booking arrangements can change.",
          },
          {
            title: "Passenger express boats are different",
            description:
              "A passenger express boat does not necessarily have a vehicle deck. Do not assume that every ferry or boat connection can take a car, campervan or motorhome.",
          },
          {
            title: "Re-check before travel",
            description:
              "Use the current Torghatten route page for the Bodø–Værøy–Røst–Moskenes service, then confirm ferry changes through the official planners before the driving day begins.",
            href: "/guides/norway-ferry-guide-for-tourists",
          },
        ],
      },
      {
        label: "05 / Summer traffic",
        title: "Leave room for parking and queues",
        intro:
          "July and other peak-summer periods can make the small roads, villages, beaches and trailheads feel much slower than the map suggests.",
        cards: [
          {
            title: "Use marked parking",
            description:
              "Parking is limited at popular beaches, villages and trailheads. Use marked spaces only; passing places and road shoulders must remain clear for traffic and emergency access.",
          },
          {
            title: "Expect pressure at the classics",
            description:
              "Reine, Henningsvær and popular beach areas can require extra time for traffic and parking. Arriving early or late may reduce pressure, but it is never a guarantee.",
          },
          {
            title: "Keep the day flexible",
            description:
              "Do not schedule every hour around a viewpoint or trailhead. Keep enough margin to choose another stop when a car park, road or ferry is busier than expected.",
          },
        ],
      },
      {
        label: "06 / Vehicle choice",
        title: "Choose a vehicle that suits the road rhythm",
        intro:
          "Lofoten is accessible by car and campervan, but the vehicle changes how easily you can use narrow roads, small parking areas and busy village approaches.",
        cards: [
          {
            title: "A normal-sized car is usually easiest",
            description:
              "For a first driving trip, a normal-sized car is usually the simplest option for village parking, narrow lanes and flexible stops. Read the wider driving guide for Norwegian road rules and seasonal preparation.",
            href: "/guides/driving-in-norway-what-visitors-should-know",
          },
          {
            title: "Campervans and motorhomes are possible",
            description:
              "Campervans and motorhomes are not prohibited, but larger vehicles need more care around narrow roads, busy approaches and compact parking. Use established campsites and follow the camping guidance for detailed rules.",
            href: "/guides/camping-rules-in-norway",
          },
        ],
      },
      {
        label: "07 / Driving seasons",
        title: "Summer and winter need different margins",
        intro:
          "Lofoten is not automatically inaccessible in winter, but the season changes the experience, vehicle preparation and amount of time a realistic road day needs.",
        cards: [
          {
            label: "Summer",
            title: "Long light, higher pressure",
            description:
              "Long daylight, more open services and flexible evening driving make summer straightforward in some ways, but visitor pressure, busy parking and ferry demand can slow the route.",
          },
          {
            label: "Winter",
            title: "Short light, changing conditions",
            description:
              "Snow, ice, slush, strong winds and short daylight require conservative plans. Exposed bridges, tunnels and roads can have restrictions, while services and departures may be reduced or changed.",
          },
        ],
      },
      {
        label: "08 / Before each driving day",
        title: "Check conditions, then keep the route adjustable",
        intro:
          "Use current official information rather than yesterday's forecast or an old ferry screenshot. Conditions can change between the first coffee stop and the next bridge.",
        cards: [
          {
            title: "Road and wind checks",
            description:
              "Check Statens vegvesen for road conditions, closures, wind restrictions, bridges, tunnels, traffic messages and webcams before driving. Severe weather can change the practical route without much notice.",
          },
          {
            title: "Ferry and weather checks",
            description:
              "Check the ferry operator and journey planner for changes, then use the weather forecast to decide which beach, hike or long drive should stay flexible. Keep the map open for an alternative stop.",
            href: "/map",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Compare villages, bases and seasons", href: "/destinations/lofoten-islands" },
      { label: "Read the Norway ferry guide", href: "/guides/norway-ferry-guide-for-tourists" },
      { label: "Driving in Norway: what visitors should know", href: "/guides/driving-in-norway-what-visitors-should-know" },
      { label: "Read the camping rules guide", href: "/guides/camping-rules-in-norway" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Check ferry practicalities and current conditions, then use the map to keep bases, detours and daily stops realistic.",
      primaryHref: "/guides/norway-ferry-guide-for-tourists",
      primaryLabel: "Read ferry guide",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
    guideMeta: {
      lastUpdated: "21 July 2026",
      sources: guideSourceSets.roadTripLofoten,
    },
  },
  helgelandCoastRoadTrip: {
    meta: {
      title: "Helgeland Coast Road Trip",
      description:
        "A slower Helgeland Coast road trip guide built around ferry crossings, island stops, coastal roads and realistic pacing between small communities.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Routes", href: "/routes" },
        {
          name: "Helgeland Coast Road Trip",
          href: "/routes/helgeland-coast-road-trip",
        },
      ],
      article: true,
    },
    updatedDate: "2026-07-21",
    hero: {
      label: "Route field note",
      title: "Helgeland Coast Road Trip",
      intro:
        "A slower route for island ferries, coastal roads and long northern horizons shaped by wind and sea.",
      imageSrc: "/images/cards/helgeland.png",
      imageAlt: "Island coastline and a quiet road along the Helgeland Coast",
      imagePosition: "center 42%",
    },
    answerBlock: {
      label: "Quick route answer",
      title: "Drive Fv17 as the journey, not as a shortcut north.",
      summary:
        "The Helgeland Coast is best driven as a dedicated coastal road trip, with ferry departures setting the day. The scenic route is a slower alternative to the E6; allow five to seven days for a first trip, or more if island detours matter.",
      bullets: [
        "South to north is a natural option when you are travelling toward Bodø, while the reverse direction works equally well when it suits your arrival plans.",
        "Plan around the six main Fv17 ferries, then add island detours only when you have time for their separate connections.",
        "Check live departures and traffic information again before each ferry day, especially outside summer.",
      ],
    },
    sections: [
      {
        label: "01 / Route character",
        title: "The best way to drive the Helgeland Coast",
        intro:
          "Use Fv17 for the coast and the E6 when speed matters. The scenic route runs between Holm and Godøystraumen, with a Torghatten detour; it is a landscape-led journey, not a faster substitute for the inland road. The rhythm of ferries, quiet coastal roads, small harbours and open horizons is part of the journey.",
        cards: [
          {
            title: "Let the ferries set the pace",
            description:
              "Build each day around a crossing first, then place driving, food stops and accommodation around the remaining time. A ferry queue or a missed departure should not turn the whole day into a race.",
          },
          {
            title: "Choose a direction that fits the trip",
            description:
              "South to north, from Holm toward Bodø, is a natural option for travellers heading north. Drive the other way if your flights, train, rental car or onward journey make that more practical.",
          },
          {
            title: "Keep the daily range modest",
            description:
              "The distance on a map hides ferry waits, quay approaches and stops worth making. Plan fewer bases and avoid treating every island as a drive-by detour.",
          },
        ],
      },
      {
        label: "02 / Route length",
        title: "How many days do you need?",
        intro:
          "Three days can cover the through-route at a purposeful pace; five to seven days is a more useful first-trip range. Ten days creates space for island stays, weather buffers and quieter detours.",
        cards: [
          {
            label: "Minimum",
            title: "3 days: drive the main route",
            description:
              "Enough for the coastal through-route and a few short stops, but not for outer islands or a relaxed response to weather. Keep accommodation changes and detours to a minimum.",
          },
          {
            label: "Comfortable short trip",
            title: "5 days: add selected detours",
            description:
              "A realistic length for the main scenic route with Torghatten, the Seven Sisters area or one island-related detour, while retaining useful ferry buffer time.",
          },
          {
            label: "Recommended first trip",
            title: "7 days: travel at the coast's rhythm",
            description:
              "The best balance for two-night stays, a weather-flexible walking day and a choice between places such as Vega, Dønna, Herøy or Rødøy rather than rushing through all of them.",
          },
          {
            label: "Slow route",
            title: "10 days: make room for the islands",
            description:
              "Use the extra days for a deeper regional loop, outer-island overnights or time around Svartisen. It also leaves room for ferry changes without sacrificing the journey itself.",
          },
        ],
      },
      {
        label: "03 / Mainline ferries",
        title: "The six ferries along Fv17",
        intro:
          "These are the six main car-ferry crossings on the official Scenic Route Helgelandskysten. Island ferries and express boats are additional connections, not part of this through-route count.",
        layout: "list",
        cards: [
          {
            title: "Holm – Vennesund",
            description:
              "The southern ferry link on the through-route between the Bindal and Sømna sides of the coast.",
          },
          {
            title: "Horn – Anddalsvågen",
            description:
              "The Fv17 crossing west of the Seven Sisters area, following the southern ferry link.",
          },
          {
            title: "Forvik – Tjøtta",
            description:
              "A central southern crossing that threads the route between the Vevelstad and Alstahaug sides of Helgeland.",
          },
          {
            title: "Levang – Nesna",
            description:
              "A mainland link that joins the central and northern parts of the coastal drive.",
          },
          {
            title: "Kilboghavn – Jektvik",
            description:
              "The Arctic Circle crossing on the main route, where an unhurried day is particularly valuable.",
          },
          {
            title: "Ågskardet – Forøy",
            description:
              "The northern scenic-route ferry before Fv17 continues toward the Godøystraumen end of the official route.",
          },
        ],
      },
      {
        label: "04 / Ferry planning",
        title: "Do you need to book the ferries?",
        intro:
          "For ordinary car-ferry travel, Reis Nordland currently advises drivers to use the quay queue rather than buy a ticket or pre-book. Payment is normally registered automatically through licence-plate recognition when boarding. Treat that as current operator guidance, not a rule that automatically applies to every boat or special vehicle.",
        cards: [
          {
            title: "Use the quay queue",
            description:
              "Arrive in good time, join the marked line and follow the crew's loading directions. This is usually simpler than trying to turn every crossing into a reservation.",
          },
          {
            title: "Expect busier summer crossings",
            description:
              "Reis Nordland recommends arriving early in summer and on public holidays. Build margin into days with a fixed accommodation check-in or an important onward connection.",
          },
          {
            title: "Check the specific service",
            description:
              "Capacity and booking expectations can differ for island detours, express boats, larger vehicles and seasonal services. Confirm the exact journey with the operator before setting the plan.",
          },
        ],
      },
      {
        label: "05 / Live travel information",
        title: "Where to check current ferry timetables",
        intro:
          "Use Reis Nordland's journey planner or ferry timetable page for the exact sailing you intend to take. Departures, holiday patterns and service changes can vary by season, so do not plan from a copied timetable.",
        cards: [
          {
            title: "Start with Reis Nordland",
            description:
              "Search the full journey, not only one ferry. The planner is the best place to identify current departures and see whether a day still works end to end.",
          },
          {
            title: "Check again before driving to the quay",
            description:
              "Review operator traffic messages on the travel day. A delayed service can recover time, so meet the original scheduled departure unless the operator says otherwise.",
          },
          {
            title: "Pair departures with road information",
            description:
              "Use current road and traffic information alongside ferry updates, especially in exposed weather. The Norway ferry guide explains the wider practicalities of ferry travel.",
            href: "/guides/norway-ferry-guide-for-tourists",
          },
        ],
      },
      {
        label: "06 / Seasonal planning",
        title: "Best time to drive the Helgeland Coast",
        intro:
          "Late spring to early autumn is usually easiest for a first drive because the days are long and the range of open services is broader. The best month still depends on whether you value long light, quieter roads or winter atmosphere.",
        cards: [
          {
            label: "June-August",
            title: "The fullest summer route",
            description:
              "Long days make ferry-linked driving more forgiving, and island stays, walks, food stops and activities are more likely to be available. It is also the period when queues deserve the most attention.",
          },
          {
            label: "May and September",
            title: "A calmer shoulder-season trade-off",
            description:
              "These months can feel quieter and more atmospheric, but daily departures, opening hours and weather tolerance become more important. Check the actual seasonal timetable before booking a chain of stays.",
          },
          {
            label: "October-April",
            title: "A focused winter journey",
            description:
              "Choose a smaller section, flexible bases and a weather-aware plan. This is better suited to quiet coastal stays than trying to recreate a summer island-hopping itinerary.",
          },
        ],
      },
      {
        label: "07 / Winter access",
        title: "Can you drive Kystriksveien in winter?",
        intro:
          "The route is not automatically closed in winter, but a continuous road trip depends on current road conditions, ferry operations, weather and available accommodation. Check each road, ferry and service individually before you commit to the next stage.",
        cards: [
          {
            title: "Plan route by route",
            description:
              "A road trip is possible when the relevant roads and ferries are operating, but weather, wind and daylight can reshape the practical route at short notice.",
          },
          {
            title: "Travel with proper winter readiness",
            description:
              "From roughly October to April, winter conditions are common on many Helgeland roads. Use suitable tyres, a properly equipped vehicle and only drive within your winter experience.",
          },
          {
            title: "Expect fewer options",
            description:
              "Ferries may run less often, and individual attractions, mountain trails, cafés and island facilities can be seasonal or temporarily unavailable. Leave more buffer than you would in summer.",
          },
        ],
      },
      {
        label: "08 / Stops and detours",
        title: "Best stops along the National Scenic Route",
        intro:
          "These are practical anchors for a Helgeland itinerary, not a checklist. Choose a few that match your direction, ferry rhythm and weather rather than trying to collect every stop in one drive.",
        cards: [
          {
            title: "Brønnøysund and Torghatten",
            description:
              "A strong southern base for the pierced mountain, coastal harbour life and a first overnight before the route moves north.",
          },
          {
            title: "Vega Archipelago",
            description:
              "A separate island detour for World Heritage culture, cycling and a slower stay. Add it only when the boat connection and an overnight fit the route.",
          },
          {
            title: "Sandnessjøen and the Seven Sisters",
            description:
              "Use the central coast for the mountain skyline and a base for nearby ferry-linked island roads. A summit day needs suitable conditions and more time than a roadside stop.",
          },
          {
            title: "Herøy and Dønna",
            description:
              "Low island roads, farmland and open sea make this a rewarding slower detour from the main Fv17 line, especially with two nights in the area.",
          },
          {
            title: "Rødøy and the northern islands",
            description:
              "Use an extra day or more for these outer-coast places. Their boat links make them memorable, but they should not be fitted into a tight transfer day.",
          },
          {
            title: "Svartisen and Ureddplassen",
            description:
              "Northern Helgeland combines glacier landscapes with one of the route's distinctive rest areas. Check current access and seasonal services before adding a glacier-related detour.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Browse the route hub", href: "/routes" },
      { label: "Read the Helgeland Coast travel guide", href: "/destinations/helgeland-coast" },
      { label: "Read the Norway ferry guide", href: "/guides/norway-ferry-guide-for-tourists" },
      { label: "Driving in Norway: what visitors should know", href: "/guides/driving-in-norway-what-visitors-should-know" },
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Check the ferry practicalities, then use the map to keep overnight stops and coastal detours realistic.",
      primaryHref: "/guides/norway-ferry-guide-for-tourists",
      primaryLabel: "Read ferry guide",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
    guideMeta: {
      lastUpdated: "July 2026",
      sources: guideSourceSets.roadTripHelgeland,
    },
  },
  northernLightsNorway: {
    meta: {
      title: "Northern Lights in Norway",
      description:
        "Where to see the northern lights in Norway, when to go and how to plan around darkness, cloud cover and the best aurora bases in Tromso, Lofoten, Senja and beyond.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Guides", href: "/guides" },
        { name: "Northern Lights in Norway", href: "/northern-lights-norway" },
      ],
      article: true,
    },
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
    hero: {
      label: "Arctic light guide",
      title: "Northern Lights in Norway",
      intro:
        "A broad overview of Norway's aurora season, with calm planning notes on locations, timing and the trade-offs between weather, darkness and road access.",
      imageSrc: "/images/cards/tromso.png",
      imageAlt: "Arctic coastline in Northern Norway under winter light",
      imagePosition: "center 44%",
    },
    sections: [
      {
        label: "01 / Core locations",
        title: "Where to base your trip",
        intro:
          "The strongest aurora bases combine dark skies, road access and weather flexibility.",
        cards: [
          {
            title: "Tromso",
            description:
              "Reliable winter access and strong infrastructure for short aurora windows.",
          },
          {
            title: "Lofoten and Senja",
            description:
              "More dramatic coastal foregrounds with variable weather and road conditions.",
          },
          {
            title: "Alta and Bodo",
            description:
              "Useful alternatives for broader Arctic routing and multi-stop winter trips.",
          },
        ],
      },
      {
        label: "02 / Season window",
        title: "Late September to March",
        intro:
          "Darkness returns in autumn, peaks through winter, then slowly recedes into spring.",
        cards: [
          {
            label: "Sep-Nov",
            title: "Early season",
            description:
              "Milder temperatures and more flexible road travel with shorter snow periods.",
          },
          {
            label: "Dec-Feb",
            title: "Deep winter",
            description:
              "Longest dark hours, but stronger weather risk and tighter road planning.",
          },
          {
            label: "March",
            title: "Late winter contrast",
            description:
              "A balanced period with snow landscapes and slightly longer daylight.",
          },
        ],
      },
      {
        label: "03 / Practical field notes",
        title: "Planning for clear skies",
        intro:
          "Aurora travel is about probability, not guarantees. Build the plan around flexibility.",
        cards: [
          {
            title: "Use moving forecasts",
            description:
              "Check cloud and wind patterns daily and keep location choices open.",
          },
          {
            title: "Stay multiple nights",
            description:
              "A single clear night can define the trip. Avoid one-night stopovers.",
          },
          {
            title: "Balance comfort and access",
            description:
              "Choose bases with both quick road exits and warm recovery between sessions.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Read the practical step-by-step guide", href: "/guides/how-to-see-the-northern-lights-in-norway" },
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "Browse the route hub", href: "/routes" },
      { label: "Read the Lofoten destination guide", href: "/destinations/lofoten-islands" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Choose your season window, then match it with a route and base strategy.",
      primaryHref: "/best-time-to-visit-norway",
      primaryLabel: "Open seasonal guide",
      secondaryHref: "/routes",
      secondaryLabel: "Back to routes",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.northernLightsWeatherSafety,
    },
  },
  fjordsOfNorway: {
    meta: {
      title: "Fjords of Norway | Regions, routes and seasons",
      description:
        "A calm overview of Norway's fjords, covering where they are, the main regions, Northern Norway, the best time to visit, ferry and road-trip planning, and responsible travel.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Guides", href: "/guides" },
        { name: "Fjords of Norway", href: "/fjords-of-norway" },
      ],
      article: true,
    },
    updatedDate: "2026-07-21",
    hero: {
      label: "Destination guide",
      title: "Fjords of Norway",
      intro:
        "A calm guide to Norway's fjords: where they are, when to go and how to shape a trip around roads, ferries and slower pauses.",
      imageSrc: "/images/destinations/fjords/norway-fjord1.jpg",
      imageAlt: "A wide fjord basin with steep mountains and low cloud",
      imagePosition: "center 60%",
      overlayOpacity: 0.66,
    },
    answerBlock: {
      title: "Fjords are route landscapes, not short scenic stops.",
      summary:
        "Water, tunnels, ferries and mountain roads make distances feel longer than the map suggests. The calmest fjord trips use fewer bases, more buffer and a slower pace.",
      bullets: [
        "For a first trip, choose one region: Nærøyfjord is a strong all-round, car-free-friendly option; Geirangerfjord offers classic dramatic scenery; Hardangerfjord suits road trips; and Lysefjord suits hiking-focused travel.",
        "Geirangerfjord and Nærøyfjord are separate fjord areas that together form the UNESCO World Heritage property West Norwegian Fjords – Geirangerfjord and Nærøyfjord. That designation does not extend to Sognefjord, Hardangerfjord or Lysefjord.",
        "Plan ferry crossings and overnight stops together. Late spring through early autumn is usually the easiest first-trip window.",
      ],
    },
    sections: [
      {
        label: "01 / Overview",
        title: "What a fjord is",
        intro:
          "Fjords are not just scenery. They are the spaces that shape how Norway feels, how far a day really goes and where the trip pauses to breathe.",
        layout: "list",
        cards: [
          {
            title: "Glacier-carved valleys",
            description:
              "Fjords are valleys cut by ice and later filled by seawater, which is why the landscape narrows, steepens and slows the journey.",
          },
          {
            title: "Routes take longer than they look",
            description:
              "Crossings, tunnels, viewpoints and short detours matter as much as distance once you start planning a fjord route.",
          },
          {
            title: "Not one landscape",
            description:
              "Each fjord region has its own scale, weather and access pattern, so the experience changes from one coast to another.",
          },
        ],
      },
      {
        label: "02 / Regions",
        title: "Where the main fjord landscapes sit",
        intro:
          "The practical map is regional: choose one connected group rather than treating every famous fjord as part of a single short circuit.",
        cards: [
          {
            title: "Bergen, Hardanger and the Sognefjord arms",
            description:
              "Bergen, Hardangerfjord, Flåm, Aurlandsfjord and Nærøyfjord make a natural western cluster when you allow time for ferries, mountain roads and weather.",
          },
          {
            title: "Nordfjord, Geiranger and Ålesund",
            description:
              "This is a distinct northern-western road-trip group, combining fjord, glacier country and mountain scenery without returning to Bergen between each stop.",
          },
          {
            title: "Stavanger and Lysefjord",
            description:
              "Treat Lysefjord as its own southern cluster, with Stavanger as the practical base for boat views and hiking access.",
          },
          {
            title: "Northern Norway",
            description:
              "Build Trollfjord with Lofoten and Vesterålen. Senja and Lyngen are separate Arctic fjord landscapes, not quick additions to a short western-fjord trip.",
          },
        ],
      },
      {
        label: "Explore the landscape",
        title: "Norway’s Fjord Constellation",
        intro:
          "Start with the experience you want, then keep the trip inside one connected region rather than trying to reach every famous fjord.",
        layout: "constellation",
        cards: [
          {
            label: "Møre og Romsdal / Sunnmøre",
            title: "Geirangerfjord",
            description:
              "A classic, high-drama fjord for waterfalls, steep walls, viewpoints and boat-and-road scenery. Together with the separate Nærøyfjord area, it forms the UNESCO World Heritage property West Norwegian Fjords – Geirangerfjord and Nærøyfjord.",
            externalUrl:
              "https://www.fjordnorway.com/en/see-and-do/the-geirangerfjord",
            secondaryExternalUrl: "https://www.geirangerfjord.no/",
          },
          {
            label: "Vestland / Sogn",
            title: "Nærøyfjord",
            description:
              "A strong all-round first fjord and a practical car-free choice: boat and public-transport links connect Flåm, Aurland and Gudvangen. Nærøyfjord branches from Aurlandsfjord within the wider Sognefjord system.",
            externalUrl:
              "https://www.fjordnorway.com/en/attractions/the-naeroyfjord",
          },
          {
            label: "Vestland / Sogn",
            title: "Sognefjord",
            description:
              "Norway’s largest fjord system and a travel region rather than one stop. Aurlandsfjord branches from Sognefjord, then Nærøyfjord branches from Aurlandsfjord; choose one part of the system rather than attempting all of it.",
            externalUrl: "https://www.sognefjord.no/",
            secondaryExternalUrl:
              "https://www.fjordnorway.com/no/destinasjoner/sognefjord",
          },
          {
            label: "Vestland / Hardanger",
            title: "Hardangerfjord",
            description:
              "The strongest road-trip region for travellers who want orchards, waterfalls, ferries and slow drives in one connected area. It pairs naturally with Bergen, but needs time rather than a rushed detour.",
            externalUrl: "https://hardangerfjord.com/",
          },
          {
            label: "Rogaland / Stavanger area",
            title: "Lysefjord",
            description:
              "A Stavanger-based fjord for hiking-focused trips, with Preikestolen, Kjerag and boat views. Treat it as its own southern cluster rather than adding it to a short western-fjord loop.",
            externalUrl: "https://lysefjorden365.com/no/",
          },
          {
            label: "Vestland / Sogn",
            title: "Aurlandsfjord",
            description:
              "A branch of Sognefjord where Flåm and Aurland sit by the water. It links naturally with Nærøyfjord and Gudvangen by road, boat and public transport.",
            externalUrl:
              "https://www.fjordtours.com/no/norge/reisemal/fjord/aurlandsfjorden",
          },
          {
            label: "Vestland / Nordfjord",
            title: "Nordfjord",
            description:
              "A quieter road-trip alternative, combining fjord, glacier and mountain scenery. It works naturally with Geirangerfjord and Ålesund rather than the Bergen–Flåm cluster.",
            externalUrl: "https://www.nordfjord.no/",
          },
          {
            label: "Møre og Romsdal / Sunnmøre",
            title: "Hjørundfjord",
            description:
              "A quieter atmospheric fjord near Ålesund, suited to slow roads, small harbours and mountain views rather than a cross-country detour.",
            externalUrl:
              "https://www.fjordtours.com/no/norge/reisemal/fjord/hjorundfjorden",
          },
          {
            label: "Nordland / Lofoten–Vesterålen",
            title: "Trollfjord",
            description:
              "A Northern Norway boat-trip experience on the Lofoten–Vesterålen side of the country. Keep it inside an Arctic itinerary rather than a short western-fjord circuit.",
            externalUrl: "https://visitlofoten.com/reisemal/trollfjorden/",
          },
        ],
      },
      {
        label: "04 / Northern Norway",
        title: "Fjords in the north",
        intro:
          "Those classic fjords are only one part of the Norway story. In the north, build Trollfjord with Lofoten and Vesterålen; treat Senja and Lyngen as their own Arctic fjord landscapes rather than extensions of a Bergen or Ålesund trip.",
        layout: "split",
        media: {
          imageSrc: "/images/destinations/fjords/norway-fjord2.jpg",
          imageAlt: "A red cabin on the fjord edge beneath a steep northern mountain",
          imagePosition: "center 42%",
          captionLabel: "Northern fjords",
          caption:
            "A more open Arctic mood, where sea, mountain and weather sit closer together.",
        },
        cards: [
          {
            title: "Arctic fjord routes",
            description:
              "In the north, fjords often sit beside coast roads and island crossings, which changes the rhythm of the day.",
          },
          {
            title: "Midnight sun windows",
            description:
              "June and July give long evenings, so short fjord distances can feel slower and more open.",
          },
          {
            title: "Northern lights season",
            description:
              "From late autumn to early spring, the fjords can sit inside a wider aurora route through the north.",
          },
        ],
      },
      {
        label: "05 / Timing",
        title: "When fjord trips feel easiest",
        intro:
          "Season matters because roads, ferries, daylight and weather windows all shape how the fjords feel in practice.",
        cards: [
          {
            title: "Late spring to early autumn",
            description:
              "Usually the easiest window for road-based fjord travel, ferry rhythm and viewpoint stops.",
            href: "/best-time-to-visit-norway",
          },
          {
            title: "Winter",
            description:
              "Quieter and more atmospheric, but best for travelers who are comfortable with slower conditions.",
          },
          {
            title: "Shoulder season",
            description:
              "Often the best balance of light, access and space if you want room to move without full summer pressure.",
          },
        ],
      },
      {
        label: "06 / Movement",
        title: "Match travel mode to the fjord",
        intro:
          "The cleanest fjord trip is rarely the shortest one. Match the route to the experience you want, then plan roads, boats and overnight stops together.",
        cards: [
          {
            title: "By boat or without a car",
            description:
              "Nærøyfjord is a practical car-free choice through Flåm, Aurland and Gudvangen, while Geirangerfjord is especially memorable from the water.",
            href: "/guides/norway-ferry-guide-for-tourists",
          },
          {
            title: "By road trip",
            description:
              "Hardangerfjord and Nordfjord reward a slower drive through connected scenery; Geirangerfjord belongs in the Ålesund–Nordfjord road-trip group.",
            href: "/guides/driving-in-norway-what-visitors-should-know",
          },
          {
            title: "By hiking-focused base",
            description:
              "Lysefjord is the clearest fit for a hiking-led stay, using Stavanger as the base and weather as part of the plan.",
            href: "/routes",
          },
        ],
      },
      {
        label: "07 / Planning mistakes",
        title: "Leave room for the real route",
        intro:
          "The most common problem is trying to fit too much into a region where distance, ferry timing and weather all matter.",
        cards: [
          {
            title: "Mixing distant regions",
            description:
              "Bergen–Hardanger–Flåm, Ålesund–Nordfjord–Geiranger, Stavanger–Lysefjord and Arctic Trollfjord are separate planning groups. Choose one for a short trip.",
          },
          {
            title: "No ferry buffer",
            description:
              "Treat crossings as fixed points and leave room for queues, loading and weather.",
          },
          {
            title: "Driving too far",
            description:
              "The map can be deceptive when water, tunnels and scenic detours are part of the route.",
          },
        ],
      },
      {
        label: "08 / Responsible travel",
        title: "Move lightly through the landscape",
        intro:
          "The fjords reward careful travel. Small choices make the experience calmer for both visitors and local communities.",
        cards: [
          {
            title: "Stay on marked viewpoints",
            description:
              "Protect the landscape and avoid unsafe roadside stopping.",
            href: "/responsible-travel",
          },
          {
            title: "Park with care",
            description:
              "Some of the best views sit on roads that leave almost no spare shoulder.",
          },
          {
            title: "Support local places",
            description:
              "Cafes, cabins and small shops help the trip feel grounded in the communities you pass through.",
          },
        ],
      },
      {
        label: "09 / Trip styles",
        title: "The timeframes that work best",
        intro:
          "Choose a timeframe and one connected region. Fjord trips work better when days are built around manageable geography rather than a famous-name checklist.",
        cards: [
          {
            label: "3–4 days",
            title: "One compact base",
            description:
              "Use one base or compact pair: Bergen with a selected Hardanger or Flåm–Aurland–Nærøyfjord experience, Stavanger with Lysefjord, or Ålesund with one nearby fjord.",
          },
          {
            label: "5–7 days",
            title: "One connected region",
            description:
              "A western journey can follow Bergen, Hardangerfjord, Flåm, Aurlandsfjord and Nærøyfjord; a Northern Norway route can centre on Lofoten, Vesterålen and Trollfjord.",
          },
          {
            label: "7–10 days",
            title: "A deeper regional journey",
            description:
              "Use the extra time for Nordfjord, Geirangerfjord and Ålesund, or for a slower Bergen–Sognefjord journey with room for changing light and weather. Keep Senja or Lyngen for a separate Arctic itinerary.",
          },
        ],
      },
      {
        label: "10 / FAQ",
        title: "Common planning questions",
        intro:
          "A few quick answers help turn the overview into a usable plan for first-time fjord travel.",
        cards: [
          {
            title: "Where are the fjords in Norway?",
            description:
              "Most of the famous fjords sit in Western Norway, but the north has dramatic fjord landscapes too.",
          },
          {
            title: "What is the best time to visit?",
            description:
              "Late spring through early autumn is usually the easiest window for a first fjord trip.",
          },
          {
            title: "How many days do you need?",
            description:
              "Three to four days is enough for one compact base; five to seven days suits one connected region; seven to ten days allows a deeper regional journey. Do not combine Western Norway and Arctic fjords on a short holiday.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Browse Norway road trip routes", href: "/routes" },
      { label: "Open the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "Read the ferry guide", href: "/guides/norway-ferry-guide-for-tourists" },
      { label: "Read the driving guide", href: "/guides/driving-in-norway-what-visitors-should-know" },
      { label: "See responsible travel advice", href: "/responsible-travel" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Place the fjords inside a realistic route, then adjust the journey around season, ferry timing and weather.",
      primaryHref: "/routes",
      primaryLabel: "Browse road trip routes",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
    guideMeta: {
      lastUpdated: "21 July 2026",
      sources: guideSourceSets.fjordsNorway,
    },
  },
  bestTimeToVisitNorway: {
    meta: {
      title: "Best Time to Visit Norway",
      description:
        "Month-by-month guidance for choosing Norway's best travel season by daylight, weather, road conditions, northern lights and midnight sun.",
    },
    jsonLd: {
      breadcrumbs: [
        { name: "Home", href: "/" },
        { name: "Guides", href: "/guides" },
        { name: "Best Time to Visit Norway", href: "/best-time-to-visit-norway" },
      ],
      article: true,
    },
    updatedDate: CURRENT_ARTICLE_UPDATE_DATE,
    hero: {
      label: "Seasonal field guide",
      title: "Best Time to Visit Norway",
      intro:
        "A month-by-month framework for matching weather, daylight and route goals across Norway.",
      imageSrc: "/images/hero/preikestolen.png",
      imageAlt: "A traveler on Preikestolen above a fjord in clear light",
      imagePosition: "center 45%",
    },
    sections: [
      {
        label: "01 / Month by month",
        title: "Season rhythm at a glance",
        intro:
          "Use these windows as planning anchors, then refine with route and weather realities.",
        cards: [
          {
            label: "Jan-Mar",
            title: "Winter depth",
            description:
              "Snow, dark skies and strong northern lights potential in Arctic regions.",
          },
          {
            label: "Apr-May",
            title: "Spring transition",
            description:
              "Longer days and calmer shoulder-season pacing for mixed road conditions.",
          },
          {
            label: "Jun-Aug",
            title: "Summer light",
            description:
              "Midnight sun in the north and longer driving flexibility across most regions.",
          },
          {
            label: "Sep-Oct",
            title: "Autumn contrast",
            description:
              "Cooler air, lower traffic and the start of darker aurora-friendly nights.",
          },
          {
            label: "Nov-Dec",
            title: "Early winter return",
            description:
              "Darkness settles back in with increasing snow risk and fewer daylight hours.",
          },
        ],
      },
      {
        label: "02 / By travel goal",
        title: "Match season to intent",
        intro:
          "Start with what you want to experience, then choose timing and geography around it.",
        cards: [
          {
            title: "Northern lights",
            description:
              "Late September through March, with winter offering the longest dark windows.",
            href: "/northern-lights-norway",
          },
          {
            title: "Midnight sun drives",
            description:
              "June and July in Northern Norway for late-evening landscape access.",
          },
          {
            title: "Road trips and fjords",
            description:
              "Late spring to early autumn for easier roads and broader ferry frequency.",
            href: "/fjords-of-norway",
          },
        ],
      },
      {
        label: "03 / Shoulder season advantage",
        title: "When Norway feels most balanced",
        intro:
          "Shoulder months can deliver a strong mix of atmosphere, access and lower crowd pressure.",
        cards: [
          {
            title: "May and early June",
            description:
              "Long days arrive without peak-season density in many regions.",
          },
          {
            title: "Late September",
            description:
              "Autumn color, darker evenings and manageable road travel in the north.",
          },
          {
            title: "Early October",
            description:
              "A transition point where weather turns more dramatic but still workable.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "See the northern lights guide", href: "/northern-lights-norway" },
      { label: "Browse the route hub", href: "/routes" },
      { label: "Read the Lofoten destination guide", href: "/destinations/lofoten-islands" },
      { label: "Open the Norway map", href: "/map" },
    ],
    cta: {
      label: "Continue planning",
      text: "Now align your season choice with a concrete route and destination sequence.",
      primaryHref: "/routes",
      primaryLabel: "Browse routes",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.northernLightsWeatherSafety,
    },
  },
  lofotenHub: {
    meta: {
      title: "Lofoten Travel Guide",
      description:
        "A premium destination hub for Lofoten with villages, road trips, seasons, beaches, northern lights and photography notes.",
    },
    hero: {
      label: "Destination hub",
      title: "Lofoten",
      intro:
        "A cinematic destination overview of villages, roads, light and seasonal pacing across the Lofoten Islands.",
      imageSrc: "/images/cards/lofoten.png",
      imageAlt: "Lofoten coastline and peaks in changing Arctic weather",
      imagePosition: "center 48%",
    },
    sections: [
      {
        label: "01 / Places",
        title: "Villages and local rhythm",
        intro:
          "Lofoten is best explored as a sequence of small bases connected by short but dramatic drives.",
        cards: [
          {
            title: "Harbor villages",
            description:
              "Fishing villages provide compact stays with strong access to coast and mountains.",
          },
          {
            title: "Beach landscapes",
            description:
              "Arctic beaches add openness and contrast to tighter village streets.",
          },
          {
            title: "Roadside viewpoints",
            description:
              "Frequent pull-offs make it easy to shape days around light conditions.",
          },
        ],
      },
      {
        label: "02 / Planning",
        title: "Routes, seasons and light",
        intro:
          "Plan Lofoten by combining route length with season windows and daily drive margins.",
        cards: [
          {
            title: "Lofoten road trip (5-7 days)",
            description:
              "A practical structure for moving east to west without overloading each day.",
            href: "/routes/lofoten-road-trip",
          },
          {
            title: "Northern lights season",
            description:
              "Late September to March offers the best darkness window for aurora attempts.",
            href: "/northern-lights-norway",
          },
          {
            title: "Summer midnight sun",
            description:
              "Extended daylight opens room for late drives, hikes and calmer pacing.",
            href: "/best-time-to-visit-norway",
          },
        ],
      },
      {
        label: "03 / Slow travel notes",
        title: "Photography and pace",
        intro:
          "Weather moves quickly in Lofoten. Keep plans flexible and let location changes follow the sky.",
        cards: [
          {
            title: "Stay longer in fewer places",
            description:
              "Two or three bases often work better than a daily accommodation change.",
          },
          {
            title: "Use weather as direction",
            description:
              "Shift between coast and interior roads based on cloud, wind and light breaks.",
          },
          {
            title: "Prioritize dawn and late evening",
            description:
              "Low-angle Arctic light often creates the most cinematic color and texture.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Plan the Lofoten road trip", href: "/routes/lofoten-road-trip" },
      { label: "Browse the route hub", href: "/routes" },
      { label: "Read the seasonal planning guide", href: "/best-time-to-visit-norway" },
      { label: "Return to destinations", href: "/#destinations" },
    ],
    cta: {
      label: "Continue planning",
      text: "Use Lofoten as a base, then compare nearby northern route extensions.",
      primaryHref: "/routes",
      primaryLabel: "Explore route hub",
      secondaryHref: "/map",
      secondaryLabel: "Open map",
    },
    guideMeta: {
      lastUpdated: GUIDE_LAST_UPDATED,
      sources: guideSourceSets.destinationLofoten,
    },
  },
} as const satisfies Record<string, SeoPageData>;
