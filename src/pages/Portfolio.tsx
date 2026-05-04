"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
  completed: boolean
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
    live_link: "https://farmsphere.in",
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
    live_link: "https://ciltriq.asairz.com",
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
    title: "Kannur Gardens",
    description:
      "A landing page for an event hall integrated with multiple booking aggregators. Built to showcase venue offerings, drive direct inquiries, and reduce dependency on third-party platforms through clear positioning and lead capture.",
    tags: ["Landing page", "Event hall", "Lead generation", "Aggregators"],
    platform: "web",
    mobile_image: "/kannurgardens_mobile.png",
    desktop_image: "/kannurgardens_desktop.png",
    icon: "/kannurgardens_icon.png",
    live_link: "https://kannurgardens.vercel.app",
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
    live_link: "https://www.kasaragodsportscity.com/",
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
    live_link: "https://www.zukomi.com/",
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
    live_link: "https://wa.me/918590291351",
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
    live_link: "https://play.google.com/store/apps/details?id=com.ciltriq.arikil&hl=en_IN",
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
    live_link: "https://play.google.com/store/apps/details?id=com.ciltriq.arikil&hl=en_IN",
    year: "2026",
    industry: "Consumer AI",
    completed: true,
  },

];

export default function Projects() {
  const [activeType, setActiveType] = useState<"client" | "partnership">("client");
  const [activePlatform, setActivePlatform] = useState<"all" | "web" | "mobile" | "automation">("all");

  const [visible, setVisible] = useState<boolean[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const copy = [...prev];
              copy[index] = true;
              return copy;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const filteredProjects = projects.filter((p) => {
    const platformMatch = activePlatform === "all" || p.platform === activePlatform;
    return platformMatch;
  });

  const stats = [
    { label: "Total projects", value: projects.length },
    { label: "Live platforms", value: projects.filter((p) => p.live_link).length },
    { label: "Industries", value: new Set(projects.map((p) => p.industry)).size },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">

        {/* PLATFORM FILTER */}
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground mr-1">
            Platform
          </span>
          {(["all", "web", "mobile", "automation"] as const).map((platform) => (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full border transition ${activePlatform === platform
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/40"
                }`}
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>

        <hr className="border-border" />

        {/* PROJECTS */}
        <div className="space-y-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className={`rounded-2xl border bg-background overflow-hidden transition-all duration-700 ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">

                  {/* VISUAL SIDE */}
                  <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-border min-h-[200px] sm:min-h-[240px]">

                    {/* DESKTOP */}
                    <img
                      src={project.desktop_image}
                      alt={`${project.title} desktop`}
                      className={`w-full h-full object-cover object-top-left transition-all duration-700 ${visible[i]
                          ? "scale-[0.92] opacity-100"
                          : "scale-[0.85] opacity-0"
                        }`}
                    />

                    {/* MOBILE */}
                    <div
                      className={`absolute bottom-4 sm:bottom-10 lg:bottom-16 right-[-20px] sm:right-[-40px] lg:right-[-60px] w-28 sm:w-40 md:w-52 lg:w-64 transition-all duration-700 delay-150 ${visible[i]
                          ? "translate-x-0 opacity-100"
                          : "translate-x-12 opacity-0"
                        }`}
                    >
                      <img
                        src={project.mobile_image}
                        alt={`${project.title} mobile`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`p-5 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-700 delay-200 ${visible[i]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                      }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4 sm:mb-5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-border overflow-hidden flex-shrink-0 bg-muted">
                          <img
                            src={project.icon}
                            alt={`${project.title} icon`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {project.platform} · {project.year}
                          </p>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 sm:px-3 py-1 rounded-full border text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      {project.completed ? (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium transition hover:opacity-90"
                        >
                          <span>View Live</span>

                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black text-xs transition-transform group-hover:translate-x-0.5">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-muted text-muted-foreground text-sm font-medium cursor-not-allowed opacity-70">
                          In Progress
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-16">
              No projects found for this filter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}