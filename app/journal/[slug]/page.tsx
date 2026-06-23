import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JournalArticlePage } from "@/src/components/sections/journal/JournalArticlePage";
import { SITE_NAME } from "@/src/config/site";
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
    alternates: {
      canonical: `/journal/${slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: `/journal/${slug}`,
      siteName: SITE_NAME,
      type: "article",
      images: [
        {
          url: article.image,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.image],
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
