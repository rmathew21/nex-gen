import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">My App</Link>
            <div className="flex gap-6">
                <Link href='/about'>About</Link>
                <Link href='/about'>Services</Link>
                <Link href='/about'>Contact</Link>
            </div>
        </nav>
    )
}