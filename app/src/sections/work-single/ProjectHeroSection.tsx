import Container from '@/components/layout/Container';
import type { Project } from '@/types';
import { Link } from 'react-router-dom';

interface ProjectHeroSectionProps {
  project: Project;
}

export default function ProjectHeroSection({ project }: ProjectHeroSectionProps) {
  return (
    <section className="relative w-full h-[85vh] min-h-[500px]">
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.client}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 pb-16">
        <Container>
          <div className="animate-fade-up">
            <p className="font-body text-label text-white/40 tracking-widest mb-6">
              <Link to="/work" className="hover:text-white transition-colors duration-200">
                Work
              </Link>
              {' / '}
              {project.title}
            </p>
            <h1 className="font-display text-display-l text-white mb-5">
              {project.title}
            </h1>
            <div className="flex gap-2 flex-wrap">
              {[project.industry, ...project.services].map((tag) => (
                <span
                  key={tag}
                  className="font-body text-label tracking-widest text-white/50 border border-white/20 px-3 py-1.5"
                >
                  {tag}
                </span>
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
