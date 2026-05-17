import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function ManifestoSection() {
  return (
    <section className="py-32 lg:py-40 bg-background">
      <Container narrow>
        <ScrollReveal type="fade-up" duration={1}>
          <blockquote className="font-display text-display-m text-foreground text-center leading-[1.1]">
            &ldquo;Most local businesses have great services and forgettable websites. We fix that.&rdquo;
          </blockquote>
        </ScrollReveal>
        <ScrollReveal type="fade" delay={0.2} duration={0.6}>
          <p className="mt-10 font-body text-body-lg text-gray-400 text-center">
            — Yugen Studio
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
