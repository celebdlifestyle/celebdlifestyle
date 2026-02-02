import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
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

          <h1 className="text-4xl font-bold text-white">Blog</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-6 text-base leading-relaxed text-gray-300">
          Something stylish is in the works.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          The{" "}
          <span className="font-semibold text-white">CelebdLifestyle Blog</span>{" "}
          is launching soon—bringing you stories on fashion, lifestyle, trends,
          exclusives, and the culture that defines CELEBD.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          Stay tuned for curated insights, elevated narratives, and everything
          that moves the world of style forward.
        </p>

        <p className="mb-8 text-base font-semibold leading-relaxed text-gray-300">
          Coming Soon. Stay CELEBD.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          For updates or inquiries:
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
