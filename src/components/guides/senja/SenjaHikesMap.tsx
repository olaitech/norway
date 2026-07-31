"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./SenjaHikesMap.module.css";

type MapStatus = "waiting" | "loading" | "ready" | "error";

type HikeArea = {
  name: string;
  start: string;
  difficulty: string;
  anchor: string;
  coordinates: [number, number];
};

type Place = {
  name: string;
  coordinates: [number, number];
};

const SENJA_BOUNDS: [[number, number], [number, number]] = [
  [68.85, 15.65],
  [69.65, 18.35],
];

const HIKE_AREAS: readonly HikeArea[] = [
  {
    name: "Hesten and Segla",
    start: "Fjordgård",
    difficulty: "Demanding mountain hikes",
    anchor: "hike-hesten",
    coordinates: [69.4855742, 17.658892],
  },
  {
    name: "Husfjellet",
    start: "Skaland",
    difficulty: "Moderate mountain hike",
    anchor: "hike-husfjellet",
    coordinates: [69.4702389, 17.2730764],
  },
  {
    name: "Barden, Grytetippen and Keipen",
    start: "Fjordgård or Mefjordeidet, route dependent",
    difficulty: "Demanding mountain hikes",
    anchor: "hike-grytetippen-keipen",
    coordinates: [69.47602, 17.73949],
  },
  {
    name: "Sukkertoppen",
    start: "Hamn / Nikkelverket",
    difficulty: "Demanding mountain hike",
    anchor: "hike-sukkertoppen",
    coordinates: [69.4044611, 17.1484205],
  },
  {
    name: "Ånderdalen nature trail",
    start: "Tranøybotn entrance",
    difficulty: "Family-friendly to moderate",
    anchor: "walk-anderdalen",
    coordinates: [69.1992488, 17.4569146],
  },
  {
    name: "Dronningruta and Leirpollfjellet",
    start: "Hofsøy / Stonglandet",
    difficulty: "Easy to moderate",
    anchor: "walk-dronningruta",
    coordinates: [69.0401809, 17.0505632],
  },
  {
    name: "Knuten",
    start: "Mefjordvær",
    difficulty: "Easy short walk",
    anchor: "walk-knuten",
    coordinates: [69.5186431, 17.438209],
  },
];

const PLACES: readonly Place[] = [
  { name: "Finnsnes", coordinates: [69.2296016, 17.9812966] },
  { name: "Silsand", coordinates: [69.2448116, 17.9497381] },
  { name: "Fjordgård", coordinates: [69.4855742, 17.658892] },
  { name: "Mefjordvær", coordinates: [69.5186431, 17.438209] },
  { name: "Senjahopen", coordinates: [69.4958812, 17.4859909] },
  { name: "Skaland", coordinates: [69.4030772, 17.5075359] },
  { name: "Hamn", coordinates: [69.41736, 17.16489] },
  { name: "Gryllefjord", coordinates: [69.3626961, 17.0550418] },
  { name: "Torsken", coordinates: [69.33904, 17.10575] },
  { name: "Ånderdalen", coordinates: [69.1992488, 17.4569146] },
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function SenjaHikesMap() {
  const observerTargetRef = useRef<HTMLDivElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [status, setStatus] = useState<MapStatus>("waiting");

  useEffect(() => {
    const target = observerTargetRef.current;

    if (!target) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setShouldLoad(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px 0px" },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !mapContainerRef.current || mapInstanceRef.current) {
      return;
    }

    let active = true;
    setStatus("loading");

    void import("leaflet")
      .then((L) => {
        if (!active || !mapContainerRef.current) {
          return;
        }

        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        const map = L.map(mapContainerRef.current, {
          attributionControl: true,
          scrollWheelZoom: false,
          zoomControl: true,
          zoomAnimation: !reduceMotion,
          fadeAnimation: !reduceMotion,
          markerZoomAnimation: !reduceMotion,
        });

        mapInstanceRef.current = map;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>',
          maxZoom: 18,
        }).addTo(map);

        for (const place of PLACES) {
          L.circleMarker(place.coordinates, {
            radius: 3.5,
            color: "#f4efe2",
            fillColor: "#d8c9a7",
            fillOpacity: 0.9,
            opacity: 0.78,
            weight: 1,
            interactive: false,
          })
            .addTo(map)
            .bindTooltip(place.name, {
              className: styles.placeTooltip,
              direction: "top",
              offset: [0, -4],
              permanent: true,
            });
        }

        const hikeIcon = L.divIcon({
          className: styles.hikeMarker,
          html: '<span aria-hidden="true"></span>',
          iconAnchor: [13, 26],
          iconSize: [26, 26],
          popupAnchor: [0, -24],
        });

        for (const hike of HIKE_AREAS) {
          const marker = L.marker(hike.coordinates, {
            alt: `${hike.name}, starting around ${hike.start}`,
            icon: hikeIcon,
            keyboard: true,
            riseOnHover: true,
            title: hike.name,
          }).addTo(map);

          marker.bindPopup(
            `<div class="${styles.popupContent}">
              <strong>${escapeHtml(hike.name)}</strong>
              <span>${escapeHtml(hike.start)}</span>
              <span>${escapeHtml(hike.difficulty)}</span>
              <a href="#${escapeHtml(hike.anchor)}">Read hike details</a>
            </div>`,
            { closeButton: true },
          );
        }

        map.fitBounds(L.latLngBounds(SENJA_BOUNDS), {
          animate: false,
          padding: [12, 12],
        });
        map.zoomControl.setPosition("bottomright");

        window.setTimeout(() => map.invalidateSize({ animate: false }), 0);
        setStatus("ready");
      })
      .catch(() => {
        if (active) {
          setStatus("error");
        }
      });

    return () => {
      active = false;
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, [shouldLoad]);

  return (
    <div ref={observerTargetRef} className={styles.mapShell}>
      <div
        ref={mapContainerRef}
        className={styles.mapCanvas}
        role="region"
        aria-label="Interactive map of Senja hiking areas and central places"
      />

      {status !== "ready" ? (
        <div className={styles.mapState} aria-live="polite">
          {status === "error"
            ? "The interactive map could not load. Use the hike and start-area list below."
            : "Loading the Senja hiking map…"}
        </div>
      ) : null}

      <noscript>
        The interactive map needs JavaScript. All hiking areas and start points
        are also listed as text below the map.
      </noscript>
    </div>
  );
}

export { HIKE_AREAS };
