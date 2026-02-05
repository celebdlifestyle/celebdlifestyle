"use client";

import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { dedot_title } from "@/app/fonts/font";

export default function Footer() {
  return (
    <footer className="px-5 py-12 text-sm text-white bg-black border-t border-gray-800  w-full">
      <div className="grid grid-cols-1 gap-8 md:mx-16 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
        {/* Brand Logo, Motto, Newsletter & Social Media */}
        <div className="col-span-2 md:mr-12">
          <Link
            className={`${dedot_title.className} font-bold text-[34px] md:text-5xl hover:text-gray-300 transition-colors duration-300 inline-block`}
            href="/"
          >
            CELEBD LIFESTYLE
          </Link>

          <p className="mt-6 text-sm leading-relaxed text-gray-400 md:text-base">
            Celebd is the world's new class designed exclusively for the
            achievers, the dreamers, and the relentlessly ambitious. It is a
            "new identity" where status isn't inherited—it is built through
            personal branding, high-level impact, and Social influence.
          </p>

          {/* Newsletter Section */}
          <div className="mt-8">
            <h3 className="mb-3 text-base font-semibold text-white">
              Sign up for our newsletter
            </h3>
            <div className="flex flex-col gap-2 mb-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 text-sm text-white transition-colors bg-transparent border border-gray-700 focus:outline-none focus:border-white placeholder:text-gray-500"
              />
              <button className="px-6 py-2 font-semibold text-black transition-colors duration-300 bg-white hover:bg-gray-200">
                →
              </button>
            </div>
            <p className="mb-6 text-xs text-gray-500">
              By entering your email address, you agree to our{" "}
              <Link
                href="/pages/privacy-policy"
                className="text-white underline transition-colors hover:text-gray-300"
              >
                Privacy Policy
              </Link>
              . You may unsubscribe at any time.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <FooterSection
          title="Customer Service"
          links={[
            "Help Center",
            "Track My Order",
            "Shipping",
            "Returns & Exchanges",
            "Gift Card",
            "Gift Card Balance",
            "Size Guide",
            "Reviews",
          ]}
        />

        <FooterSection
          title="Information"
          links={[
            "CELEBD Access",
            "We Are CELEBD",
            "Blog",
            "Pro Program",
            "Careers",
            "CELEBD Moves",
            "CELEBD Gives",
          ]}
        />

        <FooterSection
          title="My Account"
          links={["Login or Register", "Order History", "Shipping & Billing"]}
        />
      </div>

      {/* Bottom legal bar */}
      <div className="mt-12 pt-6 border-t text-center border-gray-800">
        {/* Shipping Info */}
        <p className="mb-2 text-xs text-gray-500 leading-relaxed">
          For applicable countries, duties & taxes will be automatically
          calculated and displayed during checkout. Depending on the country,
          you will have the option to choose DDP (Delivery Duty Paid) or DDU
          (Delivery Duty Unpaid).
        </p>

        {/* Copyright and Links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © 2025 CELEBD, LLC. All Rights Reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-1">
            <Link
              href="/pages/terms"
              className="px-3 py-1 text-xs text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/pages/privacy"
              className="px-3 py-1 text-xs text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/pages/cookie-policy"
              className="px-3 py-1 text-xs text-gray-400 hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link
              href="/pages/cookie-preferences"
              className="px-3 py-1 text-xs text-gray-400 hover:text-white transition-colors duration-200"
            >
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-5 text-base font-semibold tracking-wide text-white">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-gray-400">
        {links.map((link) => {
          // Convert link text to URL slug
          const linkSlug = link.toLowerCase().replace(/\s+/g, "-");
          const href = `/pages/${linkSlug}`;

          return (
            <li key={link}>
              <Link
                href={href}
                className="inline-block transition-all duration-200 hover:text-white hover:translate-x-1"
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
