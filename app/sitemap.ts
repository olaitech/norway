import type { MetadataRoute } from "next";

import { SITE_URL } from "@/src/config/site";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/destinations", changeFrequency: "weekly", priority: 0.85 },
  { path: "/destinations/lofoten-islands", changeFrequency: "monthly", priority: 0.8 },
  { path: "/destinations/senja", changeFrequency: "monthly", priority: 0.8 },
  { path: "/destinations/helgeland-coast", changeFrequency: "monthly", priority: 0.8 },
  { path: "/destinations/tromso", changeFrequency: "monthly", priority: 0.8 },
  { path: "/routes", changeFrequency: "weekly", priority: 0.85 },
  { path: "/routes/lofoten-road-trip", changeFrequency: "monthly", priority: 0.8 },
  { path: "/routes/helgeland-coast-road-trip", changeFrequency: "monthly", priority: 0.8 },
  { path: "/journal", changeFrequency: "weekly", priority: 0.75 },
  { path: "/map", changeFrequency: "monthly", priority: 0.8 },
  { path: "/best-time-to-visit-norway", changeFrequency: "monthly", priority: 0.8 },
  { path: "/norway-road-trip-routes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/norway-itinerary-7-days", changeFrequency: "monthly", priority: 0.7 },
  { path: "/norway-itinerary-10-days", changeFrequency: "monthly", priority: 0.7 },
  { path: "/northern-lights-norway", changeFrequency: "monthly", priority: 0.8 },
  { path: "/fjords-of-norway", changeFrequency: "monthly", priority: 0.75 },
  { path: "/responsible-travel", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.65 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.35 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.25 },
  { path: "/privacy-settings", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.25 },
] satisfies Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
