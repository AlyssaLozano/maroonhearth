import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-maroon text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/20">
          {/* Column 1 — Agency Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://static.readdy.ai/image/eeec8f72bff1cf0b863e9b5d60a6e4df/a3d3d4bb13da0c0909db0365f8c52aec.png"
                alt="Maroon Hearth Homes Logo"
                className="w-10 h-10 object-contain brightness-200"
              />
              <div>
                <p className="font-serif font-bold text-base leading-tight">Maroon Hearth Homes LLC</p>
                <p className="text-gold text-xs tracking-wide">Augusta, Georgia</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Safe Homes. Structured Support. Real Outcomes.
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              Licensed Child-Placing Agency<br />
              Georgia Rules 290-9-2 (CPA)<br />
              Licensed Private Home Care Provider (PHCP)<br />
              Georgia Dept. of Community Health
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-gold font-sans font-semibold text-xs tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Foster Care Services", to: "/services" },
                { label: "Home & Community Care", to: "/cls" },
                { label: "Safety & Compliance", to: "/compliance" },
                { label: "Become a Foster Parent", to: "/services#become-foster-parent" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-gold font-sans font-semibold text-xs tracking-widest uppercase mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-phone-line text-gold text-base" />
                </div>
                <a href="tel:7064890188" className="text-white/70 hover:text-white text-sm transition-colors">
                  (706) 489-0188
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-mail-line text-gold text-base" />
                </div>
                <a href="mailto:maroon@lozanoholdings.com" className="text-white/70 hover:text-white text-sm transition-colors break-all">
                  maroon@lozanoholdings.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-map-pin-line text-gold text-base" />
                </div>
                <span className="text-white/70 text-sm">
                  Augusta, Georgia<br />
                  Richmond County &amp; Surrounding Areas
                </span>
              </li>
            </ul>
            <div className="mt-6 p-3 bg-white/10 rounded-md">
              <p className="text-xs text-white/80 font-medium">Emergency / After-Hours</p>
              <a href="tel:7064890188" className="text-gold font-semibold text-sm">(706) 489-0188</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Maroon Hearth Homes LLC. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Licensed Georgia Child-Placing Agency &nbsp;&bull;&nbsp; Serving the CSRA
          </p>
        </div>
      </div>
    </footer>
  );
}
