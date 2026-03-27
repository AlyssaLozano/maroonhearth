import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden">

      {/* LEFT — Content panel */}
      <div className="relative z-10 w-full lg:w-[52%] flex items-center bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(201,169,97,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 px-8 md:px-14 lg:px-16 pt-32 pb-16 w-full">
          {/* Top badge */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-gold/20 border border-gold/40 text-gold font-sans text-xs px-3 py-1.5 rounded-full font-medium">
              Licensed Child-Placing Agency
            </span>
            <span className="bg-white/10 border border-white/25 text-white/80 font-sans text-xs px-3 py-1.5 rounded-full">
              Licensed Home Care Provider (PHCP)
            </span>
            <span className="bg-amber-400/20 border border-amber-400/50 text-amber-300 font-sans text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5">
              <i className="ri-information-line text-xs" />
              Pre-Licensing Phase — No Children or Services Delivered Yet
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-5">
            Compassionate Care.<br />
            Structured Support.<br />
            <span className="text-gold">
              Multiple Paths<br className="hidden sm:block" /> to Stability.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Maroon Hearth Homes LLC provides Foster Care, Therapeutic Foster Care, and Home &amp; Community Care services (CLS, PHCP &amp; CLA) across Georgia — putting children, families, and individuals first.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              to="/services#foster-care"
              className="whitespace-nowrap bg-gold hover:bg-gold-dark text-maroon-dark font-sans font-bold text-sm px-7 py-4 rounded-md transition-colors text-center"
            >
              Foster Care Services
            </Link>
            <Link
              to="/cls"
              className="whitespace-nowrap border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-sm px-7 py-4 rounded-md transition-colors text-center"
            >
              Home &amp; Community Care
            </Link>
          </div>

          {/* Trust row */}
          <div className="border-t border-white/15 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "ri-government-line", label: "DFCS · DCH · HFRD", sub: "Licensed & regulated" },
              { icon: "ri-shield-user-line", label: "Background Checked", sub: "All staff & families" },
              { icon: "ri-24-hours-line", label: "24/7 Support", sub: "Always available" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-gold/15 rounded-lg flex-shrink-0">
                  <i className={`${t.icon} text-gold text-lg`} />
                </div>
                <div>
                  <p className="text-white font-sans text-xs font-semibold">{t.label}</p>
                  <p className="text-white/50 font-sans text-xs">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — Dual image panel */}
      <div className="hidden lg:flex w-[48%] flex-col">

        {/* Top image — Black family */}
        <div className="relative flex-1 overflow-hidden group">
          <img
            src="https://readdy.ai/api/search-image?query=Beautiful%20warm%20Black%20African%20American%20family%20smiling%20together%20in%20sunlit%20home%20living%20room%20mother%20father%20and%20two%20young%20happy%20children%20all%20laughing%20joyfully%20genuine%20love%20and%20happiness%20warm%20golden%20afternoon%20light%20natural%20authentic%20family%20moment%20heartwarming%20photorealistic%20lifestyle%20photography%20Black%20family%20safe%20home%20togetherness%20cream%20and%20amber%20tones&width=900&height=600&seq=mhh-hero-black-family-001&orientation=landscape"
            alt="Happy Black family in a warm safe home"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gold rounded-lg">
              <i className="ri-home-heart-line text-maroon text-base" />
            </div>
            <div>
              <p className="text-white font-serif font-bold text-sm">Foster Care</p>
              <p className="text-white/70 font-sans text-xs">Safe homes for children in need</p>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-1 bg-gold flex-shrink-0" />

        {/* Bottom image — Home & Community Care */}
        <div className="relative flex-1 overflow-hidden group">
          <img
            src="https://public.readdy.ai/ai/img_res/edited_973cf69455b968619f902630ae00b59f_230ff507.jpg"
            alt="Caregiver and elderly woman sharing a joyful moment"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gold rounded-lg">
              <i className="ri-community-line text-maroon text-base" />
            </div>
            <div>
              <p className="text-white font-serif font-bold text-sm">Home &amp; Community Care</p>
              <p className="text-white/70 font-sans text-xs">Independence for adults at home</p>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile background fallback */}
      <div className="absolute inset-0 lg:hidden -z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Beautiful%20warm%20Black%20African%20American%20family%20smiling%20together%20in%20sunlit%20home%20living%20room%20mother%20father%20and%20two%20young%20happy%20children%20all%20laughing%20joyfully%20genuine%20love%20and%20happiness%20warm%20golden%20afternoon%20light%20natural%20authentic%20family%20moment%20heartwarming%20photorealistic%20lifestyle%20photography%20Black%20family%20safe%20home%20togetherness&width=1200&height=900&seq=mhh-hero-mobile-black-001&orientation=landscape"
          alt="Happy Black family"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

    </section>
  );
}
