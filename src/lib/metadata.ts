import type { Metadata } from "next";

import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_NAME,
} from "@/src/config/site";

type PageImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

type PageMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  type?: "website" | "article";
  image?: PageImage;
};

export function createPageMetadata({
  title,
  description,
  canonical,
  type = "website",
  image = DEFAULT_SOCIAL_IMAGE,
}: PageMetadataOptions): Metadata {
  const socialImage = image;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}
