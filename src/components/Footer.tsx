import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black-mid border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-display text-2xl font-light tracking-widest text-ivory">
              NexGen
            </p>
            <p className="label-caps text-gold-dim text-[0.6rem] tracking-widest2 mt-1">
              Professional Solutions
            </p>
          </div>
          <hr className="divider-gold w-12" />
          <p className="text-ivory-dim text-sm leading-relaxed">
            Strategic solutions for forward-thinking businesses. Every move
            calculated. Every outcome intentional.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="label-caps text-gold">Navigation</p>
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ivory-dim text-sm hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <p className="label-caps text-gold">Contact</p>
          <div className="flex flex-col gap-3 text-ivory-dim text-sm">
            <a
              href="mailto:info@nexgenprosolutions.com"
              className="hover:text-gold transition-colors duration-300"
            >
              info@nexgenprosolutions.com
            </a>
            {/* <a
              href="tel:+17135550000"
              className="hover:text-gold transition-colors duration-300"
            >
              (713) 555-0000
            </a> */}
            <p>Austin, TX</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-ivory-dim text-xs tracking-wide">
            © {new Date().getFullYear()} NexGen Professional Solutions. All
            rights reserved.
          </p>
          <p className="label-caps text-gold-dim text-[0.6rem]">
            <a href="https://robowebsolutions.com" target="_blank">
              Powered by Robo Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
