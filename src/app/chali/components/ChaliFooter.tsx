"use client";

import Link from "next/link";
import { sounds } from "../utils/soundEffects";

export function ChaliFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-10 bg-[#07090e] text-zinc-500 text-xs">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand & Tribute */}
        <div className="flex items-center gap-2">
          <Link
            href="/chali"
            onClick={() => sounds.playPop()}
            className="font-bold text-zinc-300 font-heading hover:text-white transition-colors"
          >
            chali.app
          </Link>
          <span>•</span>
          <span>A parody homage to Mollywood comedy legends.</span>
        </div>

        {/* Links */}
        <div className="flex items-center flex-wrap gap-4 text-zinc-400">
          <Link
            href="/chali#experience"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Demo
          </Link>
          <Link
            href="/chali#roster"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Characters
          </Link>
          <Link
            href="/chali/privacy-policy"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/chali/terms-and-conditions"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/chali#download"
            onClick={() => sounds.playPop()}
            className="hover:text-white transition-colors"
          >
            Download
          </Link>
        </div>

      </div>
    </footer>
  );
}
