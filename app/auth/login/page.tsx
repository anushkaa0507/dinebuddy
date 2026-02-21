"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-[#F2E8DF]">
      {/* LEFT IMAGE PANEL */}
      <div className="hidden lg:flex w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/auth-image.jpg')", // put image in /public/images
          }}
        />

        {/* Matte Overlay */}
        <div className="absolute inset-0 bg-[#2C241E]/70 backdrop-blur-[2px]" />

        <div className="relative z-10 text-white p-16 flex flex-col justify-between">
          <h2 className="text-xl tracking-[0.3em] uppercase">
            DINEBUDDY
          </h2>

          <div>
            <h1 className="text-5xl font-light leading-tight mb-6">
              The art of <span className="font-semibold">refined</span> dining.
            </h1>

            <p className="text-white/70 max-w-md">
              Access curated culinary experiences and manage your private
              reservations seamlessly.
            </p>
          </div>

          <p className="text-xs tracking-widest text-white/50">
            Preferred by modern connoisseurs
          </p>
        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-[#4A3728] mb-2">
            Welcome Back
          </h2>

          <p className="text-[#8C6A50] mb-10">
            Please sign in to continue.
          </p>

          {/* Clerk Component (Logic stays intact) */}
          <SignIn
            routing="path"
            path="/auth/login"
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-[#4A3728] hover:bg-black text-white uppercase tracking-widest",
                card: "shadow-none border border-[#D9C5B2]",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}