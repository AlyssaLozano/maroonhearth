const programs = [
  {
    id: "cla",
    number: "01",
    icon: "ri-building-4-line",
    tag: "DBHDD-Funded · Residential",
    title: "Community Living Arrangement",
    abbr: "CLA",
    color: "maroon",
    blurb:
      "Licensed residential homes providing 24-hour supervised care, daily personal services, and behavioral supports for two or more unrelated adults whose services are funded through the Georgia Department of Behavioral Health and Developmental Disabilities (DBHDD).",
    highlights: ["24-Hour Supervision", "DBHDD-Funded", "IDD & Behavioral Health", "2+ Residents"],
  },
  {
    id: "cls",
    number: "02",
    icon: "ri-community-line",
    tag: "Medicaid Waiver · In-Home",
    title: "Community Living Support",
    abbr: "CLS",
    color: "gold",
    blurb:
      "In-home support services for adults and children with intellectual and developmental disabilities, delivered under Georgia Medicaid waivers (NOW/COMP). Our trained support workers assist individuals to live independently in their own homes and communities.",
    highlights: ["NOW / COMP Waiver", "In-Home Support", "Disability Services", "Medicaid Covered"],
  },
  {
    id: "phcp",
    number: "03",
    icon: "ri-home-heart-line",
    tag: "Georgia DCH Licensed · Private Pay",
    title: "Private Home Care Provider",
    abbr: "PHCP",
    color: "gold",
    blurb:
      "Non-medical private home care for elderly adults and families who need assistance aging in place. Our aides help with personal care, daily living activities, and companionship — keeping clients safe and comfortable in the home they love.",
    highlights: ["Aging in Place", "DCH Licensed", "Non-Medical Care", "Elderly & Families"],
  },
];

export default function ProgramsOverview() {
  return (
    <section className="bg-maroon-50 py-16 md:py-20 border-b border-maroon-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">
            Home &amp; Community Care
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-maroon mt-3 mb-3">
            Three Programs. One Committed Team.
          </h2>
          <p className="text-gray-500 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            Select a program below to jump directly to its full details, services, and eligibility information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {programs.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="group bg-white rounded-xl border border-maroon-100 overflow-hidden hover:border-maroon/40 hover:shadow-sm transition-all cursor-pointer block"
            >
              {/* Top bar */}
              <div className={`px-6 pt-5 pb-4 ${p.color === "maroon" ? "bg-maroon" : "bg-gold-dark"}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-serif text-3xl font-bold ${p.color === "maroon" ? "text-white/20" : "text-white/25"}`}>
                    {p.number}
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center bg-white/15 rounded-lg">
                    <i className={`${p.icon} text-xl ${p.color === "maroon" ? "text-gold" : "text-white"}`} />
                  </div>
                </div>
                <span className={`font-sans text-xs ${p.color === "maroon" ? "text-gold/80" : "text-white/70"} uppercase tracking-widest`}>
                  {p.tag}
                </span>
                <h3 className="font-serif text-base font-bold text-white mt-1 leading-snug">
                  {p.title}{" "}
                  <span className={`font-sans text-sm font-normal ${p.color === "maroon" ? "text-white/60" : "text-white/60"}`}>
                    ({p.abbr})
                  </span>
                </h3>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <p className="text-gray-500 font-sans text-sm leading-relaxed mb-5">
                  {p.blurb}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-maroon-50 text-maroon font-sans text-xs px-2.5 py-1 rounded-full border border-maroon-100"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-maroon group-hover:text-gold-dark font-sans font-semibold text-sm transition-colors">
                  <span>View full details</span>
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-arrow-down-line text-sm" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
