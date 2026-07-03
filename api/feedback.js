// Vercel Serverless Function — receives feedback submissions from the native
// /feedback page. Stores each review in Vercel KV when a KV store is linked
// to the project; otherwise it logs the submission (visible in Vercel's
// function logs) so the form never breaks for visitors.
//
// To persist reviews: in the Vercel dashboard open Storage → create a KV
// (Upstash Redis) store and connect it to this project. Vercel injects the
// KV_REST_API_URL / KV_REST_API_TOKEN env vars automatically, and every
// submission is appended to the "mavrik:reviews" list from then on.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, rating, review, improvement } = req.body || {};

  if (typeof rating !== "number" || rating < 1 || rating > 5) {
    res.status(400).json({ error: "Rating must be between 1 and 5." });
    return;
  }
  if (typeof review !== "string" || review.trim().length < 3) {
    res.status(400).json({ error: "Please write a short review." });
    return;
  }

  const entry = {
    rating,
    review: review.slice(0, 2000),
    improvement: typeof improvement === "string" ? improvement.slice(0, 2000) : "",
    name: typeof name === "string" ? name.slice(0, 120) : "",         
    email: typeof email === "string" ? email.slice(0, 200) : "",
    at: new Date().toISOString(),
  };

  try {
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const { kv } = await import("@vercel/kv");
      await kv.lpush("mavrik:reviews", JSON.stringify(entry));
    } else {
      // No KV store linked yet — keep the submission in the function logs so
      // nothing is lost silently and the visitor still gets a success state.
      console.log("[feedback] (no KV configured)", JSON.stringify(entry));
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[feedback] save failed", err);
    res.status(500).json({ error: "Could not save your feedback. Please try again shortly." });
  }
}
