import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import type { Project } from '@/types';

interface CardProps {
  project: Project;
  index: number;
  aspect: string;
  className?: string;
  titleSize?: string;
}

function ProjectCard({ project, index, aspect, className = '', titleSize = 'text-h3' }: CardProps) {
  return (
    <Link to={`/work/${project.slug}`} className={`group block ${className}`}>
      <div className={`${aspect} overflow-hidden bg-gray-100 relative`}>
        <img
          src={project.image}
          alt={project.client}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Index badge top-left */}
        <span className="absolute top-4 left-4 font-body text-label text-white/50 tracking-widest bg-black/20 backdrop-blur-sm px-2 py-1">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex items-center justify-between mt-4 pb-4 border-b border-foreground/[0.08]">
        <div>
          <span className="font-body text-label text-foreground/20 tracking-widest block mb-1">
            {project.industry}
          </span>
          <h3 className={`font-display ${titleSize} text-foreground group-hover:text-accent transition-colors duration-300`}>
            {project.client}
          </h3>
        </div>
        <div className="w-5 h-px bg-foreground/20 group-hover:bg-accent group-hover:w-10 transition-all duration-300 shrink-0 ml-4" />
      </div>
    </Link>
  );
}

export default function SelectedWorkSection() {
  return (
    <section className="py-24 lg:py-40 bg-background border-t border-foreground/[0.08]">
      <Container>

        {/* ── Header ── */}
        <ScrollReveal className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-accent" />
              <span className="font-body text-label text-accent tracking-widest">Our Recent Work</span>
            </div>
            <h2 className="font-display text-display-s text-foreground">Projects</h2>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:block font-display text-display-m text-foreground/[0.07] leading-none select-none">
              07
            </span>
            <Link
              to="/work"
              className="hidden sm:flex items-center gap-3 font-body text-label tracking-widest text-foreground/30 hover:text-foreground transition-colors duration-300 group"
            >
              <span>All Work</span>
              <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            </Link>
          </div>
        </ScrollReveal>

        {/* ── Row 1: tall portrait LEFT + two stacked RIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-3 mb-3">
          <ScrollReveal>
            <ProjectCard
              project={projects[0]}
              index={0}
              aspect="aspect-[3/4] lg:h-full lg:aspect-auto"
              titleSize="text-h2"
            />
          </ScrollReveal>

          <div className="flex flex-col gap-3">
            <ScrollReveal delay={0.08}>
              <ProjectCard
                project={projects[1]}
                index={1}
                aspect="aspect-[16/9]"
                titleSize="text-h3"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <ProjectCard
                project={projects[2]}
                index={2}
                aspect="aspect-[16/9]"
                titleSize="text-h3"
              />
            </ScrollReveal>
          </div>
        </div>

        {/* ── Row 2: Cinematic full-width strip ── */}
        <ScrollReveal className="mb-3">
          <Link to={`/work/${projects[3].slug}`} className="group block">
            <div className="w-full overflow-hidden bg-gray-100 relative" style={{ height: 'clamp(220px, 30vw, 480px)' }}>
              <img
                src={projects[3].image}
                alt={projects[3].client}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Floating label overlay */}
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="flex items-end justify-between w-full">
                  <div>
                    <span className="font-body text-label text-white/40 tracking-widest block mb-1">
                      04 / {projects[3].industry}
                    </span>
                    <h3 className="font-display text-h1 text-white group-hover:text-accent transition-colors duration-300">
                      {projects[3].client}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-white/40 group-hover:text-accent transition-colors duration-300">
                    <span className="font-body text-label tracking-widest hidden sm:block">
                      {projects[3].services.join(', ')}
                    </span>
                    <div className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* ── Row 3: Three columns, middle offset down ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <ScrollReveal delay={0}>
            <ProjectCard
              project={projects[4]}
              index={4}
              aspect="aspect-[3/4]"
              titleSize="text-h3"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="sm:mt-16">
            <ProjectCard
              project={projects[5]}
              index={5}
              aspect="aspect-[3/4]"
              titleSize="text-h3"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ProjectCard
              project={projects[6]}
              index={6}
              aspect="aspect-[3/4]"
              titleSize="text-h3"
            />
          </ScrollReveal>
        </div>

        {/* Mobile link */}
        <div className="mt-12 sm:hidden text-center">
          <Link
            to="/work"
            className="font-body text-label tracking-widest text-foreground/30 hover:text-foreground transition-colors duration-300"
          >
            View All Work
          </Link>
        </div>

      </Container>
    </section>
  );
}
