import type { Metadata } from "next";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Privacy settings",
  description:
    "Review the current privacy settings placeholder for the Norway Travel Knowledge Portal, including necessary cookies, analytics, embedded media and marketing status.",
};

const settings = [
  {
    title: "Necessary cookies",
    status: "Required",
    text: "Basic technical functionality may be required for the site to load, route and operate safely. These are not optional preference controls.",
  },
  {
    title: "Analytics",
    status: "Not active yet",
    text: "No analytics script was found in the current app code. If anonymous analytics are added later, this section should explain the tool and visitor controls.",
  },
  {
    title: "Embedded media",
    status: "Coming later",
    text: "If third-party video, maps or media embeds are added later, this page should explain their privacy impact before or when they load.",
  },
  {
    title: "Marketing / partnerships",
    status: "Not active yet",
    text: "No advertising or partner tracking controls are implemented here. Future affiliate or partner features should be disclosed clearly where relevant.",
  },
] as const;

export default function PrivacySettingsPage() {
  return (
    <InfoPageShell
      eyebrow="Privacy center"
      title="Privacy settings"
      intro="This page is a placeholder privacy center. It does not pretend to store consent choices yet; it explains the current state and what should be expanded if tracking, embeds or advertising are added later."
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
            At the moment, the current app code does not include an analytics
            script, advertising system or custom consent storage. If that
            changes, this page should become a functional preference center.
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
