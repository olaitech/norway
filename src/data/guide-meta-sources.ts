import type { GuideMetaSource } from "@/src/components/shared/GuideMetaFooter";

export const GUIDE_LAST_UPDATED = "May 2026";

const guideSources = {
  visitNorway: {
    label: "Visit Norway",
    href: "https://www.visitnorway.com/",
  },
  visitTromso: {
    label: "Visit Tromsø",
    href: "https://www.visittromso.no/",
  },
  reisNordland: {
    label: "Reis Nordland",
    href: "https://www.reisnordland.no/",
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
  statensVegvesen: {
    label: "Statens vegvesen",
    href: "https://www.vegvesen.no/",
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
    guideSources.visitNorway,
    guideSources.reisNordland,
    guideSources.entur,
    guideSources.norwegianScenicRoutes,
  ],
  destinationTromso: [
    guideSources.visitTromso,
    guideSources.visitNorway,
    guideSources.entur,
    guideSources.avinor,
    guideSources.yr,
  ],
} as const satisfies Record<string, ReadonlyArray<GuideMetaSource>>;
