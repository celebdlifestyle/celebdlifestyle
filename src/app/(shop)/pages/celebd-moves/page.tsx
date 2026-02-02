import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CELEBDMovesPage() {
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

          <h1 className="text-4xl font-bold text-white">CELEBD Moves</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          At <span className="font-semibold text-white">CELEBD</span>,
          we&apos;re always in motion—pushing boundaries, setting trends, and
          creating moments that define culture.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          <span className="font-semibold text-white">CELEBD Moves</span> is
          where style meets momentum. From exclusive launches to collaborations,
          from events to innovations, this is the space where we share our
          latest strides and boldest moves.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Stay connected to witness how CELEBD shapes the future of fashion and
          lifestyle—one move at a time.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          For partnership or event inquiries:
        </p>

        {/* Contact Information */}
        <div className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
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
      </div>
    </div>
  );
}
