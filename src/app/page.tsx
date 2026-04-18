import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: '♟',
    title: 'Business Strategy',
    description:
      "Precision planning and competitive analysis to position your business for long-term sucess.",
  },
  {
    icon: '♜',
    title: 'Operations',
    description:
      "Streamline workflows, elimate inefficienes, and build systems that scale with your growth.",
  },
  {
    icon: '♝',
    title: 'Consulting',
    description:
      "Expert guidance tailored to your industry, helping you navigate complexity with confidence.",
  },
  {
    icon: '♛',
    title: 'Executive Coaching',
    description:
      "Develop the leadership clarity and strategic mindset needed to move your organization forward.",
  },
]
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
            <Link href="/services" className="btn-primary">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-outline">
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
              <span className="gold-text italic"> Stategic Growth</span>
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
                    href='/services'
                    className="label-caps text-gold-dim hover:text-gold transition-colors duration-300 mt-2"
                  >
                    Learn More →
                  </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link href='/services' className="btn-outline">
              View All Services
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
