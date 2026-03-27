const services = [
  {
    icon: "ri-user-heart-line",
    title: "Daily Personal Services",
    items: [
      "Assistance with bathing, dressing, and grooming",
      "Meal preparation and nutrition support",
      "Mobility and transfer assistance",
      "Medication reminders (non-administration)",
    ],
    desc: "Hands-on daily support ensuring each resident can meet personal care needs with dignity, consistency, and appropriate supervision in a residential setting.",
  },
  {
    icon: "ri-brain-line",
    title: "Behavioral & Developmental Support",
    items: [
      "Individual support planning (ISP-aligned)",
      "Behavioral support and skill-building",
      "Community integration activities",
      "Life skills training and development",
    ],
    desc: "Structured support aligned with each resident's Individual Support Plan, focused on behavioral development, independence skills, and meaningful community participation.",
  },
  {
    icon: "ri-home-4-line",
    title: "Residential Supervision",
    items: [
      "24-hour supervision and safety oversight",
      "Emergency response and crisis protocols",
      "Staff-supported routines and scheduling",
      "Safe, structured home environment",
    ],
    desc: "Round-the-clock residential supervision ensuring the safety and stability of each resident through consistent staffing, structured routines, and emergency-ready protocols.",
  },
  {
    icon: "ri-group-line",
    title: "Community Integration",
    items: [
      "Transportation to community activities",
      "Supported employment preparation",
      "Social skill building and peer interaction",
      "Recreational and cultural engagement",
    ],
    desc: "Helping residents connect meaningfully with their community through outings, supported employment readiness, social engagement, and activities that reflect individual interests.",
  },
];

export default function CLASection() {
  return (
    <section className="py-20 md:py-28 bg-maroon-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">DBHDD-Funded Residential Care</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
            Community Living Arrangement
          </h2>
          <p className="text-gray-500 font-sans text-base max-w-2xl mx-auto leading-relaxed">
            A Community Living Arrangement (CLA) is a licensed residence that provides or arranges daily personal services, supports, care, and treatment for two or more unrelated adults whose residential services are funded, in whole or in part, by the Georgia Department of Behavioral Health and Developmental Disabilities (DBHDD).
          </p>
        </div>

        {/* What makes a CLA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: "ri-building-4-line",
              label: "Licensed Residence",
              desc: "A CLA is a physical home — whether operated for profit or not — that is licensed and regulated as a residential care setting under DBHDD.",
            },
            {
              icon: "ri-group-2-line",
              label: "2+ Unrelated Adults",
              desc: "CLAs serve two or more adults who are not related to the owner or administrator by blood or marriage, creating a supported home and community care environment.",
            },
            {
              icon: "ri-government-line",
              label: "DBHDD-Supported Funding",
              desc: "Residential services are financially supported, in whole or in part, through funds designated by the Georgia Department of Behavioral Health and Developmental Disabilities.",
            },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-maroon-100 rounded-xl p-7 text-center">
              <div className="w-14 h-14 flex items-center justify-center bg-maroon rounded-xl mx-auto mb-5">
                <i className={`${item.icon} text-2xl text-gold`} />
              </div>
              <h3 className="font-serif text-base font-bold text-maroon mb-3">{item.label}</h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Services grid */}
        <div className="mb-10">
          <h3 className="font-serif text-2xl font-bold text-maroon text-center mb-8">Services Provided in a CLA</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl border border-maroon-100 overflow-hidden">
                <div className="bg-maroon px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-gold/20 rounded-lg">
                    <i className={`${svc.icon} text-xl text-gold`} />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">{svc.title}</h4>
                </div>
                <div className="px-6 py-5">
                  <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-checkbox-circle-fill text-gold-dark text-sm" />
                        </div>
                        <span className="text-gray-600 font-sans text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who qualifies */}
        <div className="bg-maroon rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-gold font-sans text-xs tracking-widest uppercase font-semibold">Who Qualifies</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-2 mb-4">Who is a CLA For?</h3>
              <p className="text-white/80 font-sans text-sm leading-relaxed mb-6">
                CLAs serve adults with intellectual or developmental disabilities, adults with behavioral health needs, and others who require structured residential support and cannot safely live independently — and whose care is funded through DBHDD programs or Medicaid waivers.
              </p>
              <ul className="space-y-3">
                {[
                  "Adults with intellectual or developmental disabilities (IDD)",
                  "Adults with behavioral health diagnoses requiring structure",
                  "DBHDD waiver participants requiring residential placement",
                  "Individuals transitioning from institutional or hospital care",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-arrow-right-circle-fill text-gold text-base" />
                    </div>
                    <span className="text-white/80 font-sans text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-7">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-xl mb-5">
                <i className="ri-information-line text-2xl text-gold" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white mb-3">Regulatory Authority</h4>
              <p className="text-white/75 font-sans text-sm leading-relaxed mb-4">
                Community Living Arrangements are licensed and regulated by the <strong className="text-gold">Georgia Department of Behavioral Health and Developmental Disabilities (DBHDD)</strong>. All CLAs must meet Georgia state standards for residential care, staffing, safety, and individual support planning.
              </p>
              <p className="text-white/60 font-sans text-xs leading-relaxed">
                Maroon Hearth Homes LLC operates its CLA program in compliance with all applicable DBHDD requirements and Georgia regulations governing residential community care for adults.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
