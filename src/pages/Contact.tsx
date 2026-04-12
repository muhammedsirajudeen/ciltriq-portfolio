import { useState } from "react";
import {
  User, Building2, MessageSquare, ArrowRight, BadgeCheck, Zap
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ShineBorder } from "@/components/ui/shine-border";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Ripple } from "@/components/ui/ripple";

const businessTypes = ["Retail", "Healthcare", "EdTech", "Real Estate", "Logistics", "Finance", "Other"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", whatsapp: "", business: "", challenge: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (form.name && form.whatsapp) {
      setSubmitted(true);
    }
  };

  return (
    <main className="pt-24 pb-20">
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <GridPattern strokeColor="rgba(37,99,235,0.10)" />
        <Ripple className="opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <BlurFade>
            <ShineBorder>
              <div className="px-6 sm:px-12 lg:px-16 py-12 sm:py-16">
                {submitted ? (
                  <div className="text-center">
                    <BadgeCheck size={64} strokeWidth={1.5} className="text-secondary mx-auto mb-4" />
                    <h2 className="font-heading text-3xl font-bold text-ctext-primary mb-3">
                      Audit Booked Successfully
                    </h2>
                    <p className="font-body text-ctext-secondary">
                      Our team will reach out to you on WhatsApp within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-10">
                      <Zap size={48} strokeWidth={1.5} className="text-primary mx-auto mb-4" />
                      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ctext-primary mb-3">
                        Ready to Fix Your Revenue Leaks?
                      </h1>
                      <p className="font-body text-ctext-secondary mb-2">
                        Get a free 30-minute business audit. No commitment, just clarity.
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <NumberTicker value={30} className="text-3xl text-primary" />
                        <span className="font-body text-ctext-secondary">minute free audit</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="relative">
                        <User size={18} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-ctext-muted" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>

                      <div className="relative">
                        <WhatsappLogo size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ctext-muted" />
                        <input
                          type="tel"
                          placeholder="+91 WhatsApp Number"
                          value={form.whatsapp}
                          onChange={(e) => handleChange("whatsapp", e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>

                      <div className="relative">
                        <Building2 size={18} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-ctext-muted" />
                        <select
                          value={form.business}
                          onChange={(e) => handleChange("business", e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                        >
                          <option value="">Select Business Type</option>
                          {businessTypes.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare size={16} strokeWidth={1.5} className="text-ctext-muted" />
                          <span className="font-body text-sm text-ctext-muted">Describe your biggest challenge</span>
                        </div>
                        <textarea
                          placeholder="Tell us about your biggest business challenge or revenue problem..."
                          value={form.challenge}
                          onChange={(e) => handleChange("challenge", e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                        />
                      </div>

                      <ShimmerButton variant="primary" className="w-full py-4 text-base" onClick={handleSubmit}>
                        Book My Free Audit
                        <ArrowRight size={20} strokeWidth={1.5} />
                      </ShimmerButton>
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
};

export default Contact;
