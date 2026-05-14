import AutomationPage from "./automation.page";
export const metadata = {
  title: "AI Business Automation Services | Ciltriq Technologies",
  description:
    "Automate your business with AI-powered WhatsApp bots, Instagram automation, lead management systems, workflow automation, and scalable software solutions by Ciltriq Technologies.",

  keywords: [
    "AI automation Kerala",
    "WhatsApp automation",
    "Instagram chatbot",
    "business automation India",
    "AI chatbot development",
    "workflow automation",
    "lead automation",
    "AI software company Kerala",
    "custom automation systems",
    "Ciltriq Technologies",
  ],

  openGraph: {
    title: "AI Business Automation Services | Ciltriq Technologies",
    description:
      "We build AI-powered automation systems that help businesses scale faster with WhatsApp bots, automation workflows, and custom software.",
    url: "https://ciltriq.com/automation",
    siteName: "Ciltriq Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ciltriq Technologies AI Automation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Business Automation Services | Ciltriq Technologies",
    description:
      "AI-powered automation systems for modern businesses. WhatsApp bots, workflow automation, and scalable software.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://ciltriq.com/automation",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function Page(){
    return(
        <AutomationPage/>
    )
}