import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import HomeHumanStrip from "./components/HomeHumanStrip";
import MissionSection from "./components/MissionSection";
import WhyMattersSection from "./components/WhyMattersSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <HomeHumanStrip />
        <MissionSection />
        <WhyMattersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
