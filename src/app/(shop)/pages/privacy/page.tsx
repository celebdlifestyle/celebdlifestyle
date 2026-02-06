import { Mail, ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            <Shield className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-sm text-gray-400">Last updated: February 2026</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto space-y-8">
        {/* Introduction */}
        <section>
          <p className="text-base leading-relaxed text-gray-300">
            At{" "}
            <span className="font-semibold text-white">Celebd Lifestyle</span>,
            we respect your privacy and are committed to protecting your
            personal information. This Privacy Policy explains what data we
            collect, how we use it, and your rights regarding your information.
          </p>
        </section>

        {/* What We Collect */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            What Information We Collect
          </h2>
          <p className="mb-3 text-gray-300">
            We collect minimal personal information to provide you with our
            services:
          </p>
          <ul className="ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>
              <span className="font-medium text-gray-300">Name:</span> To
              personalize your account and orders
            </li>
            <li>
              <span className="font-medium text-gray-300">Email address:</span>{" "}
              For account access, order confirmations, and customer support
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-400">
            We do not collect phone numbers, profile pictures, or any other
            personal data beyond what's listed above.
          </p>
        </section>

        {/* Why We Collect */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Why We Collect Your Information
          </h2>
          <p className="mb-3 text-gray-300">
            We use your information for the following purposes:
          </p>
          <ul className="ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>To create and manage your account</li>
            <li>To process and fulfill your orders</li>
            <li>To communicate with you about your purchases</li>
            <li>To provide customer support</li>
            <li>To maintain security and prevent fraud</li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Third-Party Services
          </h2>
          <p className="mb-3 text-gray-300">
            We work with trusted service providers to deliver our services:
          </p>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-white">Clerk</p>
              <p className="text-sm text-gray-400">
                Handles authentication, login, and signup processes
              </p>
            </div>
            <div>
              <p className="font-medium text-white">Vercel</p>
              <p className="text-sm text-gray-400">
                Hosts our website infrastructure
              </p>
            </div>
            <div>
              <p className="font-medium text-white">Razorpay (Planned)</p>
              <p className="text-sm text-gray-400">
                Will process payments when payment functionality is integrated
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            These providers may have access to your information only to perform
            specific tasks on our behalf and are obligated to protect your data.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Cookies & Tracking
          </h2>
          <p className="mb-3 text-gray-300">
            We use only essential cookies necessary for authentication and
            session management. We do not use:
          </p>
          <ul className="ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>Analytics cookies</li>
            <li>Advertising cookies</li>
            <li>Marketing tracking tools</li>
          </ul>
          <p className="mt-3 text-sm text-gray-400">
            For more details, please see our{" "}
            <Link
              href="/cookie-policy"
              className="text-orange-500 underline hover:text-orange-400"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        {/* Data Retention */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Data Retention
          </h2>
          <p className="text-gray-300">
            We retain your personal information for as long as your account is
            active or as needed to provide you services. If you request account
            deletion, we will remove your data from our systems, subject to any
            legal obligations to retain certain information.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Your Rights
          </h2>
          <p className="mb-3 text-gray-300">You have the right to:</p>
          <ul className="ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>Access your personal information</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your account and data</li>
            <li>Shop and place orders on our platform</li>
          </ul>
          <p className="mt-4 text-gray-300">
            To exercise any of these rights, please contact us at{" "}
            <Link
              href="mailto:help@celebdlifestyle.com"
              className="font-medium text-orange-500 underline hover:text-orange-400"
            >
              help@celebdlifestyle.com
            </Link>
          </p>
        </section>

        {/* International Users */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            International Users
          </h2>
          <p className="text-gray-300">
            Celebd Lifestyle is based in India and plans to serve customers
            worldwide. By using our services, you consent to the transfer of
            your information to India and other countries where our service
            providers operate. We take appropriate measures to ensure your data
            is protected regardless of where it's processed.
          </p>
        </section>

        {/* Marketing */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Marketing Communications
          </h2>
          <p className="text-gray-300">
            We do not currently send marketing emails. If we introduce marketing
            communications in the future, you will have the option to opt in or
            out.
          </p>
        </section>

        {/* Changes */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Changes to This Policy
          </h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated "Last updated" date. We
            encourage you to review this policy periodically.
          </p>
        </section>

        {/* Contact */}
        <section className="p-6 border border-orange-500/20 bg-orange-500/5 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">Contact Us</h2>
          <p className="mb-3 text-gray-300">
            If you have any questions about this Privacy Policy or how we handle
            your data, please reach out:
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
