"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Volume2, VolumeX, ArrowRight, Menu, X } from "lucide-react";
import { sounds } from "../utils/soundEffects";

interface ChaliNavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export function ChaliNavbar({ soundEnabled, onToggleSound }: ChaliNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#090b10]/80 backdrop-blur-md border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#hero"
          onClick={() => sounds.playPop()}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-sm group-hover:scale-105 transition-transform">
            🔨
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold tracking-tight text-white font-heading">
              chali<span className="text-amber-400">.</span>
            </span>
            <span className="text-xs text-zinc-500 font-mono">app</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-400">
          <a
            href="#experience"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Demo
          </a>
          <a
            href="#roster"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Characters
          </a>
          <Link
            href="/chali/privacy-policy"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/chali/terms-and-conditions"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Terms
          </Link>
          <a
            href="#download"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Get App
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSound}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            title={soundEnabled ? "Mute audio" : "Enable audio"}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-amber-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-zinc-500" />
            )}
          </button>

          <a
            href="#download"
            onClick={() => sounds.playPop()}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
          >
            <span>Download</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#090b10] border-b border-white/10 px-6 py-4 space-y-3 text-sm">
          <a
            href="#experience"
            onClick={() => {
              sounds.playPop();
              setMobileOpen(false);
            }}
            className="block text-zinc-300 hover:text-white py-1"
          >
            Interactive Demo
          </a>
          <a
            href="#roster"
            onClick={() => {
              sounds.playPop();
              setMobileOpen(false);
            }}
            className="block text-zinc-300 hover:text-white py-1"
          >
            Characters
          </a>
          <Link
            href="/chali/privacy-policy"
            onClick={() => {
              sounds.playPop();
              setMobileOpen(false);
            }}
            className="block text-zinc-300 hover:text-white py-1"
          >
            Privacy Policy
          </Link>
          <Link
            href="/chali/terms-and-conditions"
            onClick={() => {
              sounds.playPop();
              setMobileOpen(false);
            }}
            className="block text-zinc-300 hover:text-white py-1"
          >
            Terms & Conditions
          </Link>
          <a
            href="#download"
            onClick={() => {
              sounds.playPop();
              setMobileOpen(false);
            }}
            className="block text-amber-400 font-medium py-1"
          >
            Download App
          </a>
        </div>
      )}
    </header>
  );
}
