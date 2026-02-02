import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GiftCardBalancePage() {
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

          <h1 className="text-4xl font-bold text-white">Gift Card Balance</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Check your{" "}
          <span className="font-semibold text-white">CelebdLifestyle</span> Gift
          Card balance quickly and easily before you shop.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          How to Check Your Balance
        </h2>

        <ol className="mb-8 ml-4 space-y-2 text-gray-300 list-decimal list-inside">
          <li>
            Enter your{" "}
            <span className="font-semibold text-white">Gift Card Code</span>
          </li>
          <li>
            Click{" "}
            <span className="font-semibold text-white">Check Balance</span> to
            view the available amount and validity
          </li>
        </ol>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          The available balance can be redeemed during checkout on{" "}
          <span className="font-semibold text-white">celebdlifestyle.com</span>.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Important Information
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Gift card balances can be used across multiple orders until fully
            utilized or expired
          </li>
          <li>
            Gift cards are valid for{" "}
            <span className="font-semibold text-white">12 months</span> from the
            date of issue
          </li>
          <li>Expired or unused balances cannot be refunded or reinstated</li>
          <li>
            Gift cards are{" "}
            <span className="font-semibold text-white">non-transferable</span>{" "}
            and cannot be exchanged for cash
          </li>
        </ul>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          If you experience any issues while checking your balance or redeeming
          your gift card, our support team is happy to assist.
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
          effortless gifting, seamless shopping.
        </p>
      </div>
    </div>
  );
}
