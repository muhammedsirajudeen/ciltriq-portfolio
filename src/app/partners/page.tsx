import PartnersPage from "./partners.page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Companies & Industries We Work With | Ciltriq Technologies",

  description:
    "Explore the companies, startups, and industries Ciltriq Technologies has collaborated with across software systems, operational platforms, automation workflows, and digital products.",

  keywords: [
    "software development partners",
    "technology consulting",
    "AI automation company",
    "business software solutions",
    "custom software agency",
    "startup technology partner",
    "operational systems development",
    "Healthcare software",
    "Retail software solutions",
    "Education technology",
    "Logistics software",
    "Real Estate platforms",
    "Ciltriq Technologies",
  ],

  metadataBase: new URL("https://ciltriq.com"),

  alternates: {
    canonical: "/partners",
  },

  openGraph: {
    title:
      "Companies & Industries We Work With | Ciltriq Technologies",

    description:
      "See the businesses and industries Ciltriq Technologies has collaborated with across scalable software systems, platforms, and operational tools.",

    url: "https://ciltriq.com/partners",

    siteName: "Ciltriq Technologies",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Companies and industries working with Ciltriq Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Companies & Industries We Work With | Ciltriq Technologies",

    description:
      "Businesses and operational domains Ciltriq Technologies has collaborated with across software, platforms, and automation systems.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function Page(){
  return(
    <PartnersPage/>
  )
}