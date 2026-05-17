import ScrollReveal from '@/components/animation/ScrollReveal';
import type { Project } from '@/types';

interface ProjectGallerySectionProps {
  project: Project;
}

export default function ProjectGallerySection({ project }: ProjectGallerySectionProps) {
  return (
    <section className="pb-24 lg:pb-32 bg-background">
      <div className="space-y-6">
        <ScrollReveal type="scale" duration={0.6}>
          <img
            src={project.image}
            alt={`${project.client} project overview`}
            className="w-full aspect-video object-cover"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[5vw]">
          <ScrollReveal type="scale" delay={0.1} duration={0.6}>
            <img
              src={project.image}
              alt={`${project.client} detail view 1`}
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          </ScrollReveal>
          <ScrollReveal type="scale" delay={0.2} duration={0.6}>
            <img
              src={project.image}
              alt={`${project.client} detail view 2`}
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          </ScrollReveal>
        </div>

        <ScrollReveal type="scale" delay={0.1} duration={0.6}>
          <img
            src={project.image}
            alt={`${project.client} full view`}
            className="w-full aspect-video object-cover"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
