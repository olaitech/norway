import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";
import { destinationArchiveCards } from "@/src/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore cinematic destination guides for Northern Norway, including Lofoten, Senja, the Helgeland Coast and Tromso.",
};

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
        {destinationArchiveCards.map((destination) => (
          <Link
            key={destination.href}
            href={destination.href}
            className="group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#080b0d] transition-colors hover:border-[#d8c9a7]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            <div className="absolute inset-0">
              <Image
                src={destination.image}
                alt={destination.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-[0.39] transition-[opacity,transform,filter] duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-[0.57] group-hover:brightness-[0.9] group-hover:contrast-[1.04] group-hover:saturate-[0.95]"
                style={{ objectPosition: destination.imagePosition ?? "center center" }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(2,4,6,0.92)_0%,rgba(3,5,7,0.72)_46%,rgba(2,4,6,0.9)_100%)] transition-opacity duration-700 group-hover:opacity-93" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(216,201,167,0.09),rgba(216,201,167,0)_32%),radial-gradient(circle_at_84%_18%,rgba(126,176,192,0.08),rgba(126,176,192,0)_30%),radial-gradient(circle_at_50%_88%,rgba(0,0,0,0.24),rgba(0,0,0,0)_46%)] opacity-88 transition-opacity duration-700 group-hover:opacity-98" />

            <div className="relative z-10 p-7 sm:p-8">
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/72">
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
            </div>
          </Link>
        ))}
      </div>
    </InfoPageShell>
  );
}
