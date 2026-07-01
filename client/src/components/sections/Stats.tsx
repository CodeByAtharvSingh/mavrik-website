import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

function useCounter(target: number, duration = 1400, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

// Real tier split from the 24-model catalog (sidecar/main.py): 6 Fast, 7 Balanced, 11 Powerful.
const TIER_BARS = [
  { label: "Fast", pct: 25, count: "6 models" },
  { label: "Balanced", pct: 29, count: "7 models" },
  { label: "Powerful", pct: 46, count: "11 models" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const c1 = useCounter(25, 1000, started);
  const c2 = useCounter(450, 1400, started);

  return (
    <section className="py-28" ref={ref}>
      <div className="container">
        <div className="flex items-center justify-between mb-14 fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Why <span className="gradient-text">Mavrik?</span>
          </h2>
          <a
            href="#models"
            aria-label="Explore the model library"
            className="hidden sm:flex w-12 h-12 rounded-full border border-border items-center justify-center hover:border-[var(--mavrik-orange)] hover:bg-[var(--mavrik-orange-muted)] transition-colors flex-shrink-0"
          >
            <ArrowUpRight className="w-5 h-5" style={{ color: "var(--mavrik-orange)" }} />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-up delay-100 rounded-2xl p-8" style={{ background: "var(--mavrik-orange-muted)" }}>
            <div className="grid grid-cols-3 gap-6 items-end h-48 mb-6">
              {TIER_BARS.map((bar) => (
                <div key={bar.label} className="flex flex-col items-center justify-end h-full">
                  <span className="text-sm font-bold mb-2">{bar.pct}%</span>
                  <div
                    className="w-full rounded-xl"
                    style={{
                      height: `${bar.pct * 1.8}px`,
                      background: "linear-gradient(180deg, var(--mavrik-orange-light) 0%, var(--mavrik-orange) 100%)",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              {TIER_BARS.map((bar) => (
                <div key={bar.label}>
                  <div className="text-xs font-bold">{bar.label}</div>
                  <div className="text-[11px] text-muted-foreground">{bar.count}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up delay-200">
            <div className="flex flex-wrap gap-10 mb-8">
              <div>
                <div className="stat-number text-5xl mb-1">{c1}+</div>
                <div className="text-sm text-muted-foreground max-w-[8rem] leading-snug">AI models included</div>
              </div>
              <div>
                <div className="stat-number text-5xl mb-1">{c2}</div>
                <div className="text-sm text-muted-foreground max-w-[8rem] leading-snug">pages per PDF via Ghost Index</div>
              </div>
              <div>
                <div className="stat-number text-5xl mb-1">0</div>
                <div className="text-sm text-muted-foreground max-w-[8rem] leading-snug">telemetry events, ever</div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Mavrik is built by a small team that doesn't want your data. Every model runs on your CPU or GPU, every file stays on disk, and every response is generated without a single network call. Interested in shaping what we build next?
            </p>

            <a href="#early-access" className="btn-mavrik px-7 py-3.5 text-base inline-flex items-center gap-2">
              Join Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
