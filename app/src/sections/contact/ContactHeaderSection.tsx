import Container from '@/components/layout/Container';
import TextReveal from '@/components/animation/TextReveal';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function ContactHeaderSection() {
  return (
    <section className="pt-48 pb-20 bg-background">
      <Container>
        <TextReveal text="Contact" as="h1" className="font-display text-display-l text-foreground" />
        <ScrollReveal type="fade-up" delay={0.2}>
          <p className="mt-6 font-body text-body-lg text-gray-500">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
