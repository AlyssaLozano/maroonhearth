import { Link } from "react-router-dom";

const phcpServices = [
  {
    icon: "ri-user-heart-line",
    title: "Personal Care Assistance",
    desc: "Hands-on support with bathing, dressing, grooming, oral hygiene, toileting, and mobility for elderly adults and individuals recovering from illness, surgery, or managing chronic conditions.",
    items: [
      "Bathing, dressing & grooming",
      "Oral hygiene and skin care",
      "Toileting and incontinence care",
      "Safe transfers and positioning",
    ],
  },
  {
    icon: "ri-home-heart-line",
    title: "Homemaking & Household Support",
    desc: "Assistance maintaining a clean, organized, and safe home environment so clients can focus on their health and well-being, not household burdens.",
    items: [
      "Light housekeeping and tidying",
      "Laundry and linen changes",
      "Meal preparation and planning",
      "Grocery shopping & errands",
    ],
  },
  {
    icon: "ri-time-line",
    title: "Respite Care for Family Caregivers",
    desc: "Scheduled or emergency relief for family members who are the primary caregivers. We step in so families can rest, recharge, or handle other responsibilities — knowing their loved one is in good hands.",
    items: [
      "Scheduled short-term coverage",
      "Emergency caregiver relief",
      "Overnight and weekend support",
      "Full supervision during caregiver absence",
    ],
  },
  {
    icon: "ri-car-line",
    title: "Transportation & Escort Services",
    desc: "Non-emergency transportation for medical appointments, therapy, pharmacy runs, and community activities. Staff accompanies clients and waits to ensure safe return home.",
    items: [
      "Medical & therapy appointments",
      "Pharmacy and essential errands",
      "Community outings and activities",
      "Accompany and wait-time support",
    ],
  },
];

const whoWeServe = [
  { icon: "ri-elderly-line", label: "Elderly Adults Aging in Place" },
  { icon: "ri-heart-pulse-line", label: "Individuals Recovering from Surgery or Illness" },
  { icon: "ri-capsule-line", label: "Clients Managing Chronic Conditions" },
  { icon: "ri-group-line", label: "Families Seeking Caregiver Relief" },
];

export default function PHCPSection() {
  return (
    <section id="phcp" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16 pb-10 border-b-2 border-maroon-100">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-gold/15 text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold px-3 py-1 rounded-full border border-gold/30">
                PHCP Division
              </span>
              <span className="bg-maroon/8 text-maroon font-sans text-xs px-3 py-1 rounded-full border border-maroon/20 font-medium" style={{ backgroundColor: "rgba(107,28,35,0.07)" }}>
                Georgia DCH Licensed
              </span>
              <span className="bg-maroon/8 text-maroon font-sans text-xs px-3 py-1 rounded-full border border-maroon/20 font-medium" style={{ backgroundColor: "rgba(107,28,35,0.07)" }}>
                HIPAA Compliant
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-4">
              Private Home Care Provider
              <span className="block text-gold-dark text-2xl md:text-3xl mt-1 font-medium">Supporting Aging Adults &amp; Families</span>
            </h2>
            <p className="text-gray-500 font-sans text-base leading-relaxed max-w-2xl">
              As a licensed Private Home Care Provider (PHCP) under the Georgia Department of Community Health, Maroon Hearth Homes offers non-medical in-home care for elderly adults and individuals who need support to remain safely and comfortably in their homes.
            </p>
          </div>
          {/* Who we serve quick-badges */}
          <div className="lg:w-80 flex flex-col gap-3">
            <p className="text-xs font-sans text-gray-400 uppercase tracking-widest font-semibold mb-1">Who We Serve</p>
            {whoWeServe.map((w) => (
              <div key={w.label} className="flex items-center gap-3 bg-maroon-50 rounded-lg px-4 py-3 border border-maroon-100">
                <div className="w-8 h-8 flex items-center justify-center bg-maroon rounded-lg flex-shrink-0">
                  <i className={`${w.icon} text-gold text-base`} />
                </div>
                <span className="text-gray-700 font-sans text-sm font-medium">{w.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {phcpServices.map((svc) => (
            <div key={svc.title} className="rounded-xl border border-maroon-100 overflow-hidden">
              <div className="bg-maroon px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-white/15 rounded-lg">
                  <i className={`${svc.icon} text-xl text-gold`} />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">{svc.title}</h3>
              </div>
              <div className="bg-maroon-50 px-6 py-5">
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

        {/* PHCP regulatory note */}
        <div className="bg-gold-light border border-gold/30 rounded-xl p-6 flex flex-col md:flex-row items-start gap-5">
          <div className="w-10 h-10 flex items-center justify-center bg-gold-dark rounded-xl flex-shrink-0">
            <i className="ri-shield-check-line text-white text-lg" />
          </div>
          <div className="flex-1">
            <p className="font-serif text-base font-bold text-maroon mb-1">Licensed &amp; Regulated by Georgia DCH</p>
            <p className="text-gray-600 font-sans text-sm leading-relaxed">
              All PHCP services provided by Maroon Hearth Homes LLC are <strong>non-medical</strong> and do not include nursing care, wound care, medication administration, or other skilled nursing functions. The agency is licensed as a Private Home Care Provider by the Georgia Department of Community Health. Client privacy is protected under HIPAA.
            </p>
          </div>
          <Link
            to="/#contact"
            className="whitespace-nowrap bg-maroon hover:bg-maroon-dark text-white font-sans font-semibold text-sm px-6 py-3 rounded-md transition-colors flex-shrink-0"
          >
            Request Home Care
          </Link>
        </div>

      </div>
    </section>
  );
}
