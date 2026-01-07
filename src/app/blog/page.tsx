import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on building production AI systems for enterprise.',
};

export default function BlogPage() {
  return (
    <main id="main-content" className="pt-24">
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Blog
          </h1>
          <p className="mt-6 text-lg text-foreground-muted">
            Insights on building production AI systems for enterprise.
          </p>
          <div className="mt-16 p-12 bg-background-elevated border border-border rounded-lg">
            <p className="text-foreground-muted mb-6">
              Content coming soon. In the meantime, let&apos;s talk about your AI challenges.
            </p>
            <Button href="/contact">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
