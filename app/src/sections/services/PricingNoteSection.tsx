import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function PricingNoteSection() {
  return (
    <section className="py-20 lg:py-24 bg-background border-t border-b border-gray-200">
      <Container narrow className="text-center">
        <ScrollReveal type="fade-up">
          <h3 className="font-display text-display-s text-foreground mb-4">
            Projects start at $400.
          </h3>
        </ScrollReveal>
        <ScrollReveal type="fade" delay={0.1}>
          <p className="font-body text-body text-gray-500">
            Every project is unique. We&apos;ll provide a detailed quote after understanding your needs.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
