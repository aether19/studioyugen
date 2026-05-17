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
    <section className="py-24 lg:py-32 bg-background border-t border-foreground/[0.08]">
      <Container>
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-accent" />
            <span className="font-body text-label text-accent tracking-widest">Our Values</span>
          </div>
          <h2 className="font-display text-display-s text-foreground">What we believe in</h2>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-0" staggerDelay={0.1}>
          {values.map((value, i) => {
            const Icon = iconMap[value.icon];
            return (
              <div key={value.id} data-stagger-child className={`py-10 border-b border-foreground/[0.08] ${i % 2 === 0 ? 'md:border-r md:pr-12' : 'md:pl-12'}`}>
                {Icon && <Icon className="w-6 h-6 text-accent mb-5" />}
                <h3 className="font-display text-h2 text-foreground mb-3">{value.title}</h3>
                <p className="font-body text-body text-foreground/35">{value.description}</p>
              </div>
            );
          })}
        </StaggerReveal>
      </Container>
    </section>
  );
}
