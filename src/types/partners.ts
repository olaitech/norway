export type ExperienceProvider = "viator" | "civitatis";

export type ExperienceCategory = string;

export type ExperiencePartnerItem = {
  id: string;
  slug: string;
  title: string;
  provider: ExperienceProvider;
  destination: string;
  category: ExperienceCategory;
  href: string;
  campaignId: string;
  description: string;
  image?: string;
  featured?: boolean;
};
