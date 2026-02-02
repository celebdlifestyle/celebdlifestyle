"use client";

import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignUpButton, SignedIn, useUser } from "@clerk/nextjs";

export default function LoginOrRegisterPage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-[#0f0f14]">
      {/* Hero / Header */}
      <div className="relative w-full bg-[#13131a] border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#13131a]/40 via-[#13131a]/80 to-[#13131a]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4 py-10 mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-400 transition-colors mb-6"
          >
            <ArrowLeft size={15} />
            Home
          </Link>

          <h1 className="text-4xl font-bold text-white">Login or Register</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Welcome to{" "}
          <span className="font-semibold text-white">CelebdLifestyle</span> —
          where your shopping experience begins.
        </p>

        <SignedIn>
          <button
            disabled
            className="px-6 py-3 mb-2 font-semibold text-white bg-orange-500 rounded opacity-50 cursor-not-allowed"
          >
            Login
          </button>
          <p className="mb-8 text-sm text-gray-400">
            Hey {user?.firstName}, you are already signed in.{" "}
            <Link
              href="/"
              className="text-orange-500 underline hover:text-orange-400"
            >
              Shop here
            </Link>
          </p>
        </SignedIn>

        <SignedIn>{null}</SignedIn>

        {!user && (
          <SignInButton mode="modal">
            <button className="px-6 py-3 mb-4 font-semibold text-white transition-all duration-300 bg-orange-500 rounded cursor-pointer hover:bg-orange-600 hover:scale-105 hover:shadow-lg">
              Login
            </button>
          </SignInButton>
        )}

        <p className="mb-4 text-base leading-relaxed text-gray-300">
          Already part of the Celebd community?
          <br />
          Log in using your registered{" "}
          <span className="font-semibold text-white">
            email or mobile number
          </span>{" "}
          to:
        </p>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>Track your orders</li>
          <li>Manage your account details</li>
          <li>Save addresses for faster checkout</li>
          <li>View your order history</li>
        </ul>

        <SignedIn>
          <button
            disabled
            className="px-6 py-3 mb-2 font-semibold text-white bg-orange-500 rounded opacity-50 cursor-not-allowed"
          >
            Register
          </button>
          <p className="mb-8 text-sm text-gray-400">
            Hey {user?.firstName}, you are already signed in.{" "}
            <Link
              href="/"
              className="text-orange-500 underline hover:text-orange-400"
            >
              Shop here
            </Link>
          </p>
        </SignedIn>

        {!user && (
          <SignUpButton mode="modal">
            <button className="px-6 py-3 mb-4 font-semibold text-white transition-all duration-300 bg-orange-500 rounded cursor-pointer hover:bg-orange-600 hover:scale-105 hover:shadow-lg">
              Register
            </button>
          </SignUpButton>
        )}

        <p className="mb-4 text-base leading-relaxed text-gray-300">
          New to{" "}
          <span className="font-semibold text-white">CelebdLifestyle</span>?
          Create an account in just a few steps to:
        </p>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>Enjoy a faster checkout experience</li>
          <li>Receive exclusive updates and offers</li>
          <li>Access your orders anytime, anywhere</li>
        </ul>

        <p className="mb-6 text-base leading-relaxed text-gray-300">
          Your information is secure with us. We use advanced security measures
          to ensure a safe and seamless login experience.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Need help accessing your account?
        </p>

        {/* Contact Information */}
        <div className="bg-[#13131a] border border-white/5 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-white">Email: </span>
              <Link
                href="mailto:help@celebdlifestyle.com"
                className="text-orange-500 underline transition-colors hover:text-orange-400"
              >
                help@celebdlifestyle.com
              </Link>
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed text-center text-gray-300">
          <span className="font-semibold text-white">CelebdLifestyle</span> —
          log in to style, register for distinction.
        </p>
      </div>
    </div>
  );
}
