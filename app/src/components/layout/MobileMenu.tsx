import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-menu bg-[#080808] flex flex-col transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="h-[72px]" />

      <nav className="flex-1 flex flex-col justify-center px-8">
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className="group flex items-baseline justify-between py-6 border-b border-foreground/10 hover:border-accent/30 transition-colors duration-300"
          >
            <span className="font-display text-display-s text-foreground group-hover:text-accent transition-colors duration-300">
              {link.label}
            </span>
            <span className="font-body text-label text-foreground/20 tracking-widest">
              0{i + 1}
            </span>
          </Link>
        ))}
      </nav>

      <div className="px-8 pb-12 border-t border-foreground/10 pt-8">
        <p className="font-body text-label text-foreground/20 tracking-widest">
          contact.studioyugen@gmail.com
        </p>
      </div>
    </div>
  );
}
