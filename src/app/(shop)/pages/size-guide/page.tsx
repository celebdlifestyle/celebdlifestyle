import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SizeGuidePage() {
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

          <h1 className="text-4xl font-bold text-white">Size Guide</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Finding the perfect fit is part of the Celebd experience. Use our{" "}
          <span className="font-semibold text-white">Size Guide</span> to choose
          the size that suits you best and shop with confidence.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          How to Measure
        </h2>

        <p className="mb-4 text-base leading-relaxed text-gray-300">
          For accurate sizing, use a measuring tape and measure:
        </p>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            <span className="font-semibold text-white">Bust/Chest:</span> Around
            the fullest part
          </li>
          <li>
            <span className="font-semibold text-white">Waist:</span> Around the
            narrowest part
          </li>
          <li>
            <span className="font-semibold text-white">Hips:</span> Around the
            fullest part
          </li>
          <li>
            <span className="font-semibold text-white">Shoulder:</span> From
            shoulder edge to shoulder edge
          </li>
          <li>
            <span className="font-semibold text-white">Length:</span> From
            shoulder to desired hemline
          </li>
        </ul>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Compare your measurements with the size chart available on each
          product page.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Fit & Styling Notes
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>
            Sizes may vary slightly depending on the fabric, cut, and design
          </li>
          <li>
            Model size and fit details are mentioned on the product page for
            reference
          </li>
          <li>
            If you&apos;re between sizes, we recommend choosing the{" "}
            <span className="font-semibold text-white">larger size</span> for
            comfort
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Need Help Choosing a Size?
        </h2>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Our team is happy to assist you with fit guidance before you place
          your order.
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
          tailored to fit your style, flawlessly.
        </p>
      </div>
    </div>
  );
}
