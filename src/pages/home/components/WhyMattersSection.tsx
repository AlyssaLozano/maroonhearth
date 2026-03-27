const stats = [
  { value: "13,000+", label: "Children in Georgia Foster Care", icon: "ri-user-heart-line" },
  { value: "40%", label: "Have Unmet Behavioral Health Needs", icon: "ri-mental-health-line" },
  { value: "Critical", label: "Shortage of Qualified Foster Homes", icon: "ri-home-line" },
];

const reasons = [
  {
    icon: "ri-government-line",
    title: "DFCS Partners With Private Agencies",
    desc: "Georgia DFCS relies on licensed private Child-Placing Agencies like Maroon Hearth Homes to expand the network of qualified, supervised foster homes beyond state capacity.",
  },
  {
    icon: "ri-focus-3-line",
    title: "Filling Critical Placement Gaps",
    desc: "Too many children in Georgia wait in emergency shelters, hospitals, or congregate care facilities. We exist to ensure a trained, appropriate foster family is ready to receive them.",
  },
  {
    icon: "ri-seedling-line",
    title: "Investing in Long-Term Outcomes",
    desc: "Stability in early placements directly reduces re-entry into foster care and improves educational, behavioral, and long-term life outcomes for children.",
  },
];

export default function WhyMattersSection() {
  return (
    <section className="py-20 md:py-28 bg-maroon-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">The Need</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
            Why This Work Matters
          </h2>
          <p className="text-gray-500 font-sans text-base max-w-xl mx-auto leading-relaxed">
            The data is clear. Georgia's foster care system faces a growing crisis — and licensed private agencies are part of the solution.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-maroon text-white rounded-lg p-8 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/20 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-gold`} />
              </div>
              <p className="font-serif text-3xl font-bold text-gold mb-2">{stat.value}</p>
              <p className="text-white/80 font-sans text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div key={item.title} className="bg-white border border-maroon-100 rounded-lg p-7 hover:border-gold/50 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className={`${item.icon} text-2xl text-gold-dark`} />
              </div>
              <h3 className="font-serif text-base font-bold text-maroon mt-4 mb-3">{item.title}</h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
