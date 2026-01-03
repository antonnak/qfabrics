# QuantumFabrics Website — Complete Build Specification

## For Claude Code Implementation

---

## Project Overview

Build a modern, conversion-optimized marketing website for QuantumFabrics, a production AI agent builder for enterprises. Full dark mode aesthetic—premium, minimal, technical. Similar to Vercel, Linear, or Raycast.

**Domain:** quantumfabrics.ai  
**Primary Goal:** Drive qualified leads to book discovery calls  
**Secondary Goal:** Establish credibility and differentiate from competitors  
**Target Audience:** PE operating partners, investment teams, enterprise decision-makers

---

## Technical Stack

```
Framework:    Next.js 14+ (App Router)
Styling:      Tailwind CSS
Animations:   Framer Motion (subtle, professional)
Forms:        React Hook Form + server actions
Fonts:        Inter or Geist (via next/font)
Icons:        Lucide React
Deployment:   Vercel
Analytics:    Vercel Analytics
```

---

## Design Tokens

```css
:root {
  /* ===== DARK MODE (Site-wide) ===== */
  
  /* Backgrounds */
  --background: #1a1a1a;
  --background-elevated: #222222;    /* Cards, elevated surfaces */
  --background-subtle: #141414;      /* Recessed areas, alternating sections */
  
  /* Foreground / Text */
  --foreground: #fafafa;
  --foreground-muted: #a1a1aa;       /* Secondary text */
  --foreground-subtle: #6b7280;      /* Tertiary text, labels, eyebrows */
  
  /* Interactive */
  --primary: #fafafa;
  --primary-hover: #ffffff;
  --secondary: #404040;
  --secondary-hover: #525252;
  
  /* Borders */
  --border: #2a2a2a;
  --border-hover: #404040;
  
  /* Accents */
  --accent-glow: rgba(255, 255, 255, 0.05);
  --accent-highlight: rgba(255, 255, 255, 0.1);
  
  /* Status */
  --destructive: #b91c1c;
  --success: #16a34a;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 40px rgba(255, 255, 255, 0.05);
  
  /* Typography Scale */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  
  /* Spacing */
  --section-padding: 6rem;
  --section-padding-mobile: 4rem;
  --container-max: 1280px;
  --container-narrow: 800px;
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}
```

### Tailwind Config Extension

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        'background-elevated': '#222222',
        'background-subtle': '#141414',
        foreground: '#fafafa',
        'foreground-muted': '#a1a1aa',
        'foreground-subtle': '#6b7280',
        border: '#2a2a2a',
        'border-hover': '#404040',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                         # Home
│   ├── globals.css
│   ├── solutions/
│   │   ├── page.tsx                     # Solutions overview
│   │   ├── talent-fabrics/page.tsx
│   │   ├── investment-fabrics/page.tsx
│   │   ├── operations-fabrics/page.tsx
│   │   └── customer-fabrics/page.tsx
│   ├── how-we-work/page.tsx
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ClientLogos.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── Pillars.tsx
│   │   ├── FabricsGrid.tsx
│   │   ├── Differentiators.tsx
│   │   ├── Stats.tsx
│   │   ├── CTA.tsx
│   │   └── FabricMesh.tsx              # 3D visual component
│   └── icons/
│       └── Logo.tsx
├── lib/
│   ├── utils.ts
│   └── constants.ts
└── public/
    ├── images/
    │   ├── logos/                       # Client logos
    │   └── fabric-mesh.png              # Fallback static image
    └── fonts/
```

---

## Global Styles

```css
/* app/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #1a1a1a;
  color: #fafafa;
  font-family: var(--font-inter), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Selection */
::selection {
  background: rgba(250, 250, 250, 0.2);
  color: #fafafa;
}

/* Focus styles */
:focus-visible {
  outline: 2px solid #fafafa;
  outline-offset: 2px;
}

/* Scrollbar (optional - subtle dark scrollbar) */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #404040;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #525252;
}
```

---

## Component Specifications

### Button Component

```tsx
// components/ui/Button.tsx

import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-foreground text-background hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]',
        secondary: 'bg-transparent text-foreground border border-border hover:bg-accent-highlight hover:border-border-hover',
        ghost: 'bg-transparent text-foreground-muted hover:text-foreground hover:bg-accent-highlight',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant, size, href, className, onClick }: ButtonProps) {
  const classes = buttonVariants({ variant, size, className });
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
```

### Card Component

```tsx
// components/ui/Card.tsx

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        bg-background-elevated 
        border border-border 
        rounded-lg 
        p-6
        ${hover ? 'transition-all duration-200 hover:border-border-hover hover:bg-[#262626]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
```

### Container Component

```tsx
// components/layout/Container.tsx

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div 
      className={`
        mx-auto px-6 
        ${narrow ? 'max-w-3xl' : 'max-w-6xl'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
```

---

## Navigation

### Header Component

```tsx
// components/layout/Header.tsx

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const solutions = [
  { name: 'TalentFabrics', description: 'Executive Intelligence', href: '/solutions/talent-fabrics' },
  { name: 'InvestmentFabrics', description: 'Investment Research', href: '/solutions/investment-fabrics' },
  { name: 'OperationsFabrics', description: 'Portfolio Operations', href: '/solutions/operations-fabrics' },
  { name: 'CustomerFabrics', description: 'GTM & Revenue', href: '/solutions/customer-fabrics' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-foreground-muted hover:text-foreground text-sm font-medium transition-colors"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {solutionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-background-elevated border border-border rounded-lg shadow-lg overflow-hidden"
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-background transition-colors"
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
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
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
```

---

## Homepage Sections

### Section 1: Hero

```tsx
// components/sections/Hero.tsx

import { Button } from '@/components/ui/Button';
import { FabricMesh } from './FabricMesh';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />
      
      {/* Subtle glow behind visual */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(255,255,255,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight">
          AI agents that actually ship.
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
          We build production AI systems for private equity and enterprise—not pilots, not proofs of concept, but working agents integrated into your operations.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Book a Demo
          </Button>
          <Button href="/how-we-work" variant="secondary" size="lg">
            See How We Work
          </Button>
        </div>
      </div>

      {/* 3D Fabric Visual */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 pb-24">
        <FabricMesh />
      </div>
    </section>
  );
}
```

### 3D Fabric Mesh Visual

```tsx
// components/sections/FabricMesh.tsx

// Option 1: Static image with CSS effects (MVP approach)
export function FabricMesh() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div 
        className="absolute inset-0 blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
        }}
      />
      
      {/* Main visual - replace with actual 3D mesh image */}
      <div className="relative aspect-video flex items-center justify-center">
        {/* 
          TODO: Replace this placeholder with actual 3D woven mesh visual
          Options:
          1. Static PNG/WebP rendered from Blender/Cinema4D
          2. Looping WebM/MP4 video
          3. Spline embed (spline.design)
          4. React Three Fiber component
          
          Visual concept: 
          - Woven mesh grid floating in 3D space
          - White/light gray threads
          - Subtle iridescent shimmer on edges (blues, purples, cyans)
          - Gentle wave animation
          - Soft glow beneath
        */}
        <div className="w-full h-full bg-gradient-to-b from-background-elevated/50 to-transparent rounded-2xl border border-border/50 flex items-center justify-center">
          <span className="text-foreground-subtle text-sm">
            [3D Woven Mesh Visual]
          </span>
        </div>
      </div>
    </div>
  );
}

// Option 2: Spline embed (if using spline.design)
// import Spline from '@splinetool/react-spline';
// export function FabricMesh() {
//   return (
//     <div className="relative aspect-video">
//       <Spline scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode" />
//     </div>
//   );
// }
```

### Section 2: Client Logos

```tsx
// components/sections/ClientLogos.tsx

import Image from 'next/image';

// Replace with actual client logos
const logos = [
  { name: 'Client 1', src: '/images/logos/client1.svg' },
  { name: 'Client 2', src: '/images/logos/client2.svg' },
  { name: 'Client 3', src: '/images/logos/client3.svg' },
  { name: 'Client 4', src: '/images/logos/client4.svg' },
  { name: 'Client 5', src: '/images/logos/client5.svg' },
];

export function ClientLogos() {
  return (
    <section className="bg-background border-t border-border py-16">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-foreground-subtle text-xs font-semibold uppercase tracking-widest mb-10">
          Trusted by leading private equity firms
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <div 
              key={logo.name}
              className="opacity-50 hover:opacity-80 transition-opacity grayscale brightness-200"
            >
              {/* Replace with actual Image component when logos are available */}
              <div className="h-7 w-24 bg-foreground-subtle/20 rounded" />
              {/* <Image src={logo.src} alt={logo.name} height={28} width={96} /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Section 3: Problem / Solution

```tsx
// components/sections/ProblemSolution.tsx

export function ProblemSolution() {
  return (
    <section className="bg-background-subtle py-24">
      <div className="max-w-5xl mx-auto px-6">
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
                We combine McKinsey-trained strategy with hands-on engineering. We don't just tell you what to build—we build it, deploy it, and make sure it works.
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
```

### Section 4: Three Pillars

```tsx
// components/sections/Pillars.tsx

import { Rocket, Layers, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const pillars = [
  {
    icon: Rocket,
    title: 'Production Focus',
    description: "Every engagement delivers working systems, not research papers. We're measured on deployment, not deliverables.",
  },
  {
    icon: Layers,
    title: 'Domain Expertise',
    description: "Deep vertical knowledge in talent assessment, investment research, operations, and GTM. We've seen the patterns.",
  },
  {
    icon: Shield,
    title: 'Senior-Led Delivery',
    description: 'Principal engagement from strategy through deployment. No junior staff bait-and-switch.',
  },
];

export function Pillars() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-foreground mb-16">
          What sets us apart
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <pillar.icon className="w-12 h-12 text-foreground opacity-90 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Section 5: The Fabrics (Solutions Grid)

```tsx
// components/sections/FabricsGrid.tsx

import Link from 'next/link';
import { Users, TrendingUp, BarChart3, Target, ArrowRight } from 'lucide-react';

const fabrics = [
  {
    icon: Users,
    name: 'TalentFabrics',
    domain: 'Executive Intelligence',
    description: 'AI agents for talent assessment, executive benchmarking, leadership analytics, and succession planning.',
    href: '/solutions/talent-fabrics',
  },
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
    icon: Target,
    name: 'CustomerFabrics',
    domain: 'GTM & Revenue',
    description: 'AI agents for lead enrichment, outreach automation, pipeline intelligence, and customer success.',
    href: '/solutions/customer-fabrics',
  },
];

export function FabricsGrid() {
  return (
    <section className="bg-background-subtle py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
            Our Solutions
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            The Fabrics
          </h2>
          <p className="mt-4 text-foreground-muted leading-relaxed">
            Each Fabric represents a domain where we've built deep expertise and reusable components. Custom solutions, accelerated delivery.
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
```

### Section 6: Differentiators

```tsx
// components/sections/Differentiators.tsx

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
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-foreground mb-16">
          How we're different
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
```

### Section 7: Stats

```tsx
// components/sections/Stats.tsx

const stats = [
  { number: '10+', label: 'Years at McKinsey' },
  { number: '3-5x', label: 'Faster delivery' },
  { number: '6', label: 'Weeks to production' },
  { number: '$50K+', label: 'Typical engagement' },
];

export function Stats() {
  return (
    <section className="bg-background-subtle py-20 border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
```

### Section 8: Final CTA

```tsx
// components/sections/CTA.tsx

import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="bg-background py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
          Ready to ship production AI?
        </h2>
        <p className="mt-5 text-lg text-foreground-muted">
          Let's talk about your specific challenges. 30-minute call, no pitch deck.
        </p>
        <div className="mt-10">
          <Button href="/contact" size="lg">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
```

---

## Footer

```tsx
// components/layout/Footer.tsx

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
```

---

## Homepage Assembly

```tsx
// app/page.tsx

import { Hero } from '@/components/sections/Hero';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { Pillars } from '@/components/sections/Pillars';
import { FabricsGrid } from '@/components/sections/FabricsGrid';
import { Differentiators } from '@/components/sections/Differentiators';
import { Stats } from '@/components/sections/Stats';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <ProblemSolution />
      <Pillars />
      <FabricsGrid />
      <Differentiators />
      <Stats />
      <CTA />
    </main>
  );
}
```

---

## Root Layout

```tsx
// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'QuantumFabrics | Production AI Agents for Enterprise',
    template: '%s | QuantumFabrics',
  },
  description: "We build AI agents that actually ship—not pilots, not proofs of concept, but production systems integrated into your operations. McKinsey-trained strategy meets hands-on engineering.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantumfabrics.ai',
    siteName: 'QuantumFabrics',
    title: 'QuantumFabrics | Production AI Agents for Enterprise',
    description: "We build AI agents that actually ship—not pilots, not proofs of concept, but production systems integrated into your operations.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumFabrics | Production AI Agents for Enterprise',
    description: "We build AI agents that actually ship—not pilots, not proofs of concept, but production systems integrated into your operations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## Inner Pages (Skeleton Templates)

### How We Work Page

```tsx
// app/how-we-work/page.tsx

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
            From first call to production deployment in 6-8 weeks. Here's what that looks like.
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
```

### About Page

```tsx
// app/about/page.tsx

import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About',
  description: 'QuantumFabrics was founded by Anton, ex-McKinsey Senior Manager, to close the gap between AI strategy and production deployment.',
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Founder Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Photo placeholder */}
          <div className="w-32 h-32 rounded-full bg-background-elevated border border-border mb-8" />
          
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight mb-8">
            Built by someone who's been on both sides
          </h1>
          
          <div className="space-y-6 text-foreground-muted leading-relaxed">
            <p>
              After nearly a decade at McKinsey helping Fortune 500 companies transform their operations, I noticed a pattern: AI projects kept dying in the pilot phase.
            </p>
            <p>
              Strategy consultants could design brilliant solutions but couldn't build them. Dev shops could build anything but didn't understand the business context. The gap between "great idea" and "working system" was where projects went to die.
            </p>
            <p>
              QuantumFabrics exists to close that gap.
            </p>
            <p>
              I combine the strategic rigor of top-tier consulting with hands-on engineering capability. I don't just tell you what to build—I build it, deploy it, and make sure it works.
            </p>
            <p>
              Every engagement is led by me personally. No junior staff bait-and-switch. No handoff to offshore teams. You get senior attention from start to finish.
            </p>
          </div>
          
          <div className="mt-8 text-foreground">
            <p className="font-medium">— Anton</p>
            <p className="text-foreground-subtle text-sm">Founder, QuantumFabrics</p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-12">
            Background
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-foreground font-medium mb-2">McKinsey & Company</h3>
              <p className="text-foreground-muted text-sm">Senior Manager, 10 years</p>
              <p className="text-foreground-subtle text-sm">Operations and technology transformations</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Full-Stack Engineering</h3>
              <p className="text-foreground-muted text-sm">AI/ML systems, cloud architecture</p>
              <p className="text-foreground-subtle text-sm">Production deployments at scale</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Domain Expertise</h3>
              <p className="text-foreground-muted text-sm">Talent, Investment, Operations, GTM</p>
              <p className="text-foreground-subtle text-sm">500+ executive assessments in database</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-12">
            How we operate
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-foreground font-medium mb-2">Ship, don't slide</h3>
              <p className="text-foreground-muted">We're measured on working systems, not deliverable pages.</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Stay hands-on</h3>
              <p className="text-foreground-muted">The person who designs it builds it. No translation loss.</p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Earn trust through results</h3>
              <p className="text-foreground-muted">We don't ask for long contracts. We earn the next engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            Let's talk
          </h2>
          <p className="mt-4 text-foreground-muted">
            I'd love to hear about what you're working on.
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
```

### Contact Page

```tsx
// app/contact/page.tsx

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a 30-minute discovery call with QuantumFabrics. No pitch deck—just a conversation about your challenges.',
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                Let's talk
              </h1>
              <p className="text-foreground-muted mb-8">
                30-minute discovery call. No pitch deck. We'll discuss your challenges and whether we can help.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-foreground-muted transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-foreground-muted transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-foreground-muted transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground focus:outline-none focus:border-foreground-muted transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="operating-partner">Operating Partner</option>
                    <option value="investment-team">Investment Team</option>
                    <option value="operations">Operations</option>
                    <option value="gtm-sales">GTM / Sales</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    What are you trying to solve?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background-elevated border border-border rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:border-foreground-muted transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-3 px-6 rounded-lg font-medium hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all"
                >
                  Book Discovery Call
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="md:pt-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-foreground font-medium mb-4">What to expect</h3>
                  <ol className="space-y-3 text-foreground-muted">
                    <li>1. You'll hear back within 24 hours</li>
                    <li>2. We'll schedule a 30-minute call</li>
                    <li>3. We'll discuss your specific challenges</li>
                    <li>4. If there's a fit, we'll propose next steps</li>
                  </ol>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <h3 className="text-foreground font-medium mb-2">Prefer email?</h3>
                  <a href="mailto:anton@quantumfabrics.ai" className="text-foreground-muted hover:text-foreground transition-colors">
                    anton@quantumfabrics.ai
                  </a>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <h3 className="text-foreground font-medium mb-2">Location</h3>
                  <p className="text-foreground-muted">
                    Santa Monica, California<br />
                    <span className="text-foreground-subtle text-sm">(We work with clients globally)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

### Solution Page Template (TalentFabrics)

```tsx
// app/solutions/talent-fabrics/page.tsx

import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'TalentFabrics - Executive Intelligence',
  description: 'AI agents for talent assessment, executive benchmarking, leadership analytics, and succession planning. Identify at-risk executives 6 months earlier.',
};

export default function TalentFabricsPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-foreground-subtle text-xs font-semibold uppercase tracking-widest">
            TalentFabrics
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Executive intelligence at scale
          </h1>
          <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
            58% of PE-backed CEOs are replaced within 2 years. Most firms find out too late. Our clients identify at-risk executives 6 months earlier.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            The talent problem in PE
          </h2>
          <div className="space-y-4 text-foreground-muted leading-relaxed">
            <p>
              You're responsible for talent across a portfolio of companies. You know the CEO at PortCo #3 isn't working out—but by the time you have the data to prove it, you've lost two quarters.
            </p>
            <p>
              Traditional executive assessment is expensive ($50K+ per ghSMART engagement), slow (weeks to schedule), and reactive. You need proactive, continuous intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            What we build
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-foreground font-medium mb-2">Executive Assessment Agents</h3>
              <p className="text-foreground-muted">
                Structured interviews + scoring + benchmarking against our database of 500+ executive profiles
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Leadership Signal Monitoring</h3>
              <p className="text-foreground-muted">
                Early warning system aggregating board feedback, performance data, communication patterns
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Succession Pipeline Analysis</h3>
              <p className="text-foreground-muted">
                Continuous evaluation of internal candidates against external benchmarks
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-2">Talent Due Diligence</h3>
              <p className="text-foreground-muted">
                Pre-close executive assessment integrated into your deal process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-background-subtle py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground mb-12 text-center">
            Results
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-semibold text-foreground">6 months</div>
              <div className="mt-2 text-foreground-subtle text-sm">Earlier ID of at-risk execs</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">70%</div>
              <div className="mt-2 text-foreground-subtle text-sm">Faster than traditional assessment</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-foreground">$2M+</div>
              <div className="mt-2 text-foreground-subtle text-sm">Saved per avoided bad hire</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            See TalentFabrics in action
          </h2>
          <p className="mt-4 text-foreground-muted">
            We'll show you exactly how it works with your portfolio.
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
```

---

## Animations (Framer Motion)

```tsx
// lib/animations.ts

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
};
```

```tsx
// Example usage in a section component
'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

export function AnimatedSection({ children }) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children }) {
  return (
    <motion.div variants={fadeIn}>
      {children}
    </motion.div>
  );
}
```

---

## SEO & Meta

```tsx
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://quantumfabrics.ai/sitemap.xml',
  };
}
```

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://quantumfabrics.ai', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions/talent-fabrics', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions/investment-fabrics', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions/operations-fabrics', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/solutions/customer-fabrics', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/how-we-work', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/about', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/blog', lastModified: new Date() },
    { url: 'https://quantumfabrics.ai/contact', lastModified: new Date() },
  ];
}
```

---

## Implementation Checklist

```
Phase 1: Setup
□ Initialize Next.js 14 project with App Router
□ Configure Tailwind CSS with custom design tokens
□ Set up fonts (Inter via next/font)
□ Install dependencies: framer-motion, lucide-react, class-variance-authority
□ Create global styles
□ Set up file structure

Phase 2: Core Components
□ Button component with variants
□ Card component
□ Container component
□ Header with navigation + mobile menu
□ Footer

Phase 3: Homepage
□ Hero section with grid background
□ Client logos section (placeholders)
□ Problem/Solution section
□ Three Pillars section
□ Fabrics Grid section
□ Differentiators section
□ Stats section
□ Final CTA section

Phase 4: Inner Pages
□ How We Work page
□ About page
□ Contact page with form
□ Solutions overview page
□ TalentFabrics page
□ InvestmentFabrics page
□ OperationsFabrics page
□ CustomerFabrics page
□ Blog page (placeholder/coming soon)

Phase 5: Polish
□ Add Framer Motion animations
□ Responsive testing
□ Accessibility audit
□ SEO meta tags
□ Open Graph images
□ Performance optimization
□ Sitemap + robots.txt

Phase 6: 3D Visual
□ Create 3D woven mesh visual (Blender/Spline/etc.)
□ Export as static image or video
□ Implement with fallbacks
□ Consider React Three Fiber upgrade later

Phase 7: Deploy
□ Connect to Vercel
□ Configure domain (quantumfabrics.ai)
□ Set up analytics
□ Test all forms
□ Launch
```

---

## Notes for Claude Code

### Writing Style
- Short sentences. Break up long sentences.
- Lead with outcomes: "Reduce reporting time by 80%" not "Our AI uses advanced algorithms"
- Be specific with numbers
- Avoid buzzwords: leverage, synergy, cutting-edge, revolutionary, unlock, empower
- Prefer action verbs: build, ship, deploy, works, run, automate
- Sound human—read it out loud

### Design Principles
- Minimal, premium, technical
- Dark mode throughout
- Lots of whitespace
- Subtle animations only
- Typography does the heavy lifting
- Cards and borders for structure

### Responsive
- Mobile-first approach
- Test at: 375px, 768px, 1024px, 1280px
- Stack grids on mobile
- Adjust font sizes with clamp()
- Full-width buttons on mobile

---
