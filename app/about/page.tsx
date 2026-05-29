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

const founderContext = [
  "I have lived in Mosjøen for most of my life, with Northern Norway not as a destination, but as home.",
  "The islands, ferries, weather, long summer light, winter darkness, coastal roads and small communities are not just travel subjects to me. They are part of the landscape I have grown up with, visited, returned to and learned from over many years.",
  "This website is my attempt to combine that lived experience with my background in IT and web development. I wanted to build something that feels calmer, more cinematic and more useful than a typical travel page, a place where visitors can understand Northern Norway before they try to plan it.",
  "The project is independent and currently built without external funding. It is not an official tourism portal, but a personal contribution to the public knowledge around this region.",
  "The long term dream is that this can grow into something that supports better travel, stronger local storytelling and perhaps future collaboration with people and businesses across the Northern Norwegian tourism community.",
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

        <div className="space-y-8">
          <section className="rounded-[1.45rem] border border-[#d8c9a7]/18 bg-[linear-gradient(135deg,rgba(216,201,167,0.075),rgba(255,255,255,0.018))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:p-9 lg:p-10">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
              Local context
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2.3rem,4.7vw,4.7rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[#f4efe2]">
              Built from Northern Norway
            </h2>
            <div className="mt-8 max-w-4xl space-y-5 text-sm font-light leading-[1.9] text-[#f4efe2]/70 sm:text-base md:text-lg">
              {founderContext.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

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
