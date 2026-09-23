import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { MODELS, TIER_BLURB, TIER_COLOR, type ModelTier } from "@/data/site";

const FILTERS: Array<ModelTier | "All"> = ["All", "Light", "Balanced", "Most capable", "Vision"];

/* With 179 models, showing everything on load buries the rest of the page.
   Start with a preview and let people expand. */
const PREVIEW_COUNT = 24;

export default function ModelLibrary() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [expanded, setExpanded] = useState(false);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: MODELS.length };
    for (const m of MODELS) c[m.tier] = (c[m.tier] ?? 0) + 1;
    return c;
  }, []);

  const matching = useMemo(
    () => (filter === "All" ? MODELS : MODELS.filter((m) => m.tier === filter)),
    [filter]
  );
  const visible = expanded ? matching : matching.slice(0, PREVIEW_COUNT);
  const hidden = matching.length - visible.length;

  return (
    <section id="models" className="py-28">
      <div className="container">
        <div className="max-w-2xl mb-10 fade-up">
          <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--mavrik-orange)" }}>
            Model Library
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Choose your <span className="gradient-text">AI model.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {MODELS.length} models across four tiers — the exact catalog shipping inside the app, from a 0.11 GB
            featherweight to a 96 GB frontier model. Mavrik scores each one against your hardware, so you always know
            what will actually run well before you download it.
          </p>
        </div>

        {/* Tier filters */}
        <div className="fade-up flex flex-wrap gap-2 mb-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setExpanded(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                filter === f
                  ? "text-white border-transparent"
                  : "border-border text-muted-foreground hover:border-[var(--mavrik-orange)]"
              }`}
              style={filter === f ? { background: "var(--mavrik-orange)" } : undefined}
            >
              {f}
              <span className={filter === f ? "ml-1.5 opacity-70" : "ml-1.5 opacity-50"}>{counts[f] ?? 0}</span>
            </button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-8">
          {filter === "All"
            ? `Showing ${visible.length} of ${matching.length} models`
            : `${TIER_BLURB[filter as ModelTier]} · showing ${visible.length} of ${matching.length}`}
        </p>

        {/* Compact model grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {visible.map((m) => (
            <div
              key={`${m.tier}-${m.name}`}
              className="rounded-xl border border-border bg-card px-4 py-3.5 flex items-center justify-between gap-3 hover:border-[var(--mavrik-orange)] transition-colors"
            >
              <div className="min-w-0">
                <div className="text-sm font-bold leading-snug truncate" title={m.name}>
                  {m.name}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{m.size}</div>
              </div>
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: TIER_COLOR[m.tier] }}
                title={m.tier}
              />
            </div>
          ))}
        </div>

        {hidden > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded(true)}
              className="btn-ghost-mavrik px-6 py-3 text-sm inline-flex items-center gap-2"
            >
              Show all {matching.length} models
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Tier legend */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-xs text-muted-foreground">
          {(Object.keys(TIER_COLOR) as ModelTier[]).map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: TIER_COLOR[t] }} />
              <strong className="text-foreground font-semibold">{t}</strong> — {TIER_BLURB[t]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
