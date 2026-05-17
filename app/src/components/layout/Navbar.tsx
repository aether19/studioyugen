import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import MobileMenu from './MobileMenu';
import { useCursor } from '@/context/CursorContext';

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { setCursorType } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-nav transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <Container className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="font-display text-h3 text-foreground select-none"
            onMouseEnter={() => setCursorType('link')}
            onMouseLeave={() => setCursorType('default')}
          >
            Yugen
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative font-body text-body uppercase tracking-wider text-foreground hover:text-accent transition-colors duration-200 group"
                onMouseEnter={() => setCursorType('link')}
                onMouseLeave={() => setCursorType('default')}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-white font-body text-sm px-6 py-2.5 rounded-pill hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
              onMouseEnter={() => setCursorType('link')}
              onMouseLeave={() => setCursorType('default')}
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-[1001]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </Container>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
