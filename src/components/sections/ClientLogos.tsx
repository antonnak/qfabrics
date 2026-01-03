const clientTypes = [
  { label: 'Middle Market PE', aum: '$2-10B AUM' },
  { label: 'Growth Equity', aum: '$1-5B AUM' },
  { label: 'Family Offices', aum: 'Multi-generational' },
  { label: 'Portfolio Companies', aum: 'PE-backed' },
];

export function ClientLogos() {
  return (
    <section className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-foreground-subtle text-xs font-medium uppercase tracking-widest mb-8">
          Trusted by leading private equity firms
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {clientTypes.map((client) => (
            <div
              key={client.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background-elevated/30"
            >
              <span className="text-foreground-muted text-sm font-medium">{client.label}</span>
              <span className="text-foreground-subtle text-xs">·</span>
              <span className="text-foreground-subtle text-xs">{client.aum}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
