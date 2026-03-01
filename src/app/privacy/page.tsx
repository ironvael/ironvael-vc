import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Privacy Policy | Ironvael",
  description: "Privacy policy for Ironvael venture studio and capital partner.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-8"
          >
            ← Back
          </Link>

          <h1 className="text-4xl font-bold font-display">
            Privacy Policy
          </h1>
          <p className="mt-2 text-[var(--muted)]">
            Last updated: {new Date().toLocaleDateString("en-US")}
          </p>

          <div className="mt-12 space-y-10 prose prose-slate max-w-none">
            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Ironvael (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy describes how we collect, use, and protect personal information when you use our website at ironvael.com and related services (the &quot;Services&quot;).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--muted)]">
                <li>Contact information (name, email address) that you provide when using our contact form</li>
                <li>Information about your venture, stage, and message that you voluntarily submit</li>
                <li>Usage data, including IP address, browser type, and pages visited, collected automatically</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                We use the information we collect to: respond to your inquiries; evaluate opportunities and partnerships; improve our website and services; communicate with you about Ironvael; and comply with applicable legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                4. Sharing of Information
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                We do not sell your personal information. We may share information with service providers who assist us in operating our website, subject to confidentiality obligations. We may also disclose information when required by law or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                5. Data Retention
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes described in this policy, or as required by law. You may contact us to request deletion of your information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                6. Security
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                7. Your Rights
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information, or to object to certain processing. Contact us at{" "}
                <a href="mailto:hello@ironvael.com" className="text-[var(--accent)] hover:underline">
                  hello@ironvael.com
                </a>{" "}
                to exercise these rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the &quot;Last updated&quot; date. Continued use of our Services after changes constitutes acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                9. Contact Us
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:hello@ironvael.com" className="text-[var(--accent)] hover:underline">
                  hello@ironvael.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
