import { Check } from 'lucide-react';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import type { Service } from '@/types';
import { Link } from 'react-router-dom';
import { useCursor } from '@/context/CursorContext';

interface ServiceSectionProps {
  service: Service;
  reversed?: boolean;
  index: number;
}

export default function ServiceSection({ service, reversed = false }: ServiceSectionProps) {
  const { setCursorType } = useCursor();

  const textContent = (
    <div className={reversed ? 'lg:pl-12' : 'lg:pr-12'}>
      <span className="font-display text-display-s text-gray-300 block mb-4">
        {service.number}
      </span>
      <h2 className="font-display text-h1 text-foreground mb-6">
        {service.title}
      </h2>
      <p className="font-body text-body-lg text-gray-500 mb-8">
        {service.description}
      </p>
      <ul className="space-y-3 mb-10">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="font-body text-body text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="inline-block bg-accent text-white font-body text-body px-8 py-4 rounded-pill hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
        onMouseEnter={() => setCursorType('link')}
        onMouseLeave={() => setCursorType('default')}
      >
        {service.ctaText}
      </Link>
    </div>
  );

  const imageContent = (
    <div className="overflow-hidden rounded-lg">
      <img
        src={service.image}
        alt={service.title}
        className="w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-500"
      />
    </div>
  );

  return (
    <section id={service.anchor} className="py-20 lg:py-28 bg-background">
      <Container>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}>
          <ScrollReveal type="fade-up" className={reversed ? 'lg:[direction:ltr]' : ''}>
            {reversed ? imageContent : textContent}
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.15} className={reversed ? 'lg:[direction:ltr]' : ''}>
            {reversed ? textContent : imageContent}
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
