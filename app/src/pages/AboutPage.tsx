import { useEffect } from 'react';
import AboutHeaderSection from '@/sections/about/AboutHeaderSection';
import StudioStorySection from '@/sections/about/StudioStorySection';
import ValuesSection from '@/sections/about/ValuesSection';
import CTASection from '@/sections/home/CTASection';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHeaderSection />
      <StudioStorySection />
      <ValuesSection />
      <CTASection
        headline="Let's build something together."
        highlightText="Let's talk."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
