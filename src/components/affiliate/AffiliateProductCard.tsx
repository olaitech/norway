import type { AffiliateProduct } from "@/src/types/affiliate";
import { AffiliateCard, type AffiliateCardOptions } from "./AffiliateCard";

export function AffiliateProductCard(props: AffiliateCardOptions & { item: AffiliateProduct }) {
  return <AffiliateCard {...props} />;
}
