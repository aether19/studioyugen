import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function StudioStorySection() {
  return (
    <section className="py-16 lg:py-24 bg-background border-b border-foreground/[0.08]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal type="fade-up">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-px bg-accent" />
                <span className="font-body text-label text-accent tracking-widest">Our Story</span>
              </div>
              <h2 className="font-display text-h1 text-foreground mb-6">
                Founder-led. Purpose-built. Always personal.
              </h2>
              <div className="space-y-5">
                <p className="font-body text-body text-foreground/40">
                  Yugen Studio was founded on a simple belief: every business deserves a brand and website that reflects its true value. No shortcuts. No cookie-cutter solutions. Just thoughtful design that works.
                </p>
                <p className="font-body text-body text-foreground/40">
                  As a founder-led studio, every project is handled personally — from the first discovery call to the final launch. You&apos;ll never be passed to a junior designer or left wondering who&apos;s actually doing the work.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.15}>
            <div className="overflow-hidden">
              <img
                src="/assets/images/about/about_portrait.png"
                alt="Studio founder at work"
                className="w-full aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
