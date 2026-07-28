export type EnturFerryDeparture = {
  line: string | null;
  destination: string;
  scheduledDepartureTime: string;
  expectedDepartureTime: string | null;
  cancellation: boolean;
  realtime: boolean;
};

export type EnturDeparturesResponse = {
  terminal: {
    id: string;
    name: string;
  };
  departures: EnturFerryDeparture[];
  updatedAt: string;
};
