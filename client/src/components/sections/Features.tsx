import { ArrowUpRight, Brain, Cpu, Eye, Gauge, HardDrive, Laptop, ShieldOff, WifiOff, Zap, type LucideIcon } from "lucide-react";
import { FEATURES } from "@/data/site";

const ICONS: Record<string, LucideIcon> = { WifiOff, Brain, Eye, Cpu, Zap, HardDrive, ShieldOff, Gauge, Laptop };

const TINTS = ["#FFF0E6", "#F2F1EE", "#FFE4CC"];

export default function Features() {
  return (
    <section id="features" className="py-28">
      <div className="container">
        <div className="max-w-2xl mb-16 fade-up">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--mavrik-orange)" }}
          >
            What Mavrik Does
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Everything you need.
            <br />
            <span className="gradient-text">Nothing you don't.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mavrik is built for people who refuse to compromise on privacy. Every feature is designed to give you maximum capability with zero exposure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <div
                key={f.title}
                className={`feature-card fade-up delay-${Math.min(((i % 3) + 1) * 100, 300)} rounded-2xl border border-border bg-card overflow-hidden`}
              >
                <div
                  className="relative h-36 flex items-center justify-center"
                  style={{ background: TINTS[i % TINTS.length] }}
                >
                  {f.accent && (
                    <div
                      className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: "var(--mavrik-orange)", color: "white" }}
                    >
                      Core
                    </div>
                  )}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: "white" }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "var(--mavrik-orange)" }} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
                  <a href="#models" className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--mavrik-orange)" }}>
                    Explore
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
