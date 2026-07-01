import { CheckCircle2 } from "lucide-react";

const PRIVACY_VISUAL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663461652296/g7YWXsfWaS2Ln8jTYigpr2/mavrik-privacy-visual-Cw8tSQSvv9qVKhrWwW9GWs.webp";

const POINTS = [
  "All AI processing happens on your CPU or GPU — no cloud inference",
  "Chat history stays in local storage on your device only",
  "No telemetry, no analytics, no phone-home requests",
  "The only network calls Mavrik makes are model downloads you start",
  "Your files never leave your machine",
  "Works fully air-gapped once your model is downloaded",
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-28 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-up relative order-2 lg:order-1">
            <div
              className="absolute -inset-8 rounded-3xl opacity-20 blur-2xl"
              style={{ background: "radial-gradient(ellipse, var(--mavrik-orange) 0%, transparent 70%)" }}
            />
            <img src={PRIVACY_VISUAL} alt="Mavrik Privacy" className="relative z-10 w-full rounded-2xl shadow-2xl" />
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="fade-up text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--mavrik-orange)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Privacy First
            </div>
            <h2
              className="fade-up delay-100 text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Built for people who
              <br />
              <span className="gradient-text">don't compromise.</span>
            </h2>
            <p className="fade-up delay-200 text-lg text-muted-foreground mb-8 leading-relaxed">
              In a world where every AI assistant sends your data to someone else's server, Mavrik is different. We built it from the ground up to run entirely on your machine.
            </p>

            <div className="fade-up delay-300 grid sm:grid-cols-2 gap-3">
              {POINTS.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--mavrik-orange)" }} />
                  <span className="text-sm text-muted-foreground leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
