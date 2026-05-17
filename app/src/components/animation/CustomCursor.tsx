import { useEffect, useRef, useState } from 'react';
import { useCursor } from '@/context/CursorContext';
import { useIsDesktop } from '@/hooks/useMediaQuery';

export default function CustomCursor() {
  const { cursorType, cursorText } = useCursor();
  const isDesktop = useIsDesktop();
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let rafId: number;
    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isDesktop, visible]);

  if (!isDesktop) return null;

  const size = cursorType === 'project' ? 60 : cursorType === 'link' ? 40 : 12;
  const isOutline = cursorType === 'link' || cursorType === 'project';
  const isView = cursorType === 'view';

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-cursor transition-all duration-300 flex items-center justify-center"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: isOutline || isView ? 'transparent' : '#c0522a',
        border: isOutline || isView ? '2px solid #c0522a' : 'none',
        opacity: visible ? 1 : 0,
        mixBlendMode: isOutline || isView ? 'normal' : 'difference',
      }}
    >
      {(cursorType === 'view' || cursorText) && (
        <span
          className="text-label font-body text-accent whitespace-nowrap"
          style={{ fontSize: 10 }}
        >
          {cursorText || 'View'}
        </span>
      )}
    </div>
  );
}
