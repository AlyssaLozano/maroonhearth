const scenarios = [
  {
    icon: "ri-briefcase-3-line",
    number: "01",
    title: "You have a work meeting and no backup.",
    desc: "Your meeting runs late, school pickup is in 20 minutes, and you have no one to call. We have staff available to step in — because your job matters, and so does your child.",
  },
  {
    icon: "ri-moon-line",
    number: "02",
    title: "It's 11pm and you don't know what to do.",
    desc: "The child in your home is having a hard night — escalating, scared, inconsolable. Our 24/7 support line means someone who knows your case picks up the phone.",
  },
  {
    icon: "ri-hospital-line",
    number: "03",
    title: "A sudden appointment comes up mid-week.",
    desc: "Medical visit, court date, school conference — we coordinate with providers, DFCS, and schools so you're not drowning in logistics alone.",
  },
  {
    icon: "ri-refresh-line",
    number: "04",
    title: "You need a break. A real one.",
    desc: "Caring for children from hard places is demanding work. We help you access respite care without guilt — so you come back recharged and ready.",
  },
  {
    icon: "ri-emotion-sad-line",
    number: "05",
    title: "Something happened and you're not sure how to respond.",
    desc: "A disclosure. A behavioral episode. A trauma reaction you've never seen before. We're reachable when moments like these actually happen.",
  },
  {
    icon: "ri-team-line",
    number: "06",
    title: "You feel like you're doing it alone.",
    desc: "Too many foster parents feel invisible. At MHH, your case manager knows your name, your family's story, and every child in your home.",
  },
];

export default function WhyChooseMHHSection() {
  return (
    <section
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f0202 0%, #1c0606 40%, #150404 100%)" }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #c9a961 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Large ambient glow blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6B1C23 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a961 0%, transparent 70%)" }}
      />

      {/* Top & bottom gold lines */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span
            className="inline-flex items-center gap-2 text-gold font-sans text-[11px] tracking-[0.3em] uppercase font-bold mb-6 border border-gold/40 px-5 py-2.5 rounded-full"
            style={{ background: "rgba(201,169,97,0.08)" }}
          >
            <i className="ri-star-line text-gold text-xs" />
            Why It Matters Who You Choose
          </span>

          <h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            style={{ textShadow: "0 0 80px rgba(201,169,97,0.2)" }}
          >
            There are a lot of agencies.
          </h2>
          <h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-10"
            style={{
              background: "linear-gradient(135deg, #e8c97a 0%, #c9a961 50%, #a8883a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              filter: "drop-shadow(0 0 30px rgba(201,169,97,0.5))",
            }}
          >
            Here&apos;s what sets us apart.
          </h2>

          <p className="text-white/50 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            The agency you partner with shapes everything. The difference between burning out after six months and thriving for years comes down to one thing: real, present support — not just on paper.
          </p>
        </div>

        {/* Callout bar */}
        <div
          className="flex items-center gap-5 rounded-2xl px-8 py-6 mb-16 max-w-3xl mx-auto border border-gold/30"
          style={{ background: "linear-gradient(135deg, rgba(201,169,97,0.12) 0%, rgba(201,169,97,0.05) 100%)" }}
        >
          <div
            className="w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0 border border-gold/30"
            style={{ background: "rgba(201,169,97,0.15)" }}
          >
            <i className="ri-shield-star-fill text-gold text-2xl" />
          </div>
          <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed">
            At Maroon Hearth Homes, we provide a{" "}
            <strong className="font-bold" style={{ color: "#e8c97a" }}>high degree of support to our foster parents</strong>
            {" "}— in real moments, when it counts most.
          </p>
        </div>

        {/* Scenario cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {scenarios.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl p-8 flex flex-col gap-0 overflow-hidden cursor-default transition-all duration-400"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "3px solid #c9a961",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(201,169,97,0.08)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 50px rgba(201,169,97,0.18), inset 0 1px 0 rgba(201,169,97,0.3)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,97,0.5)";
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "#e8c97a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "#c9a961";
              }}
            >
              {/* Giant watermark number */}
              <span
                className="absolute -bottom-3 -right-2 font-serif font-bold leading-none select-none pointer-events-none transition-all duration-400 group-hover:opacity-30"
                style={{
                  fontSize: "7rem",
                  color: "rgba(201,169,97,0.1)",
                }}
              >
                {s.number}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 flex-shrink-0 transition-all duration-400 group-hover:scale-110"
                style={{ background: "rgba(201,169,97,0.15)", border: "1px solid rgba(201,169,97,0.3)" }}
              >
                <i className={`${s.icon} text-2xl`} style={{ color: "#e8c97a" }} />
              </div>

              {/* Text */}
              <p className="font-serif font-bold text-white text-lg leading-snug mb-3 pr-10 relative z-10">
                {s.title}
              </p>
              <p className="text-white/50 font-sans text-sm leading-relaxed relative z-10 group-hover:text-white/70 transition-colors duration-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className="relative overflow-hidden rounded-3xl px-10 py-14 md:px-16 md:py-16 flex flex-col lg:flex-row items-center gap-10 text-center lg:text-left"
          style={{
            background: "linear-gradient(135deg, #6B1C23 0%, #4A1219 100%)",
            border: "1px solid rgba(201,169,97,0.25)",
            boxShadow: "0 0 80px rgba(107,28,35,0.5)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 90% 50%, rgba(201,169,97,0.15) 0%, transparent 65%)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div
            className="w-24 h-24 flex items-center justify-center rounded-3xl flex-shrink-0 mx-auto lg:mx-0 relative z-10"
            style={{
              background: "rgba(201,169,97,0.15)",
              border: "1px solid rgba(201,169,97,0.35)",
              boxShadow: "0 0 40px rgba(201,169,97,0.2)",
            }}
          >
            <i className="ri-heart-2-fill text-5xl" style={{ color: "#e8c97a" }} />
          </div>
          <div className="flex-1 relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
              When parents are supported,
              <br />
              <span style={{ color: "#e8c97a" }}>children are safer.</span>
            </h3>
            <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
              Every policy, every staff hire, every training is designed around one question: does this actually help the families we serve? A supported foster parent doesn't just survive the hard moments — they become exactly what that child needed.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
