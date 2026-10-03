import type { Metadata } from "next";

import { InfoPageShell } from "@/src/components/pages/InfoPageShell";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description:
    "How affiliate links and commercial partnerships work at Trips Norway, operated by Across-IT, and how editorial recommendations remain independent.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <InfoPageShell
      eyebrow="Information"
      title="Affiliate disclosure"
      intro="Trips Norway is operated by Across-IT. This page explains how affiliate links support the site and how we approach editorial recommendations."
      actions={[
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]}
    >
      <div className="max-w-3xl space-y-6 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
        <p>
          Some links on this website may be affiliate links. If you make a
          booking through one of these links, Across-IT may receive a commission
          at no additional cost to you. Using an affiliate link does not increase
          the price you pay.
        </p>
        <p>
          Commercial relationships do not guarantee an editorial recommendation
          or a higher ranking. Recommendations are based on their usefulness to
          travellers, and affiliate or sponsored placements are identified where
          they appear.
        </p>
      </div>
    </InfoPageShell>
  );
}
