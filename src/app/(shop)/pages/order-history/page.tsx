import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function OrderHistoryPage() {
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

          <h1 className="text-4xl font-bold text-white">Order History</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Keep track of all your purchases in one place with{" "}
          <span className="font-semibold text-white">
            CelebdLifestyle Order History
          </span>
          . View your past and current orders anytime, with complete
          transparency and ease.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          What You Can Access
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>Order numbers and dates</li>
          <li>Product details and quantities</li>
          <li>Payment status and invoices</li>
          <li>Shipping and delivery updates</li>
          <li>Return or exchange status</li>
        </ul>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Simply log in to your CelebdLifestyle account to view your complete
          order history.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Need Help with an Order?
        </h2>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          If you have questions about any past or current order, our support
          team is always ready to assist.
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
          your style journey, beautifully archived.
        </p>
      </div>
    </div>
  );
}
