import { Apple, ArrowLeft, ArrowRight, Check, Cpu, HardDrive, ShieldOff, WifiOff } from "lucide-react";
import { Link } from "wouter";
import { STORE_URL } from "@/data/site";
import Footer from "@/components/sections/Footer";

const LOGO_MARK = "/logo.png";

/* Official four-pane Windows logo. */
function WindowsLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 88" className={className} fill="currentColor" aria-hidden="true">
      <path d="M0 12.4 35.7 7.5v34.5H0zM40 6.9 87.6 0v41.6H40zM0 46h35.7v34.6L0 75.6zM40 46.5h47.6V88L40 81.3z" />
    </svg>
  );
}

const REQUIREMENTS = [
  { icon: Cpu, label: "Windows 10 or 11", sub: "64-bit (x64 or ARM64)" },
  { icon: HardDrive, label: "8 GB RAM minimum", sub: "16 GB+ for larger models" },
  { icon: WifiOff, label: "Internet for setup only", sub: "Then fully offline" },
  { icon: ShieldOff, label: "No account required", sub: "No sign-up, no telemetry" },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <img src={LOGO_MARK} alt="Mavrik" className="w-8 h-8 object-contain" />
            <span className="text-lg text-foreground font-extrabold tracking-[0.04em]">MAVRIK</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-20">
        <div className="container">
          {/* Heading */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
              style={{ background: "var(--mavrik-orange-muted)", color: "var(--mavrik-orange)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Version 0.1.0 — First public beta
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Download <span className="gradient-text">Mavrik.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Private, local AI that runs entirely on your own machine. Free to install — no account, no API key, and no
              data ever leaves your device.
            </p>
          </div>

          {/* Windows card */}
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border-2 bg-card p-8 sm:p-10 text-center" style={{ borderColor: "var(--mavrik-orange)" }}>
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "var(--mavrik-orange-muted)" }}
              >
                <WindowsLogo className="w-9 h-9" />
              </div>

              <div
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
                style={{ background: "rgba(61, 154, 92, 0.12)", color: "#3D9A5C" }}
              >
                Available Now
              </div>

              <h2 className="text-2xl font-extrabold mb-2">Mavrik for Windows</h2>
              <p className="text-muted-foreground mb-8">
                Windows 10 &amp; 11 · Installs in one click from the Microsoft Store
              </p>

              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mavrik px-8 py-4 text-base inline-flex items-center gap-2.5"
              >
                <WindowsLogo className="w-4 h-4" />
                Install from Microsoft Store
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-xs text-muted-foreground mt-5">
                Opens the Microsoft Store · Free · Includes a 21-day trial of the paid features
              </p>
            </div>

            {/* macOS — not yet */}
            <div className="rounded-2xl border border-border bg-card p-8 mt-5 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#F2F1EE]">
                <Apple className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                  <h3 className="text-lg font-bold">Mavrik for macOS</h3>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{ background: "var(--mavrik-orange-muted)", color: "var(--mavrik-orange)" }}
                  >
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  A native build for Apple Silicon and Intel Macs is in active development.
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5 text-center">
                What you need
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {REQUIREMENTS.map((r) => (
                  <div key={r.label} className="rounded-xl border border-border bg-card p-5 flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--mavrik-orange-muted)" }}
                    >
                      <r.icon className="w-4 h-4" style={{ color: "var(--mavrik-orange)" }} />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{r.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{r.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reassurance */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-sm text-muted-foreground">
              {["Free forever tier", "No account needed", "Zero telemetry", "Works fully offline"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4" style={{ color: "var(--mavrik-orange)" }} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
