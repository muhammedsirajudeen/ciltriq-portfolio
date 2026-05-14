import ContactPage from "./contact.page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Ciltriq Technologies | Discuss Your Software Requirements",
  description:
    "Connect with Ciltriq Technologies to discuss scalable software systems, AI integrations, automation tools, internal platforms, and customer-facing applications tailored for your business.",

  keywords: [
    "software development company",
    "AI integrations",
    "business automation",
    "custom software development",
    "internal tools",
    "scalable software systems",
    "web application development",
    "startup software partner",
    "Kerala software company",
    "Ciltriq Technologies",
  ],

  metadataBase: new URL("https://ciltriq.com"),

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact Ciltriq Technologies | Discuss Your Software Requirements",
    description:
      "We help businesses build scalable software systems, AI integrations, automation workflows, and modern digital platforms.",
    url: "https://ciltriq.com/contact",
    siteName: "Ciltriq Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Ciltriq Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Contact Ciltriq Technologies | Discuss Your Software Requirements",
    description:
      "Build scalable software systems, AI integrations, automation tools, and digital platforms with Ciltriq Technologies.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function Page(){
  return(
    <ContactPage/>
  )
}