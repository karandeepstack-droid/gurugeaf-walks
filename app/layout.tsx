import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gurugeaf Walks | Varanasi",
  description: "Walking tours in Banaras with Pappu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="w-full bg-[#cc785c] py-4 px-8 text-white flex justify-end shadow-md z-10 sticky top-0">
          <nav className="flex gap-6 font-bold text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-[#f2c57c] transition-colors">Home -</Link>
            <Link href="/about" className="hover:text-[#f2c57c] transition-colors">About -</Link>
            <Link href="/walks" className="hover:text-[#f2c57c] transition-colors">Walks -</Link>
            <Link href="/bookings" className="hover:text-[#f2c57c] transition-colors">Bookings</Link>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="w-full bg-[#d59a37] text-[#1b1b1b] py-12 px-8 mt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-2">Gurugeaf Walks</h3>
              <p>Assi Ghat, Varanasi</p>
              <p>+91-9800011000</p>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/walks" className="hover:font-bold">Evergreen Walks</Link>
              <Link href="/walks" className="hover:font-bold">Insiders</Link>
              <Link href="/walks" className="hover:font-bold">Festivals</Link>
              <div className="border-b border-black/20 my-2"></div>
              <Link href="/bookings" className="hover:font-bold">Contact and bookings</Link>
              <Link href="/info" className="hover:font-bold">Practical information</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg mb-2">Our Team</h4>
              <p className="hover:font-bold cursor-pointer">Dialogic Travel</p>
              <p className="hover:font-bold cursor-pointer">Hidden Wisdom</p>
              <p className="hover:font-bold cursor-pointer">Playground</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
