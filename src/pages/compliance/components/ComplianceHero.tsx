import { Link } from "react-router-dom";

export default function ComplianceHero() {
  return (
    <section className="bg-maroon pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top label */}
        <div className="flex justify-center mb-5">
          <span className="text-gold font-sans text-xs tracking-widest uppercase font-semibold">
            Licensing &bull; Regulation &bull; Standards
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white text-center leading-tight mb-4">
          Safety &amp; Compliance
        </h1>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
        <p className="text-white/75 font-sans text-lg max-w-3xl mx-auto text-center leading-relaxed mb-12">
          Maroon Hearth Homes LLC operates two licensed divisions under separate regulatory frameworks. This page outlines the compliance standards, policies, and requirements governing each division.
        </p>

        {/* Dual-division badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cpa-division"
            className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors rounded-xl px-6 py-4 border border-white/20 cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gold/20 rounded-lg flex-shrink-0">
              <i className="ri-home-2-line text-gold text-xl" />
            </div>
            <div className="text-left">
              <p className="text-white font-sans font-semibold text-sm">Division 1 — Foster Care (CPA)</p>
              <p className="text-white/55 font-sans text-xs mt-0.5">Georgia Rules 290-9-2 &bull; DFCS · DCH · HFRD Regulated</p>
            </div>
            <div className="w-5 h-5 flex items-center justify-center ml-2">
              <i className="ri-arrow-down-line text-gold/70" />
            </div>
          </a>
          <a
            href="#phcp-division"
            className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors rounded-xl px-6 py-4 border border-gold/30 cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gold/20 rounded-lg flex-shrink-0">
              <i className="ri-community-line text-gold text-xl" />
            </div>
            <div className="text-left">
              <p className="text-white font-sans font-semibold text-sm">Division 2 — CLA · CLS · PHCP</p>
              <p className="text-white/55 font-sans text-xs mt-0.5">Georgia DCH &bull; DBHDD &bull; HIPAA Compliant</p>
            </div>
            <div className="w-5 h-5 flex items-center justify-center ml-2">
              <i className="ri-arrow-down-line text-gold/70" />
            </div>
          </a>
        </div>

        {/* Priority statement */}
        <div className="mt-10 bg-gold/15 border border-gold/30 rounded-xl px-8 py-5 text-center max-w-3xl mx-auto">
          <p className="text-white font-sans text-sm leading-relaxed">
            <strong className="text-gold">Child safety and compliance are our highest priorities.</strong>{" "}
            Every policy, procedure, and standard described on this page is actively enforced, regularly audited, and reflects our unconditional commitment to the safety and dignity of every individual we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
