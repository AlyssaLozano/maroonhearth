import { Link } from "react-router-dom";

const fosterItems = [
  { icon: "ri-home-heart-line", text: "Placement services for children in need of safe, stable homes" },
  { icon: "ri-mental-health-line", text: "Includes traditional and therapeutic foster care" },
  { icon: "ri-government-line", text: "Works directly with DFCS, courts, and referral agencies" },
  { icon: "ri-file-list-line", text: "Individual Service Plans and monthly supervision" },
];

const clsItems = [
  { icon: "ri-user-heart-line", text: "CLS: In-home Medicaid waiver support for individuals with disabilities" },
  { icon: "ri-home-heart-line", text: "PHCP: Private home care for elderly adults aging in place" },
  { icon: "ri-building-4-line", text: "CLA: DBHDD-funded residential care for 2+ unrelated adults" },
  { icon: "ri-shield-check-line", text: "All programs are non-medical, licensed, and compliance-driven" },
];

export default function OverviewSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Our Two Divisions</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
            One Organization. Two Service Lines.
          </h2>
          <p className="text-gray-500 font-sans text-base max-w-2xl mx-auto leading-relaxed">
            Maroon Hearth Homes LLC operates two distinct, licensed service divisions under one unified brand — each serving different populations with structured, compliance-driven care.
          </p>
        </div>

        {/* Two Division Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Foster Care Division */}
          <div className="rounded-xl border border-maroon-100 overflow-hidden">
            <div className="bg-maroon px-7 py-5 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gold/20 rounded-lg">
                <i className="ri-home-2-line text-gold text-xl" />
              </div>
              <div>
                <p className="font-sans text-xs text-gold/80 uppercase tracking-widest">Division 1</p>
                <h3 className="font-serif text-lg font-bold text-white">Foster Care &amp; Therapeutic Foster Care</h3>
              </div>
            </div>
            <div className="bg-maroon-50 px-7 py-6">
              <p className="text-gray-500 font-sans text-sm leading-relaxed mb-5">
                Licensed Child-Placing Agency (CPA) providing 24-hour supervised foster care and therapeutic foster care for children in the Georgia DFCS system. Regulated under Georgia Rules 290-9-2.
              </p>
              <ul className="space-y-3 mb-7">
                {fosterItems.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${f.icon} text-maroon text-sm`} />
                    </div>
                    <span className="text-gray-600 font-sans text-sm leading-relaxed">{f.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Link to="/services#foster-care" className="whitespace-nowrap bg-maroon hover:bg-maroon-dark text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-md transition-colors">
                  Foster Care
                </Link>
                <Link to="/services#therapeutic-foster-care" className="whitespace-nowrap border border-maroon text-maroon hover:bg-maroon hover:text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-md transition-colors">
                  Therapeutic FC
                </Link>
              </div>
            </div>
          </div>

          {/* CLS Division */}
          <div className="rounded-xl border border-gold/30 overflow-hidden">
            <div className="bg-gold-dark px-7 py-5 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg">
                <i className="ri-community-line text-white text-xl" />
              </div>
              <div>
                <p className="font-sans text-xs text-white/70 uppercase tracking-widest">Division 2</p>
                <h3 className="font-serif text-lg font-bold text-white">Home &amp; Community Care <span className="text-white/70 font-normal text-sm">· CLS · PHCP · CLA</span></h3>
              </div>
            </div>
            <div className="bg-gold-light px-7 py-6">
              <p className="text-gray-600 font-sans text-sm leading-relaxed mb-5">
                Licensed Private Home Care Provider (PHCP) offering three programs: Community Living Support (CLS) under Medicaid waiver, Private Home Care for aging adults, and Community Living Arrangements (CLA) funded through DBHDD. All non-medical, all regulated under Georgia DCH and DBHDD.
              </p>
              <ul className="space-y-3 mb-7">
                {clsItems.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${f.icon} text-gold-dark text-sm`} />
                    </div>
                    <span className="text-gray-600 font-sans text-sm leading-relaxed">{f.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link to="/cls#cls" className="whitespace-nowrap bg-gold-dark hover:bg-gold text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-md transition-colors">
                  CLS
                </Link>
                <Link to="/cls#phcp" className="whitespace-nowrap border border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-md transition-colors">
                  PHCP
                </Link>
                <Link to="/cls#cla" className="whitespace-nowrap border border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-md transition-colors">
                  CLA
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Unified Compliance strip */}
        <div className="bg-maroon rounded-lg px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-shield-check-fill text-gold text-2xl" />
            </div>
            <p className="text-white/90 font-sans text-sm">
              <strong className="text-white">Dual-licensed in Georgia</strong> &mdash; Child-Placing Agency (Rules 290-9-2) &amp; Private Home Care Provider (PHCP). All staff background-checked.
            </p>
          </div>
          <Link
            to="/about"
            className="whitespace-nowrap text-gold hover:text-gold-dark font-sans font-semibold text-sm flex items-center gap-1 transition-colors"
          >
            About Our Agency
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-right-line" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
