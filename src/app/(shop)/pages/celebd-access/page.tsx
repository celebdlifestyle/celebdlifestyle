import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CELEBDAccessPage() {
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

          <h1 className="text-4xl font-bold text-white">CELEBD Access</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <p className="mb-8 text-base leading-relaxed text-gray-300">
          <span className="font-semibold text-white">CELEBD Access</span> is
          your gateway to an elevated shopping experience—crafted for those who
          live and shop in style. Designed for our inner circle, CELEBD Access
          unlocks exclusive privileges across the CelebdLifestyle ecosystem.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Member Privileges
        </h2>

        <ul className="mb-8 ml-4 space-y-2 text-gray-300 list-disc list-inside">
          <li>Early access to new drops and collections</li>
          <li>Exclusive member-only offers and rewards</li>
          <li>Priority order processing and support</li>
          <li>
            Special invitations to{" "}
            <span className="font-semibold text-white">Celebd</span> launches
            and experiences
          </li>
        </ul>

        <h2 className="mb-4 text-xl font-semibold text-white">
          How to Get Access
        </h2>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          CELEBD Access is available to registered CelebdLifestyle members.
          Simply log in or create an account to unlock your benefits.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white">
          Why CELEBD Access
        </h2>

        <p className="mb-6 text-base leading-relaxed text-gray-300">
          Because true style deserves recognition—and luxury should feel
          personal.
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-300">
          For questions related to CELEBD Access or membership benefits, reach
          out to us anytime.
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
          <span className="font-semibold text-white">CELEBD Access</span> — not
          everyone gets in. Only the celebrated do.
        </p>
      </div>
    </div>
  );
}
