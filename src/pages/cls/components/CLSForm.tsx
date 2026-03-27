export default function CLSForm() {
  return (
    <section id="cls-form" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left — contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-maroon rounded-2xl p-8 text-white flex flex-col gap-7">
              <div>
                <p className="font-serif text-xl font-bold mb-1">Maroon Hearth Homes</p>
                <p className="text-white/60 font-sans text-sm">Home &amp; Community Care — CLA · CLS · PHCP</p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg flex-shrink-0">
                    <i className="ri-mail-line text-gold text-base" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-white/50 uppercase tracking-widest mb-0.5">Email</p>
                    <a href="mailto:maroon@lozanoholdings.com" className="text-white font-sans text-sm hover:text-gold transition-colors cursor-pointer">
                      maroon@lozanoholdings.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg flex-shrink-0">
                    <i className="ri-phone-line text-gold text-base" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-white/50 uppercase tracking-widest mb-0.5">Phone</p>
                    <a href="tel:7064890188" className="text-white font-sans text-sm hover:text-gold transition-colors cursor-pointer">
                      (706) 489-0188
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg flex-shrink-0">
                    <i className="ri-map-pin-line text-gold text-base" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-white/50 uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-white font-sans text-sm">Augusta, Georgia</p>
                    <p className="text-white/55 font-sans text-xs mt-0.5">Richmond County &amp; Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg flex-shrink-0">
                    <i className="ri-calendar-schedule-line text-gold text-base" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-white/50 uppercase tracking-widest mb-0.5">Opening</p>
                    <p className="text-amber-300 font-sans text-sm font-semibold">Fall 2026 — License Pending</p>
                    <p className="text-white/50 font-sans text-xs mt-0.5">Inquiries welcome now</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medicaid waiver note */}
            <div className="bg-gold-light border border-gold/40 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-9 h-9 flex items-center justify-center bg-gold-dark rounded-lg flex-shrink-0 mt-0.5">
                <i className="ri-hand-coin-line text-white text-base" />
              </div>
              <div>
                <p className="font-sans font-semibold text-maroon text-sm mb-1">Medicaid Waiver Participants</p>
                <p className="text-gray-600 font-sans text-xs leading-relaxed">
                  If you are a NOW or COMP waiver recipient, please have your waiver case manager&apos;s contact information available. We will coordinate directly with your case manager once services begin.
                </p>
              </div>
            </div>

            <div className="bg-maroon-50 border border-maroon-100 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-9 h-9 flex items-center justify-center bg-maroon rounded-lg flex-shrink-0 mt-0.5">
                <i className="ri-information-line text-gold text-base" />
              </div>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                We typically respond within <strong className="text-maroon">1 business day</strong>. For urgent needs, please call directly.
              </p>
            </div>
          </div>

          {/* Right — email CTA */}
          <div className="lg:col-span-3">
            <div className="bg-maroon-50 border border-maroon-100 rounded-2xl p-10 md:p-14 flex flex-col items-center text-center gap-7">
              <div className="w-20 h-20 flex items-center justify-center bg-maroon rounded-2xl">
                <i className="ri-mail-send-line text-4xl text-gold" />
              </div>

              <div>
                <span className="inline-block text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold mb-3 bg-gold-light px-3 py-1 rounded-full">
                  Get Started
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-maroon mb-3">
                  Send a Service Inquiry
                </h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm mx-auto">
                  Interested in CLA, CLS, or PHCP services for yourself or a loved one? Email us your name, contact number, which program you're inquiring about, and a brief description of your needs. Our team will follow up within one business day.
                </p>
              </div>

              <a
                href="mailto:maroon@lozanoholdings.com?subject=Home%20%26%20Community%20Care%20Inquiry%20%E2%80%94%20Maroon%20Hearth%20Homes"
                className="whitespace-nowrap inline-flex items-center gap-3 bg-maroon hover:bg-maroon-dark text-white font-sans font-semibold text-sm px-9 py-4 rounded-xl transition-colors cursor-pointer"
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-gold text-base" />
                </span>
                Email Us Your Inquiry
              </a>

              <p className="text-gray-400 font-sans text-xs">
                maroon@lozanoholdings.com
              </p>

              <div className="w-full border-t border-maroon-100 pt-6">
                <p className="text-gray-500 font-sans text-sm">
                  Prefer to call?{" "}
                  <a
                    href="tel:7064890188"
                    className="text-maroon font-semibold hover:text-gold-dark transition-colors cursor-pointer"
                  >
                    (706) 489-0188
                  </a>
                  {" "}— available during business hours.
                </p>
                <p className="text-gray-400 font-sans text-xs mt-2">
                  For after-hours or urgent matters, call the same number.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
