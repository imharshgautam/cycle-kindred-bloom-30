
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      const parallaxSlow = scrolled * 0.2;
      
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${parallax}px) rotateX(5deg) rotateY(5deg)`;
      }
      
      if (circle1Ref.current) {
        circle1Ref.current.style.transform = `translate(${parallaxSlow}px, ${parallax}px) rotate(${scrolled * 0.1}deg)`;
      }
      
      if (circle2Ref.current) {
        circle2Ref.current.style.transform = `translate(-${parallaxSlow}px, -${parallax}px) rotate(-${scrolled * 0.1}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen" ref={heroRef}>
      <div className="gradient-background absolute inset-0 z-0"></div>
      
      {/* Floating 3D elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-16 h-16 bg-brand-pink rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-brand-lavender rounded-full opacity-60 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-brand-teal rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-brand-peach rounded-full opacity-60 animate-float-delayed"></div>
        <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-brand-mint rounded-full opacity-60 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 transform-gpu">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in transform perspective-1000">
              Understand your cycle, <span className="text-primary animate-pulse-gentle transform hover:scale-105 transition-transform duration-300 inline-block">empower</span> your life
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-muted-foreground mb-8 animate-fade-in animation-delay-200">
              Track, learn, and thrive with personalized period insights, expert support, and self-care recommendations tailored to your unique cycle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in animation-delay-400">
              <Button size="lg" className="rounded-full transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" asChild>
                <Link to="/tracker">Start Tracking</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" asChild>
                <Link to="/learn">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative perspective-1000">
            <div className="relative transform-gpu hover:scale-105 transition-transform duration-500">
              <img 
                ref={imageRef}
                src="/placeholder.svg" 
                alt="Woman using period tracking app" 
                className="w-full h-auto rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl"
                style={{ transformStyle: 'preserve-3d' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-2xl pointer-events-none"></div>
            </div>
            <div 
              ref={circle1Ref}
              className="absolute -bottom-4 -right-4 w-48 h-48 bg-brand-lavender rounded-full -z-10 opacity-70 blur-xl transform-gpu"
            ></div>
            <div 
              ref={circle2Ref}
              className="absolute -top-4 -left-4 w-32 h-32 bg-brand-pink rounded-full -z-10 opacity-70 blur-xl transform-gpu"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
