export function ProblemSolution() {
  return (
    <section className="bg-background-subtle py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* The Problem */}
          <div>
            <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
              The Problem
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
              Most AI projects fail the same way
            </h2>
            <div className="mt-6 space-y-4 text-foreground-muted leading-relaxed">
              <p>
                They start with hype. They end as shelfware—custom GPTs and chatbots nobody uses after the first month. Pilots that never deploy. Tools that sit outside your workflow, waiting to be remembered.
              </p>
              <p>
                The pattern is predictable: impressive demo, IT rollout, initial enthusiasm, then silence. Your team goes back to email and spreadsheets because the AI didn&apos;t actually fit how they work.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div>
            <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
              Strategy meets engineering
            </h2>
            <div className="mt-6 space-y-4 text-foreground-muted leading-relaxed">
              <p>
                We combine 100+ years of combined McKinsey experience with hands-on software engineering. We don&apos;t just tell you what to build—we build it, deploy it, and make sure it works.
              </p>
              <p>
                Every engagement delivers working systems, not slide decks. AI agents running in your environment, processing real data, delivering real outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
