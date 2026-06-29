import type { Metadata } from "next";
import Link from "next/link";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Cookie and local storage policy for Trips Norway, including necessary storage, optional analytics, map requests and how to change preferences.",
  alternates: {
    canonical: "/cookies",
  },
};

const cookieSections = [
  {
    title: "Necessary storage",
    text: "Trips Norway uses only the small browser storage needed to remember your choice and keep the site usable. If the hosting platform uses technical cookies or similar storage for security, they are limited to that job.",
  },
  {
    title: "Optional analytics",
    text: "If you allow it, Vercel Analytics can measure broad page use so the site can understand which guides are being read. If you reject optional tracking, it stays off.",
  },
  {
    title: "Maps and external content",
    text: "The map page can request OpenStreetMap-style tiles when you open it. The site does not currently embed YouTube or TikTok players, and outbound links open those services separately.",
  },
  {
    title: "Change preferences",
    text: "You can change your choice at any time from the privacy settings page. You can also clear this site's stored preference in your browser if you want the banner to appear again.",
  },
] as const;

export default function CookiesPage() {
  return (
    <InfoPageShell
      eyebrow="Cookies"
      title="Cookies and local storage"
      intro="This site keeps its storage light. It only remembers the choice you make about optional analytics and uses the minimum necessary technical storage to stay usable."
      actions={[
        { label: "Privacy policy", href: "/privacy" },
        { label: "Privacy settings", href: "/privacy-settings" },
      ]}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {cookieSections.map((section) => (
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
            Quick note
          </p>
          <h2 className="mt-5 font-serif text-[clamp(1.85rem,3.4vw,3rem)] font-normal leading-[0.98] tracking-[-0.04em]">
            Nothing heavy is loaded by default.
          </h2>
          <p className="mt-5 max-w-3xl text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
            If you want to review the optional analytics choice, use the
            privacy settings page. If you prefer, you can also clear this site
            from your browser storage and start again on the next visit.
          </p>
          <Link
            href="/privacy-settings"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#c6a15b]/20 bg-[linear-gradient(165deg,rgba(198,161,91,0.08),rgba(143,175,168,0.04))] px-5 py-3 text-sm font-medium text-[#f4efe2] transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
          >
            Open privacy settings
          </Link>
        </article>
      </div>
    </InfoPageShell>
  );
}
