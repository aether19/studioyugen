import { Link } from 'react-router-dom';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  external?: boolean;
}

export default function TextLink({ href, children, showArrow = true, className = '', external = false }: TextLinkProps) {
  const base = 'group inline-flex items-center gap-3 font-body text-label tracking-widest text-foreground/40 hover:text-foreground transition-colors duration-300';

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={`${base} ${className}`}>
      {content}
    </Link>
  );
}
