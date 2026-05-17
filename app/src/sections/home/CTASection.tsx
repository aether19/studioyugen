import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

interface CTASectionProps {
  headline: string;
  highlightText: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({ headline, highlightText, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="py-24 lg:py-40 bg-background border-t border-foreground/[0.08] relative overflow-hidden">
      {/* Ghost arrow */}
      <div
        className="absolute top-8 right-8 lg:right-16 font-display text-[clamp(80px,14vw,200px)] text-foreground/[0.03] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        ↗
      </div>

      <Container>
        <ScrollReveal type="fade-up" duration={0.8}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-px bg-accent" />
            <span className="font-body text-label text-accent tracking-widest">Start a Project</span>
          </div>
          <h2 className="font-display text-display-l text-foreground max-w-4xl">
            {headline}{' '}
            <Link
              to={buttonHref}
              className="italic text-foreground/30 hover:text-accent transition-colors duration-300 underline underline-offset-8 decoration-foreground/15 hover:decoration-accent"
            >
              {highlightText}
            </Link>
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fade" delay={0.2} duration={0.6}>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              to={buttonHref}
              className="group flex items-center gap-4 font-body text-label tracking-widest text-foreground border border-foreground/20 px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300"
            >
              <span>{buttonText}</span>
              <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            </Link>
            <a
              href="mailto:contact.studioyugen@gmail.com"
              className="font-body text-label tracking-widest text-foreground/20 hover:text-foreground/60 transition-colors duration-300"
            >
              contact.studioyugen@gmail.com
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
