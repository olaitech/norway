import type { Metadata } from "next";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Read the terms of use for the Norway Travel Knowledge Portal, including travel guidance limitations, changing conditions, content rights and external links.",
};

const terms = [
  {
    title: "General travel guidance",
    text: "The content on this site is provided for travel inspiration and general guidance. It is not a substitute for official advice, professional safety guidance or local decision-making.",
  },
  {
    title: "Conditions change quickly",
    text: "Weather, roads, ferries, opening hours, seasonal access and safety information in Norway can change quickly. Always check official and local sources before travel.",
  },
  {
    title: "Your own travel decisions",
    text: "The portal is not responsible for decisions made based only on this site. Travellers remain responsible for checking conditions, planning realistically and choosing routes that match their ability and situation.",
  },
  {
    title: "Content and media rights",
    text: "Images, video, writing, design and other content may be protected by copyright or other rights. They cannot be reused, copied or republished without permission unless clearly stated otherwise.",
  },
  {
    title: "External links",
    text: "External links are provided for convenience and context. The portal does not control third-party sites and is not responsible for their content, accuracy, policies or availability.",
  },
  {
    title: "Future partnerships",
    text: "Future affiliate, sponsor or partner links may be added. Where relevant, those relationships should be disclosed clearly so readers can understand the context.",
  },
] as const;

export default function TermsPage() {
  return (
    <InfoPageShell
      eyebrow="Information"
      title="Terms of use"
      intro="Simple terms for using an independent Norway travel knowledge portal. The site can help with orientation, but real-world travel decisions still need current official and local information."
      actions={[
        { label: "Privacy policy", href: "/privacy" },
        { label: "Contact", href: "/contact" },
      ]}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {terms.map((term, index) => (
          <article
            key={term.title}
            className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.032),rgba(255,255,255,0.014))] p-7"
          >
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/70">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-5 font-serif text-[clamp(1.75rem,3vw,2.65rem)] font-normal leading-[0.98] tracking-[-0.04em]">
              {term.title}
            </h2>
            <p className="mt-5 text-sm font-light leading-[1.82] text-[#f4efe2]/64">
              {term.text}
            </p>
          </article>
        ))}
      </div>
    </InfoPageShell>
  );
}
