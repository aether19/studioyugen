import { useEffect } from 'react';
import WorkHeaderSection from '@/sections/work/WorkHeaderSection';
import WorkGridSection from '@/sections/work/WorkGridSection';
import CTASection from '@/sections/home/CTASection';

export default function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <WorkHeaderSection />
      <WorkGridSection />
      <CTASection
        headline="Ready to start your project?"
        highlightText="Let's talk."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
