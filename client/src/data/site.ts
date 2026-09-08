// Microsoft Store listing for the Windows build. Locale params (hl/gl) are
// intentionally omitted so the Store resolves to each visitor's own region.
export const STORE_URL = "https://apps.microsoft.com/detail/9ppfcng3l2js";

// On-site download page listing available platforms.
export const DOWNLOAD_PATH = "/download";

// Feedback is a native page on this site (star rating + review), backed by a
// Vercel serverless function — see /api/feedback.js and pages/Feedback.tsx.
export const FEEDBACK_PATH = "/feedback";

export type SpeedTier = "Fast" | "Balanced" | "Powerful";

export interface ModelEntry {
  name: string;
  size: string;
  tier: SpeedTier;
  context: string;
  useCase: string;
  pro?: boolean;
}

// Pulled from the actual Mavrik model catalog (sidecar/main.py) — real models,
// real sizes, real context windows. Nothing here is invented.
export const MODELS: ModelEntry[] = [
  { name: "TinyLlama 1.1B", size: "0.7 GB", tier: "Fast", context: "4k context", useCase: "Ultra-light and lightning fast. Runs on almost any machine." },
  { name: "Qwen 2.5 1.5B", size: "0.9 GB", tier: "Fast", context: "32k context", useCase: "Compact multilingual model with strong everyday chat quality." },
  { name: "StableLM 2 1.6B", size: "0.95 GB", tier: "Fast", context: "4k context", useCase: "Stability AI's tiny but sharp chat model." },
  { name: "Gemma 2 2B", size: "1.6 GB", tier: "Fast", context: "8k context", useCase: "Google's efficient 2B model. Surprisingly capable for its size." },
  { name: "Phi-3 Mini 3.8B", size: "2.2 GB", tier: "Fast", context: "4k context", useCase: "Compact powerhouse from Microsoft. Punches above its weight." },
  { name: "Phi-4 Mini 3.8B", size: "2.3 GB", tier: "Fast", context: "4k context", useCase: "Microsoft's latest mini model. Better reasoning than Phi-3." },
  { name: "Qwen Coder 3B", size: "1.8 GB", tier: "Balanced", context: "32k context", useCase: "Focused coding model that stays light enough for local use." },
  { name: "Mistral 7B", size: "4.1 GB", tier: "Balanced", context: "32k context", useCase: "A capable all-rounder. Best quality-per-GB for most tasks." },
  { name: "Neural Chat 7B", size: "4.4 GB", tier: "Balanced", context: "8k context", useCase: "Intel's conversational model. Optimised for dialogue." },
  { name: "DeepSeek 7B", size: "4.1 GB", tier: "Balanced", context: "4k context", useCase: "Strong reasoning and coding. Excellent multilingual support." },
  { name: "Qwen 2.5 7B", size: "4.4 GB", tier: "Balanced", context: "32k context", useCase: "Alibaba's 7B flagship. Excellent at coding, math, and chat." },
  { name: "Gemma 2 9B", size: "5.8 GB", tier: "Balanced", context: "8k context", useCase: "Google's 9B model beats many larger models on benchmarks." },
  { name: "Mistral Nemo 12B", size: "7.1 GB", tier: "Balanced", context: "128k context", useCase: "Mistral's 12B with 128k context. Handles very long documents." },
  { name: "Llama 3 8B", size: "4.7 GB", tier: "Powerful", context: "8k context", useCase: "Meta's open flagship. Strong reasoning, writing, and coding." },
  { name: "Qwen 2.5 14B", size: "8.7 GB", tier: "Powerful", context: "32k context", useCase: "Qwen's 14B punches well above its weight on coding and math." },
  { name: "Gemma 2 27B", size: "16.5 GB", tier: "Powerful", context: "8k context", useCase: "Google's 27B model. Best-in-class for its size on many tasks.", pro: true },
  { name: "DeepSeek R1 32B", size: "19.5 GB", tier: "Powerful", context: "32k context", useCase: "DeepSeek's reasoning model. Outstanding at math and logic.", pro: true },
  { name: "Qwen 2.5 32B", size: "19.5 GB", tier: "Powerful", context: "32k context", useCase: "Qwen's 32B rivals GPT-4o on many tasks. Needs 32 GB RAM.", pro: true },
  { name: "Command R 35B", size: "20 GB", tier: "Powerful", context: "8k context", useCase: "Cohere's RAG-optimised model. Excellent at document Q&A.", pro: true },
  { name: "Mixtral 8x7B", size: "26 GB", tier: "Powerful", context: "32k context", useCase: "Mistral's MoE model. 8 experts, fast and very capable.", pro: true },
  { name: "Llama 3 70B", size: "42 GB", tier: "Powerful", context: "8k context", useCase: "Meta's 70B powerhouse. Needs 64 GB RAM. Near GPT-4 quality.", pro: true },
  { name: "DeepSeek R1 70B", size: "42 GB", tier: "Powerful", context: "32k context", useCase: "DeepSeek's best reasoning model. Rivals o1 on math benchmarks.", pro: true },
  { name: "Qwen 2.5 72B", size: "43 GB", tier: "Powerful", context: "32k context", useCase: "Top-tier 72B. One of the best open models. Needs 64 GB RAM.", pro: true },
  { name: "Llama 3.1 120B", size: "72 GB", tier: "Powerful", context: "128k context", useCase: "Meta's largest open model. A workstation with 192 GB RAM is recommended.", pro: true },
];

export const TIER_COLOR: Record<SpeedTier, string> = {
  Fast: "#3D9A5C",
  Balanced: "#E85D04",
  Powerful: "#7C3AED",
};

export interface Feature {
  title: string;
  desc: string;
  icon: string;
  accent?: boolean;
}

// Grounded in what the app actually does today — no vision/image analysis
// (not shipped yet), no "vault encryption" (chats live in local storage,
// not an encrypted store) — see sidecar/main.py and ui/index.html.
export const FEATURES: Feature[] = [
  {
    icon: "WifiOff",
    title: "100% Offline",
    desc: "Once a model is downloaded, Mavrik never touches the internet. Every conversation stays on your hardware, period.",
    accent: true,
  },
  {
    icon: "Brain",
    title: "25+ Local Models",
    desc: "From TinyLlama to Llama 3 70B. Mavrik scores every model against your hardware and recommends the right fit.",
  },
  {
    icon: "Eye",
    title: "Ghost Index",
    desc: "Instantly search and analyze massive documents — 1,000+ pages on Pro — indexed and processed entirely on your machine.",
  },
  {
    icon: "Cpu",
    title: "Auto Optimizer",
    desc: "Live CPU and memory monitoring built in, so you always know what your machine can handle before you load a model.",
  },
  {
    icon: "Zap",
    title: "No Network Latency",
    desc: "Inference runs on your CPU or GPU directly. No API round-trip, no rate limits, no waiting on someone else's servers.",
  },
  {
    icon: "HardDrive",
    title: "Local-Only Storage",
    desc: "Chat history and files are kept in local storage on your device. Nothing is synced or uploaded anywhere.",
  },
  {
    icon: "ShieldOff",
    title: "Zero Telemetry",
    desc: "No analytics SDKs, no usage tracking, no phone-home requests. The only network calls are the model downloads you initiate.",
  },
  {
    icon: "Gauge",
    title: "Smart Model Fit",
    desc: "Every model carries a fit score against your CPU and RAM, so you're never guessing which one will actually run well.",
  },
  {
    icon: "Laptop",
    title: "Windows Native",
    desc: "Available now on the Microsoft Store for Windows 10/11. A native macOS build for Apple Silicon and Intel is in the works.",
  },
];

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export const STEPS: Step[] = [
  { num: "01", title: "Download Mavrik", desc: "Install free from the Microsoft Store on Windows 10/11. One click, no dependencies." },
  { num: "02", title: "Auto Optimizer Scans Your Machine", desc: "Mavrik checks your CPU and RAM and scores every model for fit before you download one." },
  { num: "03", title: "Download a Model, Once", desc: "Pick the model that fits your hardware. It lives on your disk — no subscriptions, no API keys." },
  { num: "04", title: "Chat, Search, Analyze", desc: "Talk to your model, run Ghost Index on documents, and monitor your system — all in one app." },
];

export interface PricingTier {
  id: "free" | "pro" | "max";
  name: string;
  price: string;
  billing: string;
  note: string;
  cta: string;
  featured?: boolean;
  features: string[];
}

export const PRICING: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    billing: "forever",
    note: "Perfect for getting started",
    cta: "Download Free",
    features: [
      "Unlimited model downloads",
      "Up to 32k token context",
      "Ghost Index: basic file chat (up to 50 pages)",
      "Single-turn conversations",
      "Auto Optimizer advice included",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$12",
    billing: "per month",
    note: "For big documents & automation",
    cta: "Start Free Trial",
    featured: true,
    features: [
      "Unlimited model downloads",
      "Up to 128k long-context window",
      "Advanced Document RAG: chat with 1,000+ pages",
      "Cross-reference multiple files at once",
      "Local Agent Workflows: multi-step automated tasks",
    ],
  },
  {
    id: "max",
    name: "Max / Team",
    price: "$29",
    billing: "per month",
    note: "The enterprise powerhouse",
    cta: "Start Free Trial",
    features: [
      "Unlimited model downloads",
      "Unlimited context, up to each model's max",
      "Deep Knowledge Base: local folders, databases & note apps (Obsidian/Notion) — offline",
      "Shared Local Cache & Nodes: your team on one local office server",
      "Fully private alternative to enterprise cloud AI",
    ],
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "Is Mavrik free?",
    a: "Yes. The Free tier is free forever, with unlimited model downloads, up to 32k context, and basic Ghost Index file chat. Pro ($12/mo) unlocks 128k long-context, 1,000+ page document RAG, and local agent workflows; Max ($29/mo) adds a deep knowledge base and team features. Every install starts with a 21-day trial of the paid features.",
  },
  {
    q: "How is my data protected?",
    a: "All processing happens locally on your machine. Conversations, files, and chat history never leave your device — Mavrik makes zero network calls except the model downloads you explicitly start.",
  },
  {
    q: "Which platforms are supported?",
    a: "Mavrik is available now on Windows 10 and 11 — install it free from the Microsoft Store. A native macOS build for Apple Silicon and Intel is in active development and will follow.",
  },
  {
    q: "How much disk space do I need?",
    a: "Mavrik itself is a lightweight install. Models range from under 1 GB (TinyLlama) to 42 GB (Llama 3 70B, DeepSeek R1 70B). You only download the models you actually want to use.",
  },
  {
    q: "Can I switch models mid-conversation?",
    a: "Yes. Every model brings different tradeoffs between speed and depth, and Mavrik's Auto Optimizer helps you pick the one that fits your hardware before you commit to a download.",
  },
  {
    q: "What is Ghost Index?",
    a: "Ghost Index is Mavrik's local document engine. It reads and indexes PDFs entirely on-device — basic file chat on Free (up to 50 pages), and advanced document RAG across 1,000+ pages with cross-file referencing on Pro.",
  },
  {
    q: "Does Mavrik support image or vision analysis?",
    a: "Not yet — vision support requires a dedicated multimodal model and is on our roadmap. Today, Mavrik focuses on text, code, and document analysis.",
  },
  {
    q: "Is there any telemetry or tracking?",
    a: "None. No analytics SDKs, no crash reporters phoning home, no usage tracking. The only outbound requests Mavrik makes are the model downloads you initiate yourself.",
  },
  {
    q: "Can I report bugs or request features?",
    a: "Yes — use the feedback link inside the app or reach out at the contact below. We're a small team building this in the open and read everything.",
  },
  {
    q: "How do I install Mavrik?",
    a: "On Windows 10 or 11, install it free from the Microsoft Store — the download page has a direct link. There is no account or sign-up required, and it includes a 21-day trial of the paid features.",
  },
];
