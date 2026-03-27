const steps = [
  {
    num: "01",
    icon: "ri-clipboard-line",
    title: "Initial Assessment",
    desc: "We begin with an in-home or virtual assessment to understand the client's needs, environment, and goals.",
  },
  {
    num: "02",
    icon: "ri-file-text-line",
    title: "Service Plan Development",
    desc: "A written plan of care is developed outlining the services to be provided, frequency of visits, and specific tasks to be performed.",
  },
  {
    num: "03",
    icon: "ri-calendar-check-line",
    title: "Service Delivery",
    desc: "Trained caregivers provide scheduled services in accordance with the service plan.",
  },
  {
    num: "04",
    icon: "ri-bar-chart-grouped-line",
    title: "Ongoing Supervision",
    desc: "Supervisory staff monitor service quality, conduct regular check-ins, and update service plans as needs change.",
  },
];

const compliancePoints = [
  {
    icon: "ri-shield-check-line",
    text: "Licensed Private Home Care Provider (PHCP) in the State of Georgia",
  },
  {
    icon: "ri-stethoscope-line",
    text: "Services are non-medical and do not include nursing or clinical care",
  },
  {
    icon: "ri-user-check-line",
    text: "All staff undergo criminal background checks prior to client contact",
  },
  {
    icon: "ri-book-2-line",
    text: "Caregivers receive training in safety, infection control, and client care",
  },
  {
    icon: "ri-lock-line",
    text: "Client information is protected in accordance with HIPAA standards",
  },
  {
    icon: "ri-government-line",
    text: "Services delivered in compliance with Georgia Department of Community Health regulations",
  },
];

export default function CLSHowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-maroon-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* How Services Work */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Our Process</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
              How Services Work
            </h2>
            <p className="text-gray-500 font-sans text-base max-w-xl mx-auto leading-relaxed">
              Our intake and service delivery process is designed to be straightforward, respectful of the client's needs, and fully aligned with Georgia PHCP standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative bg-white rounded-xl border border-maroon-100 p-6 hover:border-gold/40 transition-colors">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-5 h-0.5 bg-gold/30 z-10" />
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-maroon rounded-xl">
                    <i className={`${step.icon} text-gold text-lg`} />
                  </div>
                  <span className="font-serif text-gold-dark font-bold text-2xl">{step.num}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-maroon mb-2">{step.title}</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & Standards */}
        <div id="cls-compliance">
          <div className="bg-maroon rounded-xl px-8 md:px-12 py-10 mb-8 text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-gold/20 rounded-full mx-auto mb-4">
              <i className="ri-shield-star-line text-3xl text-gold" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
              Compliance and Standards
            </h2>
            <p className="text-white/75 font-sans text-base max-w-2xl mx-auto leading-relaxed">
              Maroon Hearth Homes LLC operates as a licensed Private Home Care Provider (PHCP) in the State of Georgia. Our CLS division is fully compliant with all applicable Georgia Department of Community Health regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {compliancePoints.map((p) => (
              <div key={p.text} className="flex items-start gap-4 bg-white rounded-xl border border-maroon-100 p-5">
                <div className="w-9 h-9 flex items-center justify-center bg-maroon rounded-lg flex-shrink-0">
                  <i className={`${p.icon} text-gold text-lg`} />
                </div>
                <p className="text-gray-600 font-sans text-sm leading-relaxed pt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
