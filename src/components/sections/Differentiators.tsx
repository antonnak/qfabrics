const comparisons = [
  {
    label: 'vs. Big 4 / MBB',
    them: 'They deliver strategy decks with junior staff execution.',
    us: 'We deliver working systems, senior-led, hands-on.',
  },
  {
    label: 'vs. AI Dev Shops',
    them: 'They build exactly what you ask for.',
    us: 'We bring domain expertise to shape what gets built.',
  },
  {
    label: 'vs. AI SaaS Products',
    them: 'They offer one-size-fits-all solutions.',
    us: 'We build custom on proven architecture.',
  },
  {
    label: 'vs. Internal Teams',
    them: 'They have long ramp-up and single-company perspective.',
    us: 'We bring cross-client patterns and deploy in weeks.',
  },
];

export function Differentiators() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-foreground mb-16">
          How we&apos;re different
        </h2>

        <div className="space-y-0">
          {comparisons.map((item, index) => (
            <div
              key={item.label}
              className={`py-8 ${index !== comparisons.length - 1 ? 'border-b border-border' : ''}`}
            >
              <span className="text-foreground-subtle text-sm font-semibold">
                {item.label}
              </span>
              <div className="mt-4 grid sm:grid-cols-2 gap-4 sm:gap-8">
                <p className="text-foreground-subtle leading-relaxed">
                  {item.them}
                </p>
                <p className="text-foreground leading-relaxed">
                  {item.us}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
