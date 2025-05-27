
import { useEffect, useRef } from 'react';
import { Heart, Sparkles, Circle } from 'lucide-react';

export const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      elementsRef.current.forEach((element, index) => {
        if (element) {
          const speed = (index + 1) * 0.01;
          const x = (clientX - centerX) * speed;
          const y = (clientY - centerY) * speed;
          
          element.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Interactive floating hearts */}
      <div 
        ref={el => el && (elementsRef.current[0] = el)}
        className="absolute top-20 left-20 transition-transform duration-200 ease-out"
      >
        <Heart className="h-8 w-8 text-brand-pink/40 fill-current animate-pulse" />
      </div>
      
      <div 
        ref={el => el && (elementsRef.current[1] = el)}
        className="absolute top-40 right-32 transition-transform duration-300 ease-out"
      >
        <Sparkles className="h-6 w-6 text-brand-lavender/50 animate-pulse" />
      </div>
      
      <div 
        ref={el => el && (elementsRef.current[2] = el)}
        className="absolute bottom-32 left-1/4 transition-transform duration-400 ease-out"
      >
        <Circle className="h-10 w-10 text-brand-teal/30 animate-spin" style={{animationDuration: '20s'}} />
      </div>
      
      <div 
        ref={el => el && (elementsRef.current[3] = el)}
        className="absolute bottom-20 right-20 transition-transform duration-500 ease-out"
      >
        <Heart className="h-5 w-5 text-brand-peach/60 fill-current animate-bounce" />
      </div>
      
      <div 
        ref={el => el && (elementsRef.current[4] = el)}
        className="absolute top-1/2 left-10 transition-transform duration-350 ease-out"
      >
        <Sparkles className="h-7 w-7 text-brand-mint/45 animate-pulse" />
      </div>
    </div>
  );
};
