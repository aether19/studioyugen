import { User, Zap, Star, TrendingUp } from 'lucide-react';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import StaggerReveal from '@/components/animation/StaggerReveal';
import { values } from '@/data/values';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  Zap,
  Star,
  TrendingUp,
};

export default function ValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-gray-200">
      <Container>
        <ScrollReveal type="fade">
          <p className="text-label font-body text-accent mb-8">Our Values</p>
        </ScrollReveal>
        <ScrollReveal type="fade-up" delay={0.1}>
          <h2 className="font-display text-display-s text-foreground mb-16">
            What we believe in
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-12" staggerDelay={0.1}>
          {values.map((value) => {
            const Icon = iconMap[value.icon];
            return (
              <div key={value.id} data-stagger-child>
                {Icon && <Icon className="w-12 h-12 text-accent mb-5" />}
                <h3 className="font-display text-h3 text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-body text-gray-500">
                  {value.description}
                </p>
              </div>
            );
          })}
        </StaggerReveal>
      </Container>
    </section>
  );
}
