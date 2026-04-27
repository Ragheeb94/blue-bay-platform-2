import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blue Bay Mobility — Complex Rehab Technology Specialists",
  description:
    "Blue Bay Mobility provides expert CRT evaluations, insurance documentation, and custom-configured mobility equipment. Based in Tustin, CA. Call 1-888-999-0072.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
