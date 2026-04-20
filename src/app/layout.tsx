import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quantumfabrics.ai'),
  title: {
    default: 'QuantumFabrics | Production AI Agents for Enterprise',
    template: '%s | QuantumFabrics',
  },
  description: "We build AI agents that actually ship—not pilots, not proofs of concept, but production systems integrated into your operations. McKinsey-trained strategy meets hands-on engineering.",
  keywords: ['AI agents', 'enterprise AI', 'private equity AI', 'production AI systems', 'AI consulting', 'McKinsey', 'AI automation'],
  authors: [{ name: 'QuantumFabrics' }],
  creator: 'QuantumFabrics',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here after registering with search consoles
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // other: { 'msvalidate.01': 'your-bing-verification-code' },
  },
};

// JSON-LD structured data for Organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QuantumFabrics',
  description: 'We build production AI agents for private equity and enterprise—not pilots, not proofs of concept, but working systems integrated into your operations.',
  url: 'https://quantumfabrics.ai',
  logo: 'https://quantumfabrics.ai/icon.svg',
  email: 'anton@quantumfabrics.ai',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santa Monica',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'anton@quantumfabrics.ai',
    contactType: 'sales',
  },
  founder: {
    '@type': 'Person',
    name: 'Anton',
    jobTitle: 'Founder',
  },
  knowsAbout: [
    'AI Agents',
    'Enterprise AI',
    'Private Equity',
    'Machine Learning',
    'Production AI Systems',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:rounded-md focus:font-medium"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
