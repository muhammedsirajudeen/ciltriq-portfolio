import type { Metadata } from "next";
import ServicesPage from "./services.page";

export const metadata: Metadata = {
  title: "Software Development Services | Ciltriq Technologies",

  description:
    "Ciltriq Technologies provides web development, mobile app development, AI integrations, chatbot systems, backend engineering, and internal software solutions for modern businesses.",

  keywords: [
    "software development Kerala",
    "web development company India",
    "mobile app development",
    "AI integration services",
    "chatbot development",
    "backend development",
    "internal tools development",
    "Next.js agency",
    "custom software solutions",
    "Ciltriq Technologies",
  ],

  openGraph: {
    title: "Software Development Services | Ciltriq Technologies",

    description:
      "Modern software solutions including websites, mobile apps, AI systems, backend infrastructure, and business automation.",

    url: "https://ciltriq.com/services",

    siteName: "Ciltriq Technologies",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ciltriq Technologies Services",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Software Development Services | Ciltriq Technologies",

    description:
      "Web development, mobile apps, AI integrations, backend systems, and custom software solutions.",

    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://ciltriq.com/services",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ServicesPage />;
}