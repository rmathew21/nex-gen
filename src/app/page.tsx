import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "♟",
    title: "Business Strategy",
    description:
      "Precision planning and competitive analysis to position your business for long-term sucess.",
  },
  {
    icon: "♜",
    title: "Operations",
    description:
      "Streamline workflows, elimate inefficienes, and build systems that scale with your growth.",
  },
  {
    icon: "♝",
    title: "Consulting",
    description:
      "Expert guidance tailored to your industry, helping you navigate complexity with confidence.",
  },
  {
    icon: "♛",
    title: "Executive Coaching",
    description:
      "Develop the leadership clarity and strategic mindset needed to move your organization forward.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Clients Served" },
  { value: "98%", label: "Client Retention" },
  { value: "50+", label: "Industries Reached" },
];

const pillars = [
  {
    icon: "♟",
    title: "Strategic Thinking",
    headline: "We think three moves ahead.",
    body: "Every recommendation we make is grounded in long-term positioning, not short-term fixes. We analyze the full board before we move.",
  },
  {
    icon: "♜",
    title: "Proven Execution",
    headline: "Strategy means nothing without action.",
    body: "We don't just advise — we roll up our sleeves and work alongside your team to implement solutions that actually stick.",
  },
  {
    icon: "♛",
    title: "Client Obsession",
    headline: "Your win is our win.",
    body: "We measure our success by yours. Every engagement is built around your specific goals, challenges, and vision for the future.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center chess-bg">
        <div className="aboslute inset-0 bg-black/80" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <p className="label-caps text-gold mb-6 tracking-widest2">
            ♟ Strategic Business Solutions
          </p>
          <h1 className="heading-display text-5xl md:text-7xl text-ivory mb-6 max-w-4xl">
            Every Move
            <br />
            <span className="gold-text italic">Calculated</span>
            <br />
            Every Outcome
            <br />
            <span className="gold-text italic">Intentional</span>
          </h1>

          <p className="text-ivory-dim text-lg md:text-xl leading-relaxed max-w-xl mb-12">
            NexGen Professional Solutions help forward-thinking businesses
            strategize, execute, and win - with precision at every step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="btn-primary w-fit">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-outline w-fit">
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
      </section>

      {/* Services Preview */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="label-caps text-gold mb-4">What We Do</p>
            <h2 className="heading-section text-ivory">
              Solutions Built for
              <span className="gold-text italic"> Strategic Growth</span>
            </h2>
            <hr className="divider-gold w-24 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-black-card border border-white10 p-8 flex flex-col gap-4 hover:border-gold40 transition-all duration-500"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="font-display text-xl font-light text-ivory tracking-wide">
                  {service.title}
                </h3>
                <p className="text-ivory-dim text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="label-caps text-gold-dim hover:text-gold transition-colors duration-300 mt-2"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why NexGen */}
      <section className="relative py-32 chess-bg">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="label-caps text-gold mb-4">Why NexGen</p>
            <h2 className="heading-section text-ivory">
              The Competitive
              <span className="gold-text italic"> Advantage</span>
            </h2>
            <hr className="divider-gold w-24 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center flex flex-col gap-2">
                <p className="font-display text-5xl md:text-6xl font-light gold-text">
                  {stat.value}
                </p>
                <p className="label-caps text-ivory-dim">{stat.label}</p>
              </div>
            ))}
          </div>

          <hr className="divider-gold mb-20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-4">
                <p className="label-caps text-gold">{pillar.icon} {pillar.title}</p>
                <h3 className="font-display text-2xl font-light text-ivory">
                  {pillar.headline}
                </h3>
                <p className="text-ivory-dim text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
