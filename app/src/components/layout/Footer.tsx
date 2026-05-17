import { Link } from 'react-router-dom';
import Container from './Container';
import { useCursor } from '@/context/CursorContext';

export default function Footer() {
  const { setCursorType } = useCursor();

  return (
    <footer className="bg-dark text-white">
      <Container>
        {/* Top CTA */}
        <div className="pt-24 pb-20 border-b border-white/10">
          <h2 className="font-display text-display-s text-white">
            Have a project?{' '}
            <Link
              to="/contact"
              className="underline underline-offset-8 decoration-1 hover:text-accent transition-colors duration-200"
              onMouseEnter={() => setCursorType('link')}
              onMouseLeave={() => setCursorType('default')}
            >
              Let&apos;s talk.
            </Link>
          </h2>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Logo & Description */}
          <div>
            <Link
              to="/"
              className="font-display text-h3 text-white"
              onMouseEnter={() => setCursorType('link')}
              onMouseLeave={() => setCursorType('default')}
            >
              Yugen
            </Link>
            <p className="mt-4 font-body text-body-sm text-white/50 leading-relaxed">
              Boutique creative studio specializing in branding, web design, and development for businesses worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-label font-body text-white/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="font-body text-body text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    onMouseEnter={() => setCursorType('link')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-label font-body text-white/40 mb-6">Services</h4>
            <ul className="space-y-3">
              {['Branding', 'Web Design', 'Development'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="font-body text-body text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    onMouseEnter={() => setCursorType('link')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label font-body text-white/40 mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact.studioyugen@gmail.com"
                  className="font-body text-body text-white/70 hover:text-white transition-colors duration-200"
                  onMouseEnter={() => setCursorType('link')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  contact.studioyugen@gmail.com
                </a>
              </li>
              <li className="font-body text-body text-white/50">
                USA / Canada / Australia / Algeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-body-sm text-white/40">
            2026 Yugen Studio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
