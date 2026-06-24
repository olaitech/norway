import type { Metadata } from "next";

import { GuideArticleLayout } from "@/src/components/guides/GuideArticleLayout";
import { TrustBox } from "@/src/components/shared/TrustBox";

export const metadata: Metadata = {
  title: "Camping Rules in Norway | Practical Norway Travel Guide",
  description:
    "A tourist-friendly guide to camping rules in Norway, including wild camping, the right to roam, campervans, campfires, the 150-metre rule and responsible outdoor travel.",
  alternates: {
    canonical: "/guides/camping-rules-in-norway",
  },
};

export default function CampingRulesInNorwayPage() {
  return (
    <GuideArticleLayout
      title="Camping Rules in Norway"
      subtitle="A practical guide to wild camping, campervans, the right to roam, campfires and responsible outdoor travel."
      category="Responsible Outdoor Travel"
      readTime="10 min read"
      lastUpdated="May 2026"
      canonicalPath="/guides/camping-rules-in-norway"
      sources={[
        { label: "Visit Norway", href: "https://www.visitnorway.com/" },
        {
          label: "Norwegian Environment Agency",
          href: "https://www.environmentagency.no/",
        },
        {
          label: "The Norwegian Trekking Association",
          href: "https://www.dnt.no/",
        },
        { label: "Varsom", href: "https://www.varsom.no/" },
      ]}
      relatedLinks={[
        {
          label: "Packing",
          title: "What to Pack for Norway",
          href: "/guides/what-to-pack-for-norway",
          description: "Choose layers and wet-weather gear that suit outdoor nights.",
        },
        {
          label: "Transport",
          title: "Driving in Norway: What Visitors Should Know",
          href: "/guides/driving-in-norway-what-visitors-should-know",
          description: "Know the road rules before you settle on a campsite.",
        },
        {
          label: "Planning",
          title: "Norway Ferry Guide for Tourists",
          href: "/guides/norway-ferry-guide-for-tourists",
          description: "Factor ferries into the route before choosing overnight stops.",
        },
        {
          label: "Values",
          title: "Responsible Travel",
          href: "/responsible-travel",
          description: "Keep camping low-impact, local and considerate.",
        },
      ]}
      trustBox={
        <TrustBox
          label="Editorial note"
          title="Camping freedom comes with clear boundaries."
          summary="The right to roam is generous, but the best trips still respect distance, access, fire rules and the places people actually live."
          bullets={[
            "Stay 150 metres from inhabited houses and cabins",
            "Use official campsites when local rules require it",
            "Check fire restrictions and leave no trace",
          ]}
          lastUpdated="May 2026"
          reviewedFor="Summer 2026"
          editorialNote="Editorial guidance, not a legal ruling."
          safetyNote="Verify local restrictions and hazard conditions before each night."
          sources={[
            { label: "Visit Norway", href: "https://www.visitnorway.com/" },
            {
              label: "Norwegian Environment Agency",
              href: "https://www.environmentagency.no/",
            },
            {
              label: "The Norwegian Trekking Association",
              href: "https://www.dnt.no/",
            },
            { label: "Varsom", href: "https://www.varsom.no/" },
          ]}
        />
      }
    >
      <h2>Intro</h2>
      <p>
        Norway has strong outdoor access traditions, but camping freedom is not
        unlimited. The right to roam gives broad opportunities for nature
        travel, and it also comes with clear responsibilities.
      </p>

      <h2>Quick answer</h2>
      <ul>
        <li>You can often camp on uncultivated land under right-to-roam rules.</li>
        <li>Keep distance from homes and cabins.</li>
        <li>Respect local restrictions and nature pressure areas.</li>
        <li>Use official campsites when conditions or local rules require it.</li>
      </ul>

      <h2>The right to roam and the 150-metre rule</h2>
      <p>
        Norway&apos;s right to roam (allemannsretten) generally allows short
        stays on uncultivated land. A common baseline is to stay at least 150
        metres away from the nearest inhabited house or cabin.
      </p>
      <p>
        This principle applies to tents and is also relevant when planning
        campervan overnights near settlements.
      </p>

      <h2>Where you should not camp</h2>
      <ul>
        <li>Cultivated fields and active farmland</li>
        <li>Private zones close to homes and cabins</li>
        <li>Clearly signed no-camping or no-overnight areas</li>
        <li>Places where your setup blocks access or harms vegetation</li>
      </ul>

      <h2>Campfires and safety</h2>
      <p>
        Fire rules can vary by season and risk level. Always check local fire
        restrictions and weather conditions before using any open flame.
      </p>
      <ul>
        <li>Use established fire-safe areas where possible.</li>
        <li>Do not light fires during high wildfire risk periods.</li>
        <li>Carry out all waste and leave no trace.</li>
      </ul>

      <h2>Campervans and motorhomes</h2>
      <ul>
        <li>Do not assume every scenic lay-by is legal overnight parking.</li>
        <li>Respect signs for no overnight parking and no camping.</li>
        <li>Use official campsites or designated motorhome areas when possible.</li>
        <li>Never empty greywater or toilet waste in nature.</li>
      </ul>

      <h2>Responsible travel habits that matter</h2>
      <ul>
        <li>Arrive with a backup overnight option.</li>
        <li>Choose durable ground and avoid fragile vegetation.</li>
        <li>Keep noise low and respect nearby residents.</li>
        <li>Support local communities through local shopping and services.</li>
      </ul>

      <h2>Before you camp each night</h2>
      <ul>
        <li>Check weather and hazard conditions.</li>
        <li>Confirm local restrictions for your exact area.</li>
        <li>Review access and parking rules.</li>
        <li>Plan an alternative location in case of crowding or closure.</li>
      </ul>
    </GuideArticleLayout>
  );
}
