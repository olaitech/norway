import type { Metadata } from "next";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Read the privacy policy for the Norway Travel Knowledge Portal, including plain-English notes on analytics, contact messages, personal data and future third-party services.",
};

const privacySections = [
  {
    title: "Simple, limited data use",
    text: "This early-stage portal is designed to work as a public travel knowledge site. It does not sell personal data. If anonymous analytics are added in the future, they should be used only to understand broad site usage and improve the experience.",
  },
  {
    title: "Contact messages",
    text: "If you contact the portal directly, the information you share may be used to read, manage and respond to your message. It should not be used for unrelated marketing unless that is clearly explained and agreed to later.",
  },
  {
    title: "Third-party services",
    text: "The site may use embedded maps, media, analytics or other third-party services in the future. Those services can have their own privacy practices, and this policy should be updated when they are added.",
  },
  {
    title: "Deletion requests",
    text: "If you have shared personal information directly, you can request deletion of that information. Some records may need to be retained when required for security, legal or operational reasons.",
  },
  {
    title: "Policy updates",
    text: "This is an early-stage independent portal. The privacy policy may be updated as the site grows, especially if analytics, contact forms, embedded services, advertising or partner features are introduced.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <InfoPageShell
      eyebrow="Privacy"
      title="Privacy policy"
      intro="A plain-English privacy policy for an independent Norway travel portal. The intent is to keep data use limited, transparent and proportionate to the site's purpose."
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
