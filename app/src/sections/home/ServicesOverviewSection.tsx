import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import { serviceOverview } from '@/data/services';
import { Link } from 'react-router-dom';

export default function ServicesOverviewSection() {
  return (
    <section className="py-24 lg:py-40 bg-background border-t border-foreground/[0.08]">
      <Container>
        <ScrollReveal className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-accent" />
              <span className="font-body text-label text-accent tracking-widest">What We Do</span>
            </div>
            <h2 className="font-display text-display-s text-foreground">Services</h2>
          </div>
          <Link
            to="/services"
            className="hidden sm:flex items-center gap-3 font-body text-label tracking-widest text-foreground/30 hover:text-foreground transition-colors duration-300 group"
          >
            <span>All Services</span>
            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
          </Link>
        </ScrollReveal>

        <div>
          {serviceOverview.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.07}>
              <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 border-b border-foreground/[0.08] hover:border-foreground/20 transition-colors duration-300 gap-4">
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-body text-label text-foreground/15 tracking-widest w-8 shrink-0">
                    {service.number}
                  </span>
                  <h3 className="font-display text-h1 text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="font-body text-body text-foreground/30 max-w-xs sm:text-right pl-14 sm:pl-0">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
