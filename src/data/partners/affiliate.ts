import type { AffiliateItem } from "@/src/types/affiliate";

// Step 1 deliberately has no catalogue. Add only verified editorial selections.
export const affiliateItems: readonly AffiliateItem[] = [];

export function getAffiliateItemsByCollection(
  collection: string,
  items: readonly AffiliateItem[] = affiliateItems,
): AffiliateItem[] {
  return items.filter(
    (item) => item.status === "active" && item.collections.includes(collection),
  );
}
