"use client";

import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

import {
  LinkedinLogo,
  InstagramLogo,
  XLogo,
  WhatsappLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

import { RetroGrid } from "@/components/ui/retro-grid";

const footerServices = [
  "Custom Software Development",
  "Internal Tools",
  "AI Automation",
  "Web Applications",
  "Mobile Applications",
  "System Integrations",
];

const footerCompany = [
  { label: "Portfolio", path: "/portfolio" },
  { label: "Partners", path: "/partners" },
  { label: "Services", path: "/services" },
  { label: "Automation", path: "/automation" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ctext-primary text-white">
      <RetroGrid />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <div className="mb-4">
              <span className="font-heading text-xl font-semibold tracking-tight">
                Ciltriq Technologies
              </span>
            </div>

            <p className="mb-6 max-w-sm font-body text-sm leading-relaxed text-white/60">
              We build scalable software systems, automation platforms, internal
              tools, and digital products for growing businesses.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/ciltriq/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 transition-colors duration-200 hover:text-white"
              >
                <LinkedinLogo size={20} weight="regular" />
              </a>

              <a
                href="https://www.instagram.com/ciltriq_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 transition-colors duration-200 hover:text-white"
              >
                <InstagramLogo size={20} weight="regular" />
              </a>

              <a
                href="https://wa.me/917907140006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white/60 transition-colors duration-200 hover:text-white"
              >
                <WhatsappLogo size={20} weight="regular" />
              </a>

              {/* <a
                href="#"
                aria-label="Twitter"
                className="text-white/60 transition-colors duration-200 hover:text-white"
              >
                <XLogo size={20} weight="regular" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h4>

            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="font-body text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h4>

            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className="font-body text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={16} strokeWidth={1.5} />
                <span>+91 7907140006</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-white/60">
                <EnvelopeSimple size={16} weight="regular" />
                <span>development@ciltriq.com</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={16} strokeWidth={1.5} />
                <span>Kerala, India</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://wa.me/917907140006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-body text-sm font-medium text-black transition-all hover:opacity-90"
              >
                <WhatsappLogo
                  size={18}
                  weight="fill"
                  className="text-[#25D366]"
                />

                Start Conversation
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-body text-xs text-white/50">
            © 2026 Ciltriq Technologies. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-xs text-white/50 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="font-body text-xs text-white/50 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;