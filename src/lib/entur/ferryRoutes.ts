export type FerryDirectionDefinition = {
  id: string;
  label: string;
  quayId: string;
};

export type FerryRouteDefinition = {
  id: string;
  label: string;
  group: "Helgeland" | "Bodø & Lofoten" | "Tysfjord & Ofoten";
  lineId?: string;
  linePublicCode: string;
  directions: readonly FerryDirectionDefinition[];
};

export const nordlandFerryRoutes = [
  {
    id: "sandnessjoen-bjorn-lokta",
    label: "Sandnessjøen – Bjørn (Dønna) – Løkta",
    group: "Helgeland",
    linePublicCode: "18-181",
    directions: [
      { id: "sandnessjoen", label: "Sandnessjøen", quayId: "NSR:Quay:82296" },
      { id: "bjorn", label: "Bjørn (Dønna)", quayId: "NSR:Quay:82321" },
      { id: "lokta", label: "Løkta", quayId: "NSR:Quay:81684" },
    ],
  },
  {
    id: "sovik-austbo-heroy-brasoy",
    label: "Søvik – Austbø – Herøy – Brasøy",
    group: "Helgeland",
    linePublicCode: "18-171",
    directions: [
      { id: "sovik", label: "Søvik", quayId: "NSR:Quay:82019" },
      { id: "austbo", label: "Austbø", quayId: "NSR:Quay:82024" },
      { id: "heroy", label: "Herøy", quayId: "NSR:Quay:82001" },
      { id: "brasoy", label: "Brasøy", quayId: "NSR:Quay:82005" },
    ],
  },
  {
    id: "tjotta-forvik",
    label: "Tjøtta – Forvik",
    group: "Helgeland",
    linePublicCode: "18-162",
    directions: [
      { id: "tjotta", label: "Tjøtta", quayId: "NSR:Quay:82013" },
      { id: "forvik", label: "Forvik", quayId: "NSR:Quay:101696" },
    ],
  },
  {
    id: "tjotta-igeroy",
    label: "Tjøtta – Igerøy",
    group: "Helgeland",
    linePublicCode: "18-158",
    directions: [
      { id: "tjotta", label: "Tjøtta", quayId: "NSR:Quay:82013" },
      { id: "igeroy", label: "Igerøy", quayId: "NSR:Quay:81980" },
    ],
  },
  {
    id: "horn-igeroy",
    label: "Horn – Igerøy",
    group: "Helgeland",
    linePublicCode: "18-152",
    directions: [
      { id: "horn", label: "Horn", quayId: "NSR:Quay:100244" },
      { id: "igeroy", label: "Igerøy", quayId: "NSR:Quay:81980" },
    ],
  },
  {
    id: "levang-nesna",
    label: "Levang – Nesna",
    group: "Helgeland",
    linePublicCode: "18-335",
    directions: [
      { id: "levang", label: "Levang", quayId: "NSR:Quay:82305" },
      { id: "nesna", label: "Nesna", quayId: "NSR:Quay:81688" },
    ],
  },
  {
    id: "vennesund-holm",
    label: "Vennesund – Holm",
    group: "Helgeland",
    linePublicCode: "18-115",
    directions: [
      { id: "vennesund", label: "Vennesund", quayId: "NSR:Quay:81971" },
      { id: "holm", label: "Holm", quayId: "NSR:Quay:81967" },
    ],
  },
  {
    id: "stokkvagen-onoy-sleneset-lovund",
    label: "Stokkvågen – Onøy – Sleneset – Lovund",
    group: "Helgeland",
    linePublicCode: "18-344",
    directions: [
      { id: "stokkvagen", label: "Stokkvågen", quayId: "NSR:Quay:81716" },
      { id: "onoy", label: "Onøy", quayId: "NSR:Quay:81720" },
      { id: "sleneset", label: "Sleneset", quayId: "NSR:Quay:81932" },
      { id: "lovund", label: "Lovund", quayId: "NSR:Quay:82688" },
    ],
  },
  {
    id: "jektvik-kilboghamn",
    label: "Jektvik – Kilboghamn",
    group: "Helgeland",
    linePublicCode: "18-414",
    directions: [
      { id: "jektvik", label: "Jektvik", quayId: "NSR:Quay:82334" },
      { id: "kilboghamn", label: "Kilboghamn", quayId: "NSR:Quay:82710" },
    ],
  },
  {
    id: "foroy-agskardet",
    label: "Forøy – Ågskardet",
    group: "Helgeland",
    linePublicCode: "18-421",
    directions: [
      { id: "foroy", label: "Forøy", quayId: "NSR:Quay:82737" },
      { id: "agskardet", label: "Ågskardet", quayId: "NSR:Quay:82749" },
    ],
  },
  {
    id: "bodo-vaeroy-rost-moskenes",
    label: "Bodø – Værøy – Røst – Moskenes",
    group: "Bodø & Lofoten",
    lineId: "NOR:Line:12_8782",
    linePublicCode: "18-782",
    directions: [
      { id: "bodo", label: "Bodø", quayId: "NSR:Quay:85038" },
      { id: "vaeroy", label: "Værøy", quayId: "NSR:Quay:84710" },
      { id: "rost", label: "Røst", quayId: "NSR:Quay:84887" },
      { id: "moskenes", label: "Moskenes", quayId: "NSR:Quay:81840" },
    ],
  },
  {
    id: "drag-kjopsvik",
    label: "Drag – Kjøpsvik",
    group: "Tysfjord & Ofoten",
    lineId: "NOR:Line:12_8581",
    linePublicCode: "18-581",
    directions: [
      { id: "drag", label: "Drag", quayId: "NSR:Quay:82800" },
      { id: "kjopsvik", label: "Kjøpsvik", quayId: "NSR:Quay:82797" },
    ],
  },
  {
    id: "bognes-skarberget",
    label: "Bognes – Skarberget",
    group: "Tysfjord & Ofoten",
    lineId: "NOR:Line:12_8611",
    linePublicCode: "18-611",
    directions: [
      { id: "bognes", label: "Bognes", quayId: "NSR:Quay:100416" },
      { id: "skarberget", label: "Skarberget", quayId: "NSR:Quay:82785" },
    ],
  },
  {
    id: "bognes-lodingen",
    label: "Bognes – Lødingen",
    group: "Tysfjord & Ofoten",
    lineId: "NOR:Line:12_8703",
    linePublicCode: "18-703",
    directions: [
      { id: "bognes", label: "Bognes", quayId: "NSR:Quay:82790" },
      { id: "lodingen", label: "Lødingen", quayId: "NSR:Quay:82806" },
    ],
  },
] as const satisfies readonly FerryRouteDefinition[];

export const nordlandFerryQuayIds = [
  ...new Set(
    nordlandFerryRoutes.flatMap((route) =>
      route.directions.map((direction) => direction.quayId),
    ),
  ),
];
