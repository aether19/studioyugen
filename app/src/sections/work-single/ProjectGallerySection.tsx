import ScrollReveal from '@/components/animation/ScrollReveal';
import type { Project } from '@/types';

interface ProjectGallerySectionProps {
  project: Project;
}

export default function ProjectGallerySection({ project }: ProjectGallerySectionProps) {
  return (
    <section className="pb-24 lg:pb-32 bg-background">
      <ScrollReveal type="scale" duration={0.6}>
        <img
          src={project.image}
          alt={`${project.client} project`}
          className="w-full aspect-video object-cover"
        />
      </ScrollReveal>
    </section>
  );
}
