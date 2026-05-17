import { Link } from 'react-router-dom';
import TextReveal from '@/components/animation/TextReveal';
import ScrollIndicator from '@/components/shared/ScrollIndicator';
import Container from '@/components/layout/Container';
import { useCursor } from '@/context/CursorContext';

export default function HeroSection() {
  const { setCursorType } = useCursor();

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-background pt-32 pb-24">
      <Container>
        <div className="max-w-[1100px]">
          {/* Subtitle */}
          <p className="text-label font-body text-accent mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '1200ms', animationFillMode: 'forwards', animationDuration: '600ms' }}
          >
            Yugen Studio
          </p>

          {/* Headline */}
          <h1 className="font-display text-display-xl text-foreground">
            <span className="block">
              <TextReveal text="We build" delay={500} />
            </span>
            <span className="block">
              <TextReveal text="things people" delay={800} />
            </span>
            <span className="block">
              <TextReveal text="remember." delay={1100} />
            </span>
          </h1>

          {/* CTA */}
          <div className="mt-10 opacity-0 animate-fade-in"
            style={{ animationDelay: '1500ms', animationFillMode: 'forwards', animationDuration: '600ms' }}
          >
            <Link
              to="/work"
              className="inline-block bg-accent text-white font-body text-body px-8 py-4 rounded-pill hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
              onMouseEnter={() => setCursorType('link')}
              onMouseLeave={() => setCursorType('default')}
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </Container>

      <ScrollIndicator />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation-name: fade-in;
          animation-timing-function: ease-out;
        }
      `}</style>
    </section>
  );
}
