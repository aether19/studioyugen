import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    number: '01',
    title: 'Branding',
    description: 'Logo design, visual identity, color systems, typography, and brand guidelines. We create brands that stand out and stay remembered.',
    features: [
      'Logo Design',
      'Visual Identity Systems',
      'Color & Typography',
      'Brand Guidelines',
      'Print & Digital Collateral',
    ],
    image: '/assets/images/services/service_branding.png',
    ctaText: 'Start Your Brand Project',
    anchor: 'branding',
  },
  {
    id: 2,
    number: '02',
    title: 'Web Design & UI/UX',
    description: 'We design websites that are as functional as they are beautiful. Every wireframe, every pixel, every interaction is crafted to guide your users and elevate your brand.',
    features: [
      'Wireframing & Prototyping',
      'User Flow & Journey Mapping',
      'High-Fidelity UI Design',
      'Responsive Design Systems',
      'Design Handoff & Support',
    ],
    image: '/assets/images/services/service_web_design.png',
    ctaText: 'Start Your Web Project',
    anchor: 'web-design',
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    description: 'We build websites from scratch — clean code, fast performance, and easy content management. Every site we develop is responsive, SEO-friendly, and built to scale.',
    features: [
      'Custom Website Development',
      'CMS Integration (WordPress, Webflow)',
      'E-Commerce Solutions',
      'SEO Optimization',
      '1 Month Free Maintenance',
    ],
    image: '/assets/images/services/service_development.png',
    ctaText: 'Start Your Dev Project',
    anchor: 'development',
  },
];

export const serviceOverview = [
  {
    id: 1,
    number: '01',
    title: 'Branding',
    description: 'Logo design, visual identity, color system, typography, brand guidelines. For businesses that need to look the part before anything else.',
  },
  {
    id: 2,
    number: '02',
    title: 'Web Design & UI/UX',
    description: 'Wireframes, user flows, prototypes, high-fidelity design. Built around how your customers actually think.',
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    description: 'Full build, launch, SEO optimization, 1 month maintenance included. No loose ends at handoff.',
  },
];
