import Container from '@/components/layout/Container';
import TextReveal from '@/components/animation/TextReveal';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function AboutHeaderSection() {
  return (
    <section className="pt-48 pb-24 bg-background">
      <Container>
        <TextReveal text="About" as="h1" className="font-display text-display-l text-foreground" />
        <ScrollReveal type="fade-up" delay={0.2}>
          <p className="mt-8 font-body text-body-lg text-gray-500 max-w-[700px]">
            Yugen is a boutique creative studio built for local businesses that deserve better than templates. We craft brands and websites with intention, precision, and a personal touch.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
