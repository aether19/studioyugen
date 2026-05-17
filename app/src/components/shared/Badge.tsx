interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light';
}

export default function Badge({ children, className = '', variant = 'default' }: BadgeProps) {
  const base = 'inline-block border px-3 py-1.5 font-body text-label tracking-widest';
  const colorClass = variant === 'light'
    ? 'border-white/20 text-white/60'
    : 'border-foreground/10 text-foreground/30';

  return (
    <span className={`${base} ${colorClass} ${className}`}>
      {children}
    </span>
  );
}
