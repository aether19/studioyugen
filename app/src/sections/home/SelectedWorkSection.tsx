import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import StaggerReveal from '@/components/animation/StaggerReveal';
import Badge from '@/components/shared/Badge';
import TextLink from '@/components/shared/TextLink';
import { useCursor } from '@/context/CursorContext';

export default function SelectedWorkSection() {
  const { setCursorType } = useCursor();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <Container>
        {/* Header */}
        <ScrollReveal className="flex items-baseline justify-between mb-16">
          <h2 className="font-display text-display-s text-foreground">
            Selected Work
          </h2>
          <TextLink href="/work" showArrow>
            View All Work
          </TextLink>
        </ScrollReveal>

        {/* Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {projects.map((project) => (
            <div key={project.id} data-stagger-child>
              <Link
                to={`/work/${project.slug}`}
                className="group block"
                onMouseEnter={() => setCursorType('view')}
                onMouseLeave={() => setCursorType('default')}
              >
                {/* Image */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-5">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-h4 text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                  {project.client}
                </h3>
                <div className="flex gap-2 mb-2 flex-wrap">
                  <Badge>{project.industry}</Badge>
                  {project.services.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
                <p className="font-body text-body text-gray-500 line-clamp-2">
                  {project.description}
                </p>
              </Link>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
