import { journalArticles } from "@/src/data/journal-articles";

export type JournalEntry = {
  slug: string;
  title: string;
  type: string;
  location: string;
  readTime: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
};

const imagePositionBySlug: Record<string, string> = {
  "the-road-to-senja": "center 48%",
  "where-norway-feels-most-cinematic": "center 42%",
};

function toJournalEntry(slug: string): JournalEntry {
  const article = journalArticles.find((entry) => entry.slug === slug);

  if (!article) {
    throw new Error(`Missing journal article for slug: ${slug}`);
  }

  return {
    slug: article.slug,
    title: article.title,
    type: article.category,
    location: article.region,
    readTime: article.readTime,
    description: article.excerpt,
    imageSrc: article.image,
    imageAlt: article.imageAlt,
    imagePosition: imagePositionBySlug[article.slug],
  };
}

export const featuredJournalEntry = toJournalEntry("the-road-to-senja");

export const journalEntries = journalArticles
  .filter((article) => article.slug !== featuredJournalEntry.slug)
  .map((article) => toJournalEntry(article.slug));
