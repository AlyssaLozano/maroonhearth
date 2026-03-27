

export default function CLSHero() {
  return (
    <section className="relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Compassionate%20professional%20female%20home%20care%20aide%20sitting%20beside%20smiling%20happy%20elderly%20woman%20on%20bright%20sunlit%20living%20room%20sofa%20both%20laughing%20together%20warmly%20caregiver%20gently%20holding%20elderly%20woman%20hands%20natural%20window%20light%20filling%20room%20with%20golden%20warmth%20fresh%20flowers%20on%20side%20table%20clean%20comfortable%20home%20genuine%20human%20connection%20warm%20cream%20and%20amber%20tones%20photorealistic%20lifestyle%20photography%20uplifting%20and%20heartfelt%20authentic%20scene%20two%20people%20sharing%20joy&width=1920&height=800&seq=mhh-cls-hero-human-001&orientation=landscape"
          alt="Compassionate home care aide with smiling elderly client"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/75 to-maroon/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
        <div className="max-w-2xl">

          {/* Opening notice */}
          <div className="flex items-start gap-3 bg-amber-400/20 border border-amber-400/50 rounded-xl px-5 py-4 mb-7">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-error-warning-line text-amber-300 text-lg" />
            </div>
            <div>
              <p className="text-amber-200 font-sans font-semibold text-sm mb-0.5">
                Opening Fall 2026 &nbsp;&middot;&nbsp; License Pending
              </p>
              <p className="text-white/70 font-sans text-xs leading-relaxed">
                <strong className="text-white/90">No children will be placed and no services of any kind will be delivered during this period</strong> until our license is fully finalized. Inquiries and referrals are welcome now.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gold/20 border border-gold/40 text-gold font-sans text-xs px-3 py-1 rounded-full">Community Living Arrangement (CLA)</span>
            <span className="bg-white/10 border border-white/30 text-white/80 font-sans text-xs px-3 py-1 rounded-full">Community Living Support (CLS)</span>
            <span className="bg-white/10 border border-white/30 text-white/80 font-sans text-xs px-3 py-1 rounded-full">Licensed PHCP</span>
            <span className="bg-white/10 border border-white/30 text-white/80 font-sans text-xs px-3 py-1 rounded-full">Medicaid Waiver (NOW/COMP)</span>
            <span className="bg-white/10 border border-white/30 text-white/80 font-sans text-xs px-3 py-1 rounded-full">DBHDD Funded</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Home &amp; Community<br />
            <span className="text-gold">Care Services</span>
          </h1>
          <p className="text-white/90 font-sans text-lg leading-relaxed mb-4">
            At Maroon Hearth Homes LLC, we provide three distinct care programs — Community Living Support (CLS), Private Home Care (PHCP), and Community Living Arrangements (CLA) — so individuals of all ages and abilities can live safely, independently, and with dignity.
          </p>
          <p className="text-white/75 font-sans text-base leading-relaxed mb-8">
            Whether you or your loved one needs structured disability support under a Medicaid waiver, compassionate private home care for aging in place, or DBHDD-funded residential care, our trained, background-checked team is here.
          </p>

          {/* Three-path CTAs — CLA first */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 flex-wrap">
            <a
              href="#cla"
              className="whitespace-nowrap bg-gold hover:bg-gold-dark text-maroon-dark font-sans font-semibold text-base px-6 py-4 rounded-md transition-colors text-center"
            >
              Community Living Arrangement
            </a>
            <a
              href="#cls"
              className="whitespace-nowrap border-2 border-white/70 hover:border-white text-white font-sans font-semibold text-base px-6 py-4 rounded-md transition-colors text-center hover:bg-white/10"
            >
              Community Living Support
            </a>
            <a
              href="#phcp"
              className="whitespace-nowrap border-2 border-gold/50 hover:border-gold text-gold font-sans font-semibold text-base px-6 py-4 rounded-md transition-colors text-center hover:bg-gold/10"
            >
              Private Home Care
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:7064890188"
              className="flex items-center gap-2 text-white/70 hover:text-white font-sans text-sm transition-colors"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-line text-gold text-sm" />
              </div>
              (706) 489-0188
            </a>
            <a
              href="#cls-form"
              className="flex items-center gap-2 text-white/70 hover:text-white font-sans text-sm transition-colors"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-file-list-3-line text-gold text-sm" />
              </div>
              Request Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
