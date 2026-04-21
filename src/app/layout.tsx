import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: {
    default: "NexGen Professional Solutions",
    template: "%s | NexGen Professional Solutions",
  },
  description:
    "Strategic business consulting for forward-thinking organizations. Every move calculated. Every outcome intentional.",
  keywords: [
    "business strategy",
    "operations consulting",
    "executive coaching",
    "Austin TX consulting",
    "NexGen Professional Solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nex-gen-ashen.vercel.app/",
    siteName: "NexGen Professional Solutions",
    title: "NexGen Professional Solutions",
    description:
      "Strategic business consulting for forward-thinking organizations. Every move calculated. Every outcome intentional.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGen Professional Solutions",
    description:
      "Strategic business consulting for forward-thinking organizations.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}> 
      <body className="flex flex-col min-h-screen pt-20">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
