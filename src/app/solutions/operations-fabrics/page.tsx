import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'OperationsFabrics - Portfolio Operations',
  description: 'AI agents for reporting automation, KPI tracking, value creation monitoring, and operational dashboards. Cut reporting time by 80%.',
};

export default function OperationsFabricsPage() {
  return (
    <main id="main-content" className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
            OperationsFabrics
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Portfolio visibility without the overhead
          </h1>
          <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
            Your operating partners spend too much time chasing data and building reports. Our clients get real-time portfolio visibility with 80% less manual work.
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
            The reporting burden
          </h2>
          <div className="space-y-4 text-foreground-muted leading-relaxed">
            <p>
              Every portfolio company reports differently. Every board meeting requires custom decks. Your team spends more time formatting data than acting on it.
            </p>
            <p>
              By the time you see the numbers, they&apos;re already weeks old. You need real-time visibility, not historical reports.
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
              <h3 className="text-foreground font-medium mb-2">Reporting Automation</h3>
              <p className="text-foreground-muted">
                Automated data collection, standardization, and report generation across your portfolio
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">KPI Tracking</h3>
              <p className="text-foreground-muted">
                Real-time dashboards with automatic alerts when metrics deviate from plan
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Value Creation Monitoring</h3>
              <p className="text-foreground-muted">
                Track initiatives, milestones, and value creation progress across the portfolio
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Board Package Generation</h3>
              <p className="text-foreground-muted">
                Automated board materials with consistent formatting and current data
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
              <div className="text-4xl font-semibold text-foreground">80%</div>
              <div className="mt-2 text-foreground-subtle text-sm">Less time on reporting</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">Real-time</div>
              <div className="mt-2 text-foreground-subtle text-sm">Portfolio visibility</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">2 weeks</div>
              <div className="mt-2 text-foreground-subtle text-sm">Earlier issue detection</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            See OperationsFabrics in action
          </h2>
          <p className="mt-4 text-foreground-muted">
            We&apos;ll show you exactly how it works with your portfolio.
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
