import Container from '@/components/layout/Container';
import TextReveal from '@/components/animation/TextReveal';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function AboutHeaderSection() {
  return (
    <section className="pt-[72px] pb-16 bg-background border-b border-foreground/[0.08]">
      <Container>
        <div className="flex items-center gap-3 mt-12 mb-6">
          <div className="w-5 h-px bg-accent" />
          <span className="font-body text-label text-accent tracking-widest">About Us</span>
        </div>
        <TextReveal text="About" as="h1" className="font-display text-display-l text-foreground" />
        <ScrollReveal type="fade-up" delay={0.2}>
          <p className="mt-8 font-body text-body-lg text-foreground/30 max-w-[700px]">
            Yugen is a boutique creative studio built for local businesses that deserve better than templates. We craft brands and websites with intention, precision, and a personal touch.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
