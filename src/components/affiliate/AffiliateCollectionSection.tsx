import { getAffiliateItemsByCollection } from "@/src/data/partners/affiliate";
import { AffiliateCollectionCard } from "./AffiliateCollectionCard";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { AffiliateProductCard } from "./AffiliateProductCard";

type AffiliateCollectionSectionProps = {
  collection: string;
  title: string;
  intro: string;
  /** Optional editorial selection, rendered in this order. */
  itemIds?: readonly string[];
};

export function AffiliateCollectionSection({
  collection,
  title,
  intro,
  itemIds,
}: AffiliateCollectionSectionProps) {
  const activeItems = getAffiliateItemsByCollection(collection);
  const items = itemIds
    ? itemIds.flatMap((id) => activeItems.filter((item) => item.id === id))
    : activeItems;

  if (items.length === 0) return null;

  return (
    <section className="mt-12 min-w-0 border-t border-white/15 pt-10 sm:mt-14 sm:pt-12">
      <h2 className="font-serif text-[clamp(2rem,4vw,3.1rem)] font-normal leading-tight tracking-[-0.04em] text-[#f4efe2]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[#c2c8cb]">
        {intro}
      </p>
      <div className="mt-4"><AffiliateDisclosure /></div>
      <div className="mt-8 grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item) => item.type === "product" ? (
          <AffiliateProductCard key={item.id} item={item} showDisclosure={false} />
        ) : (
          <AffiliateCollectionCard key={item.id} item={item} showDisclosure={false} />
        ))}
      </div>
    </section>
  );
}
