import { Link } from 'react-router-dom';
import TextReveal from '@/components/animation/TextReveal';
import Container from '@/components/layout/Container';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end bg-background pb-16 pt-[72px] overflow-hidden">
      {/* Top status bar */}
      <div
        className="absolute top-[72px] left-0 right-0 border-b border-foreground/[0.08] opacity-0 animate-fade-in"
        style={{ animationDelay: '200ms', animationFillMode: 'forwards', animationDuration: '600ms' }}
      >
        <Container className="flex items-center justify-between h-10">
          <span className="font-body text-label text-foreground/20 tracking-widest">Est. 2024</span>
          <span className="font-body text-label text-foreground/20 tracking-widest">Creative Studio</span>
          <span className="font-body text-label text-foreground/20 tracking-widest">Worldwide</span>
        </Container>
      </div>

      {/* Ghost index number */}
      <div
        className="absolute top-1/2 right-6 lg:right-16 -translate-y-1/2 font-display text-[clamp(120px,18vw,280px)] text-foreground/[0.03] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        001
      </div>

      <Container>
        {/* Eyebrow */}
        <div
          className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards', animationDuration: '500ms' }}
        >
          <div className="w-8 h-px bg-accent" />
          <p className="font-body text-label text-accent tracking-widest">Yugen Studio</p>
        </div>

        {/* Main headline */}
        <div className="max-w-[1100px]">
          <h1 className="font-display text-display-xl text-foreground">
            <span className="block">
              <TextReveal text="We build" delay={500} />
            </span>
            <span className="block italic text-foreground/60">
              <TextReveal text="things people" delay={800} />
            </span>
            <span className="block">
              <TextReveal text="remember." delay={1100} />
            </span>
          </h1>
        </div>

        {/* Bottom row */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 border-t border-foreground/[0.08] pt-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '1600ms', animationFillMode: 'forwards', animationDuration: '600ms' }}
        >
          <p className="font-body text-body text-foreground/30 max-w-xs leading-relaxed">
            Boutique creative studio crafting brands and digital experiences that leave a mark.
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <Link
              to="/work"
              className="group flex items-center gap-3 font-body text-label tracking-widest text-foreground hover:text-accent transition-colors duration-300"
            >
              <span>Explore Work</span>
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-16" />
            </Link>
            <Link
              to="/contact"
              className="font-body text-label tracking-widest text-foreground/30 border border-foreground/15 px-5 py-3 hover:border-accent hover:text-accent transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll line */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in"
        style={{ animationDelay: '2200ms', animationFillMode: 'forwards', animationDuration: '600ms' }}
      >
        <div className="w-px h-12 bg-foreground/15 animate-bounce-line" />
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation-name: fade-in;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </section>
  );
}
