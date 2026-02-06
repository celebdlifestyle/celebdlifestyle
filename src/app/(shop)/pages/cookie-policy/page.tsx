import { Mail, ArrowLeft, Cookie } from "lucide-react";
import Link from "next/link";

export default function CookiePolicyPage() {
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
            <Cookie className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-white">Cookie Policy</h1>
          </div>
          <p className="text-sm text-gray-400">Last updated: February 2026</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto space-y-8">
        {/* Introduction */}
        <section>
          <p className="text-base leading-relaxed text-gray-300">
            This Cookie Policy explains how{" "}
            <span className="font-semibold text-white">Celebd Lifestyle</span>{" "}
            uses cookies and similar technologies on our website. We believe in
            transparency and want you to understand what cookies we use and why.
          </p>
        </section>

        {/* What Are Cookies */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            What Are Cookies?
          </h2>
          <p className="text-gray-300">
            Cookies are small text files stored on your device when you visit a
            website. They help websites remember your preferences, keep you
            logged in, and provide a better user experience. Cookies can be
            "session cookies" (deleted when you close your browser) or
            "persistent cookies" (remain until deleted or expired).
          </p>
        </section>

        {/* Cookies We Use */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Cookies We Use
          </h2>
          <p className="mb-4 text-gray-300">
            At Celebd Lifestyle, we keep cookie usage minimal. We only use{" "}
            <span className="font-medium text-white">essential cookies</span>{" "}
            that are necessary for our website to function properly.
          </p>

          <div className="space-y-4">
            <div className="bg-[#13131a] border border-white/5 p-5 rounded-lg">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Essential Cookies
              </h3>
              <p className="mb-3 text-sm text-gray-300">
                These cookies are strictly necessary for the operation of our
                website. They enable core functionality such as:
              </p>
              <ul className="ml-4 space-y-1.5 text-sm text-gray-400 list-disc list-inside">
                <li>User authentication and login</li>
                <li>Session management</li>
                <li>Security and fraud prevention</li>
                <li>Remembering items in your cart</li>
              </ul>
              <p className="mt-3 text-sm text-gray-400">
                <span className="font-medium text-gray-300">Providers:</span>{" "}
                Clerk (authentication), Vercel (hosting)
              </p>
            </div>
          </div>
        </section>

        {/* What We Don't Use */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            What We Don't Use
          </h2>
          <p className="mb-3 text-gray-300">
            We respect your privacy and do not use:
          </p>
          <ul className="ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>
              <span className="font-medium text-gray-300">
                Analytics Cookies:
              </span>{" "}
              We don't track your browsing behavior or collect usage statistics
            </li>
            <li>
              <span className="font-medium text-gray-300">
                Advertising Cookies:
              </span>{" "}
              We don't serve targeted ads or share data with advertising
              networks
            </li>
            <li>
              <span className="font-medium text-gray-300">
                Marketing Cookies:
              </span>{" "}
              We don't use cookies for marketing campaigns or retargeting
            </li>
            <li>
              <span className="font-medium text-gray-300">
                Social Media Cookies:
              </span>{" "}
              We don't integrate social media tracking pixels
            </li>
          </ul>
        </section>

        {/* Third-Party Cookies */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Third-Party Cookies
          </h2>
          <p className="mb-4 text-gray-300">
            The essential cookies on our site are provided by our trusted
            service partners:
          </p>
          <div className="space-y-3">
            <div className="p-4 border border-white/5 rounded-lg">
              <h3 className="mb-1 font-semibold text-white">Clerk</h3>
              <p className="text-sm text-gray-400">
                Manages authentication cookies to keep you securely logged in
                and maintain your session.
              </p>
            </div>
            <div className="p-4 border border-white/5 rounded-lg">
              <h3 className="mb-1 font-semibold text-white">Vercel</h3>
              <p className="text-sm text-gray-400">
                May use cookies for hosting infrastructure, load balancing, and
                performance optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Managing Your Cookie Preferences
          </h2>
          <p className="mb-3 text-gray-300">
            Since we only use essential cookies, you cannot opt out of them
            without affecting your ability to use our website. However, you can
            manage cookies through your browser settings:
          </p>
          <ul className="ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>
              Block all cookies (note: this will prevent you from logging in)
            </li>
            <li>Delete cookies after each browsing session</li>
            <li>Set your browser to notify you when cookies are set</li>
          </ul>
          <p className="mt-4 text-sm text-gray-400">
            Keep in mind that blocking essential cookies will prevent core
            features like login and checkout from working properly.
          </p>
          <p className="mt-3 text-gray-300">
            For more information, visit our{" "}
            <Link
              href="/cookie-preferences"
              className="text-orange-500 underline hover:text-orange-400"
            >
              Cookie Preferences
            </Link>{" "}
            page.
          </p>
        </section>

        {/* Updates */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Updates to This Policy
          </h2>
          <p className="text-gray-300">
            We may update this Cookie Policy from time to time to reflect
            changes in our practices or for legal reasons. Any updates will be
            posted on this page with a revised "Last updated" date.
          </p>
        </section>

        {/* Contact */}
        <section className="p-6 border border-orange-500/20 bg-orange-500/5 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Questions About Cookies?
          </h2>
          <p className="mb-3 text-gray-300">
            If you have questions about how we use cookies, feel free to reach
            out:
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
