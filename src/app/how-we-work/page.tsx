import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'How We Work',
  description: 'From first call to production deployment in 6-8 weeks. See our proven process for building AI agents that ship.',
};

const process = [
  {
    week: 'Week 1',
    title: 'Discovery',
    tasks: [
      'Map your current workflows end-to-end',
      'Identify highest-impact automation targets',
      'Define success metrics and constraints',
      'Assess data availability and quality',
    ],
    deliverable: 'Discovery brief with recommended approach',
  },
  {
    week: 'Week 2',
    title: 'Architecture',
    tasks: [
      'Design agent system architecture',
      'Select components from Fabrics library',
      'Plan integrations with your systems',
      'Define human-in-the-loop checkpoints',
    ],
    deliverable: 'Technical architecture document',
  },
  {
    week: 'Weeks 3-6',
    title: 'Build',
    tasks: [
      'Develop core agent functionality',
      'Integrate with your data sources',
      'Test against real scenarios',
      'Iterate based on your feedback',
    ],
    deliverable: 'Working system in staging environment',
  },
  {
    week: 'Weeks 6-8',
    title: 'Deploy & Support',
    tasks: [
      'Deploy to your production environment',
      'Train your team on operation',
      'Monitor and optimize performance',
      'Handoff documentation',
    ],
    deliverable: 'Production system + runbooks',
  },
];

const faqs = [
  {
    question: 'Do you work with our existing tech stack?',
    answer: "Yes. We integrate with whatever you're running—Salesforce, HubSpot, internal databases, cloud providers. We build in your environment, not ours.",
  },
  {
    question: 'What about data security?',
    answer: "Your data stays in your infrastructure. We build systems that run in your cloud, behind your security perimeter. We sign strict NDAs and IP agreements. The system is yours.",
  },
  {
    question: 'What if the AI makes mistakes?',
    answer: "It will, especially early on. That's why we design human-in-the-loop checkpoints for critical decisions. The AI handles the 80% that's routine; your team focuses on the 20% requiring judgment.",
  },
  {
    question: 'How is this different from ChatGPT or Copilot?',
    answer: "Those are general-purpose assistants. We build specialized agents trained on your workflows, integrated with your systems, optimized for your use cases. ChatGPT can summarize a document—our agents run your entire process end-to-end.",
  },
  {
    question: 'We have an internal AI team. Why do we need you?',
    answer: "We work alongside internal teams. They focus on infrastructure and company-wide initiatives; we focus on business-specific agents in domains like talent and investment research. We accelerate your roadmap without competing for resources.",
  },
];

export default function HowWeWorkPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            How we work
          </h1>
          <p className="mt-6 text-lg text-foreground-muted">
            From first call to production deployment in 6-8 weeks. Here&apos;s what that looks like.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-16">
            {process.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Timeline line */}
                {index !== process.length - 1 && (
                  <div className="absolute left-[7px] top-8 bottom-0 w-px bg-border" />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="w-4 h-4 rounded-full bg-foreground mt-2 shrink-0" />

                  <div className="flex-1">
                    <span className="text-foreground-subtle text-sm font-medium">
                      {step.week}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>

                    <div className="mt-4 space-y-2">
                      {step.tasks.map((task) => (
                        <p key={task} className="text-foreground-muted text-sm">
                          • {task}
                        </p>
                      ))}
                    </div>

                    <div className="mt-4 p-4 bg-background rounded-lg border border-border">
                      <span className="text-foreground-subtle text-xs font-medium uppercase tracking-wider">
                        Deliverable
                      </span>
                      <p className="mt-1 text-foreground text-sm">
                        {step.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            What we need from you
          </h2>
          <ul className="space-y-4 text-foreground-muted">
            <li>• A sponsor who can make decisions</li>
            <li>• Access to relevant data and systems</li>
            <li>• 2-3 hours per week for feedback and reviews</li>
            <li>• Willingness to iterate</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-12">
            Common questions
          </h2>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="pb-8 border-b border-border last:border-0 last:pb-0">
                <h3 className="text-foreground font-medium mb-3">
                  {faq.question}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            Ready to get started?
          </h2>
          <p className="mt-4 text-foreground-muted">
            30-minute discovery call. No pitch deck.
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
