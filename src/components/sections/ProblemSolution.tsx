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
              Most AI projects die in the pilot phase.
            </h2>
            <div className="mt-6 space-y-4 text-foreground-muted leading-relaxed">
              <p>
                They work in demos. Leadership gets excited. Then reality hits: integration nightmares, edge cases, maintenance burden.
              </p>
              <p>
                The project quietly gets shelved. Meanwhile, your competitors are actually deploying.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div>
            <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
              Our Approach
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
              Strategy meets engineering.
            </h2>
            <div className="mt-6 space-y-4 text-foreground-muted leading-relaxed">
              <p>
                We combine McKinsey-trained strategy with hands-on engineering. We don&apos;t just tell you what to build—we build it, deploy it, and make sure it works.
              </p>
              <p>
                Every engagement delivers production systems, not slide decks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
