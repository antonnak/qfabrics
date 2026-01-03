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
