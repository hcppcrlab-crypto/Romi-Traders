import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://romitraders.com"),

  title: {
    default: "ROMI TRADERS",
    template: "%s | ROMI TRADERS"
  },

  description:
    "ROMI TRADERS - Professional Online Shopping Store. Buy quality products with secure payments, fast delivery, and the best customer service.",

  keywords: [
    "ROMI TRADERS",
    "Online Store",
    "Ecommerce",
    "Shopping",
    "Pakistan",
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Online Shopping"
  ],

  authors: [
    {
      name: "ROMI TRADERS"
    }
  ],

  creator: "ROMI TRADERS",

  publisher: "ROMI TRADERS",

  applicationName: "ROMI TRADERS",

  robots: {
    index: true,
    follow: true
  },

  openGraph: {
    title: "ROMI TRADERS",
    description:
      "Professional Online Shopping Platform",
    type: "website",
    locale: "en_US",
    siteName: "ROMI TRADERS"
  },

  twitter: {
    card: "summary_large_image",
    title: "ROMI TRADERS",
    description:
      "Professional Online Shopping Platform"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}
