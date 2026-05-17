import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Badge from '@/components/shared/Badge';
import { projects } from '@/data/projects';
import { useCursor } from '@/context/CursorContext';
import { useIsDesktop } from '@/hooks/useMediaQuery';
import StaggerReveal from '@/components/animation/StaggerReveal';

export default function WorkGridSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { setCursorType } = useCursor();
  const isDesktop = useIsDesktop();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent, index: number) => {
      const row = rowRefs.current[index];
      if (!row) return;
      const rect = row.getBoundingClientRect();
      setMouseY(e.clientY - rect.top);
    },
    []
  );

  return (
    <section className="pb-24 lg:pb-32 bg-background">
      <Container>
        <StaggerReveal staggerDelay={0.08}>
          {projects.map((project, index) => (
            <div key={project.id} data-stagger-child>
              <div
                ref={(el) => { rowRefs.current[index] = el; }}
                className="relative border-t border-gray-200"
                onMouseEnter={() => {
                  setHoveredProject(project.id);
                  if (isDesktop) setCursorType('view');
                }}
                onMouseLeave={() => {
                  setHoveredProject(null);
                  setCursorType('default');
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-8 lg:py-10 group"
                >
                  {/* Left */}
                  <div className="flex items-center gap-6">
                    <span className="font-display text-h4 text-gray-300 w-8">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-h2 text-foreground group-hover:translate-x-2.5 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-4 mt-4 sm:mt-0 pl-14 sm:pl-0">
                    <div className="flex gap-2 flex-wrap">
                      <Badge>{project.industry}</Badge>
                      {project.services.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 hidden sm:block" />
                  </div>
                </Link>

                {/* Hover Preview */}
                {isDesktop && hoveredProject === project.id && (
                  <div
                    className="absolute right-[100px] top-0 z-10 pointer-events-none transition-opacity duration-300"
                    style={{
                      transform: `translateY(${Math.max(0, Math.min(mouseY - 120, 0))}px)`,
                    }}
                  >
                    <div className="w-[320px] h-[240px] rounded-lg overflow-hidden shadow-xl">
                      <img
                        src={project.image}
                        alt={project.client}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div data-stagger-child className="border-t border-gray-200" />
        </StaggerReveal>
      </Container>
    </section>
  );
}
