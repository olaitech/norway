import type {
  ExperienceCategory,
  ExperiencePartnerItem,
  ExperienceProvider,
} from "@/src/types/partners";

// Add only verified partner products and affiliate URLs to this collection.
export const experiences: readonly ExperiencePartnerItem[] = [];

export function getExperiencesByDestination(destination: string) {
  return experiences.filter((experience) => experience.destination === destination);
}

export function getExperiencesByProvider(provider: ExperienceProvider) {
  return experiences.filter((experience) => experience.provider === provider);
}

export function getExperiencesByCategory(category: ExperienceCategory) {
  return experiences.filter((experience) => experience.category === category);
}

export function getFeaturedExperiences() {
  return experiences.filter((experience) => experience.featured === true);
}
