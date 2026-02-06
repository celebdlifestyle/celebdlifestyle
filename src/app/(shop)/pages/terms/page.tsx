import { Mail, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
            <FileText className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-white">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-sm text-gray-400">Last updated: February 2026</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 mx-auto space-y-8">
        {/* Introduction */}
        <section>
          <p className="text-base leading-relaxed text-gray-300">
            Welcome to{" "}
            <span className="font-semibold text-white">Celebd Lifestyle</span>.
            By accessing or using our website and services, you agree to be
            bound by these Terms & Conditions. Please read them carefully before
            making any purchase or creating an account.
          </p>
        </section>

        {/* Acceptance */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Acceptance of Terms
          </h2>
          <p className="text-gray-300">
            By using Celebd Lifestyle, you confirm that you are at least 13
            years old and agree to comply with these terms. If you do not agree,
            please do not use our services.
          </p>
        </section>

        {/* Account Responsibility */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Account Responsibility
          </h2>
          <p className="mb-3 text-gray-300">
            When you create an account with us:
          </p>
          <ul className="ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials
            </li>
            <li>You agree to provide accurate and complete information</li>
            <li>
              You are responsible for all activities that occur under your
              account
            </li>
            <li>You must notify us immediately of any unauthorized use</li>
          </ul>
        </section>

        {/* Acceptable Use */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Acceptable Use
          </h2>
          <p className="mb-3 text-gray-300">You agree not to:</p>
          <ul className="ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>Use our services for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt our services</li>
            <li>Upload harmful code, viruses, or malicious software</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Impersonate others or misrepresent your affiliation</li>
            <li>Scrape, copy, or replicate our content without permission</li>
          </ul>
        </section>

        {/* Orders & Shopping */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Orders & Shopping
          </h2>
          <div className="space-y-3 text-gray-300">
            <p>
              <span className="font-medium text-white">Placing Orders:</span>{" "}
              All orders are subject to acceptance and availability. We reserve
              the right to refuse or cancel any order for any reason.
            </p>
            <p>
              <span className="font-medium text-white">Pricing:</span> Prices
              are displayed in the applicable currency and may change without
              notice. We strive for accuracy but are not responsible for pricing
              errors.
            </p>
            <p>
              <span className="font-medium text-white">Payment:</span> Payment
              processing will be handled through Razorpay once integrated. You
              agree to provide valid payment information and authorize charges
              for your purchases.
            </p>
            <p>
              <span className="font-medium text-white">Shipping:</span> Delivery
              times and shipping costs vary. We plan to offer worldwide
              shipping, though some restrictions may apply.
            </p>
          </div>
        </section>

        {/* Account Suspension */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Right to Suspend or Terminate
          </h2>
          <p className="text-gray-300">
            We reserve the right to suspend or terminate your account and access
            to our services at any time, without notice, for conduct that we
            believe violates these Terms, is harmful to other users, or is
            otherwise inappropriate. You may also request account deletion by
            contacting us.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Intellectual Property
          </h2>
          <p className="mb-3 text-gray-300">
            All content on Celebd Lifestyle, including but not limited to:
          </p>
          <ul className="mb-3 ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>Text, graphics, logos, images, and product descriptions</li>
            <li>Software, code, and functionality</li>
            <li>Design, layout, and overall appearance</li>
          </ul>
          <p className="text-gray-300">
            ...is owned by or licensed to Celebd Lifestyle and protected by
            copyright, trademark, and other intellectual property laws. You may
            not copy, reproduce, distribute, or create derivative works without
            our express written permission.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Limitation of Liability
          </h2>
          <p className="mb-3 text-gray-300">
            To the fullest extent permitted by law, Celebd Lifestyle and its
            affiliates shall not be liable for:
          </p>
          <ul className="ml-4 space-y-2 text-gray-400 list-disc list-inside">
            <li>Any indirect, incidental, special, or consequential damages</li>
            <li>Loss of profits, data, or business opportunities</li>
            <li>
              Damages arising from your use or inability to use our services
            </li>
            <li>Any unauthorized access to or alteration of your data</li>
          </ul>
          <p className="mt-4 text-gray-300">
            Our services are provided "as is" without warranties of any kind,
            either express or implied.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Governing Law & Jurisdiction
          </h2>
          <p className="text-gray-300">
            These Terms are governed by the laws of India. Any disputes arising
            from these Terms or your use of our services shall be subject to the
            exclusive jurisdiction of the courts in India.
          </p>
        </section>

        {/* Age Restriction */}
        <section className="bg-[#13131a] border border-white/5 p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Age Requirement
          </h2>
          <p className="text-gray-300">
            You must be at least 13 years old to use Celebd Lifestyle. By using
            our services, you represent that you meet this age requirement.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Changes to These Terms
          </h2>
          <p className="text-gray-300">
            We may update these Terms from time to time. Changes will be posted
            on this page with a revised "Last updated" date. Your continued use
            of our services after changes are posted constitutes acceptance of
            the updated Terms.
          </p>
        </section>

        {/* Contact */}
        <section className="p-6 border border-orange-500/20 bg-orange-500/5 rounded-lg">
          <h2 className="mb-4 text-2xl font-semibold text-white">Questions?</h2>
          <p className="mb-3 text-gray-300">
            If you have any questions about these Terms & Conditions, please
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
