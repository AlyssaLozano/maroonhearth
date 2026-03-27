export default function ServicesHero() {
  return (
    <section className="bg-maroon pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-gold font-sans text-xs tracking-widest uppercase font-semibold mb-4">Our Services</span>
        <p className="inline-flex items-center justify-center gap-3 font-serif text-lg md:text-xl text-white/70 font-medium tracking-wide mb-2">
          <img
            src="https://static.readdy.ai/image/eeec8f72bff1cf0b863e9b5d60a6e4df/a3d3d4bb13da0c0909db0365f8c52aec.png"
            alt="Maroon Hearth Homes logo"
            className="w-8 h-8 object-contain opacity-90"
          />
          Maroon Hearth Homes
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          What We Provide
        </h1>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
        <p className="text-white/75 font-sans text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Two divisions. Comprehensive care. From foster care placements for children to community living and in-home support for adults — we provide structured, supervised care built on compliance and compassion.
        </p>

        {/* Division quick badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <i className="ri-home-heart-line text-gold text-base" />
            </div>
            <div className="text-left">
              <p className="text-white font-sans font-semibold text-xs whitespace-nowrap">Division 1</p>
              <p className="text-white/60 font-sans text-xs whitespace-nowrap">Foster Care &amp; Therapeutic Foster Care</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <i className="ri-community-line text-gold text-base" />
            </div>
            <div className="text-left">
              <p className="text-white font-sans font-semibold text-xs whitespace-nowrap">Division 2</p>
              <p className="text-white/60 font-sans text-xs whitespace-nowrap">Home &amp; Community Care · CLA · CLS · PHCP</p>
            </div>
          </div>
        </div>

        {/* Pre-licensing notice */}
        <div className="inline-flex items-start gap-4 bg-amber-400/15 border border-amber-400/40 rounded-xl px-6 py-4 max-w-2xl text-left">
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
            <i className="ri-error-warning-line text-amber-300 text-xl" />
          </div>
          <div>
            <p className="text-amber-200 font-sans font-semibold text-sm mb-1">Currently in Pre-Licensing Phase</p>
            <p className="text-white/70 font-sans text-sm leading-relaxed">
              Maroon Hearth Homes is actively completing the licensing process. <strong className="text-white/90">No children will be placed and no services of any kind will be delivered during this period.</strong> We are placing interested individuals on our qualified foster parent list and will begin classes once our license is finalized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
