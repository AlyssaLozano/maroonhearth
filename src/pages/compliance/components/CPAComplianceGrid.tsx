const cpaItems = [
  {
    icon: "ri-award-line",
    category: "Licensing",
    title: "Licensed Child-Placing Agency",
    detail: "Maroon Hearth Homes LLC holds a current Child-Placing Agency (CPA) license issued under Georgia Rules 290-9-2, administered by the Georgia Department of Human Services, Division of Family and Children Services (DFCS).",
    badge: "Georgia Rules 290-9-2",
  },
  {
    icon: "ri-file-search-line",
    category: "Background Screening",
    title: "Criminal Background Checks",
    detail: "Comprehensive criminal background checks are required for all agency staff, prospective foster parents, and all household members age 17 and older — completed prior to any placement or staff assignment.",
    badge: "Required Pre-Placement",
  },
  {
    icon: "ri-parent-line",
    category: "Background Screening",
    title: "CPS History Review",
    detail: "All prospective foster parents and household members are screened through the Georgia DFCS child protective services history registry to identify any prior substantiated findings of abuse, neglect, or maltreatment.",
    badge: "DFCS Registry",
  },
  {
    icon: "ri-search-eye-line",
    category: "Background Screening",
    title: "Sex Offender Registry Screening",
    detail: "All applicants and adult household members are screened against the Georgia Sex Offender Registry and applicable national registries. No individual with a disqualifying offense may reside in or operate an approved foster home.",
    badge: "Zero Tolerance",
  },
  {
    icon: "ri-calendar-check-line",
    category: "Supervision",
    title: "Monthly In-Home Supervision Visits",
    detail: "All active foster placements receive a minimum of one monthly in-person supervision visit from an assigned case manager. Visit records are documented, filed, and subject to review during licensing inspections.",
    badge: "Minimum Monthly",
  },
  {
    icon: "ri-file-list-3-line",
    category: "Service Planning",
    title: "Individual Service Plans (ISP)",
    detail: "Every child in placement receives a written Individual Service Plan developed collaboratively with DFCS, the foster family, the child (age-appropriately), and relevant service providers. ISPs are reviewed and updated on a regular schedule.",
    badge: "Required Per Placement",
  },
  {
    icon: "ri-hand-heart-line",
    category: "Behavior Management",
    title: "No Corporal Punishment Policy",
    detail: "Physical discipline of any kind is strictly prohibited in all agency-approved foster homes. All foster parents complete training in trauma-informed, DFCS-approved behavior management techniques prior to licensure.",
    badge: "Absolute Policy",
  },
  {
    icon: "ri-alarm-warning-line",
    category: "Reporting",
    title: "Mandatory Abuse & Neglect Reporting",
    detail: "All agency staff and foster parents are designated mandated reporters under Georgia law. Any suspected abuse, neglect, exploitation, or maltreatment must be reported immediately to DFCS and, where applicable, to law enforcement.",
    badge: "Mandated by Georgia Law",
  },
  {
    icon: "ri-graduation-cap-line",
    category: "Training",
    title: "Pre-Service Foster Parent Training",
    detail: "All prospective foster parents must complete required pre-service training covering trauma-informed care, child development, behavior management, mandatory reporting, and DFCS compliance standards before home approval.",
    badge: "Required Pre-Approval",
  },
  {
    icon: "ri-home-gear-line",
    category: "Home Safety",
    title: "Home Safety Inspection & Approval",
    detail: "Each foster home undergoes a formal safety inspection conducted by agency staff prior to initial approval and at each subsequent licensing renewal. Homes must meet all DFCS-specified physical and safety standards.",
    badge: "Pre-Placement Inspection",
  },
  {
    icon: "ri-24-hours-line",
    category: "Availability",
    title: "24-Hour Staff Availability",
    detail: "Agency staff maintain 24-hour on-call availability to support foster families in the event of a placement crisis, behavioral emergency, or any situation requiring immediate case management response.",
    badge: "24/7 On-Call",
  },
  {
    icon: "ri-government-line",
    category: "Licensing",
    title: "Annual License Renewal & State Inspection",
    detail: "The agency's Child-Placing Agency license is subject to annual renewal through DFCS. Renewal requires documented compliance with all applicable Georgia Rules 290-9-2 standards, including facility review and case record audit.",
    badge: "Annual Renewal",
  },
];

const categories = [...new Set(cpaItems.map((i) => i.category))];

export default function CPAComplianceGrid() {
  return (
    <section id="cpa-division" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-12 pb-8 border-b-2 border-maroon">
          <div className="w-14 h-14 flex items-center justify-center bg-maroon rounded-xl flex-shrink-0">
            <i className="ri-home-2-line text-gold text-2xl" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Division 1</span>
              <span className="bg-maroon text-white font-sans text-xs px-3 py-1 rounded-full">Georgia Rules 290-9-2</span>
              <span className="bg-maroon-50 text-maroon font-sans text-xs px-3 py-1 rounded-full border border-maroon-100">DFCS · DCH · HFRD Licensed</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-maroon">
              Foster Care &amp; Therapeutic Foster Care (CPA)
            </h2>
          </div>
          <div className="bg-maroon-50 rounded-xl px-5 py-3 border border-maroon-100 text-right flex-shrink-0">
            <p className="text-xs text-gray-400 font-sans uppercase tracking-wide">Compliance Items</p>
            <p className="font-serif text-2xl font-bold text-maroon">{cpaItems.length}</p>
          </div>
        </div>

        {/* Category legend */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <span key={cat} className="bg-maroon-50 text-maroon font-sans text-xs px-3 py-1.5 rounded-full border border-maroon-100 font-medium">
              {cat}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cpaItems.map((item) => (
            <div key={item.title} className="rounded-xl border border-maroon-100 bg-white hover:border-maroon/40 hover:shadow-sm transition-all group">
              {/* Card top bar */}
              <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-maroon-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-maroon rounded-lg">
                    <i className={`${item.icon} text-gold text-base`} />
                  </div>
                  <span className="text-xs font-sans text-gray-400 uppercase tracking-wide">{item.category}</span>
                </div>
                <span className="text-xs bg-gold/15 text-gold-dark font-sans font-semibold px-2.5 py-1 rounded-full border border-gold/25 whitespace-nowrap">
                  {item.badge}
                </span>
              </div>
              {/* Card body */}
              <div className="px-5 py-4">
                <h3 className="font-serif text-sm font-bold text-maroon mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-500 font-sans text-xs leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory footer note */}
        <div className="mt-10 flex items-start gap-4 bg-maroon-50 rounded-xl border border-maroon-100 p-6">
          <div className="w-9 h-9 flex items-center justify-center bg-maroon rounded-lg flex-shrink-0">
            <i className="ri-information-line text-gold text-lg" />
          </div>
          <p className="text-gray-600 font-sans text-sm leading-relaxed">
            <strong className="text-maroon">Regulatory Authority:</strong> The CPA division of Maroon Hearth Homes LLC is licensed and regulated by the Georgia Department of Human Services, Division of Family and Children Services (DFCS), and the Office of Residential Child Care Licensing (RCCL). The Home &amp; Community Care division (PHCP/CLA) is regulated by the Georgia Department of Community Health (DCH) and its Healthcare Facility Regulation Division (HFRD). All standards referenced on this page are derived from Georgia Rules and Regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
