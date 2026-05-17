import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import StaggerReveal from '@/components/animation/StaggerReveal';
import TextLink from '@/components/shared/TextLink';
import { serviceOverview } from '@/data/services';

export default function ServicesOverviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-gray-200">
      <Container>
        <ScrollReveal>
          <p className="text-label font-body text-accent mb-10">What We Do</p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16" staggerDelay={0.15}>
          {serviceOverview.map((service) => (
            <div key={service.id} data-stagger-child>
              <span className="font-display text-display-s text-gray-300 block mb-4">
                {service.number}
              </span>
              <h3 className="font-display text-h2 text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-body text-body text-gray-500 mb-6">
                {service.description}
              </p>
              <TextLink href="/services" showArrow>
                Learn More
              </TextLink>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
