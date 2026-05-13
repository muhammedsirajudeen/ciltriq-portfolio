"use client";

import { useState } from "react";
import {
  User,
  Building2,
  MessageSquare,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

import { BlurFade } from "@/components/ui/blur-fade";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ShineBorder } from "@/components/ui/shine-border";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Ripple } from "@/components/ui/ripple";

const businessTypes = [
  "Retail",
  "Healthcare",
  "EdTech",
  "Real Estate",
  "Logistics",
  "Finance",
  "Manufacturing",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    business: "",
    challenge: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.whatsapp) return;

    const message = `Hello Ciltriq Technologies,

Name: ${form.name}
WhatsApp: ${form.whatsapp}
Industry: ${form.business || "Not specified"}

Requirement:
${form.challenge || "Not specified"}

I would like to discuss this further.`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/917907140006?text=${encodedMessage}`;

    setSubmitted(true);

    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 500);
  };

  return (
    <main className="pt-24 pb-20">
      <section className="relative overflow-hidden py-16 lg:py-24">
        <GridPattern strokeColor="rgba(37,99,235,0.08)" />
        <Ripple className="opacity-20" />

        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <BlurFade>
            <ShineBorder>
              <div className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
                {submitted ? (
                  <div className="text-center">
                    <BadgeCheck
                      size={60}
                      strokeWidth={1.5}
                      className="mx-auto mb-5 text-secondary"
                    />

                    <h2 className="mb-3 font-heading text-3xl font-semibold text-ctext-primary">
                      Redirecting to WhatsApp
                    </h2>

                    <p className="font-body text-ctext-secondary">
                      Your information has been prepared for the conversation.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-12 text-center">
                      <BriefcaseBusiness
                        size={44}
                        strokeWidth={1.5}
                        className="mx-auto mb-5 text-primary"
                      />

                      <h1 className="mb-4 font-heading text-3xl font-semibold tracking-tight text-ctext-primary sm:text-4xl lg:text-5xl">
                        Discuss Your Software Requirements
                      </h1>

                      <p className="mx-auto max-w-2xl font-body leading-relaxed text-ctext-secondary">
                        We work with businesses to design and build scalable
                        software systems, internal platforms, automation tools,
                        AI integrations, and customer-facing applications.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div className="relative">
                        <User
                          size={18}
                          strokeWidth={1.5}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-ctext-muted"
                        />

                        <input
                          type="text"
                          placeholder="Full Name"
                          value={form.name}
                          onChange={(e) =>
                            handleChange("name", e.target.value)
                          }
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 font-body text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div className="relative">
                        <WhatsappLogo
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-ctext-muted"
                        />

                        <input
                          type="tel"
                          placeholder="WhatsApp Number"
                          value={form.whatsapp}
                          onChange={(e) =>
                            handleChange("whatsapp", e.target.value)
                          }
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 font-body text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div className="relative">
                        <Building2
                          size={18}
                          strokeWidth={1.5}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-ctext-muted"
                        />

                        <select
                          value={form.business}
                          onChange={(e) =>
                            handleChange("business", e.target.value)
                          }
                          className="w-full appearance-none rounded-xl border border-border bg-white py-3 pl-10 pr-4 font-body text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">Select Industry</option>

                          {businessTypes.map((business) => (
                            <option key={business} value={business}>
                              {business}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <MessageSquare
                            size={16}
                            strokeWidth={1.5}
                            className="text-ctext-muted"
                          />

                          <span className="font-body text-sm text-ctext-muted">
                            Project Details
                          </span>
                        </div>

                        <textarea
                          rows={5}
                          value={form.challenge}
                          onChange={(e) =>
                            handleChange("challenge", e.target.value)
                          }
                          placeholder="Describe your current systems, operational challenges, product idea, or the software you are looking to build."
                          className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 font-body text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <RainbowButton
                        onClick={handleSubmit}
                        className="w-full py-4 text-base font-medium"
                      >
                        Continue on WhatsApp
                        <ArrowRight
                          size={18}
                          strokeWidth={1.5}
                          className="ml-2"
                        />
                      </RainbowButton>
                    </div>
                  </>
                )}
              </div>
            </ShineBorder>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
