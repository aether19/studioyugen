import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'dr-aib',
    client: 'Dr. Aib',
    title: 'Dr. Aib',
    industry: 'Healthcare',
    services: ['Web Design'],
    description: 'A modern web presence for a leading healthcare provider in Algeria.',
    image: '/assets/images/projects/project_dr_aib.png',
    info: {
      client: 'Dr. Aib',
      industry: 'Healthcare',
      services: 'Web Design',
      location: 'Algeria',
      year: '2024',
      about: 'Dr. Aib, a leading healthcare provider in Algeria, needed a modern web presence that reflects their commitment to patient care and medical excellence. We designed a clean, trustworthy website that makes it easy for patients to find information and book appointments.',
    },
    gallery: [
      { src: '/assets/images/projects/project_dr_aib.png', alt: 'Dr. Aib website mockup', layout: 'full' },
    ],
    nextSlug: 'chi-link',
  },
  {
    id: 2,
    slug: 'chi-link',
    client: 'Chi Link',
    title: 'Chi Link',
    industry: 'Wellness',
    services: ['Branding', 'Web Design'],
    description: 'Holistic wellness brand identity and website for an Australian studio.',
    image: '/assets/images/projects/project_chi_link.png',
    info: {
      client: 'Chi Link',
      industry: 'Wellness',
      services: 'Branding, Web Design',
      location: 'Australia',
      year: '2024',
      about: 'Chi Link is a holistic wellness studio based in Australia. We created a complete brand identity — from logo and color system to a serene, calming website that embodies their philosophy of mind-body balance.',
    },
    gallery: [
      { src: '/assets/images/projects/project_chi_link.png', alt: 'Chi Link brand mockup', layout: 'full' },
    ],
    nextSlug: 'neosys',
  },
  {
    id: 3,
    slug: 'neosys',
    client: 'Neosys',
    title: 'Neosys',
    industry: 'SaaS',
    services: ['Web Design', 'Development'],
    description: 'Website redesign for a global SaaS company.',
    image: '/assets/images/projects/project_neosys.png',
    info: {
      client: 'Neosys',
      industry: 'SaaS',
      services: 'Web Design, Development',
      location: 'Global',
      year: '2024',
      about: 'Neosys, a global SaaS company, needed a website redesign that reflected their innovative approach to software solutions. We crafted a modern, user-centric experience that communicates their value proposition with clarity and impact.',
    },
    gallery: [
      { src: '/assets/images/projects/project_neosys.png', alt: 'Neosys website mockup', layout: 'full' },
    ],
    nextSlug: 'thailand-football',
  },
  {
    id: 4,
    slug: 'thailand-football',
    client: 'Thailand Football',
    title: 'Thailand Football',
    industry: 'Sports',
    services: ['Web Design', 'Development'],
    description: 'Digital platform for Thailand\'s football community.',
    image: '/assets/images/projects/project_thailand_football.png',
    info: {
      client: 'Thailand Football',
      industry: 'Sports',
      services: 'Web Design, Development',
      location: 'Thailand',
      year: '2024',
      about: 'We built a dynamic digital platform for Thailand\'s growing football community, featuring match schedules, team profiles, player stats, and live score updates. The design captures the energy and passion of the sport.',
    },
    gallery: [
      { src: '/assets/images/projects/project_thailand_football.png', alt: 'Thailand Football platform mockup', layout: 'full' },
    ],
    nextSlug: 'shreddy',
  },
  {
    id: 5,
    slug: 'shreddy',
    client: 'Shreddy',
    title: 'Shreddy',
    industry: 'Fitness App',
    services: ['UI/UX', 'Development'],
    description: 'Mobile app design for a fitness coaching platform.',
    image: '/assets/images/projects/project_shreddy.png',
    info: {
      client: 'Shreddy',
      industry: 'Fitness',
      services: 'UI/UX, Development',
      location: 'USA',
      year: '2024',
      about: 'Shreddy is a fitness coaching app that needed an engaging, motivational UI. We designed an energetic yet clean interface that keeps users motivated through their fitness journey with progress tracking and workout plans.',
    },
    gallery: [
      { src: '/assets/images/projects/project_shreddy.png', alt: 'Shreddy app mockup', layout: 'full' },
    ],
    nextSlug: 'moupera',
  },
  {
    id: 6,
    slug: 'moupera',
    client: 'Moupera',
    title: 'Moupera',
    industry: 'SaaS',
    services: ['Landing Page'],
    description: 'Landing page design for an innovative SaaS product.',
    image: '/assets/images/projects/project_moupera.png',
    info: {
      client: 'Moupera',
      industry: 'SaaS',
      services: 'Landing Page',
      location: 'Canada',
      year: '2024',
      about: 'Moupera needed a high-converting landing page for their innovative SaaS product. We designed a focused, compelling page that clearly communicates their value proposition and drives sign-ups.',
    },
    gallery: [
      { src: '/assets/images/projects/project_moupera.png', alt: 'Moupera landing page mockup', layout: 'full' },
    ],
    nextSlug: 'dr-aib',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const current = projects.find((p) => p.slug === currentSlug);
  if (!current?.nextSlug) return projects[0];
  return projects.find((p) => p.slug === current.nextSlug);
}
