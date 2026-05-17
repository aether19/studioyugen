import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProjectBySlug, getNextProject } from '@/data/projects';
import ProjectHeroSection from '@/sections/work-single/ProjectHeroSection';
import ProjectInfoSection from '@/sections/work-single/ProjectInfoSection';
import ProjectGallerySection from '@/sections/work-single/ProjectGallerySection';
import NextProjectSection from '@/sections/work-single/NextProjectSection';
import CTASection from '@/sections/home/CTASection';

export default function WorkSinglePage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const nextProject = slug ? getNextProject(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <ProjectHeroSection project={project} />
      <ProjectInfoSection project={project} />
      <ProjectGallerySection project={project} />
      {nextProject && <NextProjectSection nextProject={nextProject} />}
      <CTASection
        headline="Have a project?"
        highlightText="Let's talk."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
