import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function WorkGridSection() {
  return (
    <section className="py-8 lg:py-16 bg-background">
      <Container>
        <div>
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.04}>
              <Link
                to={`/work/${project.slug}`}
                className="group flex items-center gap-6 py-7 border-b border-foreground/[0.08] hover:border-foreground/20 transition-colors duration-300"
              >
                {/* Small thumbnail only */}
                <div className="w-20 h-14 shrink-0 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Index + Title */}
                <div className="flex-1 min-w-0">
                  <span className="font-body text-label text-foreground/20 tracking-widest block mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-h2 text-foreground group-hover:text-accent transition-colors duration-300 truncate">
                    {project.client}
                  </h2>
                </div>

                {/* Tags — hidden on small */}
                <div className="hidden md:flex items-center gap-2 shrink-0">
                  {[project.industry, ...project.services].map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-label tracking-widest text-foreground/20 border border-foreground/[0.08] px-3 py-1.5 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Year */}
                <span className="font-body text-label text-foreground/20 tracking-widest shrink-0 hidden sm:block">
                  {project.info?.year}
                </span>

                {/* Arrow */}
                <div className="w-6 h-px bg-foreground/20 group-hover:bg-accent group-hover:w-12 transition-all duration-300 shrink-0" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
