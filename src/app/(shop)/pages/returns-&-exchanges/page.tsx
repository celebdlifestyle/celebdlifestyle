import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ReturnsExchangesPage() {
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

          <h1 className="text-4xl font-bold text-white">Returns & Exchanges</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          At <span className="font-semibold text-white">CelebdLifestyle</span>,
          we strive to deliver excellence with every order. If something
          isn&apos;t right, we&apos;re here to help—within fair and transparent
          guidelines.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Eligibility for Returns & Exchanges
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Requests must be raised within{" "}
            <span className="font-semibold text-white">7 days of delivery</span>
          </li>
          <li>
            Products must be{" "}
            <span className="font-semibold text-white">
              unused, unwashed, and in original condition
            </span>
            , with all tags, packaging, and invoices intact.
          </li>
          <li>
            Items purchased during{" "}
            <span className="font-semibold text-white">
              sales, promotions, or clearance
            </span>{" "}
            may not be eligible unless stated otherwise.
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Non-Returnable Items
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>Innerwear, accessories, beauty, or personal-use items</li>
          <li>Customized or made-to-order products</li>
          <li>
            Items marked as{" "}
            <span className="font-semibold text-white">Final Sale</span>
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Exchange Policy
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Exchanges are subject to{" "}
            <span className="font-semibold text-white">stock availability</span>
            .
          </li>
          <li>
            If the requested replacement is unavailable, a{" "}
            <span className="font-semibold text-white">
              store credit or refund
            </span>{" "}
            will be issued as per policy.
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Damaged or Incorrect Products
        </h2>

        <p className="mb-4 text-base leading-relaxed text-gray-300">
          If you receive a damaged, defective, or incorrect item:
        </p>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Contact us within{" "}
            <span className="font-semibold text-white">
              48 hours of delivery
            </span>
          </li>
          <li>Share clear images or an unboxing video for verification</li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">Refunds</h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Approved refunds will be processed to the{" "}
            <span className="font-semibold text-white">
              original payment method
            </span>{" "}
            within{" "}
            <span className="font-semibold text-white">7–10 business days</span>{" "}
            after quality checks.
          </li>
          <li>
            Shipping charges, if any, are{" "}
            <span className="font-semibold text-white">non-refundable</span>{" "}
            unless the return is due to our error.
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          How to Request a Return or Exchange
        </h2>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Email us with your{" "}
          <span className="font-semibold text-white">Order ID</span> and reason
          for return/exchange.
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
          <span className="font-semibold text-white">CelebdLifestyle</span>{" "}
          reserves the right to approve or decline requests based on quality
          checks.
        </p>
      </div>
    </div>
  );
}
