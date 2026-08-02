import type { Metadata } from "next";

import { FerryVideoHero } from "@/src/components/guides/FerryVideoHero";
import { GuideArticleLayout } from "@/src/components/guides/GuideArticleLayout";
import { HelgelandFerryDepartures } from "@/src/components/guides/HelgelandFerryDepartures";
import { AnswerBlock } from "@/src/components/shared/AnswerBlock";
import { TrustBox } from "@/src/components/shared/TrustBox";

export const metadata: Metadata = {
  title: "Norway Ferry Guide for Tourists | Practical Norway Travel Guide",
  description:
    "A practical ferry guide for tourists in Norway, covering car ferries, passenger boats, ticketing, AutoPASS ferry payments, schedules and route planning.",
  alternates: {
    canonical: "/guides/norway-ferry-guide-for-tourists",
  },
};

const faqItems = [
  {
    question: "Do I need to book ferries in Norway in advance?",
    answer:
      "Most ordinary road ferries do not need advance booking, but busy summer crossings can have queues. Check the timetable before the day starts and leave buffer time around important connections.",
  },
  {
    question: "How do tourists pay for ferries in Norway?",
    answer:
      "Many ferry payments are handled automatically through number plate recognition, AutoPASS agreements or later invoicing. Some routes may still use app, card or local ticketing, so check the operator information before travelling.",
  },
  {
    question: "Should I plan my route around ferry times?",
    answer:
      "Yes. In coastal Norway, ferries are part of the route. Treat crossing times as fixed points, then build driving distances and overnight stops around them.",
  },
  {
    question: "Can weather affect Norwegian ferries?",
    answer:
      "Yes. Wind, rough sea and winter conditions can delay or cancel exposed crossings. Always check live updates before remote or important ferry legs.",
  },
] as const;

export default function NorwayFerryGuideForTouristsPage() {
  return (
    <GuideArticleLayout
      title="Norway Ferry Guide for Tourists"
      subtitle="How car ferries, passenger boats, coastal routes, payment systems and ferry planning work in Norway."
      category="Transport & Planning"
      readTime="14 min read"
      lastUpdated="July 2026"
      dateModified="2026-07-30"
      canonicalPath="/guides/norway-ferry-guide-for-tourists"
      hero={
        <FerryVideoHero
          title="Norway Ferry Guide for Tourists"
          subtitle="How car ferries, passenger boats, coastal routes, payment systems and ferry planning work in Norway."
          category="Transport & Planning"
          readTime="14 min read"
          lastUpdated="July 2026"
        />
      }
      featureSection={<HelgelandFerryDepartures />}
      faqItems={faqItems}
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
          lastUpdated="May 2026"
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
