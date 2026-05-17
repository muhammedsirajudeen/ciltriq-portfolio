"use client";

import {
  ArrowUpRight,
  Globe,
  Smartphone,
  Bot,
  ArrowRight,
  Layers,
  Briefcase,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";

type Project = {
  title: string;
  description: string;
  tags: string[];
  platform: "web" | "mobile" | "automation";
  mobile_image: string;
  desktop_image: string;
  icon: string;
  live_link: string;
  year: string;
  industry: string;
  completed: boolean;
};

const projects: Project[] = [
  {
    title: "FarmSphere",
    description:
      "A SaaS-focused landing page designed for an agritech intelligence product. Built to clearly communicate complex data-driven farming insights, capture early adopters, and drive partnerships through high-conversion messaging.",
    tags: ["Landing page", "AgriTech", "UI/UX", "Conversion focused"],
    platform: "web",
    mobile_image: "/farmsphere_mobile.png",
    desktop_image: "/farmsphere_desktop.png",
    icon: "/farmsphere_icon.png",
    live_link: "https://farmsphere.app",
    year: "2026",
    industry: "AgriTech",
    completed: true,
  },
  {
    title: "Asairz",
    description:
      "An eCommerce platform focused on mobile covers and accessories. Built to support product browsing, streamlined checkout, and mobile-first shopping — targeting local demand in Kannur with a clean and conversion-driven interface.",
    tags: ["Ecommerce", "Mobile-first", "Checkout", "Product catalog"],
    platform: "web",
    mobile_image: "/asairz_mobile.png",
    desktop_image: "/asairz_desktop.png",
    icon: "/asairz_icon.png",
    live_link: "https://asairz.ciltriq.com",
    year: "2026",
    industry: "Ecommerce",
    completed: false,
  },
  {
    title: "Toobikes",
    description:
      "A scooty rental platform based in Kannur, Kerala. Built to handle bookings, real-time vehicle availability, and customer operations — giving operators full control over rentals while simplifying the booking experience for users.",
    tags: ["Booking system", "Rental", "Dashboard", "Admin panel"],
    platform: "web",
    mobile_image: "/toobikes_mobile.png",
    desktop_image: "/toobikes_desktop.png",
    icon: "/toobikes_icon.png",
    live_link: "https://toobikes.in",
    year: "2026",
    industry: "Transport & Mobility",
    completed: true,
  },
  {
    title: "Digital Nomads Kerala",
    description:
      "A community-driven platform connecting digital nomads across Kerala. Built to help remote workers discover coworking spaces, local events, stays, and like-minded people — fostering collaboration, networking, and a location-independent lifestyle within the state.",
    tags: ["Community platform", "Remote work", "Networking", "Events"],
    platform: "web",
    mobile_image: "/digitalnomadskerala_mobile.png",
    desktop_image: "/digitalnomadskerala_desktop.png",
    icon: "/cq_icon.png",
    live_link: "https://digitalnomadskerala.vercel.app",
    year: "2026",
    industry: "Community & Remote Work",
    completed: true,
  },
  {
    title: "Kannur Gardens",
    description:
      "A landing page for an event hall integrated with multiple booking aggregators. Built to showcase venue offerings, drive direct inquiries, and reduce dependency on third-party platforms through clear positioning and lead capture.",
    tags: ["Landing page", "Event hall", "Lead generation", "Aggregators"],
    platform: "web",
    mobile_image: "/kannurgardens_mobile.png",
    desktop_image: "/kannurgardens_desktop.png",
    icon: "/kannurgardens_icon.png",
    live_link: "https://www.kannurgardens.com",
    year: "2026",
    industry: "Hospitality",
    completed: true,
  },
  {
    title: "Repoclarity",
    description:
      "A developer tool that visualizes database architecture directly from code. Built to help engineers understand relationships, debug schema issues faster, and navigate complex systems through clear diagrammatic representations.",
    tags: ["Dev tool", "Database", "Visualization", "Engineering"],
    platform: "web",
    mobile_image: "/repoclarity_mobile.png",
    desktop_image: "/repoclarity_desktop.png",
    icon: "/cq_icon.png",
    live_link: "https://repoclarity.com",
    year: "2026",
    industry: "Developer Tools",
    completed: true,
  },
  {
    title: "Kasargod Sports City",
    description:
      "A digital platform for a multi-sport facility, designed to manage bookings, showcase available sports infrastructure, and streamline customer engagement. Built to handle scheduling, membership flows, and inquiries — improving operational efficiency while increasing facility utilization.",
    tags: ["Sports facility", "Booking system", "Membership", "Operations"],
    platform: "web",
    mobile_image: "/kasaragodsportscity_mobile.png",
    desktop_image: "/kasaragodsportscity_desktop.png",
    icon: "/kasaragodsportscity_icon.png",
    live_link: "https://www.kasaragodsportscity.com/",
    year: "2026",
    industry: "Sports & Recreation",
    completed: true,
  },
  {
    title: "Nadan Curry Chatti Hotel",
    description:
      "A digital presence for a traditional Kerala restaurant focused on increasing local discovery and direct customer engagement. Built to highlight menu offerings, improve search visibility, and drive dine-in and takeaway conversions through a clean, mobile-first experience.",
    tags: ["Restaurant", "Local business", "SEO", "Conversion"],
    platform: "web",
    mobile_image: "/nadancurrychatti_mobile.png",
    desktop_image: "/nadancurrychatti_desktop.png",
    icon: "/cq_icon.png",
    live_link: "https://nadancurrychatti.com",
    year: "2026",
    industry: "Food & Hospitality",
    completed: true,
  },
  {
    title: "Zukomi",
    description:
      "A modern spoken English learning platform built on an MLM-driven growth model. Designed to enable users to learn communication skills while earning through referrals — combining structured learning content, progress tracking, and network-based expansion for rapid user acquisition.",
    tags: ["EdTech", "MLM", "Learning platform", "Growth system"],
    platform: "web",
    mobile_image: "/zukomi_mobile.png",
    desktop_image: "/zukomi_desktop.png",
    icon: "/zukomi_icon.png",
    live_link: "https://www.zukomi.com",
    year: "2026",
    industry: "EdTech",
    completed: true,
  },
  {
    title: "Tydy Laundry Service",
    description:
      "An operations platform for a laundry service combining an admin dashboard with a WhatsApp automation bot. Built to manage orders, customer communication, and service workflows end-to-end — with Zoho Books integration for automated billing, invoicing, and financial tracking.",
    tags: ["Admin panel", "WhatsApp bot", "Automation", "Zoho Books"],
    platform: "automation",
    mobile_image: "/tydy_mobile.png",
    desktop_image: "/tydy_desktop.png",
    icon: "/tydy_icon.png",
    live_link: "https://wa.me/918590291351",
    year: "2026",
    industry: "Local Services & Operations",
    completed: true,
  },
  {
    title: "Bodha AI Medical Coding",
    description:
      "An AI-powered medical coding platform designed to assist healthcare providers in accurately converting clinical data into standardized billing codes. Built to streamline coding workflows, reduce manual errors, and improve claim processing efficiency — with a focus on speed, compliance, and operational scalability.",
    tags: ["AI", "Healthcare", "Medical coding", "Automation"],
    platform: "web",
    mobile_image: "/bodha_mobile.png",
    desktop_image: "/bodha_desktop.png",
    icon: "/cq_icon.png",
    live_link: "https://bodha.ciltriq.com",
    year: "2026",
    industry: "Healthcare & AI",
    completed: false,
  },
  {
    title: "Lifepartner Again",
    description:
      "A matrimony platform designed specifically for middle-aged women seeking a second chance at companionship. Built to provide a safe, respectful, and trust-driven environment — focusing on meaningful connections, verified profiles, and a supportive experience tailored for a new phase of life.",
    tags: ["Matrimony", "Women-focused", "Trust & Safety", "Matching"],
    platform: "mobile",
    mobile_image: "/lifepartneragain_mobile.png",
    desktop_image: "/lifepartneragain_desktop.png",
    icon: "/lifepartneragain_icon.png",
    live_link:
      "https://play.google.com/store/apps/details?id=com.ciltriq.arikil&hl=en_IN",
    year: "2026",
    industry: "Social & Relationships",
    completed: false,
  },
  {
    title: "Arikil Malayalam AI Friend",
    description:
      "A Malayalam-first conversational AI app designed to provide a natural, culturally relevant chat experience. Built to enable users to interact in their native language with high-quality responses — achieving 1K+ downloads and growing as an accessible AI companion for everyday conversations.",
    tags: ["AI", "Conversational AI", "Mobile app", "Malayalam"],
    platform: "mobile",
    mobile_image: "/arikil_mobile.png",
    desktop_image: "/arikil_desktop.png",
    icon: "/arikil_icon.png",
    live_link:
      "https://play.google.com/store/apps/details?id=com.ciltriq.arikil&hl=en_IN",
    year: "2026",
    industry: "Consumer AI",
    completed: true,
  },
];

const platformFilters = [
  { key: "all" as const, label: "All", icon: Layers },
  { key: "web" as const, label: "Web", icon: Globe },
  { key: "mobile" as const, label: "App", icon: Smartphone },
  { key: "automation" as const, label: "Automation", icon: Bot },
];

export default function PortfolioPage() {
  const [activePlatform, setActivePlatform] = useState<
    "all" | "web" | "mobile" | "automation"
  >("all");

  const filteredProjects = projects.filter(
    (p) => activePlatform === "all" || p.platform === activePlatform
  );

  const completedCount = projects.filter((p) => p.completed).length;
  const inProgressCount = projects.filter((p) => !p.completed).length;

  return (
    <main className="pt-24 pb-20">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <DotPattern dotColor="rgba(37,99,235,0.07)" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade>
            <div className="text-center mb-10">
              <span className="font-body text-xs uppercase tracking-widest text-primary font-medium">
                Portfolio
              </span>

              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-ctext-primary mt-3 mb-4">
                Work That Speaks for Itself
              </h1>

              <p className="font-body text-ctext-secondary max-w-2xl mx-auto">
                Real software systems built for real businesses — from SaaS
                platforms and ecommerce stores to AI tools and automation
                workflows.
              </p>
            </div>
          </BlurFade>

          {/* Summary pills */}
          <BlurFade delay={0.15}>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border card-shadow font-body text-sm">
                <span className="font-heading font-bold text-ctext-primary">
                  {projects.length}
                </span>
                <span className="text-ctext-muted">Projects</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border card-shadow font-body text-sm">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-heading font-bold text-ctext-primary">
                  {completedCount}
                </span>
                <span className="text-ctext-muted">Delivered</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border card-shadow font-body text-sm">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="font-heading font-bold text-ctext-primary">
                  {inProgressCount}
                </span>
                <span className="text-ctext-muted">In Progress</span>
              </div>
            </div>
          </BlurFade>

          {/* Platform Filter */}
          <BlurFade delay={0.25}>
            <div className="flex gap-2 flex-wrap items-center justify-center">
              {platformFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActivePlatform(filter.key)}
                  className={`group inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border transition-all duration-300 font-body font-medium ${
                    activePlatform === filter.key
                      ? "bg-foreground text-background border-foreground"
                      : "bg-white text-ctext-secondary border-border hover:border-foreground/30 card-shadow"
                  }`}
                >
                  <filter.icon
                    size={15}
                    strokeWidth={1.5}
                    className={
                      activePlatform === filter.key
                        ? "text-background"
                        : "text-ctext-muted group-hover:text-ctext-primary transition-colors"
                    }
                  />
                  {filter.label}
                </button>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="relative py-4 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <BlurFade
                key={`${activePlatform}-${project.title}`}
                delay={0.06 * i}
              >
                <div className="group rounded-2xl border bg-white overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-primary/15">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px] sm:min-h-[320px] lg:min-h-[380px]">
                    {/* ── IMAGE SIDE ── */}
                    <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-border min-h-[220px] sm:min-h-[260px] bg-gradient-to-br from-slate-50 to-blue-50/20">
                      {/* Desktop screenshot */}
                      <div className="w-full h-full relative transition-transform duration-700 scale-[0.92] group-hover:scale-[0.94]">
                        <Image
                          src={project.desktop_image}
                          alt={`${project.title} desktop`}
                          fill
                          className="object-cover object-top-left rounded-md"
                        />
                      </div>

                      {/* Mobile screenshot */}
                      <div className="absolute bottom-12 sm:bottom-16 lg:bottom-14 right-[-10px] sm:right-[-30px] lg:right-[-40px] w-24 sm:w-36 md:w-44 lg:w-52 transition-transform duration-700 group-hover:translate-x-[-6px] group-hover:-translate-y-1">
                        <Image
                          src={project.mobile_image}
                          alt={`${project.title} mobile`}
                          width={256}
                          height={512}
                          className="w-full h-auto object-contain drop-shadow-xl"
                        />
                      </div>

                      {/* Platform badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-sm">
                        {project.platform === "web" && (
                          <Globe
                            size={12}
                            strokeWidth={1.5}
                            className="text-primary"
                          />
                        )}
                        {project.platform === "mobile" && (
                          <Smartphone
                            size={12}
                            strokeWidth={1.5}
                            className="text-primary"
                          />
                        )}
                        {project.platform === "automation" && (
                          <Bot
                            size={12}
                            strokeWidth={1.5}
                            className="text-primary"
                          />
                        )}
                        <span className="font-body text-[10px] font-medium text-ctext-secondary uppercase tracking-wide">
                          {project.platform === "mobile" ? "App" : project.platform}
                        </span>
                      </div>
                    </div>

                    {/* ── CONTENT SIDE ── */}
                    <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        {/* Icon + meta */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-9 h-9 rounded-xl border border-border overflow-hidden flex-shrink-0 bg-muted relative">
                            <Image
                              src={project.icon}
                              alt={`${project.title} icon`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="font-body text-[11px] text-ctext-muted uppercase tracking-wider">
                            {project.industry} · {project.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-ctext-primary mb-3">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="font-body text-ctext-secondary text-xs sm:text-sm leading-relaxed mb-5">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="font-body text-[11px] px-2.5 py-1 rounded-full border bg-slate-50 text-ctext-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-3">
                        {project.completed ? (
                          <a
                            href={project.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium font-body transition-all hover:opacity-90"
                          >
                            <span>View Live</span>
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-foreground text-xs transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </span>
                          </a>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60 text-sm font-medium font-body">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            In Progress
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))
          ) : (
            <BlurFade>
              <div className="text-center py-20">
                <Layers
                  size={48}
                  strokeWidth={1}
                  className="text-ctext-muted mx-auto mb-4 opacity-40"
                />
                <p className="font-body text-ctext-muted">
                  No projects found for this filter.
                </p>
              </div>
            </BlurFade>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <DotPattern dotColor="rgba(0,0,0,0.04)" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <BlurFade>
            <Briefcase
              size={40}
              strokeWidth={1.5}
              className="text-primary mx-auto mb-5"
            />

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ctext-primary mb-3">
              Have a Project in Mind?
            </h2>

            <p className="font-body text-ctext-secondary mb-8 max-w-lg mx-auto">
              We build software systems that solve real business problems.
              Let&apos;s discuss your idea.
            </p>

            <Link href="/contact">
              <RainbowButton className="text-base px-8 py-4">
                Start a Project
                <ArrowRight
                  size={20}
                  strokeWidth={1.5}
                  className="ml-2"
                />
              </RainbowButton>
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
