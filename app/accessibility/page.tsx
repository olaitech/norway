import type { Metadata } from "next";
import Link from "next/link";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility statement for Trips Norway, covering keyboard navigation, contrast, headings, alt text, reduced motion and ongoing improvements.",
  alternates: {
    canonical: "/accessibility",
  },
};

const accessibilitySections = [
  {
    title: "Keyboard navigation",
    text: "The site aims to stay usable with a keyboard alone. Interactive elements should be reachable, visible and operable without needing a mouse.",
  },
  {
    title: "Readable contrast",
    text: "The visual design uses strong foreground and background separation so editorial text stays readable against the cinematic surfaces.",
  },
  {
    title: "Semantic headings",
    text: "Pages are built with headings and landmarks that should make the structure clear to screen readers and to anyone scanning the page.",
  },
  {
    title: "Image alt text",
    text: "Images that carry meaning are given descriptive alternative text. Decorative images use empty alt text so they do not add noise.",
  },
  {
    title: "Reduced motion",
    text: "The site aims to respect prefers-reduced-motion. Heavy motion is softened or removed where it could distract or make the page harder to use.",
  },
  {
    title: "Ongoing improvements",
    text: "This is a working site, not a finished accessibility certificate. The goal is to keep improving it as issues are found in real use.",
  },
] as const;

export default function AccessibilityPage() {
  return (
    <InfoPageShell
      eyebrow="Accessibility"
      title="Accessibility statement"
      intro="Trips Norway aims to follow WCAG principles and keep the experience calm, readable and usable on different devices and input methods. This is an ongoing effort rather than a claim of perfect compliance."
      actions={[
        { label: "Privacy policy", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
      ]}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {accessibilitySections.map((section) => (
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
            Report an issue
          </p>
          <h2 className="mt-5 font-serif text-[clamp(1.85rem,3.4vw,3rem)] font-normal leading-[0.98] tracking-[-0.04em]">
            If something gets in the way, say so.
          </h2>
          <p className="mt-5 max-w-3xl text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
            If you find a part of the site that is hard to use with a keyboard,
            screen reader or reduced-motion setting, use the contact page and
            include the page address. That helps narrow the fix quickly.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full border border-[#c6a15b]/20 bg-[linear-gradient(165deg,rgba(198,161,91,0.08),rgba(143,175,168,0.04))] px-5 py-3 text-sm font-medium text-[#f4efe2] transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
          >
            Contact
          </Link>
        </article>
      </div>
    </InfoPageShell>
  );
}
