import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function ManifestoSection() {
  return (
    <section className="py-32 lg:py-48 bg-background border-t border-foreground/[0.08] overflow-hidden relative">
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[clamp(80px,15vw,220px)] text-foreground/[0.025] whitespace-nowrap">
          YUGEN STUDIO
        </span>
      </div>

      <Container narrow>
        <ScrollReveal type="fade-up" duration={1}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-10 h-px bg-foreground/10" />
            <p className="font-body text-label text-foreground/30 tracking-widest">Manifesto</p>
            <div className="w-10 h-px bg-foreground/10" />
          </div>
          <blockquote className="font-display text-display-m text-foreground text-center leading-[1.05]">
            &ldquo;Most local businesses have great services and forgettable websites.{' '}
            <em className="text-foreground/40">We fix that.</em>&rdquo;
          </blockquote>
        </ScrollReveal>
        <ScrollReveal type="fade" delay={0.3} duration={0.8}>
          <div className="mt-14 flex items-center justify-center gap-5">
            <div className="w-14 h-px bg-foreground/10" />
            <p className="font-body text-label text-foreground/20 tracking-widest">Yugen Studio</p>
            <div className="w-14 h-px bg-foreground/10" />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
