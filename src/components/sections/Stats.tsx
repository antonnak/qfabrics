const stats = [
  { number: '100%', label: 'Engagements reach deployment' },
  { number: '3-5x', label: 'Faster delivery' },
  { number: '4-6', label: 'Weeks to production' },
];

export function Stats() {
  return (
    <section className="bg-background-subtle py-20 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl sm:text-5xl font-semibold text-foreground">
                {stat.number}
              </div>
              <div className="mt-2 text-sm text-foreground-subtle">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
