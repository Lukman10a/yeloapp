import { Metadata } from "next";
import LocationsPage from "../components/locations/LocationsPage";

export const metadata: Metadata = {
  title: "Our Locations & Branches | Yelo.",
  description:
    "Find the nearest Yelo car rental branch to you. Operating in major cities and international destinations with 24/7 airport services.",
};

export default function Locations() {
  return <LocationsPage />;
}
