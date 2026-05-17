import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  external?: boolean;
}

export default function TextLink({ href, children, showArrow = true, className = '', external = false }: TextLinkProps) {
  const base = 'group inline-flex items-center gap-2 text-accent font-body text-body transition-colors duration-200 hover:text-accent-light';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <Link to={href} className={`${base} ${className}`}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}
