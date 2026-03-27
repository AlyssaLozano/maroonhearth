const services = [
  {
    icon: "ri-user-smile-line",
    title: "Personal Care Services",
    color: "bg-maroon",
    iconColor: "text-gold",
    items: [
      "Bathing, dressing, and grooming assistance",
      "Oral hygiene and skin care",
      "Toileting and mobility support",
      "Transfers and positioning",
    ],
    desc: "Assistance with essential daily activities, including bathing, dressing, grooming, oral hygiene, toileting, mobility, and transfers. All services are delivered with respect for privacy and dignity.",
  },
  {
    icon: "ri-home-line",
    title: "Homemaking Services",
    color: "bg-gold-dark",
    iconColor: "text-white",
    items: [
      "Light housekeeping and tidying",
      "Laundry and linen changes",
      "Meal preparation and planning",
      "Grocery shopping and essential errands",
    ],
    desc: "Support with maintaining a clean, safe, and functional home environment. This includes light housekeeping, laundry, meal preparation, grocery shopping, and essential errands.",
  },
  {
    icon: "ri-heart-2-line",
    title: "Companion and Sitter Services",
    color: "bg-maroon-light",
    iconColor: "text-gold",
    items: [
      "Supervision and safety monitoring",
      "Conversation and social engagement",
      "Recreational activities and reading",
      "General companionship support",
    ],
    desc: "Supervision and engagement to ensure safety and reduce isolation. Services include conversation, recreational activities, reading, and general companionship.",
  },
  {
    icon: "ri-car-line",
    title: "Transportation Services",
    color: "bg-maroon-dark",
    iconColor: "text-gold",
    items: [
      "Medical and therapy appointment transport",
      "Community activity transportation",
      "Grocery and essential errand trips",
      "Accompaniment and wait-time support",
    ],
    desc: "Non-emergency transportation to medical appointments, community activities, and essential errands. All transportation is provided in accordance with safety and regulatory requirements.",
  },
];

export default function CLSServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">What We Provide</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
            In-Home &amp; Community Support
          </h2>
          <p className="text-gray-500 font-sans text-base max-w-2xl mx-auto leading-relaxed">
            Our services are delivered in the client's home or community setting and focus on daily living support and supervision. All services are non-medical and provided by trained, background-checked staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="rounded-xl border border-maroon-100 overflow-hidden">
              <div className={`${svc.color} px-6 py-4 flex items-center gap-3`}>
                <div className="w-9 h-9 flex items-center justify-center bg-white/15 rounded-lg">
                  <i className={`${svc.icon} text-xl ${svc.iconColor}`} />
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

        <div className="mt-8 bg-gold-light border border-gold/30 rounded-xl p-5 flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <i className="ri-information-line text-gold-dark text-xl" />
          </div>
          <p className="text-gray-600 font-sans text-sm leading-relaxed">
            <strong className="text-maroon">Important Notice:</strong> All CLS services provided by Maroon Hearth Homes LLC are <strong>non-medical</strong> in nature and do not include nursing care, wound care, medication administration, or other skilled nursing functions. Clients requiring medical services will be referred to appropriate licensed medical providers.
          </p>
        </div>
      </div>
    </section>
  );
}
