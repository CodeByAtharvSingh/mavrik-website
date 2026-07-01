import { ArrowRight, MessageSquareHeart } from "lucide-react";
import { FEEDBACK_URL } from "@/data/site";

export default function EarlyAccess() {
  return (
    <section id="early-access" className="py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center fade-up">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "var(--mavrik-orange-muted)" }}
          >
            <MessageSquareHeart className="w-6 h-6" style={{ color: "var(--mavrik-orange)" }} />
          </div>

          <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--mavrik-orange)" }}>
            Early Access
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Help shape <span className="gradient-text">Mavrik.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Mavrik hasn't launched yet — so instead of asking you to trust a wall of reviews, we're asking what would make this a must-have for you. 200+ people are already on the waitlist, shaping the app before day one.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Every response goes directly to the small team building Mavrik. Once we launch, this is where real reviews from real users will live.
          </p>

          <a
            href={FEEDBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mavrik px-7 py-3.5 text-base inline-flex items-center gap-2.5"
          >
            Share Your Feedback
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
