import Link from "next/link";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";
import { createPageMetadata } from "@/src/lib/metadata";
import {
  JsonLd,
  createBreadcrumbListJsonLd,
  createOrganizationEntity,
  toAbsoluteUrl,
} from "@/src/lib/seo/jsonLd";

export const metadata = createPageMetadata({
  title: "About Trips Norway | Independent Editorial Travel Portal",
  description:
    "Trips Norway is an independent editorial travel knowledge portal for Norway and Northern Norway, focused on route-first planning, ferries, weather and slow travel.",
  canonical: "/about",
  image: {
    url: "/images/hero/preikestolen.png",
    alt: "A cinematic Norwegian fjord landscape seen from Preikestolen",
  },
});

type NarrativeSection = {
  title: string;
  paragraphs: readonly string[];
  chips?: readonly string[];
};

const narrativeSections: readonly NarrativeSection[] = [
  {
    title: "What Trips Norway is",
    paragraphs: [
      "Trips Norway is an independent editorial travel knowledge portal for Norway and Northern Norway.",
      "It combines cinematic storytelling with practical route and planning guidance so travellers can understand a place before they commit to the journey.",
    ],
  },
  {
    title: "Editorial point of view",
    paragraphs: [
      "The editorial point of view is simple: route-first, ferry-aware, weather-aware and slow-travel focused.",
      "Northern lights coverage stays practical rather than hype-driven, because the best trip planning starts with conditions, distance and daylight rather than headlines.",
    ],
    chips: [
      "Route-first",
      "Ferry-aware",
      "Weather-aware",
      "Northern lights without hype",
      "Slow travel",
    ],
  },
  {
    title: "Geography and coverage",
    paragraphs: [
      "Northern Norway is the main lens, with focus on Lofoten, Senja, Helgeland, Tromso, fjords, coastal roads and the ferries that connect them.",
      "The broader Norway coverage supports travellers who want a calm, route-based view of how to move between regions without losing the rhythm of the trip.",
    ],
  },
  {
    title: "Who the site helps",
    paragraphs: [
      "Trips Norway is written for slow travellers, self-drivers, ferry planners, aurora seekers and people who want practical planning clarity before they leave home.",
    ],
  },
  {
    title: "How it differs",
    paragraphs: [
      "It is not official tourism copy, not influencer content and not generic SEO filler.",
      "The aim is quieter and more editorial: useful context, realistic expectations and a stronger sense of what the route will actually feel like.",
    ],
  },
  {
    title: "Trust and responsibility",
    paragraphs: [
      "The work is grounded in independent research and local awareness, with respect for weather, roads, communities and the pace of travel.",
      "That makes the site less about shouting destinations and more about helping people travel well.",
    ],
  },
];

const exploreLinks = [
  { label: "Browse destinations", href: "/destinations" },
  { label: "Read practical guides", href: "/guides" },
  { label: "Plan around the seasons", href: "/best-time-to-visit-norway" },
  { label: "Understand northern lights travel", href: "/northern-lights-norway" },
  { label: "Responsible travel", href: "/responsible-travel" },
  { label: "Read the journal", href: "/journal" },
] as const;

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Trips Norway",
  url: toAbsoluteUrl("/about"),
  description:
    "Trips Norway is an independent editorial travel knowledge portal for Norway and Northern Norway, focused on route-first planning, ferries, weather and slow travel.",
  about: createOrganizationEntity(),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        value={[
          createBreadcrumbListJsonLd([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]),
          aboutPageJsonLd,
        ]}
      />
      <InfoPageShell
        eyebrow="Independent editorial portal"
        title="Trips Norway"
        intro="Trips Norway is an independent editorial travel knowledge portal for Norway and Northern Norway, built around route-first planning, ferries, weather and slow travel."
        actions={[
          { label: "Explore routes", href: "/routes" },
          { label: "Open the map", href: "/map" },
        ]}
        bottomContent={
          <div className="rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.84),rgba(8,17,22,0.94))] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:p-9">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/76">
              Continue exploring
            </p>
            <p className="mt-4 max-w-3xl text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
              Use Trips Norway as a starting point, then move into routes,
              destinations and practical planning pages based on the trip you
              want to make.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-[#c6a15b]/20 bg-[linear-gradient(165deg,rgba(198,161,91,0.08),rgba(143,175,168,0.04))] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        }
      >
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <aside className="lg:sticky lg:top-14 lg:self-start">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.33em] text-[#c6a15b]/72">
              Editorial focus
            </p>
            <p className="mt-6 max-w-sm text-sm font-light leading-[1.9] text-[#f4efe2]/58 sm:text-base">
              Trips Norway is built to help travellers read the route before
              they book it. Ferries, weather, distance and daylight are treated
              as planning inputs, not afterthoughts.
            </p>
          </aside>

          <div className="space-y-8">
            <section className="rounded-[1.45rem] border border-[#8fafa8]/12 bg-[linear-gradient(135deg,rgba(231,224,211,0.05),rgba(23,35,38,0.78))] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:p-9 lg:p-10">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/76">
                Brand profile
              </p>
              <h2 className="mt-5 font-serif text-[clamp(2.3rem,4.7vw,4.7rem)] font-normal leading-[0.92] tracking-[-0.055em] text-[#f4efe2]">
                {narrativeSections[0].title}
              </h2>
              <div className="mt-8 max-w-4xl space-y-5 text-sm font-light leading-[1.9] text-[#f4efe2]/70 sm:text-base md:text-lg">
                {narrativeSections[0].paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            {narrativeSections.slice(1).map((section, index) => (
              <article
                key={section.title}
                className="rounded-[1.25rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.82),rgba(8,17,22,0.94))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.18)] sm:p-8"
              >
                <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#c6a15b]/70">
                  {String(index + 2).padStart(2, "0")}
                </p>
                <h2 className="mt-5 font-serif text-[clamp(1.9rem,3.5vw,3.15rem)] font-normal leading-[0.98] tracking-[-0.04em]">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-3xl text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.chips ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {section.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(198,161,91,0.07),rgba(143,175,168,0.03))] px-3 py-2 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/72"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </InfoPageShell>
    </>
  );
}
