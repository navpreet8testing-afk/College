"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Sparkles, MessageCircle } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  text: string;
  chips?: string[];
}

const WELCOME: Message = {
  role: "assistant",
  text: "Namaste! 🙏 I'm **Shivu**, your Shivaji College assistant.\n\nI can help you with admissions, courses, fees, campus life, placements and more. What would you like to know?",
  chips: ["Courses offered", "How to apply", "Fee structure", "Campus life"],
};

const QUICK_PROMPTS = [
  "What courses do you offer?",
  "How do I apply for admission?",
  "What are the fees?",
  "Tell me about placements",
  "Hostel facilities?",
  "Contact details",
];

/** Renders text with simple markdown: **bold**, • bullets, line breaks, emojis. */
function renderText(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.trim() === "") return <div key={i} className="h-2" />;
    // bold **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i} className="block">
        {parts.map((p, j) =>
          p.startsWith("**") && p.endsWith("**") ? (
            <strong key={j} className="font-semibold">
              {p.slice(2, -2)}
            </strong>
          ) : (
            <span key={j}>{p}</span>
          )
        )}
      </span>
    );
  });
}

/**
 * Floating chatbot widget — bottom-right. Premium glassmorphism UI.
 * Calls /api/chat (Gemini with a rich local KB fallback).
 */
export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setUnread(false);
      const t = window.setTimeout(() => inputRef.current?.focus(), 300);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: Message[] = [...messages, { role: "user", text: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: next
            .slice(0, -1)
            .map((m) => ({
              role: m.role === "assistant" ? "model" : "user",
              text: m.text,
            })),
        }),
      });
      const data = await resp.json();
      const reply: string =
        data?.reply || "I'm sorry, I couldn't generate a response. Please try again.";
      const chips: string[] | undefined = data?.chips;
      setMessages((m) => [...m, { role: "assistant", text: reply, chips }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "I'm having trouble connecting right now. Please call us at +91 79732 90805 or email info@shivajicollege.edu.in.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Launcher — glassmorphism floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open Shivu assistant"}
        className="group fixed bottom-6 right-6 z-[60]"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#d4a04c] opacity-40 blur-xl transition-opacity group-hover:opacity-60" />
        <span className="btn-gold relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#d4a04c] to-[#b8862f] text-white shadow-2xl ring-1 ring-white/30 backdrop-blur-sm transition-transform hover:scale-110">
          {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
          {!open && unread && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4a04c] opacity-60" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-[#d4a04c] ring-2 ring-white" />
            </span>
          )}
        </span>
      </button>

      {/* Chat panel — glassmorphism */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[60] flex h-[min(580px,82vh)] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-2xl backdrop-blur-2xl animate-[fadeIn_.25s_ease]">
          {/* Header — glassy navy */}
          <div className="relative flex items-center gap-3 bg-gradient-to-r from-[#1a2744]/95 to-[#2a3a5c]/95 px-4 py-3.5 text-white backdrop-blur-xl">
            <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d4a04c] to-[#b8862f] shadow-lg">
              <Bot className="h-5 w-5 text-white" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-[#1a2744]" />
            </div>
            <div className="flex-1">
              <p className="font-serif text-[15px] font-bold">Shivu Assistant</p>
              <p className="flex items-center gap-1 font-sans text-[11px] text-white/70">
                <Sparkles className="h-3 w-3 text-[#d4a04c]" />
                AI-powered • Online now
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages — glassy scroll area */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-[#f7f5f0]/60 to-white/40 px-4 py-4"
          >
            {messages.map((m, i) => (
              <div key={i}>
                <div
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.role === "assistant" && (
                    <div className="mr-2 mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1a2744] to-[#2a3a5c] shadow">
                      <Bot className="h-3.5 w-3.5 text-[#d4a04c]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 font-sans text-[13px] leading-relaxed shadow-sm ${
                      m.role === "user"
                        ? "rounded-br-sm bg-gradient-to-br from-[#d4a04c] to-[#b8862f] text-white"
                        : "rounded-bl-sm border border-white/40 bg-white/80 text-[#1a2744] backdrop-blur-md"
                    }`}
                  >
                    {renderText(m.text)}
                  </div>
                </div>
                {/* Follow-up chips */}
                {m.role === "assistant" && m.chips && m.chips.length > 0 && (
                  <div className="ml-9 mt-2 flex flex-wrap gap-1.5">
                    {m.chips.map((c) => (
                      <button
                        key={c}
                        onClick={() => send(c)}
                        className="rounded-full border border-[#d4a04c]/40 bg-white/60 px-2.5 py-1 font-sans text-[11px] font-medium text-[#1a2744] backdrop-blur-sm transition-all hover:scale-105 hover:border-[#d4a04c] hover:bg-[#d4a04c]/10"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="mr-2 mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1a2744] to-[#2a3a5c] shadow">
                  <Bot className="h-3.5 w-3.5 text-[#d4a04c]" />
                </div>
                <div className="rounded-2xl rounded-bl-sm border border-white/40 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#d4a04c] [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#d4a04c] [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#d4a04c]" />
                  </span>
                </div>
              </div>
            )}

            {/* Quick prompts before first user message */}
            {messages.length <= 1 && !loading && (
              <div className="space-y-2 pt-2">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-[#5a6478]">
                  ✨ Suggested questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_PROMPTS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-[#1a2744]/15 bg-white/70 px-3 py-1.5 font-sans text-[12px] text-[#1a2744] backdrop-blur-sm transition-all hover:scale-105 hover:border-[#d4a04c] hover:text-[#b8862f]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input — glassy */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-white/30 bg-white/60 px-3 py-3 backdrop-blur-xl"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
              className="flex-1 rounded-full border border-gray-200 bg-white/80 px-4 py-2.5 font-sans text-[14px] text-[#1a2744] placeholder:text-gray-400 backdrop-blur-sm focus:border-[#d4a04c] focus:outline-none focus:ring-2 focus:ring-[#d4a04c]/20"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d4a04c] to-[#b8862f] text-white shadow-lg ring-1 ring-white/30 transition-transform hover:scale-105 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

// Re-export so the icon is available to other modules if needed.
export { MessageCircle };
