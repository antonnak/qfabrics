import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'SalesFabrics - GTM & Revenue',
  description: 'AI agents for lead enrichment, outreach automation, pipeline intelligence, and customer success. 3x pipeline coverage.',
};

export default function SalesFabricsPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
            SalesFabrics
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Revenue operations on autopilot
          </h1>
          <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
            Your sales team spends 65% of their time on activities that don&apos;t directly generate revenue. Our clients redirect that time to closing deals.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            The GTM efficiency gap
          </h2>
          <div className="space-y-4 text-foreground-muted leading-relaxed">
            <p>
              Your reps research prospects manually. Your SDRs send generic outreach. Your customer success team is reactive instead of proactive.
            </p>
            <p>
              Every hour spent on administrative work is an hour not spent with customers. You need to automate the routine so your team can focus on relationships.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            What we build
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-foreground font-medium mb-2">Lead Enrichment</h3>
              <p className="text-foreground-muted">
                Automated research on every prospect: company details, tech stack, recent news, buying signals
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Outreach Automation</h3>
              <p className="text-foreground-muted">
                Personalized messaging at scale with context from enrichment and past interactions
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Pipeline Intelligence</h3>
              <p className="text-foreground-muted">
                Deal scoring, next-best-action recommendations, and risk alerts on your pipeline
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Customer Success Automation</h3>
              <p className="text-foreground-muted">
                Proactive monitoring of customer health, expansion opportunities, and churn risk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-12 text-center">
            Results
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-semibold text-foreground">3x</div>
              <div className="mt-2 text-foreground-subtle text-sm">Pipeline coverage</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">40%</div>
              <div className="mt-2 text-foreground-subtle text-sm">Higher response rates</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">25%</div>
              <div className="mt-2 text-foreground-subtle text-sm">Reduction in churn</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            See SalesFabrics in action
          </h2>
          <p className="mt-4 text-foreground-muted">
            We&apos;ll show you exactly how it works with your sales process.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
