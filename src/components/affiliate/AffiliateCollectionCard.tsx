import type { AffiliateCollection } from "@/src/types/affiliate";
import { AffiliateCard, type AffiliateCardOptions } from "./AffiliateCard";

export function AffiliateCollectionCard(props: AffiliateCardOptions & { item: AffiliateCollection }) {
  return <AffiliateCard {...props} />;
}
