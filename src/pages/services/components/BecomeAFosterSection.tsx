import { useEffect, useRef, useState } from "react";

const steps = [
  { num: "01", title: "Orientation", timeLabel: "Day 1", desc: "Attend a free info session to learn about our program, expectations, and what it means to be a licensed foster parent." },
  { num: "02", title: "Application", timeLabel: "Week 1–2", desc: "Complete and submit the MHH-001 Foster Parent Application. We'll review and contact you for next steps." },
  { num: "03", title: "Background Checks", timeLabel: "Weeks 2–4", desc: "All household members 17+ undergo criminal background checks, CPS reviews, and sex offender registry screenings." },
  { num: "04", title: "Home Study", timeLabel: "Weeks 3–5", desc: "A licensed assessor evaluates your home environment, family dynamics, and readiness to provide foster care." },
  { num: "05", title: "Training", timeLabel: "Weeks 4–6", desc: "Complete required pre-service training covering trauma-informed care, behavior management, and Georgia DFCS standards." },
  { num: "06", title: "Approval", timeLabel: "Months 2–4", desc: "Your home is licensed and you're matched with children based on your household profile, capacity, and strengths." },
];

const requirements = [
  { icon: "ri-shield-user-line", text: "Criminal background check (all household members 17+)" },
  { icon: "ri-file-search-line", text: "CPS history review" },
  { icon: "ri-list-check-2", text: "Sex offender registry screening" },
  { icon: "ri-home-4-line", text: "Stable, safe home with adequate space per child" },
  { icon: "ri-bank-line", text: "Proof of income & financial stability" },
  { icon: "ri-graduation-cap-line", text: "Completion of all required pre-service training" },
  { icon: "ri-heart-pulse-line", text: "Physical exams and health clearances" },
  { icon: "ri-user-star-line", text: "Character references" },
  { icon: "ri-car-line", text: "Valid driver\'s license and auto insurance" },
  { icon: "ri-time-line", text: "Ability to provide 24-hour care and supervision" },
];

const faqs = [
  {
    q: "Can I foster if I rent my home?",
    a: "Yes. You do not need to own your home to become a foster parent. Renters are welcome — what matters is that your home is stable, safe, and has adequate space for a child. We'll walk you through what's needed during the home study.",
  },
  {
    q: "Can single people apply?",
    a: "Absolutely. Single individuals can and do become excellent foster parents. There is no requirement to be married or in a partnership. What matters most is your stability, your commitment, and your support system.",
  },
  {
    q: "Can I work full-time and still foster?",
    a: "Yes, many foster parents work full-time. You'll need to have a reliable childcare plan in place for school-age children — and we're here to help if something unexpected comes up. Having a backup plan is part of what we help you build.",
  },
  {
    q: "Do I need prior experience with children?",
    a: "No prior experience is required. That's what our pre-service training is for. We'll equip you with the tools, language, and practical knowledge to care for children from hard places — even if you've never done it before.",
  },
  {
    q: "What if I have my own children at home?",
    a: "Having biological or adopted children in the home is completely fine. Your own children will be considered during the home study, and placement decisions will always factor in the dynamics of your existing household.",
  },
  {
    q: "Can I choose the age or gender of the child placed with me?",
    a: "You can share your preferences and strengths during the matching process. While we can't guarantee a specific placement, we work hard to match children with families who are best equipped to meet their specific needs.",
  },
  {
    q: "How long does the licensing process take?",
    a: "Most families are ready to begin foster parent classes within 30–45 days of starting the process. From there, the full licensing process typically takes 3–6 months to complete. Delays usually come from background check processing or scheduling. We stay in contact with you every step of the way.",
  },
  {
    q: "Do foster parents receive financial support?",
    a: "Yes. Licensed foster parents receive a daily rate from DFCS to help cover the costs of caring for the child — things like food, clothing, and activities. We can share more details about rates during your orientation.",
  },
  {
    q: "What if something comes up and I need help right away?",
    a: "That's exactly why we exist. We have a 24/7 support line staffed by people who know your case. Whether it's a behavioral crisis, a scheduling emergency, or just a moment where you don't know what to do — call us.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-maroon-100 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-maroon-50 transition-colors"
      >
        <span className="font-sans font-semibold text-maroon text-sm leading-snug">{q}</span>
        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 bg-maroon-50 rounded-lg">
          <i className={`${open ? "ri-subtract-line" : "ri-add-line"} text-maroon text-base`} />
        </div>
      </button>
      {open && (
        <div className="px-6 pb-5 border-t border-maroon-100">
          <p className="text-gray-600 font-sans text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function BecomeAFosterSection() {
  const jotformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = jotformRef.current;
    if (!container) return;
    container.innerHTML = "";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://form.jotform.com/jsform/260855972828069";
    container.appendChild(script);
  }, []);

  return (
    <section id="become-foster-parent" className="py-20 md:py-28 bg-maroon-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Join Our Network</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-3 mb-4">
            Become a Foster Parent
          </h2>
          <p className="text-gray-500 font-sans text-base max-w-xl mx-auto leading-relaxed">
            We're looking for stable, committed individuals and families to provide safe, structured homes for children in Georgia's foster care system.
          </p>
        </div>

        {/* JotForm — right under header */}
        <div id="foster-survey" className="bg-white rounded-2xl border border-maroon-100 p-8 md:p-10 mb-20 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-maroon rounded-xl mx-auto mb-4">
              <i className="ri-survey-line text-gold text-2xl" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-maroon mb-2">
              Complete the Short Survey to See If You Qualify — We Hope You Do!
            </h3>
            <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-lg mx-auto">
              If there are any areas that may seem disqualifying, please{" "}
              <strong className="text-maroon">still submit</strong> — we'll review your situation
              and explore whether a risk assessment can be done to get you approved.
            </p>
          </div>
          <div ref={jotformRef} className="w-full min-h-[400px]" />
        </div>

        {/* Requirements — dramatic tile grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-maroon">Basic Requirements</h3>
            <p className="text-gray-500 font-sans text-sm mt-2">What you'll need to get started — don't worry, we'll guide you through each one</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {requirements.map((req) => (
              <div
                key={req.text}
                className="bg-white border border-maroon-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-maroon hover:bg-maroon-50 transition-colors cursor-default"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-maroon rounded-xl flex-shrink-0">
                  <i className={`${req.icon} text-gold text-lg`} />
                </div>
                <p className="text-gray-700 font-sans text-xs leading-snug font-medium">{req.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Process — horizontal linear timeline */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-maroon">The Licensing Process</h3>
            <p className="text-gray-500 font-sans text-sm mt-2">Six clear steps from inquiry to approval</p>
            <div className="inline-flex items-center gap-2.5 mt-5 bg-white border border-maroon-100 rounded-full px-5 py-2.5">
              <div className="w-7 h-7 flex items-center justify-center bg-maroon rounded-full flex-shrink-0">
                <i className="ri-time-line text-gold text-sm" />
              </div>
              <p className="text-maroon font-sans text-sm font-semibold">
                Expect to be ready for foster parent classes within{" "}
                <span className="text-gold-dark font-bold">30–45 days</span>{" "}
                of starting the process
              </p>
            </div>
          </div>

          {/* Desktop: horizontal */}
          <div className="hidden lg:grid grid-cols-6 gap-0 relative">
            {/* connector line */}
            <div className="absolute top-8 left-[8.33%] right-[8.33%] h-0.5 bg-maroon-100 z-0" />
            {steps.map((step) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center px-3">
                <div className="w-16 h-16 flex items-center justify-center bg-maroon rounded-full border-4 border-maroon-50 mb-4 flex-shrink-0">
                  <span className="text-gold font-serif font-bold text-base">{step.num}</span>
                </div>
                <span className="inline-block bg-gold/15 text-gold-dark font-sans text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border border-gold/25 mb-2 whitespace-nowrap">
                  {step.timeLabel}
                </span>
                <p className="font-sans font-bold text-maroon text-sm mb-2">{step.title}</p>
                <p className="text-gray-500 font-sans text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="lg:hidden relative pl-8">
            <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-maroon-100" />
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="relative flex items-start gap-5">
                  <div className="absolute -left-8 w-8 h-8 flex items-center justify-center bg-maroon rounded-full flex-shrink-0 mt-0.5">
                    <span className="text-gold font-serif font-bold text-xs">{step.num}</span>
                  </div>
                  <div className="bg-white rounded-xl border border-maroon-100 p-4 w-full">
                    <div className="flex items-center gap-2 mb-1.5">
                      <p className="font-sans font-bold text-maroon text-sm">{step.title}</p>
                      <span className="inline-block bg-gold/15 text-gold-dark font-sans text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border border-gold/25 whitespace-nowrap">
                        {step.timeLabel}
                      </span>
                    </div>
                    <p className="text-gray-500 font-sans text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA after timeline */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <button
            onClick={() => document.getElementById("foster-survey")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="whitespace-nowrap inline-flex items-center gap-3 bg-maroon hover:bg-maroon-dark text-white font-sans font-semibold text-sm px-8 py-4 rounded-full transition-colors cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center bg-gold/25 rounded-full">
              <i className="ri-arrow-up-line text-gold text-sm" />
            </div>
            Ready to Start? Take the Survey
          </button>
          <p className="text-gray-400 font-sans text-xs">Takes less than 2 minutes &mdash; no commitment required</p>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Got Questions?</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-maroon mt-3">Frequently Asked Questions</h3>
            <p className="text-gray-500 font-sans text-sm mt-2 max-w-lg mx-auto">
              Some of the most common things people want to know before they apply — answered honestly.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
