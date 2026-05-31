import type { Metadata } from "next";
import Link from "next/link";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";
import { GuideMetaFooter } from "@/src/components/shared/GuideMetaFooter";

type GuideCard = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  href: string;
};

type GuideGroup = {
  label: string;
  guides: readonly GuideCard[];
};

const guideGroups = [
  {
    label: "Money & Budget",
    guides: [
      {
        title: "50 Local Money-Saving Tips for Norway",
        description:
          "Local-style ways to save money on food, transport, ferries, accommodation and everyday travel costs.",
        category: "Money & Budget",
        readTime: "12 min read",
        href: "/guides/50-local-money-saving-tips-for-norway",
      },
      {
        title: "How Expensive Is Norway for Tourists?",
        description:
          "A realistic cost guide for visitors planning food, hotels, transport, activities and daily budgets in Norway.",
        category: "Money & Budget",
        readTime: "10 min read",
        href: "/guides/how-expensive-is-norway-for-tourists",
      },
    ],
  },
  {
    label: "Transport & Planning",
    guides: [
      {
        title: "Norway Ferry Guide for Tourists",
        description:
          "How car ferries, passenger boats, coastal routes, payment systems and ferry planning work in Norway.",
        category: "Transport & Planning",
        readTime: "14 min read",
        href: "/guides/norway-ferry-guide-for-tourists",
      },
      {
        title: "How to Travel Northern Norway Without a Car",
        description:
          "A practical guide to buses, ferries, trains, express boats, airports and slow travel across Northern Norway.",
        category: "Transport & Planning",
        readTime: "13 min read",
        href: "/guides/how-to-travel-northern-norway-without-a-car",
      },
      {
        title: "Driving in Norway: What Visitors Should Know",
        description:
          "Rules, tolls, ferries, narrow roads, winter conditions and road trip advice for tourists driving in Norway.",
        category: "Transport & Planning",
        readTime: "12 min read",
        href: "/guides/driving-in-norway-what-visitors-should-know",
      },
    ],
  },
  {
    label: "Seasons & Weather",
    guides: [
      {
        title: "Best Time to Visit Northern Norway",
        description:
          "A seasonal guide to northern lights, midnight sun, road trips, hiking, whales, snow and shoulder seasons.",
        category: "Seasons & Weather",
        readTime: "11 min read",
        href: "/guides/best-time-to-visit-northern-norway",
      },
      {
        title: "How to See the Northern Lights in Norway",
        description:
          "Where to go, when to travel, how long to stay, what to wear and how to improve your aurora chances.",
        category: "Seasons & Weather",
        readTime: "10 min read",
        href: "/guides/how-to-see-the-northern-lights-in-norway",
      },
      {
        title: "What to Pack for Norway",
        description:
          "A practical packing guide for city breaks, fjords, hiking, road trips, northern lights and Arctic weather.",
        category: "Seasons & Weather",
        readTime: "9 min read",
        href: "/guides/what-to-pack-for-norway",
      },
    ],
  },
  {
    label: "Responsible Outdoor Travel",
    guides: [
      {
        title: "Camping Rules in Norway",
        description:
          "A tourist-friendly guide to wild camping, campervans, the right to roam, campfires and responsible outdoor travel.",
        category: "Responsible Outdoor Travel",
        readTime: "10 min read",
        href: "/guides/camping-rules-in-norway",
      },
    ],
  },
] as const satisfies readonly GuideGroup[];

export const metadata: Metadata = {
  title: "Practical Guides for Norway | Norway Travel Knowledge Portal",
  description:
    "Practical Norway travel guides covering costs, ferries, transport, driving, camping, packing, northern lights and the best time to visit Northern Norway.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <InfoPageShell
      eyebrow="Practical archive"
      title="Practical Guides"
      intro="Useful travel planning guides for Norway - ferries, costs, transport, seasons, camping, packing and northern lights."
      actions={[
        { label: "Explore routes", href: "/routes" },
        { label: "Open map", href: "/map" },
      ]}
      bottomContent={
        <GuideMetaFooter
          lastUpdated="May 2026"
          sources={[
            { label: "Visit Norway", href: "https://www.visitnorway.com/" },
            { label: "Entur", href: "https://entur.no/" },
            { label: "Avinor", href: "https://avinor.no/" },
            {
              label: "Norwegian Scenic Routes",
              href: "https://www.nasjonaleturistveger.no/en/",
            },
          ]}
        />
      }
    >
      <div className="space-y-10 sm:space-y-12">
        {guideGroups.map((group) => (
          <section key={group.label} className="border-t border-white/8 pt-8 sm:pt-10">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
              {group.label}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {group.guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group h-full rounded-[1.2rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.014))] p-6 transition-colors hover:border-[#d8c9a7]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:p-7"
                >
                  <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/74">
                    {guide.category}
                  </p>
                  <h2 className="mt-4 font-serif text-[1.8rem] leading-[1.02] tracking-[-0.033em] text-[#f4efe2]">
                    {guide.title}
                  </h2>
                  <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/66 sm:text-base">
                    {guide.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/52">
                      {guide.readTime}
                    </span>
                    <span className="text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/72 transition-colors group-hover:text-[#f4efe2]">
                      Open guide
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </InfoPageShell>
  );
}
