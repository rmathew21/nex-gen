"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useState, useEffect } from "react";

const links = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                ? 'bg-black/95 backdrop-blur-sm border-b border-white/10'
                : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">

                {/* Logo */}
                <Link href='/' className="flex flex-col leading-none group">
                    <span className="font-display text-2xl font-semibold tracking-widest text-ivory group-hover:text-gold transition-colors duration-300">
                        NexGen
                    </span>
                    <span className="label-caps text-gold-dim tracking-widest2 text-[0.6rem]">
                        Professional Solutions
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`label-caps transition-colors duration-300 hover:text-gold pb-0.5 border-b ${
                                pathname === link.href
                                ? 'text-gold border-gold'
                                : 'text-ivory-dim border-transparent hover:border-gold/50'
                            }`}
                            >
                                {link.label}
                        </Link>
                    ))}
                    <Link href='/contact' className="btn-primary ml-4">
                        Get Started
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 group"
                aria-label="Toggle menu"
                >
                    <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-px w-6 bg-ivory transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div 
            className={`md:hidden transition-all duration-500 overflow-hidden ${
                menuOpen ? 'max-h-96 border-b border-white/10' : 'max-h-0'
            }`}
            >
                <nav className="bg-black/95 backdrop-blur-sm px-6 py-8 flex flex-col gap-6">
                    {links.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`label-caps transition-colors duration-300 hover:text-gold ${
                                pathname === link.href ? 'text-gold' : 'text-ivory-dim'
                            }`}
                            >
                                {link.label}
                        </Link>
                    ))}
                    <Link href='/contact' className="btn-primary w-fit mt-2">
                        Get Started
                    </Link>
                </nav>
            </div>
        </header>
    );
}