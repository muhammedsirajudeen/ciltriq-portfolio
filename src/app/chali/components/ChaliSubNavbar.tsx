"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ShieldCheck, FileText } from "lucide-react";
import { sounds } from "../utils/soundEffects";

export function ChaliSubNavbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090b10]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand & Breadcrumb */}
        <div className="flex items-center gap-3">
          <Link
            href="/chali"
            onClick={() => sounds.playPop()}
            className="flex items-center gap-2 group text-zinc-400 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-sm group-hover:scale-105 transition-transform">
              🔨
            </div>
            <span className="text-base font-bold text-white font-heading">
              chali<span className="text-amber-400">.</span>app
            </span>
          </Link>

          <span className="text-zinc-600 hidden sm:inline">/</span>
          <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
            {pathname?.includes("privacy") ? "privacy-policy" : "terms-and-conditions"}
          </span>
        </div>

        {/* Nested Navigation Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <Link
              href="/chali/privacy-policy"
              onClick={() => sounds.playPop()}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                pathname === "/chali/privacy-policy"
                  ? "bg-white text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Privacy Policy</span>
              <span className="sm:hidden">Privacy</span>
            </Link>

            <Link
              href="/chali/terms-and-conditions"
              onClick={() => sounds.playPop()}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                pathname === "/chali/terms-and-conditions"
                  ? "bg-white text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Terms & Conditions</span>
              <span className="sm:hidden">Terms</span>
            </Link>
          </div>

          <Link
            href="/chali"
            onClick={() => sounds.playPop()}
            className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1 py-1.5 px-2.5 rounded-lg hover:bg-white/[0.05] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Back to App</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
