import { useState } from "react";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    content:
      "Maroon Hearth Homes LLC exists to provide safe, structured, and clinically informed foster care and therapeutic foster care services that protect children, stabilize families, and create real pathways to permanency — in partnership with DFCS, DCH, HFRD, the courts, and the communities we serve.",
  },
  {
    id: "vision",
    label: "Vision",
    content:
      "A Georgia where no child waits in a hotel, a hospital, or a congregate facility because there was no home ready to receive them — where every child in state custody has access to a trained, supported foster family that meets their needs, and where the CSRA leads the state in placement quality, stability, and outcomes.",
  },
  {
    id: "philosophy",
    label: "Philosophy",
    content:
      "Every child who enters our care carries a history we did not write — but we are responsible for what is written next. We practice trauma-informed, culturally competent care not as a compliance checkbox but as a foundational belief that children heal in relationship, in consistency, and in safety. We hold high standards for our foster families because the children we serve have already experienced what happens when adults do not. We do not place children into homes — we build environments where children can begin to trust again.",
  },
];

export default function MissionSection() {
  const [active, setActive] = useState("mission");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="bg-maroon py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-gold font-sans text-xs tracking-widest uppercase font-semibold">Who We Are</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3">
            Our Foundation
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 rounded-xl overflow-hidden border border-white/10">
          {/* Tab sidebar */}
          <div className="lg:w-56 flex flex-row lg:flex-col bg-maroon-dark">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex-1 lg:flex-none text-left px-6 py-5 font-sans font-medium text-sm transition-all cursor-pointer whitespace-nowrap relative ${
                  active === tab.id
                    ? "text-white bg-white/10"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {active === tab.id && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gold rounded-r-full" />
                )}
                <span className="pl-2">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="flex-1 bg-white/5 px-8 md:px-12 py-10 md:py-14">
            <h3 className="font-serif text-2xl font-bold text-gold mb-6">{current.label} Statement</h3>
            <p className="text-white/85 font-sans text-base md:text-lg leading-relaxed">
              {current.content}
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
          {[
            { value: "24/7", label: "Care Availability", small: false },
            { value: "DFCS · DCH · HFRD", label: "Licensed Partners", small: true },
            { value: "ISP", label: "Individualized Plans", small: false },
            { value: "CSRA", label: "Service Region", small: false },
          ].map((stat) => (
            <div key={stat.label} className="bg-maroon-dark/60 px-6 py-6 text-center">
              <p className={`font-serif font-bold text-gold mb-1 ${stat.small ? "text-base md:text-lg" : "text-2xl"}`}>{stat.value}</p>
              <p className="text-white/60 font-sans text-xs tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
