import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DestinationPage } from "@/src/components/sections/destinations/DestinationPage";
import {
  HelgelandCoastTravelGuide,
  helgelandCoastGuideMetadata,
} from "@/src/components/sections/destinations/HelgelandCoastTravelGuide";
import { destinations, getDestination } from "@/src/data/destinations";

type DestinationRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DestinationRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return {};
  }

  if (slug === "helgeland-coast") {
    return {
      title: helgelandCoastGuideMetadata.title,
      description: helgelandCoastGuideMetadata.description,
      alternates: {
        canonical: "/destinations/helgeland-coast",
      },
      openGraph: {
        title: helgelandCoastGuideMetadata.title,
        description: helgelandCoastGuideMetadata.description,
        type: "article",
        images: [
          {
            url: "/images/cards/helgeland.png",
            alt: "A quiet road along the Helgeland Coast in Northern Norway",
          },
        ],
      },
    };
  }

  return {
    title: destination.metaTitle,
    description: destination.metaDescription,
  };
}

export default async function DestinationRoute({
  params,
}: DestinationRouteProps) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  if (slug === "helgeland-coast") {
    return <HelgelandCoastTravelGuide />;
  }

  return <DestinationPage destination={destination} />;
}
