import type { MetadataRoute } from "next";

import { SITE_URL } from "@/src/config/site";
import { destinations } from "@/src/data/destinations";
import { journalArticles } from "@/src/data/journal-articles";

const lastModified = new Date("2026-06-23T00:00:00.000Z");

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

type SitemapEntry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

function entry({
  path,
  changeFrequency,
  priority,
}: SitemapEntry): MetadataRoute.Sitemap[number] {
  return {
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency,
    priority,
  };
}

const corePages: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/destinations", changeFrequency: "weekly", priority: 0.8 },
  { path: "/routes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/journal", changeFrequency: "weekly", priority: 0.8 },
  { path: "/map", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/stories/northern-norway", changeFrequency: "monthly", priority: 0.7 },
];

const supportingPages: SitemapEntry[] = [
  {
    path: "/best-time-to-visit-norway",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/fjords-of-norway",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/northern-lights-norway",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/responsible-travel",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  { path: "/contact", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy-settings", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

const destinationPages: SitemapEntry[] = destinations.map((destination) => ({
  path: `/destinations/${destination.slug}`,
  changeFrequency: "monthly",
  priority: 0.7,
}));

const routePages: SitemapEntry[] = [
  {
    path: "/routes/lofoten-road-trip",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/routes/helgeland-coast-road-trip",
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

const guidePages: SitemapEntry[] = [
  "/guides/50-local-money-saving-tips-for-norway",
  "/guides/best-time-to-visit-northern-norway",
  "/guides/camping-rules-in-norway",
  "/guides/driving-in-norway-what-visitors-should-know",
  "/guides/how-expensive-is-norway-for-tourists",
  "/guides/how-to-see-the-northern-lights-in-norway",
  "/guides/how-to-travel-northern-norway-without-a-car",
  "/guides/norway-ferry-guide-for-tourists",
  "/guides/what-to-pack-for-norway",
].map((path) => ({
  path,
  changeFrequency: "monthly",
  priority: 0.7,
}));

const journalPages: SitemapEntry[] = journalArticles.map((article) => ({
  path: `/journal/${article.slug}`,
  changeFrequency: "monthly",
  priority: 0.7,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...corePages,
    ...supportingPages,
    ...destinationPages,
    ...routePages,
    ...guidePages,
    ...journalPages,
  ].map(entry);
}
