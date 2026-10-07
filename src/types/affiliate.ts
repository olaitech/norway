type AffiliateBase = {
  readonly id: string;
  readonly name: string;
  readonly brand?: string;
  readonly eyebrow?: string;
  readonly hook?: string;
  readonly description: string;
  /** Verified EPN URL, including its tracking parameters. Never rebuild it. */
  readonly affiliateUrl: string;
  /** Must match the Custom ID already embedded in the supplied EPN URL. */
  readonly customId: string;
  readonly collections: readonly string[];
  readonly ctaLabel?: string;
  readonly badge?: string;
  readonly status: "active" | "disabled";
  readonly disclosure?: string;
};

// Supporting card backgrounds are decorative; visible text describes each item.
type AffiliateImage = {
  readonly imageUrl?: string;
};

export type AffiliateProduct = AffiliateBase & AffiliateImage & {
  readonly type: "product";
  readonly ebayItemId?: string;
};

export type AffiliateCollection = AffiliateBase & AffiliateImage & {
  readonly type: "collection";
  readonly ebayItemId?: never;
};

export type AffiliateItem = AffiliateProduct | AffiliateCollection;
