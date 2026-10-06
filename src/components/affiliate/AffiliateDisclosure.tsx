export const DEFAULT_AFFILIATE_DISCLOSURE =
  "Affiliate link — Trips Norway may earn a commission at no extra cost to you.";

export function AffiliateDisclosure({
  text = DEFAULT_AFFILIATE_DISCLOSURE,
}: {
  text?: string;
}) {
  return <p className="text-xs leading-relaxed text-[#b9c0c3]">{text}</p>;
}
