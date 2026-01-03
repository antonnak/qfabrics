import { Rocket, Layers, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const pillars = [
  {
    icon: Rocket,
    title: 'Production Focus',
    description: "Every engagement delivers working systems, not research papers. We're measured on deployment, not deliverables.",
  },
  {
    icon: Layers,
    title: 'Domain Expertise',
    description: "Deep vertical knowledge in talent assessment, investment research, operations, and GTM. We've seen the patterns.",
  },
  {
    icon: Shield,
    title: 'Senior-Led Delivery',
    description: 'Principal engagement from strategy through deployment. No junior staff bait-and-switch.',
  },
];

export function Pillars() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-foreground mb-16">
          What sets us apart
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <pillar.icon className="w-12 h-12 text-foreground opacity-90 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
