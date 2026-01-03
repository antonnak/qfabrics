import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a 30-minute discovery call with QuantumFabrics. No pitch deck—just a conversation about your challenges.',
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                Let&apos;s talk
              </h1>
              <p className="text-foreground-muted mb-8">
                30-minute discovery call. No pitch deck. We&apos;ll discuss your challenges and whether we can help.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-foreground-muted transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-foreground-muted transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-foreground-muted transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground focus:outline-none focus:border-foreground-muted transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="operating-partner">Operating Partner</option>
                    <option value="investment-team">Investment Team</option>
                    <option value="operations">Operations</option>
                    <option value="gtm-sales">GTM / Sales</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    What are you trying to solve?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-foreground-muted transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-3 px-6 rounded-lg font-medium hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all"
                >
                  Book Discovery Call
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="md:pt-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-foreground font-medium mb-4">What to expect</h3>
                  <ol className="space-y-3 text-foreground-muted">
                    <li>1. You&apos;ll hear back within 24 hours</li>
                    <li>2. We&apos;ll schedule a 30-minute call</li>
                    <li>3. We&apos;ll discuss your specific challenges</li>
                    <li>4. If there&apos;s a fit, we&apos;ll propose next steps</li>
                  </ol>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="text-foreground font-medium mb-2">Prefer email?</h3>
                  <a href="mailto:anton@quantumfabrics.ai" className="text-foreground-muted hover:text-foreground transition-colors">
                    anton@quantumfabrics.ai
                  </a>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="text-foreground font-medium mb-2">Location</h3>
                  <p className="text-foreground-muted">
                    Santa Monica, California<br />
                    <span className="text-foreground-subtle text-sm">(We work with clients globally)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
