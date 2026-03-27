const panels = [
  {
    tag: "Foster Care & Therapeutic Foster Care",
    headline: "Every child deserves a safe place to call home.",
    body: "We recruit, train, and support foster families across the CSRA who are ready to provide safe, structured, and loving care for children in the Georgia DFCS system.",
    img: "https://readdy.ai/api/search-image?query=Happy%20African%20American%20foster%20family%20outdoors%20in%20backyard%20father%20and%20mother%20sitting%20on%20grass%20with%20two%20smiling%20young%20children%20playing%20laughing%20and%20having%20fun%20together%20warm%20golden%20afternoon%20sunlight%20genuine%20family%20joy%20love%20and%20safety%20beautiful%20real%20family%20moment%20photorealistic%20lifestyle%20photography%20heartwarming%20authentic&width=780&height=560&seq=mhh-home-human-foster-001&orientation=landscape",
    imgAlt: "Happy foster family with children playing outdoors",
    ctaLabel: "See Foster Care Services",
    ctaPath: "/services#foster-care",
    accentColor: "bg-maroon",
    badgeColor: "bg-gold/20 text-gold border-gold/30",
  },
  {
    tag: "Home & Community Care",
    headline: "Independence, dignity, and a familiar face.",
    body: "Our caregivers come to our clients — in their own homes, on their own terms. We help elderly individuals, adults with disabilities, and Medicaid waiver recipients live safely and independently through our CLS, PHCP, and CLA programs.",
    img: "https://public.readdy.ai/ai/img_res/edited_9d539cb6c51a7d3b5f79d234c7dcc76b_4f421a42.jpg",
    imgAlt: "Caregiver walking with happy elderly man outdoors",
    ctaLabel: "See Home and Community Care",
    ctaPath: "/cls",
    accentColor: "bg-gold-dark",
    badgeColor: "bg-white/20 text-white border-white/30",
  },
];

export default function HomeHumanStrip() {
  return (
    <section className="py-20 md:py-28 bg-maroon-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">The People We Serve</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
            Two Divisions. One Commitment to Care.
          </h2>
          <p className="text-gray-500 font-sans text-base max-w-xl mx-auto leading-relaxed">
            Whether we're supporting a child who needs a safe family or an elderly adult who needs a helping hand — compassion is at the center of everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {panels.map((panel) => (
            <div key={panel.tag} className="rounded-2xl overflow-hidden border border-maroon-100 group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={panel.img}
                  alt={panel.imgAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className={`font-sans text-xs font-semibold px-3 py-1 rounded-full border ${panel.badgeColor}`}>
                    {panel.tag}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="bg-white p-7">
                <h3 className="font-serif text-xl font-bold text-maroon mb-3 leading-snug">
                  {panel.headline}
                </h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed mb-5">
                  {panel.body}
                </p>
                <a
                  href={panel.ctaPath}
                  className={`inline-flex items-center gap-2 whitespace-nowrap ${panel.accentColor} text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity`}
                >
                  {panel.ctaLabel}
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-sm" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
