import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GiftCardPage() {
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

          <h1 className="text-4xl font-bold text-white">Gift Card</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Give the gift of style, choice, and timeless elegance with a{" "}
          <span className="font-semibold text-white">
            CelebdLifestyle Gift Card
          </span>
          . Perfect for every occasion, our gift cards let your loved ones shop
          their favorites—effortlessly and luxuriously.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">How It Works</h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Choose your preferred{" "}
            <span className="font-semibold text-white">gift card value</span>
          </li>
          <li>
            Gift cards are delivered digitally via{" "}
            <span className="font-semibold text-white">email</span>
          </li>
          <li>
            Each card comes with a{" "}
            <span className="font-semibold text-white">unique code</span>{" "}
            redeemable at checkout
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">Redemption</h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Gift cards can be redeemed exclusively on{" "}
            <span className="font-semibold text-white">
              celebdlifestyle.com
            </span>
          </li>
          <li>Enter the gift card code at checkout to apply the balance</li>
          <li>
            If the order value exceeds the gift card amount, the remaining
            balance can be paid using other payment methods
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">Validity</h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Gift cards are valid for{" "}
            <span className="font-semibold text-white">12 months</span> from the
            date of issue
          </li>
          <li>Unused balances after expiry cannot be refunded or extended</li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Important Notes
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Gift cards are{" "}
            <span className="font-semibold text-white">non-refundable</span> and
            cannot be exchanged for cash
          </li>
          <li>Lost or stolen gift cards will not be replaced</li>
          <li>Gift cards cannot be used to purchase other gift cards</li>
        </ul>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          For any assistance related to gift cards, feel free to contact us.
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
          <span className="font-semibold text-white">CelebdLifestyle</span> Gift
          Cards — because the perfect gift is always in style.
        </p>
      </div>
    </div>
  );
}
