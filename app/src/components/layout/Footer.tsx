import { Link } from 'react-router-dom';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-[#040404] border-t border-foreground/[0.08]">
      <Container>
        {/* Top CTA */}
        <div className="py-20 border-b border-foreground/[0.08]">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-px bg-accent" />
                <span className="font-body text-label text-accent tracking-widest">Get In Touch</span>
              </div>
              <h2 className="font-display text-display-s text-foreground">
                Have a project?{' '}
                <Link
                  to="/contact"
                  className="italic text-foreground/30 hover:text-accent transition-colors duration-300 underline underline-offset-8 decoration-foreground/10"
                >
                  Let&apos;s talk.
                </Link>
              </h2>
            </div>
            <Link
              to="/contact"
              className="group flex items-center gap-4 font-body text-label tracking-widest text-foreground border border-foreground/15 px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300 shrink-0"
            >
              <span>Start Project</span>
              <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-foreground/[0.08]">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="font-display text-h3 text-foreground hover:text-accent transition-colors duration-300">
              Yugen
            </Link>
            <p className="mt-4 font-body text-body-sm text-foreground/25 leading-relaxed max-w-[200px]">
              Boutique creative studio. Branding, web design & development.
            </p>
          </div>

          <div>
            <h4 className="font-body text-label text-foreground/15 tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="font-body text-body-sm text-foreground/30 hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-label text-foreground/15 tracking-widest mb-6">Services</h4>
            <ul className="space-y-4">
              {['Branding', 'Web Design', 'Development'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="font-body text-body-sm text-foreground/30 hover:text-foreground transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-label text-foreground/15 tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact.studioyugen@gmail.com"
                  className="font-body text-body-sm text-foreground/30 hover:text-foreground transition-colors duration-200"
                >
                  contact.studioyugen@gmail.com
                </a>
              </li>
              <li className="font-body text-body-sm text-foreground/15">
                USA · Canada · Australia · Algeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-label text-foreground/15 tracking-widest">
            © 2026 Yugen Studio. All rights reserved.
          </p>
          <p className="font-body text-label text-foreground/15 tracking-widest">
            Crafted with precision.
          </p>
        </div>
      </Container>
    </footer>
  );
}
