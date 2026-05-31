import type { Metadata } from "next";
import Link from "next/link";

import { GuideArticleLayout } from "@/src/components/guides/GuideArticleLayout";

export const metadata: Metadata = {
  title:
    "How to See the Northern Lights in Norway | Practical Norway Travel Guide",
  description:
    "A practical aurora guide for tourists in Norway covering where to go, when to travel, how long to stay, what to wear and how to improve northern lights chances.",
  alternates: {
    canonical: "/guides/how-to-see-the-northern-lights-in-norway",
  },
};

export default function HowToSeeNorthernLightsInNorwayPage() {
  return (
    <GuideArticleLayout
      title="How to See the Northern Lights in Norway"
      subtitle="Where to go, when to travel, how long to stay, what to wear and how to improve your aurora chances."
      category="Seasons & Weather"
      readTime="10 min read"
      lastUpdated="May 2026"
      sources={[
        { label: "Visit Norway", href: "https://www.visitnorway.com/" },
        { label: "Visit Tromso", href: "https://www.visittromso.no/" },
        { label: "Yr", href: "https://www.yr.no/" },
        { label: "Varsom", href: "https://www.varsom.no/" },
      ]}
    >
      <h2>Quick answer</h2>
      <p>
        The best chance to see northern lights in Norway is to stay several
        nights in the north, monitor cloud forecasts and stay flexible with
        location and timing.
      </p>

      <h2>Where to base your trip</h2>
      <ul>
        <li>Tromso for easy access and many tour options.</li>
        <li>Lofoten and Senja for dramatic scenery and dark-sky viewpoints.</li>
        <li>Alta and inland northern areas for stable winter conditions.</li>
      </ul>

      <h2>When to go</h2>
      <ul>
        <li>Main season is typically from late autumn to early spring.</li>
        <li>Longer stays improve chances more than one-night attempts.</li>
        <li>Shoulder season can still work with clear skies and darkness.</li>
      </ul>

      <h2>How to improve your chances</h2>
      <ul>
        <li>Check cloud maps and weather often.</li>
        <li>Move away from city lights when possible.</li>
        <li>Keep evenings open and avoid rigid plans every night.</li>
        <li>Dress for long periods outside in wind and cold.</li>
      </ul>

      <h2>What to pack for aurora evenings</h2>
      <ul>
        <li>Insulated layers and warm outer shell</li>
        <li>Hat, gloves and insulated footwear</li>
        <li>Headlamp and spare power bank</li>
        <li>Tripod and camera-ready accessories if photographing</li>
      </ul>

      <h2>Continue planning your Norway trip</h2>
      <ul>
        <li>
          <Link href="/guides/best-time-to-visit-northern-norway">
            Best Time to Visit Northern Norway
          </Link>
        </li>
        <li>
          <Link href="/guides/what-to-pack-for-norway">
            What to Pack for Norway
          </Link>
        </li>
        <li>
          <Link href="/destinations/tromso">Tromso destination guide</Link>
        </li>
      </ul>
    </GuideArticleLayout>
  );
}
