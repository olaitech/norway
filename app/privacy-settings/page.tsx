import type { Metadata } from "next";

import { CookieSettingsPanel } from "@/src/components/compliance/CookieSettingsPanel";
import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Privacy settings",
  description:
    "Local privacy settings for Trips Norway, including the optional analytics choice remembered in your browser.",
  alternates: {
    canonical: "/privacy-settings",
  },
};

const settings = [
  {
    title: "Necessary storage",
    status: "Always on",
    text: "Trips Norway stores the minimum needed to remember your choice and keep the site usable. This does not include a full account or profile system.",
  },
  {
    title: "Optional analytics",
    status: "Choice-based",
    text: "Vercel Analytics stays off until you allow it. If you change your mind later, you can update that choice here without changing the rest of the site.",
  },
  {
    title: "Change later",
    status: "Local only",
    text: "The preference is stored in your browser, not in a user account. If you clear the saved choice, the banner will appear again on the next visit.",
  },
] as const;

export default function PrivacySettingsPage() {
  return (
    <InfoPageShell
      eyebrow="Privacy center"
      title="Privacy settings"
      intro="Use this small local settings page to allow or reject optional analytics. It keeps the choice in your browser and leaves the editorial site itself untouched."
      actions={[
        { label: "Privacy policy", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
      ]}
      bottomContent={<CookieSettingsPanel />}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <aside className="rounded-[1.35rem] border border-[#d8c9a7]/18 bg-[#d8c9a7]/[0.045] p-7 sm:p-8 lg:self-start">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/78">
            Current state
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.6rem)] font-normal leading-[0.96] tracking-[-0.045em]">
            Minimal by design.
          </h2>
          <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
            The site is built to stay light. Optional analytics can be switched
            on or off here, and nothing else in the editorial layout depends on
            that choice.
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
