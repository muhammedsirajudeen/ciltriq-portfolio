"use client";

import { useState, useEffect, useRef } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  type: "client" | "partnership";
  platform: "web" | "mobile";
  mobile_image: string;
  desktop_image: string;
  icon: string;
  live_link: string;
  year: string;
  industry: string;
};

const projects: Project[] = [
  {
    title: "Toobikes",
    description:
      "A scooty rental platform based in Kannur, Kerala. Built as a web application to manage bookings, real-time availability, and customer interactions — streamlining the rental experience end-to-end.",
    tags: ["Booking system", "Rental", "Dashboard", "Admin panel"],
    type: "client",
    platform: "web",
    mobile_image: "/toobikes_mobile_image.png",
    desktop_image: "/toobikes_desktop.png",
    icon: "/toobikes_icon.png",
    live_link: "https://toobikes.in",
    year: "2024",
    industry: "Transport & Mobility",
  },
];

export default function Projects() {
  const [activeType, setActiveType] = useState<"client" | "partnership">("client");
  const [activePlatform, setActivePlatform] = useState<"all" | "web" | "mobile">("all");

  // 👇 animation state per card
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
    const typeMatch = p.type === activeType;
    const platformMatch = activePlatform === "all" || p.platform === activePlatform;
    return typeMatch && platformMatch;
  });

  const stats = [
    { label: "Total projects", value: projects.length },
    { label: "Live platforms", value: projects.filter((p) => p.live_link).length },
    { label: "Industries", value: new Set(projects.map((p) => p.industry)).size },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* TYPE FILTER */}
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground mr-1">Type</span>
          {(["client", "partnership"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeType === type
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/40"
              }`}
            >
              {type === "client" ? "Client projects" : "Partnership projects"}
            </button>
          ))}
        </div>

        {/* PLATFORM FILTER */}
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-xs uppercase tracking-widest text-muted-foreground mr-1">Platform</span>
          {(["all", "web", "mobile"] as const).map((platform) => (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`px-4 py-1.5 text-sm rounded-full border transition ${
                activePlatform === platform
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
                className={`rounded-2xl border bg-background overflow-hidden transition-all duration-700 ${
                  visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">

                  {/* VISUAL SIDE */}
                  <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-border min-h-[240px] lg:min-h-auto">

                    {/* DESKTOP */}
                    <img
                      src={project.desktop_image}
                      alt={`${project.title} desktop`}
                      className={`w-full h-full object-cover object-top-left transition-all duration-700 ${
                        visible[i]
                          ? "scale-[0.92] opacity-100"
                          : "scale-[0.85] opacity-0"
                      }`}
                    />

                    {/* MOBILE */}
                    <div
                      className={`absolute bottom-4 right-[-60px] md:right-[-60px] w-48 md:w-64 transition-all duration-700 delay-150 ${
                        visible[i]
                          ? "translate-x-0 opacity-100"
                          : "translate-x-12 opacity-0"
                      }`}
                    >
                      <img
                        src={project.mobile_image}
                        alt={`${project.title} mobile`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`p-8 flex flex-col justify-between transition-all duration-700 delay-200 ${
                      visible[i]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-lg border border-border overflow-hidden flex-shrink-0 bg-muted">
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

                      <h3 className="text-2xl font-bold tracking-tight mb-3">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full border text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
                      >
                        View live
                      </a>
                      <button className="px-5 py-2 rounded-full border text-sm text-muted-foreground hover:border-foreground/40 transition">
                        Case study
                      </button>
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