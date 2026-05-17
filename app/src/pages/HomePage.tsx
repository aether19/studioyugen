import HeroSection from '@/sections/home/HeroSection';
import SelectedWorkSection from '@/sections/home/SelectedWorkSection';
import ServicesOverviewSection from '@/sections/home/ServicesOverviewSection';
import ManifestoSection from '@/sections/home/ManifestoSection';
import CTASection from '@/sections/home/CTASection';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <ServicesOverviewSection />
      <ManifestoSection />
      <CTASection
        headline="Have a project?"
        highlightText="Let's talk."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
