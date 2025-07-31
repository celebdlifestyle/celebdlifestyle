"use client";

import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-500 text-white px-6 md:px-16 py-10 text-sm">
      {/* Grid layout: 1 col on small, 2 on medium, 4 on large */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
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
          title="My Account"
          links={[
            "Login or Register",
            "Order History",
            "Shipping & Billing",
            "Refer a Friend",
          ]}
        />

        <FooterSection
          title="Information"
          links={[
            "CELEBD Access",
            "We Are CELEBD",
            "Blog",
            "Yoga Studios",
            "Stores",
            "Events",
            "Pro Program",
            "Careers",
            "CELEBD Moves",
            "CELEBD Gives",
          ]}
        />

        <div>
          <h3 className="font-semibold mb-3 text-white text-base">
            Sign up for our newsletter
          </h3>
          <div className="flex flex-col sm:flex-row mb-4 gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border-white border text-white flex-1"
            />
            <button className="bg-white text-black px-4 py-2">→</button>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            By entering your email address, you agree to our{" "}
            <a href="#" className="text-white hover:text-blue-400 underline">
              Privacy Policy
            </a>{" "}
            and will receive CELEBD Yoga offers and other commercial messages.
            You may unsubscribe at any time.
          </p>
          <div className="flex gap-4 items-center text-white">
            <Instagram className="w-5 h-5 hover:text-blue-400 transition-colors duration-200" />
            <Facebook className="w-5 h-5 hover:text-blue-400 transition-colors duration-200" />
            <Twitter className="w-5 h-5 hover:text-blue-400 transition-colors duration-200" />
            <Youtube className="w-5 h-5 hover:text-blue-400 transition-colors duration-200" />
          </div>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-xs text-gray-400 space-y-3">
        <p>
          For applicable countries, duties & taxes will be automatically
          calculated and displayed during checkout. Depending on the country,
          you will have the option to choose DDP (Delivery Duty Paid) or DDU
          (Delivery Duty Unpaid).
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p>© 2025 CELEBD, LLC. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="hover:underline hover:text-blue-400 transition"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:underline hover:text-blue-400 transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:underline hover:text-blue-400 transition"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="hover:underline hover:text-blue-400 transition"
            >
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-semibold mb-3 text-white text-base">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        {links.map((link) => (
          <li
            key={link}
            className=" hover:underline pb-1 transition-all duration-200 cursor-pointer hover:text-white"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
