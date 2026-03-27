import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import ServicesHero from "./components/ServicesHero";
import FosterWelcomeSection from "./components/FosterWelcomeSection";
import ServicesSections from "./components/ServicesSections";
import HomeCareSection from "./components/HomeCareSection";
import WhyChooseMHHSection from "./components/WhyChooseMHHSection";
import BecomeAFosterSection from "./components/BecomeAFosterSection";
import ServicesContactSection from "./components/ServicesContactSection";

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight ?? 400;
      setShowFloat(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSurvey = () => {
    document.getElementById("foster-survey")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <main>
        <div ref={heroRef}>
          <ServicesHero />
        </div>
        <FosterWelcomeSection />
        <ServicesSections />
        <HomeCareSection />
        <WhyChooseMHHSection />
        <BecomeAFosterSection />
        <ServicesContactSection />
      </main>
      <Footer />

      {/* Floating Apply Now button */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          showFloat ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToSurvey}
          className="whitespace-nowrap group flex items-center gap-3 bg-maroon hover:bg-maroon-dark text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-full cursor-pointer transition-all duration-300 hover:gap-4"
          style={{ boxShadow: "0 8px 32px rgba(107,28,35,0.45)" }}
        >
          <div className="w-7 h-7 flex items-center justify-center bg-gold/25 rounded-full flex-shrink-0">
            <i className="ri-quill-pen-line text-gold text-sm" />
          </div>
          Apply Now
          <i className="ri-arrow-right-line text-gold/80 text-sm transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </>
  );
}
