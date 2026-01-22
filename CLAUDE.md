# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Lint Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Architecture

Marketing website for QuantumFabrics (enterprise AI agent builder) built with Next.js 16, React 19, and Tailwind CSS v4.

### Project Structure

- `src/app/` - Next.js App Router pages (each page exports metadata for SEO)
- `src/components/layout/` - Header, Footer, Container
- `src/components/ui/` - Reusable primitives (Button, Card) using `class-variance-authority`
- `src/components/sections/` - Homepage sections (Hero, Pillars, FabricsGrid, etc.)
- `src/lib/utils.ts` - `cn()` utility for className composition (clsx + tailwind-merge)
- `src/lib/animations.ts` - Framer Motion animation variants (fadeIn, staggerContainer, scaleIn, prismFloat, glowPulse)

### Tailwind CSS v4 Setup

Custom design tokens are defined in `globals.css` using CSS variables and exposed to Tailwind via `@theme`:

```css
/* Use these semantic color classes in Tailwind */
bg-background, bg-background-elevated, bg-background-subtle
text-foreground, text-foreground-muted, text-foreground-subtle
border-border, border-border-hover
bg-accent-highlight
```

Dark mode is the default and only theme (pure black background #000000).

### Contact Form

The contact form (`/contact`) uses a server action at `src/app/api/contact/route.ts` that sends emails via Resend.

### Design Principles (from specification.md)

- Minimal, premium, technical aesthetic (similar to Vercel, Linear, Raycast)
- Dark mode throughout with pure black background
- Lots of whitespace, subtle animations only
- Typography does the heavy lifting
- Avoid buzzwords; prefer action verbs (build, ship, deploy)
- Lead with outcomes in copy ("Reduce reporting time by 80%")
