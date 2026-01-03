import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About',
  description: 'QuantumFabrics was founded by Anton, ex-McKinsey Senior Manager, to close the gap between AI strategy and production deployment.',
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Founder Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Founder initials avatar */}
          <div className="w-20 h-20 rounded-full bg-background-elevated border border-border mb-8 flex items-center justify-center">
            <span className="text-2xl font-semibold text-foreground-muted">AK</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight mb-8">
            Built by someone who&apos;s been on both sides
          </h1>

          <div className="space-y-6 text-foreground-muted leading-relaxed">
            <p>
              After nearly a decade at McKinsey helping Fortune 500 companies transform their operations, I noticed a pattern: AI projects kept dying in the pilot phase.
            </p>
            <p>
              Strategy consultants could design brilliant solutions but couldn&apos;t build them. Dev shops could build anything but didn&apos;t understand the business context. The gap between &quot;great idea&quot; and &quot;working system&quot; was where projects went to die.
            </p>
            <p>
              QuantumFabrics exists to close that gap.
            </p>
            <p>
              I combine the strategic rigor of top-tier consulting with hands-on engineering capability. I don&apos;t just tell you what to build—I build it, deploy it, and make sure it works.
            </p>
            <p>
              Every engagement is led by me personally. No junior staff bait-and-switch. No handoff to offshore teams. You get senior attention from start to finish.
            </p>
          </div>

          <div className="mt-8 text-foreground">
            <p className="font-medium">— Anton</p>
            <p className="text-foreground-subtle text-sm">Founder, QuantumFabrics</p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-12">
            Background
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-foreground font-medium mb-2">McKinsey & Company</h3>
              <p className="text-foreground-muted text-sm">Senior Manager, 10 years</p>
              <p className="text-foreground-subtle text-sm">Operations and technology transformations</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Full-Stack Engineering</h3>
              <p className="text-foreground-muted text-sm">AI/ML systems, cloud architecture</p>
              <p className="text-foreground-subtle text-sm">Production deployments at scale</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Domain Expertise</h3>
              <p className="text-foreground-muted text-sm">Talent, Investment, Operations, GTM</p>
              <p className="text-foreground-subtle text-sm">500+ executive assessments in database</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-12">
            How we operate
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-foreground font-medium mb-2">Ship, don&apos;t slide</h3>
              <p className="text-foreground-muted">We&apos;re measured on working systems, not deliverable pages.</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Stay hands-on</h3>
              <p className="text-foreground-muted">The person who designs it builds it. No translation loss.</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Earn trust through results</h3>
              <p className="text-foreground-muted">We don&apos;t ask for long contracts. We earn the next engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            Let&apos;s talk
          </h2>
          <p className="mt-4 text-foreground-muted">
            I&apos;d love to hear about what you&apos;re working on.
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
