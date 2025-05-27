
import { useEffect, useRef } from 'react';

interface GlowingOrbProps {
  size?: number;
  color?: string;
  intensity?: number;
  className?: string;
}

export const GlowingOrb: React.FC<GlowingOrbProps> = ({ 
  size = 100, 
  color = 'brand-pink', 
  intensity = 0.5,
  className = ""
}) => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const rect = orbRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        
        orbRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${1 + intensity * 0.2})`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return (
    <div 
      ref={orbRef}
      className={`rounded-full blur-2xl opacity-60 animate-pulse transition-transform duration-300 ease-out ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, var(--${color}), var(--${color})/0.3)`,
        boxShadow: `0 0 ${size}px var(--${color})/0.3`
      }}
    />
  );
};
