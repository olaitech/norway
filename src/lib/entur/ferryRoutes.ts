export type FerryDirectionDefinition = {
  id: string;
  label: string;
  quayId: string;
};

export type FerryRouteDefinition = {
  id: string;
  label: string;
  linePublicCode: string;
  directions: readonly FerryDirectionDefinition[];
};

export const helgelandFerryRoutes = [
  {
    id: "sandnessjoen-bjorn-lokta",
    label: "Sandnessjøen – Bjørn (Dønna) – Løkta",
    linePublicCode: "18-181",
    directions: [
      { id: "sandnessjoen", label: "From Sandnessjøen", quayId: "NSR:Quay:82296" },
      { id: "bjorn", label: "From Bjørn (Dønna)", quayId: "NSR:Quay:82321" },
      { id: "lokta", label: "From Løkta", quayId: "NSR:Quay:81684" },
    ],
  },
  {
    id: "sovik-austbo-heroy-brasoy",
    label: "Søvik – Austbø – Herøy – Brasøy",
    linePublicCode: "18-171",
    directions: [
      { id: "sovik", label: "From Søvik", quayId: "NSR:Quay:82019" },
      { id: "austbo", label: "From Austbø", quayId: "NSR:Quay:82024" },
      { id: "heroy", label: "From Herøy", quayId: "NSR:Quay:82001" },
      { id: "brasoy", label: "From Brasøy", quayId: "NSR:Quay:82005" },
    ],
  },
  {
    id: "tjotta-forvik",
    label: "Tjøtta – Forvik",
    linePublicCode: "18-162",
    directions: [
      { id: "tjotta", label: "Tjøtta to Forvik", quayId: "NSR:Quay:82013" },
      { id: "forvik", label: "Forvik to Tjøtta", quayId: "NSR:Quay:101696" },
    ],
  },
  {
    id: "tjotta-igeroy",
    label: "Tjøtta – Igerøy",
    linePublicCode: "18-158",
    directions: [
      { id: "tjotta", label: "Tjøtta to Igerøy", quayId: "NSR:Quay:82013" },
      { id: "igeroy", label: "Igerøy to Tjøtta", quayId: "NSR:Quay:81980" },
    ],
  },
  {
    id: "horn-igeroy",
    label: "Horn – Igerøy",
    linePublicCode: "18-152",
    directions: [
      { id: "horn", label: "Horn to Igerøy", quayId: "NSR:Quay:100244" },
      { id: "igeroy", label: "Igerøy to Horn", quayId: "NSR:Quay:81980" },
    ],
  },
  {
    id: "levang-nesna",
    label: "Levang – Nesna",
    linePublicCode: "18-335",
    directions: [
      { id: "levang", label: "Levang to Nesna", quayId: "NSR:Quay:82305" },
      { id: "nesna", label: "Nesna to Levang", quayId: "NSR:Quay:81688" },
    ],
  },
  {
    id: "vennesund-holm",
    label: "Vennesund – Holm",
    linePublicCode: "18-115",
    directions: [
      { id: "vennesund", label: "Vennesund to Holm", quayId: "NSR:Quay:81971" },
      { id: "holm", label: "Holm to Vennesund", quayId: "NSR:Quay:81967" },
    ],
  },
  {
    id: "stokkvagen-onoy-sleneset-lovund",
    label: "Stokkvågen – Onøy – Sleneset – Lovund",
    linePublicCode: "18-344",
    directions: [
      { id: "stokkvagen", label: "From Stokkvågen", quayId: "NSR:Quay:81716" },
      { id: "onoy", label: "From Onøy", quayId: "NSR:Quay:81720" },
      { id: "sleneset", label: "From Sleneset", quayId: "NSR:Quay:81932" },
      { id: "lovund", label: "From Lovund", quayId: "NSR:Quay:82688" },
    ],
  },
  {
    id: "jektvik-kilboghamn",
    label: "Jektvik – Kilboghamn",
    linePublicCode: "18-414",
    directions: [
      { id: "jektvik", label: "Jektvik to Kilboghamn", quayId: "NSR:Quay:82334" },
      { id: "kilboghamn", label: "Kilboghamn to Jektvik", quayId: "NSR:Quay:82710" },
    ],
  },
  {
    id: "foroy-agskardet",
    label: "Forøy – Ågskardet",
    linePublicCode: "18-421",
    directions: [
      { id: "foroy", label: "Forøy to Ågskardet", quayId: "NSR:Quay:82737" },
      { id: "agskardet", label: "Ågskardet to Forøy", quayId: "NSR:Quay:82749" },
    ],
  },
] as const satisfies readonly FerryRouteDefinition[];

export const helgelandFerryQuayIds = [
  ...new Set(
    helgelandFerryRoutes.flatMap((route) =>
      route.directions.map((direction) => direction.quayId),
    ),
  ),
];
