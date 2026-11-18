import type { Metadata } from "next";
import Link from "next/link";
import { ChaliSubNavbar } from "../components/ChaliSubNavbar";
import { ChaliFooter } from "../components/ChaliFooter";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Chali App",
  description: "Privacy policy and data governance practices for Chali App (ചളി). Zero data selling, ephemeral chat processing, and total privacy for Mollywood meme conversations.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChaliPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 font-body antialiased selection:bg-amber-400 selection:text-zinc-950 flex flex-col justify-between">
      {/* Nested Navbar */}
      <ChaliSubNavbar />

      {/* Main Content */}
      <main className="pt-28 pb-20 sm:pt-36 sm:pb-24 flex-1">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          
          {/* Header */}
          <div className="space-y-3 pb-8 border-b border-white/[0.08]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero Data Selling • Privacy First</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-zinc-400 text-sm">
              Effective Date: November 2026 • Chali App (ചളി)
            </p>
          </div>

          {/* Policy Document */}
          <div className="space-y-8 text-sm text-zinc-300 leading-relaxed font-body">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white font-heading">
                1. Our Core Privacy Philosophy
              </h2>
              <p className="text-zinc-400">
                At Chali App, we believe that sharing a laugh with Dashamoolam Damu, asking Ramanan for dubious career guidance, or getting roasted by Gafoor Ka Dosth is strictly between you and the characters. We do not monetize your personal information, train public models on your private messages, or sell telemetry data to third-party ad networks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white font-heading">
                2. Information We Do Not Collect
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>
                  <strong className="text-zinc-200">Conversation Prompts & Chat Logs:</strong> All interactions with meme AI personas are processed in ephemeral memory. Once the response is rendered, the chat context remains on your local client device only.
                </li>
                <li>
                  <strong className="text-zinc-200">Microphone Audio Recordings:</strong> Speech interactions and soundboard playback utilize client-side Web Audio API synthesis. We never record, upload, or process your microphone audio on external cloud servers.
                </li>
                <li>
                  <strong className="text-zinc-200">Personal Identifiers:</strong> We do not mandate phone numbers, government IDs, or social security details to play the game or browse the soundboard.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white font-heading">
                3. On-Device Storage & Game Progress
              </h2>
              <p className="text-zinc-400">
                To track your high scores in <em>Chali Rapido</em> trivia, streak multipliers, and customized soundboard favorites, Chali App stores minimal state locally on your browser or device using standard <code className="text-amber-400 font-mono text-xs">LocalStorage</code> / <code className="text-amber-400 font-mono text-xs">IndexedDB</code>. You can completely erase this data at any point by clearing your browser cache or resetting app preferences.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white font-heading">
                4. Anonymous Diagnostics & Server Health
              </h2>
              <p className="text-zinc-400">
                We may collect aggregated, non-personally identifiable diagnostic logs (such as HTTP response latencies and crash counts) to keep the infrastructure stable during high-traffic multiplayer quiz matches. These metrics are strictly aggregated and cannot be traced back to individual users.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white font-heading">
                5. Third-Party App Store Platforms
              </h2>
              <p className="text-zinc-400">
                When installing Chali App through Google Play or Apple App Store, their platform-specific terms and privacy practices govern the installation download transaction. We do not embed covert advertising SDKs or cross-site tracking trackers within the app.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white font-heading">
                6. Contact Our Privacy Desk
              </h2>
              <p className="text-zinc-400">
                If you have questions regarding this privacy document or wish to verify data erasure procedures, feel free to contact us at:
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-amber-400">
                privacy@chali.app
              </div>
            </section>

          </div>

          {/* Quick Switch to Terms */}
          <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-zinc-500">Need legal details?</span>
            <Link
              href="/chali/terms-and-conditions"
              className="text-xs text-zinc-300 hover:text-white font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Read Terms & Conditions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <ChaliFooter />
    </div>
  );
}
