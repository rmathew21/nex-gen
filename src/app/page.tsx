import Image from "next/image";
import Link from "next/link";

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
                  NexGen Professional Solutions help forward-thinking businesses strategize, execute, and win - with precision at every step.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href='/services' className="btn-primary">
                    Explore Services
                  </Link>
                  <Link href='/contact' className="btn-outline">
                    Get In Touch
                  </Link>
                </div>

              </div>

              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />

      </section>
    </main>
  );
}
