import type { Metadata } from "next";

import { FerryVideoHero } from "@/src/components/guides/FerryVideoHero";
import { GuideArticleLayout } from "@/src/components/guides/GuideArticleLayout";
import { HelgelandFerryDepartures } from "@/src/components/guides/HelgelandFerryDepartures";
import { AnswerBlock } from "@/src/components/shared/AnswerBlock";
import { TrustBox } from "@/src/components/shared/TrustBox";
import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_NAME,
} from "@/src/config/site";

const PAGE_TITLE = "Norway Ferry Guide: Live Times & Payments | Trips Norway";
const ARTICLE_HEADLINE = "Norway Ferry Guide: Live Times & Payments";
const PAGE_DESCRIPTION =
  "Check live Nordland ferry departures and harbour cameras, plus Norway ferry advice on AutoPASS, booking, queues and travelling with a car or campervan.";
const CANONICAL_PATH = "/guides/norway-ferry-guide-for-tourists";
const GUIDE_LAST_UPDATED = "3 August 2026";
const GUIDE_LAST_UPDATED_ISO = "2026-08-03";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_PATH,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "article",
    modifiedTime: GUIDE_LAST_UPDATED_ISO,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE.url],
  },
};

const faqItems = [
  {
    question: "How early should I arrive for a ferry with a car?",
    answer:
      "There is no single arrival time for every route. Queue conditions and operator guidance vary, so check the specific crossing and leave sensible margin without assuming that early arrival guarantees space.",
  },
  {
    question: "Can I take a rental car or campervan on Norwegian ferries?",
    answer:
      "Car ferries commonly carry rental cars and campervans, but billing and vehicle rules can vary. Confirm ferry charges with the rental company and check the operator’s information for the exact crossing and vehicle size.",
  },
  {
    question: "Are ferries in Norway free?",
    answer:
      "Payment arrangements vary by route. Many crossings use number-plate recognition, AutoPASS agreements or later invoicing, while other arrangements may apply, so check the current operator information before travelling.",
  },
  {
    question: "Can ferry crossings be booked in advance?",
    answer:
      "Reservation options vary between routes and operators. Check the official information for the crossing you plan to use, and do not treat a timetable or early arrival as a guarantee of space on board.",
  },
] as const;

export default function NorwayFerryGuideForTouristsPage() {
  return (
    <GuideArticleLayout
      title="Norway Ferry Guide for Tourists"
      subtitle="How car ferries, passenger boats, coastal routes, payment systems and ferry planning work in Norway."
      category="Transport & Planning"
      readTime="14 min read"
      lastUpdated={GUIDE_LAST_UPDATED}
      dateModified={GUIDE_LAST_UPDATED_ISO}
      canonicalPath="/guides/norway-ferry-guide-for-tourists"
      articleHeadline={ARTICLE_HEADLINE}
      articleDescription={PAGE_DESCRIPTION}
      hero={
        <FerryVideoHero
          title="Norway Ferry Guide for Tourists"
          subtitle="How car ferries, passenger boats, coastal routes, payment systems and ferry planning work in Norway."
          category="Transport & Planning"
          readTime="14 min read"
          lastUpdated={GUIDE_LAST_UPDATED}
        />
      }
      featureSection={<HelgelandFerryDepartures />}
      faqItems={faqItems}
      faqTitle="Frequently Asked Questions About Ferries in Norway"
      faqIntro="Practical answers for vehicle travellers. Always confirm the current details with the operator for the crossing you plan to use."
      includeFaqJsonLd={false}
      answerBlock={
        <AnswerBlock
          title="Ferries are part of the route, not a detour."
          summary="Once crossings are part of the plan, the trip feels calmer. Check the timetable early, then build overnight stops around the real rhythm of the water."
          bullets={[
            "Check ferry times before fixing overnight stops.",
            "Expect summer queues on busy crossings.",
            "Leave buffer time for wind, weather and loading.",
          ]}
        />
      }
      sources={[
        { label: "Visit Norway", href: "https://www.visitnorway.com/" },
        { label: "Entur", href: "https://entur.no/" },
        { label: "AutoPASS", href: "https://www.autopass.no/en/" },
        {
          label: "AutoPASS for ferry",
          href: "https://autopassferje.no/en/",
        },
        {
          label: "Reis Nordland",
          href: "https://www.reisnordland.no/",
        },
      ]}
      relatedLinks={[
        {
          label: "Route",
          title: "Helgeland Coast Road Trip",
          href: "/routes/helgeland-coast-road-trip",
          description: "See how ferries shape a slower coastal route from stop to stop.",
        },
        {
          label: "Destination",
          title: "Helgeland Coast",
          href: "/destinations/helgeland-coast",
          description: "Match the ferry guide with one of the coast's most ferry-driven destinations.",
        },
        {
          label: "Planning",
          title: "Driving in Norway: What Visitors Should Know",
          href: "/guides/driving-in-norway-what-visitors-should-know",
          description: "Put ferry timing together with the wider driving rules and road conditions.",
        },
        {
          label: "Destination",
          title: "Fjords of Norway",
          href: "/fjords-of-norway",
          description: "See how ferry planning fits into a wider fjord trip.",
        },
        {
          label: "Map",
          title: "Norway Travel Map",
          href: "/map",
          description: "Trace the crossings before you fix the overnight stops.",
        },
      ]}
      trustBox={
        <TrustBox
          label="Planning note"
          title="Ferries are part of the route, not a detour."
          summary="Once crossings are part of the itinerary, the trip feels calmer. Check the timetable early, then build the overnight stops around the real rhythm of the water."
          bullets={[
            "Check ferry times before fixing overnight stops",
            "Expect summer queues on busy crossings",
            "Leave buffer for wind and weather",
          ]}
          lastUpdated={GUIDE_LAST_UPDATED}
          reviewedFor="2026 route planning"
          editorialNote="Independent planning guidance, not operator booking support."
          safetyNote="Verify live timetables and weather updates before each crossing."
          sources={[
            { label: "Visit Norway", href: "https://www.visitnorway.com/" },
            { label: "Entur", href: "https://entur.no/" },
            { label: "AutoPASS", href: "https://www.autopass.no/en/" },
            {
              label: "AutoPASS for ferry",
              href: "https://autopassferje.no/en/",
            },
            {
              label: "Reis Nordland",
              href: "https://www.reisnordland.no/",
            },
          ]}
        />
      }
    >
      <h2>How ferries work for tourists</h2>
      <ul>
        <li>Many routes are frequent, but remote routes may run only a few times per day.</li>
        <li>In summer, arrive early on popular routes with a car.</li>
        <li>Weather can cause delays or cancellations on exposed crossings.</li>
        <li>Payment is often automatic by plate recognition or linked agreements.</li>
      </ul>

      <h2>Car ferries vs passenger boats</h2>
      <ul>
        <li>Car ferries carry vehicles and passengers as part of road travel.</li>
        <li>Passenger boats connect islands, towns and some car-free communities.</li>
        <li>Coastal routes can combine practical transport with scenic value.</li>
      </ul>

      <h2>Planning and payment checklist</h2>
      <ul>
        <li>Check ferry timing before building a driving day.</li>
        <li>Confirm whether your rental company handles toll and ferry billing.</li>
        <li>Allow extra buffer time in shoulder season and bad weather.</li>
        <li>Use Entur and regional operators for current route details.</li>
      </ul>

      <h2>Where ferries matter most</h2>
      <p>
        Ferries are especially important in Western Norway, Helgeland, Lofoten,
        Senja and along fjord-heavy routes where direct road alternatives are
        limited or much slower.
      </p>
    </GuideArticleLayout>
  );
}
