import {
  Building2, Users, HeartPulse, ShoppingCart, GraduationCap,
  Home, Package, Star
} from "lucide-react";
import { Handshake } from "@phosphor-icons/react";
import { IndianRupee } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { MagicCard } from "@/components/ui/magic-card";

const partners = [
  "DataSync Labs", "TechBridge Solutions", "GrowthMark Agency", "NexaCloud",
  "CodeForge Studio", "Axiom Digital", "PulseTech", "BridgeStack",
];

const industries = [
  { name: "Healthcare", Icon: HeartPulse },
  { name: "Retail", Icon: ShoppingCart },
  { name: "EdTech", Icon: GraduationCap },
  { name: "Real Estate", Icon: Home },
  { name: "Logistics", Icon: Package },
];

const testimonials = [
  {
    quote: "Ciltriq transformed our customer support with their AI chatbot. Response time dropped from hours to seconds.",
    name: "Ananya Krishnan",
    role: "CEO, RetailEase",
  },
  {
    quote: "The team delivered our mobile app two weeks ahead of schedule with outstanding quality. Highly recommend.",
    name: "Rahul Menon",
    role: "Founder, HealthTrack",
  },
  {
    quote: "Our lead conversion rate increased by 60% after implementing their WhatsApp automation system.",
    name: "Priya Sharma",
    role: "Director, AutoBot CRM",
  },
];

const Partners = () => {
  return (
    <main className="pt-24 pb-20">
      <section className="surface-bg py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="text-center mb-12">
              <Handshake size={32} className="text-primary mx-auto mb-3" />
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-ctext-primary mb-3">
                Development Partners
              </h1>
              <p className="font-body text-ctext-secondary">
                Companies we co-build with to deliver enterprise-scale solutions
              </p>
            </div>
          </BlurFade>

          <Marquee speed="50s" className="mb-16">
            {partners.map((name) => (
              <div key={name} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border card-shadow whitespace-nowrap">
                <Building2 size={24} strokeWidth={1.5} className="text-ctext-primary" />
                <div>
                  <p className="font-body text-sm font-medium text-ctext-primary">{name}</p>
                  <p className="font-body text-xs text-ctext-muted">Technology Partner</p>
                </div>
              </div>
            ))}
          </Marquee>

          <BlurFade>
            <div className="text-center mb-12">
              <Users size={32} strokeWidth={1.5} className="text-secondary mx-auto mb-3" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-ctext-primary mb-3">
                Trusted By Businesses Across Industries
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {industries.map((ind) => (
                <span key={ind.name} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border card-shadow font-body text-sm">
                  <ind.Icon size={16} strokeWidth={1.5} className="text-ctext-secondary" />
                  {ind.name}
                </span>
              ))}
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t, i) => (
              <BlurFade key={t.name} delay={0.1 * i}>
                <MagicCard className="h-full">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} strokeWidth={1.5} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-ctext-secondary italic mb-4">"{t.quote}"</p>
                  <p className="font-heading font-bold text-sm text-ctext-primary">{t.name}</p>
                  <p className="font-body text-xs text-ctext-muted">{t.role}</p>
                </MagicCard>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.4}>
            <div className="flex items-center justify-center gap-3">
              <IndianRupee size={32} className="text-secondary" />
              <NumberTicker value={12} suffix="Cr+" className="text-4xl text-ctext-primary" />
              <span className="font-body text-ctext-secondary">in client revenue impacted</span>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
};

export default Partners;
