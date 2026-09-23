// Microsoft Store listing for the Windows build. Locale params (hl/gl) are
// intentionally omitted so the Store resolves to each visitor's own region.
export const STORE_URL = "https://apps.microsoft.com/detail/9ppfcng3l2js";

// On-site download page listing available platforms.
export const DOWNLOAD_PATH = "/download";

// Feedback is a native page on this site (star rating + review), backed by a
// Vercel serverless function — see /api/feedback.js and pages/Feedback.tsx.
export const FEEDBACK_PATH = "/feedback";

export type ModelTier = "Light" | "Balanced" | "Most capable" | "Vision";


export interface ModelEntry {
  name: string;
  size: string;
  tier: ModelTier;
}

// The full Mavrik model catalog as it ships in the app: 179 entries across four
// tiers. Names and sizes are transcribed verbatim from the app's own catalog.
export const MODELS: ModelEntry[] = [
  // ── Light (46) ──
  { name: "SmolLM2 135M", size: "0.11 GB", tier: "Light" },
  { name: "Gemma 3 270M", size: "0.25 GB", tier: "Light" },
  { name: "SmolLM2 360M", size: "0.27 GB", tier: "Light" },
  { name: "Qwen 2.5 0.5B", size: "0.40 GB", tier: "Light" },
  { name: "Qwen 2.5 Coder 0.5B", size: "0.40 GB", tier: "Light" },
  { name: "Qwen 3 0.6B", size: "0.48 GB", tier: "Light" },
  { name: "Qwen 3.5 0.8B", size: "0.58 GB", tier: "Light" },
  { name: "TinyLlama 1.1B", size: "0.67 GB", tier: "Light" },
  { name: "Llama 3.2 1B", size: "0.81 GB", tier: "Light" },
  { name: "Gemma 3 1B", size: "0.81 GB", tier: "Light" },
  { name: "Ouro 1.4B", size: "0.9 GB", tier: "Light" },
  { name: "Qwen 2.5 1.5B", size: "0.99 GB", tier: "Light" },
  { name: "Qwen 2.5 Coder 1.5B", size: "0.99 GB", tier: "Light" },
  { name: "SmolLM2 1.7B", size: "1.1 GB", tier: "Light" },
  { name: "Falcon 3 1B", size: "1.1 GB", tier: "Light" },
  { name: "DeepSeek R1 1.5B", size: "1.1 GB", tier: "Light" },
  { name: "InternLM 2.5 1.8B", size: "1.2 GB", tier: "Light" },
  { name: "Qwen 3 1.7B", size: "1.3 GB", tier: "Light" },
  { name: "Qwen 3.8 2B Distill", size: "1.3 GB", tier: "Light" },
  { name: "Qwen 3.5 2B", size: "1.4 GB", tier: "Light" },
  { name: "Granite 3.2 2B", size: "1.6 GB", tier: "Light" },
  { name: "EXAONE 3.5 2.4B", size: "1.6 GB", tier: "Light" },
  { name: "CodeGemma 2B", size: "1.6 GB", tier: "Light" },
  { name: "MiniCPM 5 2B", size: "1.6 GB", tier: "Light" },
  { name: "Gemma 2 2B", size: "1.7 GB", tier: "Light" },
  { name: "Stable Code 3B", size: "1.7 GB", tier: "Light" },
  { name: "LFM2.5 2.6B", size: "1.7 GB", tier: "Light" },
  { name: "Qwen 2.5 3B", size: "1.9 GB", tier: "Light" },
  { name: "SmolLM3 3B", size: "1.9 GB", tier: "Light" },
  { name: "Llama 3.2 3B", size: "2.0 GB", tier: "Light" },
  { name: "Falcon 3 3B", size: "2.0 GB", tier: "Light" },
  { name: "Hermes 3 Llama 3.2 3B", size: "2.0 GB", tier: "Light" },
  { name: "Granite 4.0 Micro 3B", size: "2.1 GB", tier: "Light" },
  { name: "K2 Horizon 0.9B", size: "2.2 GB", tier: "Light" },
  { name: "Phi-3 Mini 3.8B", size: "2.4 GB", tier: "Light" },
  { name: "Phi-3.5 Mini 3.8B", size: "2.4 GB", tier: "Light" },
  { name: "H2O Danube3 4B", size: "2.4 GB", tier: "Light" },
  { name: "Qwen 3 4B", size: "2.5 GB", tier: "Light" },
  { name: "Gemma 3 4B", size: "2.5 GB", tier: "Light" },
  { name: "Spark X2.5 4B", size: "2.6 GB", tier: "Light" },
  { name: "Nanbeige 4.2 3B", size: "2.7 GB", tier: "Light" },
  { name: "Qwen 3.8 4B Distill", size: "2.8 GB", tier: "Light" },
  { name: "Qwen 3.5 4B", size: "3.0 GB", tier: "Light" },
  { name: "Gemma 3n E2B", size: "3.0 GB", tier: "Light" },
  { name: "Gemma 4 E2B", size: "3.1 GB", tier: "Light" },
  { name: "Ling 3.0 Tiny", size: "4.9 GB", tier: "Light" },
  // ── Balanced (63) ──
  { name: "Yi 1.5 6B Chat", size: "3.7 GB", tier: "Balanced" },
  { name: "Code Llama 7B", size: "4.1 GB", tier: "Balanced" },
  { name: "Granite 4.0 Tiny 7B-A1B", size: "4.2 GB", tier: "Balanced" },
  { name: "Mistral 7B", size: "4.4 GB", tier: "Balanced" },
  { name: "Neural Chat 7B", size: "4.4 GB", tier: "Balanced" },
  { name: "OpenHermes 2.5 Mistral 7B", size: "4.4 GB", tier: "Balanced" },
  { name: "Zephyr 7B Beta", size: "4.4 GB", tier: "Balanced" },
  { name: "OpenChat 3.5 7B", size: "4.4 GB", tier: "Balanced" },
  { name: "Starling LM 7B Beta", size: "4.4 GB", tier: "Balanced" },
  { name: "Mathstral 7B", size: "4.4 GB", tier: "Balanced" },
  { name: "OLMo 2 7B", size: "4.5 GB", tier: "Balanced" },
  { name: "Gemma 3n E4B", size: "4.5 GB", tier: "Balanced" },
  { name: "Falcon 3 7B", size: "4.6 GB", tier: "Balanced" },
  { name: "Qwen 2.5 7B", size: "4.7 GB", tier: "Balanced" },
  { name: "InternLM 2.5 7B", size: "4.7 GB", tier: "Balanced" },
  { name: "DeepSeek R1 Qwen 7B", size: "4.7 GB", tier: "Balanced" },
  { name: "Qwen 2.5 Coder 7B", size: "4.7 GB", tier: "Balanced" },
  { name: "OpenCoder 8B", size: "4.7 GB", tier: "Balanced" },
  { name: "Qwen 2.5 Math 7B", size: "4.7 GB", tier: "Balanced" },
  { name: "EXAONE 3.5 7.8B", size: "4.8 GB", tier: "Balanced" },
  { name: "Llama 3.1 8B", size: "4.9 GB", tier: "Balanced" },
  { name: "Ministral 8B", size: "4.9 GB", tier: "Balanced" },
  { name: "Granite 3.3 8B", size: "4.9 GB", tier: "Balanced" },
  { name: "Hermes 3 Llama 3.1 8B", size: "4.9 GB", tier: "Balanced" },
  { name: "Dolphin 3.0 Llama 3.1 8B", size: "4.9 GB", tier: "Balanced" },
  { name: "Llama 3.1 Nemotron Nano 8B", size: "4.9 GB", tier: "Balanced" },
  { name: "DeepSeek R1 Llama 8B", size: "4.9 GB", tier: "Balanced" },
  { name: "Qwen 3 8B", size: "5.0 GB", tier: "Balanced" },
  { name: "Gemma 4 E4B", size: "5.0 GB", tier: "Balanced" },
  { name: "DeepSeek R1 0528 Qwen3 8B", size: "5.0 GB", tier: "Balanced" },
  { name: "Teuken 7B", size: "5.0 GB", tier: "Balanced" },
  { name: "Aya Expanse 8B", size: "5.1 GB", tier: "Balanced" },
  { name: "Aya 23 8B", size: "5.1 GB", tier: "Balanced" },
  { name: "Zeta 2.1", size: "5.1 GB", tier: "Balanced" },
  { name: "Sailor2 8B", size: "5.2 GB", tier: "Balanced" },
  { name: "Yi 1.5 9B Chat", size: "5.3 GB", tier: "Balanced" },
  { name: "CodeGemma 7B", size: "5.3 GB", tier: "Balanced" },
  { name: "Yi Coder 9B", size: "5.3 GB", tier: "Balanced" },
  { name: "InternLM 3 8B", size: "5.4 GB", tier: "Balanced" },
  { name: "EuroLLM 9B", size: "5.6 GB", tier: "Balanced" },
  { name: "Gemma 2 9B", size: "5.8 GB", tier: "Balanced" },
  { name: "Ornith 1.5 9B", size: "5.8 GB", tier: "Balanced" },
  { name: "GLM-4 9B Chat", size: "6.2 GB", tier: "Balanced" },
  { name: "GLM-4 9B 0414", size: "6.2 GB", tier: "Balanced" },
  { name: "Qwen 3.5 9B", size: "6.2 GB", tier: "Balanced" },
  { name: "Falcon 3 10B", size: "6.3 GB", tier: "Balanced" },
  { name: "SOLAR 10.7B", size: "6.5 GB", tier: "Balanced" },
  { name: "Nemotron Nano 9B v2", size: "6.5 GB", tier: "Balanced" },
  { name: "Gemma 4 12B", size: "7.1 GB", tier: "Balanced" },
  { name: "Gemma 3 12B", size: "7.3 GB", tier: "Balanced" },
  { name: "Mistral Nemo 12B", size: "7.5 GB", tier: "Balanced" },
  { name: "Vikhr Nemo 12B (Russian)", size: "7.5 GB", tier: "Balanced" },
  { name: "Code Llama 13B", size: "7.9 GB", tier: "Balanced" },
  { name: "OLMo 2 13B", size: "8.3 GB", tier: "Balanced" },
  { name: "Qwen 3 14B", size: "9.0 GB", tier: "Balanced" },
  { name: "DeepSeek R1 Qwen 14B", size: "9.0 GB", tier: "Balanced" },
  { name: "Qwen 2.5 Coder 14B", size: "9.0 GB", tier: "Balanced" },
  { name: "Hermes 4 14B", size: "9.0 GB", tier: "Balanced" },
  { name: "Phi-4 14B", size: "9.1 GB", tier: "Balanced" },
  { name: "Phi-4 Reasoning Plus 14B", size: "9.1 GB", tier: "Balanced" },
  { name: "StarCoder2 15B", size: "9.9 GB", tier: "Balanced" },
  { name: "DeepSeek Coder V2 Lite 16B", size: "10.4 GB", tier: "Balanced" },
  { name: "Qwen Coder 3B", size: "1.9 GB", tier: "Balanced" },
  // ── Most capable (46) ──
  { name: "Llama 3 8B", size: "4.9 GB", tier: "Most capable" },
  { name: "Qwen 2.5 14B", size: "9.0 GB", tier: "Most capable" },
  { name: "Codestral 22B", size: "13.3 GB", tier: "Most capable" },
  { name: "Mistral Small 3.1 24B", size: "14.3 GB", tier: "Most capable" },
  { name: "Mistral Small 3.2 24B", size: "14.3 GB", tier: "Most capable" },
  { name: "Magistral Small 24B", size: "14.3 GB", tier: "Most capable" },
  { name: "Devstral Small 24B", size: "14.3 GB", tier: "Most capable" },
  { name: "Qwen 3.8 27B", size: "16.5 GB", tier: "Most capable" },
  { name: "Gemma 2 27B", size: "16.6 GB", tier: "Most capable" },
  { name: "Gemma 3 27B", size: "16.6 GB", tier: "Most capable" },
  { name: "Qwen 3.5 27B", size: "18.0 GB", tier: "Most capable" },
  { name: "Qwen 3.6 27B", size: "18.0 GB", tier: "Most capable" },
  { name: "K2 Horizon 7B", size: "18.0 GB", tier: "Most capable" },
  { name: "Gemma 4 31B", size: "18.3 GB", tier: "Most capable" },
  { name: "Qwen 3 30B-A3B", size: "18.6 GB", tier: "Most capable" },
  { name: "Qwen 3 Coder 30B-A3B", size: "18.6 GB", tier: "Most capable" },
  { name: "Granite 4.0 Small 32B-A9B", size: "19.6 GB", tier: "Most capable" },
  { name: "GLM-4 32B 0414", size: "19.7 GB", tier: "Most capable" },
  { name: "GLM-Z1 32B", size: "19.7 GB", tier: "Most capable" },
  { name: "Qwen 3 32B", size: "19.8 GB", tier: "Most capable" },
  { name: "Aya Expanse 32B", size: "19.8 GB", tier: "Most capable" },
  { name: "DeepSeek R1 32B", size: "19.9 GB", tier: "Most capable" },
  { name: "Qwen 2.5 32B", size: "19.9 GB", tier: "Most capable" },
  { name: "QwQ 32B", size: "19.9 GB", tier: "Most capable" },
  { name: "Qwen 2.5 Coder 32B", size: "19.9 GB", tier: "Most capable" },
  { name: "Yi 1.5 34B Chat", size: "20.7 GB", tier: "Most capable" },
  { name: "Command R 35B", size: "21.5 GB", tier: "Most capable" },
  { name: "Seed-OSS 36B", size: "21.8 GB", tier: "Most capable" },
  { name: "Qwen 3.5 35B-A3B", size: "22.3 GB", tier: "Most capable" },
  { name: "Qwen 3.6 35B-A3B", size: "22.3 GB", tier: "Most capable" },
  { name: "Tiel Coder 35B-A3B", size: "22.4 GB", tier: "Most capable" },
  { name: "Karnak 40B v1.0", size: "24.7 GB", tier: "Most capable" },
  { name: "Ornith 1.5 35B-A3B", size: "26.2 GB", tier: "Most capable" },
  { name: "Mixtral 8x7B", size: "26.4 GB", tier: "Most capable" },
  { name: "Dolphin 2.7 Mixtral 8x7B", size: "26.4 GB", tier: "Most capable" },
  { name: "Nemotron Super 49B", size: "30.2 GB", tier: "Most capable" },
  { name: "Llama 3 70B", size: "42.5 GB", tier: "Most capable" },
  { name: "Llama 3.1 70B", size: "42.5 GB", tier: "Most capable" },
  { name: "Llama 3.3 70B", size: "42.5 GB", tier: "Most capable" },
  { name: "DeepSeek R1 70B", size: "42.5 GB", tier: "Most capable" },
  { name: "Hermes 4 70B", size: "42.5 GB", tier: "Most capable" },
  { name: "Tulu 3 70B", size: "42.5 GB", tier: "Most capable" },
  { name: "Qwen 2.5 72B", size: "47.4 GB", tier: "Most capable" },
  { name: "Athene V2 Chat 72B", size: "47.4 GB", tier: "Most capable" },
  { name: "K2 Horizon MoVA 36B-A4B", size: "74.9 GB", tier: "Most capable" },
  { name: "GLM-5.3 Flash (Q2)", size: "96.5 GB", tier: "Most capable" },
  // ── Vision (24) ──
  { name: "SmolVLM 500M", size: "0.44 GB", tier: "Vision" },
  { name: "Qwen 2 VL 2B", size: "0.99 GB", tier: "Vision" },
  { name: "SmolVLM2 2.2B", size: "1.1 GB", tier: "Vision" },
  { name: "Qwen 2.5 VL 3B", size: "1.9 GB", tier: "Vision" },
  { name: "Gemma 3 4B (Vision)", size: "2.5 GB", tier: "Vision" },
  { name: "Qwen 3 VL 4B", size: "2.5 GB", tier: "Vision" },
  { name: "Moondream 2", size: "2.8 GB", tier: "Vision" },
  { name: "LLaVA 1.5 7B", size: "4.1 GB", tier: "Vision" },
  { name: "LLaVA 1.6 Mistral 7B", size: "4.4 GB", tier: "Vision" },
  { name: "Qwen 2 VL 7B", size: "4.7 GB", tier: "Vision" },
  { name: "Qwen 2.5 VL 7B", size: "4.7 GB", tier: "Vision" },
  { name: "MiniCPM-V 2.6 8B", size: "4.7 GB", tier: "Vision" },
  { name: "InternVL 3 8B", size: "4.7 GB", tier: "Vision" },
  { name: "Qwen 2.5 Omni 7B (Vision + Audio)", size: "4.7 GB", tier: "Vision" },
  { name: "Gemma 4 E4B (Vision + Audio)", size: "5.0 GB", tier: "Vision" },
  { name: "MiniCPM-V 4.5 8B", size: "5.0 GB", tier: "Vision" },
  { name: "Qwen 3 VL 8B", size: "5.0 GB", tier: "Vision" },
  { name: "Gemma 4 12B (Vision + Audio)", size: "7.1 GB", tier: "Vision" },
  { name: "Gemma 3 12B (Vision)", size: "7.3 GB", tier: "Vision" },
  { name: "InternVL 3 14B", size: "9.0 GB", tier: "Vision" },
  { name: "Gemma 3 27B (Vision)", size: "16.6 GB", tier: "Vision" },
  { name: "Qwen 3 VL 30B-A3B", size: "18.6 GB", tier: "Vision" },
  { name: "Qwen 2.5 VL 32B", size: "19.9 GB", tier: "Vision" },
  { name: "Qwen 2.5 VL 72B", size: "47.4 GB", tier: "Vision" },
];

export const TIER_COLOR: Record<ModelTier, string> = {
  Light: "#3D9A5C",
  Balanced: "#E85D04",
  "Most capable": "#7C3AED",
  Vision: "#0EA5E9",
};

export const TIER_BLURB: Record<ModelTier, string> = {
  Light: "Runs on almost anything",
  Balanced: "The sweet spot for most laptops",
  "Most capable": "For powerful machines",
  Vision: "Understands images",
};

export interface Feature {
  title: string;
  desc: string;
  icon: string;
  accent?: boolean;
}

// Grounded in what the app actually does today. Note: no "vault encryption"
// claim — chats live in local storage, not an encrypted store.
export const FEATURES: Feature[] = [
  {
    icon: "WifiOff",
    title: "100% Offline",
    desc: "Once a model is downloaded, Mavrik never touches the internet. Every conversation stays on your hardware, period.",
    accent: true,
  },
  {
    icon: "Brain",
    title: "170+ Local Models",
    desc: "From a 0.11 GB SmolLM2 to Llama 3.3 70B. Mavrik scores every model against your hardware and recommends the right fit.",
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
    q: "Is Mavrik a wrapper?",
    a: "No. Mavrik is built from scratch — a Rust core with a purpose-built Python inference backend, not a user interface bolted onto someone else's tool. Model loading, memory handling and the request path are tuned specifically for running on your own hardware rather than inherited from a general-purpose runtime, which is where Mavrik's speed advantage over local AI tools like Ollama and LM Studio comes from.",
  },
  {
    q: "Which platforms are supported?",
    a: "Mavrik is available now on Windows 10 and 11 — install it free from the Microsoft Store. A native macOS build for Apple Silicon and Intel is in active development and will follow.",
  },
  {
    q: "How much disk space do I need?",
    a: "Mavrik itself is a lightweight install. Models range from 0.11 GB (SmolLM2 135M) to 96 GB (GLM-5.3 Flash), with most everyday models landing between 2 GB and 9 GB. You only download the ones you actually want to use.",
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
    a: "Yes. The library includes 24 vision models — from SmolVLM 500M up to Qwen 2.5 VL 72B — that read images entirely on your device. A few, like Qwen 2.5 Omni and the Gemma 4 builds, handle audio too. Download a vision model and you can ask questions about screenshots, diagrams and photos offline.",
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
