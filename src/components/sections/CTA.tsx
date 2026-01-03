import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="bg-background py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
          Ready to ship production AI?
        </h2>
        <p className="mt-5 text-lg text-foreground-muted">
          Let&apos;s talk about your specific challenges. 30-minute call, no pitch deck.
        </p>
        <div className="mt-10">
          <Button href="/contact" size="lg">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
