import { useState } from "react";
import {
  ShoppingCart, HeartPulse, Bot, GraduationCap, BarChart2, Package,
  LineChart, Cloud, Code2, Server, Database, Layers, Smartphone,
  Webhook, Cpu, TrendingUp, ArrowUpRight, BadgeCheck, CreditCard
} from "lucide-react";
import { Handshake } from "@phosphor-icons/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShineBorder } from "@/components/ui/shine-border";
import { MagicCard } from "@/components/ui/magic-card";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

const clientProjects = [
  {
    icon: ShoppingCart, tag: "Retail", title: "RetailEase POS System",
    desc: "Complete point of sale and inventory management system for a regional retail chain.",
    tech: [{ name: "React", Icon: Code2 }, { name: "Node.js", Icon: Server }, { name: "PostgreSQL", Icon: Database }],
    result: "300% faster checkout processing",
  },
  {
    icon: HeartPulse, tag: "Healthcare", title: "HealthTrack Mobile App",
    desc: "Patient health monitoring app with appointment booking and doctor communication.",
    tech: [{ name: "Flutter", Icon: Smartphone }, { name: "Firebase", Icon: Database }, { name: "Node.js", Icon: Server }],
    result: "10,000 downloads in first 60 days",
  },
  {
    icon: Bot, tag: "Real Estate", title: "AutoBot Lead CRM",
    desc: "WhatsApp-first CRM with AI bot that qualifies leads and schedules site visits automatically.",
    tech: [{ name: "WhatsApp API", Icon: Webhook }, { name: "GPT-4", Icon: Cpu }, { name: "Next.js", Icon: Layers }],
    result: "60% increase in lead conversion rate",
  },
  {
    icon: GraduationCap, tag: "EdTech", title: "EduLearn Web Platform",
    desc: "Full-stack e-learning platform with live classes, assessments, and progress tracking.",
    tech: [{ name: "Next.js", Icon: Layers }, { name: "Supabase", Icon: Database }, { name: "Stripe", Icon: CreditCard }],
    result: "5,000 active students within 3 months",
  },
];

const partnerProjects = [
  {
    icon: BarChart2, partner: "DataSync Labs", title: "FinFlow Analytics SaaS",
    desc: "Co-built financial analytics platform with real-time dashboards and automated reporting.",
    tech: [{ name: "React", Icon: Code2 }, { name: "Python", Icon: Cpu }, { name: "AWS", Icon: Cloud }],
  },
  {
    icon: Package, partner: "TechBridge Solutions", title: "LogiTrack Supply Chain",
    desc: "End-to-end supply chain visibility platform with GPS tracking and delivery automation.",
    tech: [{ name: "Next.js", Icon: Layers }, { name: "Node.js", Icon: Server }, { name: "PostgreSQL", Icon: Database }],
  },
  {
    icon: LineChart, partner: "GrowthMark Agency", title: "SocialPulse AI Scheduler",
    desc: "AI-powered social media scheduling and performance analytics across all major platforms.",
    tech: [{ name: "Next.js", Icon: Layers }, { name: "OpenAI", Icon: Cpu }, { name: "Meta API", Icon: Webhook }],
  },
  {
    icon: Cloud, partner: "NexaCloud", title: "CloudOps Monitoring Dashboard",
    desc: "Real-time cloud infrastructure monitoring with automated alerts and incident reporting.",
    tech: [{ name: "React", Icon: Code2 }, { name: "Docker", Icon: Package }, { name: "AWS", Icon: Cloud }],
  },
];

const Portfolio = () => {
  const [tab, setTab] = useState<"client" | "partner">("client");

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BlurFade>
          <div className="text-center mb-12">
            <span className="font-body text-xs uppercase tracking-widest text-primary font-medium">Our Work</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-ctext-primary mt-3 mb-4">
              Projects That Delivered Real Results
            </h1>
            <p className="font-body text-ctext-secondary max-w-xl mx-auto">
              Browse work we have done for direct clients and in collaboration with development partners
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="flex justify-center gap-8 mb-12">
            {[
              { key: "client" as const, label: "Client Projects", Icon: Users },
              { key: "partner" as const, label: "Partnership Projects", IconComp: Handshake },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  "flex items-center gap-2 font-body text-sm pb-2 border-b-2 transition-all duration-200",
                  tab === t.key ? "text-primary border-primary font-medium" : "text-ctext-muted border-transparent hover:text-ctext-secondary"
                )}
              >
                {t.Icon && <t.Icon size={16} strokeWidth={1.5} />}
                {t.IconComp && <t.IconComp size={16} />}
                {t.label}
              </button>
            ))}
          </div>
        </BlurFade>

        {tab === "client" && (
          <div className="grid md:grid-cols-2 gap-6">
            {clientProjects.map((p, i) => (
              <BlurFade key={p.title} delay={0.1 * i}>
                <MagicCard className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <p.icon size={32} strokeWidth={1.5} className="text-primary" />
                    <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-body font-medium">{p.tag}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-ctext-primary mb-2">{p.title}</h3>
                  <p className="font-body text-sm text-ctext-secondary mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span key={t.name} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-surface border text-xs font-body">
                        <t.Icon size={14} strokeWidth={1.5} />
                        {t.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp size={16} strokeWidth={1.5} className="text-secondary" />
                    <span className="font-body text-secondary font-medium">{p.result}</span>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        )}

        {tab === "partner" && (
          <div className="grid md:grid-cols-2 gap-6">
            {partnerProjects.map((p, i) => (
              <BlurFade key={p.title} delay={0.1 * i}>
                <ShineBorder>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <p.icon size={32} strokeWidth={1.5} className="text-ctext-primary" />
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium">
                        <Handshake size={12} />
                        {p.partner}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-ctext-primary mb-2">{p.title}</h3>
                    <p className="font-body text-sm text-ctext-secondary mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((t) => (
                        <span key={t.name} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-surface border text-xs font-body">
                          <t.Icon size={14} strokeWidth={1.5} />
                          {t.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BadgeCheck size={16} strokeWidth={1.5} className="text-secondary" />
                      <span className="font-body text-secondary font-medium">Live Product</span>
                    </div>
                  </div>
                </ShineBorder>
              </BlurFade>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Portfolio;
