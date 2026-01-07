import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'TalentFabrics - Executive Intelligence',
  description: 'AI agents for talent assessment, executive benchmarking, leadership analytics, and succession planning. Identify at-risk executives 6 months earlier.',
};

export default function TalentFabricsPage() {
  return (
    <main id="main-content" className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
            TalentFabrics
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Executive intelligence at scale
          </h1>
          <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
            58% of PE-backed CEOs are replaced within 2 years. Most firms find out too late. Our clients identify at-risk executives 6 months earlier.
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
            The talent problem in PE
          </h2>
          <div className="space-y-4 text-foreground-muted leading-relaxed">
            <p>
              You&apos;re responsible for talent across a portfolio of companies. You know the CEO at PortCo #3 isn&apos;t working out—but by the time you have the data to prove it, you&apos;ve lost two quarters.
            </p>
            <p>
              Traditional executive assessment is expensive, slow (weeks to schedule), and reactive. You need proactive, continuous intelligence.
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
              <h3 className="text-foreground font-medium mb-2">Executive Assessment Agents</h3>
              <p className="text-foreground-muted">
                Structured interviews + scoring + benchmarking against our database of 500+ executive profiles
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Leadership Signal Monitoring</h3>
              <p className="text-foreground-muted">
                Early warning system aggregating board feedback, performance data, communication patterns
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Succession Pipeline Analysis</h3>
              <p className="text-foreground-muted">
                Continuous evaluation of internal candidates against external benchmarks
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Talent Due Diligence</h3>
              <p className="text-foreground-muted">
                Pre-close executive assessment integrated into your deal process
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
              <div className="text-4xl font-semibold text-foreground">6 months</div>
              <div className="mt-2 text-foreground-subtle text-sm">Earlier ID of at-risk execs</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">70%</div>
              <div className="mt-2 text-foreground-subtle text-sm">Faster than traditional assessment</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">$2M+</div>
              <div className="mt-2 text-foreground-subtle text-sm">Saved per avoided bad hire</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            See TalentFabrics in action
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
