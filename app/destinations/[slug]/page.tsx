import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DestinationPage } from "@/src/components/sections/destinations/DestinationPage";
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

  return <DestinationPage destination={destination} />;
}
