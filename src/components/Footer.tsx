import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Nex Gen Professional Solutions. All rights reserved.
        </footer>
    )
}