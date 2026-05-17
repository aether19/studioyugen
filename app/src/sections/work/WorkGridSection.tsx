import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function WorkGridSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <Container>
        <div>
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.04}>
              <Link
                to={`/work/${project.slug}`}
                className="group grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 py-12 border-b border-foreground/[0.08] hover:border-foreground/20 transition-colors duration-300 items-center"
              >
                {/* Image */}
                <div className={`aspect-[16/10] overflow-hidden bg-gray-100 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Info */}
                <div className={`flex flex-col justify-center gap-5 ${i % 2 === 1 ? 'md:order-1' : ''} md:px-8`}>
                  <span className="font-body text-label text-foreground/20 tracking-widest">
                    {String(i + 1).padStart(2, '0')} — {project.info.year || '2024'}
                  </span>
                  <h2 className="font-display text-h1 text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.client}
                  </h2>
                  <p className="font-body text-body text-foreground/30 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {[project.industry, ...project.services].map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-label tracking-widest text-foreground/25 border border-foreground/[0.08] px-3 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-foreground/25 group-hover:text-accent transition-colors duration-300">
                    <span className="font-body text-label tracking-widest">View Project</span>
                    <span className="w-8 h-px bg-current group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
