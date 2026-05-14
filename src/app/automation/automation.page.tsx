"use client";

import {
  Bot, ArrowRight, Zap, MessageSquare, TrendingUp, Check,
  PenTool, Code2, GitBranch, BarChart2
} from "lucide-react";
import { WhatsappLogo, InstagramLogo, EnvelopeSimple, ChatText, MagnifyingGlass } from "@phosphor-icons/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";
import Link from "next/link";
import { AnimatedBeamAutomation } from "@/components/AnimatedBeamAutomation";
import { RainbowButton } from "@/components/ui/rainbow-button";

const features = [
  "Instant WhatsApp replies, 24 hours a day",
  "AI trained specifically on your products and services",
  "Seamless handoff to human agents when needed",
  "Full analytics dashboard to track every interaction",
];

const liveActivities = [
  { text: "WhatsApp bot resolved 847 queries today", Icon: MessageSquare, color: "border-l-secondary" },
  { text: "Revenue leak of 2.4L identified and fixed", Icon: TrendingUp, color: "border-l-secondary" },
  { text: "Lead response time cut from 4 hours to 2 minutes", Icon: Zap, color: "border-l-primary" },
  { text: "New booking confirmed via Instagram bot", Icon: Check, color: "border-l-secondary" },
];

const channels = [
  { Icon: WhatsappLogo, label: "WhatsApp" },
  { Icon: InstagramLogo, label: "Instagram" },
  { Icon: EnvelopeSimple, label: "Email" },
  { Icon: ChatText, label: "SMS" },
];

const processSteps = [
  { icon: MagnifyingGlass, title: "Discover", desc: "We audit your business, understand your goals, and identify gaps and opportunities", color: "text-primary" },
  { icon: PenTool, title: "Design", desc: "We architect the solution -- UX flows, system design, and technical blueprint", color: "text-ctext-primary" },
  { icon: Code2, title: "Build", desc: "Our engineers build your product with clean, scalable, production-ready code", color: "text-ctext-primary" },
  { icon: GitBranch, title: "Automate", desc: "We layer in AI bots, workflows, and integrations to remove manual bottlenecks", color: "text-primary" },
  { icon: BarChart2, title: "Scale", desc: "We monitor, optimize, and scale your product as your business grows", color: "text-secondary" },
];

export default function AutomationPage() {
  return (
    <main className="pt-24 pb-20">
      {/* AI Automation Feature */}
      <section className="relative surface-bg py-16 lg:py-24 overflow-hidden">
        <DotPattern />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <BlurFade>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-body font-medium mb-6">
                  <Zap size={16} strokeWidth={1.5} />
                  Stop Losing Revenue
                </span>
              </BlurFade>
              <BlurFade delay={0.1}>
                <h1 className="font-heading text-3xl lg:text-4xl font-bold text-ctext-primary mb-4">
                  Your Business, Running on Autopilot
                </h1>
              </BlurFade>
              <BlurFade delay={0.2}>
                <p className="font-body text-ctext-secondary mb-6">
                  We connect your business to AI-powered bots across every channel your customers use -- so no lead, query, or sale ever slips through the cracks.
                </p>
              </BlurFade>
              <BlurFade delay={0.3}>
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-ctext-secondary">
                      <ArrowRight size={16} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </BlurFade>
              <BlurFade delay={0.4}>
                <Link href="/contact">
                  <RainbowButton>
                    <Bot size={20} strokeWidth={1.5} className="mr-2" />
                    Automate My Business
                  </RainbowButton>
                </Link>
              </BlurFade>
            </div>

            <div>
              <BlurFade delay={0.3} direction="left">
                {/* Channel flow visual - Replaced with Animated Beam */}
                <div className="bg-white rounded-2xl border card-shadow p-4 sm:p-8">
                  <AnimatedBeamAutomation />
                </div>

                {/* Live activity */}
                <div className="mt-6 space-y-3">
                  {liveActivities.map((item) => (
                    <div key={item.text} className={`flex items-center gap-3 p-3 rounded-lg bg-white border-l-2 ${item.color} card-shadow`}>
                      <item.Icon size={16} strokeWidth={1.5} className="text-secondary shrink-0" />
                      <span className="font-body text-sm text-ctext-secondary">{item.text}</span>
                    </div>
                  ))}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <DotPattern dotColor="rgba(0,0,0,0.05)" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-ctext-primary mb-3">Our Process</h2>
              <p className="font-body text-ctext-secondary">A proven 5-step approach from discovery to scale</p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <BlurFade key={step.title} delay={0.1 * i}>
                <MagicCard className="text-center h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface mx-auto mb-4">
                    <step.icon size={28} strokeWidth={1.5} className={step.color} />
                  </div>
                  <h3 className="font-heading font-semibold text-ctext-primary mb-2">{step.title}</h3>
                  <p className="font-body text-xs text-ctext-secondary">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2">
                      <ArrowRight size={16} strokeWidth={1.5} className="text-primary/40" />
                    </div>
                  )}
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
