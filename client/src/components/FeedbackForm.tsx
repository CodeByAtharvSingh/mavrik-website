import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Star } from "lucide-react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [improvement, setImprovement] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const RATING_LABELS = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    if (rating === 0) {
      setError("Please pick a star rating.");
      return;
    }
    if (review.trim().length < 3) {
      setError("Please write a short review.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, rating, review, improvement }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white border border-border p-10 text-center">
        <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-green-500" />
        <h3 className="text-2xl font-bold mb-2">Thank you.</h3>
        <p className="text-muted-foreground">
          Your feedback goes straight to the team building Mavrik. It genuinely shapes what we ship next.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-6 shadow-sm">
      <div>
        <label className="text-sm font-bold mb-3 block">How would you rate Mavrik so far?</label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              onMouseEnter={() => setHoverRating(n)}
              onMouseLeave={() => setHoverRating(0)}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              className="p-0.5"
            >
              <Star
                className="w-9 h-9 transition-colors"
                fill={n <= (hoverRating || rating) ? "var(--mavrik-orange)" : "none"}
                color={n <= (hoverRating || rating) ? "var(--mavrik-orange)" : "#D6D0C6"}
              />
            </button>
          ))}
          {(hoverRating || rating) > 0 && (
            <span className="ml-2 text-sm font-semibold" style={{ color: "var(--mavrik-orange)" }}>
              {RATING_LABELS[hoverRating || rating]}
            </span>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm font-bold mb-2 block">Your review</label>
        <textarea
          required
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
          placeholder="What do you like about Mavrik? What made you interested in running AI locally?"
          className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-[var(--mavrik-orange)] transition-colors resize-none"
        />
      </div>

      <div>
        <label className="text-sm font-bold mb-2 block">Where can Mavrik improve?</label>
        <textarea
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
          rows={3}
          placeholder="Missing a model, a feature, a platform? Tell us what would make Mavrik a must-have for you."
          className="w-full px-4 py-3 rounded-xl border border-border text-sm outline-none focus:border-[var(--mavrik-orange)] transition-colors resize-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Name (optional)</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm outline-none focus:border-[var(--mavrik-orange)] transition-colors"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Email (optional)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full px-4 py-2.5 rounded-xl border border-border text-sm outline-none focus:border-[var(--mavrik-orange)] transition-colors"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-mavrik px-6 py-3.5 text-base self-start flex items-center gap-2 disabled:opacity-60"
      >
        {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
        Submit Feedback
      </button>
    </form>
  );
}
