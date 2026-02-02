import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ShippingBillingPage() {
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

          <h1 className="text-4xl font-bold text-white">Shipping & Billing</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          At <span className="font-semibold text-white">CelebdLifestyle</span>,
          we make checkout simple, secure, and transparent—so your focus stays
          on style.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Shipping Details
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Orders are delivered across{" "}
            <span className="font-semibold text-white">India</span>
          </li>
          <li>
            Shipping timelines vary based on location and product availability
          </li>
          <li>Accurate delivery estimates are shown at checkout</li>
          <li>
            Order updates and tracking details are shared via{" "}
            <span className="font-semibold text-white">SMS and email</span>
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Billing Information
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Ensure your billing details match your payment method for a smooth
            transaction
          </li>
          <li>
            Invoices are generated automatically and available in your{" "}
            <span className="font-semibold text-white">Order History</span>
          </li>
          <li>
            All prices are inclusive of applicable taxes unless stated otherwise
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Secure Payments
        </h2>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          We use trusted and encrypted payment gateways to protect your personal
          and financial information at every step.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">Need Help?</h2>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          If you need assistance updating your shipping or billing details, our
          support team is happy to help.
        </p>

        {/* Contact Information */}
        <div className="bg-[#13131a] border border-white/5 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-white">Email: </span>
              <Link
                href="mailto:billing@celebdlifestyle.com"
                className="text-orange-500 underline transition-colors hover:text-orange-400"
              >
                billing@celebdlifestyle.com
              </Link>
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed text-center text-gray-300">
          <span className="font-semibold text-white">CelebdLifestyle</span> —
          seamless shipping, secure billing, elevated shopping.
        </p>
      </div>
    </div>
  );
}
