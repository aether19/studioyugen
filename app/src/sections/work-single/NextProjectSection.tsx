import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import type { Project } from '@/types';

interface NextProjectSectionProps {
  nextProject: Project;
}

export default function NextProjectSection({ nextProject }: NextProjectSectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-background border-t border-foreground/[0.08]">
      <Container>
        <ScrollReveal type="fade-up">
          <Link
            to={`/work/${nextProject.slug}`}
            className="flex items-center justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-px bg-foreground/20 group-hover:bg-accent transition-colors duration-300" />
                <p className="font-body text-label text-foreground/20 tracking-widest">Next Project</p>
              </div>
              <h2 className="font-display text-h1 text-foreground group-hover:text-accent transition-colors duration-300">
                {nextProject.title}
              </h2>
            </div>
            <div className="w-12 h-px bg-foreground/20 group-hover:bg-accent group-hover:w-20 transition-all duration-300 hidden sm:block" />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}
