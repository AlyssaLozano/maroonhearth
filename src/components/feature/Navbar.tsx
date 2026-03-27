import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

type NavChild = { label: string; path: string; tag?: string };
type NavItem =
  | { label: string; path: string; children?: undefined }
  | { label: string; path?: undefined; children: NavChild[] };

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    children: [
      { label: "Foster Care & Therapeutic FC", path: "/services#foster-care" },
      { label: "Home & Community Care", path: "/cls", tag: "New" },
    ],
  },
  { label: "Safety & Compliance", path: "/compliance" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/#contact" },
];

function DropdownMenu({
  children,
  solid,
  onClose,
}: {
  children: NavChild[];
  solid: boolean;
  onClose: () => void;
}) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
      <div className="bg-white rounded-xl shadow-xl border border-maroon-100 py-2 min-w-56 overflow-hidden">
        {children.map((c) => (
          <Link
            key={c.path}
            to={c.path}
            onClick={onClose}
            className="flex items-center justify-between px-5 py-3 font-sans text-sm text-gray-700 hover:bg-maroon-50 hover:text-maroon transition-colors"
          >
            <span>{c.label}</span>
            {c.tag && (
              <span className="ml-3 text-xs bg-gold text-maroon font-semibold px-2 py-0.5 rounded-full">
                {c.tag}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const solidBg = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-transition ${
        solidBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20" ref={dropdownRef}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="https://static.readdy.ai/image/eeec8f72bff1cf0b863e9b5d60a6e4df/a3d3d4bb13da0c0909db0365f8c52aec.png"
            alt="Maroon Hearth Homes LLC"
            className="w-10 h-10 object-contain"
          />
          <div className="leading-tight">
            <span
              className={`block font-serif font-bold text-sm whitespace-nowrap ${
                solidBg ? "text-maroon" : "text-white"
              }`}
            >
              Maroon Hearth Homes
            </span>
            <span
              className={`block text-xs font-sans tracking-wide ${
                solidBg ? "text-gold-dark" : "text-gold"
              }`}
            >
              LLC &mdash; Multi-Service Care
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isDropdown = !!item.children;
            const isActive = !isDropdown && location.pathname === item.path;
            const labelKey = item.label;

            if (isDropdown) {
              const open = openDropdown === labelKey;
              return (
                <div key={labelKey} className="relative">
                  <button
                    onClick={() => setOpenDropdown(open ? null : labelKey)}
                    className={`flex items-center gap-1 px-3 py-2 font-sans text-sm font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      solidBg
                        ? open
                          ? "text-maroon bg-maroon-50"
                          : "text-gray-600 hover:text-maroon hover:bg-maroon-50"
                        : open
                        ? "text-gold bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i
                        className={`ri-arrow-down-s-line text-base transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  {open && (
                    <DropdownMenu
                      children={item.children}
                      solid={solidBg}
                      onClose={() => setOpenDropdown(null)}
                    />
                  )}
                </div>
              );
            }

            return (
              <Link
                key={labelKey}
                to={item.path!}
                className={`relative px-3 py-2 font-sans text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  solidBg
                    ? isActive
                      ? "text-maroon bg-maroon-50"
                      : "text-gray-600 hover:text-maroon hover:bg-maroon-50"
                    : isActive
                    ? "text-gold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/services#foster-care"
            className={`whitespace-nowrap font-sans font-semibold text-sm px-4 py-2 rounded-md transition-colors ${
              solidBg
                ? "border border-maroon text-maroon hover:bg-maroon hover:text-white"
                : "border border-white/70 text-white hover:bg-white/10"
            }`}
          >
            Foster Care
          </Link>
          <Link
            to="/cls"
            className="whitespace-nowrap bg-gold hover:bg-gold-dark text-maroon-dark font-sans font-semibold text-sm px-4 py-2 rounded-md transition-colors"
          >
            Home & Community Care
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <i
            className={`ri-${mobileOpen ? "close" : "menu"}-line text-2xl ${
              solidBg ? "text-maroon" : "text-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-maroon-100 px-6 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isDropdown = !!item.children;
              const labelKey = item.label;

              if (isDropdown) {
                const open = mobileExpanded === labelKey;
                return (
                  <div key={labelKey}>
                    <button
                      onClick={() => setMobileExpanded(open ? null : labelKey)}
                      className="w-full flex items-center justify-between py-3 font-sans text-maroon font-medium text-sm cursor-pointer"
                    >
                      {item.label}
                      <span className="w-5 h-5 flex items-center justify-center">
                        <i
                          className={`ri-arrow-down-s-line transition-transform ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                    {open && (
                      <div className="pl-4 pb-2 flex flex-col gap-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.path}
                            to={c.path}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 font-sans text-gray-600 text-sm flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                            {c.label}
                            {c.tag && (
                              <span className="text-xs bg-gold text-maroon font-semibold px-2 py-0.5 rounded-full">
                                {c.tag}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={labelKey}
                  to={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-sans text-maroon font-medium text-sm border-b border-maroon-50"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/services#foster-care"
              onClick={() => setMobileOpen(false)}
              className="mt-3 border border-maroon text-maroon font-sans font-semibold text-sm px-5 py-3 rounded-md text-center whitespace-nowrap"
            >
              Foster Care Services
            </Link>
            <Link
              to="/cls"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-gold text-maroon-dark font-sans font-semibold text-sm px-5 py-3 rounded-md text-center whitespace-nowrap"
            >
              Home & Community Care
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
