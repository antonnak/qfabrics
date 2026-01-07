import Link from 'next/link';
import { Users, TrendingUp, BarChart3, Target, ArrowRight } from 'lucide-react';

const fabrics = [
  {
    icon: TrendingUp,
    name: 'InvestmentFabrics',
    domain: 'Investment Research',
    description: 'AI agents for deal sourcing, due diligence automation, market intelligence, and portfolio monitoring.',
    href: '/solutions/investment-fabrics',
  },
  {
    icon: BarChart3,
    name: 'OperationsFabrics',
    domain: 'Portfolio Operations',
    description: 'AI agents for reporting automation, KPI tracking, value creation monitoring, and operational dashboards.',
    href: '/solutions/operations-fabrics',
  },
  {
    icon: Users,
    name: 'TalentFabrics',
    domain: 'Executive Intelligence',
    description: 'AI agents for talent assessment, executive benchmarking, leadership analytics, and succession planning.',
    href: '/solutions/talent-fabrics',
  },
  {
    icon: Target,
    name: 'SalesFabrics',
    domain: 'GTM & Revenue',
    description: 'AI agents for lead enrichment, outreach automation, pipeline intelligence, and customer success.',
    href: '/solutions/sales-fabrics',
  },
];

export function FabricsGrid() {
  return (
    <section className="bg-background-subtle py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
            Our Solutions
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            The Fabrics
          </h2>
          <p className="mt-4 text-foreground-muted leading-relaxed">
            Each Fabric represents a domain where we&apos;ve built deep expertise and reusable components. Custom solutions, accelerated delivery.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {fabrics.map((fabric) => (
            <Link
              key={fabric.name}
              href={fabric.href}
              className="group relative bg-background border border-border rounded-lg p-6 transition-all duration-200 hover:border-border-hover hover:-translate-y-0.5"
            >
              {/* Top gradient line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-hover to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <fabric.icon className="w-10 h-10 text-foreground mb-5" strokeWidth={1.5} />

              <h3 className="text-xl font-semibold text-foreground">
                {fabric.name}
              </h3>
              <p className="text-foreground-subtle text-sm mt-1 mb-4">
                {fabric.domain}
              </p>
              <p className="text-foreground-muted leading-relaxed mb-6">
                {fabric.description}
              </p>

              <span className="inline-flex items-center text-foreground text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
