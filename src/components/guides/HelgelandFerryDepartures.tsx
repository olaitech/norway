"use client";

import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import {
  FerryQuayCamera,
  type FerryQuayCameraConfig,
} from "@/src/components/guides/FerryQuayCamera";
import type {
  EnturDeparturesResponse,
  EnturFerryDeparture,
  EnturFerryRoute,
} from "@/src/lib/entur/types";

type RequestState =
  | { status: "loading"; data: null }
  | { status: "ready"; data: EnturDeparturesResponse }
  | { status: "refreshing"; data: EnturDeparturesResponse }
  | { status: "error"; data: EnturDeparturesResponse | null };

type DayFilter = "today" | "tomorrow";

const DEPARTURE_REFRESH_INTERVAL = 60_000;

const dateFilters: Array<{ value: DayFilter; label: string }> = [
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
];

const ferryRouteGroups: EnturFerryRoute["group"][] = [
  "Helgeland",
  "Bodø & Lofoten",
  "Tysfjord & Ofoten",
];

type FerryCameraSelection = {
  routeIds: readonly string[];
  departureId: string;
  camera: FerryQuayCameraConfig;
};

const ferryCameraSelections: readonly FerryCameraSelection[] = [
  {
    routeIds: ["bodo-vaeroy-rost-moskenes"],
    departureId: "bodo",
    camera: {
      cameraId: "3000614_1",
      cameraName: "Bodø ferjekai",
      imageUrl: "https://kamera.atlas.vegvesen.no/api/images/3000614_1",
      pageUrl: "https://www.vegvesen.no/trafikk/vaerveikamera/3000614",
      heading: "Live view from Bodø ferry quay",
      description:
        "Check the current traffic and queue situation at Bodø ferry quay before departure.",
      altText: "Current traffic and queue situation at Bodø ferry quay",
    },
  },
  {
    routeIds: ["bognes-skarberget", "bognes-lodingen"],
    departureId: "bognes",
    camera: {
      cameraId: "1800234_1",
      cameraName: "Bognes ferjekai",
      imageUrl: "https://kamera.atlas.vegvesen.no/api/images/1800234_1",
      pageUrl: "https://www.vegvesen.no/trafikk/vaerveikamera/1800234",
      heading: "Live view from Bognes ferry quay",
      description:
        "Check the current traffic and queue situation at Bognes ferry quay before departure.",
      altText: "Current traffic and queue situation at Bognes ferry quay",
    },
  },
];

const osloDateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const osloFetchedDateFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const osloFetchedTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZoneName: "short",
});

const osloDateKeyFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function formatDateTime(value: string) {
  return osloDateTimeFormatter.format(new Date(value));
}

function formatFetchedAt(value: string) {
  const date = new Date(value);

  return `${osloFetchedDateFormatter.format(date)}, ${osloFetchedTimeFormatter.format(date)}`;
}

function formatDateKey(value: Date) {
  const parts = osloDateKeyFormatter.formatToParts(value);
  const partValue = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${partValue("year")}-${partValue("month")}-${partValue("day")}`;
}

function dateKeyForFilter(fetchedAt: string, dayFilter: DayFilter) {
  const offset = dayFilter === "tomorrow" ? 24 * 60 * 60 * 1000 : 0;

  return formatDateKey(new Date(new Date(fetchedAt).getTime() + offset));
}

function departureStatus(departure: EnturFerryDeparture) {
  if (departure.cancellation) {
    return "Cancelled";
  }

  if (!departure.realtime || !departure.estimatedDepartureTime) {
    return "Scheduled";
  }

  if (departure.delayMinutes === 0) {
    return "Live · on schedule";
  }

  if ((departure.delayMinutes ?? 0) > 0) {
    return `Live · delayed by ${departure.delayMinutes} minute${departure.delayMinutes === 1 ? "" : "s"}`;
  }

  const earlyMinutes = Math.abs(departure.delayMinutes ?? 0);
  return `Live · ${earlyMinutes} minute${earlyMinutes === 1 ? "" : "s"} early`;
}

function timeUntilDeparture(value: string, now: number) {
  const minutes = Math.ceil((new Date(value).getTime() - now) / 60_000);

  if (minutes <= 0) {
    return "Departing now";
  }

  if (minutes < 60) {
    return `In ${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return remainingMinutes === 0
    ? `In ${hours} hour${hours === 1 ? "" : "s"}`
    : `In ${hours}h ${remainingMinutes}m`;
}

function routeDirection(
  data: EnturDeparturesResponse | null,
  routeId: string,
  directionId: string,
) {
  const route = data?.routes.find((candidate) => candidate.id === routeId) ??
    data?.routes[0] ??
    null;
  const direction =
    route?.directions.find((candidate) => candidate.id === directionId) ??
    route?.directions[0] ??
    null;

  return { route, direction };
}

function pushSelectionToUrl(routeId: string, directionId: string) {
  const url = new URL(window.location.href);

  url.searchParams.set("route", routeId);
  url.searchParams.set("from", directionId);
  window.history.pushState(
    null,
    "",
    `${url.pathname}${url.search}${url.hash}`,
  );
}

export function HelgelandFerryDepartures() {
  const [request, setRequest] = useState<RequestState>({
    status: "loading",
    data: null,
  });
  const [routeId, setRouteId] = useState("");
  const [directionId, setDirectionId] = useState("");
  const [dayFilter, setDayFilter] = useState<DayFilter>("today");
  const [expandedDepartureKey, setExpandedDepartureKey] = useState<
    string | null
  >(null);
  const [now, setNow] = useState(Date.now);

  const fetchDepartures = useCallback(async () => {
    const response = await fetch("/api/entur/departures", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Departure request failed.");
    }

    return (await response.json()) as EnturDeparturesResponse;
  }, []);

  useEffect(() => {
    let isCurrent = true;

    void fetchDepartures().then(
      (data) => {
        if (isCurrent) {
          setRequest({ status: "ready", data });
        }
      },
      () => {
        if (isCurrent) {
          setRequest({ status: "error", data: null });
        }
      },
    );

    return () => {
      isCurrent = false;
    };
  }, [fetchDepartures]);

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 60_000);

    return () => window.clearInterval(interval);
  }, []);

  const refreshDepartures = useCallback(async () => {
    setRequest((previous) =>
      previous.data
        ? { status: "refreshing", data: previous.data }
        : { status: "loading", data: null },
    );

    try {
      const data = await fetchDepartures();
      setRequest({ status: "ready", data });
    } catch {
      setRequest((previous) => ({ status: "error", data: previous.data }));
    }
  }, [fetchDepartures]);

  useEffect(() => {
    const interval = window.setInterval(
      () => void refreshDepartures(),
      DEPARTURE_REFRESH_INTERVAL,
    );

    return () => window.clearInterval(interval);
  }, [refreshDepartures]);

  const data = request.data;
  const { route: selectedRoute, direction: selectedDirection } = routeDirection(
    data,
    routeId,
    directionId,
  );
  const selectedDateKey = data
    ? dateKeyForFilter(data.fetchedAt, dayFilter)
    : null;
  const filteredDepartures =
    selectedDirection && selectedDateKey
      ? selectedDirection.departures.filter(
          (departure) =>
            formatDateKey(new Date(departure.scheduledDepartureTime)) ===
            selectedDateKey,
        )
      : [];

  useEffect(() => {
    if (!data) {
      return;
    }

    const syncSelectionFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const route =
        data.routes.find((candidate) => candidate.id === params.get("route")) ??
        data.routes[0];
      const direction =
        route?.directions.find(
          (candidate) => candidate.id === params.get("from"),
        ) ?? route?.directions[0];

      setRouteId(route?.id ?? "");
      setDirectionId(direction?.id ?? "");
      setExpandedDepartureKey(null);
    };

    syncSelectionFromUrl();
    window.addEventListener("popstate", syncSelectionFromUrl);

    return () => window.removeEventListener("popstate", syncSelectionFromUrl);
  }, [data]);

  const selectRoute = (nextRouteId: string) => {
    const nextRoute = data?.routes.find((route) => route.id === nextRouteId);
    const nextDirectionId = nextRoute?.directions[0]?.id ?? "";

    setRouteId(nextRouteId);
    setDirectionId(nextDirectionId);
    setExpandedDepartureKey(null);

    if (nextRoute && nextDirectionId) {
      pushSelectionToUrl(nextRoute.id, nextDirectionId);
    }
  };

  const selectDirection = (nextDirectionId: string) => {
    setDirectionId(nextDirectionId);
    setExpandedDepartureKey(null);

    if (selectedRoute) {
      pushSelectionToUrl(selectedRoute.id, nextDirectionId);
    }
  };

  const isLoading = request.status === "loading";
  const isRefreshing = request.status === "refreshing";
  const selectedCamera =
    ferryCameraSelections.find(
      ({ routeIds, departureId }) =>
        routeIds.includes(selectedRoute?.id ?? "") &&
        departureId === selectedDirection?.id,
    )?.camera ?? null;

  return (
    <section
      id="live-ferry-departures"
      aria-labelledby="live-ferry-departures-heading"
      className="border-t border-white/8 pt-14 sm:pt-16"
    >
      <div className="rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.8),rgba(8,17,22,0.94))] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#c6a15b]/76">
              Nordland ferry planning
            </p>
            <h2
              id="live-ferry-departures-heading"
              className="mt-4 font-serif text-[clamp(2.2rem,4.4vw,4.15rem)] font-normal leading-[0.94] tracking-[-0.05em] text-[#f4efe2]"
            >
              Live ferry departures in Nordland
            </h2>
            <p className="mt-4 text-sm font-light leading-[1.75] text-[#f4efe2]/64 sm:text-base">
              Live departure data for 14 selected ferry routes in Nordland.
              Information is retrieved from Entur and refreshed automatically
              every 60 seconds.
            </p>
            <p className="mt-3 text-xs font-light leading-[1.75] text-[#f4efe2]/52 sm:text-sm">
              <span className="font-medium text-[#9ecad8]">Live</span> means
              Entur has supplied estimated realtime information.{" "}
              <span className="font-medium text-[#f4efe2]/76">Scheduled</span>{" "}
              means only timetable information is currently available.
            </p>
          </div>
          <button
            type="button"
            onClick={() => void refreshDepartures()}
            disabled={isLoading || isRefreshing}
            className="inline-flex min-h-11 items-center rounded-full border border-[#c6a15b]/32 px-4 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/84 transition-colors hover:border-[#c6a15b]/56 disabled:cursor-wait disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#081116]"
          >
            {isRefreshing ? "Refreshing…" : "Refresh data"}
          </button>
        </div>

        {data && selectedRoute && selectedDirection ? (
          <div className="mt-7 grid gap-5 border-y border-white/8 py-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)_auto]">
            <div className="min-w-0">
              <label
                htmlFor="nordland-ferry-route"
                className="block text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/78"
              >
                1. Choose a ferry connection
              </label>
              <p
                id="nordland-ferry-route-help"
                className="mt-1.5 text-xs font-light leading-[1.6] text-[#f4efe2]/52"
              >
                Select the route you want to check
              </p>
              <div className="relative mt-3">
                <select
                  id="nordland-ferry-route"
                  value={selectedRoute.id}
                  onChange={(event) => selectRoute(event.target.value)}
                  aria-describedby="nordland-ferry-route-help nordland-ferry-route-hint"
                  className="min-h-14 w-full appearance-none rounded-xl border border-[#8fafa8]/36 bg-[#071216] px-4 pr-12 text-base text-[#f4efe2] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#c6a15b]/58 hover:bg-[#0a171c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/76 focus-visible:ring-offset-3 focus-visible:ring-offset-[#081116] motion-reduce:transition-none"
                >
                  {ferryRouteGroups.map((group) => (
                    <optgroup key={group} label={group}>
                      {data.routes
                        .filter((route) => route.group === group)
                        .map((route) => (
                          <option key={route.id} value={route.id}>
                            {route.label}
                          </option>
                        ))}
                    </optgroup>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#c6a15b]"
                  size={20}
                  strokeWidth={1.8}
                />
              </div>
              <p
                id="nordland-ferry-route-hint"
                className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#c6a15b]/72"
              >
                Select to change connection
              </p>
            </div>

            <div className="min-w-0">
              <label
                htmlFor="nordland-ferry-direction"
                className="block text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/78"
              >
                2. Departing from
              </label>
              <p
                id="nordland-ferry-direction-help"
                className="mt-1.5 text-xs font-light leading-[1.6] text-[#f4efe2]/52"
              >
                Choose your departure quay
              </p>
              <div className="relative mt-3">
                <select
                  id="nordland-ferry-direction"
                  value={selectedDirection.id}
                  onChange={(event) => selectDirection(event.target.value)}
                  aria-describedby="nordland-ferry-direction-help nordland-ferry-direction-hint"
                  className="min-h-14 w-full appearance-none rounded-xl border border-[#8fafa8]/36 bg-[#071216] px-4 pr-12 text-base text-[#f4efe2] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#c6a15b]/58 hover:bg-[#0a171c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/76 focus-visible:ring-offset-3 focus-visible:ring-offset-[#081116] motion-reduce:transition-none"
                >
                  {selectedRoute.directions.map((direction) => (
                    <option key={direction.id} value={direction.id}>
                      {direction.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#c6a15b]"
                  size={20}
                  strokeWidth={1.8}
                />
              </div>
              <p
                id="nordland-ferry-direction-hint"
                className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#c6a15b]/72"
              >
                Select to change departure quay
              </p>
            </div>

            <fieldset className="min-w-0">
              <legend className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/78">
                Day
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {dateFilters.map((filter) => {
                  const isSelected = dayFilter === filter.value;

                  return (
                    <button
                      key={filter.value}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setDayFilter(filter.value)}
                      className={`min-h-10 rounded-full border px-3.5 text-[0.6rem] font-medium uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081116] ${
                        isSelected
                          ? "border-[#c6a15b]/46 bg-[#c6a15b]/12 text-[#f4efe2]"
                          : "border-white/10 text-[#f4efe2]/62"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>
        ) : null}

        {selectedRoute?.officialUrl ? (
          <p className="mt-4 text-xs font-light leading-[1.7] text-[#f4efe2]/56 sm:text-sm">
            <a
              href={selectedRoute.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-[#8fafa8]/24 px-4 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#f4efe2]/82 transition-colors hover:border-[#c6a15b]/44 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 focus-visible:ring-offset-3 focus-visible:ring-offset-[#081116] motion-reduce:transition-none"
            >
              Check the operator&apos;s official timetable
            </a>
          </p>
        ) : null}

        <div className="mt-1" aria-busy={isLoading || isRefreshing}>
          <p className="sr-only" aria-live="polite">
            {isLoading
              ? "Loading ferry departures."
              : request.status === "error"
                ? data
                  ? "Live updates are temporarily unavailable. Showing the latest successful ferry data."
                  : "Live ferry departures are temporarily unavailable."
                : `${filteredDepartures.length} ferry departures shown.`}
          </p>

          {isLoading ? (
            <p className="py-7 text-sm font-light leading-[1.75] text-[#f4efe2]/58" role="status">
              Checking the latest ferry departures…
            </p>
          ) : null}

          {request.status === "error" && data ? (
            <div
              className="my-5 rounded-xl border border-[#c6a15b]/24 bg-[#c6a15b]/[0.06] px-4 py-4"
              role="status"
            >
              <p className="text-sm text-[#f4efe2]/82 sm:text-base">
                Live updates are temporarily unavailable. Showing the latest
                successful data from{" "}
                <time dateTime={data.fetchedAt}>
                  {formatFetchedAt(data.fetchedAt)}
                </time>
                .
              </p>
            </div>
          ) : null}

          {request.status === "error" && !data ? (
            <div className="py-7" role="alert">
              <p className="text-sm text-[#f4efe2]/82 sm:text-base">
                Live ferry departures are temporarily unavailable.
              </p>
              <p className="mt-2 text-sm font-light leading-[1.75] text-[#f4efe2]/56">
                Try again shortly, then confirm the service before travelling.
              </p>
            </div>
          ) : null}

          {data && selectedDirection?.status === "unavailable" ? (
            <div className="py-7" role="alert">
              <p className="text-sm text-[#f4efe2]/82 sm:text-base">
                Departure data for this quay is temporarily unavailable.
              </p>
              <p className="mt-2 text-sm font-light leading-[1.75] text-[#f4efe2]/56">
                Other Nordland connections remain available to check.
              </p>
            </div>
          ) : null}

          {data && selectedDirection?.status === "ready" && filteredDepartures.length === 0 ? (
            <p className="py-7 text-sm font-light leading-[1.75] text-[#f4efe2]/58">
              No departures match this connection, direction and day in the
              next 24 hours.
            </p>
          ) : null}

          {data && selectedDirection?.status === "ready" && filteredDepartures.length > 0 ? (
            <ol className="space-y-2" aria-label="Filtered ferry departures">
              {filteredDepartures.map((departure, index) => {
                const status = departureStatus(departure);
                const isNextDeparture = index === 0;
                const departureKey = `${selectedRoute?.id ?? "route"}-${selectedDirection?.id ?? "direction"}-${departure.scheduledDepartureTime}-${index}`;
                const detailsId = `ferry-departure-details-${selectedRoute?.id ?? "route"}-${selectedDirection?.id ?? "direction"}-${index}`;
                const isExpanded = expandedDepartureKey === departureKey;

                return (
                  <li
                    key={departureKey}
                    className={
                      isNextDeparture
                        ? "rounded-xl border border-[#9ecad8]/24 bg-[#9ecad8]/[0.055] p-5 shadow-[0_16px_44px_rgba(0,0,0,0.16)] sm:p-6"
                        : "border-b border-white/8 py-4"
                    }
                  >
                    <div
                      className={`grid min-w-0 gap-4 ${
                        isNextDeparture
                          ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(14rem,0.85fr)_minmax(9rem,0.55fr)] lg:items-start"
                          : "sm:grid-cols-[minmax(0,1fr)_minmax(13rem,0.8fr)_minmax(8rem,0.55fr)] sm:items-start"
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="text-[0.56rem] font-medium uppercase tracking-[0.21em] text-[#c6a15b]/72">
                          {isNextDeparture ? "Next departure · " : ""}
                          {departure.realtime
                            ? "Live Entur update"
                            : "Scheduled timetable"}
                        </p>
                        <strong
                          className={`mt-1.5 block break-words font-serif font-normal tracking-[-0.025em] text-[#f4efe2] ${
                            isNextDeparture
                              ? "text-2xl sm:text-3xl"
                              : "text-lg sm:text-xl"
                          }`}
                        >
                          {departure.destination}
                        </strong>
                        <p className="mt-1.5 break-words text-sm font-light leading-[1.6] text-[#f4efe2]/58">
                          Departs from {departure.departureQuay}
                        </p>
                      </div>

                      <dl className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-3 text-sm">
                        <div className="min-w-0">
                          <dt className="text-[0.52rem] font-medium uppercase tracking-[0.18em] text-[#f4efe2]/42">
                            Scheduled
                          </dt>
                          <dd className="mt-1 break-words text-[#f4efe2]/84">
                            <time dateTime={departure.scheduledDepartureTime}>
                              {formatDateTime(departure.scheduledDepartureTime)}
                            </time>
                          </dd>
                        </div>
                        <div className="min-w-0">
                          <dt className="text-[0.52rem] font-medium uppercase tracking-[0.18em] text-[#f4efe2]/42">
                            Estimated
                          </dt>
                          <dd className="mt-1 break-words text-[#f4efe2]/84">
                            {departure.estimatedDepartureTime ? (
                              <time dateTime={departure.estimatedDepartureTime}>
                                {formatDateTime(
                                  departure.estimatedDepartureTime,
                                )}
                              </time>
                            ) : (
                              "Scheduled time only"
                            )}
                          </dd>
                        </div>
                      </dl>

                      <div className="min-w-0">
                        <p
                          className={`break-words text-sm font-medium leading-[1.5] ${
                            departure.cancellation
                              ? "text-[#c6a15b]"
                              : departure.realtime
                                ? "text-[#9ecad8]"
                                : "text-[#f4efe2]/72"
                          }`}
                        >
                          {status}
                        </p>
                        <p className="mt-1.5 text-xs font-light leading-[1.6] text-[#f4efe2]/56">
                          {timeUntilDeparture(
                            departure.scheduledDepartureTime,
                            now,
                          )}
                        </p>
                      </div>
                    </div>

                    {departure.serviceMessages.length > 0 ? (
                      <p className="mt-3 rounded-md border border-[#c6a15b]/20 bg-[#c6a15b]/[0.06] px-3 py-2 text-xs leading-[1.65] text-[#f4efe2]/70">
                        Service update: {departure.serviceMessages.join(" · ")}
                      </p>
                    ) : null}

                    <div className="mt-3">
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={detailsId}
                        onClick={() =>
                          setExpandedDepartureKey(
                            isExpanded ? null : departureKey,
                          )
                        }
                        className="min-h-10 rounded-full border border-white/10 px-3 text-[0.58rem] font-medium uppercase tracking-[0.17em] text-[#f4efe2]/68 transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081116] motion-reduce:transition-none"
                      >
                        {isExpanded ? "Hide details" : "Show details"}
                      </button>
                      <div id={detailsId} hidden={!isExpanded}>
                        <dl className="mt-3 grid min-w-0 gap-3 rounded-lg border border-white/8 bg-black/10 p-3 text-xs sm:grid-cols-2">
                          <div className="min-w-0">
                            <dt className="font-medium uppercase tracking-[0.16em] text-[#f4efe2]/42">
                              Ferry line
                            </dt>
                            <dd className="mt-1 break-words font-light leading-[1.65] text-[#f4efe2]/68">
                              {departure.line ?? "Not listed by Entur"}
                            </dd>
                          </div>
                          <div className="min-w-0">
                            <dt className="font-medium uppercase tracking-[0.16em] text-[#f4efe2]/42">
                              Sailing sequence
                            </dt>
                            <dd className="mt-1 break-words font-light leading-[1.65] text-[#f4efe2]/68">
                              {departure.sailingSequence.join(" → ")}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          ) : null}
        </div>

        {selectedCamera ? (
          <FerryQuayCamera
            key={selectedCamera.cameraId}
            camera={selectedCamera}
          />
        ) : null}

        {data && request.status !== "error" ? (
          <p className="mt-5 text-xs font-light leading-[1.7] text-[#f4efe2]/48">
            Live departures refreshed:{" "}
            <time dateTime={data.fetchedAt}>
              {formatFetchedAt(data.fetchedAt)}
            </time>
            . Successful responses are cached for 60 seconds.
          </p>
        ) : null}

        <p className="mt-3 text-xs font-light leading-[1.7] text-[#f4efe2]/48">
          Verify departures and disruptions with the operator,{" "}
          <a
            href="https://entur.no/"
            target="_blank"
            rel="noreferrer"
            className="text-[#c6a15b]/86 underline decoration-[#c6a15b]/35 underline-offset-4"
          >
            Entur
          </a>{" "}
          or{" "}
          <a
            href="https://www.reisnordland.no/"
            target="_blank"
            rel="noreferrer"
            className="text-[#c6a15b]/86 underline decoration-[#c6a15b]/35 underline-offset-4"
          >
            Reis Nordland
          </a>{" "}
          before travelling. Data made available by Entur.
        </p>
      </div>
    </section>
  );
}
