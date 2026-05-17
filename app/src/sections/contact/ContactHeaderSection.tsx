import Container from '@/components/layout/Container';
import TextReveal from '@/components/animation/TextReveal';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function ContactHeaderSection() {
  return (
    <section className="pt-[72px] pb-16 bg-background border-b border-foreground/[0.08]">
      <Container>
        <div className="flex items-center gap-3 mt-12 mb-6">
          <div className="w-5 h-px bg-accent" />
          <span className="font-body text-label text-accent tracking-widest">Contact</span>
        </div>
        <TextReveal text="Contact" as="h1" className="font-display text-display-l text-foreground" />
        <ScrollReveal type="fade-up" delay={0.2}>
          <p className="mt-6 font-body text-body-lg text-foreground/30">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
