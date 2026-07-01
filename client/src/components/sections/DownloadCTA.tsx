import { Apple, AppWindow, ArrowRight, CheckCircle2 } from "lucide-react";
import { WAITLIST_URL } from "@/data/site";

const PLATFORMS = [
  { name: "macOS", icon: Apple, sub: "Apple Silicon & Intel" },
  { name: "Windows", icon: AppWindow, sub: "Windows 10 & 11" },
];

export default function DownloadCTA() {
  return (
    <section id="download" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D1A0A 100%)" }} />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--mavrik-orange) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--mavrik-orange-light) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 text-center">
        <div
          className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 text-xs font-semibold tracking-wide mb-8"
          style={{ color: "var(--mavrik-orange-light)", background: "rgba(232, 93, 4, 0.1)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Coming Soon — Free, No Account Required
        </div>

        <h2 className="fade-up delay-100 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Be first to run
          <br />
          <span className="gradient-text">AI on your own machine.</span>
        </h2>

        <p className="fade-up delay-200 text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
          Mavrik is finishing testing for macOS and Windows. Register now and we'll notify you the moment your download is ready — no subscription, no API key, no cloud.
        </p>

        <div className="fade-up delay-300 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="relative bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <p.icon className="w-6 h-6 text-white/70 mb-3" />
              <div className="text-white font-bold text-sm mb-0.5">{p.name}</div>
              <div className="text-white/40 text-xs mb-3">{p.sub}</div>
              <span
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{ background: "rgba(232, 93, 4, 0.15)", color: "var(--mavrik-orange-light)" }}
              >
                Coming Soon
              </span>
            </div>
          ))}
        </div>

        <div className="fade-up delay-400 mb-10">
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mavrik px-8 py-4 text-base inline-flex items-center gap-2.5"
          >
            Register for Early Access
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="fade-up delay-500 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-400" /> Free forever tier
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-400" /> No account needed
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-400" /> Zero telemetry
          </span>
        </div>
      </div>
    </section>
  );
}
