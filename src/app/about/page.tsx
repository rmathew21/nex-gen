import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NexGen Professional Solutions — our story, values, and the team behind the strategy.",
};

const values = [
  {
    icon: "♟︎",
    title: "Strategic Precision",
    body: "We don't guess. Every recommendation is grounded in research, analysis, and a clear understanding of your goals.",
  },
  {
    icon: "♜︎",
    title: "Disciplined Execution",
    body: "Strategy without execution is just theory. We stay engaged through implementation to make sure plans actually become results.",
  },
  {
    icon: "♝︎",
    title: "Honest Partnership",
    body: "We tell you what you need to hear, not what you want to hear. Real progress requires honest conversations.",
  },
  {
    icon: "♛︎",
    title: "Client-First Thinking",
    body: "Your success is our scoreboard. Every decision we make is filtered through one question - does this move our client forward?",
  },
];

const teams = [
  {
    name: "Toby Abraham",
    role: "Managing Partner",
    bio: "15+ years leading strategic transformations across finance, healthcare, and technology sectors.",
  },
  {
    name: "James Ellickal",
    role: "Managing Partner",
    bio: "Former COO with a track record of building scalable systems for high-growth organizations.",
  },
];


export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 chess-bg">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="label-caps text-gold mb-4">Who We Are</p>
          <h1 className="heading-display text-5xl md:text-6xl text-ivory mb-6">
            About <span className="gold-text italic">NexGen</span>
          </h1>
          <hr className="divider-gold w-24 mx-auto mb-6" />
          <p className="text-ivory-dim text-lg max-w-2xl mx-auto leading-relaxed">
            We are a strategic advisory firm built on one belief - that every
            business, regardless of size, deserves the kind of precision
            thinking that separates good from great.
          </p>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 chess-bg-sm border border-white/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70" />
            <span className="relative z-10 text-9xl text-ivory/40">♚︎</span>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="label-caps text-gold mb-3">Our Story</p>
              <h2 className="heading-section text-ivory">
                Built for the
                <span className="gold-text italic"> long game.</span>
              </h2>
            </div>
            <hr className="divider-gold w-16" />
            <p className="text-ivory-dim leading-relaxed">
              NexGen Professional Solutions was founded with a simple
              observation - most businesses don't fail because of bad ideas.
              They fail because of poor strategy, misaligned execution, and a
              lack of the right guidance at the right time.
            </p>
            <Link href="/services" className="btn-primary w-fit">
              Explore Our Services
            </Link>
          </div>
          </div>
      </section>

          <section className="relative py-24 chess-bg-sm">
            <div className="absolute inset-0 bg-black/90" />
            <div className="relative z-10 max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <p className="label-caps text-gold mb-4">What We Stand For</p>
                <h2 className="heading-section text-ivory">
                  Our <span className="gold-text italic">Values</span>
                </h2>
                <hr className="divider-gold w-24 mx-auto mt-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="bg-black-card border border-white/10 p-8 flex flex-col gap-4 hover:border-gold/40 transition-all duration-500"
                  >
                    <span className="text-3xl text-ivory">{value.icon}</span>
                    <h3 className="font-display text-xl font-light text-ivory tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-ivory-dim text-sm leading-relaxed">
                      {value.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-black py-24">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <p className="label-caps text-gold mb-4">
                  The People Behind the Strategy
                </p>
                <h2 className="heading-section text-ivory">
                  Meet the <span className="gold-text italic">Team</span>
                </h2>
                <hr className="divider-gold w-24 mx-auto mt-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {teams.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col gap-4 border border-white/10 p-8 hover:border-gold/40 transition-all duration-500"
                  >
                    <div className="w-16 h-16 border border-gold/30 flex items-center justify-center">
                      <span className="text-2xl text-ivory/30">♟︎</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-light text-ivory">
                        {member.name}
                      </h3>
                      <p className="label-caps text-gold text-[0.6rem] mt-1">
                        {member.role}
                      </p>
                    </div>
                    <hr className="divider-gold w-8" />
                    <p className="text-ivory-dim text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative py-24 chess-bg">
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-6">
              <p className="label-caps text-gold">Ready to Work together?</p>
              <h2 className="heading-section text-ivory max-w-2xl">
                Let's make your next move
                <span className="gold-text italic"> your best one.</span>
              </h2>
              <hr className="divider-gold w-24" />
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/contact" className="btn-primary">
                  Get In Touch
                </Link>
                <Link href="/services" className="btn-outline">
                  View Services
                </Link>
              </div>
            </div>
          </section>
        
    </>
  );
}
