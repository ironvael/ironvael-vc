import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Terms of Service | Ironvael",
  description: "Terms of service for Ironvael venture studio and capital partner.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-[var(--muted)]">
            Last updated: {new Date().toLocaleDateString("en-US")}
          </p>

          <div className="mt-12 space-y-10 prose prose-slate max-w-none">
            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                By accessing or using the website at ironvael.com (the &quot;Site&quot;) and related services operated by Ironvael (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                2. Use of the Site
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                You may use the Site for lawful purposes only. You agree not to: (a) use the Site in any way that violates applicable laws; (b) transmit malicious code, spam, or unauthorized content; (c) attempt to gain unauthorized access to our systems or those of our users; or (d) use the Site to harass, defame, or harm others.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                3. No Investment Advice
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                The content on the Site is for informational purposes only. Nothing on the Site constitutes investment, legal, tax, or financial advice. Any discussions regarding potential investments or partnerships are preliminary and do not create binding obligations unless formal documentation is executed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                4. Submissions and Confidentiality
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Information you submit through our contact form or other channels is not considered confidential unless we expressly agree in writing. We are under no obligation to review, respond to, or maintain the confidentiality of unsolicited submissions. Do not submit proprietary or confidential information without first entering into a formal confidentiality agreement with us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                The Site and its content, including text, graphics, logos, and design, are owned by Ironvael or its licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                6. Disclaimers
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                THE SITE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IRONVAEL AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                8. Indemnification
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                You agree to indemnify and hold harmless Ironvael and its affiliates from any claims, damages, or expenses arising from your use of the Site or violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                9. Governing Law
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                These Terms are governed by the laws of the State of Montana, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Flathead County, Montana.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                10. Changes
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                We may modify these Terms at any time. We will post updated Terms on this page and update the &quot;Last updated&quot; date. Continued use of the Site after changes constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold font-display mt-8 mb-4">
                11. Contact
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                For questions about these Terms, contact us at{" "}
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
