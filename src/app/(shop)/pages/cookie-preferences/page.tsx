import { Mail, ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";

export default function CookiePreferencesPage() {
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

          <div className="flex items-center gap-3 mb-3">
            <Settings className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-white">
              Cookie Preferences
            </h1>
          </div>
          <p className="text-sm text-gray-400">Manage your cookie settings</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto space-y-8">
        {/* Introduction */}
        <section>
          <p className="text-base leading-relaxed text-gray-300">
            At{" "}
            <span className="font-semibold text-white">Celebd Lifestyle</span>,
            we keep cookie usage simple and transparent. This page explains your
            cookie choices and how we handle them.
          </p>
        </section>

        {/* Current Cookie Usage */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Our Current Cookie Usage
          </h2>
          <p className="mb-4 text-gray-300">
            We currently use only{" "}
            <span className="font-medium text-white">essential cookies</span>{" "}
            that are required for our website to function. These cannot be
            disabled without breaking core features like login, account access,
            and shopping.
          </p>
          <p className="text-sm text-gray-400">
            We do not use any optional cookies for analytics, advertising, or
            marketing at this time.
          </p>
        </section>

        {/* Essential Cookies - Always On */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Essential Cookies
          </h2>

          <div className="bg-[#13131a] border border-white/5 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-white">
                  Strictly Necessary Cookies
                </h3>
                <p className="text-sm text-gray-400">
                  Required for the website to function
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-green-400">
                  Always On
                </span>
                <div className="w-10 h-5 bg-green-500 rounded-full flex items-center justify-end px-0.5">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="mb-3 text-sm text-gray-300">
                These cookies are essential for you to browse our website and
                use its features, such as:
              </p>
              <ul className="ml-4 space-y-1.5 text-sm text-gray-400 list-disc list-inside">
                <li>Logging in and staying logged in</li>
                <li>Maintaining your session</li>
                <li>Keeping items in your shopping cart</li>
                <li>Security and fraud prevention</li>
              </ul>
              <p className="mt-3 text-sm text-gray-400">
                <span className="font-medium text-gray-300">Used by:</span>{" "}
                Clerk (authentication), Vercel (hosting)
              </p>
            </div>
          </div>
        </section>

        {/* No Optional Cookies */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Optional Cookies
          </h2>
          <p className="mb-4 text-gray-300">
            We currently do not use any optional cookies. This means we don't
            track, analyze, or use your data for:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">✕</span>
              <div>
                <p className="font-medium text-gray-300">Analytics Cookies</p>
                <p className="text-sm text-gray-400">
                  Understanding how visitors use our site
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">✕</span>
              <div>
                <p className="font-medium text-gray-300">Marketing Cookies</p>
                <p className="text-sm text-gray-400">
                  Delivering targeted advertisements or tracking campaigns
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">✕</span>
              <div>
                <p className="font-medium text-gray-300">
                  Social Media Cookies
                </p>
                <p className="text-sm text-gray-400">
                  Sharing content or tracking via social platforms
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            If we introduce optional cookies in the future, we'll update this
            page and provide you with clear choices.
          </p>
        </section>

        {/* How to Manage */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Managing Cookies in Your Browser
          </h2>
          <p className="mb-4 text-gray-300">
            While you cannot disable essential cookies without affecting your
            ability to use our site, you can manage cookies through your browser
            settings:
          </p>
          <div className="space-y-3">
            <div className="p-4 border border-white/5 rounded-lg">
              <h3 className="mb-2 font-semibold text-white">
                Block All Cookies
              </h3>
              <p className="text-sm text-gray-400">
                You can configure your browser to block all cookies. However,
                this will prevent you from logging in and using key features of
                our website.
              </p>
            </div>
            <div className="p-4 border border-white/5 rounded-lg">
              <h3 className="mb-2 font-semibold text-white">Delete Cookies</h3>
              <p className="text-sm text-gray-400">
                You can delete cookies that have already been set. This will log
                you out and remove your saved preferences.
              </p>
            </div>
            <div className="p-4 border border-white/5 rounded-lg">
              <h3 className="mb-2 font-semibold text-white">
                Browser Settings
              </h3>
              <p className="text-sm text-gray-400">
                Most browsers allow you to control cookies through their
                settings. Check your browser's help section for instructions.
              </p>
            </div>
          </div>
        </section>

        {/* Future Changes */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Future Updates
          </h2>
          <p className="text-gray-300">
            If we introduce optional cookies in the future (such as analytics or
            marketing cookies), we will:
          </p>
          <ul className="mt-3 ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>Update this Cookie Preferences page</li>
            <li>Provide you with clear opt-in/opt-out controls</li>
            <li>Notify you before any new tracking begins</li>
            <li>Give you the ability to change your preferences at any time</li>
          </ul>
        </section>

        {/* More Information */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            More Information
          </h2>
          <p className="mb-3 text-gray-300">
            For detailed information about the cookies we use and why, please
            see our{" "}
            <Link
              href="/pages/cookie-policy"
              className="text-orange-500 underline hover:text-orange-400"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <p className="text-gray-300">
            For information about how we handle your personal data, visit our{" "}
            <Link
              href="/pages/privacy-policy"
              className="text-orange-500 underline hover:text-orange-400"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* Contact */}
        <section className="p-6 border border-orange-500/20 bg-orange-500/5 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Questions or Concerns?
          </h2>
          <p className="mb-3 text-gray-300">
            If you have questions about cookies or your preferences, please
            contact us:
          </p>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-orange-500" />
            <Link
              href="mailto:help@celebdlifestyle.com"
              className="text-orange-500 underline transition-colors hover:text-orange-400"
            >
              help@celebdlifestyle.com
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
