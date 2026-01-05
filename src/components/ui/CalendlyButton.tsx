'use client';

import { useEffect, useCallback } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const CALENDLY_URL = 'https://calendly.com/anton-quantumfabrics/30min';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
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

interface CalendlyButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  prefill?: {
    name?: string;
    email?: string;
  };
}

// Extend window to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
        prefill?: {
          name?: string;
          email?: string;
        };
      }) => void;
    };
  }
}

export function CalendlyButton({ children, variant, size, className, onClick, prefill }: CalendlyButtonProps) {
  // Load Calendly widget script
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById('calendly-widget-script')) return;

    const script = document.createElement('script');
    script.id = 'calendly-widget-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Add Calendly CSS
    if (!document.getElementById('calendly-widget-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-widget-css';
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }
  }, []);

  const openCalendly = useCallback(() => {
    onClick?.();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
        prefill: prefill,
      });
    }
  }, [onClick, prefill]);

  return (
    <button
      onClick={openCalendly}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </button>
  );
}
