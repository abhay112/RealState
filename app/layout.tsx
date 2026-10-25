import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIND Real Estate | Purchase, Rent or Sell Commercial and Residential Real Estate",
  description: "FIND is an agent-owned brokerage for buying, selling, or renting in New York, New Jersey, Philadelphia, Connecticut, and Miami.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body><Header />{children}<Footer /></body></html>
  );
}
