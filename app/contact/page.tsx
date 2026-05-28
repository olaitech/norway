import type { Metadata } from "next";
import Link from "next/link";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Norway Travel Knowledge Portal about corrections, local knowledge, story ideas, partnerships, photography, writing or future collaboration.",
};

const contactTopics = [
  "Corrections or updates to practical travel information.",
  "Local knowledge from communities, operators, municipalities or guides.",
  "Photography, writing, editorial ideas or destination stories.",
  "Future partnerships with responsible travel businesses or local projects.",
] as const;

export default function ContactPage() {
  return (
    <InfoPageShell
      eyebrow="Contact"
      title="Contact"
      intro="Visitors, local tourism operators, photographers, writers, municipalities, travel businesses and collaborators can get in touch about corrections, ideas, partnerships, local knowledge or future collaboration."
      actions={[
        { label: "About the portal", href: "/about" },
        { label: "Responsible travel", href: "/responsible-travel" },
      ]}
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <section className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
            Email
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2.1rem,4.3vw,4rem)] font-normal leading-[0.96] tracking-[-0.045em]">
            Share useful knowledge.
          </h2>
          <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
            For now, use this placeholder address. It is intentionally easy to
            replace later when the project has a permanent editorial inbox.
          </p>
          <Link
            href="mailto:hello@example.com"
            className="mt-8 inline-flex rounded-full border border-[#d8c9a7]/35 bg-[#d8c9a7]/10 px-5 py-3 text-sm font-medium text-[#f4efe2] transition-colors hover:bg-[#d8c9a7]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            hello@example.com
          </Link>
        </section>

        <section className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.035),rgba(255,255,255,0.014))] p-7 sm:p-9">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
            What to send
          </p>
          <ul className="mt-7 space-y-4">
            {contactTopics.map((topic) => (
              <li
                key={topic}
                className="rounded-[1rem] border border-white/8 bg-black/15 px-5 py-4 text-sm font-light leading-[1.75] text-[#f4efe2]/68 sm:text-base"
              >
                {topic}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-sm font-light leading-[1.85] text-[#f4efe2]/58">
            This portal is independent and is not an official tourism authority.
            For urgent safety, road, ferry, weather or official travel
            questions, always check local and official sources directly.
          </p>
        </section>
      </div>
    </InfoPageShell>
  );
}
