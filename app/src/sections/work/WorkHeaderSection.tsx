import Container from '@/components/layout/Container';
import TextReveal from '@/components/animation/TextReveal';

export default function WorkHeaderSection() {
  return (
    <section className="pt-[72px] pb-16 bg-background border-b border-foreground/[0.08]">
      <Container>
        <div className="flex items-center gap-3 mt-12 mb-6">
          <div className="w-5 h-px bg-accent" />
          <span className="font-body text-label text-accent tracking-widest">Portfolio</span>
        </div>
        <h1 className="font-display text-display-l text-foreground max-w-3xl">
          <TextReveal text="Our Work" delay={200} />
        </h1>
        <p className="mt-6 font-body text-body text-foreground/30 max-w-sm">
          A selection of projects we&apos;re proud to have worked on.
        </p>
      </Container>
    </section>
  );
}
