import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import AboutHero from "./components/AboutHero";
import NameSection from "./components/NameSection";
import AboutContent from "./components/AboutContent";
import ComplianceSection from "./components/ComplianceSection";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <NameSection />
        <AboutContent />
        <ComplianceSection />
      </main>
      <Footer />
    </>
  );
}
