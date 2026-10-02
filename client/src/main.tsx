import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import App from "./App";
import "./index.css";

// Vercel Web Analytics and Speed Insights, production only. Guarding on
// import.meta.env.PROD keeps both out of local dev, so running the site
// on localhost never sends anything.
if (import.meta.env.PROD) {
  inject();
  injectSpeedInsights();
}

createRoot(document.getElementById("root")!).render(<App />);
