function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function FosterWelcomeSection() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-maroon-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — warm message */}
          <div>
            <span className="inline-flex items-center gap-2 text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold mb-4">
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-heart-fill text-gold text-sm" />
              </span>
              A Note to You
            </span>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon leading-tight mb-5">
              Thank you for being here.<br />
              <span className="text-gold-dark">It means more than you know.</span>
            </h2>

            <p className="text-gray-600 font-sans text-base leading-relaxed mb-4">
              The fact that you're on this page — exploring what it means to open your home to a child in need — already says something about who you are. Not everyone stops to consider it. You did.
            </p>

            <p className="text-gray-600 font-sans text-base leading-relaxed mb-4">
              Children in Georgia's foster care system aren't looking for perfect families. They're looking for <strong className="text-maroon">safe ones</strong>. Families who show up consistently, who make room at the table, who say <em>"you're welcome here"</em> — and mean it.
            </p>

            <p className="text-gray-600 font-sans text-base leading-relaxed mb-8">
              At Maroon Hearth Homes, we don't leave you to figure it out alone. We train you, support you, check in on you, and walk alongside you every step of the way. Because when you succeed, a child gets what they need most — a home.
            </p>

            {/* Warm pull quote */}
            <div className="border-l-4 border-gold pl-5 mb-8">
              <p className="text-maroon font-serif text-lg italic leading-relaxed">
                "You don't have to be perfect to make a profound difference in a child's life. You just have to be present."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("become-foster-parent")}
                className="whitespace-nowrap bg-maroon hover:bg-maroon-dark text-white font-sans font-semibold text-sm px-6 py-3 rounded-md transition-colors text-center cursor-pointer"
              >
                Start Your Foster Parent Journey
              </button>
              <button
                onClick={() => scrollTo("foster-care")}
                className="whitespace-nowrap border border-maroon text-maroon hover:bg-maroon hover:text-white font-sans font-semibold text-sm px-6 py-3 rounded-md transition-colors text-center cursor-pointer"
              >
                Learn About Our Services
              </button>
            </div>
          </div>

          {/* Right — warm image */}
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Warm%20and%20genuine%20portrait%20of%20a%20smiling%20diverse%20foster%20family%20sitting%20together%20on%20a%20porch%20steps%20father%20mother%20and%20two%20happy%20children%20of%20different%20ages%20laughing%20and%20at%20ease%20with%20each%20other%20golden%20hour%20afternoon%20light%20soft%20and%20warm%20real%20family%20love%20and%20safety%20genuine%20joy%20no%20posed%20stiffness%20photorealistic%20lifestyle%20photography%20heartwarming%20and%20inviting%20scene&width=780&height=680&seq=mhh-foster-welcome-001&orientation=portrait"
              alt="A warm and welcoming foster family smiling together"
              className="w-full h-[460px] object-cover object-top rounded-2xl"
            />

            {/* Floating warmth cards */}
            <div className="absolute -bottom-5 -left-4 bg-white rounded-xl shadow-md border border-maroon-100 px-5 py-4 flex items-center gap-3 max-w-52">
              <div className="w-10 h-10 flex items-center justify-center bg-gold/20 rounded-full flex-shrink-0">
                <i className="ri-home-heart-line text-gold-dark text-xl" />
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-maroon leading-tight">Every home matters.</p>
                <p className="text-gray-400 font-sans text-xs mt-0.5">Yours could be next.</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-maroon rounded-xl px-4 py-3 flex items-center gap-2 max-w-48">
              <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-check-fill text-gold text-base" />
              </div>
              <p className="text-white font-sans text-xs leading-snug font-medium">We train &amp; support you every step</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
