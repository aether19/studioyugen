import Container from '@/components/layout/Container';
import TextReveal from '@/components/animation/TextReveal';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function ServicesHeaderSection() {
  return (
    <section className="pt-48 pb-24 bg-background">
      <Container>
        <ScrollReveal type="fade">
          <p className="text-label font-body text-accent mb-6">Our Services</p>
        </ScrollReveal>
        <TextReveal text="What we do best." as="h1" className="font-display text-display-l text-foreground" />
        <ScrollReveal type="fade-up" delay={0.3}>
          <p className="mt-6 font-body text-body-lg text-gray-500 max-w-[600px]">
            From brand strategy to launch-ready websites, we handle every step with precision and care.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
