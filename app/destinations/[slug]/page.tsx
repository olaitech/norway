import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DestinationPage } from "@/src/components/sections/destinations/DestinationPage";
import {
  LofotenIslandsTravelGuide,
  lofotenIslandsTravelGuideMetadata,
} from "@/src/components/sections/destinations/LofotenIslandsTravelGuide";
import {
  HelgelandCoastTravelGuide,
  helgelandCoastGuideMetadata,
} from "@/src/components/sections/destinations/HelgelandCoastTravelGuide";
import {
  SenjaTravelGuide,
  senjaTravelGuideMetadata,
} from "@/src/components/sections/destinations/SenjaTravelGuide";
import {
  TromsoTravelGuide,
  tromsoTravelGuideMetadata,
} from "@/src/components/sections/destinations/TromsoTravelGuide";
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

  if (slug === "lofoten-islands") {
    return {
      title: lofotenIslandsTravelGuideMetadata.title,
      description: lofotenIslandsTravelGuideMetadata.description,
      alternates: {
        canonical: "/destinations/lofoten-islands",
      },
      openGraph: {
        title: lofotenIslandsTravelGuideMetadata.title,
        description: lofotenIslandsTravelGuideMetadata.description,
        url: "/destinations/lofoten-islands",
        type: "article",
        images: [
          {
            url: "/images/destinations/lofoten/lofoten-hero-reine-hamnoy.jpg",
            alt: "Red rorbuer and steep mountains in Lofoten under soft Arctic light",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: lofotenIslandsTravelGuideMetadata.title,
        description: lofotenIslandsTravelGuideMetadata.description,
        images: ["/images/destinations/lofoten/lofoten-hero-reine-hamnoy.jpg"],
      },
    };
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
        url: "/destinations/helgeland-coast",
        type: "article",
        images: [
          {
            url: "/images/cards/helgeland.png",
            alt: "A quiet road along the Helgeland Coast in Northern Norway",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: helgelandCoastGuideMetadata.title,
        description: helgelandCoastGuideMetadata.description,
        images: ["/images/cards/helgeland.png"],
      },
    };
  }

  if (slug === "senja") {
    return {
      title: senjaTravelGuideMetadata.title,
      description: senjaTravelGuideMetadata.description,
      alternates: {
        canonical: "/destinations/senja",
      },
      openGraph: {
        title: senjaTravelGuideMetadata.title,
        description: senjaTravelGuideMetadata.description,
        url: "/destinations/senja",
        type: "article",
        images: [
          {
            url: "/images/destinations/senja/senja-hero.jpg",
            alt: "Dramatic mountains and fjord landscape on Senja in moody northern light",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: senjaTravelGuideMetadata.title,
        description: senjaTravelGuideMetadata.description,
        images: ["/images/destinations/senja/senja-hero.jpg"],
      },
    };
  }

  if (slug === "tromso") {
    return {
      title: tromsoTravelGuideMetadata.title,
      description: tromsoTravelGuideMetadata.description,
      alternates: {
        canonical: "/destinations/tromso",
      },
      openGraph: {
        title: tromsoTravelGuideMetadata.title,
        description: tromsoTravelGuideMetadata.description,
        url: "/destinations/tromso",
        type: "article",
        images: [
          {
            url: "/images/destinations/tromso/tromso-header.jpg",
            alt: "Tromso city lights surrounded by Arctic mountains at night",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: tromsoTravelGuideMetadata.title,
        description: tromsoTravelGuideMetadata.description,
        images: ["/images/destinations/tromso/tromso-header.jpg"],
      },
    };
  }

  return {
    title: destination.metaTitle,
    description: destination.metaDescription,
    alternates: {
      canonical: `/destinations/${slug}`,
    },
    openGraph: {
      title: destination.metaTitle,
      description: destination.metaDescription,
      url: `/destinations/${slug}`,
      type: "article",
      images: [
        {
          url: destination.imageSrc,
          alt: destination.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: destination.metaTitle,
      description: destination.metaDescription,
      images: [destination.imageSrc],
    },
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

  if (slug === "lofoten-islands") {
    return <LofotenIslandsTravelGuide />;
  }

  if (slug === "helgeland-coast") {
    return <HelgelandCoastTravelGuide />;
  }

  if (slug === "senja") {
    return <SenjaTravelGuide />;
  }

  if (slug === "tromso") {
    return <TromsoTravelGuide />;
  }

  return <DestinationPage destination={destination} />;
}
