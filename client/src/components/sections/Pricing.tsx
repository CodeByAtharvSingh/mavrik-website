import { Check } from "lucide-react";
import { PRICING, WAITLIST_URL } from "@/data/site";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-[#F2F1EE]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-6 fade-up">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--mavrik-orange)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Simple, <span className="gradient-text">transparent pricing.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Prices shown in USD. Nothing is billed today — plans activate when Mavrik launches for your platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          {PRICING.map((tier, i) => (
            <div
              key={tier.id}
              className={`fade-up delay-${i * 100} relative rounded-2xl p-8 flex flex-col ${
                tier.featured
                  ? "text-white shadow-2xl lg:scale-105 z-10"
                  : "bg-white border border-border"
              }`}
              style={tier.featured ? { background: "linear-gradient(135deg, var(--mavrik-orange) 0%, var(--mavrik-orange-dark) 100%)" } : undefined}
            >
              {tier.featured && (
                <span
                  className="absolute -top-3 right-6 text-xs font-bold px-3 py-1 rounded-full bg-white"
                  style={{ color: "var(--mavrik-orange)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Most Popular
                </span>
              )}

              <h3
                className={`text-xl font-bold mb-1 ${tier.featured ? "text-white" : "text-foreground"}`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {tier.name}
              </h3>
              <p className={`text-xs mb-6 ${tier.featured ? "text-white/70" : "text-muted-foreground"}`}>{tier.note}</p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {tier.price}
                </span>
                <span className={`text-sm ml-1.5 ${tier.featured ? "text-white/70" : "text-muted-foreground"}`}>/{tier.billing}</span>
              </div>

              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center px-5 py-3 rounded-xl text-sm font-bold mb-8 transition-transform active:scale-95 ${
                  tier.featured
                    ? "bg-white text-[var(--mavrik-orange)] hover:opacity-90"
                    : "btn-mavrik"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {tier.cta}
              </a>

              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.featured ? "text-white" : ""}`} style={!tier.featured ? { color: "var(--mavrik-orange)" } : undefined} />
                    <span className={tier.featured ? "text-white/90" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
