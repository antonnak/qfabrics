import { Target, Bot, Plug, Brain } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const pillars = [
  {
    icon: Target,
    title: 'Strategy before code',
    description: 'We define the problem and design the solution before writing a single line.',
  },
  {
    icon: Bot,
    title: 'Agentic systems, not chatbots',
    description: "Autonomous, long-running agents that monitor, act, and learn. They don't wait for prompts—they achieve outcomes.",
  },
  {
    icon: Plug,
    title: 'Embedded in your workflow',
    description: "Lives inside email, Slack, databases, CRMs. Not another window to check. Just work getting done.",
  },
  {
    icon: Brain,
    title: 'Domain expertise built in',
    description: "Deep vertical knowledge in finance, operations, talent and sales. We've seen the patterns—so you don't start from scratch.",
  },
];

export function Pillars() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-foreground mb-16">
          What sets us apart
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
