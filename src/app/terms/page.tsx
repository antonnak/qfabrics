import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'QuantumFabrics terms of service - terms governing your use of our website and services.',
};

export default function TermsPage() {
  return (
    <main id="main-content" className="pt-24">
      <article className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Terms of Service</h1>
          <p className="text-foreground-subtle mb-12">Effective Date: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-foreground-muted leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the QuantumFabrics website (quantumfabrics.ai) and services provided by Talk2Insights AI LLC d/b/a QuantumFabrics (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
            <p className="text-foreground-muted leading-relaxed">
              By accessing our website or engaging our services, you agree to these Terms.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Services</h2>
              <p className="text-foreground-muted">
                QuantumFabrics provides AI agent development and consulting services for enterprises. Specific deliverables, timelines, and fees are defined in separate statements of work or service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Website</h2>
              <p className="text-foreground-muted mb-2">You agree to use our website only for lawful purposes. You may not:</p>
              <ul className="list-disc list-inside text-foreground-muted space-y-1">
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to scrape or extract content</li>
                <li>Interfere with the website&apos;s operation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-foreground-muted mb-4">
                All content on this website—including text, graphics, logos, and design—is owned by QuantumFabrics and protected by intellectual property laws.
              </p>
              <p className="text-foreground-muted mb-4">
                You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
              <p className="text-foreground-muted">
                <strong className="text-foreground">Client work:</strong> Ownership of deliverables created during engagements is governed by the applicable service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Confidentiality</h2>
              <p className="text-foreground-muted">
                Any confidential information shared during consultations or engagements will be treated as confidential unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-foreground-muted mb-2">To the fullest extent permitted by law:</p>
              <ul className="list-disc list-inside text-foreground-muted space-y-1">
                <li>Our website and content are provided &quot;as is&quot; without warranties of any kind</li>
                <li>We are not liable for any indirect, incidental, or consequential damages arising from your use of our website or services</li>
                <li>Our total liability for any claim shall not exceed the fees paid for the specific services giving rise to the claim</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Indemnification</h2>
              <p className="text-foreground-muted">
                You agree to indemnify and hold harmless QuantumFabrics and its officers, employees, and agents from any claims, damages, or expenses arising from your violation of these Terms or misuse of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
              <p className="text-foreground-muted">
                We reserve the right to terminate or suspend access to our website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-foreground-muted">
                These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Los Angeles County, California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to These Terms</h2>
              <p className="text-foreground-muted">
                We may update these Terms from time to time. Continued use of our website after changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-foreground-muted mb-2">Questions about these Terms?</p>
              <p className="text-foreground-muted">
                Email:{' '}
                <a href="mailto:anton@quantumfabrics.ai" className="text-foreground hover:underline">
                  anton@quantumfabrics.ai
                </a>
              </p>
              <p className="text-foreground-muted">Location: Santa Monica, California</p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
