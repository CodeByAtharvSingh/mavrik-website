import { useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import ModelLibrary from "@/components/sections/ModelLibrary";
import Stats from "@/components/sections/Stats";
import Privacy from "@/components/sections/Privacy";
import Pricing from "@/components/sections/Pricing";
import EarlyAccess from "@/components/sections/EarlyAccess";
import FAQ from "@/components/sections/FAQ";
import DownloadCTA from "@/components/sections/DownloadCTA";
import Footer from "@/components/sections/Footer";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ModelLibrary />
      <Stats />
      <Privacy />
      <Pricing />
      <EarlyAccess />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </div>
  );
}
