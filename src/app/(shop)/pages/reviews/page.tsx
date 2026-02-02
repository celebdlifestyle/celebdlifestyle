import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ReviewsPage() {
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

          <h1 className="text-4xl font-bold text-white">Reviews</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          At <span className="font-semibold text-white">CelebdLifestyle</span>,
          every review tells a story. Hear directly from our community and
          discover how our designs, quality, and service come to life through
          real experiences.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Why Reviews Matter
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>Honest feedback from verified customers</li>
          <li>Insights on fit, fabric, comfort, and styling</li>
          <li>Real opinions to help you shop with confidence</li>
        </ul>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          We encourage customers to share their experiences—your voice helps us
          grow, improve, and continue delivering excellence.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Review Guidelines
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>Reviews must be based on genuine purchases</li>
          <li>Content should be respectful, relevant, and authentic</li>
          <li>
            CelebdLifestyle reserves the right to moderate or remove
            inappropriate or misleading reviews
          </li>
        </ul>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Have feedback or need help with a review-related concern? We&apos;d
          love to hear from you.
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
          Reviews — real voices, real style, real trust.
        </p>
      </div>
    </div>
  );
}
