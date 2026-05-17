import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import MobileMenu from './MobileMenu';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
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
        className={`fixed top-0 left-0 w-full z-nav transition-all duration-500 ${
          scrolled
            ? 'border-b border-foreground/[0.08] bg-[#080808]/92 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <Container className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-h3 text-foreground tracking-tight select-none hover:text-accent transition-colors duration-300"
          >
            Yugen
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-body text-label text-foreground/40 hover:text-foreground transition-colors duration-300 tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="font-body text-label text-foreground/40 border border-foreground/20 px-5 py-2.5 hover:border-accent hover:text-accent transition-all duration-300 tracking-widest"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-end gap-[6px] z-[1001]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-foreground transition-all duration-300 ${
                menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'
              }`}
            />
            <span
              className={`block h-px bg-foreground transition-all duration-300 ${
                menuOpen ? 'w-6 opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`block h-px bg-foreground transition-all duration-300 ${
                menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'
              }`}
            />
          </button>
        </Container>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
