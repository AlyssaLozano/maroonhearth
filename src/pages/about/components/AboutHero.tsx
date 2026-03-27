export default function AboutHero() {
  return (
    <section className="bg-maroon pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-gold font-sans text-xs tracking-widest uppercase font-semibold mb-4">About Us</span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          A Safe Place. A Warm Home.
        </h1>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
        <p className="text-white/75 font-sans text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          The name says it all. Maroon Hearth Homes was built on two simple promises — that every person we serve finds safety within our care, and warmth within our walls. We are a dual-licensed care organization serving children, families, and adults across Augusta, Georgia and the surrounding CSRA.
        </p>
        {/* Dual license badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-shield-check-line text-gold text-xl" />
            </div>
            <div className="text-left">
              <p className="text-white font-sans font-semibold text-sm">Licensed Child-Placing Agency (CPA)</p>
              <p className="text-white/60 font-sans text-xs">Georgia Rules 290-9-2 &bull; DFCS · DCH · HFRD Partner</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-home-heart-line text-gold text-xl" />
            </div>
            <div className="text-left">
              <p className="text-white font-sans font-semibold text-sm">Licensed Home Care Provider (PHCP)</p>
              <p className="text-white/60 font-sans text-xs">Georgia Dept. of Community Health</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
