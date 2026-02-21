"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex bg-[#F2E8DF]">
      {/* LEFT IMAGE PANEL */}
      <div className="hidden lg:flex w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/auth-image.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#2C241E]/70 backdrop-blur-[2px]" />

        <div className="relative z-10 text-white p-16 flex flex-col justify-between">
          <h2 className="text-xl tracking-[0.3em] uppercase">
            DINEBUDDY
          </h2>

          <div>
            <h1 className="text-5xl font-light leading-tight mb-6">
              Join a world of <span className="font-semibold">taste.</span>
            </h1>

            <p className="text-white/70 max-w-md">
              Become a member and unlock seamless reservations and exclusive
              dining access.
            </p>
          </div>

          <p className="text-xs tracking-widest text-white/50">
            Private. Curated. Effortless.
          </p>
        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-[#4A3728] mb-2">
            Create Account
          </h2>

          <p className="text-[#8C6A50] mb-10">
            Request your membership access.
          </p>

          <SignUp
            routing="path"
            path="/auth/sign-up"
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