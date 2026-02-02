import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ShippingPage() {
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

          <h1 className="text-4xl font-bold text-white">Shipping</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          At <span className="font-semibold text-white">CelebdLifestyle</span>,
          we ensure your order is delivered with care, speed, and
          reliability—because luxury deserves thoughtful handling.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Shipping Coverage
        </h2>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          We currently ship across{" "}
          <span className="font-semibold text-white">India</span>. Delivery
          timelines may vary based on your location and product availability.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Processing Time
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Orders are processed within{" "}
            <span className="font-semibold text-white">1–3 business days</span>{" "}
            after confirmation.
          </li>
          <li>You will receive an email or SMS once your order is shipped.</li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Delivery Timeline
        </h2>

        <ul className="mb-6 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            <span className="font-semibold text-white">Metro Cities:</span> 3–5
            business days
          </li>
          <li>
            <span className="font-semibold text-white">
              Non-Metro & Remote Areas:
            </span>{" "}
            5–7 business days
          </li>
        </ul>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Delivery times are estimated and may vary due to external factors such
          as weather, courier delays, or regional restrictions.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Shipping Charges
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Shipping charges, if applicable, will be clearly displayed at
            checkout before payment.
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Order Tracking
        </h2>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Once shipped, you can track your order using the{" "}
          <Link
            href="/pages/track-my-order"
            className="font-semibold text-orange-500 underline transition-colors hover:text-orange-400"
          >
            Track My Order
          </Link>{" "}
          section with your Order ID and registered contact details.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          For any shipping-related assistance, feel free to reach out to us.
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
          delivering style, carefully and confidently.
        </p>
      </div>
    </div>
  );
}
