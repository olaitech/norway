import type { Metadata } from "next";
import Link from "next/link";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Trips Norway about corrections, local knowledge, story ideas, partnerships, photography or writing.",
  alternates: {
    canonical: "/contact",
  },
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
      intro="Visitors, local operators, photographers, writers, municipalities and collaborators can get in touch about corrections, local knowledge, editorial ideas or responsible partnership enquiries."
      actions={[
        { label: "About the portal", href: "/about" },
        { label: "Responsible travel", href: "/responsible-travel" },
      ]}
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <section className="rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.84),rgba(8,17,22,0.94))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.18)] sm:p-9">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/76">
            Email
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2.1rem,4.3vw,4rem)] font-normal leading-[0.96] tracking-[-0.045em]">
            Share useful knowledge.
          </h2>
          <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
            Use the email below for corrections, local knowledge, story ideas
            and partnership enquiries. Messages are read directly by the
            project team.
          </p>
          <Link
            href="mailto:hello@tripsnorway.com"
            className="mt-8 inline-flex rounded-full border border-[#c6a15b]/20 bg-[linear-gradient(165deg,rgba(198,161,91,0.08),rgba(143,175,168,0.04))] px-5 py-3 text-sm font-medium text-[#f4efe2] transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
          >
            hello@tripsnorway.com
          </Link>
        </section>

        <section className="rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.82),rgba(8,17,22,0.94))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.16)] sm:p-9">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/76">
            What to send
          </p>
          <ul className="mt-7 space-y-4">
            {contactTopics.map((topic) => (
              <li
                key={topic}
                className="rounded-[1rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(8,17,22,0.86),rgba(23,35,38,0.74))] px-5 py-4 text-sm font-light leading-[1.75] text-[#f4efe2]/68 shadow-[0_16px_52px_rgba(0,0,0,0.16)] sm:text-base"
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
