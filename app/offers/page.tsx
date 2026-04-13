import type { Metadata } from "next";
import OffersPage from "@/components/offers/OffersPage";

export const metadata: Metadata = {
  title: "Offers | Yelo",
  description: "Explore the latest Yelo rental offers and discounts.",
};

export default function Page() {
  return <OffersPage />;
}
