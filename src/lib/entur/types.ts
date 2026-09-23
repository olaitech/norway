export type EnturFerryDeparture = {
  line: string | null;
  departureQuay: string;
  destination: string;
  scheduledDepartureTime: string;
  estimatedDepartureTime: string | null;
  delayMinutes: number | null;
  cancellation: boolean;
  realtime: boolean;
  sailingSequence: string[];
  serviceMessages: string[];
};

export type EnturFerryDirection = {
  id: string;
  label: string;
  status: "ready" | "unavailable";
  departureQuay: string | null;
  departures: EnturFerryDeparture[];
};

export type EnturFerryRoute = {
  id: string;
  label: string;
  group: "Helgeland" | "Bodø & Lofoten" | "Tysfjord & Ofoten";
  officialUrl: string | null;
  directions: EnturFerryDirection[];
};

export type EnturDeparturesResponse = {
  routes: EnturFerryRoute[];
  fetchedAt: string;
};
