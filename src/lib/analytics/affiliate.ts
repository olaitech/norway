"use client";

import { track } from "@vercel/analytics";

import { readCookieConsentPreferences } from "@/src/lib/compliance/cookie-consent";

export type AffiliateClickProperties = {
  provider: "viator" | "civitatis";
  destination: string;
  category: string;
  productId: string;
  campaignId: string;
  placement: string;
  /** Defaults to the current pathname. Query strings and fragments are omitted. */
  pagePath?: string;
};

/** Call from an affiliate link's click handler; never delays navigation. */
export function trackAffiliateClick(properties: AffiliateClickProperties): void {
  if (
    typeof window === "undefined" ||
    !readCookieConsentPreferences()?.analytics
  ) {
    return;
  }

  try {
    track("affiliate_click", {
      provider: properties.provider,
      destination: properties.destination,
      category: properties.category,
      productId: properties.productId,
      campaignId: properties.campaignId,
      placement: properties.placement,
      pagePath: (properties.pagePath ?? window.location.pathname).split(/[?#]/)[0],
    });
  } catch {
    // Measurement failures must not interrupt the traveller's onward journey.
  }
}
