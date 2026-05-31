import type { Metadata } from "next";
import Link from "next/link";

import { GuideArticleLayout } from "@/src/components/guides/GuideArticleLayout";

export const metadata: Metadata = {
  title: "Norway Ferry Guide for Tourists | Practical Norway Travel Guide",
  description:
    "A practical ferry guide for tourists in Norway, covering car ferries, passenger boats, ticketing, AutoPASS ferry payments, schedules and route planning.",
  alternates: {
    canonical: "/guides/norway-ferry-guide-for-tourists",
  },
};

export default function NorwayFerryGuideForTouristsPage() {
  return (
    <GuideArticleLayout
      title="Norway Ferry Guide for Tourists"
      subtitle="How car ferries, passenger boats, coastal routes, payment systems and ferry planning work in Norway."
      category="Transport & Planning"
      readTime="14 min read"
      lastUpdated="May 2026"
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
    >
      <h2>Quick answer</h2>
      <p>
        Ferries are part of normal transport in Norway. Treat them like regular
        road or public transport links, not only as tourist activities.
      </p>

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

      <h2>Continue planning your Norway trip</h2>
      <ul>
        <li>
          <Link href="/guides/driving-in-norway-what-visitors-should-know">
            Driving in Norway: What Visitors Should Know
          </Link>
        </li>
        <li>
          <Link href="/guides/how-to-travel-northern-norway-without-a-car">
            How to Travel Northern Norway Without a Car
          </Link>
        </li>
        <li>
          <Link href="/guides/how-expensive-is-norway-for-tourists">
            How Expensive Is Norway for Tourists?
          </Link>
        </li>
      </ul>
    </GuideArticleLayout>
  );
}
