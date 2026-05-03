import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Partners", path: "/partners" },
  { label: "Automation", path: "/automation" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-1.5">
            <span className="font-heading font-bold text-xl text-gradient">Ciltriq</span>
            <span className="font-body text-sm text-ctext-muted">Technologies</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-body text-sm transition-colors duration-200",
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-ctext-secondary hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <RainbowButton className="text-xs">
                Get Free Consultation
                <ArrowRight size={16} strokeWidth={1.5} />
              </RainbowButton>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass-nav border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block font-body text-base py-2 transition-colors",
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-ctext-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="block pt-2">
              <RainbowButton className="w-full text-sm">
                Get Free Consultation
                <ArrowRight size={16} strokeWidth={1.5} />
              </RainbowButton>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
