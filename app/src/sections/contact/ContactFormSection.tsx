import { useState } from 'react';
import Container from '@/components/layout/Container';
import StaggerReveal from '@/components/animation/StaggerReveal';
import ScrollReveal from '@/components/animation/ScrollReveal';
import { useCursor } from '@/context/CursorContext';

export default function ContactFormSection() {
  const { setCursorType } = useCursor();
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    needs: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project Inquiry from ${formData.name} - ${formData.business}`;
    const body = `Name: ${formData.name}\nBusiness: ${formData.business}\nBudget: ${formData.budget}\n\nWhat I need:\n${formData.needs}`;
    window.location.href = `mailto:contact.studioyugen@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="pb-24 lg:pb-32 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <StaggerReveal className="lg:col-span-3" staggerDelay={0.08}>
            <form onSubmit={handleSubmit}>
              <div data-stagger-child className="mb-8">
                <label className="block text-label font-body text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-0 border-b border-gray-200 py-4 font-body text-body text-foreground placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors duration-300"
                  required
                />
              </div>

              <div data-stagger-child className="mb-8">
                <label className="block text-label font-body text-gray-400 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className="w-full bg-transparent border-0 border-b border-gray-200 py-4 font-body text-body text-foreground placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>

              <div data-stagger-child className="mb-8">
                <label className="block text-label font-body text-gray-400 mb-2">
                  What do you need?
                </label>
                <textarea
                  name="needs"
                  value={formData.needs}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-gray-200 py-4 font-body text-body text-foreground placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  required
                />
              </div>

              <div data-stagger-child className="mb-10">
                <label className="block text-label font-body text-gray-400 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-gray-200 py-4 font-body text-body text-foreground focus:outline-none focus:border-accent transition-colors duration-300 cursor-pointer"
                >
                  <option value="" disabled>Select a range...</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div data-stagger-child>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-accent text-white font-body text-body px-10 py-4 rounded-pill hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
                  onMouseEnter={() => setCursorType('link')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  Send Message
                </button>
              </div>
            </form>
          </StaggerReveal>

          {/* Contact Info */}
          <ScrollReveal type="fade-up" delay={0.2} className="lg:col-span-2">
            <div className="space-y-12">
              <div>
                <p className="text-label font-body text-accent mb-2">Email</p>
                <a
                  href="mailto:contact.studioyugen@gmail.com"
                  className="font-body text-body text-foreground hover:text-accent transition-colors duration-200"
                  onMouseEnter={() => setCursorType('link')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  contact.studioyugen@gmail.com
                </a>
              </div>
              <div>
                <p className="text-label font-body text-accent mb-2">Response Time</p>
                <p className="font-body text-body text-foreground">We reply within 24 hours.</p>
              </div>
              <div>
                <p className="text-label font-body text-accent mb-3">Locations</p>
                <ul className="space-y-2">
                  {['USA', 'Canada', 'Australia', 'Algeria'].map((loc) => (
                    <li key={loc} className="font-body text-body text-foreground">
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
