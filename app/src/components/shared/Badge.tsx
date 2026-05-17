interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light';
}

export default function Badge({ children, className = '', variant = 'default' }: BadgeProps) {
  const base = 'inline-block border border-gray-300 rounded-pill px-4 py-1.5 text-label font-body';
  const colorClass = variant === 'light'
    ? 'border-white/30 text-white'
    : 'text-foreground hover:border-accent transition-colors duration-200';

  return (
    <span className={`${base} ${colorClass} ${className}`}>
      {children}
    </span>
  );
}
