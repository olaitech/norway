"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import type {
  EnturDeparturesResponse,
  EnturFerryDeparture,
} from "@/src/lib/entur/types";

type RequestState =
  | { status: "loading"; data: null }
  | { status: "ready"; data: EnturDeparturesResponse }
  | { status: "error"; data: null };

type DestinationFilter = "all" | "forvik" | "igeroy";
type DayFilter = "today" | "tomorrow";

const destinationFilters: Array<{
  value: DestinationFilter;
  label: string;
}> = [
  { value: "all", label: "All destinations" },
  { value: "forvik", label: "Forvik" },
  { value: "igeroy", label: "Igerøy" },
];

const dateFilters: Array<{ value: DayFilter; label: string }> = [
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
];

const osloDateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
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

function formatDateKey(value: Date) {
  const parts = osloDateKeyFormatter.formatToParts(value);
  const partValue = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${partValue("year")}-${partValue("month")}-${partValue("day")}`;
}

function dateKeyForFilter(updatedAt: string, dayFilter: DayFilter) {
  const offset = dayFilter === "tomorrow" ? 24 * 60 * 60 * 1000 : 0;

  return formatDateKey(new Date(new Date(updatedAt).getTime() + offset));
}

function departureStatus(departure: EnturFerryDeparture) {
  if (departure.cancellation) {
    return "Cancelled";
  }

  if (!departure.expectedDepartureTime) {
    return "Scheduled timetable only";
  }

  const delayMinutes = Math.round(
    (new Date(departure.expectedDepartureTime).getTime() -
      new Date(departure.scheduledDepartureTime).getTime()) /
      60000,
  );

  if (delayMinutes === 0) {
    return "On schedule";
  }

  if (delayMinutes > 0) {
    return `Delayed by ${delayMinutes} minute${delayMinutes === 1 ? "" : "s"}`;
  }

  const earlyMinutes = Math.abs(delayMinutes);
  return `Expected ${earlyMinutes} minute${earlyMinutes === 1 ? "" : "s"} early`;
}

export function HelgelandLiveDepartures() {
  const [request, setRequest] = useState<RequestState>({
    status: "loading",
    data: null,
  });
  const [destinationFilter, setDestinationFilter] =
    useState<DestinationFilter>("all");
  const [dayFilter, setDayFilter] = useState<DayFilter>("today");

  const fetchDepartures = useCallback(async () => {
    const response = await fetch("/api/entur/departures");

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
          const todayKey = dateKeyForFilter(data.updatedAt, "today");
          const tomorrowKey = dateKeyForFilter(data.updatedAt, "tomorrow");
          const hasTodayDepartures = data.departures.some(
            (departure) =>
              formatDateKey(new Date(departure.scheduledDepartureTime)) ===
              todayKey,
          );
          const hasTomorrowDepartures = data.departures.some(
            (departure) =>
              formatDateKey(new Date(departure.scheduledDepartureTime)) ===
              tomorrowKey,
          );

          setRequest({ status: "ready", data });

          if (!hasTodayDepartures && hasTomorrowDepartures) {
            setDayFilter("tomorrow");
          }
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

  const refreshDepartures = useCallback(async () => {
    setRequest({ status: "loading", data: null });

    try {
      const data = await fetchDepartures();
      setRequest({ status: "ready", data });
    } catch {
      setRequest({ status: "error", data: null });
    }
  }, [fetchDepartures]);

  const selectedDateKey =
    request.status === "ready"
      ? dateKeyForFilter(request.data.updatedAt, dayFilter)
      : null;

  const filteredDepartures = useMemo(() => {
    if (request.status !== "ready") {
      return [];
    }

    return request.data.departures.filter((departure) => {
      const matchesDestination =
        destinationFilter === "all" ||
        departure.destination
          .toLocaleLowerCase()
          .includes(destinationFilter === "forvik" ? "forvik" : "igerøy");
      const matchesDate =
        selectedDateKey !== null &&
        formatDateKey(new Date(departure.scheduledDepartureTime)) ===
        selectedDateKey;

      return matchesDestination && matchesDate;
    });
  }, [destinationFilter, request, selectedDateKey]);

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
              Live ferry timing
            </p>
            <h2
              id="live-ferry-departures-heading"
              className="mt-4 font-serif text-[clamp(2.2rem,4.4vw,4.15rem)] font-normal leading-[0.94] tracking-[-0.05em] text-[#f4efe2]"
            >
              Departures from Tjøtta kai
            </h2>
            <p className="mt-4 text-sm font-light leading-[1.75] text-[#f4efe2]/64 sm:text-base">
              Live water departures for the next 24 hours. Check the exact
              service before travelling.
            </p>
          </div>
          <button
            type="button"
            onClick={() => void refreshDepartures()}
            className="inline-flex min-h-11 items-center rounded-full border border-[#c6a15b]/32 px-4 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/84 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#081116]"
          >
            Refresh data
          </button>
        </div>

        <div className="mt-7 grid gap-5 border-y border-white/8 py-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)]">
          <fieldset className="min-w-0">
            <legend className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#f4efe2]/48">
              Destination
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {destinationFilters.map((filter) => {
                const isSelected = destinationFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setDestinationFilter(filter.value)}
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

          <fieldset className="min-w-0">
            <legend className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#f4efe2]/48">
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

        <div className="mt-1" aria-busy={request.status === "loading"}>
          <p className="sr-only" aria-live="polite">
            {request.status === "loading"
              ? "Loading ferry departures."
              : request.status === "error"
                ? "Live ferry departures are temporarily unavailable."
                : `${filteredDepartures.length} ferry departures shown.`}
          </p>

          {request.status === "loading" ? (
            <p className="py-7 text-sm font-light leading-[1.75] text-[#f4efe2]/58" role="status">
              Checking the latest ferry departures…
            </p>
          ) : null}

          {request.status === "error" ? (
            <div className="py-7" role="alert">
              <p className="text-sm text-[#f4efe2]/82 sm:text-base">
                Live ferry departures are temporarily unavailable.
              </p>
              <p className="mt-2 text-sm font-light leading-[1.75] text-[#f4efe2]/56">
                Try again shortly, then confirm the service before travelling.
              </p>
            </div>
          ) : null}

          {request.status === "ready" && filteredDepartures.length === 0 ? (
            <p className="py-7 text-sm font-light leading-[1.75] text-[#f4efe2]/58">
              No departures match these filters in the next 24 hours.
            </p>
          ) : null}

          {request.status === "ready" && filteredDepartures.length > 0 ? (
            <ol className="divide-y divide-white/8" aria-label="Filtered ferry departures">
              {filteredDepartures.map((departure) => {
                const status = departureStatus(departure);

                return (
                  <li
                    key={`${departure.line ?? "ferry"}-${departure.destination}-${departure.scheduledDepartureTime}`}
                    className="grid gap-4 py-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(11rem,0.85fr)_minmax(8rem,0.65fr)] sm:items-center"
                  >
                    <div className="min-w-0">
                      <p className="text-[0.58rem] font-medium uppercase tracking-[0.23em] text-[#c6a15b]/68">
                        {departure.line ? `Route ${departure.line}` : "Ferry departure"}
                      </p>
                      <h3 className="mt-1.5 break-words font-serif text-xl font-normal tracking-[-0.025em] text-[#f4efe2] sm:text-2xl">
                        {departure.destination}
                      </h3>
                    </div>

                    <dl className="grid grid-cols-2 gap-x-5 text-sm">
                      <div>
                        <dt className="text-[0.54rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/42">
                          Scheduled
                        </dt>
                        <dd className="mt-1 text-[#f4efe2]/84">
                          {formatDateTime(departure.scheduledDepartureTime)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[0.54rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/42">
                          Expected
                        </dt>
                        <dd className="mt-1 text-[#f4efe2]/84">
                          {departure.expectedDepartureTime
                            ? formatDateTime(departure.expectedDepartureTime)
                            : "Not available"}
                        </dd>
                      </div>
                    </dl>

                    <p
                      className={`text-sm font-medium leading-[1.5] ${
                        departure.cancellation
                          ? "text-[#c6a15b]"
                          : "text-[#f4efe2]/72"
                      }`}
                    >
                      {status}
                    </p>
                  </li>
                );
              })}
            </ol>
          ) : null}
        </div>

        {request.status === "ready" ? (
          <p className="mt-5 text-xs font-light leading-[1.7] text-[#f4efe2]/48">
            Last updated {formatDateTime(request.data.updatedAt)} (Europe/Oslo).
            Successful responses are cached for 60 seconds.
          </p>
        ) : null}

        <p className="mt-3 text-xs font-light tracking-[0.02em] text-[#f4efe2]/48">
          Data made available by Entur.
        </p>
      </div>
    </section>
  );
}
