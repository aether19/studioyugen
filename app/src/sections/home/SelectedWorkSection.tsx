import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function SelectedWorkSection() {
  return (
    <section className="py-24 lg:py-40 bg-background border-t border-foreground/[0.08]">
      <Container>

        {/* Header */}
        <ScrollReveal className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-accent" />
              <span className="font-body text-label text-accent tracking-widest">Our Recent Work</span>
            </div>
            <h2 className="font-display text-display-s text-foreground">Projects</h2>
          </div>
          <Link
            to="/work"
            className="hidden sm:flex items-center gap-3 font-body text-label tracking-widest text-foreground/30 hover:text-foreground transition-colors duration-300 group"
          >
            <span>All Work</span>
            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
          </Link>
        </ScrollReveal>

        {/* Full width — #1 */}
        <ScrollReveal className="mb-3">
          <Link to={`/work/${projects[0].slug}`} className="group block">
            <div className="aspect-[16/8] overflow-hidden bg-gray-100">
              <img
                src={projects[0].image}
                alt={projects[0].client}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-end justify-between mt-5 pb-5 border-b border-foreground/[0.08]">
              <div>
                <span className="font-body text-label text-foreground/20 tracking-widest block mb-1">
                  01 / {projects[0].industry}
                </span>
                <h3 className="font-display text-h1 text-foreground group-hover:text-accent transition-colors duration-300">
                  {projects[0].client}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-foreground/30 group-hover:text-accent transition-colors duration-300">
                <span className="font-body text-label tracking-widest hidden sm:block">
                  {projects[0].services.join(', ')}
                </span>
                <div className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* 2-column — #2 #3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {projects.slice(1, 3).map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <Link to={`/work/${project.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-end justify-between mt-5 pb-5 border-b border-foreground/[0.08]">
                  <div>
                    <span className="font-body text-label text-foreground/20 tracking-widest block mb-1">
                      0{i + 2} / {project.industry}
                    </span>
                    <h3 className="font-display text-h2 text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.client}
                    </h3>
                  </div>
                  <div className="w-6 h-px bg-foreground/20 group-hover:bg-accent group-hover:w-12 transition-all duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* 3-column — #4 #5 #6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {projects.slice(3, 6).map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <Link to={`/work/${project.slug}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-end justify-between mt-5 pb-5 border-b border-foreground/[0.08]">
                  <div>
                    <span className="font-body text-label text-foreground/20 tracking-widest block mb-1">
                      0{i + 4} / {project.industry}
                    </span>
                    <h3 className="font-display text-h3 text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.client}
                    </h3>
                  </div>
                  <div className="w-5 h-px bg-foreground/20 group-hover:bg-accent group-hover:w-8 transition-all duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Full width — #7 Beaver Trap */}
        <ScrollReveal>
          <Link to={`/work/${projects[6].slug}`} className="group block">
            <div className="aspect-[16/8] overflow-hidden bg-gray-100">
              <img
                src={projects[6].image}
                alt={projects[6].client}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-end justify-between mt-5 pb-5 border-b border-foreground/[0.08]">
              <div>
                <span className="font-body text-label text-foreground/20 tracking-widest block mb-1">
                  07 / {projects[6].industry}
                </span>
                <h3 className="font-display text-h1 text-foreground group-hover:text-accent transition-colors duration-300">
                  {projects[6].client}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-foreground/30 group-hover:text-accent transition-colors duration-300">
                <span className="font-body text-label tracking-widest hidden sm:block">
                  {projects[6].services.join(', ')}
                </span>
                <div className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
              </div>
            </div>
          </Link>
        </ScrollReveal>

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
