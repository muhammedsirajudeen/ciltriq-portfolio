import {
  Building2,
  Users,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Home,
  Package,
  Star,
} from "lucide-react";

import { Handshake } from "@phosphor-icons/react";
import { IndianRupee } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { MagicCard } from "@/components/ui/magic-card";

const partners = [
  "Knowbin Technologies",
  "Toobikes",
  "Asairz",
  "Dibolky",
  "Bodha",
];

const industries = [
  { name: "Healthcare", Icon: HeartPulse },
  { name: "Retail", Icon: ShoppingCart },
  { name: "Education", Icon: GraduationCap },
  { name: "Real Estate", Icon: Home },
  { name: "Logistics", Icon: Package },
];

const testimonials = [
  {
    quote:
      "Ciltriq helped us streamline internal operations and improve system reliability across our workflows.",
    name: "Operations Lead",
    role: "Healthcare Platform",
  },
  {
    quote:
      "The team executed quickly, communicated clearly, and delivered production-ready software without unnecessary complexity.",
    name: "Founder",
    role: "Mobility Startup",
  },
  {
    quote:
      "Their engineering approach focused on solving operational bottlenecks rather than adding unnecessary features.",
    name: "Director",
    role: "Commerce Business",
  },
];

const Partners = () => {
  return (
    <main className="pt-24 pb-20">
      <section className="surface-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="mb-12 text-center">
              <Handshake size={32} className="mx-auto mb-3 text-primary" />

              <h1 className="mb-3 font-heading text-3xl font-semibold text-ctext-primary lg:text-4xl">
                Companies We Work With
              </h1>

              <p className="font-body text-ctext-secondary">
                Businesses and teams we have collaborated with across products,
                platforms, and operational systems.
              </p>
            </div>
          </BlurFade>

          <Marquee speed="45s" className="mb-20">
            {partners.map((name) => (
              <div
                key={name}
                className="mx-3 flex items-center gap-3 rounded-2xl border border-border bg-white px-6 py-4 shadow-sm whitespace-nowrap"
              >
                <Building2
                  size={22}
                  strokeWidth={1.5}
                  className="text-ctext-primary"
                />

                <div>
                  <p className="font-body text-sm font-medium text-ctext-primary">
                    {name}
                  </p>

                  <p className="font-body text-xs text-ctext-muted">
                    Collaboration Partner
                  </p>
                </div>
              </div>
            ))}
          </Marquee>

          <BlurFade>
            <div className="mb-12 text-center">
              <Users
                size={32}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-secondary"
              />

              <h2 className="mb-3 font-heading text-3xl font-semibold text-ctext-primary lg:text-4xl">
                Industry Experience
              </h2>

              <p className="mx-auto max-w-2xl font-body text-ctext-secondary">
                Experience building systems and software solutions across
                multiple operational domains.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.15}>
            <div className="mb-16 flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 font-body text-sm shadow-sm"
                >
                  <industry.Icon
                    size={16}
                    strokeWidth={1.5}
                    className="text-ctext-secondary"
                  />

                  {industry.name}
                </span>
              ))}
            </div>
          </BlurFade>

          {/* <div className="mb-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <BlurFade key={testimonial.quote} delay={0.1 * index}>
                <MagicCard className="h-full rounded-2xl border border-border">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        strokeWidth={1.5}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="mb-5 font-body text-sm leading-relaxed text-ctext-secondary">
                    “{testimonial.quote}”
                  </p>

                  <div>
                    <p className="font-heading text-sm font-semibold text-ctext-primary">
                      {testimonial.name}
                    </p>

                    <p className="font-body text-xs text-ctext-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div> */}

          {/* <BlurFade delay={0.3}>
            <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
              <IndianRupee size={28} className="text-secondary" />

              <NumberTicker
                value={1}
                suffix="Cr+"
                className="text-4xl font-semibold text-ctext-primary"
              />

              <span className="font-body text-ctext-secondary">
                in business operations and transaction flow supported through
                software systems
              </span>
            </div>
          </BlurFade> */}
        </div>
      </section>
    </main>
  );
};

export default Partners;