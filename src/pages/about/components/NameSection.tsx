export default function NameSection() {
  return (
    <section className="py-20 md:py-24 bg-maroon-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Our Identity</span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
          What&apos;s in the Name?
        </h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Maroon */}
          <div className="bg-maroon rounded-2xl p-10 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 flex items-center justify-center bg-gold/20 rounded-xl mb-6">
                <i className="ri-home-4-line text-3xl text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Maroon
              </h3>
              <p className="text-white/80 font-sans text-sm leading-relaxed">
                Back in the day, a maroon home was a recognized signal — a quiet mark in the community that told those in need: <em className="text-gold not-italic font-semibold">this is a safe place</em>. People knew that a maroon home meant refuge, protection, and someone willing to open their door. We carry that legacy forward in everything we do.
              </p>
            </div>
          </div>

          {/* Hearth */}
          <div className="bg-white border border-maroon-100 rounded-2xl p-10 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold/10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 flex items-center justify-center bg-gold-light rounded-xl mb-6">
                <i className="ri-fire-line text-3xl text-gold-dark" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-maroon mb-4">
                Hearth
              </h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                A nod to the <strong className="text-maroon">hearth</strong> — the heart of every true home. A hearth is where warmth lives, where families gather, where people feel grounded and cared for. Our homes aren&apos;t placements or facilities. They&apos;re warm, inviting spaces where every person we serve feels genuinely welcomed.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-gray-500 font-sans text-sm leading-relaxed max-w-2xl mx-auto">
          Together, <strong className="text-maroon">Maroon Hearth Homes</strong> means exactly what it says — a safe, warm place to call home.
        </p>
      </div>
    </section>
  );
}
