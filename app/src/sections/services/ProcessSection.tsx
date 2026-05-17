import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import { processSteps } from '@/data/process';

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-background border-b border-foreground/[0.08]">
      <Container>
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-accent" />
            <span className="font-body text-label text-accent tracking-widest">Our Process</span>
          </div>
          <h2 className="font-display text-display-s text-foreground">How we work</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.id} delay={i * 0.07}>
              <div className={`py-8 border-b border-foreground/[0.08] ${i < processSteps.length - 1 ? 'lg:border-b-0 lg:border-r lg:pr-8' : ''}`}>
                <span className="font-display text-display-m text-accent/40 block mb-5">
                  {step.number}
                </span>
                <h3 className="font-display text-h3 text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-body text-foreground/35">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
