import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WeAreCELEBDPage() {
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

          <h1 className="text-4xl font-bold text-white">We Are CELEBD</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-6 text-base leading-relaxed text-gray-300">
          <span className="font-semibold text-white">CELEBD</span> is more than
          a brand—it&apos;s a statement, a class, and a culture. Born from the
          belief that individuality deserves a global stage, CELEBD represents
          confidence, creativity, and elevated living.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          At <span className="font-semibold text-white">CelebdLifestyle</span>,
          we curate fashion and lifestyle essentials that blend modern luxury
          with powerful storytelling. Every piece reflects ambition,
          authenticity, and the courage to stand apart.
        </p>

        <p className="mb-4 text-base leading-relaxed text-gray-300">
          We celebrate:
        </p>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>Individuality over imitation</li>
          <li>Style with substance</li>
          <li>Luxury that speaks, not shouts</li>
          <li>A community that values class, not labels</li>
        </ul>

        <p className="mb-6 text-base leading-relaxed text-gray-300">
          CELEBD is for those who don&apos;t follow trends—they define them.
        </p>

        <p className="mb-4 text-base leading-relaxed text-gray-300">
          This is not just what you wear.
          <br />
          This is who you are.
        </p>

        <p className="mb-8 text-base font-semibold leading-relaxed text-gray-300">
          We Are CELEBD.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          For collaborations, partnerships, or brand inquiries:
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
