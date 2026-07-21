import type { GuideMetaSource } from "@/src/components/shared/GuideMetaFooter";

export const GUIDE_LAST_UPDATED = "May 2026";

export const guideSources = {
  visitNorway: {
    label: "Visit Norway",
    href: "https://www.visitnorway.com/",
  },
  visitLofotenDriving: {
    label: "Visit Lofoten: Driving to Lofoten",
    href: "https://visitlofoten.com/en/topic/drive-to-lofoten-with-rental-car-or-your-own-car/",
  },
  visitLofotenTravelTips: {
    label: "Visit Lofoten: Essential travel tips",
    href: "https://visitlofoten.com/en/topic/essential-travel-tips-to-lofoten/",
  },
  visitLofotenWinter: {
    label: "Visit Lofoten: Winter guidance",
    href: "https://visitlofoten.com/en/topic/winter-in-lofoten/",
  },
  visitHelgeland: {
    label: "Visit Helgeland",
    href: "https://visithelgeland.com/en/destinations/",
  },
  visitHelgelandCoastalRoute: {
    label: "Visit Helgeland: Coastal Route",
    href: "https://visithelgeland.com/en/coastal-route-national-tourist-route-helgeland-coast/",
  },
  visitTromso: {
    label: "Visit Tromsø",
    href: "https://www.visittromso.no/",
  },
  reisNordland: {
    label: "Reis Nordland",
    href: "https://www.reisnordland.no/",
  },
  reisNordlandFerryTimetables: {
    label: "Reis Nordland: Ferry timetables",
    href: "https://www.reisnordland.no/rutetabeller-ferge",
  },
  reisNordlandFerryTravel: {
    label: "Reis Nordland: Ferry travel",
    href: "https://www.reisnordland.no/ferge",
  },
  torghattenBodoVaeroyRostMoskenes: {
    label: "Torghatten: Bodø–Værøy–Røst–Moskenes",
    href: "https://www.torghatten.no/our-routes/18-782",
  },
  entur: {
    label: "Entur",
    href: "https://entur.no/",
  },
  avinor: {
    label: "Avinor",
    href: "https://avinor.no/",
  },
  norwegianScenicRoutes: {
    label: "Norwegian Scenic Routes",
    href: "https://www.nasjonaleturistveger.no/en/",
  },
  norwegianScenicRoutesLofoten: {
    label: "Norwegian Scenic Routes: Lofoten",
    href: "https://www.nasjonaleturistveger.no/en/routes/lofoten",
  },
  norwegianScenicRoutesHelgeland: {
    label: "Norwegian Scenic Routes: Helgelandskysten",
    href: "https://www.nasjonaleturistveger.no/en/routes/helgelandskysten/",
  },
  norwegianScenicRoutesGeirangerTrollstigen: {
    label: "Norwegian Scenic Routes: Geiranger–Trollstigen",
    href: "https://www.nasjonaleturistveger.no/en/routes/geiranger--trollstigen/",
  },
  norwegianScenicRoutesHardanger: {
    label: "Norwegian Scenic Routes: Hardanger",
    href: "https://www.nasjonaleturistveger.no/en/routes/hardanger",
  },
  norwegianScenicRoutesAurlandsfjellet: {
    label: "Norwegian Scenic Routes: Aurlandsfjellet",
    href: "https://www.nasjonaleturistveger.no/en/routes/aurlandsfjellet/",
  },
  fjordNorway: {
    label: "Fjord Norway",
    href: "https://www.fjordnorway.com/en",
  },
  fjordNorwayGeirangerfjord: {
    label: "Fjord Norway: Geirangerfjord",
    href: "https://www.fjordnorway.com/en/see-and-do/the-geirangerfjord",
  },
  fjordNorwayNaeroyfjord: {
    label: "Fjord Norway: Nærøyfjord",
    href: "https://www.fjordnorway.com/en/attractions/the-naeroyfjord",
  },
  visitNorwayFjords: {
    label: "Visit Norway - Fjords",
    href: "https://www.visitnorway.com/things-to-do/nature-attractions/fjords/",
  },
  visitNorwayMonthByMonth: {
    label: "Visit Norway - Month by month",
    href: "https://www.visitnorway.com/plan-your-trip/seasons-climate/norway-month-by-month/",
  },
  unescoWestNorwegianFjords: {
    label: "UNESCO - West Norwegian Fjords",
    href: "https://whc.unesco.org/en/list/1195/",
  },
  unescoVegaArchipelago: {
    label: "UNESCO - Vega Archipelago",
    href: "https://whc.unesco.org/en/list/1143/",
  },
  statensVegvesen: {
    label: "Statens vegvesen",
    href: "https://www.vegvesen.no/",
  },
  statensVegvesenTraffic: {
    label: "Statens vegvesen: Traffic information",
    href: "https://www.vegvesen.no/trafikk",
  },
  varsom: {
    label: "Varsom",
    href: "https://www.varsom.no/",
  },
  yr: {
    label: "Yr",
    href: "https://www.yr.no/",
  },
  norwegianEnvironmentAgency: {
    label: "Norwegian Environment Agency",
    href: "https://www.environmentagency.no/",
  },
  norwegianTrekkingAssociation: {
    label: "The Norwegian Trekking Association",
    href: "https://www.dnt.no/",
  },
} as const;

export const guideSourceSets = {
  ferryTransport: [
    guideSources.visitNorway,
    guideSources.entur,
    guideSources.reisNordland,
    guideSources.avinor,
  ],
  roadTripScenic: [
    guideSources.norwegianScenicRoutes,
    guideSources.statensVegvesen,
    guideSources.visitNorway,
    guideSources.entur,
  ],
  roadTripLofoten: [
    guideSources.norwegianScenicRoutesLofoten,
    guideSources.visitLofotenDriving,
    guideSources.visitLofotenTravelTips,
    guideSources.visitLofotenWinter,
    guideSources.statensVegvesenTraffic,
    guideSources.torghattenBodoVaeroyRostMoskenes,
  ],
  roadTripHelgeland: [
    guideSources.norwegianScenicRoutesHelgeland,
    guideSources.visitHelgelandCoastalRoute,
    guideSources.reisNordlandFerryTimetables,
    guideSources.reisNordlandFerryTravel,
    guideSources.statensVegvesen,
  ],
  fjordsNorway: [
    guideSources.visitNorwayFjords,
    guideSources.visitNorwayMonthByMonth,
    guideSources.fjordNorway,
    guideSources.fjordNorwayGeirangerfjord,
    guideSources.fjordNorwayNaeroyfjord,
    guideSources.unescoWestNorwegianFjords,
    guideSources.norwegianScenicRoutes,
    guideSources.norwegianScenicRoutesGeirangerTrollstigen,
    guideSources.norwegianScenicRoutesHardanger,
    guideSources.norwegianScenicRoutesAurlandsfjellet,
  ],
  northernLightsWeatherSafety: [
    guideSources.visitNorway,
    guideSources.visitTromso,
    guideSources.yr,
    guideSources.varsom,
  ],
  campingResponsibleTravel: [
    guideSources.visitNorway,
    guideSources.norwegianEnvironmentAgency,
    guideSources.norwegianTrekkingAssociation,
    guideSources.varsom,
  ],
  destinationLofoten: [
    guideSources.visitNorway,
    guideSources.entur,
    guideSources.reisNordland,
    guideSources.avinor,
  ],
  destinationSenja: [
    guideSources.visitNorway,
    guideSources.visitTromso,
    guideSources.entur,
    guideSources.avinor,
    guideSources.yr,
  ],
  destinationHelgeland: [
    guideSources.visitHelgeland,
    guideSources.norwegianScenicRoutes,
    guideSources.unescoVegaArchipelago,
    guideSources.visitNorway,
    guideSources.reisNordland,
    guideSources.entur,
  ],
  destinationTromso: [
    guideSources.visitTromso,
    guideSources.visitNorway,
    guideSources.entur,
    guideSources.avinor,
    guideSources.yr,
  ],
} as const satisfies Record<string, ReadonlyArray<GuideMetaSource>>;
