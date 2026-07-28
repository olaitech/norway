import type { Metadata } from "next";
import Link from "next/link";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Plain-English privacy policy for Trips Norway, covering contact messages, optional analytics, hosting logs, map requests and user choices.",
  alternates: {
    canonical: "/privacy",
  },
};

const privacySections = [
  {
    title: "What Trips Norway is",
    text: "Trips Norway is an independent travel knowledge portal. It publishes editorial guides, route notes and destination pages, not a booking service or official tourism authority.",
  },
  {
    title: "Information you send directly",
    text: "If you use the contact page or email hello@tripsnorway.com, the details you choose to share are used only to read and reply. If you sign up for the Helgeland Coast itinerary, Sender receives your email address to deliver the itinerary and occasional Trips Norway travel inspiration. You can unsubscribe at any time.",
  },
  {
    title: "Optional analytics",
    text: "Trips Norway uses Vercel Analytics for general page-usage measurement when optional analytics are allowed. It helps the site understand broad reading patterns without changing the travel content itself.",
  },
  {
    title: "Hosting and logs",
    text: "The platform serving the site may record standard request logs such as page requests, timestamps, browser type and device details for security and reliability.",
  },
  {
    title: "Maps and external services",
    text: "The map page can request tiles from OpenStreetMap-style services when you open it. The newsletter signup form is embedded from Sender, which handles its validation, subscription and delivery. Outbound links to Google Maps, TikTok and similar services open on those sites instead of embedding their players here.",
  },
  {
    title: "Your choices",
    text: "You can reject optional analytics, change that choice later in privacy settings, or ask for the information you have sent directly to be corrected or deleted where that is practical.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <InfoPageShell
      eyebrow="Privacy"
      title="Privacy policy"
      intro="Trips Norway keeps things small and transparent. This policy explains the current data handling setup in plain English and leaves out the legal padding."
      actions={[
        { label: "Cookies", href: "/cookies" },
        { label: "Contact", href: "/contact" },
      ]}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {privacySections.map((section) => (
          <article
            key={section.title}
            className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8"
          >
            <h2 className="font-serif text-[clamp(1.85rem,3.4vw,3rem)] font-normal leading-[0.98] tracking-[-0.04em]">
              {section.title}
            </h2>
            <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
              {section.text}
            </p>
          </article>
        ))}

        <article className="rounded-[1.25rem] border border-[#c6a15b]/18 bg-[linear-gradient(165deg,rgba(198,161,91,0.07),rgba(143,175,168,0.03))] p-7 sm:p-8 md:col-span-2">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/76">
            Contact
          </p>
          <h2 className="mt-5 font-serif text-[clamp(1.85rem,3.4vw,3rem)] font-normal leading-[0.98] tracking-[-0.04em]">
            Questions about privacy.
          </h2>
          <p className="mt-5 max-w-3xl text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
            If you want to ask about the way this site handles direct messages,
            optional analytics or browser storage, use the contact page or email
            hello@tripsnorway.com.
          </p>
          <Link
            href="mailto:hello@tripsnorway.com"
            className="mt-7 inline-flex rounded-full border border-[#c6a15b]/20 bg-[linear-gradient(165deg,rgba(198,161,91,0.08),rgba(143,175,168,0.04))] px-5 py-3 text-sm font-medium text-[#f4efe2] transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
          >
            hello@tripsnorway.com
          </Link>
        </article>
      </div>
    </InfoPageShell>
  );
}
