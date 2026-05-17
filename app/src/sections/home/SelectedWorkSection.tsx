import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';

// Show only first 6 on landing page
const recentProjects = projects.slice(0, 6);

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

        {/* Top row: large left + stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-3 mb-3">
          {/* Featured large */}
          <ScrollReveal>
            <Link to={`/work/${recentProjects[0].slug}`} className="group block h-full">
              <div className="aspect-[4/3] lg:h-[520px] lg:aspect-auto overflow-hidden bg-gray-100">
                <img
                  src={recentProjects[0].image}
                  alt={recentProjects[0].client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-end justify-between mt-4 pb-4 border-b border-foreground/[0.08]">
                <div>
                  <span className="font-body text-label text-foreground/20 tracking-widest block mb-1">
                    01 / {recentProjects[0].industry}
                  </span>
                  <h3 className="font-display text-h1 text-foreground group-hover:text-accent transition-colors duration-300">
                    {recentProjects[0].client}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-foreground/30 group-hover:text-accent transition-colors duration-300">
                  <span className="font-body text-label tracking-widest hidden sm:block">
                    {recentProjects[0].services.join(', ')}
                  </span>
                  <div className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Right column: 2 stacked */}
          <div className="flex flex-col gap-3">
            {recentProjects.slice(1, 3).map((project, i) => (
              <ScrollReveal key={project.id} delay={(i + 1) * 0.07} className="flex-1">
                <Link to={`/work/${project.slug}`} className="group block h-full">
                  <div className="h-[248px] overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.client}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-end justify-between mt-4 pb-4 border-b border-foreground/[0.08]">
                    <div>
                      <span className="font-body text-label text-foreground/20 tracking-widest block mb-1">
                        0{i + 2} / {project.industry}
                      </span>
                      <h3 className="font-display text-h3 text-foreground group-hover:text-accent transition-colors duration-300">
                        {project.client}
                      </h3>
                    </div>
                    <div className="w-5 h-px bg-foreground/20 group-hover:bg-accent group-hover:w-9 transition-all duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom row: 3 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {recentProjects.slice(3, 6).map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.07}>
              <Link to={`/work/${project.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-end justify-between mt-4 pb-4 border-b border-foreground/[0.08]">
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
