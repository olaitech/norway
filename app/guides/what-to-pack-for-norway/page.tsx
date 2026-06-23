import type { Metadata } from "next";

import { GuideArticleLayout } from "@/src/components/guides/GuideArticleLayout";

export const metadata: Metadata = {
  title: "What to Pack for Norway | Practical Norway Travel Guide",
  description:
    "A practical packing guide for Norway covering clothing, layers, waterproof gear, hiking shoes, road trips, fjords, winter travel, northern lights and Arctic weather.",
  alternates: {
    canonical: "/guides/what-to-pack-for-norway",
  },
};

export default function WhatToPackForNorwayPage() {
  return (
    <GuideArticleLayout
      title="What to Pack for Norway"
      subtitle="A practical packing guide for city breaks, fjord cruises, road trips, hiking, northern lights and Arctic weather."
      category="Seasons & Weather"
      readTime="9 min read"
      lastUpdated="May 2026"
      canonicalPath="/guides/what-to-pack-for-norway"
      sources={[
        { label: "Visit Norway", href: "https://www.visitnorway.com/" },
        { label: "Yr", href: "https://www.yr.no/" },
        {
          label: "The Norwegian Trekking Association",
          href: "https://www.dnt.no/",
        },
        { label: "Varsom", href: "https://www.varsom.no/" },
      ]}
      relatedLinks={[
        {
          label: "Season",
          title: "Best Time to Visit Northern Norway",
          href: "/guides/best-time-to-visit-northern-norway",
          description: "Pack for the season and daylight window you actually choose.",
        },
        {
          label: "Planning",
          title: "How to See the Northern Lights in Norway",
          href: "/guides/how-to-see-the-northern-lights-in-norway",
          description: "Add warmer layers and a flexible evening kit for aurora nights.",
        },
        {
          label: "Route",
          title: "Lofoten Road Trip",
          href: "/routes/lofoten-road-trip",
          description: "Tailor the packing list to a compact scenic road trip.",
        },
        {
          label: "Transport",
          title: "Norway Ferry Guide for Tourists",
          href: "/guides/norway-ferry-guide-for-tourists",
          description: "Plan for ferry decks, wind and quick weather changes on crossing days.",
        },
      ]}
    >
      <h2>Intro</h2>
      <p>
        Packing for Norway is less about fashion and more about handling quick
        weather changes. The most useful approach is layering, waterproof
        protection and practical footwear that can handle mixed urban and
        outdoor conditions.
      </p>

      <h2>Quick answer</h2>
      <ul>
        <li>Pack layers instead of single heavy outfits.</li>
        <li>Always carry a waterproof outer layer.</li>
        <li>Bring shoes that can handle rain and uneven ground.</li>
        <li>Even summer evenings can feel cool in coastal areas.</li>
        <li>In the north, winter conditions can be severe and long-lasting.</li>
      </ul>

      <h2>The core layering system</h2>
      <ul>
        <li>Base layer: moisture-wicking top and bottom.</li>
        <li>Mid layer: fleece or light insulated piece.</li>
        <li>Outer layer: windproof and waterproof shell.</li>
      </ul>
      <p>
        This system works from city walks to ferry decks and viewpoint stops.
        It is easier to adapt with layers than to carry one heavy coat for all
        conditions.
      </p>

      <h2>Essentials for most trips</h2>
      <ul>
        <li>Waterproof jacket with hood</li>
        <li>Comfortable walking shoes with grip</li>
        <li>Warm mid-layer for evenings</li>
        <li>Quick-dry clothing</li>
        <li>Compact daypack</li>
        <li>Reusable water bottle</li>
        <li>Power bank and charging cable</li>
      </ul>

      <h2>Season-based adjustments</h2>
      <h3>Late spring to summer</h3>
      <ul>
        <li>Keep a light insulation layer for cool wind.</li>
        <li>Bring eye mask if midnight light affects sleep.</li>
        <li>Expect rain, especially in fjord and coastal regions.</li>
      </ul>
      <h3>Autumn and shoulder season</h3>
      <ul>
        <li>Increase insulation and keep waterproof gear accessible.</li>
        <li>Prepare for rapid weather shifts in mountain areas.</li>
      </ul>
      <h3>Winter and Arctic travel</h3>
      <ul>
        <li>Use proper insulated boots and warm accessories.</li>
        <li>Prioritize gloves, beanie and thermal layers.</li>
        <li>Carry extra batteries or power bank for cold conditions.</li>
      </ul>

      <h2>Road trip and ferry practicals</h2>
      <ul>
        <li>Keep outerwear easy to reach during short stops.</li>
        <li>Pack snacks and water for long transfer days.</li>
        <li>Use a small in-car bag for daily essentials.</li>
      </ul>

      <h2>Hiking and nature days</h2>
      <ul>
        <li>Bring trail-ready shoes instead of city sneakers only.</li>
        <li>Carry dry spare socks in a sealed bag.</li>
        <li>Use rain cover or dry bag for electronics.</li>
        <li>Check weather and hazard warnings before longer hikes.</li>
      </ul>

      <h2>Northern lights evenings</h2>
      <p>
        Aurora viewing usually means standing still outdoors in cold wind. Pack
        warmer than you expect, especially for feet, hands and head.
      </p>
      <ul>
        <li>Insulated boots and thick socks</li>
        <li>Warm gloves plus spare liner</li>
        <li>Beanie and neck protection</li>
        <li>Headlamp or small flashlight</li>
      </ul>

      <h2>Common packing mistakes</h2>
      <ul>
        <li>Bringing cotton-heavy outfits that dry slowly.</li>
        <li>Skipping waterproof layers for short itineraries.</li>
        <li>Underestimating wind chill on coasts and ferries.</li>
        <li>Bringing too many clothes and too few practical layers.</li>
      </ul>
    </GuideArticleLayout>
  );
}
