import type { Metadata } from "next";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "About this portal",
  description:
    "Learn about the independent Norway Travel Knowledge Portal, built around cinematic storytelling, practical guidance, slow travel, scenic roads and responsible tourism in Norway and Northern Norway.",
};

const sections = [
  {
    title: "An independent travel knowledge portal",
    text: "This site is built as an independent editorial guide to Norway and Northern Norway. It combines atmospheric storytelling with practical route, season and destination guidance for travellers who want to understand a place before moving through it.",
  },
  {
    title: "Cinematic, but useful",
    text: "The visual direction is inspired by travel documentary, quiet photography and Scandinavian editorial design. The content should still be useful: fjords, scenic roads, ferries, weather, distance, light and local rhythm all shape a better journey.",
  },
  {
    title: "Norway, seen with respect",
    text: "The portal gives special attention to Northern Norway, remote coastal communities, fjord landscapes, culture and nature respect. It encourages slow travel, realistic planning and awareness of the people and places that make the landscape more than a backdrop.",
  },
  {
    title: "Not an official tourism authority",
    text: "This is not an official tourism office or public authority. It is an early-stage independent knowledge project designed to grow through careful research, local awareness, responsible tourism principles and future collaboration.",
  },
] as const;

export default function AboutPage() {
  return (
    <InfoPageShell
      eyebrow="Independent guide"
      title="About this portal"
      intro="A cinematic travel knowledge portal for Norway and Northern Norway, built to combine atmospheric storytelling, practical travel guidance and responsible tourism principles."
      actions={[
        { label: "Explore the map", href: "/map" },
        { label: "Responsible travel", href: "/responsible-travel" },
      ]}
    >
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <aside className="lg:sticky lg:top-14 lg:self-start">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/72">
            Editorial position
          </p>
          <p className="mt-6 max-w-sm text-sm font-light leading-[1.9] text-[#f4efe2]/58 sm:text-base">
            The aim is to help visitors slow down, plan with care and see
            Norway as a living landscape of weather, culture, roads, fjords and
            coastal communities.
          </p>
        </aside>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8"
            >
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/70">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.5vw,3.15rem)] font-normal leading-[0.98] tracking-[-0.04em]">
                {section.title}
              </h2>
              <p className="mt-5 max-w-3xl text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </InfoPageShell>
  );
}
