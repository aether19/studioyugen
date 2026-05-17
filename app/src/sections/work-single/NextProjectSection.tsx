import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import type { Project } from '@/types';
import { useCursor } from '@/context/CursorContext';

interface NextProjectSectionProps {
  nextProject: Project;
}

export default function NextProjectSection({ nextProject }: NextProjectSectionProps) {
  const { setCursorType } = useCursor();

  return (
    <section className="py-20 lg:py-24 bg-background border-t border-gray-200">
      <Container>
        <ScrollReveal type="fade-up">
          <Link
            to={`/work/${nextProject.slug}`}
            className="flex items-center justify-between group"
            onMouseEnter={() => setCursorType('link')}
            onMouseLeave={() => setCursorType('default')}
          >
            <div>
              <p className="text-label font-body text-gray-400 mb-2">Next Project</p>
              <h2 className="font-display text-h1 text-foreground group-hover:text-accent transition-colors duration-300">
                {nextProject.title}
              </h2>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 group-hover:text-accent group-hover:translate-x-2 transition-all duration-300" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
