import { Link } from "react-router-dom";

const programs = [
  {
    id: "cla",
    badge: "DBHDD-Funded",
    badgeIcon: "ri-government-line",
    icon: "ri-community-line",
    tag: "Program 1",
    title: "Community Living Arrangement",
    abbr: "CLA",
    anchor: "/cls#cla",
    accentColor: "#6B1C23",
    description:
      "A CLA is a DBHDD-funded residence — operated for profit or not — that provides or arranges daily personal services, supports, care, or treatment for two or more unrelated adults. Residential services are financially supported in whole or in part by the Department of Behavioral Health and Developmental Disabilities.",
    features: [
      { icon: "ri-home-line", text: "Residential community-based care for adults" },
      { icon: "ri-team-line", text: "Two or more unrelated adults in a shared supported home" },
      { icon: "ri-funds-box-line", text: "Financially supported through DBHDD-designated funds" },
      { icon: "ri-file-list-3-line", text: "Daily personal supports, care, and treatment coordination" },
      { icon: "ri-shield-check-line", text: "Oversight by Georgia DBHDD — licensed and regulated" },
      { icon: "ri-map-pin-2-line", text: "For-profit or non-profit residences both qualify" },
    ],
  },
  {
    id: "cls",
    badge: "Medicaid Waiver",
    badgeIcon: "ri-heart-pulse-line",
    icon: "ri-home-heart-line",
    tag: "Program 2",
    title: "Community Living Support",
    abbr: "CLS",
    anchor: "/cls#cls",
    accentColor: "#6B1C23",
    description:
      "CLS is a Medicaid-waiver-funded service that provides in-home and community-based supports to adults with developmental disabilities — helping individuals live as independently as possible in the community of their choosing.",
    features: [
      { icon: "ri-user-heart-line", text: "In-home personal supports for adults with developmental disabilities" },
      { icon: "ri-money-dollar-circle-line", text: "Funded through NOW/COMP Medicaid waivers" },
      { icon: "ri-community-line", text: "Community integration and independent living focus" },
      { icon: "ri-calendar-check-line", text: "Individualized support plans tailored to each person" },
      { icon: "ri-shield-star-line", text: "Regulated by Georgia Dept. of Community Health (DCH)" },
      { icon: "ri-refresh-line", text: "Flexible scheduling around individuals' daily routines" },
    ],
  },
  {
    id: "phcp",
    badge: "Georgia DCH Licensed",
    badgeIcon: "ri-stethoscope-line",
    icon: "ri-nurse-line",
    tag: "Program 3",
    title: "Private Home Care Provider",
    abbr: "PHCP",
    anchor: "/cls#phcp",
    accentColor: "#6B1C23",
    description:
      "As a Georgia DCH-licensed Private Home Care Provider, we deliver skilled and non-skilled personal care services in the individual's own home — supporting adults who need daily assistance to maintain their health, safety, and quality of life.",
    features: [
      { icon: "ri-home-gear-line", text: "Personal care in the individual's own private home" },
      { icon: "ri-licensed-product-line", text: "Georgia DCH licensed as Private Home Care Provider" },
      { icon: "ri-hand-heart-line", text: "Bathing, grooming, dressing, and ADL assistance" },
      { icon: "ri-medicine-bottle-line", text: "Medication reminders and health monitoring support" },
      { icon: "ri-car-line", text: "Transportation and community access assistance" },
      { icon: "ri-user-settings-line", text: "Matched caregivers to individual preferences and needs" },
    ],
  },
];

export default function HomeCareSection() {
  return (
    <section id="home-community-care" className="py-24 md:py-32" style={{ background: "linear-gradient(180deg, #fdf9f5 0%, #fff 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold mb-4 bg-gold-light px-4 py-2 rounded-full">
            <i className="ri-building-4-line text-gold-dark text-xs" />
            Division 2 — Home &amp; Community Care
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon mb-5 leading-tight">
            Three Programs, One Mission
          </h2>
          <p className="text-gray-500 font-sans text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Our Home &amp; Community Care division operates three distinct programs — <strong className="text-maroon">CLA</strong>, <strong className="text-maroon">CLS</strong>, and <strong className="text-maroon">PHCP</strong> — each serving adults under different funding structures and regulatory bodies, all with the same commitment to dignity and quality care.
          </p>

          {/* Quick-jump pill row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {programs.map((p) => (
              <a
                key={p.id}
                href={p.anchor}
                className="whitespace-nowrap inline-flex items-center gap-2 border border-maroon-200 hover:border-maroon hover:bg-maroon hover:text-white text-maroon font-sans font-semibold text-xs px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className={`${p.icon} text-xs`} />
                </div>
                {p.abbr} — {p.title}
              </a>
            ))}
          </div>
        </div>

        {/* Divider line */}
        <div className="w-16 h-0.5 bg-gold mx-auto mb-16" />

        {/* Program cards — stacked vertically for full detail */}
        <div className="space-y-10">
          {programs.map((p, idx) => (
            <div
              key={p.id}
              id={`services-${p.id}`}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-maroon-100"
            >
              {/* Left accent panel */}
              <div
                className={`lg:col-span-2 p-8 md:p-10 flex flex-col justify-between ${idx % 2 === 1 ? "lg:order-2" : ""}`}
                style={{ background: "linear-gradient(135deg, #6B1C23 0%, #4A1219 100%)" }}
              >
                <div>
                  <span
                    className="inline-flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase font-bold mb-5 border px-3 py-1.5 rounded-full"
                    style={{ color: "#e8c97a", borderColor: "rgba(201,169,97,0.4)", background: "rgba(201,169,97,0.1)" }}
                  >
                    <div className="w-3 h-3 flex items-center justify-center">
                      <i className={`${p.badgeIcon} text-[10px]`} />
                    </div>
                    {p.badge}
                  </span>

                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-2xl mb-5"
                    style={{ background: "rgba(201,169,97,0.15)", border: "1px solid rgba(201,169,97,0.3)" }}
                  >
                    <i className={`${p.icon} text-3xl`} style={{ color: "#e8c97a" }} />
                  </div>

                  <p className="font-sans text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: "rgba(201,169,97,0.6)" }}>
                    {p.tag}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="font-sans font-bold text-lg mb-5" style={{ color: "#e8c97a" }}>
                    ({p.abbr})
                  </p>
                  <p className="text-white/65 font-sans text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to={p.anchor}
                    className="whitespace-nowrap inline-flex items-center gap-2 font-sans font-semibold text-sm px-5 py-3 rounded-lg transition-all duration-200 cursor-pointer"
                    style={{
                      background: "rgba(201,169,97,0.2)",
                      border: "1px solid rgba(201,169,97,0.4)",
                      color: "#e8c97a",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,169,97,0.35)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,169,97,0.2)";
                    }}
                  >
                    View full {p.abbr} details
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-right-line text-xs" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right feature list */}
              <div className={`lg:col-span-3 bg-white p-8 md:p-10 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-gray-400 font-sans text-xs tracking-widest uppercase font-semibold mb-6">
                  What this includes
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {p.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5" style={{ background: "#fdf5ec" }}>
                        <i className={`${f.icon} text-maroon text-sm`} />
                      </div>
                      <span className="text-gray-600 font-sans text-sm leading-relaxed pt-1">{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Regulatory info callout */}
                <div className="mt-8 flex items-start gap-3 bg-maroon-50 border border-maroon-100 rounded-xl px-5 py-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-information-line text-maroon text-base" />
                  </div>
                  <p className="text-gray-500 font-sans text-xs leading-relaxed">
                    {p.id === "cla" && (
                      <>Regulated by <strong className="text-maroon">Georgia Department of Behavioral Health &amp; Developmental Disabilities (DBHDD)</strong>. Residential services are funded through DBHDD-designated funds for qualifying individuals.</>
                    )}
                    {p.id === "cls" && (
                      <>Funded through <strong className="text-maroon">NOW/COMP Medicaid Waivers</strong> and regulated by the <strong className="text-maroon">Georgia Department of Community Health (DCH)</strong>. Individuals must have a qualifying developmental disability diagnosis.</>
                    )}
                    {p.id === "phcp" && (
                      <>Licensed as a <strong className="text-maroon">Private Home Care Provider by Georgia DCH</strong>. Services are provided in the individual's place of residence and may be privately funded or covered through insurance or state programs.</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 font-sans text-sm mb-4">
            Want the full breakdown of all three programs including eligibility and how to get started?
          </p>
          <Link
            to="/cls"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors cursor-pointer"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-community-line text-gold text-sm" />
            </div>
            Visit the Home &amp; Community Care Page
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-right-line text-xs" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
