const fosterCareFeatures = [
  { icon: "ri-home-heart-line", text: "24-hour care in DFCS-approved foster homes" },
  { icon: "ri-parent-line", text: "Placement decisions based on individual child needs and family match" },
  { icon: "ri-calendar-event-line", text: "Monthly in-home supervision visits by assigned case managers" },
  { icon: "ri-file-list-line", text: "Individual Service Plans (ISP) developed and regularly reviewed" },
  { icon: "ri-team-line", text: "Coordination with DFCS, courts, schools, and service providers" },
  { icon: "ri-phone-line", text: "24/7 case manager availability for foster families" },
];

const therapeuticFeatures = [
  { icon: "ri-mental-health-line", text: "Specialized care for children with emotional and behavioral health needs" },
  { icon: "ri-heart-pulse-line", text: "Trauma-informed, culturally competent caregiving approach" },
  { icon: "ri-stethoscope-line", text: "Active coordination with behavioral health providers and therapists" },
  { icon: "ri-briefcase-4-line", text: "Enhanced case management with higher service frequency" },
  { icon: "ri-alarm-line", text: "24/7 support line for therapeutic placement emergencies" },
  { icon: "ri-book-open-line", text: "Specialized foster parent training for trauma and behavioral intervention" },
];

export default function ServicesSections() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* Division label */}
        <div className="text-center pb-4 border-b border-maroon-100">
          <span className="inline-flex items-center gap-2 text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold mb-3 bg-gold-light px-4 py-2 rounded-full">
            <i className="ri-home-heart-line text-gold-dark text-xs" />
            Division 1 — Foster Care
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon">
            Foster Care Services
          </h2>
          <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-2xl mx-auto mt-3">
            DFCS-licensed foster care placements for children in Georgia's child welfare system, from standard family care to intensive therapeutic placements.
          </p>
        </div>

        {/* Section 1: Foster Care */}
        <div id="foster-care" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=Warm%20diverse%20foster%20family%20moment%20caring%20foster%20mother%20hugging%20two%20young%20smiling%20children%20on%20living%20room%20couch%20afternoon%20sunlight%20streaming%20through%20window%20colorful%20pillows%20books%20scattered%20genuine%20family%20warmth%20and%20love%20children%20look%20happy%20safe%20and%20secure%20photorealistic%20lifestyle%20photography%20heartwarming%20authentic%20scene%20beautiful%20moment%20of%20connection&width=900&height=700&seq=mhh-foster-human-001&orientation=landscape"
              alt="Smiling children with foster family in safe home"
              className="w-full h-96 object-cover object-top rounded-xl"
            />
          </div>
          <div>
            <span className="inline-block text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold mb-3 bg-gold-light px-3 py-1 rounded-full">Core Service</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
              Foster Care
            </h2>
            <p className="text-gray-500 font-sans text-sm leading-relaxed mb-7">
              We provide comprehensive 24-hour foster care in DFCS-approved homes. Every placement is carefully matched based on the child's history, needs, and developmental profile. Our case managers maintain active involvement throughout — from initial placement through permanency planning.
            </p>
            <ul className="space-y-3">
              {fosterCareFeatures.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <div className="w-7 h-7 flex items-center justify-center bg-maroon-50 rounded-md flex-shrink-0 mt-0.5">
                    <i className={`${f.icon} text-maroon text-sm`} />
                  </div>
                  <span className="text-gray-600 font-sans text-sm leading-relaxed">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-maroon-100" />

        {/* Section 2: Therapeutic Foster Care */}
        <div id="therapeutic-foster-care" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <img
              src="https://readdy.ai/api/search-image?query=Compassionate%20foster%20parent%20sitting%20close%20beside%20young%20child%20on%20cozy%20bedroom%20floor%20reading%20a%20picture%20book%20together%20child%20looks%20happy%20relaxed%20and%20safe%20smiling%20up%20at%20caring%20adult%20warm%20lamp%20light%20soft%20blanket%20and%20stuffed%20animals%20nearby%20genuine%20nurturing%20and%20trusting%20bond%20between%20adult%20and%20child%20photorealistic%20lifestyle%20photography%20warm%20and%20tender%20authentic%20scene&width=900&height=700&seq=mhh-therapy-human-001&orientation=landscape"
              alt="Foster parent reading with a happy child"
              className="w-full h-96 object-cover object-top rounded-xl"
            />
          </div>
          <div className="lg:order-1">
            <span className="inline-block text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold mb-3 bg-gold-light px-3 py-1 rounded-full">Specialized Care</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
              Therapeutic Foster Care
            </h2>
            <p className="text-gray-500 font-sans text-sm leading-relaxed mb-7">
              Therapeutic Foster Care (TFC) is designed for children with significant emotional, behavioral, or mental health needs who require a more intensive level of care. TFC families receive specialized training, higher-frequency supervision, and active support from our clinical team and community behavioral health partners.
            </p>
            <ul className="space-y-3">
              {therapeuticFeatures.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <div className="w-7 h-7 flex items-center justify-center bg-maroon rounded-md flex-shrink-0 mt-0.5">
                    <i className={`${f.icon} text-gold text-sm`} />
                  </div>
                  <span className="text-gray-600 font-sans text-sm leading-relaxed">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
