import { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationDirectionsPage from "@/components/locations/LocationDirectionsPage";
import { LOCATIONS } from "@/components/locations/locationsData";

interface Params {
  id: string;
}

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ id: location.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const location = LOCATIONS.find((item) => item.id === id);

  if (!location) {
    return {
      title: "Location Not Found | Yelo",
      description: "The requested branch could not be found.",
    };
  }

  return {
    title: `Directions to ${location.name} | Yelo`,
    description: `Get step-by-step directions to the Yelo branch at ${location.address}.`,
  };
}

export default async function DirectionsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const location = LOCATIONS.find((item) => item.id === id);

  if (!location) {
    notFound();
  }

  return <LocationDirectionsPage location={location} />;
}
