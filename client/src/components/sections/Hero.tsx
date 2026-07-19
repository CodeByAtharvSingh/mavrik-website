import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Layers,
  MessageSquare,
  Mic,
  Paperclip,
  Search,
  Send,
  Star,
  Users,
  WifiOff,
} from "lucide-react";
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

/* Faithful mock of the real Mavrik desktop app (sidebar, model pill, chat
   input) — matches the actual UI screenshot, with the chat area left clean. */
function AppWindowMock() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="rounded-2xl shadow-2xl border border-black/5 overflow-hidden text-left bg-[#F4F1EC]">
        <div className="grid grid-cols-[170px_1fr] h-[340px] gap-2 p-2 max-sm:grid-cols-1">
          {/* Sidebar */}
          <div className="rounded-xl bg-[#F8F6F2] shadow-sm p-3 hidden sm:flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="" className="w-6 h-6 rounded-md" />
              <span className="text-[13px] font-bold text-foreground">Mavrik</span>
            </div>
            <div
              className="text-[8.5px] font-bold tracking-widest text-center rounded-full px-2 py-1 mb-3"
              style={{ background: "var(--mavrik-orange-muted)", color: "var(--mavrik-orange)" }}
            >
              BETA · 6D 0H 48M LEFT
            </div>
            {[
              { icon: MessageSquare, label: "Chat", active: true },
              { icon: Layers, label: "Models" },
              { icon: Search, label: "Ghost Index" },
              { icon: BarChart3, label: "Auto Optimizer" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 mb-0.5 text-[11px] font-medium ${
                  item.active ? "bg-white shadow-sm" : "text-foreground/60"
                }`}
                style={item.active ? { color: "var(--mavrik-orange)" } : undefined}
              >
                <item.icon className="w-3 h-3 flex-shrink-0" />
                {item.label}
              </div>
            ))}
            <div className="text-[8.5px] font-bold uppercase tracking-widest text-muted-foreground/50 mt-3 mb-1.5 px-1">Recent Chats</div>
            <div className="rounded-lg bg-white shadow-sm px-2.5 py-1.5 text-[11px] font-medium" style={{ color: "var(--mavrik-orange)" }}>
              New Chat
            </div>
            <div className="mt-auto rounded-lg bg-white shadow-sm p-2.5 space-y-2">
              <div>
                <div className="flex justify-between text-[9px] font-semibold text-foreground/70"><span>CPU</span><span>4%</span></div>
                <div className="h-1 rounded-full bg-[#EFEBE4] mt-0.5"><div className="h-1 rounded-full w-[6%]" style={{ background: "var(--mavrik-orange)" }} /></div>
              </div>
              <div>
                <div className="flex justify-between text-[9px] font-semibold text-foreground/70"><span>Memory</span><span>61%</span></div>
                <div className="h-1 rounded-full bg-[#EFEBE4] mt-0.5"><div className="h-1 rounded-full w-[61%]" style={{ background: "var(--mavrik-orange)" }} /></div>
              </div>
            </div>
          </div>

          {/* Main chat panel */}
          <div className="rounded-xl bg-white shadow-sm flex flex-col p-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8F6F2] shadow-sm px-3 py-1.5 text-[11px] font-semibold text-foreground">
                Llama 3 8B
                <span className="w-1 h-1 rounded-full" style={{ background: "var(--mavrik-orange)" }} />
              </span>
              <span className="rounded-full bg-[#F8F6F2] shadow-sm px-3 py-1.5 text-[11px] font-semibold text-foreground">New Chat</span>
            </div>

            {/* Clean empty chat area */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              <img src="/logo.png" alt="" className="w-9 h-9 rounded-xl opacity-90" />
              <span className="text-[12px] text-muted-foreground">Your private, local AI. No cloud, no tracking.</span>
            </div>

            <div className="flex items-center gap-4 px-1 mb-1.5">
              <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground"><Search className="w-2.5 h-2.5" /> Search</span>
              <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground"><Mic className="w-2.5 h-2.5" /> Voice</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-[#F8F6F2] shadow-inner px-3 py-2.5">
              <Paperclip className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-[12px] text-muted-foreground flex-1">Message Mavrik...</span>
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
          <div className="text-sm font-semibold">Llama 3 8B</div>
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
