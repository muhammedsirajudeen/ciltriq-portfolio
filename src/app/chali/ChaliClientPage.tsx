"use client";

import { useState } from "react";
import { ChaliNavbar } from "./components/ChaliNavbar";
import { ChaliHero } from "./components/ChaliHero";
import { ChaliAppConsole } from "./components/ChaliAppConsole";
import { ChaliCharactersMinimal } from "./components/ChaliCharactersMinimal";
import { ChaliDownloadMinimal } from "./components/ChaliDownloadMinimal";
import { ChaliFooter } from "./components/ChaliFooter";
import { sounds } from "./utils/soundEffects";

export function ChaliClientPage() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.setSoundEnabled(next);
    if (next) sounds.playPop();
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 font-body antialiased selection:bg-amber-400 selection:text-zinc-950">
      {/* Minimal Header */}
      <ChaliNavbar soundEnabled={soundEnabled} onToggleSound={handleToggleSound} />

      {/* Main Flow: Hero -> Live Unified Console -> Characters -> Download */}
      <main>
        <ChaliHero />
        <ChaliAppConsole />
        <ChaliCharactersMinimal />
        <ChaliDownloadMinimal />
      </main>

      {/* Minimal Footer */}
      <ChaliFooter />
    </div>
  );
}
