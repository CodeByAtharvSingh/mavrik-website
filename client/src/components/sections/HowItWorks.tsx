import { STEPS } from "@/data/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#F2F1EE]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--mavrik-orange)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Getting Started
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Up and running in <span className="gradient-text">4 steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

          {STEPS.map((step, i) => (
            <div key={step.num} className={`fade-up delay-${i * 100} relative`}>
              <div className="bg-white rounded-2xl p-7 border border-border shadow-sm h-full">
                <div
                  className="text-3xl font-extrabold mb-4 block"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--mavrik-orange)", opacity: 0.25 }}
                >
                  {step.num}
                </div>
                <h3 className="text-base font-bold mb-2.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
