"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  return (
    <main className="bg-[#F4F1ED] text-[#2D241E]">
      <Navbar />
      <section className="relative h-screen flex items-center justify-start px-10 lg:px-24">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
          alt="Restaurant"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#2D241E]/41  to-[#2D241E]/90" />

        <div className="relative z-10 max-w-2xl text-[#EAE3D5]">
          <p className="uppercase tracking-[0.4em] text-sm text-[#A68966] mb-6">
            Fine Dining
          </p>

          <h1 className="text-6xl lg:text-7xl font-serif italic leading-tight mb-6">
            Dining <span className="not-italic text-[#A68966]">Reimagined</span>
          </h1>
          <SignedIn>
            <p className="text-[#EAE3D5]/70 uppercase tracking-widest mb-4">
              Welcome back, {user?.firstName}
            </p>
          </SignedIn>
          <p className="text-lg text-[#EAE3D5]/70 mb-10">
            A curated sanctuary for the modern epicurean. Discover exclusive
            table arrangements and timeless service.
          </p>

          <div className="flex gap-6">
            <SignedOut>
              <button
                onClick={() => router.push("/auth/login")}
                className="bg-[#D6C7B1] text-[#2D241E] px-8 py-4 uppercase text-sm tracking-widest font-semibold hover:bg-white transition"
              >
                Get Started
              </button>
            </SignedOut>

            <button
              onClick={() => router.push("/dinebuddy/menu")}
              className="border border-[#EAE3D5]/40 px-8 py-4 uppercase text-sm tracking-widest hover:bg-[#EAE3D5]/10 transition"
            >
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      <ServicesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
function Navbar() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2D241E]/95 text-[#EAE3D5] border-b border-[#A68966]/20">
      <div className="flex justify-between items-center px-10 lg:px-24 h-20">
        <h1 className="text-2xl font-serif tracking-wide">
          DINEBUDDY<span className="text-[#A68966]">.</span>
        </h1>

        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>

        {/* ---------- AUTH AREA ---------- */}
        <div className="flex items-center gap-6">
          <SignedOut>
            <button
              onClick={() => router.push("/auth/login")}
              className="text-xs uppercase tracking-widest hover:text-[#A68966]"
            >
              Login
            </button>
          </SignedOut>

          <SignedIn>
            {isLoaded && (
              <p className="text-xs uppercase tracking-widest text-[#A68966]">
                Welcome, {user?.firstName || "Member"}
              </p>
            )}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Concierge Booking",
      desc: "Seamless reservations designed for the discerning diner.",
    },
    {
      title: "Seasonal Curation",
      desc: "Menus that tell a story through ingredients and craft.",
    },
    {
      title: "Patron Society",
      desc: "Invitation-only access to exclusive culinary experiences.",
    },
  ];

  return (
    <section id="features" className="py-28 px-10 lg:px-24">
      <h2 className="text-sm uppercase tracking-[0.4em] text-[#A68966] mb-6">
        Our Services
      </h2>

      <h3 className="text-4xl font-serif mb-16">
        Sophisticated technology meets soulful hospitality.
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="border p-10 hover:bg-[#EAE3D5] transition"
          >
            <h4 className="text-xl font-serif mb-4">{s.title}</h4>
            <p className="text-sm text-[#2D241E]/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 px-10 lg:px-24 bg-[#2D241E] text-[#EAE3D5]"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Image
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1974"
          alt="Dish"
          width={700}
          height={500}
          className="object-cover"
        />

        <div>
          <h2 className="uppercase tracking-[0.4em] text-sm text-[#A68966] mb-6">
            Heritage & Vision
          </h2>

          <h3 className="text-5xl font-serif mb-6">
            Refining the Art of Gathering.
          </h3>

          <p className="text-[#EAE3D5]/70">
            Dining is the ultimate ritual of connection. Our platform bridges
            digital convenience and the tactile beauty of a perfectly set table.
          </p>
        </div>
      </div>
    </section>
  );
}
function CTASection() {
  const router = useRouter();

  return (
    <section className="py-32 px-10 lg:px-24 bg-[#1A1410] text-[#EAE3D5]">
      <h2 className="text-5xl font-serif mb-6">
        Elevate your <span className="italic text-[#A68966]">palate</span>.
      </h2>

      <p className="mb-10 text-[#EAE3D5]/60">
        Join an exclusive community where gastronomy meets intelligence.
      </p>

      <button
        onClick={() => router.push("/auth/sign-up")}
        className="bg-[#A68966] px-10 py-5 uppercase text-sm tracking-widest text-[#1A1410]"
      >
        Become a Member
      </button>
    </section>
  );
}
function Footer() {
  return (
    <footer className="bg-[#1A1410] text-[#EAE3D5]/50 py-16 text-center text-xs tracking-widest">
      © 2026 DINEBUDDY COLLECTIVE
    </footer>
  );
}
