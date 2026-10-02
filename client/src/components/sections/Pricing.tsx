import { Check } from "lucide-react";
import { PRICING, STORE_URL } from "@/data/site";

export default function Pricing() {
  const tier = PRICING[0];

  return (
    <section id="pricing" className="py-28 bg-[#F2F1EE]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-up">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--mavrik-orange)" }}
          >
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Free while we <span className="gradient-text">launch.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything in Mavrik is unlocked right now. No card, no trial timer, nothing to cancel. If paid plans
            arrive later, we will say so clearly here before anything changes.
          </p>
        </div>

        <div className="fade-up max-w-xl mx-auto">
          <div
            className="relative rounded-2xl p-10 flex flex-col text-white shadow-2xl"
            style={{ background: "linear-gradient(135deg, var(--mavrik-orange) 0%, var(--mavrik-orange-dark) 100%)" }}
          >
            <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
            <p className="text-xs text-white/70 mb-6">{tier.note}</p>

            <div className="mb-8">
              <span className="text-5xl font-extrabold">{tier.price}</span>
              <span className="text-sm ml-2 text-white/70">{tier.billing}</span>
            </div>

            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-5 py-3.5 rounded-xl text-sm font-bold mb-8 bg-white text-[var(--mavrik-orange)] hover:opacity-90 transition-transform active:scale-95"
            >
              {tier.cta}
            </a>

            <ul className="space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                  <span className="text-white/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
