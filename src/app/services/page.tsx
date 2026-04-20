import Link from "next/link";

const services = [
  {
    icon: "♟︎",
    title: "Business Strategy",
    tagline: "We think three moves ahead.",
    description:
      "Success doesn't happen by accident — it's the result of deliberate planning, sharp analysis, and decisive action. We work with you to map your competitive landscape, identify opportunities, and build a roadmap that positions your business for long-term growth.",
    bullets: [
      "Competitive landscape analysis",
      "Market positioning and differentiation",
      "Long-term growth roadmapping",
      "KPI development and performance tracking",
    ],
  },
  {
    icon: "♜︎",
    title: "Operations",
    tagline: "Efficiency is a strategic weapon.",
    description:
      "Disorganized operations drain time, money, and momentum. We audit your existing workflows, eliminate bottlenecks, and implement systems that scale with your business — so your team can focus on what moves the needle.",
    bullets: [
      "Workflow audit and optimization",
      "Process documentation and SOPs",
      "Technology stack evaluation",
      "Scalable systems implementation",
    ],
  },
  {
    icon: "♝︎",
    title: "Consulting",
    tagline: "Clarity in complexity.",
    description:
      "Every business faces moments of uncertainty — a pivot, a new market, an unexpected challenge. Our consulting engagements bring outside perspective and deep expertise to help you navigate complexity with confidence and move forward with a clear plan.",
    bullets: [
      "Business model evaluation",
      "Strategic pivots and market entry",
      "Risk assessment and mitigation",
      "Stakeholder alignment facilitation",
    ],
  },
  {
    icon: "♛︎",
    title: "Executive Coaching",
    tagline: "Great leaders make great moves.",
    description:
      "The decisions at the top set the tone for everything below. Our executive coaching engagements are built around your specific leadership challenges — helping you develop clarity, decisiveness, and the strategic mindset your organization needs to win.",
    bullets: [
      "One-on-one leadership coaching",
      "Decision-making frameworks",
      "Communication and influence",
      "Vision setting and team alignment",
    ],
  },
];

export default function Services() {
  return (
    <main>
      {/* // Hero section */}
      <section className="relative py-24 chess-bg">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="label-caps text-gold mb-4">What We Offer</p>
          <h1 className="heading-display text-5xl md:text-6xl text-ivory mb-6">
            Our <span className="gold-text italic">Services</span>
          </h1>
          <hr className="divider-gold w-24 mx-auto mb-6" />
          <p className="text-ivory-dim text-lg max-w-2xl mx-auto leading-relaxed">
            Every engagement is tailored, intentional, and built around one goal
            - moving your business forward with precision.
          </p>
        </div>
      </section>
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Text side */}
              <div
                className={`flex flex-col gap-6 ${
                  index % 2 !== 0 ? "md:col-start-2" : ""
                }`}
              >
                <div>
                  <p className="label-caps text-gold mb-3">
                    {service.icon} {service.title}
                  </p>
                  <h2 className="heading-section text-ivory">
                    {service.tagline}
                  </h2>
                </div>
                <hr className="divider-gold w-16" />
                <p className="text-ivory-dim leading-relaxed">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-ivory-dim text-sm"
                    >
                      <span className="text-gold mt-0.5">♟︎</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-2">
                  <Link href="/contact" className="btn-primary w-fit">
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Visual side */}
              <div
                className={`relative h-80 chess-bg-sm border border-white/10 flex items-center justify-center ${
                  index % 2 !== 0 ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >
                <div className="absolute inset-0 bg-black/30" />
                <span className="relative z-10 text-8xl text-ivory/30">
                  {service.icon}
                </span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative py-24 chess-bg">
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <p className="label-caps text-gold">Ready to Move?</p>
          <h2 className="heading-section text-ivory max-w-2xl">
            Let's build your
            <span className="gold-text italic"> winning strategy.</span>
          </h2>
          <hr className="divider-gold w-24" />
          <p className="text-ivory-dim max-w-xl leading-relaxed">
            Every great outcome starts with a single conversation. Tell us
            where you want to go — we'll help you get there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/contact" className="btn-primary">
              Start the Conversation
            </Link>
            <Link href="/about" className="btn-outline">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
