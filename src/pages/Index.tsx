import { Link } from "react-router-dom";
import {
  BadgeCheck, Users, FolderKanban, Calendar, ArrowRight,
  Code2, Layers, Smartphone, Server, Terminal, Webhook,
  Cpu, Database, Cloud, Box, Bot, Globe, MessageSquare,
  TrendingUp, Zap
} from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { WordRotate } from "@/components/ui/word-rotate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";

const stats = [
  { icon: Users, value: 50, suffix: "+", label: "Clients Served" },
  { icon: FolderKanban, value: 200, suffix: "+", label: "Projects Delivered" },
  { icon: Calendar, value: 5, suffix: "+", label: "Years Experience" },
  { icon: BadgeCheck, value: 98, suffix: "%", label: "Client Satisfaction" },
];

const techBadges = [
  { name: "React", Icon: Code2 },
  { name: "Next.js", Icon: Layers },
  { name: "Flutter", Icon: Smartphone },
  { name: "Node.js", Icon: Server },
  { name: "Python", Icon: Terminal },
  { name: "Meta API", Icon: Webhook },
  { name: "OpenAI", Icon: Cpu },
  { name: "Firebase", Icon: Database },
  { name: "AWS", Icon: Cloud },
  { name: "Supabase", Icon: Database },
  { name: "PostgreSQL", Icon: Database },
  { name: "Docker", Icon: Box },
];

const services = [
  { icon: Bot, title: "AI Business Automation", desc: "Deploy intelligent bots across WhatsApp, Instagram, email, and SMS.", color: "text-primary", large: true },
  { icon: Smartphone, title: "App Development", desc: "iOS, Android, and cross-platform apps that users love.", color: "text-ctext-primary" },
  { icon: Globe, title: "Web Development", desc: "High-performance websites built on modern architecture.", color: "text-ctext-primary" },
  { icon: MessageSquare, title: "AI Chatbots", desc: "Custom GPT-powered bots trained on your business data.", color: "text-primary" },
  { icon: TrendingUp, title: "Revenue Leak Analysis", desc: "Find where money is slipping away and fix it systematically.", color: "text-secondary" },
  { icon: Layers, title: "Multi-Channel Automation", desc: "Unified campaigns across WhatsApp, email, SMS, and social.", color: "text-ctext-primary" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <GridPattern animated accentColor="#2563EB" strokeColor="rgba(0,0,0,0.07)" />
    <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/[0.06] blur-3xl pointer-events-none" />
    <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-ctext-primary/[0.03] blur-3xl pointer-events-none" />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ maskImage: "linear-gradient(to bottom, white 50%, transparent)" }}
    />

    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-12">
      <BlurFade delay={0.1}>
        <ShineBorder className="inline-block mb-6">
          <div className="flex items-center gap-2 px-4 py-1.5">
            <BadgeCheck size={16} strokeWidth={1.5} className="text-primary" />
            <span className="font-body text-sm font-medium text-ctext-primary">Intelligent Tech Solutions</span>
          </div>
        </ShineBorder>
      </BlurFade>

      <BlurFade delay={0.2}>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient leading-tight mb-4">
          We Build What Your Business Demands
        </h1>
      </BlurFade>

      <BlurFade delay={0.3}>
        <div className="h-12 flex items-center justify-center mb-4">
          <WordRotate
            words={["Custom Apps", "AI Automation", "Revenue Growth", "Smart Bots"]}
            className="font-heading text-2xl sm:text-3xl font-bold text-primary"
          />
        </div>
      </BlurFade>

      <BlurFade delay={0.4}>
        <p className="font-body text-lg text-ctext-secondary max-w-2xl mx-auto mb-8">
          Transforming ambitious businesses through intelligent technology and AI-powered solutions
        </p>
      </BlurFade>

      <BlurFade delay={0.5}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/portfolio">
            <ShimmerButton variant="primary">
              <FolderKanban size={20} strokeWidth={1.5} />
              View Our Work
            </ShimmerButton>
          </Link>
          <Link to="/contact">
            <ShimmerButton variant="secondary">
              Start a Project
              <ArrowRight size={20} strokeWidth={1.5} />
            </ShimmerButton>
          </Link>
        </div>
      </BlurFade>

      <BlurFade delay={0.6}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon size={24} strokeWidth={1.5} className="text-primary mx-auto mb-2" />
              <NumberTicker value={stat.value} suffix={stat.suffix} className="text-2xl lg:text-3xl text-ctext-primary" />
              <p className="font-body text-xs text-ctext-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={0.7}>
        <Marquee className="max-w-4xl mx-auto" speed="40s">
          {techBadges.map((badge) => (
            <div
              key={badge.name}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-white card-shadow font-body text-sm whitespace-nowrap"
            >
              <badge.Icon size={20} strokeWidth={1.5} className="text-ctext-secondary" />
              {badge.name}
            </div>
          ))}
        </Marquee>
      </BlurFade>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="relative py-20 lg:py-28 overflow-hidden">
    <GridPattern strokeColor="rgba(0,0,0,0.04)" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BlurFade>
        <div className="text-center mb-14">
          <span className="font-body text-xs uppercase tracking-widest text-primary font-medium">What We Do</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-ctext-primary mt-3 mb-4">
            Solutions Built for Real Business Problems
          </h2>
          <p className="font-body text-ctext-secondary max-w-xl mx-auto">
            From idea to deployment, we handle every layer of your technology needs
          </p>
        </div>
      </BlurFade>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <BlurFade key={service.title} delay={0.1 * i}>
            <MagicCard className={service.large ? "md:col-span-2 lg:col-span-1" : ""}>
              <service.icon size={40} strokeWidth={1.5} className={service.color} />
              <h3 className="font-heading font-semibold text-lg text-ctext-primary mt-4 mb-2">{service.title}</h3>
              <p className="font-body text-sm text-ctext-secondary">{service.desc}</p>
            </MagicCard>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.7}>
        <div className="text-center mt-10">
          <Link to="/services">
            <ShimmerButton variant="secondary">
              View All Services
              <ArrowRight size={16} strokeWidth={1.5} />
            </ShimmerButton>
          </Link>
        </div>
      </BlurFade>
    </div>
  </section>
);

const CTASection = () => (
  <section className="relative py-20 lg:py-28 overflow-hidden">
    <GridPattern strokeColor="rgba(37,99,235,0.10)" />
    <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
      <BlurFade>
        <ShineBorder className="inline-block">
          <div className="px-8 sm:px-16 py-12 sm:py-16">
            <Zap size={48} strokeWidth={1.5} className="text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ctext-primary mb-4">
              Ready to Fix Your Revenue Leaks?
            </h2>
            <p className="font-body text-ctext-secondary mb-2">
              Get a free 30-minute business audit. No commitment, just clarity.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <NumberTicker value={30} className="text-3xl text-primary" />
              <span className="font-body text-ctext-secondary">minute free audit</span>
            </div>
            <Link to="/contact">
              <ShimmerButton variant="primary" className="text-base px-8 py-4">
                Book My Free Audit
                <ArrowRight size={20} strokeWidth={1.5} />
              </ShimmerButton>
            </Link>
          </div>
        </ShineBorder>
      </BlurFade>
    </div>
  </section>
);

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <CTASection />
    </main>
  );
};

export default Index;
