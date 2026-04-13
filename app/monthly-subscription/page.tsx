import { Metadata } from "next";
import MonthlySubPage from "@/components/monthly-subscription/MonthlySubPage";

export const metadata: Metadata = {
  title: "Monthly Subscription | Yelo.",
  description:
    "Subscribe to Yelo monthly rentals and enjoy endless benefits, hassle-free processes, and instant rentals.",
};

export default function MonthlySubscription() {
  return <MonthlySubPage />;
}
