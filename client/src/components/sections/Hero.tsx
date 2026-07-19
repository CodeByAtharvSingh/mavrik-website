import { ArrowRight, ArrowUpRight, Brain, Cpu, Send, Star, Users, WifiOff } from "lucide-react";
import { WAITLIST_URL } from "@/data/site";

const ACHIEVEMENTS = [
  {
    icon: WifiOff,
    title: "Zero Cloud Calls",
    desc: "Every response is generated on your machine. Open the network tab — there's nothing to see.",
    href: "#privacy",
    linkLabel: "See how it works",
  },
  {
    icon: Brain,
    title: "25+ Local AI Models",
    desc: "From TinyLlama to Llama 3 70B, each one scored against your exact hardware.",
    href: "#models",
    linkLabel: "Browse the library",
  },
  {
    icon: Users,
    title: "200+ on the Waitlist",
    desc: "Early testers already shaping Mavrik before it ships for macOS and Windows.",
    href: WAITLIST_URL,
    linkLabel: "Join the waitlist",
  },
];

/* A compact, on-brand mock of the Mavrik desktop app — showcases the product
   instead of a generic stock graphic. */
function AppWindowMock() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="rounded-2xl bg-white shadow-2xl border border-black/5 overflow-hidden text-left">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-border bg-[#FAF9F7]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-xs font-semibold text-muted-foreground">Mavrik</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold text-green-600">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Offline
          </span>
        </div>

        <div className="grid grid-cols-[130px_1fr] h-[280px]">
          {/* Sidebar */}
          <div className="border-r border-border p-3 bg-[#FCFBF9] hidden sm:block">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2 px-1">Models</div>
            {[
              { name: "TinyLlama 1.1B", active: false },
              { name: "Mistral 7B", active: true },
              { name: "Llama 3 8B", active: false },
              { name: "Qwen 2.5 7B", active: false },
            ].map((m) => (
              <div
                key={m.name}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 mb-1 text-[11px] font-medium ${
                  m.active ? "text-white" : "text-foreground/70"
                }`}
                style={m.active ? { background: "var(--mavrik-orange)" } : undefined}
              >
                <Cpu className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{m.name}</span>
              </div>
            ))}
          </div>

          {/* Chat */}
          <div className="flex flex-col p-4 gap-3">
            <div className="self-end max-w-[80%] rounded-2xl rounded-br-sm px-3.5 py-2 text-[12px] bg-[#F2F1EE] text-foreground">
              Summarize this 300-page PDF, fully offline.
            </div>
            <div className="self-start max-w-[85%] rounded-2xl rounded-bl-sm px-3.5 py-2 text-[12px] text-white leading-relaxed" style={{ background: "var(--mavrik-orange)" }}>
              Done — indexed all 300 pages locally with Ghost Index. Here are the 5 key takeaways…
            </div>
            <div className="self-start flex items-center gap-1.5 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-pulse [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-pulse [animation-delay:300ms]" />
            </div>
            <div className="mt-auto flex items-center gap-2 rounded-xl border border-border px-3 py-2">
              <span className="text-[12px] text-muted-foreground flex-1">Ask anything — it never leaves your Mac…</span>
              <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--mavrik-orange)" }}>
                <Send className="w-3.5 h-3.5 text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="hidden sm:flex absolute -top-5 -left-5 lg:-left-10 items-center gap-2.5 bg-white rounded-2xl shadow-xl px-4 py-3 border border-black/5 animate-[float_4s_ease-in-out_infinite_0.5s]">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--mavrik-orange-muted)" }}>
          <Brain className="w-4 h-4" style={{ color: "var(--mavrik-orange)" }} />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Active Model</div>
          <div className="text-sm font-semibold">Mistral 7B</div>
        </div>
      </div>

      <div className="hidden sm:flex absolute -bottom-5 -right-5 lg:-right-10 items-center gap-2.5 bg-white rounded-2xl shadow-xl px-4 py-3 border border-black/5 animate-[float_5s_ease-in-out_infinite_1s]">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-50">
          <WifiOff className="w-4 h-4 text-green-500" />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Network</div>
          <div className="text-sm font-semibold text-green-600">Fully Offline</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* ── Sky background ─────────────────────────────────────────────── */}
        <div className="absolute inset-0">
          {/* Warm-sky gradient fallback (shows if no photo is present) */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, #FFC38A 0%, #FF8C42 32%, #E85D04 72%, #C44D00 100%)" }}
          />
          {/* User-supplied cloud photo — save as client/public/sky.jpg */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/sky.jpg)", filter: "saturate(0.6) contrast(1.03) brightness(1.02)" }}
          />
          {/* Warm orange tint so any sky reads as golden-hour + keeps text legible */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(255,150,80,0.42) 0%, rgba(232,93,4,0.5) 55%, rgba(196,77,0,0.72) 100%)" }}
          />
          {/* Fade into the page background at the bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{ background: "linear-gradient(to bottom, rgba(248,247,244,0) 0%, var(--background) 100%)" }}
          />
        </div>

        {/* ── Content ────────────────────────────────────────────────────── */}
        <div className="container relative z-10 pt-36 pb-28">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <div className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/40 bg-white/15 backdrop-blur-sm text-xs font-semibold tracking-wide text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              macOS &amp; Windows — Coming Soon
            </div>

            <h1
              className="fade-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
              style={{ textShadow: "0 2px 24px rgba(120,45,0,0.35)" }}
            >
              Your AI. Your Machine.
              <br />
              No Cloud.
            </h1>

            <p className="fade-up delay-200 text-lg text-white/90 leading-relaxed max-w-xl">
              Mavrik runs powerful AI models entirely on your device. Private by design — no data leaves your machine, ever.
            </p>

            <div className="fade-up delay-300 flex flex-wrap items-center justify-center gap-3 mt-2">
              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 text-base font-bold rounded-full bg-white text-[var(--mavrik-orange)] hover:bg-white/90 transition-all active:scale-[0.98] flex items-center gap-2.5 shadow-lg"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Get Notified at Launch
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="px-7 py-3.5 text-base font-semibold rounded-full border border-white/50 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                See How It Works
              </a>
            </div>

            <div className="fade-up delay-400 flex items-center justify-center gap-2 mt-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <span className="text-sm text-white/90">
                <strong>200+</strong> people already on the waitlist
              </span>
            </div>
          </div>

          {/* Product window mock */}
          <div className="fade-up delay-500 mt-16 px-2">
            <AppWindowMock />
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
        `}</style>
      </section>

      {/* ── Achievement cards ─────────────────────────────────────────────── */}
      <section className="pb-28 -mt-4">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={a.title} className={`fade-up delay-${(i + 1) * 100} rounded-2xl border border-border bg-card p-6`}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "var(--mavrik-orange-muted)" }}
                >
                  <a.icon className="w-4.5 h-4.5" style={{ color: "var(--mavrik-orange)" }} />
                </div>
                <h3 className="text-sm font-bold mb-1.5">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.desc}</p>
                <a
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-xs font-semibold"
                  style={{ color: "var(--mavrik-orange)" }}
                >
                  {a.linkLabel}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
