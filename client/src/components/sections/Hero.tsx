import { ArrowRight, ArrowUpRight, Brain, Sparkles, Users, WifiOff } from "lucide-react";
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 fade-up">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide"
            style={{
              borderColor: "var(--mavrik-orange)",
              color: "var(--mavrik-orange)",
              background: "var(--mavrik-orange-muted)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            macOS &amp; Windows — Coming Soon
          </div>
        </div>

        <div className="fade-up delay-100 relative max-w-4xl mx-auto mt-8">
          <div
            className="relative overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center"
            style={{
              background: "linear-gradient(135deg, var(--mavrik-orange) 0%, var(--mavrik-orange-dark) 100%)",
              borderRadius: "58% 42% 39% 61% / 45% 44% 56% 55%",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `radial-gradient(white 1.5px, transparent 1.5px)`,
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10 w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-5 h-5 text-white" />
            </div>

            <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white max-w-2xl mx-auto">
              Your AI. Your Machine. No Cloud.
            </h1>

            <p className="relative z-10 text-white/80 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mt-5">
              Mavrik runs powerful AI models entirely on your device. Private by design — no data leaves your machine, ever.
            </p>
          </div>

          <div className="hidden sm:flex absolute -top-4 -left-4 lg:-left-10 items-center gap-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-border animate-[float_4s_ease-in-out_infinite_0.5s]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--mavrik-orange-muted)" }}>
              <Brain className="w-4 h-4" style={{ color: "var(--mavrik-orange)" }} />
            </div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Active Model</div>
              <div className="text-sm font-semibold">Mistral 7B</div>
            </div>
          </div>

          <div className="hidden sm:flex absolute -bottom-4 -right-4 lg:-right-10 items-center gap-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-border animate-[float_5s_ease-in-out_infinite_1s]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-50">
              <WifiOff className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Network Status</div>
              <div className="text-sm font-semibold text-green-600">Fully Offline</div>
            </div>
          </div>
        </div>

        <div className="fade-up delay-200 flex flex-wrap items-center justify-center gap-3 mt-12">
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mavrik px-7 py-3.5 text-base flex items-center gap-2.5"
          >
            Get Notified at Launch
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#how-it-works" className="btn-ghost-mavrik px-7 py-3.5 text-base flex items-center gap-2">
            See How It Works
          </a>
        </div>

        <div className="fade-up delay-300 flex items-center justify-center gap-3 mt-8">
          <div className="flex -space-x-2">
            {["bg-orange-400", "bg-amber-500", "bg-red-400", "bg-orange-600"].map((c, i) => (
              <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white`} />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            <strong className="text-foreground">200+</strong> people already on the waitlist
          </span>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto mt-20">
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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
