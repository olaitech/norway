"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useMounted } from "@/src/hooks/useMounted";

type GatewayCard = {
  gateway: string;
  meta: string;
  text: string;
  href: string;
};

type MapMarker = {
  id: string;
  label: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  textAnchor?: "start" | "end";
};

type MapRoute = {
  id: string;
  d: string;
  delay: number;
};

const gatewayCards: GatewayCard[] = [
  {
    gateway: "Bodø",
    meta: "HELGELAND / LOFOTEN FERRY / COASTAL ROUTES",
    text: "A coastal gateway for island roads, ferry crossings and journeys north toward Lofoten.",
    href: "/routes/helgeland-coast-road-trip",
  },
  {
    gateway: "Evenes",
    meta: "LOFOTEN / VESTERÅLEN / NARVIK",
    text: "A practical arrival point for Lofoten, Vesterålen and the mountains around Narvik.",
    href: "/routes/lofoten-road-trip",
  },
  {
    gateway: "Tromsø",
    meta: "ARCTIC CITY / SENJA / NORTHERN LIGHTS",
    text: "A natural starting point for Arctic light, city stays and slow routes toward Senja.",
    href: "/northern-lights-norway",
  },
  {
    gateway: "Alta",
    meta: "FINNMARK / WINTER ROADS / ARCTIC SKY",
    text: "A northern gateway for wide landscapes, winter light and remote Arctic road routes.",
    href: "/northern-lights-norway",
  },
];

const gatewayMarkers: MapMarker[] = [
  { id: "bodo", label: "Bodø", x: 437, y: 395, labelX: 451, labelY: 388 },
  { id: "evenes", label: "Evenes", x: 488, y: 338, labelX: 501, labelY: 331 },
  { id: "tromso", label: "Tromsø", x: 557, y: 257, labelX: 570, labelY: 248 },
  {
    id: "alta",
    label: "Alta",
    x: 976,
    y: 39,
    labelX: 963,
    labelY: 59,
    textAnchor: "end",
  },
];

const flightRoutes: MapRoute[] = [
  { id: "flight-bodo", d: "M360 681 C 365 584, 393 482, 437 395", delay: 0 },
  { id: "flight-evenes", d: "M360 681 C 370 562, 415 425, 488 338", delay: 0.45 },
  { id: "flight-tromso", d: "M360 681 C 377 538, 448 374, 557 257", delay: 0.9 },
  { id: "flight-alta", d: "M360 681 C 470 445, 698 140, 976 39", delay: 1.35 },
];

const continuationRoutes: MapRoute[] = [
  { id: "continuation-bodo-helgeland", d: "M437 395 C 423 430, 407 463, 391 496", delay: 0.4 },
  { id: "continuation-bodo-lofoten", d: "M437 395 C 415 380, 392 377, 368 389", delay: 0.7 },
  { id: "continuation-evenes-lofoten", d: "M488 338 C 451 344, 407 365, 368 389", delay: 1 },
  { id: "continuation-tromso-senja", d: "M557 257 C 536 275, 516 294, 497 315", delay: 1.3 },
];

function MapRouteOverlay({ animationsEnabled }: { animationsEnabled: boolean }) {
  return (
    <svg
      viewBox="0 0 1344 768"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <filter id="gateway-marker-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {flightRoutes.map((route) => (
        <motion.path
          key={route.id}
          d={route.d}
          fill="none"
          stroke="rgba(216, 201, 167, 0.68)"
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeDasharray="5 12"
          initial={false}
          animate={
            animationsEnabled
              ? { opacity: [0.32, 0.62, 0.32], strokeDashoffset: [0, -68] }
              : { opacity: 0.48, strokeDashoffset: 0 }
          }
          transition={
            animationsEnabled
              ? {
                  delay: route.delay,
                  duration: 12,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }
              : { duration: 0 }
          }
        />
      ))}

      {continuationRoutes.map((route) => (
        <motion.path
          key={route.id}
          d={route.d}
          fill="none"
          stroke="rgba(126, 176, 192, 0.76)"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeDasharray="3 10"
          initial={false}
          animate={
            animationsEnabled
              ? { opacity: [0.4, 0.72, 0.4], strokeDashoffset: [0, -52] }
              : { opacity: 0.56, strokeDashoffset: 0 }
          }
          transition={
            animationsEnabled
              ? {
                  delay: route.delay,
                  duration: 10.5,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }
              : { duration: 0 }
          }
        />
      ))}

      {gatewayMarkers.map((marker) => (
        <g key={marker.id}>
          <circle
            cx={marker.x}
            cy={marker.y}
            r="11"
            fill="rgba(216, 201, 167, 0.2)"
            filter="url(#gateway-marker-glow)"
          />
          <circle
            cx={marker.x}
            cy={marker.y}
            r="6"
            fill="rgba(8, 15, 21, 0.78)"
            stroke="rgba(216, 201, 167, 0.74)"
            strokeWidth="1"
          />
          <circle cx={marker.x} cy={marker.y} r="2.25" fill="rgba(244, 239, 226, 0.96)" />
          <text
            x={marker.labelX}
            y={marker.labelY}
            textAnchor={marker.textAnchor ?? "start"}
            fill="rgba(244, 239, 226, 0.86)"
            fontSize="10"
            fontWeight="500"
            letterSpacing="0.16em"
          >
            {marker.label.toUpperCase()}
          </text>
        </g>
      ))}

      <motion.g
        initial={false}
        animate={
          animationsEnabled
            ? {
                opacity: [0, 0.82, 0.82, 0],
                x: [360, 393, 466, 557],
                y: [681, 516, 360, 257],
                rotate: [-16, -15, -12, -10],
              }
            : { opacity: 0.7, x: 452, y: 392, rotate: -13 }
        }
        transition={
          animationsEnabled
            ? {
                delay: 1.2,
                duration: 11.5,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3.5,
              }
            : { duration: 0 }
        }
      >
        <Plane
          x={-6}
          y={-6}
          size={12}
          color="rgba(216, 201, 167, 0.92)"
          fill="rgba(216, 201, 167, 0.16)"
          strokeWidth={1.65}
        />
      </motion.g>
    </svg>
  );
}

function CinematicMapPanel({ animationsEnabled }: { animationsEnabled: boolean }) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#080e15] shadow-[0_34px_112px_rgba(0,0,0,0.48),0_0_58px_rgba(111,153,168,0.07)]">
        <div className="relative aspect-[1.42/1] w-full sm:aspect-[1.58/1] lg:aspect-[1.42/1]">
          <Image
            src="/images/map/map-norway.jpg"
            alt="Map of Norway showing northern arrival gateways and Arctic travel routes"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-contain"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_42%,transparent_38%,rgba(3,7,11,0.16)_100%),linear-gradient(180deg,rgba(3,7,11,0.04)_0%,rgba(3,7,11,0.13)_100%)]" />
          <MapRouteOverlay animationsEnabled={animationsEnabled} />
        </div>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.57rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/46">
        <span className="text-[#d8c9a7]/72">Flights: dashed gold</span>
        <span className="text-[#9ecad8]/72">Road / ferry continuation: dashed blue</span>
      </div>
    </div>
  );
}

export function GatewaysToNorthernNorway() {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;

  return (
    <section className="relative border-t border-white/8 bg-[#05080b] px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
        <div>
          <p className="text-[0.63rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/74">
            Arrival map
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2.6rem,5.4vw,5.2rem)] font-normal leading-[0.9] tracking-[-0.055em]">
            Gateways to Northern Norway
          </h2>
          <p className="mt-7 max-w-2xl text-sm font-light leading-[1.9] text-[#f4efe2]/66 sm:text-base md:text-lg">
            Fly into Bodø, Evenes, Tromsø or Alta — then continue by road,
            ferry and coastal routes into the landscapes that define the north.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {gatewayCards.map((card) => (
              <article
                key={card.gateway}
                className="group rounded-[1rem] border border-white/10 bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/18"
              >
                <p className="text-[0.57rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/74">
                  {card.gateway}
                </p>
                <p className="mt-3 text-[0.55rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/64">
                  {card.meta}
                </p>
                <p className="mt-4 text-sm font-light leading-[1.75] text-[#f4efe2]/62">
                  {card.text}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-2 text-[0.59rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/68 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  Open related guide
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <CinematicMapPanel animationsEnabled={animationsEnabled} />
      </div>
    </section>
  );
}
