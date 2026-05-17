import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  delay?: number;
  className?: string;
  triggerOnMount?: boolean;
  staggerMs?: number;
}

export default function TextReveal({
  text,
  as: Tag = 'h1',
  delay = 0,
  className = '',
  triggerOnMount = true,
  staggerMs = 30,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggerOnMount || hasAnimated.current) return;
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll('.char');
    if (chars.length === 0) return;

    gsap.set(chars, { opacity: 0, y: '100%' });

    const timer = setTimeout(() => {
      gsap.to(chars, {
        opacity: 1,
        y: '0%',
        duration: 0.6,
        stagger: staggerMs / 1000,
        ease: 'power2.out',
      });
      hasAnimated.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [triggerOnMount, delay, staggerMs]);

  const words = text.split(' ');

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} className="inline-block overflow-hidden">
              <span className="char inline-block">{char}</span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
