import type { Metadata } from "next";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Privacy settings",
  description:
    "Review the current privacy settings page for Trips Norway, including Vercel Analytics, direct email, map tiles, outbound social links and what a fuller consent center would cover later.",
  alternates: {
    canonical: "/privacy-settings",
  },
};

const settings = [
  {
    title: "Analytics",
    status: "Active",
    text: "Vercel Analytics is currently used to understand general site traffic and page usage. It is designed to stay lightweight and does not rely on third-party cookies.",
  },
  {
    title: "Direct email",
    status: "Simple",
    text: "The contact page uses a direct mailto link. If someone emails the site, their message and address are used only to read and reply.",
  },
  {
    title: "Maps",
    status: "On demand",
    text: "The map page may load tiles from OpenStreetMap-related services when it opens. Google Maps links are outbound links that only open if a visitor chooses them.",
  },
  {
    title: "Social links",
    status: "Outbound only",
    text: "TikTok links currently open on TikTok. The site does not embed TikTok players or load TikTok tracking scripts.",
  },
  {
    title: "Future consent center",
    status: "Not needed yet",
    text: "This page is informational for now. It would become more important if the site later adds nonessential cookies, embedded social players, newsletter tools, ads, affiliate tracking or booking integrations.",
  },
] as const;

export default function PrivacySettingsPage() {
  return (
    <InfoPageShell
      eyebrow="Privacy center"
      title="Privacy settings"
      intro="This page is informational for now. It explains the current privacy setup rather than storing consent choices. If Trips Norway later adds nonessential cookies, embedded social players, newsletter tools, ads or partner tracking, it can grow into a fuller preference center."
      actions={[
        { label: "Privacy policy", href: "/privacy" },
        { label: "Contact", href: "/contact" },
      ]}
    >
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <aside className="rounded-[1.35rem] border border-[#d8c9a7]/18 bg-[#d8c9a7]/[0.045] p-7 sm:p-8 lg:self-start">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/78">
            Current state
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.6rem)] font-normal leading-[0.96] tracking-[-0.045em]">
            Minimal by design.
          </h2>
          <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
            The site currently uses Vercel Analytics and map tile requests only
            when visitors open the map. There is no full consent store yet,
            because the site does not currently use the heavier tracking
            features that would need one.
          </p>
        </aside>

        <div className="space-y-5">
          {settings.map((setting) => (
            <article
              key={setting.title}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="font-serif text-[clamp(1.85rem,3.3vw,2.9rem)] font-normal leading-[0.98] tracking-[-0.04em]">
                  {setting.title}
                </h2>
                <span className="w-fit rounded-full border border-[#d8c9a7]/30 bg-[#d8c9a7]/10 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]/85">
                  {setting.status}
                </span>
              </div>
              <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
                {setting.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </InfoPageShell>
  );
}
