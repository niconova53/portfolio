import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isInside, setIsInside] = useState(true);

  const size = 220;
  const half = size / 2;

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);

      // Detectar si realmente está dentro del viewport
      const isInViewport = e.clientX > 0 && e.clientX < window.innerWidth &&
                           e.clientY > 0 && e.clientY < window.innerHeight;

      if (isInViewport) {
        setIsInside(true);
        clearTimeout(hideTimeout);
      } else {
        // Fuera del viewport real - programar ocultación
        hideTimeout = setTimeout(() => setIsInside(false), 50);
      }
    };

    const handleMouseLeave = () => setIsInside(false);
    const handleMouseEnter = () => setIsInside(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(hideTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isInside) return null;

  const style = {
    position: 'fixed' as const,
    width: `${size}px`,
    height: `${size}px`,
    left: `${mouseX - half}px`,
    top: `${mouseY - half}px`,
    borderRadius: '50%',
    background: 'var(--accent-primary)',
    filter: 'blur(90px)',
    opacity: 0.15,
    pointerEvents: 'none' as const,
    zIndex: 9999,
    willChange: 'left, top',
    transition: 'opacity 0.15s ease',
  };

  return <div className="cursor-glow" data-testid="cursor-glow" style={style} />;
}