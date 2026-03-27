const populations = [
  {
    icon: "ri-walk-line",
    title: "Individuals with Disabilities",
    desc: "Individuals with disabilities receiving Medicaid waiver services (NOW and COMP), requiring support to live independently in their own homes and communities.",
  },
  {
    icon: "ri-elderly-line",
    title: "Elderly Individuals",
    desc: "Elderly individuals needing support to remain at home, with dignity-focused assistance tailored to help seniors age in place safely.",
  },
  {
    icon: "ri-hospital-line",
    title: "Post-Hospitalization & Rehabilitation",
    desc: "Individuals recovering from hospitalization or rehabilitation who need in-home assistance during their transition back to daily routines and independence.",
  },
  {
    icon: "ri-heart-pulse-line",
    title: "Daily Living Support Clients",
    desc: "Clients requiring supervision and assistance with daily routines who do not require skilled medical care but benefit from structured, consistent in-home support.",
  },
];

export default function CLSWhoWeServe() {
  return (
    <section className="py-20 md:py-28 bg-maroon">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gold font-sans text-xs tracking-widest uppercase font-semibold">Populations Served</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Who We Serve</h2>
          <p className="text-white/75 font-sans text-base max-w-2xl mx-auto leading-relaxed">
            We provide services to individuals across Georgia who require assistance with daily living but do not require skilled medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {populations.map((p) => (
            <div key={p.title} className="flex items-start gap-5 rounded-xl p-6 border border-white/15 hover:border-white/25 transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-xl flex-shrink-0">
                <i className={`${p.icon} text-2xl text-gold`} />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/70 font-sans text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="bg-gold/15 border border-gold/30 rounded-xl p-6 text-center">
          <p className="text-white font-sans text-sm leading-relaxed max-w-2xl mx-auto">
            All services are tailored to the individual and designed to support <strong className="text-gold">long-term independence and stability.</strong> Contact us to verify Medicaid waiver eligibility and begin the service authorization process.
          </p>
        </div>
      </div>
    </section>
  );
}
