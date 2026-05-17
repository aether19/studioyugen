import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animation/ScrollReveal';
import type { Project } from '@/types';

interface ProjectInfoSectionProps {
  project: Project;
}

export default function ProjectInfoSection({ project }: ProjectInfoSectionProps) {
  if (!project.info) return null;

  const infoItems = [
    { label: 'Client', value: project.info.client },
    { label: 'Industry', value: project.info.industry },
    { label: 'Services', value: project.info.services },
    { label: 'Location', value: project.info.location },
    { label: 'Year', value: project.info.year },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ScrollReveal type="fade-up" className="lg:col-span-3">
            <div>
              <p className="text-label font-body text-accent mb-4">About the Project</p>
              <p className="font-body text-body-lg text-gray-500 leading-relaxed">
                {project.info.about}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              {infoItems.map((item) => (
                <div key={item.label}>
                  <p className="text-label font-body text-gray-400 mb-1">{item.label}</p>
                  <p className="font-body text-body text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
