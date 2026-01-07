import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'QuantumFabrics privacy policy - how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="pt-24">
      <article className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-semibold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-foreground-subtle mb-12">Effective Date: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-foreground-muted leading-relaxed">
              QuantumFabrics (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is operated by Talk2Insights AI LLC. This Privacy Policy explains how we collect, use, and protect your information when you visit quantumfabrics.ai or engage with our services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>

              <h3 className="text-lg font-medium text-foreground mb-2">Information you provide:</h3>
              <ul className="list-disc list-inside text-foreground-muted space-y-1 mb-4">
                <li>Name, email, and company name when you contact us or book a call</li>
                <li>Any information shared during consultations or engagements</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mb-2">Information collected automatically:</h3>
              <ul className="list-disc list-inside text-foreground-muted space-y-1 mb-4">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referral source</li>
              </ul>

              <p className="text-foreground-muted">
                We use cookies and similar technologies to understand how visitors use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-foreground-muted mb-2">We use your information to:</p>
              <ul className="list-disc list-inside text-foreground-muted space-y-1">
                <li>Respond to inquiries and schedule calls</li>
                <li>Deliver our services</li>
                <li>Improve our website and user experience</li>
                <li>Send relevant communications (you can opt out anytime)</li>
              </ul>
              <p className="text-foreground-muted mt-4 font-medium">
                We do not sell your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing</h2>
              <p className="text-foreground-muted mb-2">We may share information with:</p>
              <ul className="list-disc list-inside text-foreground-muted space-y-1">
                <li>Service providers who help us operate (e.g., hosting, analytics, scheduling tools)</li>
                <li>Professional advisors (legal, accounting) as needed</li>
                <li>Authorities if required by law</li>
              </ul>
              <p className="text-foreground-muted mt-4">
                All service providers are contractually obligated to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-foreground-muted">
                We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p className="text-foreground-muted">
                We retain your information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="text-foreground-muted mb-2">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside text-foreground-muted space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-foreground-muted mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:anton@quantumfabrics.ai" className="text-foreground hover:underline">
                  anton@quantumfabrics.ai
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">California Residents</h2>
              <p className="text-foreground-muted">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and request its deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-foreground-muted">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-foreground-muted mb-2">Questions about this Privacy Policy?</p>
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
