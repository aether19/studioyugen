import Container from '@/components/layout/Container';
import Badge from '@/components/shared/Badge';
import type { Project } from '@/types';
import { Link } from 'react-router-dom';
import { useCursor } from '@/context/CursorContext';

interface ProjectHeroSectionProps {
  project: Project;
}

export default function ProjectHeroSection({ project }: ProjectHeroSectionProps) {
  const { setCursorType } = useCursor();

  return (
    <section className="relative w-full h-[80vh] min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.client}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 pb-16">
        <Container>
          <div className="animate-fade-up">
            <p className="font-body text-body-sm text-white/70 mb-4">
              <Link
                to="/work"
                className="hover:text-white transition-colors duration-200"
                onMouseEnter={() => setCursorType('link')}
                onMouseLeave={() => setCursorType('default')}
              >
                Work
              </Link>
              {' / '}
              {project.title}
            </p>
            <h1 className="font-display text-display-l text-white mb-4">
              {project.title}
            </h1>
            <div className="flex gap-3 flex-wrap">
              <Badge variant="light">{project.industry}</Badge>
              {project.services.map((s) => (
                <Badge key={s} variant="light">{s}</Badge>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
