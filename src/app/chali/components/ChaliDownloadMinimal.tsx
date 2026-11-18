"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { sounds } from "../utils/soundEffects";

export function ChaliDownloadMinimal() {
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = () => {
    sounds.playSuccess();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <section id="download" className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        
        <h2 className="text-2xl sm:text-4xl font-bold text-white font-heading tracking-tight">
          Ready for pure chali?
        </h2>

        <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
          Free to use. Settle scores with friends, chat with Damu, and test your meme knowledge anywhere.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleClick}
            className="px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
          >
            <span>Google Play</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleClick}
            className="px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
          >
            <span>App Store</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="#experience"
            onClick={() => sounds.playPop()}
            className="px-5 py-2.5 rounded-lg bg-white/[0.06] text-zinc-300 font-medium text-xs sm:text-sm hover:bg-white/[0.1] hover:text-white border border-white/[0.08] transition-colors"
          >
            Play Web Version
          </a>
        </div>

        {downloaded && (
          <div className="text-xs text-emerald-400 font-medium inline-flex items-center gap-1.5 animate-in fade-in">
            <Check className="w-3.5 h-3.5" />
            <span>Store link opened. Enjoy the comedy!</span>
          </div>
        )}

      </div>
    </section>
  );
}
