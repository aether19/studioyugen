import { useEffect } from 'react';
import ServicesHeaderSection from '@/sections/services/ServicesHeaderSection';
import ServiceSection from '@/sections/services/ServiceSection';
import PricingNoteSection from '@/sections/services/PricingNoteSection';
import ProcessSection from '@/sections/services/ProcessSection';
import CTASection from '@/sections/home/CTASection';
import { services } from '@/data/services';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesHeaderSection />
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          reversed={index % 2 !== 0}
          index={index}
        />
      ))}
      <PricingNoteSection />
      <ProcessSection />
      <CTASection
        headline="Ready to build something great?"
        highlightText="Let's talk."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
