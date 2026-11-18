"use client";

import { MEME_CHARACTERS } from "../utils/chaliData";

export function ChaliCharactersMinimal() {
  const characters = MEME_CHARACTERS.slice(0, 4);

  return (
    <section id="roster" className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Iconic Personas
          </h2>
          <p className="text-zinc-400 text-sm">
            Trained on classic Mollywood dialogues, regional slangs, and signature mannerisms.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {characters.map((char) => (
            <div
              key={char.id}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.14] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{char.avatarEmoji}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white">{char.name}</h3>
                      <div className="text-[11px] text-zinc-500">{char.actor}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">
                    {char.movie.split("(")[0]}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 font-normal leading-relaxed">
                  &ldquo;{char.tagline}&rdquo;
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/[0.04] text-[11px] text-amber-400/90 font-sans">
                {char.nameMalayalam}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
