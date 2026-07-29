import { unstable_cache } from "next/cache";

import type {
  EnturDeparturesResponse,
  EnturFerryDeparture,
} from "@/src/lib/entur/types";

const ENTUR_JOURNEY_PLANNER_URL =
  "https://api.entur.io/journey-planner/v3/graphql";
const TJOTTA_STOP_PLACE_ID = "NSR:StopPlace:63216";
const ENTUR_REQUEST_TIMEOUT_MS = 10_000;

const departuresQuery = `
  query HelgelandFerryDepartures {
    stopPlace(id: "${TJOTTA_STOP_PLACE_ID}") {
      id
      name
      estimatedCalls(numberOfDepartures: 30, timeRange: 86400) {
        realtime
        aimedDepartureTime
        expectedDepartureTime
        cancellation
        destinationDisplay {
          frontText
        }
        serviceJourney {
          line {
            publicCode
            transportMode
          }
        }
      }
    }
  }
`;

type EnturEstimatedCall = {
  realtime?: boolean | null;
  aimedDepartureTime?: string | null;
  expectedDepartureTime?: string | null;
  cancellation?: boolean | null;
  destinationDisplay?: {
    frontText?: string | null;
  } | null;
  serviceJourney?: {
    line?: {
      publicCode?: string | null;
      transportMode?: string | null;
    } | null;
  } | null;
};

type EnturGraphqlResponse = {
  data?: {
    stopPlace?: {
      id?: string | null;
      name?: string | null;
      estimatedCalls?: EnturEstimatedCall[] | null;
    } | null;
  } | null;
  errors?: Array<{
    message?: string;
  }>;
};

async function fetchFerryDepartures(): Promise<EnturDeparturesResponse> {
  const response = await fetch(ENTUR_JOURNEY_PLANNER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ET-Client-Name": "tripsnorway-helgeland-planner",
    },
    body: JSON.stringify({ query: departuresQuery }),
    cache: "no-store",
    signal: AbortSignal.timeout(ENTUR_REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error("Entur Journey Planner request failed.");
  }

  const payload = (await response.json()) as EnturGraphqlResponse;
  const stopPlace = payload.data?.stopPlace;

  if (!stopPlace || payload.errors?.length) {
    throw new Error("Entur Journey Planner returned an invalid response.");
  }

  const departures: EnturFerryDeparture[] = (stopPlace.estimatedCalls ?? [])
    .filter(
      (call) => call.serviceJourney?.line?.transportMode?.toLowerCase() === "water",
    )
    .flatMap((call) => {
      if (!call.aimedDepartureTime) {
        return [];
      }

      return [
        {
          line: call.serviceJourney?.line?.publicCode ?? null,
          destination: call.destinationDisplay?.frontText ?? "Destination unavailable",
          scheduledDepartureTime: call.aimedDepartureTime,
          expectedDepartureTime:
            call.realtime === true ? call.expectedDepartureTime ?? null : null,
          cancellation: call.cancellation === true,
          realtime: call.realtime === true,
        },
      ];
    })
    .slice(0, 6);

  return {
    terminal: {
      id: stopPlace.id ?? TJOTTA_STOP_PLACE_ID,
      name: stopPlace.name ?? "Tjøtta kai",
    },
    departures,
    updatedAt: new Date().toISOString(),
  };
}

export const getFerryDepartures = unstable_cache(
  fetchFerryDepartures,
  ["entur", "helgeland-ferry-departures", TJOTTA_STOP_PLACE_ID],
  { revalidate: 60 },
);
