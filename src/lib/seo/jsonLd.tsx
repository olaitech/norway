import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/src/config/site";

const SCHEMA_CONTEXT = "https://schema.org";

export type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

type ArticleJsonLdOptions = {
  headline: string;
  description: string;
  url: string;
  image?: string | readonly string[];
  articleSection?: string;
  inLanguage?: string;
  datePublished?: string;
  dateModified?: string;
  publisher?: Record<string, unknown>;
};

function normalizeUrl(url: string) {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return new URL(url, SITE_URL).toString();
}

function safeJsonLdStringify(value: JsonLdValue) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function toAbsoluteUrl(path: string) {
  return normalizeUrl(path);
}

export function createOrganizationEntity() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: normalizeUrl("/images/branding/logo2.png"),
    },
  };
}

export function createOrganizationJsonLd() {
  return {
    "@context": SCHEMA_CONTEXT,
    ...createOrganizationEntity(),
  };
}

export function createWebSiteJsonLd({
  name = SITE_NAME,
  url = SITE_URL,
  description = SITE_DESCRIPTION,
}: {
  name?: string;
  url?: string;
  description?: string;
} = {}) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebSite",
    name,
    url: normalizeUrl(url),
    description,
  };
}

export function createBreadcrumbListJsonLd(items: readonly BreadcrumbItem[]) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: normalizeUrl(item.href),
    })),
  };
}

export function createFaqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createArticleJsonLd({
  headline,
  description,
  url,
  image,
  articleSection,
  inLanguage = "en",
  datePublished,
  dateModified,
  publisher = createOrganizationEntity(),
}: ArticleJsonLdOptions) {
  const article: Record<string, unknown> = {
    "@context": SCHEMA_CONTEXT,
    "@type": "Article",
    headline,
    name: headline,
    description,
    url: normalizeUrl(url),
    mainEntityOfPage: normalizeUrl(url),
    inLanguage,
    publisher,
  };

  if (articleSection) {
    article.articleSection = articleSection;
  }

  if (image) {
    article.image =
      typeof image === "string"
        ? normalizeUrl(image)
        : image.map((item) => normalizeUrl(item));
  }

  if (datePublished) {
    article.datePublished = datePublished;
  }

  if (dateModified) {
    article.dateModified = dateModified;
  }

  return article;
}

export function JsonLd({ value }: { value: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(value) }}
    />
  );
}
