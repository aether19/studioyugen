import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import { useCursor } from '@/context/CursorContext';

interface CTASectionProps {
  headline: string;
  highlightText: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({ headline, highlightText, buttonText, buttonHref }: CTASectionProps) {
  const { setCursorType } = useCursor();

  return (
    <section className="py-24 lg:py-32 bg-background border-t border-gray-200">
      <Container className="text-center">
        <ScrollReveal type="fade-up" duration={0.8}>
          <h2 className="font-display text-display-l text-foreground">
            {headline}{' '}
            <Link
              to={buttonHref}
              className="italic underline underline-offset-8 decoration-1 hover:text-accent transition-colors duration-200"
              onMouseEnter={() => setCursorType('link')}
              onMouseLeave={() => setCursorType('default')}
            >
              {highlightText}
            </Link>
          </h2>
        </ScrollReveal>
        <ScrollReveal type="fade" delay={0.2} duration={0.6}>
          <Link
            to={buttonHref}
            className="inline-block mt-10 bg-accent text-white font-body text-body-lg px-12 py-4 rounded-pill hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
            onMouseEnter={() => setCursorType('link')}
            onMouseLeave={() => setCursorType('default')}
          >
            {buttonText}
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
