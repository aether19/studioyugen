import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function StudioStorySection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal type="fade-up">
            <div>
              <p className="text-label font-body text-accent mb-6">Our Story</p>
              <h2 className="font-display text-h1 text-foreground mb-6">
                Founder-led. Purpose-built. Always personal.
              </h2>
              <div className="space-y-4">
                <p className="font-body text-body text-gray-500">
                  Yugen Studio was founded on a simple belief: every business deserves a brand and website that reflects its true value. No shortcuts. No cookie-cutter solutions. Just thoughtful design that works.
                </p>
                <p className="font-body text-body text-gray-500">
                  As a founder-led studio, every project is handled personally — from the first discovery call to the final launch. You&apos;ll never be passed to a junior designer or left wondering who&apos;s actually doing the work.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.15}>
            <div className="overflow-hidden rounded-lg">
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
