import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'InvestmentFabrics - Investment Research',
  description: 'AI agents for deal sourcing, due diligence automation, market intelligence, and portfolio monitoring. Reduce research time by 70%.',
};

export default function InvestmentFabricsPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
            InvestmentFabrics
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Investment research at machine speed
          </h1>
          <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
            Your analysts spend 60% of their time on research that could be automated. Our clients redirect that time to high-value judgment calls.
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
            The research bottleneck
          </h2>
          <div className="space-y-4 text-foreground-muted leading-relaxed">
            <p>
              Every deal requires the same research: market sizing, competitive landscape, management backgrounds, customer references. It&apos;s repetitive, time-consuming, and often inconsistent across deals.
            </p>
            <p>
              Your best analysts should be synthesizing insights and making recommendations—not copying data between spreadsheets.
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
              <h3 className="text-foreground font-medium mb-2">Deal Sourcing Agents</h3>
              <p className="text-foreground-muted">
                Automated market mapping, company identification, and initial screening against your investment criteria
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Due Diligence Automation</h3>
              <p className="text-foreground-muted">
                Standardized research packages: financials, competitors, customers, management, market trends
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Market Intelligence</h3>
              <p className="text-foreground-muted">
                Continuous monitoring of sectors, competitors, and market signals relevant to your portfolio
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Portfolio Monitoring</h3>
              <p className="text-foreground-muted">
                Automated tracking of KPIs, news, and competitive moves across your portfolio companies
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
              <div className="text-4xl font-semibold text-foreground">70%</div>
              <div className="mt-2 text-foreground-subtle text-sm">Reduction in research time</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">3x</div>
              <div className="mt-2 text-foreground-subtle text-sm">More deals evaluated</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">24 hrs</div>
              <div className="mt-2 text-foreground-subtle text-sm">Initial research package delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            See InvestmentFabrics in action
          </h2>
          <p className="mt-4 text-foreground-muted">
            We&apos;ll show you exactly how it works with your deal flow.
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
