export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div>
            <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Get In Touch</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-5">Contact Us</h2>
            <p className="text-gray-500 font-sans text-base leading-relaxed mb-8">
              Whether you&apos;re interested in becoming a foster parent, submitting a referral, or have questions about our services — we&apos;re here to help.
            </p>

            <ul className="space-y-5 mb-8">
              {[
                { icon: "ri-phone-line", label: "Phone", value: "(706) 489-0188", href: "tel:7064890188" },
                { icon: "ri-mail-line", label: "Email", value: "maroon@lozanoholdings.com", href: "mailto:maroon@lozanoholdings.com" },
                { icon: "ri-map-pin-line", label: "Location", value: "Augusta, Georgia — Richmond County & Surrounding Areas", href: null },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-maroon-50 rounded-lg">
                    <i className={`${c.icon} text-maroon text-lg`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-sans mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-maroon font-sans text-sm font-medium hover:text-gold-dark transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-maroon font-sans text-sm font-medium">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Emergency box */}
            <div className="bg-gold-light border-l-4 border-gold rounded-r-lg p-5">
              <p className="font-sans font-semibold text-maroon text-sm mb-1">Urgent Placement Needs?</p>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                For emergency situations requiring immediate placement, please call our 24-hour line:
              </p>
              <a href="tel:7064890188" className="text-maroon font-serif font-bold text-lg mt-1 block hover:text-gold-dark transition-colors">
                (706) 489-0188
              </a>
            </div>
          </div>

          {/* Right — email CTA */}
          <div className="bg-maroon-50 rounded-xl p-10 flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-maroon rounded-full">
              <i className="ri-mail-send-line text-3xl text-gold" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-maroon mb-3">Send Us an Email</h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm mx-auto">
                Have a question, want to start the foster parent process, or need to submit a referral? Reach out directly — we typically respond within one business day.
              </p>
            </div>
            <a
              href="mailto:maroon@lozanoholdings.com?subject=Inquiry%20from%20Maroon%20Hearth%20Homes%20Website"
              className="whitespace-nowrap bg-maroon hover:bg-maroon-dark text-white font-sans font-semibold text-sm px-8 py-4 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-mail-line text-base" />
              </span>
              Email Us Now
            </a>
            <p className="text-gray-400 font-sans text-xs">
              maroon@lozanoholdings.com
            </p>
            <div className="w-full border-t border-maroon-100 pt-6">
              <p className="text-gray-500 font-sans text-xs leading-relaxed">
                Prefer to call? Reach us at{" "}
                <a href="tel:7064890188" className="text-maroon font-semibold hover:text-gold-dark transition-colors">
                  (706) 489-0188
                </a>
                {" "}during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
