import Link from 'next/link';

const solutions = [
  { name: 'TalentFabrics', href: '/solutions/talent-fabrics' },
  { name: 'InvestmentFabrics', href: '/solutions/investment-fabrics' },
  { name: 'OperationsFabrics', href: '/solutions/operations-fabrics' },
  { name: 'CustomerFabrics', href: '/solutions/customer-fabrics' },
];

const company = [
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const connect = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/quantumfabrics' },
  { name: 'Email', href: 'mailto:anton@quantumfabrics.ai' },
];

export function Footer() {
  return (
    <footer className="bg-background-subtle border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-foreground font-semibold text-lg">
              QuantumFabrics
            </Link>
            <p className="mt-3 text-foreground-subtle text-sm leading-relaxed">
              Production AI agents<br />for enterprise.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-foreground-muted hover:text-foreground text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-foreground-muted hover:text-foreground text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {connect.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-foreground-muted hover:text-foreground text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground-subtle text-xs">
            © 2025 Talk2Insights AI LLC d/b/a QuantumFabrics
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-foreground-subtle hover:text-foreground-muted text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-foreground-subtle hover:text-foreground-muted text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
