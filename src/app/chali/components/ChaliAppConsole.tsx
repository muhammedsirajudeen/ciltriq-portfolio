"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Gamepad2, Volume2, Send, RotateCcw, Play, CheckCircle2, XCircle, ArrowRight, Sparkles } from "lucide-react";
import { MEME_CHARACTERS, MemeCharacter, CHALI_QUIZ_QUESTIONS, SOUNDBOARD_CLIPS, SoundboardClip } from "../utils/chaliData";
import { sounds } from "../utils/soundEffects";

type TabMode = "chat" | "game" | "soundboard";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  punchlineMalayalam?: string;
}

export function ChaliAppConsole() {
  const [activeTab, setActiveTab] = useState<TabMode>("chat");

  // Chat State
  const [selectedChar, setSelectedChar] = useState<MemeCharacter>(MEME_CHARACTERS[0]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>({
    damu: [
      {
        id: "d1",
        sender: "bot",
        text: "Namaskaram! Contractor Dashamoolam Damu aanu. Entho oru karyam chodhikkanaanu ennu kandittu thonnunnu?",
        punchlineMalayalam: "എല്ലാം ശരിയാക്കിത്തരാം... പക്ഷേ ചുറ്റിക എനിക്ക് വേണം!",
      },
    ],
    gafoor: [
      {
        id: "g1",
        sender: "bot",
        text: "Nee Gafoorkaane ariyumo? Gafoorkaante dosthanaanu njaan. Dubai alla, California-kku ticket ready aanu!",
        punchlineMalayalam: "കര കണ്ടാൽ ചാടിക്കോണം... വേറെ ചോദ്യങ്ങൾ വേണ്ട!",
      },
    ],
    ramanan: [
      {
        id: "r1",
        sender: "bot",
        text: "Muthalali... Muthalaliii! Enne Gangadharan muthalali vilikkunnu. Entha ninakku ariyendathu?",
        punchlineMalayalam: "എന്റെ ഭാഗത്തും തെറ്റുണ്ട്... സമ്മതിച്ചു!",
      },
    ],
    manavalan: [
      {
        id: "m1",
        sender: "bot",
        text: "Manavalan & Sons Global! Engane undu ente oru look? Business-il athinte standard venam!",
        punchlineMalayalam: "മണവാളൻ ആൻഡ് സൺസ്... ലോകോത്തര സംരംഭം!",
      },
    ],
    pavanayi: [
      {
        id: "p1",
        sender: "bot",
        text: "Pavanayi... The professional killer. Suitcase thurakkunno? Switch knife ready aanu!",
        punchlineMalayalam: "പവനായി ശവമായി!",
      },
    ],
  });

  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Game State
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Soundboard State
  const [playingClipId, setPlayingClipId] = useState<string | null>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping, activeTab]);

  // Chat Handlers
  const handleSendChat = (custom?: string) => {
    const text = custom || inputVal.trim();
    if (!text || isTyping) return;

    sounds.playPop();

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
    };

    setChatMessages((prev) => ({
      ...prev,
      [selectedChar.id]: [...(prev[selectedChar.id] || []), userMsg],
    }));

    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      sounds.playPunch();
      const lower = text.toLowerCase();
      const matched = selectedChar.responses.find((r) =>
        r.keywords.some((k) => lower.includes(k))
      );

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: matched ? matched.reply : selectedChar.defaultReply,
        punchlineMalayalam: matched ? matched.punchlineMalayalam : selectedChar.tagline,
      };

      setChatMessages((prev) => ({
        ...prev,
        [selectedChar.id]: [...(prev[selectedChar.id] || []), botMsg],
      }));
      setIsTyping(false);
    }, 700);
  };

  // Game Handlers
  const handleQuizOption = (idx: number) => {
    if (quizAnswered) return;
    setSelectedOpt(idx);
    setQuizAnswered(true);

    if (idx === CHALI_QUIZ_QUESTIONS[quizIdx].correctIndex) {
      sounds.playSuccess();
      setScore((s) => s + 100);
    } else {
      sounds.playBuzzer();
    }
  };

  const handleNextQuestion = () => {
    sounds.playPop();
    if (quizIdx + 1 < CHALI_QUIZ_QUESTIONS.length) {
      setQuizIdx((i) => i + 1);
      setSelectedOpt(null);
      setQuizAnswered(false);
    } else {
      sounds.playSuccess();
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    sounds.playPop();
    setQuizIdx(0);
    setSelectedOpt(null);
    setQuizAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Soundboard Handler
  const handlePlaySound = (clip: SoundboardClip) => {
    sounds.playPunch();
    setPlayingClipId(clip.id);
    sounds.speakQuote(clip.audioSpeech);
    setTimeout(() => setPlayingClipId(null), 2000);
  };

  return (
    <section id="experience" className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Unified Console Container */}
        <div className="rounded-2xl bg-[#0c1017] border border-white/[0.08] shadow-2xl overflow-hidden">
          
          {/* Header Bar with Segmented Control */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#0a0d14]">
            
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
                Live App Preview
              </span>
            </div>

            {/* Segmented Control */}
            <div className="inline-flex p-1 rounded-xl bg-white/[0.05] border border-white/[0.08]">
              <button
                onClick={() => {
                  sounds.playPop();
                  setActiveTab("chat");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === "chat"
                    ? "bg-white text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>AI Chat</span>
              </button>

              <button
                onClick={() => {
                  sounds.playPop();
                  setActiveTab("game");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === "game"
                    ? "bg-white text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Chali Rapido</span>
              </button>

              <button
                onClick={() => {
                  sounds.playPop();
                  setActiveTab("soundboard");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === "soundboard"
                    ? "bg-white text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Soundboard</span>
              </button>
            </div>

          </div>

          {/* TAB 1: AI CHAT */}
          {activeTab === "chat" && (
            <div className="flex flex-col h-[520px]">
              
              {/* Character selection bar */}
              <div className="px-4 py-2.5 bg-black/30 border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto scrollbar-none">
                <span className="text-[11px] text-zinc-500 font-mono uppercase shrink-0">Character:</span>
                {MEME_CHARACTERS.map((char) => {
                  const isSel = char.id === selectedChar.id;
                  return (
                    <button
                      key={char.id}
                      onClick={() => {
                        sounds.playPop();
                        setSelectedChar(char);
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                        isSel
                          ? "bg-amber-400 text-zinc-950 font-bold"
                          : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      <span>{char.avatarEmoji}</span>
                      <span>{char.name.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Chat Feed */}
              <div
                ref={chatScrollRef}
                className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3.5 bg-gradient-to-b from-transparent to-black/20"
              >
                {(chatMessages[selectedChar.id] || []).map((msg) => {
                  const isBot = msg.sender === "bot";
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm ${
                          isBot
                            ? "bg-white/[0.06] text-zinc-200 border border-white/[0.06] rounded-tl-sm"
                            : "bg-white text-zinc-950 font-medium rounded-tr-sm"
                        }`}
                      >
                        <p className="leading-relaxed">{msg.text}</p>
                        {msg.punchlineMalayalam && (
                          <div className="mt-1.5 pt-1.5 border-t border-white/10 text-[11px] text-amber-300 font-medium">
                            {msg.punchlineMalayalam}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] ml-1">{selectedChar.name.split(" ")[0]} is typing...</span>
                  </div>
                )}
              </div>

              {/* Quick Prompt Chips */}
              <div className="px-4 py-2 bg-black/40 border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto scrollbar-none">
                {selectedChar.quickPrompts.slice(0, 3).map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendChat(prompt)}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-[11px] text-zinc-300 whitespace-nowrap transition-colors shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendChat();
                }}
                className="p-3 bg-[#0a0d14] border-t border-white/[0.08] flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={`Ask ${selectedChar.name.split(" ")[0]} anything...`}
                  disabled={isTyping}
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] focus:border-white/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isTyping}
                  className="px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold text-xs disabled:opacity-40 transition-opacity"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          )}

          {/* TAB 2: CHALI RAPIDO QUIZ */}
          {activeTab === "game" && (
            <div className="p-6 sm:p-8 min-h-[520px] flex flex-col justify-between">
              {!quizFinished ? (
                <>
                  <div className="space-y-6">
                    {/* Quiz Header */}
                    <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pb-4 border-b border-white/[0.08]">
                      <span>
                        QUESTION {quizIdx + 1} OF {CHALI_QUIZ_QUESTIONS.length}
                      </span>
                      <span className="text-amber-400 font-bold">{score} PTS</span>
                    </div>

                    {/* Question text */}
                    <div className="space-y-2">
                      <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-mono">
                        {CHALI_QUIZ_QUESTIONS[quizIdx].movie} • {CHALI_QUIZ_QUESTIONS[quizIdx].character}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                        {CHALI_QUIZ_QUESTIONS[quizIdx].dialogueLead}
                      </h3>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {CHALI_QUIZ_QUESTIONS[quizIdx].options.map((opt, idx) => {
                        let btnStyle = "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] text-zinc-200";
                        if (quizAnswered) {
                          if (idx === CHALI_QUIZ_QUESTIONS[quizIdx].correctIndex) {
                            btnStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-semibold";
                          } else if (selectedOpt === idx) {
                            btnStyle = "bg-rose-500/20 border-rose-500/60 text-rose-300";
                          } else {
                            btnStyle = "bg-white/[0.02] border-transparent text-zinc-600 opacity-50";
                          }
                        }

                        return (
                          <button
                            key={opt}
                            onClick={() => handleQuizOption(idx)}
                            disabled={quizAnswered}
                            className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-colors flex items-center justify-between gap-2 ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizAnswered && idx === CHALI_QUIZ_QUESTIONS[quizIdx].correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                            {quizAnswered && selectedOpt === idx && idx !== CHALI_QUIZ_QUESTIONS[quizIdx].correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Punch explanation */}
                    {quizAnswered && (
                      <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                        {CHALI_QUIZ_QUESTIONS[quizIdx].punchExplanation}
                      </div>
                    )}
                  </div>

                  {/* Next Button */}
                  <div className="pt-6 flex justify-end">
                    {quizAnswered && (
                      <button
                        onClick={handleNextQuestion}
                        className="px-5 py-2 rounded-lg bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{quizIdx + 1 < CHALI_QUIZ_QUESTIONS.length ? "Next Question" : "See Result"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </>
              ) : (
                /* Finished State */
                <div className="py-12 text-center space-y-5 my-auto">
                  <div className="text-4xl">🏆</div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white font-heading">
                      Quiz Completed!
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Final Score: <span className="text-amber-400 font-bold font-mono">{score} points</span>
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleRestartQuiz}
                      className="px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Play Again</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SOUNDBOARD */}
          {activeTab === "soundboard" && (
            <div className="p-4 sm:p-6 min-h-[520px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOUNDBOARD_CLIPS.slice(0, 6).map((clip) => {
                  const isPlaying = playingClipId === clip.id;
                  return (
                    <button
                      key={clip.id}
                      onClick={() => handlePlaySound(clip)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-3 ${
                        isPlaying
                          ? "bg-amber-400/10 border-amber-400/40 text-amber-200"
                          : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] text-zinc-300"
                      }`}
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{clip.title}</span>
                          <span className="text-[10px] text-zinc-500 font-mono">({clip.character.split(" ")[0]})</span>
                        </div>
                        <p className="text-xs text-zinc-400 truncate font-sans">
                          {clip.punchDialogue}
                        </p>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs transition-colors ${
                          isPlaying
                            ? "bg-amber-400 text-zinc-950 font-bold"
                            : "bg-white/[0.08] text-zinc-300"
                        }`}
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 text-center text-xs text-zinc-500 font-mono">
                Click any line to hear the audio preview.
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
