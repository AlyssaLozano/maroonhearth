const priorities = [
  { icon: "ri-home-heart-line", text: "Safety in the home environment" },
  { icon: "ri-user-star-line", text: "Respect for client independence and choice" },
  { icon: "ri-chat-check-line", text: "Clear communication with clients and families" },
  { icon: "ri-shield-user-line", text: "Reliable and trained staff" },
  { icon: "ri-calendar-check-line", text: "Consistent service delivery" },
];

export default function CLSApproach() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Our Philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-5">
              Our Approach to Care
            </h2>
            <p className="text-gray-600 font-sans text-base leading-relaxed mb-6">
              Our approach is <strong className="text-maroon">structured, consistent, and client-centered.</strong> Every service plan we develop, every caregiver we assign, and every visit we conduct reflects our commitment to the individual needs and preferences of each client.
            </p>
            <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8">
              All services are designed to support independence while ensuring appropriate oversight and assistance. We work collaboratively with clients, families, and referral partners to ensure that every individual receives care that is both effective and respectful.
            </p>

            {/* Priorities */}
            <div className="space-y-3">
              <p className="font-sans font-semibold text-maroon text-sm uppercase tracking-wide mb-4">We Prioritize:</p>
              {priorities.map((p) => (
                <div key={p.text} className="flex items-center gap-4 bg-maroon-50 rounded-lg px-5 py-3 border border-maroon-100">
                  <div className="w-8 h-8 flex items-center justify-center bg-maroon rounded-md flex-shrink-0">
                    <i className={`${p.icon} text-gold text-base`} />
                  </div>
                  <span className="text-gray-700 font-sans text-sm font-medium">{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=Warm%20caring%20female%20home%20care%20aide%20laughing%20with%20happy%20elderly%20woman%20at%20bright%20kitchen%20table%20both%20genuinely%20smiling%20and%20engaged%20coffee%20cups%20on%20table%20sunlit%20morning%20kitchen%20atmosphere%20real%20authentic%20human%20connection%20diverse%20ages%20photorealistic%20candid%20lifestyle%20photography%20joyful%20and%20warm%20feeling%20woman%20in%20her%2030s%20helping%20senior%20woman%20both%20having%20fun%20together&width=800&height=700&seq=mhh-cls-approach-warm-001&orientation=portrait"
              alt="Caregiver and client sharing a warm joyful moment"
              className="w-full h-96 lg:h-[480px] object-cover object-top rounded-xl"
            />
            {/* Quote overlay card */}
            <div className="mt-5 bg-maroon rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <i className="ri-double-quotes-l text-gold text-2xl" />
                </div>
                <p className="text-white/90 font-serif text-sm leading-relaxed italic">
                  All services are designed to support independence while ensuring appropriate oversight and assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
