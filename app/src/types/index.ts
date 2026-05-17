export interface Project {
  id: number;
  slug: string;
  client: string;
  title: string;
  industry: string;
  services: string[];
  description: string;
  image: string;
  gallery?: GalleryImage[];
  info?: ProjectInfo;
  nextSlug?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  layout: 'full' | 'half';
}

export interface ProjectInfo {
  client: string;
  industry: string;
  services: string;
  location: string;
  year: string;
  about: string;
}

export interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
  anchor: string;
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface Value {
  id: number;
  icon: string;
  title: string;
  description: string;
}
