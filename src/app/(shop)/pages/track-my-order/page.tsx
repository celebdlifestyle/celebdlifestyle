import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TrackMyOrderPage() {
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

          <h1 className="text-4xl font-bold text-white">Track My Order</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-6 text-base leading-relaxed text-gray-300">
          Stay updated on your{" "}
          <span className="font-semibold text-white">CelebdLifestyle</span>{" "}
          purchase with ease. Once your order is confirmed, you can track its
          status at every stage—from processing to dispatch and final delivery.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          How to Track Your Order
        </h2>

        <ol className="mb-6 ml-4 space-y-2 text-gray-300 list-decimal list-inside">
          <li>
            Enter your{" "}
            <span className="font-semibold text-white">Order ID</span>
          </li>
          <li>
            Provide your{" "}
            <span className="font-semibold text-white">
              registered email address or mobile number
            </span>
          </li>
          <li>
            Click <span className="font-semibold text-white">Track Order</span>{" "}
            to view real-time updates
          </li>
        </ol>

        <p className="mb-6 text-base leading-relaxed text-gray-300">
          You&apos;ll also receive tracking details via{" "}
          <span className="font-semibold text-white">SMS and email</span> once
          your order is shipped.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          If you face any issues or need further assistance, our support team is
          here to help.
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
          Shop with confidence at{" "}
          <span className="font-semibold text-white">CelebdLifestyle</span> —
          where premium service meets effortless style.
        </p>
      </div>
    </div>
  );
}
