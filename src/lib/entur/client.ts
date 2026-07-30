import { unstable_cache } from "next/cache";

import {
  helgelandFerryQuayIds,
  helgelandFerryRoutes,
} from "@/src/lib/entur/ferryRoutes";
import type {
  EnturDeparturesResponse,
  EnturFerryDeparture,
  EnturFerryDirection,
  EnturFerryRoute,
} from "@/src/lib/entur/types";

const ENTUR_JOURNEY_PLANNER_URL =
  "https://api.entur.io/journey-planner/v3/graphql";
const ENTUR_REQUEST_TIMEOUT_MS = 10_000;

const departuresQuery = `
  query HelgelandFerryDepartures($quayIds: [String!]) {
    quays(ids: $quayIds) {
      id
      name
      estimatedCalls(
        numberOfDepartures: 50
        timeRange: 86400
        includeCancelledTrips: true
      ) {
        aimedDepartureTime
        expectedDepartureTime
        realtime
        cancellation
        destinationDisplay {
          frontText
        }
        quay {
          id
          name
        }
        notices {
          text
        }
        situations {
          summary {
            value
          }
        }
        serviceJourney {
          line {
            publicCode
            transportMode
          }
        }
        serviceJourneyEstimatedCalls {
          next(count: 20) {
            quay {
              id
              name
            }
          }
        }
      }
    }
  }
`;

type EnturEstimatedCall = {
  aimedDepartureTime?: string | null;
  expectedDepartureTime?: string | null;
  realtime?: boolean | null;
  cancellation?: boolean | null;
  destinationDisplay?: {
    frontText?: string | null;
  } | null;
  quay?: {
    id?: string | null;
    name?: string | null;
  } | null;
  notices?: Array<{
    text?: string | null;
  } | null> | null;
  situations?: Array<{
    summary?: Array<{
      value?: string | null;
    } | null> | null;
  } | null> | null;
  serviceJourney?: {
    line?: {
      publicCode?: string | null;
      transportMode?: string | null;
    } | null;
  } | null;
  serviceJourneyEstimatedCalls?: {
    next?: Array<{
      quay?: {
        id?: string | null;
        name?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

type EnturQuay = {
  id?: string | null;
  name?: string | null;
  estimatedCalls?: EnturEstimatedCall[] | null;
};

type EnturGraphqlResponse = {
  data?: {
    quays?: Array<EnturQuay | null> | null;
  } | null;
};

function validText(value: string | null | undefined) {
  const trimmed = value?.trim();

  return trimmed ? trimmed : null;
}

function validDateTime(value: string | null | undefined) {
  return value && Number.isFinite(Date.parse(value)) ? value : null;
}

function uniqueMessages(values: Array<string | null>) {
  return [...new Set(values.filter((value): value is string => value !== null))];
}

function toFerryDeparture(
  call: EnturEstimatedCall,
  expectedQuayId: string,
): EnturFerryDeparture | null {
  const scheduledDepartureTime = validDateTime(call.aimedDepartureTime);
  const departureQuay = validText(call.quay?.name);
  const line = validText(call.serviceJourney?.line?.publicCode);
  const transportMode = validText(call.serviceJourney?.line?.transportMode);

  if (
    !scheduledDepartureTime ||
    !departureQuay ||
    !line ||
    call.quay?.id !== expectedQuayId ||
    transportMode?.toLowerCase() !== "water"
  ) {
    return null;
  }

  const sailingSequence = [
    departureQuay,
    ...(call.serviceJourneyEstimatedCalls?.next ?? []).flatMap((nextCall) => {
      const quayName = validText(nextCall?.quay?.name);

      return quayName ? [quayName] : [];
    }),
  ];
  const destination =
    validText(call.destinationDisplay?.frontText) ?? sailingSequence.at(-1);

  if (!destination) {
    return null;
  }

  const estimatedDepartureTime =
    call.realtime === true ? validDateTime(call.expectedDepartureTime) : null;
  const delayMinutes = estimatedDepartureTime
    ? Math.round(
        (new Date(estimatedDepartureTime).getTime() -
          new Date(scheduledDepartureTime).getTime()) /
          60_000,
      )
    : null;
  const serviceMessages = uniqueMessages([
    ...(call.notices ?? []).map((notice) => validText(notice?.text)),
    ...(call.situations ?? []).flatMap((situation) =>
      (situation?.summary ?? []).map((summary) => validText(summary?.value)),
    ),
  ]);

  return {
    line,
    departureQuay,
    destination,
    scheduledDepartureTime,
    estimatedDepartureTime,
    delayMinutes,
    cancellation: call.cancellation === true,
    realtime: call.realtime === true,
    sailingSequence,
    serviceMessages,
  };
}

function toDirection(
  route: (typeof helgelandFerryRoutes)[number],
  direction: (typeof route.directions)[number],
  quaysById: ReadonlyMap<string, EnturQuay>,
): EnturFerryDirection {
  const quay = quaysById.get(direction.quayId);

  if (!quay) {
    return {
      id: direction.id,
      label: direction.label,
      status: "unavailable",
      departureQuay: null,
      departures: [],
    };
  }

  const departures = (quay.estimatedCalls ?? [])
    .map((call) => toFerryDeparture(call, direction.quayId))
    .filter((departure): departure is EnturFerryDeparture => departure !== null)
    .filter((departure) => departure.line === route.linePublicCode)
    .sort(
      (first, second) =>
        new Date(first.scheduledDepartureTime).getTime() -
        new Date(second.scheduledDepartureTime).getTime(),
    );

  return {
    id: direction.id,
    label: direction.label,
    status: "ready",
    departureQuay: validText(quay.name),
    departures,
  };
}

async function fetchFerryDepartures(): Promise<EnturDeparturesResponse> {
  const response = await fetch(ENTUR_JOURNEY_PLANNER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ET-Client-Name": "tripsnorway-helgeland-planner",
    },
    body: JSON.stringify({
      query: departuresQuery,
      variables: { quayIds: helgelandFerryQuayIds },
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(ENTUR_REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error("Entur Journey Planner request failed.");
  }

  const payload = (await response.json()) as EnturGraphqlResponse;
  const quays = payload.data?.quays;

  if (!Array.isArray(quays)) {
    throw new Error("Entur Journey Planner returned an invalid response.");
  }

  const quaysById = new Map(
    quays.flatMap((quay) => {
      const quayId = validText(quay?.id);

      return quay && quayId ? [[quayId, quay] as const] : [];
    }),
  );
  const routes: EnturFerryRoute[] = helgelandFerryRoutes.map((route) => ({
    id: route.id,
    label: route.label,
    directions: route.directions.map((direction) =>
      toDirection(route, direction, quaysById),
    ),
  }));

  return {
    routes,
    updatedAt: new Date().toISOString(),
  };
}

export const getFerryDepartures = unstable_cache(
  fetchFerryDepartures,
  ["entur", "helgeland-ferry-departures", ...helgelandFerryQuayIds],
  { revalidate: 60 },
);
