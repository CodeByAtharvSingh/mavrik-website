import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { WAITLIST_URL } from "@/data/site";

const LOGO_MARK = "/logo.png";

const NAV_ITEMS = ["Features", "Models", "Pricing", "FAQ"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Over the sky hero (top of page) we use light text; once scrolled the bar
  // turns white so dark text is used instead.
  const overSky = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={LOGO_MARK} alt="Mavrik" className="w-8 h-8 object-contain" />
          <span
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "0.04em" }}
            className={`text-lg transition-colors ${overSky ? "text-white" : "text-foreground"}`}
          >
            MAVRIK
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={
                overSky
                  ? "text-sm font-medium text-white/85 hover:text-white transition-colors"
                  : "nav-link"
              }
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={
              overSky
                ? "px-5 py-2.5 text-sm font-bold rounded-full bg-white text-[var(--mavrik-orange)] hover:bg-white/90 transition-colors flex items-center gap-2"
                : "btn-mavrik px-5 py-2.5 text-sm flex items-center gap-2"
            }
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <Download className="w-4 h-4" />
            Get Notified
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 transition-all duration-200 ${overSky ? "bg-white" : "bg-foreground"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 transition-all duration-200 ${overSky ? "bg-white" : "bg-foreground"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 transition-all duration-200 ${overSky ? "bg-white" : "bg-foreground"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mavrik px-5 py-2.5 text-sm text-center mt-2"
          >
            Get Notified
          </a>
        </div>
      )}
    </nav>
  );
}
