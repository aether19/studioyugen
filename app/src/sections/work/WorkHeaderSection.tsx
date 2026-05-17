import Container from '@/components/layout/Container';
import TextReveal from '@/components/animation/TextReveal';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function WorkHeaderSection() {
  return (
    <section className="pt-48 pb-16 bg-background">
      <Container>
        <TextReveal text="Work" as="h1" className="font-display text-display-l text-foreground" />
        <ScrollReveal type="fade-up" delay={0.3}>
          <p className="mt-6 font-body text-body-lg text-gray-500 max-w-[600px]">
            A selection of projects we&apos;ve built for clients around the world.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
