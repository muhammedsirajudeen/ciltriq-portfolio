"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { sounds } from "../utils/soundEffects";

export function ChaliHero() {
  return (
    <section id="hero" className="pt-32 pb-14 sm:pt-40 sm:pb-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Mallu Meme Characters • AI Chat & Games</span>
          <span className="text-zinc-600">/</span>
          <span className="text-amber-400/90 font-mono">ചളി</span>
        </div>

        {/* Clean, Impactful Headline */}
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading">
          Where Mollywood legends <br className="hidden sm:inline" />
          live, chat, and roast.
        </h1>

        {/* Minimal Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-body font-normal leading-relaxed">
          Chat 1-on-1 with <span className="text-zinc-200 font-medium">Dashamoolam Damu</span>, get redirected to California by <span className="text-zinc-200 font-medium">Gafoor Ka Dosth</span>, and play fast-paced Mollywood dialogue trivia.
        </p>

        {/* Primary CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#experience"
            onClick={() => sounds.playPop()}
            className="px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
          >
            <span>Try Live Console</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#download"
            onClick={() => sounds.playPop()}
            className="px-5 py-2.5 rounded-lg bg-white/[0.06] text-zinc-300 font-medium text-sm hover:bg-white/[0.1] hover:text-white border border-white/[0.08] transition-colors"
          >
            Get the App
          </a>
        </div>

      </div>
    </section>
  );
}
