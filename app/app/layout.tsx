import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROMI TRADERS - Online Store",
  description:
    "ROMI TRADERS is a fully automated professional online store for electronics, accessories, industrial products, and wholesale supplies.",
  keywords: [
    "ROMI TRADERS",
    "online store",
    "ecommerce",
    "electronics",
    "wholesale",
    "Pakistan",
    "industrial products"
  ],
  authors: [{ name: "ROMI TRADERS" }],
  creator: "ROMI TRADERS",
  metadataBase: new URL("https://romitraders.com"),
  openGraph: {
    title: "ROMI TRADERS - Online Store",
    description:
      "Shop quality products with secure checkout, fast delivery, and professional customer support.",
    url: "https://romitraders.com",
    siteName: "ROMI TRADERS",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ROMI TRADERS - Online Store",
    description:
      "Professional online shopping experience with modern automation and secure payments."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
