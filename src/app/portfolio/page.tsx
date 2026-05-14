import PortfolioPage from "./portfolio.page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Portfolio | Software Systems, AI Products & Automation Projects | Ciltriq Technologies",

  description:
    "Explore software platforms, AI applications, automation systems, SaaS products, ecommerce solutions, and operational tools built by Ciltriq Technologies across healthcare, logistics, ecommerce, hospitality, developer tools, and more.",

  keywords: [
    "software development portfolio",
    "AI application development",
    "automation systems",
    "custom software projects",
    "SaaS development",
    "mobile app development",
    "web application portfolio",
    "business automation solutions",
    "developer tools",
    "ecommerce platforms",
    "healthcare software",
    "AI products",
    "Kerala software company",
    "Ciltriq Technologies",
  ],

  metadataBase: new URL("https://ciltriq.com"),

  alternates: {
    canonical: "/portfolio",
  },

  openGraph: {
    title:
      "Portfolio | Software Systems, AI Products & Automation Projects",

    description:
      "See the platforms, AI products, automation workflows, and operational systems built by Ciltriq Technologies for startups, businesses, and local operations.",

    url: "https://ciltriq.com/portfolio",

    siteName: "Ciltriq Technologies",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/portfolio-og.png",
        width: 1200,
        height: 630,
        alt: "Ciltriq Technologies Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Portfolio | Software Systems, AI Products & Automation Projects",

    description:
      "Platforms, AI systems, automation workflows, ecommerce products, and scalable software built by Ciltriq Technologies.",

    images: ["/portfolio-og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function Page(){
  return(
    <PortfolioPage/>
  )
}