import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About',
  description: 'QuantumFabrics closes the gap between AI strategy and production deployment. Built on 100+ years of combined McKinsey experience and real startup success.',
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
            About
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            The gap we close.
          </h1>
          <div className="mt-8 space-y-6 text-foreground-muted leading-relaxed text-lg">
            <p>
              Most AI projects fail for the same reasons consulting exists to solve: unclear goals, undefined success metrics, and generic solutions that don&apos;t fit how the business actually works.
            </p>
            <p>
              Then companies buy off-the-shelf AI and wonder why it doesn&apos;t move the needle. It&apos;s because their competitors bought the same tool.
            </p>
            <p className="text-foreground">
              We build AI that becomes your competitive advantage—not another commodity.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">
            Built on real experience.
          </h2>

          <div className="space-y-6 text-foreground-muted leading-relaxed">
            <p>
              I spent 10 years at McKinsey watching technical projects fail. Not because the technology was wrong, but because delivery was slow, expensive, and disconnected from the business problem.
            </p>
            <p>
              Before QuantumFabrics, I co-founded Kevin AI—a real estate technology platform I built from the ground up. Real product. Real customers, including some of the top 100 RE agents in the US. Real revenue. Recognized by the National Association of Realtors as Innovator of the Year.
            </p>
            <p>
              I&apos;ve built AI that ships. Now I do it for enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Team Background */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-12">
            Team Background
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-lg p-5">
              <h3 className="text-foreground font-medium mb-2">McKinsey & Company</h3>
              <p className="text-foreground-muted text-sm">100+ years of combined experience</p>
              <p className="text-foreground-subtle text-sm">Technology transformations, QuantumBlack</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-5">
              <h3 className="text-foreground font-medium mb-2">Full-Stack Engineering</h3>
              <p className="text-foreground-muted text-sm">AI/ML systems, cloud architecture</p>
              <p className="text-foreground-subtle text-sm">Production deployments at scale</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-5">
              <h3 className="text-foreground font-medium mb-2">Domain Expertise</h3>
              <p className="text-foreground-muted text-sm">Investment, Operations, Talent, Sales</p>
              <p className="text-foreground-subtle text-sm">Proven playbooks that accelerate delivery</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-5">
              <h3 className="text-foreground font-medium mb-2">Startup DNA</h3>
              <p className="text-foreground-muted text-sm">Co-founded Kevin AI</p>
              <p className="text-foreground-subtle text-sm">NAR Innovator of the Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">
            How we work.
          </h2>

          <div className="space-y-6 text-foreground-muted leading-relaxed">
            <p>
              QuantumFabrics is a senior-led team. I lead every engagement personally—from strategy through deployment. No handoffs. No bait-and-switch.
            </p>
            <p>
              We define the problem before writing code. We build systems that run in your infrastructure. And we don&apos;t leave until it works.
            </p>
          </div>

          <div className="mt-8 text-foreground">
            <p className="font-medium">— Anton, Founder</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            Ready to build AI that&apos;s actually yours?
          </h2>
          <p className="mt-4 text-foreground-muted">
            30-minute call. No pitch deck. Let&apos;s talk about your specific challenges.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
