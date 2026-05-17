import { useState } from 'react';
import Container from '@/components/layout/Container';
import StaggerReveal from '@/components/animation/StaggerReveal';
import ScrollReveal from '@/components/animation/ScrollReveal';
import { submitContactForm } from '@/lib/contact';
import { toast } from 'sonner';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    needs: '',
    budget: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitContactForm(formData);
      toast.success('Thank you! We received your inquiry and will be in touch soon.');
      setFormData({ name: '', email: '', business: '', needs: '', budget: '' });
    } catch (error: any) {
      console.error('Form submission error:', error);

      const errorMessage = error?.message || '';
      if (errorMessage.includes('Supabase Configuration Required')) {
        toast.error('Supabase not configured. Check console for setup instructions.');
      } else if (errorMessage.includes('Cannot connect to Supabase')) {
        toast.error('Cannot connect to Supabase. Check your environment variables.');
      } else {
        toast.error('Failed to send your inquiry. Please try again or email us directly.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "w-full bg-transparent border-0 border-b border-foreground/10 py-4 font-body text-body text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent transition-colors duration-300";
  const labelClass = "block font-body text-label text-foreground/25 tracking-widest mb-3";

  return (
    <section className="py-16 lg:py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <StaggerReveal className="lg:col-span-3" staggerDelay={0.08}>
            <form onSubmit={handleSubmit}>
              <div data-stagger-child className="mb-10">
                <label className={labelClass}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputClass}
                  required
                />
              </div>

              <div data-stagger-child className="mb-10">
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                  required
                />
              </div>

              <div data-stagger-child className="mb-10">
                <label className={labelClass}>Business Name</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className={inputClass}
                />
              </div>

              <div data-stagger-child className="mb-10">
                <label className={labelClass}>What do you need?</label>
                <textarea
                  name="needs"
                  value={formData.needs}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              <div data-stagger-child className="mb-12">
                <label className={labelClass}>Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-foreground/10 py-4 font-body text-body focus:outline-none focus:border-accent transition-colors duration-300 appearance-none"
                  style={{
                    backgroundColor: '#080808',
                    color: formData.budget ? '#e8e2d8' : 'rgba(232,226,216,0.2)',
                    colorScheme: 'dark',
                  }}
                >
                  <option value="" disabled style={{ backgroundColor: '#111111', color: 'rgba(232,226,216,0.4)' }}>
                    Select a range...
                  </option>
                  <option value="$1,500 - $5,000" style={{ backgroundColor: '#111111', color: '#e8e2d8' }}>$1,500 - $5,000</option>
                  <option value="$5,000 - $10,000" style={{ backgroundColor: '#111111', color: '#e8e2d8' }}>$5,000 - $10,000</option>
                  <option value="$10,000+" style={{ backgroundColor: '#111111', color: '#e8e2d8' }}>$10,000+</option>
                  <option value="Not sure yet" style={{ backgroundColor: '#111111', color: '#e8e2d8' }}>Not sure yet</option>
                </select>
              </div>

              <div data-stagger-child>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex items-center gap-4 font-body text-label tracking-widest text-foreground border border-foreground/20 px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                  <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
                </button>
              </div>
            </form>
          </StaggerReveal>

          {/* Info */}
          <ScrollReveal type="fade-up" delay={0.2} className="lg:col-span-2">
            <div className="space-y-12 pt-0 lg:pt-2">
              <div>
                <p className="font-body text-label text-accent tracking-widest mb-3">Email</p>
                <a
                  href="mailto:contact.studioyugen@gmail.com"
                  className="font-body text-body text-foreground/60 hover:text-foreground transition-colors duration-200"
                >
                  contact.studioyugen@gmail.com
                </a>
              </div>
              <div>
                <p className="font-body text-label text-accent tracking-widest mb-3">Response Time</p>
                <p className="font-body text-body text-foreground/60">We reply within 24 hours.</p>
              </div>
              <div>
                <p className="font-body text-label text-accent tracking-widest mb-4">Locations</p>
                <ul className="space-y-2">
                  {['Europe', 'North America', 'Australia', 'GCC'].map((loc) => (
                    <li key={loc} className="font-body text-body text-foreground/40">{loc}</li>
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
