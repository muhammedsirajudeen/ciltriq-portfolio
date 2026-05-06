import {
  Bot,
  Smartphone,
  Globe,
  MessageSquare,
  Database,
  Layers,
  Check,
  ArrowRight,
} from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    color: "text-primary",
    desc:
      "Fast, scalable websites and web platforms built with modern technologies and clean architecture.",
    tags: ["Next.js", "React", "Full Stack"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    color: "text-primary",
    desc:
      "Cross-platform and native mobile applications designed for performance and real-world usage.",
    tags: ["React Native", "Flutter", "iOS & Android"],
  },
  {
    icon: Bot,
    title: "AI Integrations",
    color: "text-primary",
    desc:
      "Integrate AI into your existing workflows, products, and internal tools to reduce manual work.",
    tags: ["OpenAI", "Automation", "Custom Workflows"],
  },
  {
    icon: MessageSquare,
    title: "Chatbot Systems",
    color: "text-primary",
    desc:
      "Custom chatbot solutions for customer support, lead handling, and business operations.",
    tags: ["WhatsApp", "GPT", "Multi-language"],
  },
  {
    icon: Database,
    title: "Backend Systems",
    color: "text-primary",
    desc:
      "Reliable APIs, databases, authentication systems, and infrastructure for scalable products.",
    tags: ["APIs", "Databases", "Cloud"],
  },
  {
    icon: Layers,
    title: "Internal Tools",
    color: "text-primary",
    desc:
      "Dashboards, admin panels, and operational software tailored to your business workflows.",
    tags: ["Dashboards", "Admin Panels", "Automation"],
  },
];

const Services = () => {
  return (
    <main className="pt-24 pb-20">
      <section className="relative overflow-hidden py-16 lg:py-24">
        <GridPattern strokeColor="rgba(0,0,0,0.04)" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="text-center mb-16">
              <span className="font-body text-xs uppercase tracking-widest text-primary font-medium">
                Services
              </span>

              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-ctext-primary mt-3 mb-4">
                Software Built Around Your Business
              </h1>

              <p className="font-body text-ctext-secondary max-w-2xl mx-auto">
                We design and build software systems — from websites and mobile
                apps to AI tools and internal platforms.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <BlurFade key={service.title} delay={0.1 * i}>
                <MagicCard className="h-full">
                  <service.icon
                    size={48}
                    strokeWidth={1.5}
                    className={"text-black"}
                  />

                  <h3 className="font-heading font-semibold text-xl text-ctext-primary mt-4 mb-3">
                    {service.title}
                  </h3>

                  <p className="font-body text-sm text-ctext-secondary mb-4 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-body font-medium"
                      >
                        <Check size={12} strokeWidth={2} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.8}>
            <div className="text-center mt-14">
              <Link to="/contact">
                <RainbowButton className="text-base px-8 py-4">
                  Start a Project
                  <ArrowRight
                    size={20}
                    strokeWidth={1.5}
                    className="ml-2"
                  />
                </RainbowButton>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
};

export default Services;