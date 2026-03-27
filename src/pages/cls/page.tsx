import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import CLSHero from "./components/CLSHero";
import CLSPhotoStrip from "./components/CLSPhotoStrip";
import ProgramsOverview from "./components/ProgramsOverview";
import CLASection from "./components/CLASection";
import CLSServicesSection from "./components/CLSServicesSection";
import CLSWhoWeServe from "./components/CLSWhoWeServe";
import CLSApproach from "./components/CLSApproach";
import CLSHowItWorks from "./components/CLSHowItWorks";
import PHCPSection from "./components/PHCPSection";
import CLSForm from "./components/CLSForm";

export default function CLS() {
  return (
    <>
      <Navbar />
      <main>
        <CLSHero />
        <CLSPhotoStrip />

        {/* Program Overview — quick blurbs + jump links */}
        <ProgramsOverview />

        {/* CLA Division — Program 1 */}
        <div id="cla">
          <div className="bg-maroon py-5 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gold rounded-xl flex-shrink-0">
                  <i className="ri-building-4-line text-maroon text-xl" />
                </div>
                <div>
                  <p className="text-gold font-sans text-xs tracking-widest uppercase font-semibold">Program 1</p>
                  <h2 className="font-serif text-xl font-bold text-white">Community Living Arrangement (CLA)</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 text-white/80 font-sans text-xs px-3 py-1 rounded-full border border-white/20">DBHDD Funded</span>
                <span className="bg-white/10 text-white/80 font-sans text-xs px-3 py-1 rounded-full border border-white/20">Residential Care</span>
                <span className="bg-white/10 text-white/80 font-sans text-xs px-3 py-1 rounded-full border border-white/20">IDD &amp; Behavioral Health</span>
              </div>
            </div>
          </div>
          <CLASection />
        </div>

        {/* Divider */}
        <div className="bg-maroon-50 py-8 px-6 border-y border-maroon-100">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-500 font-sans text-sm italic">
              Scroll down for Program 2 — In-home Medicaid waiver support for individuals with disabilities.
            </p>
          </div>
        </div>

        {/* CLS Division — Program 2 */}
        <div id="cls">
          <div className="bg-gold-dark py-5 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-maroon rounded-xl flex-shrink-0">
                  <i className="ri-community-line text-gold text-xl" />
                </div>
                <div>
                  <p className="text-white/70 font-sans text-xs tracking-widest uppercase font-semibold">Program 2</p>
                  <h2 className="font-serif text-xl font-bold text-white">Community Living Support (CLS)</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/15 text-white font-sans text-xs px-3 py-1 rounded-full border border-white/25">Medicaid Waiver</span>
                <span className="bg-white/15 text-white font-sans text-xs px-3 py-1 rounded-full border border-white/25">NOW / COMP</span>
                <span className="bg-white/15 text-white font-sans text-xs px-3 py-1 rounded-full border border-white/25">Disability Support</span>
              </div>
            </div>
          </div>
          <CLSServicesSection />
          <CLSWhoWeServe />
          <CLSApproach />
          <CLSHowItWorks />
        </div>

        {/* Divider */}
        <div className="bg-maroon-50 py-8 px-6 border-y border-maroon-100">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-500 font-sans text-sm italic">
              Scroll down for Program 3 — Private home care for elderly adults aging in place.
            </p>
          </div>
        </div>

        {/* PHCP Division — Program 3 */}
        <div id="phcp">
          <div className="bg-maroon-dark py-5 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gold rounded-xl flex-shrink-0">
                  <i className="ri-home-heart-line text-maroon text-xl" />
                </div>
                <div>
                  <p className="text-gold font-sans text-xs tracking-widest uppercase font-semibold">Program 3</p>
                  <h2 className="font-serif text-xl font-bold text-white">Private Home Care Provider (PHCP)</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 text-white/80 font-sans text-xs px-3 py-1 rounded-full border border-white/20">Georgia DCH Licensed</span>
                <span className="bg-white/10 text-white/80 font-sans text-xs px-3 py-1 rounded-full border border-white/20">Aging in Place</span>
                <span className="bg-white/10 text-white/80 font-sans text-xs px-3 py-1 rounded-full border border-white/20">HIPAA Compliant</span>
              </div>
            </div>
          </div>
          <PHCPSection />
        </div>

        <CLSForm />
      </main>
      <Footer />
    </>
  );
}
