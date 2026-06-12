'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Calendar, Phone } from 'lucide-react';

const CALENDAR_LINK = 'https://calendar.app.google/AXGv6YPWdrFU2sNY8';
const WHATSAPP_LINK = 'https://wa.me/919447711755';

type Message = { role: 'user' | 'assistant'; content: string };

const WELCOME: Message = {
  role: 'assistant',
  content:
    "Hello! I'm Serah, the virtual assistant for Dr. Marissa's ENT Clinic. 😊 I can help you with our services, clinic hours, and booking an appointment. How may I help you today?",
};

const QUICK_PROMPTS = [
  'What services do you offer?',
  'What are your clinic hours?',
  'I want to book an appointment',
];

// Render a small subset of Markdown: links and **bold**, with line breaks.
function renderContent(text: string) {
  const nodes: React.ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  const pushText = (chunk: string) => {
    const parts = chunk.split('\n');
    parts.forEach((part, i) => {
      if (i > 0) nodes.push(<br key={`br-${key++}`} />);
      if (part) nodes.push(<span key={`t-${key++}`}>{part}</span>);
    });
  };

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) pushText(text.slice(lastIndex, match.index));
    if (match[1] && match[2]) {
      nodes.push(
        <a
          key={`l-${key++}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 font-medium underline underline-offset-2 hover:text-teal-700"
        >
          {match[1]}
        </a>,
      );
    } else if (match[3]) {
      nodes.push(<strong key={`b-${key++}`}>{match[3]}</strong>);
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) pushText(text.slice(lastIndex));
  return nodes;
}

export default function SerahChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const nextMessages: Message[] = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.filter((_, i) => i > 0 || nextMessages.length === 1),
        }),
      });

      if (!res.ok || !res.body) throw new Error('Request failed');

      // Add an empty assistant message and stream tokens into it.
      setMessages((m) => [...m, { role: 'assistant', content: '' }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: 'assistant', content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "I'm sorry, I couldn't reach the clinic assistant just now. Please call or WhatsApp us at +91 94477 11755 and we'll be happy to help.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      {/* Launcher button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 18 }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat with Serah' : 'Chat with Serah'}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-teal-600 px-5 py-4 text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && <span className="hidden sm:inline font-medium">Ask Serah</span>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="fixed bottom-24 right-4 z-50 flex h-[min(70vh,560px)] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-sky-600 px-5 py-4 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-lg font-heading font-bold">
                S
              </div>
              <div className="leading-tight">
                <p className="font-heading font-semibold">Serah</p>
                <p className="flex items-center gap-1.5 text-xs text-teal-50">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
                  Dr. Marissa&apos;s ENT Assistant
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-5">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'rounded-br-md bg-teal-600 text-white'
                        : 'rounded-bl-md border border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    {m.role === 'assistant' ? renderContent(m.content) : m.content}
                  </div>
                </div>
              ))}

              {loading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-2 w-2 animate-bounce rounded-full bg-slate-300"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick prompts (only before the first user message) */}
              {messages.length === 1 && !loading && (
                <div className="space-y-2 pt-1">
                  {QUICK_PROMPTS.map((p) => (
                    <button
                      key={p}
                      onClick={() => sendMessage(p)}
                      className="block w-full rounded-xl border border-teal-200 bg-white px-3 py-2 text-left text-sm font-medium text-teal-700 transition-colors hover:bg-teal-50"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick actions */}
            <div className="flex gap-2 border-t border-slate-100 bg-white px-3 pt-2.5">
              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-teal-50 px-2 py-1.5 text-xs font-medium text-teal-700 transition-colors hover:bg-teal-100"
              >
                <Calendar size={14} /> Book
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-50 px-2 py-1.5 text-xs font-medium text-green-700 transition-colors hover:bg-green-100"
              >
                <Phone size={14} /> WhatsApp
              </a>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white p-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors focus:border-teal-400 focus:bg-white"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
