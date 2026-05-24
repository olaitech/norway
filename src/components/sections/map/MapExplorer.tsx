"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, Compass, Route } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  LayerGroup as LeafletLayerGroup,
  Map as LeafletMap,
} from "leaflet";

import type {
  FeaturedRoute,
  MapFilter,
  MapFilterKey,
  MapPlace,
} from "@/src/data/map";

import styles from "./MapExplorer.module.css";

type MapExplorerProps = {
  places: MapPlace[];
  filters: MapFilter[];
  routes: FeaturedRoute[];
};

type LeafletLibrary = typeof import("leaflet");

const norwayBounds: [[number, number], [number, number]] = [
  [57.7, 4.1],
  [71.4, 31.2],
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function popupContent(place: MapPlace) {
  const title = escapeHtml(place.title);
  const description = escapeHtml(place.description);
  const bestSeason = escapeHtml(place.bestSeason);
  const idealDays = escapeHtml(place.idealDays);
  const href = escapeHtml(place.href);
  const googleMapsUrl = escapeHtml(place.googleMapsUrl);

  return `
    <article class="map-popup-card">
      <p class="map-popup-label">Destination</p>
      <h3 class="map-popup-title">${title}</h3>
      <p class="map-popup-description">${description}</p>
      <div class="map-popup-facts">
        <div>
          <span class="map-popup-fact-label">Best season</span>
          <span class="map-popup-fact-value">${bestSeason}</span>
        </div>
        <div>
          <span class="map-popup-fact-label">Ideal days</span>
          <span class="map-popup-fact-value">${idealDays}</span>
        </div>
      </div>
      <div class="map-popup-links">
        <a class="map-popup-link map-popup-link-primary" href="${href}">View guide</a>
        <a class="map-popup-link" href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer">Google Maps</a>
      </div>
    </article>
  `;
}

export function MapExplorer({ places, filters, routes }: MapExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<MapFilterKey>("all");
  const [isMapReady, setIsMapReady] = useState(false);
  const shouldReduceMotion = useReducedMotion() === true;
  const mapElementRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerLayerRef = useRef<LeafletLayerGroup | null>(null);
  const leafletRef = useRef<LeafletLibrary | null>(null);

  const visiblePlaces = useMemo(
    () =>
      activeFilter === "all"
        ? places
        : places.filter((place) => place.categories.includes(activeFilter)),
    [activeFilter, places],
  );

  useEffect(() => {
    let cancelled = false;
    let map: LeafletMap | null = null;

    async function createMap() {
      const L = await import("leaflet");

      if (cancelled || !mapElementRef.current) {
        return;
      }

      map = L.map(mapElementRef.current, {
        attributionControl: true,
        scrollWheelZoom: false,
        zoomControl: false,
      });
      map.fitBounds(norwayBounds, { padding: [18, 18] });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      L.control.zoom({ position: "bottomright" }).addTo(map);

      leafletRef.current = L;
      markerLayerRef.current = L.layerGroup().addTo(map);
      mapRef.current = map;
      setIsMapReady(true);
    }

    void createMap();

    return () => {
      cancelled = true;
      map?.remove();
      mapRef.current = null;
      markerLayerRef.current = null;
      leafletRef.current = null;
    };
  }, []);

  useEffect(() => {
    const L = leafletRef.current;
    const map = mapRef.current;
    const markerLayer = markerLayerRef.current;

    if (!L || !map || !markerLayer || !isMapReady) {
      return;
    }

    markerLayer.clearLayers();

    visiblePlaces.forEach((place) => {
      const icon = L.divIcon({
        className: "map-marker-shell",
        html: '<span class="map-marker"><span class="map-marker-dot"></span></span>',
        iconAnchor: [18, 18],
        iconSize: [36, 36],
        popupAnchor: [0, -14],
      });

      L.marker(place.coordinates, {
        alt: `${place.title} map marker`,
        icon,
        keyboard: true,
        title: place.title,
      })
        .bindPopup(popupContent(place), { maxWidth: 320 })
        .addTo(markerLayer);
    });

    if (activeFilter === "all") {
      map.fitBounds(norwayBounds, {
        animate: !shouldReduceMotion,
        duration: shouldReduceMotion ? undefined : 0.65,
        padding: [18, 18],
      });
      return;
    }

    if (visiblePlaces.length > 0) {
      map.fitBounds(
        L.latLngBounds(visiblePlaces.map((place) => place.coordinates)),
        {
          animate: !shouldReduceMotion,
          duration: shouldReduceMotion ? undefined : 0.65,
          maxZoom: 7,
          padding: [54, 54],
        },
      );
    }
  }, [activeFilter, isMapReady, shouldReduceMotion, visiblePlaces]);

  return (
    <section className="relative px-5 pb-20 sm:px-8 sm:pb-24 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[19.5rem_minmax(0,1fr)]">
        <aside className="order-2 rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-6 text-[#f4efe2] sm:p-7 lg:order-1">
          <p className="text-[0.63rem] font-medium uppercase tracking-[0.32em] text-[#d8c9a7]/72">
            Curated journeys
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal tracking-[-0.04em]">
            Featured routes
          </h2>

          <div className="mt-8 space-y-5">
            {routes.map((route) => (
              <article
                key={route.title}
                className="rounded-[1rem] border border-white/8 bg-black/15 p-5"
              >
                <div className="flex items-center gap-2 text-[0.59rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/68">
                  <Route className="h-3.5 w-3.5" />
                  {route.duration}
                </div>
                <h3 className="mt-4 font-serif text-xl leading-tight tracking-[-0.025em]">
                  {route.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-[1.7] text-[#f4efe2]/60">
                  {route.description}
                </p>
                <p className="mt-4 border-t border-white/8 pt-4 text-xs font-light leading-[1.7] text-[#f4efe2]/52">
                  {route.season}. {route.travelNote}
                </p>
                <a
                  href={route.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[0.59rem] font-medium uppercase tracking-[0.2em] text-[#d8c9a7]/74 transition-colors hover:text-[#f4efe2]"
                >
                  Open route in Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[1rem] border border-[#d8c9a7]/14 bg-[#d8c9a7]/[0.045] p-5">
            <div className="flex items-center gap-2 text-[0.59rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/72">
              <Compass className="h-3.5 w-3.5" />
              Travel notes
            </div>
            <p className="mt-3 text-xs font-light leading-[1.75] text-[#f4efe2]/58">
              Durations are approximate planning notes only. Ferry schedules,
              weather and seasonal road conditions should be checked before
              travelling.
            </p>
          </div>
        </aside>

        <div className="order-1 lg:order-2">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`rounded-full border px-4 py-2.5 text-[0.62rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                    isActive
                      ? "border-[#d8c9a7]/46 bg-[#d8c9a7]/12 text-[#f4efe2]"
                      : "border-white/10 bg-white/[0.025] text-[#f4efe2]/56 hover:border-white/20 hover:text-[#f4efe2]/84"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
            <p className="ml-auto hidden text-xs font-light text-[#f4efe2]/42 sm:block">
              {visiblePlaces.length} places shown
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#07100f] shadow-[0_34px_100px_rgba(0,0,0,0.38)]">
            <div
              ref={mapElementRef}
              className={styles.map}
              role="region"
              aria-label="Interactive map of featured destinations in Norway"
            />
            <div
              className={`pointer-events-none absolute inset-0 z-[500] grid place-items-center bg-[#07100f] transition-opacity duration-500 ${
                isMapReady ? "opacity-0" : "opacity-100"
              }`}
              aria-hidden={isMapReady}
            >
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/62">
                Preparing map
              </p>
            </div>
            <div className="pointer-events-none absolute left-4 top-4 z-[450] rounded-full border border-white/10 bg-[#06100f]/74 px-4 py-2 text-[0.58rem] font-medium uppercase tracking-[0.25em] text-[#f4efe2]/65 backdrop-blur-md">
              OpenStreetMap tiles
            </div>
          </div>
          <p className="mt-4 text-xs font-light leading-relaxed text-[#f4efe2]/42">
            Travel times are approximate and meant for inspiration. Open routes
            in Google Maps for live directions, traffic and ferry updates.
          </p>
        </div>
      </div>
    </section>
  );
}
