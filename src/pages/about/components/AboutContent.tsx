const facts = [
  { icon: "ri-award-line", label: "CPA License", value: "Child-Placing Agency" },
  { icon: "ri-home-heart-line", label: "PHCP License", value: "Private Home Care Provider" },
  { icon: "ri-government-line", label: "CLA — DBHDD", value: "Community Living Arrangement" },
  { icon: "ri-map-pin-2-line", label: "Service Area", value: "Richmond County & CSRA" },
  { icon: "ri-phone-line", label: "Contact", value: "(706) 489-0188" },
];

const complianceHighlights = [
  {
    icon: "ri-user-search-line",
    title: "Background-Checked Staff & Foster Parents",
    desc: "All staff members, foster parents, home care aides, and household members age 17+ undergo comprehensive criminal, CPS, and sex offender registry screenings prior to approval.",
  },
  {
    icon: "ri-file-list-3-line",
    title: "Structured Policies & Procedures",
    desc: "We operate under documented policy frameworks for both service divisions — covering intake, placement or service delivery, supervision, behavior management, emergency response, and mandatory reporting.",
  },
  {
    icon: "ri-home-wifi-line",
    title: "Ongoing Supervision & Monitoring",
    desc: "Foster homes receive monthly in-person supervision visits. CLS clients receive scheduled visits with quality monitoring at each contact. All plans are reviewed and updated regularly.",
  },
  {
    icon: "ri-group-2-line",
    title: "DFCS, DCH & HFRD Partnership",
    desc: "Our CPA division is licensed by and partners directly with DFCS for foster care placements. Our PHCP and CLA divisions are regulated by Georgia DCH and its Healthcare Facility Regulation Division (HFRD), serving Medicaid waiver participants (NOW/COMP) and private clients under those standards.",
  },
];

export default function AboutContent() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Two-column: image + key facts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=Clean%20professional%20social%20services%20agency%20office%20interior%20in%20Augusta%20Georgia%2C%20organized%20desk%20with%20legal%20documents%20and%20certification%20binders%2C%20framed%20licenses%20on%20painted%20wall%2C%20modern%20ergonomic%20furniture%2C%20natural%20window%20light%2C%20no%20people%2C%20trustworthy%20institutional%20atmosphere%2C%20photorealistic%20interior%20photography&width=800&height=600&seq=mhh-about-001&orientation=landscape"
              alt="Maroon Hearth Homes agency office"
              className="w-full h-80 object-cover object-top rounded-xl"
            />
          </div>
          <div>
            <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Agency Profile</span>
            <h2 className="font-serif text-3xl font-bold text-maroon mt-2 mb-6">Who We Are</h2>
            <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">
              Maroon Hearth Homes LLC is a licensed care organization headquartered in Augusta, Georgia. We serve Richmond County and the surrounding Central Savannah River Area (CSRA), operating two distinct service divisions across three programs:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 bg-maroon-50 rounded-lg p-4 border-l-4 border-maroon">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <i className="ri-home-2-line text-maroon text-lg" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-maroon text-sm">Division 1 — Foster Care (CPA)</p>
                  <p className="text-gray-500 font-sans text-xs leading-relaxed mt-0.5">Licensed Child-Placing Agency providing foster care and therapeutic foster care for children in the Georgia DFCS system. Regulated under Georgia Rules 290-9-2.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gold-light rounded-lg p-4 border-l-4 border-gold">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <i className="ri-community-line text-gold-dark text-lg" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-gold-dark text-sm">Division 2 — Home &amp; Community Care (CLA · CLS · PHCP)</p>
                  <p className="text-gray-500 font-sans text-xs leading-relaxed mt-0.5">
                    Three programs serving adults in the community:
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    <li className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-checkbox-blank-circle-fill text-gold-dark" style={{ fontSize: "6px" }} />
                      </div>
                      <p className="text-gray-500 font-sans text-xs leading-relaxed">
                        <strong className="text-gold-dark">CLA</strong> — Community Living Arrangement. DBHDD-funded residential care for two or more unrelated adults requiring daily personal services and supports.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-checkbox-blank-circle-fill text-gold-dark" style={{ fontSize: "6px" }} />
                      </div>
                      <p className="text-gray-500 font-sans text-xs leading-relaxed">
                        <strong className="text-gold-dark">CLS</strong> — Community Living Support. Medicaid waiver (NOW/COMP) in-home supports for adults with developmental disabilities.
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-checkbox-blank-circle-fill text-gold-dark" style={{ fontSize: "6px" }} />
                      </div>
                      <p className="text-gray-500 font-sans text-xs leading-relaxed">
                        <strong className="text-gold-dark">PHCP</strong> — Private Home Care Provider. Georgia DCH-licensed in-home personal care in the individual&apos;s own residence.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
              We operate under Director oversight, maintaining full compliance with all applicable licensing requirements across both divisions.
            </p>
            {/* Key facts */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {facts.map((f) => (
                <div key={f.label} className="bg-maroon-50 border-l-4 border-gold rounded-r-lg px-4 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className={`${f.icon} text-gold-dark text-sm`} />
                    </div>
                    <p className="text-xs text-gray-400 font-sans uppercase tracking-wide">{f.label}</p>
                  </div>
                  <p className="text-maroon font-sans font-semibold text-sm">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Highlights */}
        <div>
          <div className="text-center mb-10">
            <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Across All Programs — CPA · CLA · CLS · PHCP</span>
            <h2 className="font-serif text-3xl font-bold text-maroon mt-3 mb-4">Standards We Uphold</h2>
            <p className="text-gray-500 font-sans text-sm max-w-xl mx-auto leading-relaxed">
              Regardless of which division serves a client or family, our commitment to safety, accountability, and compliance is absolute.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceHighlights.map((item) => (
              <div key={item.title} className="flex items-start gap-5 bg-maroon-50 rounded-xl p-6 border border-maroon-100">
                <div className="w-11 h-11 flex items-center justify-center bg-maroon rounded-lg flex-shrink-0">
                  <i className={`${item.icon} text-gold text-xl`} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-maroon mb-2">{item.title}</h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
