import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { LinkedinLogo, InstagramLogo, XLogo, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const footerServices = [
  "AI Automation",
  "App Development",
  "Web Development",
  "AI Chatbots",
  "Revenue Audit",
  "Marketing Automation",
];

const footerCompany = [
  { label: "Portfolio", path: "/portfolio" },
  { label: "Partners", path: "/partners" },
  { label: "Automation", path: "/automation" },
  { label: "Contact", path: "/contact" },
  { label: "Services", path: "/services" },
];

const Footer = () => {
  return (
    <footer className="relative bg-ctext-primary text-white overflow-hidden">
      <RetroGrid />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="mb-4">
              <span className="font-heading font-bold text-xl">Ciltriq Technologies</span>
            </div>
            <p className="font-body text-sm text-ctext-muted mb-6">
              Intelligent solutions for ambitious businesses
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: LinkedinLogo, label: "LinkedIn" },
                { Icon: InstagramLogo, label: "Instagram" },
                { Icon: XLogo, label: "Twitter" },
                { Icon: WhatsappLogo, label: "WhatsApp" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white/60 hover:text-primary transition-colors duration-200"
                >
                  <Icon size={20} weight="regular" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link to="/services" className="font-body text-sm text-ctext-muted hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="font-body text-sm text-ctext-muted hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-ctext-muted">
                <Phone size={16} strokeWidth={1.5} /> +91 88483 00000
              </li>
              <li className="flex items-center gap-2 text-sm text-ctext-muted">
                <EnvelopeSimple size={16} weight="regular" /> hello@ciltriq.com
              </li>
              <li className="flex items-center gap-2 text-sm text-ctext-muted">
                <MapPin size={16} strokeWidth={1.5} /> Kerala, India
              </li>
            </ul>
            <div className="mt-5">
              <a href="https://wa.me/918848300000" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors font-body text-sm font-medium">
                  <WhatsappLogo size={20} weight="fill" className="text-white" />
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ctext-muted">
            2025 Ciltriq Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-ctext-muted hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-ctext-muted hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
