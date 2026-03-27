const phcpItems = [
  {
    icon: "ri-award-line",
    category: "Licensing",
    title: "Licensed Private Home Care Provider (PHCP)",
    detail: "Maroon Hearth Homes LLC holds a current Private Home Care Provider (PHCP) license issued by the Georgia Department of Community Health (DCH). All CLS and home care services are delivered under this license.",
    badge: "Georgia DCH",
  },
  {
    icon: "ri-stethoscope-line",
    category: "Scope of Service",
    title: "Non-Medical Scope of Services",
    detail: "All CLS services are non-medical in nature. Services do not include skilled nursing care, wound care, medication administration, or any clinical function. Clients requiring medical services are referred to appropriate licensed providers.",
    badge: "Non-Medical Only",
  },
  {
    icon: "ri-file-search-line",
    category: "Background Screening",
    title: "Criminal Background Checks",
    detail: "All caregivers and staff members undergo a comprehensive criminal background check prior to any client contact or assignment. Individuals with disqualifying offenses are not permitted to provide direct client services.",
    badge: "Required Pre-Assignment",
  },
  {
    icon: "ri-lock-2-line",
    category: "Privacy",
    title: "HIPAA Client Privacy Protections",
    detail: "Client health information, service records, and personal data are protected in accordance with HIPAA. Staff receive HIPAA training and are required to maintain strict confidentiality.",
    badge: "Federal HIPAA Standards",
  },
  {
    icon: "ri-virus-line",
    category: "Training",
    title: "Infection Control Training",
    detail: "All caregivers complete infection control training covering hand hygiene, PPE, food safety, and transmission prevention prior to client assignment and annually thereafter.",
    badge: "Annual Requirement",
  },
  {
    icon: "ri-file-list-3-line",
    category: "Service Planning",
    title: "Service Plan Documentation",
    detail: "Each client receives a written plan of care outlining the specific services to be provided, frequency of visits, tasks to be performed, and client preferences. Plans are updated as needs change.",
    badge: "Written Plan Required",
  },
  {
    icon: "ri-bar-chart-line",
    category: "Supervision",
    title: "Quality Monitoring & Supervisory Check-Ins",
    detail: "Supervisory staff conduct regular quality check-ins to review service delivery, caregiver performance, and client satisfaction. Concerns are addressed promptly and documented in the client record.",
    badge: "Ongoing Monitoring",
  },
  {
    icon: "ri-alarm-warning-line",
    category: "Reporting",
    title: "Incident & Adverse Event Reporting",
    detail: "All incidents, injuries, unusual occurrences, or adverse events must be reported internally and, where applicable, to the Georgia DCH. Staff are trained in identification, documentation, and reporting protocols.",
    badge: "DCH Reporting Required",
  },
  {
    icon: "ri-hand-coin-line",
    category: "Medicaid Compliance",
    title: "NOW & COMP Medicaid Waiver Standards",
    detail: "Services to Medicaid waiver participants (NOW and COMP) are delivered in compliance with Georgia Medicaid waiver requirements, including prior authorization, documentation, billing accuracy, and provider standards.",
    badge: "NOW / COMP",
  },
  {
    icon: "ri-graduation-cap-line",
    category: "Training",
    title: "Caregiver Competency & Training Requirements",
    detail: "All caregivers complete required competency training in client care fundamentals, dignity and respect, emergency procedures, client rights, and safe transfer and mobility assistance before initial assignment.",
    badge: "Pre-Assignment Training",
  },
  {
    icon: "ri-user-star-line",
    category: "Client Rights",
    title: "Client Rights & Dignity Protections",
    detail: "Every client has the right to be treated with dignity, to refuse services, to participate in service planning, and to have their personal information kept confidential. Rights are communicated at intake and upheld throughout.",
    badge: "Client Bill of Rights",
  },
  {
    icon: "ri-refresh-line",
    category: "Licensing",
    title: "Annual PHCP License Renewal & DCH Oversight",
    detail: "The agency's PHCP license is subject to annual renewal and regulatory oversight by the Georgia Department of Community Health. Renewal requires documented compliance with all applicable DCH standards.",
    badge: "Annual Renewal",
  },
];

const categories = [...new Set(phcpItems.map((i) => i.category))];

const categoryColors: Record<string, string> = {
  Licensing: "#c9a961",
  "Scope of Service": "#d4b87a",
  "Background Screening": "#c9a961",
  Privacy: "#e0c98a",
  Training: "#c9a961",
  "Service Planning": "#d4b87a",
  Supervision: "#c9a961",
  Reporting: "#e0c98a",
  "Medicaid Compliance": "#c9a961",
  "Client Rights": "#d4b87a",
};

export default function PHCPComplianceGrid() {
  return (
    <section
      id="phcp-division"
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f0202 0%, #1c0606 40%, #150404 100%)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #c9a961 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow blobs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6B1C23 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a961 0%, transparent 70%)" }}
      />

      {/* Gold border lines */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span
            className="inline-flex items-center gap-2 text-gold font-sans text-[11px] tracking-[0.3em] uppercase font-bold mb-6 border border-gold/40 px-5 py-2.5 rounded-full"
            style={{ background: "rgba(201,169,97,0.08)" }}
          >
            <i className="ri-community-line text-gold text-xs" />
            Division 2 &bull; Georgia DCH &bull; DBHDD &bull; HIPAA Compliant
          </span>

          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-4"
            style={{ textShadow: "0 0 80px rgba(201,169,97,0.2)" }}
          >
            Community Living Arrangement
          </h2>
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-4"
            style={{
              background: "linear-gradient(135deg, #e8c97a 0%, #c9a961 50%, #a8883a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(201,169,97,0.5))",
            }}
          >
            Community Living Support &amp; PHCP
          </h2>

          <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            All three programs — CLA (DBHDD-funded residential care), CLS (Medicaid waiver in-home support), and PHCP (private home care) — are delivered under our licensed Home &amp; Community Care division, with HIPAA protections, Medicaid waiver compliance, and ongoing staff oversight.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-4xl mx-auto">
          {[
            { icon: "ri-shield-check-line", value: "HIPAA", label: "Client Privacy" },
            { icon: "ri-government-line", value: "GA DCH", label: "PHCP · CLS Licensed" },
            { icon: "ri-building-4-line", value: "DBHDD", label: "CLA Licensed" },
            { icon: "ri-hand-coin-line", value: "NOW/COMP", label: "Medicaid Waiver" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl px-5 py-5 text-center border border-gold/20"
              style={{ background: "rgba(201,169,97,0.07)" }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl mx-auto mb-3" style={{ background: "rgba(201,169,97,0.15)" }}>
                <i className={`${stat.icon} text-gold text-lg`} />
              </div>
              <p
                className="font-serif font-bold text-xl mb-0.5"
                style={{ color: "#e8c97a" }}
              >
                {stat.value}
              </p>
              <p className="text-white/45 font-sans text-xs uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Category legend */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className="font-sans text-xs px-3 py-1.5 rounded-full border border-gold/20 font-medium"
              style={{ background: "rgba(201,169,97,0.08)", color: "#c9a961" }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {phcpItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl p-7 flex flex-col overflow-hidden cursor-default transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "3px solid #c9a961",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(201,169,97,0.08)";
                el.style.boxShadow = "0 0 50px rgba(201,169,97,0.18), inset 0 1px 0 rgba(201,169,97,0.3)";
                el.style.borderColor = "rgba(201,169,97,0.5)";
                el.style.borderTopColor = "#e8c97a";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.boxShadow = "none";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.borderTopColor = "#c9a961";
              }}
            >
              {/* Top row: icon + category + badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(201,169,97,0.15)", border: "1px solid rgba(201,169,97,0.3)" }}
                  >
                    <i className={`${item.icon} text-xl`} style={{ color: "#e8c97a" }} />
                  </div>
                  <span className="text-white/40 font-sans text-[10px] uppercase tracking-widest">{item.category}</span>
                </div>
                <span
                  className="text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{
                    background: "rgba(201,169,97,0.12)",
                    border: "1px solid rgba(201,169,97,0.25)",
                    color: categoryColors[item.category] ?? "#c9a961",
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Text */}
              <h3 className="font-serif font-bold text-white text-[1rem] leading-snug mb-3 relative z-10">
                {item.title}
              </h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed relative z-10 group-hover:text-white/70 transition-colors duration-300 flex-1">
                {item.detail}
              </p>

              {/* Animated bottom bar */}
              <div className="mt-5 pt-4 border-t border-white/[0.06]">
                <div
                  className="h-0.5 rounded-full transition-all duration-500"
                  style={{ width: "0px", background: "#c9a961" }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.closest(".group");
                    if (!parent) return;
                    const enter = () => { el.style.width = "48px"; };
                    const leave = () => { el.style.width = "0px"; };
                    parent.addEventListener("mouseenter", enter);
                    parent.addEventListener("mouseleave", leave);
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory footer note */}
        <div
          className="flex items-start gap-5 rounded-2xl p-7 border border-gold/25"
          style={{ background: "rgba(201,169,97,0.07)" }}
        >
          <div
            className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
            style={{ background: "rgba(201,169,97,0.18)", border: "1px solid rgba(201,169,97,0.3)" }}
          >
            <i className="ri-information-line text-gold text-xl" />
          </div>
          <p className="text-white/60 font-sans text-sm leading-relaxed">
            <strong style={{ color: "#e8c97a" }}>Regulatory Authority:</strong>{" "}
            The Home &amp; Community Care division of Maroon Hearth Homes LLC operates three licensed programs. The <strong style={{ color: "#e8c97a" }}>CLA (Community Living Arrangement)</strong> program is licensed and regulated by the Georgia Department of Behavioral Health and Developmental Disabilities (DBHDD). The <strong style={{ color: "#e8c97a" }}>CLS</strong> and <strong style={{ color: "#e8c97a" }}>PHCP</strong> programs are licensed and regulated by the Georgia Department of Community Health (DCH) as a Private Home Care Provider. Client information is protected under HIPAA. Medicaid waiver services are subject to Georgia NOW/COMP waiver provider standards.
          </p>
        </div>

      </div>
    </section>
  );
}
