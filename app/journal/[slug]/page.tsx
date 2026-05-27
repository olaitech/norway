import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JournalArticlePage } from "@/src/components/sections/journal/JournalArticlePage";
import {
  getJournalArticle,
  getRelatedJournalArticles,
  journalArticles,
} from "@/src/data/journal-articles";

type JournalArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return journalArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: JournalArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
    },
  };
}

export default async function JournalArticleRoute({
  params,
}: JournalArticleRouteProps) {
  const { slug } = await params;
  const article = getJournalArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedJournalArticles(article);

  return <JournalArticlePage article={article} relatedArticles={relatedArticles} />;
}

