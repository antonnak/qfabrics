import { Metadata } from 'next';
import Link from 'next/link';
import { Users, TrendingUp, BarChart3, Target, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Production AI agents for talent, investment, operations, and GTM. Custom solutions built on proven architecture.',
};

const fabrics = [
  {
    icon: TrendingUp,
    name: 'InvestmentFabrics',
    domain: 'Investment Research',
    description: 'AI agents for deal sourcing, due diligence automation, market intelligence, and portfolio monitoring. Reduce research time by 70%.',
    href: '/solutions/investment-fabrics',
  },
  {
    icon: BarChart3,
    name: 'OperationsFabrics',
    domain: 'Portfolio Operations',
    description: 'AI agents for reporting automation, KPI tracking, value creation monitoring, and operational dashboards. Cut reporting time by 80%.',
    href: '/solutions/operations-fabrics',
  },
  {
    icon: Users,
    name: 'TalentFabrics',
    domain: 'Executive Intelligence',
    description: 'AI agents for talent assessment, executive benchmarking, leadership analytics, and succession planning. Identify at-risk executives 6 months earlier.',
    href: '/solutions/talent-fabrics',
  },
  {
    icon: Target,
    name: 'SalesFabrics',
    domain: 'GTM & Revenue',
    description: 'AI agents for lead enrichment, outreach automation, pipeline intelligence, and customer success. 3x pipeline coverage.',
    href: '/solutions/sales-fabrics',
  },
];

export default function SolutionsPage() {
  return (
    <main id="main-content" className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            The Fabrics
          </h1>
          <p className="mt-6 text-lg text-foreground-muted">
            Each Fabric represents a domain where we&apos;ve built deep expertise and reusable components. Custom solutions, accelerated delivery.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {fabrics.map((fabric) => (
              <Link
                key={fabric.name}
                href={fabric.href}
                aria-label={`Learn more about ${fabric.name}: ${fabric.domain}`}
                className="group relative bg-background border border-border rounded-lg p-8 transition-all duration-200 hover:border-border-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-hover to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <fabric.icon className="w-12 h-12 text-foreground mb-6" strokeWidth={1.5} />

                <h2 className="text-2xl font-semibold text-foreground">
                  {fabric.name}
                </h2>
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
    </main>
  );
}
