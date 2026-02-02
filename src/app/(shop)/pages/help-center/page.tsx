import { Mail, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HelpCenterPage() {
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

          <h1 className="text-4xl font-bold text-white">Help Center</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        {/* Introduction */}
        <p className="mb-6 text-base leading-relaxed text-gray-300">
          Welcome to the{" "}
          <span className="font-semibold text-white">
            CelebdLifestyle Help Center
          </span>
          , your one-stop destination for support related to shopping with
          Celebd. Our goal is to deliver a smooth, secure, and premium
          experience at every step of your journey.
        </p>

        {/* Assistance List */}
        <p className="mb-4 text-base font-medium text-gray-300">
          We&apos;re happy to assist you with:
        </p>

        <ul className="mb-8 ml-4 space-y-2 text-gray-400 list-disc list-inside">
          <li>Orders & tracking</li>
          <li>Payments, refunds & cancellations</li>
          <li>Shipping & delivery</li>
          <li>Returns & exchanges</li>
          <li>Product information</li>
          <li>Account & technical support</li>
        </ul>

        {/* Brand Statement */}
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          At <span className="font-semibold text-white">CelebdLifestyle</span>,
          luxury goes beyond products—it reflects in our service, reliability,
          and attention to detail.
        </p>

        {/* Contact Information */}
        <div className="space-y-4 mb-8 bg-[#13131a] border border-white/5 p-6 rounded-lg">
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

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-white">
                Support Availability:{" "}
              </span>
              <span className="text-gray-400">Business hours</span>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <p className="mb-8 text-base leading-relaxed text-center text-gray-300">
          Thank you for choosing{" "}
          <span className="font-semibold text-white">CelebdLifestyle</span> —
          where fashion, lifestyle, and class come together.
        </p>
      </div>
    </div>
  );
}
