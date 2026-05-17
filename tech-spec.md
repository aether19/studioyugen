# Yugen Studio — Technical Specification

## Development Environment

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| TypeScript | ~5.6 | Type safety |
| Vite | ~6 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| shadcn/ui | latest | Base UI component primitives |

---

## Dependencies

### Core Framework

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.0.0 | UI framework |
| `react-dom` | ^19.0.0 | React DOM renderer |
| `react-router-dom` | ^7.0.0 | Client-side routing (6 pages) |

### Animation

| Package | Version | Purpose |
|---------|---------|---------|
| `gsap` | ^3.12.0 | Core animation engine — timelines, tweens, scroll-driven animations, character splitting |
| `lenis` | ^1.1.0 | Smooth scroll with inertia (replaces Locomotive Scroll for React compatibility) |

> **GSAP Plugins used (all free, bundled with gsap):** SplitText, ScrollTrigger. Register via `gsap.registerPlugin(SplitText, ScrollTrigger)`.

### Fonts

| Package | Version | Purpose |
|---------|---------|---------|
| `@fontsource/cormorant-garamond` | ^5.0.0 | Display serif font (400 weight) |
| `@fontsource/sora` | ^5.0.0 | Body sans-serif font (400, 600 weights) |

### Icons

| Package | Version | Purpose |
|---------|---------|---------|
| `lucide-react` | ^0.460.0 | Line icons for About page values section, arrows, checkmarks |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | ^5.6.0 | TypeScript compiler |
| `vite` | ^6.0.0 | Build tool |
| `@vitejs/plugin-react` | ^4.0.0 | React fast refresh for Vite |
| `tailwindcss` | ^3.4.0 | CSS utility framework |
| `postcss` | ^8.4.0 | CSS processing pipeline |
| `autoprefixer` | ^10.4.0 | Vendor prefix automation |
| `@types/react` | ^19.0.0 | React type definitions |
| `@types/react-dom` | ^19.0.0 | ReactDOM type definitions |

---

## Component Inventory

### shadcn/ui Components

This project is a highly bespoke editorial design with custom styling throughout. Standard shadcn/ui components do not match the aesthetic. However, the following shadcn/ui primitives are installed and **heavily customized** to serve as base implementations:

| Component | Source | Customization |
|-----------|--------|---------------|
| `button` | `npx shadcn add button` | Restyled to pill shape (rounded-full), custom colors (terracotta accent), hover lift animation |
| `input` | `npx shadcn add input` | Restyled to borderless with bottom-border-only design |
| `textarea` | `npx shadcn add textarea` | Same borderless treatment as input |
| `select` | `npx shadcn add select` | Custom dropdown styling with bottom-border trigger |

> **Note:** The select component on the Contact page (Budget Range) requires a native `<select>` element rather than Radix-based, as the design specifies a simple dropdown. The shadcn Select may be swapped for a styled native select depending on final styling requirements.

### Custom Components

#### Layout Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Navbar` | `scrolled: boolean` | Fixed navigation with transparent→opaque transition on scroll. Left: logo text. Right: nav links + CTA. Mobile: hamburger icon. |
| `Footer` | — | Dark (#111) footer with headline CTA, 4-column link grid, copyright bar |
| `Container` | `children, className, narrow?: boolean` | Max-width wrapper (1728px), responsive horizontal padding (5vw→8vw). `narrow` variant (900px) for manifesto section |
| `PageLayout` | `children` | Wraps each page with Navbar + Footer + smooth scroll context |

#### Animation Components

| Component | Props | Description |
|-----------|-------|-------------|
| `CustomCursor` | — | Desktop-only custom cursor (12px accent circle, `mix-blend-mode: difference`). Renders as fixed-position div. Expands on interactive elements. Hidden on mobile/tablet and during keyboard nav. |
| `TextReveal` | `text, as?: "h1"\|"h2"\|"span", delay?: number, className` | Character-by-character reveal animation. Uses GSAP SplitText to split into chars, animates each with stagger (30ms). Triggered on mount (hero) or scroll enter. |
| `ScrollReveal` | `children, type?: "fade"\|"fade-up"\|"fade-left"\|"scale", delay?: number, duration?: number` | Wrapper that triggers GSAP ScrollTrigger animation when element enters viewport (15% threshold). One-shot, does not reverse. |
| `StaggerReveal` | `children, staggerDelay?: number` | Parent wrapper that staggers `ScrollReveal` children with sequential delays (100ms default). |
| `ParallaxImage` | `src, alt, speed?: number, className` | Image with scroll-driven parallax (0.8x speed default). Uses GSAP ScrollTrigger scrub. |
| `ScrollProgress` | — | Thin accent-colored bar at top of viewport, width = scroll percentage. Z-index 100. |
| `PageTransition` | `children` | Wraps route content. On route change: fade out (300ms), swap content, fade in (400ms), trigger hero entrance. |

#### Section Components

| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSection` | — | Full-viewport hero with subtitle, headline (3 lines, italic on "remember"), CTA button, scroll indicator with bounce animation |
| `SelectedWorkSection` | `projects: Project[]` | 3-column project card grid with section header and "View All Work" link. Cards have image hover scale. |
| `ServicesOverviewSection` | `services: Service[]` | 3-column service overview with number, title, description, "Learn More" link each |
| `ManifestoSection` | — | Centered quote with large serif typography, narrow container |
| `CTASection` | `headline, buttonText, buttonHref` | Centered CTA with Display L headline (italic+underlined portion), primary button |
| `WorkHeaderSection` | — | Page title with character reveal, subtitle |
| `WorkGridSection` | `projects: Project[]` | Vertical list of project rows with hover preview image that follows mouse |
| `ProjectHeroSection` | `project: Project` | Full-viewport hero image with dark gradient overlay, breadcrumb, title, badges |
| `ProjectInfoSection` | `project: Project` | Two-column layout: description left, info list right |
| `ProjectGallerySection` | `images: GalleryImage[]` | Vertical gallery: full-width images + side-by-side pairs |
| `NextProjectSection` | `nextProject: Project` | Link to next project with hover arrow shift |
| `ServiceSection` | `service: Service, reversed?: boolean, index: number` | Alternating two-column layout (text + image). Numbered title, features list with check icons, CTA button. |
| `PricingNoteSection` | — | Centered pricing statement with border separators |
| `ProcessSection` | `steps: ProcessStep[]` | 4-column process grid with numbered steps |
| `AboutHeaderSection` | — | Title with character reveal, intro paragraph |
| `StudioStorySection` | — | Two-column: headline + paragraphs left, portrait image right |
| `ValuesSection` | `values: Value[]` | 2-column grid of value cards with icons, titles, descriptions |
| `ContactHeaderSection` | — | Title with character reveal, subtitle |
| `ContactFormSection` | — | Two-column: form left (name, business, textarea, select, submit), contact info right |

#### UI Components

| Component | Props | Description |
|-----------|-------|-------------|
| `ProjectCard` | `project: Project, index: number` | Card with 4:3 image (hover scale 1.03), client name, industry/services badges, description |
| `ProjectRow` | `project: Project, index: number` | Horizontal row with number, title, tags, arrow. Hover triggers preview image + title shift |
| `HoverPreview` | `image: string, visible: boolean, mouseY: number` | Absolute-positioned preview image that follows mouse vertically within row bounds |
| `ServiceColumn` | `service: Service, index: number` | Numbered service column for overview section |
| `Badge` | `children, className` | Bordered pill tag (1px Gray 300, rounded-full, uppercase label style) |
| `TextLink` | `href, children, showArrow?: boolean` | Accent-colored text link with right arrow that shifts on hover |
| `ScrollIndicator` | — | "Scroll" text + animated bouncing line. Disappears after scrolling past hero |
| `MobileMenu` | `isOpen, onClose` | Full-screen overlay menu with staggered link entrance/exit |

---

## Animation Implementation Plan

### Animation Library Selection Rationale

**GSAP** is the primary animation engine — it provides precise timeline control, the SplitText plugin for character-level typography animation, and ScrollTrigger for scroll-driven effects. All of these are required by the design's bespoke motion system.

**Lenis** provides smooth scroll with inertia. It integrates cleanly with GSAP ScrollTrigger via a RAF loop, creating the fluid scroll experience specified in the design.

No React animation libraries (Framer Motion, React Spring) are used — GSAP's imperative API is more suitable for the timeline-based, scroll-driven animation system in this design.

### Animation Implementation Table

| # | Animation | Library / Plugin | Implementation Approach | Complexity |
|---|-----------|-----------------|------------------------|------------|
| 1 | **Page load sequence** | GSAP Timeline | Master timeline: loading overlay fade (0-300ms) → content fade-in (300-500ms) → hero TextReveal (500-1200ms) → subtitle/CTA fade (1200-1500ms). Encapsulated in `PageTransition` component. | Medium |
| 2 | **Text Character Reveal** | GSAP + SplitText | SplitText splits headline into chars. GSAP `from()` with `opacity: 0, y: "100%"`, stagger 30ms, duration 600ms, ease `power2.out`. Each char wrapped in overflow-hidden span. Used in hero, page headers. | High |
| 3 | **Scroll-triggered reveals (fade-up)** | GSAP + ScrollTrigger | `ScrollReveal` component uses ScrollTrigger with `start: "top 85%"`, `toggleActions: "play none none none"`. Animates `opacity: 0→1, y: 40→0`, duration 800ms, ease `power2.out`. | Medium |
| 4 | **Scroll-triggered reveals (fade-left)** | GSAP + ScrollTrigger | Same as fade-up but `x: 40→0`. Used for alternate direction reveals. | Low |
| 5 | **Scroll-triggered reveals (scale)** | GSAP + ScrollTrigger | `opacity: 0→1, scale: 0.95→1`. Used for image reveals. | Low |
| 6 | **Staggered children reveal** | GSAP + ScrollTrigger | Parent component calculates stagger delays (100ms default) and passes to child `ScrollReveal` components. Used for project cards, service columns, process steps, value cards. | Medium |
| 7 | **Smooth scroll** | Lenis | Lenis instance created at app root with `duration: 0.8, easing: (t) => 1 - Math.pow(1 - t, 3)`. RAF loop syncs Lenis with GSAP ScrollTrigger via `ScrollTrigger.update()`. | Medium |
| 8 | **Custom cursor** | Vanilla JS + RAF | Fixed-position div tracks mouse with lerp (factor 0.15/frame). `mix-blend-mode: difference`. State machine: default (12px filled) → link (40px outline) → project card (60px + "View" text). Size transitions via CSS 300ms. Hidden on `< 1024px` and on `mouseleave`. | High |
| 9 | **Hero entrance sequence** | GSAP Timeline | Sequenced timeline: overlay out → page fade in → headline chars stagger in → subtitle fade → CTA fade → scroll indicator appear + bounce start. See animation #1. | Medium |
| 10 | **Scroll indicator bounce** | CSS @keyframes | `translateY(0→20px→0)`, 1.5s, `ease-in-out`, `infinite`. Pure CSS animation on the line element. | Low |
| 11 | **Scroll progress bar** | GSAP + ScrollTrigger | ScrollTrigger `onUpdate` callback reads `self.progress`, sets bar width as percentage. 2px height, accent color, fixed top. | Low |
| 12 | **Parallax image** | GSAP + ScrollTrigger | `ParallaxImage` uses ScrollTrigger scrub with `yPercent: -5` to `+5` range. Creates subtle depth. Used on Work Single hero background and project gallery. | Medium |
| 13 | **Navbar scroll transition** | CSS transition + JS | JS reads scroll position. When `scrollY > 100px`, toggle class that adds `bg-[#faf8f4]/95 backdrop-blur-md` with CSS transition 300ms. | Low |
| 14 | **Button hover (primary)** | CSS transition | `hover:bg-[#d4683f] hover:-translate-y-0.5`, `transition: 300ms ease`. Pure Tailwind. | Low |
| 15 | **Text link hover** | CSS transition | Arrow `translateX(0→4px)`, text color darkens. `transition: 300ms ease`. | Low |
| 16 | **Card hover (project)** | CSS transition | Image `scale(1→1.03)`, card shadow `0 8px 32px rgba(0,0,0,0.08)`. `transition: 400ms ease`. | Low |
| 17 | **Project card hover (cursor)** | Custom cursor state | Cursor component receives hover target via context. Transitions to 60px + "View" text. See animation #8. | Low |
| 18 | **Project row hover (Work page)** | CSS + JS | Row bg `rgba(17,17,17,0.02)`, title `translateX(10px)`, arrow `translateX(4px)` + accent color. Preview image fades in (opacity 0→1, scale 0.95→1, 300ms). JS tracks mouseY to position preview vertically within row bounds. | High |
| 19 | **Nav link underline hover** | CSS | `::after` pseudo-element, `width: 0→100%`, `transform-origin: left`, `transition: 300ms ease`. | Low |
| 20 | **Footer link hover** | CSS | `opacity: 0.7→1, translateX(0→4px)`, `transition: 200ms ease`. | Low |
| 21 | **Badge hover** | CSS | `border-color: Gray 300→Accent`, `transition: 200ms ease`. | Low |
| 22 | **Page transitions (route change)** | GSAP | On link click: current content `opacity→0` (300ms) + overlay fade in. Swap route content. Overlay fade out + new content `opacity: 0→1` (400ms). Trigger hero entrance. Managed in `PageTransition` component wrapping router outlet. | Medium |
| 23 | **Mobile menu open** | GSAP Timeline | 500ms timeline: hamburger → X morph (line rotations) → overlay fade in → links stagger in from bottom (100ms each). Body scroll locked via `overflow: hidden`. | Medium |
| 24 | **Mobile menu close** | GSAP Timeline | 400ms reverse: links stagger out → overlay fade out → hamburger morphs back. Unlock scroll. | Medium |
| 25 | **Form input focus** | CSS | Bottom border `Gray 200→Accent`, `transition: 300ms ease`. | Low |
| 26 | **Next project hover** | CSS | Title color → Accent, arrow `translateX(0→8px)`, `transition: 300ms ease`. | Low |
| 27 | **Service section image hover** | CSS | Subtle scale `1→1.02`, `transition: 500ms ease`. | Low |
| 28 | **Reduced motion fallback** | CSS + JS | `prefers-reduced-motion: reduce` media query disables all animations (instant transitions). GSAP timelines check `matchMedia` before playing. | Low |

---

## State & Logic Plan

### State Management Approach

React built-in state (useState, useContext) is sufficient — no external state library needed. The application has minimal shared state.

### Global State (React Context)

| Context | State | Consumers |
|---------|-------|-----------|
| `CursorContext` | `cursorType: "default" \| "link" \| "project"` | CustomCursor, ProjectCard, ProjectRow, all interactive elements |
| `ScrollContext` | `lenis: Lenis instance, scrollY: number` | Navbar, ScrollProgress, ScrollReveal components |
| `TransitionContext` | `isTransitioning: boolean` | PageTransition, all internal Link components |

### Component-Level State

| Component | State | Purpose |
|-----------|-------|---------|
| `Navbar` | `scrolled: boolean` | Toggle opaque background after 100px scroll |
| `MobileMenu` | `isOpen: boolean` | Toggle full-screen menu overlay |
| `WorkGridSection` | `hoveredProject: number \| null, mouseY: number` | Track which project row is hovered for preview image |
| `ScrollIndicator` | `visible: boolean` | Hide after user scrolls past hero |
| `PageTransition` | `displayLocation: Location, isTransitioning: boolean` | Manage route change animation |
| `CustomCursor` | `position: {x, y}, visible: boolean` | Cursor position tracking |

### Data Flow

- **Top-down**: Route-level pages pass project/service data as props to section components
- **Context**: Cursor state, scroll instance, and transition state shared via contexts
- **No API calls**: All content is static, hardcoded in page components

### Routing

React Router v7 with 6 routes:

| Route | Page Component | Description |
|-------|---------------|-------------|
| `/` | `HomePage` | Landing page |
| `/work` | `WorkPage` | Project listing |
| `/work/:slug` | `WorkSinglePage` | Case study (dynamic route) |
| `/services` | `ServicesPage` | Service offerings |
| `/about` | `AboutPage` | Studio story |
| `/contact` | `ContactPage` | Contact form |

All route changes are intercepted by `PageTransition` to play the fade-out/fade-in animation sequence.

---

## Project File Structure

```
├── public/
│   └── images/
│       ├── projects/
│       │   ├── project_dr_aib.png
│       │   ├── project_chi_link.png
│       │   ├── project_neosys.png
│       │   ├── project_thailand_football.png
│       │   ├── project_shreddy.png
│       │   └── project_moupera.png
│       ├── services/
│       │   ├── service_branding.png
│       │   ├── service_web_design.png
│       │   └── service_development.png
│       └── about/
│           └── about_portrait.png
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components (auto-installed)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── select.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── PageLayout.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── animation/
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── TextReveal.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── StaggerReveal.tsx
│   │   │   ├── ParallaxImage.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── PageTransition.tsx
│   │   └── shared/
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectRow.tsx
│   │       ├── HoverPreview.tsx
│   │       ├── ServiceColumn.tsx
│   │       ├── Badge.tsx
│   │       ├── TextLink.tsx
│   │       └── ScrollIndicator.tsx
│   ├── sections/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SelectedWorkSection.tsx
│   │   │   ├── ServicesOverviewSection.tsx
│   │   │   ├── ManifestoSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── work/
│   │   │   ├── WorkHeaderSection.tsx
│   │   │   ├── WorkGridSection.tsx
│   │   │   └── WorkCTASection.tsx
│   │   ├── work-single/
│   │   │   ├── ProjectHeroSection.tsx
│   │   │   ├── ProjectInfoSection.tsx
│   │   │   ├── ProjectGallerySection.tsx
│   │   │   ├── NextProjectSection.tsx
│   │   │   └── WorkSingleCTASection.tsx
│   │   ├── services/
│   │   │   ├── ServicesHeaderSection.tsx
│   │   │   ├── ServiceSection.tsx
│   │   │   ├── PricingNoteSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   └── ServicesCTASection.tsx
│   │   ├── about/
│   │   │   ├── AboutHeaderSection.tsx
│   │   │   ├── StudioStorySection.tsx
│   │   │   ├── ValuesSection.tsx
│   │   │   └── AboutCTASection.tsx
│   │   └── contact/
│   │       ├── ContactHeaderSection.tsx
│   │       ├── ContactFormSection.tsx
│   │       └── ContactCTASection.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── WorkPage.tsx
│   │   ├── WorkSinglePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   ├── useSmoothScroll.ts
│   │   ├── useCursor.ts
│   │   └── useMediaQuery.ts
│   ├── context/
│   │   ├── CursorContext.tsx
│   │   ├── ScrollContext.tsx
│   │   └── TransitionContext.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── process.ts
│   │   └── values.ts
│   ├── types/
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts               # shadcn utility (cn function)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js
├── components.json                  # shadcn configuration
└── package.json
```

---

## Type Definitions

```typescript
// src/types/index.ts

interface Project {
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

interface GalleryImage {
  src: string;
  alt: string;
  layout: "full" | "half";
}

interface ProjectInfo {
  client: string;
  industry: string;
  services: string;
  location: string;
  year: string;
  about: string;
}

interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
  anchor: string;
}

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

interface Value {
  id: number;
  icon: string;        // Lucide icon name
  title: string;
  description: string;
}
```

---

## Tailwind Configuration

### Custom Theme Extensions

```javascript
// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#faf8f4",
        foreground: "#111111",
        accent: "#c0522a",
        "accent-light": "#d4683f",
        "gray-100": "#f2f2f2",
        "gray-200": "#e8e4de",
        "gray-300": "#d5d1cc",
        "gray-400": "#888888",
        "gray-500": "#555555",
        dark: "#111111",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "Times", "serif"],
        body: ["Sora", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(80px, 12vw, 230px)", { lineHeight: "0.9" }],
        "display-l": ["clamp(60px, 8.5vw, 164px)", { lineHeight: "0.9" }],
        "display-m": ["clamp(50px, 6.5vw, 125px)", { lineHeight: "0.9" }],
        "display-s": ["clamp(40px, 4.5vw, 86px)", { lineHeight: "0.9" }],
        "h1": ["clamp(35px, 3.5vw, 67px)", { lineHeight: "1.2" }],
        "h2": ["clamp(30px, 2.5vw, 48px)", { lineHeight: "1.2" }],
        "h3": ["clamp(25px, 2vw, 38px)", { lineHeight: "1.2" }],
        "h4": ["clamp(20px, 1.5vw, 29px)", { lineHeight: "1.2" }],
        "body-lg": ["clamp(16px, 1.2vw, 23px)", { lineHeight: "1.5" }],
        "body": ["clamp(14px, 1vw, 19px)", { lineHeight: "1.5" }],
        "body-sm": ["clamp(12px, 0.9vw, 17px)", { lineHeight: "1.4" }],
        "label": ["clamp(10px, 0.7vw, 13px)", { lineHeight: "1.2" }],
      },
      spacing: {
        "section": "120px",
        "section-tight": "60px",
        "section-hero": "160px",
      },
      maxWidth: {
        "container": "1728px",
        "narrow": "900px",
      },
      zIndex: {
        cursor: "9999",
        nav: "1000",
        menu: "999",
        progress: "100",
      },
      borderRadius: {
        pill: "100px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "ease-out-custom": "cubic-bezier(0.0, 0.0, 0.2, 1)",
        "ease-in-out-custom": "cubic-bezier(0.4, 0.0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
```

---

## CSS Custom Properties (index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-background: #faf8f4;
    --color-foreground: #111111;
    --color-accent: #c0522a;
    --color-accent-light: #d4683f;
    --color-gray-100: #f2f2f2;
    --color-gray-200: #e8e4de;
    --color-gray-300: #d5d1cc;
    --color-gray-400: #888888;
    --color-gray-500: #555555;
    --color-dark: #111111;
  }

  html {
    scroll-behavior: auto; /* Lenis handles smooth scroll */
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: "Sora", system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: none; /* Hide default cursor on desktop */
  }

  /* Show default cursor on mobile/tablet */
  @media (max-width: 1023px) {
    body {
      cursor: auto;
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

---

## Key Implementation Notes

### Custom Cursor
- Rendered as a `position: fixed` div, updated via `requestAnimationFrame`
- Uses lerp interpolation (`current += (target - current) * 0.15`) for smooth trailing
- `mix-blend-mode: difference` ensures visibility on all backgrounds
- State changes (default/link/project) managed via `CursorContext`
- Hidden when `mouseleave` on document, shown on `mouseenter`
- Completely hidden on touch devices (`@media (hover: none)` or `max-width: 1023px`)

### Smooth Scroll + GSAP Integration
- Lenis RAF loop must call both `lenis.raf()` and `ScrollTrigger.update()` each frame
- Lenis scroll events proxy to ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`
- On route change: call `lenis.scrollTo(0, { immediate: true })` to reset scroll position

### Page Transitions with React Router
- `PageTransition` wraps the router's `<Outlet />` or route-rendered content
- All internal navigation uses a custom `AnimatedLink` component that calls `e.preventDefault()`, plays leave animation, then calls `navigate()`
- Route content is rendered into a ref that GSAP animates (fade out → swap → fade in)
- Hero entrance animation (TextReveal) is triggered via `useEffect` on each page component after transition completes

### TextReveal with GSAP SplitText
- SplitText splits text into chars, words, and lines. For this design, char-level splitting is used.
- Each char is wrapped in an overflow-hidden span, with the char itself in an inner span
- The animation targets the inner spans with `y: "100%" → "0%"` and `opacity: 0 → 1`
- On route change, SplitText instances must be reverted and recreated to avoid duplicate splits
- **Note:** SplitText is a GSAP Club plugin (free). Ensure proper import: `import { SplitText } from "gsap/SplitText"`

### Image Asset Strategy
- All project images, service images, and portrait stored in `public/images/`
- Referenced via absolute paths (`/images/projects/project_dr_aib.png`)
- Gallery images on Work Single page use `ParallaxImage` component with ScrollTrigger scrub
- Images should be optimized (WebP with PNG fallback) for performance

### Form Handling (Contact Page)
- Native HTML form with `onSubmit` handler
- No backend integration specified — form submission can be handled via:
  - `mailto:` link fallback
  - Email service API (Formspree, EmailJS) — add dependency if needed
  - Netlify/Vercel form handling (if deployed on those platforms)
- Current implementation: client-side only with validation, `mailto:` action as baseline

### Mobile Menu
- Full-screen overlay (`position: fixed`, `inset: 0`)
- Body scroll locked via `document.body.style.overflow = "hidden"`
- Hamburger icon: 3 lines that morph to X via CSS transforms (rotate 45°, -45°, fade middle)
- Links stacked vertically in Cormorant Garamond Display M size
- GSAP timeline for coordinated entrance/exit animation
