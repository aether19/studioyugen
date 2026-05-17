import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import { Link } from 'react-router-dom';

export default function PricingNoteSection() {
  return (
    <section className="py-20 lg:py-24 bg-background border-t border-b border-foreground/[0.08]">
      <Container narrow className="text-center">
        <ScrollReveal type="fade-up">
          <h3 className="font-display text-display-s text-foreground mb-4">
            Projects start at $400.
          </h3>
        </ScrollReveal>
        <ScrollReveal type="fade" delay={0.1}>
          <p className="font-body text-body text-foreground/35 mb-8">
            Every project is unique. We&apos;ll provide a detailed quote after understanding your needs.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 font-body text-label tracking-widest text-foreground border border-foreground/20 px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300"
          >
            <span>Get a Quote</span>
            <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
