import { useEffect } from 'react';
import ContactHeaderSection from '@/sections/contact/ContactHeaderSection';
import ContactFormSection from '@/sections/contact/ContactFormSection';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactHeaderSection />
      <ContactFormSection />
    </>
  );
}
