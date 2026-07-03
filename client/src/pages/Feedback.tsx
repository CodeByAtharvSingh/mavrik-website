import { ArrowLeft, MessageSquareHeart } from "lucide-react";
import { Link } from "wouter";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/sections/Footer";

const LOGO_MARK = "/logo.png";

export default function Feedback() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <img src={LOGO_MARK} alt="Mavrik" className="w-8 h-8 object-contain" />
            <span className="text-lg text-foreground font-extrabold tracking-[0.04em]">MAVRIK</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "var(--mavrik-orange-muted)" }}
            >
              <MessageSquareHeart className="w-6 h-6" style={{ color: "var(--mavrik-orange)" }} />
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--mavrik-orange)" }}>
              Share Your Feedback
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Help shape <span className="gradient-text">Mavrik.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mavrik hasn't launched yet. Rate it, tell us what you're excited about, and let us know where it can be better — every response goes straight to the small team building it.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <FeedbackForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
