import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://ciltriq.com"),

  title: {
    default: "Ciltriq Technologies | Software Development Company in Kerala",
    template: "%s | Ciltriq Technologies",
  },

  description:
    "Ciltriq Technologies builds scalable software systems, automation platforms, AI-powered tools, web applications, internal dashboards, and digital products for growing businesses in Kerala and across India.",

  keywords: [
    "software company Kerala",
    "software development company India",
    "web development Kerala",
    "automation solutions",
    "AI software development",
    "custom software development",
    "startup MVP development",
    "Next.js development",
    "business automation",
    "internal tools development",
    "Ciltriq Technologies",
  ],

  authors: [
    {
      name: "Ciltriq Technologies",
      url: "https://ciltriq.com",
    },
  ],

  creator: "Ciltriq Technologies",
  publisher: "Ciltriq Technologies",

  category: "technology",

  alternates: {
    canonical: "https://ciltriq.com",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ciltriq.com",
    siteName: "Ciltriq Technologies",
    title: "Ciltriq Technologies | Software Development Company in Kerala",
    description:
      "We build scalable software systems, AI-powered platforms, automation tools, and modern digital products for businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ciltriq Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ciltriq Technologies | Software Development Company in Kerala",
    description:
      "We build scalable software systems, AI-powered platforms, automation tools, and modern digital products for businesses.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Providers>
          <Navbar />
          <Analytics/>
          <ScrollProgress className="top-16 lg:top-20 z-50 opacity-60" />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </Providers>
      </body>
    </html>
  );
}