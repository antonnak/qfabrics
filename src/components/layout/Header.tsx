'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const solutions = [
  { name: 'InvestmentFabrics', description: 'Investment Research', href: '/solutions/investment-fabrics' },
  { name: 'OperationsFabrics', description: 'Portfolio Operations', href: '/solutions/operations-fabrics' },
  { name: 'TalentFabrics', description: 'Executive Intelligence', href: '/solutions/talent-fabrics' },
  { name: 'SalesFabrics', description: 'GTM & Revenue', href: '/solutions/sales-fabrics' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard handler for dropdown
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSolutionsOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSolutionsOpen(!solutionsOpen);
    } else if (e.key === 'ArrowDown' && solutionsOpen) {
      e.preventDefault();
      const firstLink = dropdownRef.current?.querySelector('a');
      firstLink?.focus();
    }
  }, [solutionsOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'}
      `}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-foreground font-semibold text-lg">
            QuantumFabrics
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-foreground-muted hover:text-foreground text-sm font-medium transition-colors"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
                onKeyDown={handleDropdownKeyDown}
                aria-haspopup="menu"
                aria-expanded={solutionsOpen}
              >
                Solutions
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>

              {solutionsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-background-elevated border border-border rounded-lg shadow-lg overflow-hidden"
                  role="menu"
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      role="menuitem"
                      className="block px-4 py-3 hover:bg-background transition-colors focus:bg-background focus:outline-none"
                      onClick={() => setSolutionsOpen(false)}
                    >
                      <div className="text-foreground font-medium text-sm">{item.name}</div>
                      <div className="text-foreground-subtle text-xs mt-0.5">{item.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/how-we-work" className="text-foreground-muted hover:text-foreground text-sm font-medium transition-colors">
              How We Work
            </Link>
            <Link href="/about" className="text-foreground-muted hover:text-foreground text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-foreground-muted hover:text-foreground text-sm font-medium transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <div className="space-y-2">
              <div className="text-foreground-subtle text-xs font-semibold uppercase tracking-wider">Solutions</div>
              {solutions.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground-muted hover:text-foreground text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="/how-we-work" className="block py-2 text-foreground-muted hover:text-foreground text-sm" onClick={() => setMobileMenuOpen(false)}>
              How We Work
            </Link>
            <Link href="/about" className="block py-2 text-foreground-muted hover:text-foreground text-sm" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/blog" className="block py-2 text-foreground-muted hover:text-foreground text-sm" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <div className="pt-4">
              <Button href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
