
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { EnhancedHero } from "@/components/enhanced/EnhancedHero";
import Features from "@/components/home/Features";
import CyclePhases from "@/components/home/CyclePhases";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/home/CallToAction";
import { FloatingElements } from "@/components/interactive/FloatingElements";
import { ParallaxSection } from "@/components/interactive/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced 3D Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Multi-layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 via-brand-lavender/15 to-brand-teal/20 dark:from-brand-pink/10 dark:via-brand-lavender/8 dark:to-brand-teal/10" />
        <div className="absolute inset-0 bg-gradient-to-tl from-brand-peach/15 via-transparent to-brand-mint/10 dark:from-brand-peach/8 dark:to-brand-mint/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-mauve/10 to-transparent dark:via-brand-mauve/5" />
        
        {/* Large floating geometric shapes with enhanced 3D */}
        <div className="absolute -top-64 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-pink/30 to-brand-lavender/20 rounded-full blur-3xl animate-float transform-gpu" style={{transform: 'rotateX(20deg) rotateY(-15deg) translateZ(50px)'}} />
        <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-gradient-to-br from-brand-teal/25 to-brand-mint/15 rounded-full blur-2xl animate-float-delayed transform-gpu" style={{transform: 'rotateX(-15deg) rotateY(25deg) translateZ(30px)'}} />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-brand-peach/20 to-brand-mauve/15 rounded-full blur-2xl animate-float opacity-60 transform-gpu" style={{transform: 'rotateX(10deg) rotateZ(-20deg) translateZ(40px)'}} />
        <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-gradient-to-br from-brand-lavender/25 to-brand-pink/20 rounded-full blur-xl animate-float-delayed opacity-70 transform-gpu" />
        
        {/* Enhanced smaller decorative elements */}
        <div className="absolute top-20 left-1/5 w-32 h-32 bg-gradient-to-br from-brand-pink/25 to-brand-lavender/20 transform rotate-45 animate-float rounded-3xl opacity-60 dark:opacity-30" />
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-brand-teal/30 to-brand-mint/25 transform -rotate-12 animate-float-delayed rounded-2xl opacity-50 dark:opacity-25" />
        <div className="absolute top-1/2 right-1/5 w-20 h-20 bg-gradient-to-br from-brand-peach/35 to-brand-mauve/30 transform rotate-45 animate-tilt rounded-xl opacity-60 dark:opacity-30" />
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-gradient-to-br from-brand-mint/40 to-brand-teal/35 transform -rotate-30 animate-float rounded-full opacity-50 dark:opacity-25" />
        <div className="absolute bottom-1/3 left-1/6 w-28 h-28 bg-gradient-to-br from-brand-mauve/25 to-brand-pink/20 transform rotate-12 animate-float-delayed rounded-2xl opacity-40 dark:opacity-20" />
        
        {/* Enhanced floating particles */}
        <div className="absolute top-16 right-1/6 w-6 h-6 bg-brand-pink/60 rounded-full animate-pulse opacity-70 dark:opacity-40" />
        <div className="absolute top-40 left-1/4 w-4 h-4 bg-brand-lavender/70 rounded-full animate-bounce opacity-60 dark:opacity-35" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-48 right-1/4 w-8 h-8 bg-brand-teal/50 rounded-full animate-pulse opacity-50 dark:opacity-25" style={{animationDelay: '1s'}} />
        <div className="absolute top-3/4 left-1/5 w-5 h-5 bg-brand-peach/60 rounded-full animate-bounce opacity-60 dark:opacity-30" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-16 right-1/6 w-7 h-7 bg-brand-mint/55 rounded-full animate-pulse opacity-55 dark:opacity-30" style={{animationDelay: '2s'}} />
      </div>

      {/* Interactive floating elements */}
      <FloatingElements />

      <div className="relative z-10">
        <NavBar />
        <main className="flex-grow">
          <div className="animate-fade-in">
            <EnhancedHero />
          </div>
          
          <ParallaxSection speed={0.1}>
            <div className="animate-fade-in animation-delay-200">
              <Features />
            </div>
          </ParallaxSection>
          
          <ParallaxSection speed={0.15}>
            <div className="animate-fade-in animation-delay-400">
              <CyclePhases />
            </div>
          </ParallaxSection>
          
          <ParallaxSection speed={0.05}>
            <div className="animate-fade-in animation-delay-600">
              <TestimonialSection />
            </div>
          </ParallaxSection>
          
          <div className="animate-fade-in animation-delay-800">
            <CallToAction />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
