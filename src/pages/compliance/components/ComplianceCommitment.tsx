import { Link } from "react-router-dom";

const sharedStandards = [
  {
    icon: "ri-user-search-line",
    title: "Background Checks Across Both Divisions",
    desc: "Every employee and contractor across both the CPA and PHCP divisions undergoes thorough background screening before working with any child, client, or vulnerable individual.",
  },
  {
    icon: "ri-file-shield-2-line",
    title: "Documented Policies & Procedures",
    desc: "Both divisions operate under written, board-reviewed policy frameworks covering intake, service delivery, emergency response, reporting obligations, and staff conduct.",
  },
  {
    icon: "ri-user-settings-line",
    title: "Board Governance & Director Oversight",
    desc: "Maroon Hearth Homes LLC is governed by a board of directors with active Director oversight across both divisions. Compliance accountability is embedded at the leadership level.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Direct Point of Contact for Every Client",
    desc: "Every child in foster care and every CLS client has a designated staff contact responsible for their case — ensuring continuity, accountability, and a reliable channel for concerns.",
  },
];

export default function ComplianceCommitment() {
  return (
    <section className="py-20 md:py-28 bg-maroon">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold font-sans text-xs tracking-widest uppercase font-semibold">Across Both Divisions</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Our Shared Commitment
          </h2>
          <p className="text-white/70 font-sans text-base max-w-2xl mx-auto leading-relaxed">
            While each division operates under a separate regulatory framework, the following standards apply universally across Maroon Hearth Homes LLC — regardless of which program serves the individual.
          </p>
        </div>

        {/* Shared standards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {sharedStandards.map((s) => (
            <div key={s.title} className="flex items-start gap-5 rounded-xl p-6 border border-white/15" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
              <div className="w-11 h-11 flex items-center justify-center bg-gold/20 rounded-xl flex-shrink-0">
                <i className={`${s.icon} text-gold text-xl`} />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/65 font-sans text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side license comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center bg-gold/20 rounded-lg">
                <i className="ri-home-2-line text-gold text-lg" />
              </div>
              <div>
                <p className="text-white font-sans font-semibold text-sm">Division 1 — CPA</p>
                <p className="text-white/50 text-xs">Child-Placing Agency</p>
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "Licensed under Georgia Rules 290-9-2",
                "Regulated by DFCS, DCH & HFRD",
                "Serves children in state custody",
                "Provides foster care placements",
                "Monthly supervision required",
                "Mandatory abuse reporting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-checkbox-circle-fill text-gold text-sm" />
                  </div>
                  <span className="text-white/75 font-sans text-xs leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gold/10 rounded-xl p-6 border border-gold/25">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center bg-gold/20 rounded-lg">
                <i className="ri-community-line text-gold text-lg" />
              </div>
              <div>
                <p className="text-white font-sans font-semibold text-sm">Division 2 — CLA · CLS · PHCP</p>
                <p className="text-white/50 text-xs">Home &amp; Community Care</p>
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "CLA licensed by Georgia DBHDD — residential care",
                "CLS & PHCP licensed by Georgia Dept. of Community Health",
                "HIPAA compliant — client privacy protected",
                "Non-medical services only (CLS & PHCP)",
                "Serves adults, elderly, IDD & behavioral health clients",
                "NOW / COMP Medicaid waiver accepted",
                "Infection control & safety training required",
                "DBHDD-funded residential support for CLA residents",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-checkbox-circle-fill text-gold text-sm" />
                  </div>
                  <span className="text-white/75 font-sans text-xs leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center border-t border-white/20 pt-12">
          <p className="text-white/75 font-sans text-base max-w-xl mx-auto leading-relaxed mb-7">
            Questions about our compliance standards, licensing status, or agency policies? Our team is available to respond to inquiries from DFCS, partner agencies, courts, and the public.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7064890188"
              className="whitespace-nowrap bg-gold hover:bg-gold-dark text-maroon-dark font-sans font-semibold text-sm px-7 py-3.5 rounded-md transition-colors"
            >
              Call (706) 489-0188
            </a>
            <Link
              to="/about"
              className="whitespace-nowrap border-2 border-white/40 hover:border-white text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-md transition-colors hover:bg-white/10"
            >
              About Our Agency
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
