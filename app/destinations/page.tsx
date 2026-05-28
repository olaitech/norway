import type { Metadata } from "next";
import Link from "next/link";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore cinematic destination guides for Northern Norway, including Lofoten, Senja, the Helgeland Coast and Tromso.",
};

const destinationLinks = [
  {
    title: "Lofoten Islands",
    label: "Island archipelago / Nordland",
    href: "/destinations/lofoten-islands",
    text: "Sharp peaks, fishing villages, Arctic beaches and road-trip days shaped by weather and light.",
  },
  {
    title: "Senja",
    label: "Wild island / Troms",
    href: "/destinations/senja",
    text: "A quieter northern island of ridges, fjords, outer-coast roads and cinematic viewpoints.",
  },
  {
    title: "Helgeland Coast",
    label: "Coastal passage / Nordland",
    href: "/destinations/helgeland-coast",
    text: "Island ferries, open shoreline, slow roads and one of Norway's most understated coastal journeys.",
  },
  {
    title: "Tromso",
    label: "Arctic city / Troms",
    href: "/destinations/tromso",
    text: "A compact northern city for Arctic culture, winter light, fjord trips and northern lights planning.",
  },
] as const;

export default function DestinationsPage() {
  return (
    <InfoPageShell
      eyebrow="Destination archive"
      title="Destinations"
      intro="A curated starting point for Norway and Northern Norway destination planning, built around slow roads, coastal weather, fjords, islands and places worth understanding before arrival."
      actions={[
        { label: "Explore routes", href: "/routes" },
        { label: "Open map", href: "/map" },
      ]}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {destinationLinks.map((destination) => (
          <Link
            key={destination.href}
            href={destination.href}
            className="group rounded-[1.25rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.032),rgba(255,255,255,0.014))] p-7 transition-colors hover:border-[#d8c9a7]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:p-8"
          >
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/70">
              {destination.label}
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[0.96] tracking-[-0.045em]">
              {destination.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-light leading-[1.82] text-[#f4efe2]/64 sm:text-base">
              {destination.text}
            </p>
            <span className="mt-7 inline-flex text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/74 transition-colors group-hover:text-[#f4efe2]">
              Open guide
            </span>
          </Link>
        ))}
      </div>
    </InfoPageShell>
  );
}
