import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import StaggerReveal from '@/components/animation/StaggerReveal';
import { processSteps } from '@/data/process';

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <Container>
        <ScrollReveal type="fade">
          <p className="text-label font-body text-accent mb-8">Our Process</p>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.1}>
          <h2 className="font-display text-display-s text-foreground mb-16">
            How we work
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {processSteps.map((step) => (
            <div key={step.id} data-stagger-child>
              <span className="font-display text-display-m text-accent block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-h3 text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-body text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
