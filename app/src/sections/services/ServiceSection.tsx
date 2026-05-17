import { Check } from 'lucide-react';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import type { Service } from '@/types';
import { Link } from 'react-router-dom';

interface ServiceSectionProps {
  service: Service;
  reversed?: boolean;
  index: number;
}

export default function ServiceSection({ service, reversed = false }: ServiceSectionProps) {
  const textContent = (
    <div className={reversed ? 'lg:pl-12' : 'lg:pr-12'}>
      <span className="font-body text-label text-foreground/15 tracking-widest block mb-6">
        {service.number}
      </span>
      <h2 className="font-display text-h1 text-foreground mb-6">{service.title}</h2>
      <p className="font-body text-body-lg text-foreground/35 mb-8">{service.description}</p>
      <ul className="space-y-3 mb-10">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div className="w-3 h-px bg-accent flex-shrink-0" />
            <span className="font-body text-body text-foreground/60">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="group flex items-center gap-4 font-body text-label tracking-widest text-foreground border border-foreground/20 px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300 w-fit"
      >
        <span>{service.ctaText}</span>
        <span className="w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
      </Link>
    </div>
  );

  const imageContent = (
    <div className="overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-500"
      />
    </div>
  );

  return (
    <section id={service.anchor} className="py-20 lg:py-28 bg-background border-b border-foreground/[0.08]">
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
