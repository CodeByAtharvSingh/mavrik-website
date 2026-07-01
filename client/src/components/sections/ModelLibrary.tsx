import { useState } from "react";
import { Lock } from "lucide-react";
import { MODELS, TIER_COLOR, type SpeedTier } from "@/data/site";

const FILTERS: Array<SpeedTier | "All"> = ["All", "Fast", "Balanced", "Powerful"];

export default function ModelLibrary() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = filter === "All" ? MODELS : MODELS.filter((m) => m.tier === filter);

  return (
    <section id="models" className="py-28">
      <div className="container">
        <div className="max-w-2xl mb-10 fade-up">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--mavrik-orange)" }}
          >
            Model Library
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Choose your <span className="gradient-text">AI model.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            25+ models across three tiers — the exact catalog shipping inside the app. Mavrik scores each one against your hardware, so you always know what will actually run well before you download it.
          </p>
        </div>

        <div className="fade-up flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                filter === f ? "text-white border-transparent" : "border-border text-muted-foreground hover:border-[var(--mavrik-orange)]"
              }`}
              style={filter === f ? { background: "var(--mavrik-orange)" } : undefined}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {visible.map((m) => (
            <div key={m.name} className="feature-card rounded-2xl p-6 border border-border bg-card flex flex-col gap-4">
              <div className="flex items-start justify-between gap-2">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: `${TIER_COLOR[m.tier]}1A`, color: TIER_COLOR[m.tier] }}
                >
                  {m.tier}
                </span>
                {m.pro && (
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Pro
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base font-bold leading-snug">{m.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {m.size} · {m.context}
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{m.useCase}</p>

              <div className="text-xs font-semibold px-3 py-2 rounded-lg text-center border border-dashed border-border text-muted-foreground">
                Coming Soon
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
