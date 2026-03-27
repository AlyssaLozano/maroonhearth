const complianceItems = [
  {
    icon: "ri-shield-check-line",
    title: "Licensed Under Georgia Rules 290-9-2",
    desc: "Maroon Hearth Homes LLC operates under and is fully compliant with Georgia Department of Community Health rules governing Child-Placing Agencies.",
    highlight: true,
  },
  {
    icon: "ri-user-check-line",
    title: "Comprehensive Background Checks",
    desc: "Criminal background checks, CPS history reviews, and sex offender registry screenings are required for all staff members, foster parents, and adult household members.",
    highlight: false,
  },
  {
    icon: "ri-calendar-check-line",
    title: "Monthly Supervision Visits",
    desc: "All active foster homes receive mandatory monthly in-person supervision visits from assigned case managers to monitor child welfare and family functioning.",
    highlight: false,
  },
  {
    icon: "ri-hand-heart-line",
    title: "No Corporal Punishment Policy",
    desc: "Strict behavior management policies strictly prohibit corporal punishment or any physical discipline. All approved foster parents complete training on trauma-informed behavioral approaches.",
    highlight: false,
  },
  {
    icon: "ri-alarm-warning-line",
    title: "Mandatory Abuse Reporting",
    desc: "All staff and foster parents are mandated reporters under Georgia law. Our policies require immediate reporting of any suspected abuse, neglect, or maltreatment.",
    highlight: false,
  },
  {
    icon: "ri-file-text-line",
    title: "Individual Service Plans (ISP)",
    desc: "Every child in placement receives a documented ISP developed collaboratively with DFCS, caregivers, and service providers — reviewed and updated on a regular basis.",
    highlight: false,
  },
];

export default function ComplianceSection() {
  return (
    <section className="py-20 md:py-28 bg-maroon-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner */}
        <div className="bg-maroon rounded-xl px-8 md:px-12 py-10 mb-14 text-center">
          <div className="w-14 h-14 flex items-center justify-center bg-gold/20 rounded-full mx-auto mb-4">
            <i className="ri-shield-star-line text-3xl text-gold" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Child Safety &amp; Compliance Are Our Highest Priorities
          </h2>
          <p className="text-white/75 font-sans text-base max-w-2xl mx-auto leading-relaxed">
            Every policy, procedure, and practice we follow exists to ensure the safety, stability, and dignity of every child placed in our care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {complianceItems.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl p-6 border transition-colors ${
                item.highlight
                  ? "bg-gold-light border-gold"
                  : "bg-white border-maroon-100 hover:border-gold/40"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-maroon rounded-lg flex-shrink-0">
                  <i className={`${item.icon} text-gold text-lg`} />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-maroon mb-2">{item.title}</h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
