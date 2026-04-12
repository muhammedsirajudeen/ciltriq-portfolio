import {
  Bot, Smartphone, Globe, MessageSquare, TrendingUp, Layers,
  Check, ArrowRight
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Bot, title: "AI Business Automation", color: "text-primary",
    desc: "Deploy intelligent bots across WhatsApp, Instagram, email, and SMS. Automate customer support, lead qualification, and follow-ups 24/7.",
    tags: ["WhatsApp API", "Meta Integration", "24/7 Active"],
  },
  {
    icon: Smartphone, title: "App Development", color: "text-ctext-primary",
    desc: "iOS, Android, and cross-platform apps that users love. From MVP to enterprise-scale.",
    tags: ["Flutter", "React Native", "Swift"],
  },
  {
    icon: Globe, title: "Web Development", color: "text-ctext-primary",
    desc: "High-performance websites and full-stack platforms built on modern architecture.",
    tags: ["Next.js", "Full Stack", "SEO Ready"],
  },
  {
    icon: MessageSquare, title: "AI Chatbots", color: "text-primary",
    desc: "Custom GPT-powered bots trained on your business data to handle queries, bookings, and sales.",
    tags: ["GPT-4", "Custom Trained", "Multi-language"],
  },
  {
    icon: TrendingUp, title: "Revenue Leak Analysis", color: "text-secondary",
    desc: "We audit your business workflows, find where money is slipping away, and fix it systematically.",
    tags: ["Free Audit", "ROI Focused"],
  },
  {
    icon: Layers, title: "Multi-Channel Automation", color: "text-ctext-primary",
    desc: "Unified campaigns across WhatsApp, email, SMS, and social -- all triggered by customer behavior.",
    tags: ["Email", "WhatsApp", "SMS"],
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
              <span className="font-body text-xs uppercase tracking-widest text-primary font-medium">What We Do</span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-ctext-primary mt-3 mb-4">
                Solutions Built for Real Business Problems
              </h1>
              <p className="font-body text-ctext-secondary max-w-xl mx-auto">
                From idea to deployment, we handle every layer of your technology needs
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <BlurFade key={service.title} delay={0.1 * i}>
                <MagicCard className="h-full">
                  <service.icon size={48} strokeWidth={1.5} className={service.color} />
                  <h3 className="font-heading font-semibold text-xl text-ctext-primary mt-4 mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-ctext-secondary mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-body font-medium">
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
                <ShimmerButton variant="primary" className="text-base px-8 py-4">
                  Start a Project
                  <ArrowRight size={20} strokeWidth={1.5} />
                </ShimmerButton>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
};

export default Services;
