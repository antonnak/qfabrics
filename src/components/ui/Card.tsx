import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-background-elevated border border-border rounded-lg p-6',
        hover && 'transition-all duration-200 hover:border-border-hover hover:bg-[#262626]',
        className
      )}
    >
      {children}
    </div>
  );
}
