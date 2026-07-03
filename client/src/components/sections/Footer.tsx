import { Github, Globe, Twitter } from "lucide-react";

const LOGO_MARK = "/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white/60 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={LOGO_MARK} alt="Mavrik" className="w-7 h-7 object-contain" />
              <span className="text-white font-extrabold tracking-widest text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                MAVRIK
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-5">
              Private AI for people who don't compromise. Your intelligence, your machine, your rules.
            </p>
            <div className="flex items-center gap-3">
              {[Github, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Features", href: "#features" },
                { label: "Models", href: "#models" },
                { label: "Pricing", href: "#pricing" },
                { label: "Download", href: "#download" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "FAQ", href: "#faq" },
                { label: "Early Access", href: "#early-access" },
                { label: "Contact", href: "mailto:support@mavrik.app" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mb-8" style={{ background: "rgba(255,255,255,0.06)", height: "1px" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2026 Mavrik. All rights reserved.</span>
          <span
            className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide"
            style={{ background: "var(--mavrik-orange)", color: "white" }}
          >
            Founder &amp; CEO — Atharv Singh
          </span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>macOS &amp; Windows — coming soon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
