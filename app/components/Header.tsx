"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between">
        <h1 className="text-xl font-bold uppercase">DineBuddy</h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/" className="hover:text-primary">
            Our Story
          </Link>

          <Link
            href="/menu"
            className="text-primary font-bold border-b-2 border-primary pb-1"
          >
            Menu
          </Link>

          <Link href="/location" className="hover:text-primary">
            Location
          </Link>

          <Link href="/gallery" className="hover:text-primary">
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}