import { ArrowRight, ArrowUpRight, Brain, Download, Star, WifiOff } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { DOWNLOAD_PATH, MODELS, STORE_URL } from "@/data/site";
import { Link } from "wouter";

/* Cycles the whole model catalog through the hero so it shows off the real
   library instead of one hard-coded name. */
function useCyclingModel(intervalMs = 800) {
  // Shuffle once per visit: the catalog is ordered by tier, so playing it
  // straight would mean ~37s of the smallest models before anything else.
  const order = useMemo(() => {
    const a = [...MODELS];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }, []);
  const [i, setI] = useState(0);

  useEffect(() => {
    // Rapidly swapping text is exactly what reduced-motion users opt out of.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number | undefined;
    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };
    const start = () => {
      stop();
      timer = window.setInterval(() => setI((n) => (n + 1) % order.length), intervalMs);
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [order.length, intervalMs]);

  return order[i];
}

/* Names run 7-33 characters. Step the size down for the long ones so the
   floating card keeps a constant width instead of resizing every tick. */
function modelNameSize(name: string) {
  if (name.length > 26) return "text-[11px]";
  if (name.length > 20) return "text-[13px]";
  return "text-sm";
}

const ACHIEVEMENTS = [
  {
    icon: WifiOff,
    title: "Zero Cloud Calls",
    desc: "Every response is generated on your machine. Open the network tab. There's nothing to see.",
    href: "#privacy",
    linkLabel: "See how it works",
  },
  {
    icon: Brain,
    title: "170+ Local AI Models",
    desc: "Text, code and vision models, from 0.11 GB up to 70B, each scored against your exact hardware.",
    href: "#models",
    linkLabel: "Browse the library",
  },
  {
    icon: Download,
    title: "Free on the Microsoft Store",
    desc: "Install on Windows 10 or 11 in one click. No account, and a 21-day trial of the paid features.",
    href: DOWNLOAD_PATH,
    linkLabel: "Get Mavrik",
  },
];

/* Faithful mock of the real Mavrik desktop app (sidebar, model pill, chat
   input) — matches the actual UI screenshot, with the chat area left clean. */
/* The real Mavrik interface. Using the actual screenshot keeps the hero
   honest as the app evolves, instead of a hand-built lookalike that drifts. */
function AppWindowMock() {
  const model = useCyclingModel(800);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <img
        src="/app-screenshot.webp"
        alt="The Mavrik desktop app: chat, model library, Ghost Index and Auto Optimizer, all running locally."
        width={1920}
        height={1080}
        fetchPriority="high"
        className="w-full rounded-2xl shadow-2xl border border-black/5"
      />

      {/* Floating badges */}
      <div className="hidden sm:flex absolute -top-6 -left-8 lg:-left-16 items-center gap-2.5 bg-white rounded-2xl shadow-xl px-4 py-3 border border-black/5 animate-[float_4s_ease-in-out_infinite_0.5s]">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--mavrik-orange-muted)" }}>
          <Brain className="w-4 h-4" style={{ color: "var(--mavrik-orange)" }} />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Active Models</div>
          <div className="w-[182px] overflow-hidden">
            <div
              key={model.name}
              className={`font-semibold truncate animate-[modelSwap_260ms_ease-out] ${modelNameSize(model.name)}`}
              title={model.name}
            >
              {model.name}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute -bottom-6 -right-8 lg:-right-16 items-center gap-2.5 bg-white rounded-2xl shadow-xl px-4 py-3 border border-black/5 animate-[float_5s_ease-in-out_infinite_1s]">
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
          {/* Blue-sky gradient fallback (shows if the photo can't load) */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, #1D74C4 0%, #3B9BDE 45%, #7FC3EE 100%)" }}
          />
          {/* Cloud photo, landscape — clouds band along the lower half so the
              headline sits on clean blue. */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/sky.webp)" }}
          />
          {/* Deepens the blue and keeps white text legible over bright sky;
              clears toward the bottom so the clouds stay crisp. */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(6,52,102,0.46) 0%, rgba(10,74,134,0.24) 42%, rgba(12,90,150,0.06) 72%, rgba(255,255,255,0) 100%)" }}
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
              Now available on Windows
            </div>

            <h1
              className="fade-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
              style={{ textShadow: "0 2px 28px rgba(4,40,80,0.4)" }}
            >
              All the AI.
              <br />
              None of the cloud.
            </h1>

            <p className="fade-up delay-200 text-lg text-white/90 leading-relaxed max-w-xl">
              Mavrik runs 179 AI models entirely on your own hardware. Nothing you type ever leaves the machine.
            </p>

            <div className="fade-up delay-300 flex flex-wrap items-center justify-center gap-3 mt-2">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 text-base font-bold rounded-full bg-white text-[var(--mavrik-orange)] hover:bg-white/90 transition-all active:scale-[0.98] flex items-center gap-2.5 shadow-lg"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Download for Windows
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
                <strong>200+</strong> signed up before launch
              </span>
            </div>
          </div>

          {/* Product window mock */}
          <div className="fade-up delay-500 mt-16 px-2">
            <AppWindowMock />
          </div>
        </div>

        <style>{`
          @keyframes modelSwap {
            from { opacity: 0; transform: translateY(5px); }
            to   { opacity: 1; transform: translateY(0); }
          }
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
                {a.href.startsWith("/") ? (
                  <Link
                    href={a.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold"
                    style={{ color: "var(--mavrik-orange)" }}
                  >
                    {a.linkLabel}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
