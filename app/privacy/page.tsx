import type { Metadata } from "next";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Read the privacy policy for Trips Norway, including notes on Vercel Analytics, direct email, map tiles, outbound links and future third-party services.",
  alternates: {
    canonical: "/privacy",
  },
};

const privacySections = [
  {
    title: "Analytics",
    text: "Trips Norway uses Vercel Analytics to understand general traffic and page usage. The setup is lightweight and intended to stay cookie-free, so it can support the site without adding a heavy tracking layer.",
  },
  {
    title: "Direct email",
    text: "If you contact Trips Norway by email, your message and email address are processed only to read, manage and reply to that message. They are not used for unrelated marketing unless that is clearly explained later.",
  },
  {
    title: "Maps and external links",
    text: "When you open the map, the page may load tiles from OpenStreetMap-related services. Google Maps links and TikTok links are outbound links only; they do not load embedded players on the page.",
  },
  {
    title: "Deletion requests",
    text: "If you have shared personal information directly, you can ask for deletion of that information. Some records may need to be kept for security, legal or operational reasons.",
  },
  {
    title: "Future changes",
    text: "If Trips Norway later adds newsletter tools, ads, affiliate links, booking partners or embedded social players, this policy should be updated before those features go live.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <InfoPageShell
      eyebrow="Privacy"
      title="Privacy policy"
      intro="A plain-English privacy policy for Trips Norway. It explains the current use of Vercel Analytics, direct email, map tiles and external links in a simple, proportionate way."
      actions={[
        { label: "Privacy settings", href: "/privacy-settings" },
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
      </div>
    </InfoPageShell>
  );
}
