import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-menu bg-background flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className="font-display text-display-m text-foreground hover:text-accent transition-all duration-300"
            style={{
              transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        to="/contact"
        onClick={onClose}
        className="mt-12 bg-accent text-white font-body text-lg px-10 py-3 rounded-pill hover:bg-accent-light transition-all duration-300"
        style={{
          transitionDelay: isOpen ? '400ms' : '0ms',
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          opacity: isOpen ? 1 : 0,
        }}
      >
        Let&apos;s Talk
      </Link>
    </div>
  );
}
