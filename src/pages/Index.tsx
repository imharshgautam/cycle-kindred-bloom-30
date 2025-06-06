
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CyclePhases from "@/components/home/CyclePhases";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden transform-gpu">
      {/* Much darker 3D Background with higher opacity */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Much darker base overlay for light mode */}
        <div className="absolute inset-0 bg-muted/70" />
        
        {/* Enhanced gradients with much more opacity for darker appearance */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/40 via-brand-lavender/35 to-brand-teal/40" />
        <div className="absolute inset-0 bg-gradient-to-tl from-brand-peach/35 via-transparent to-brand-mint/30" />
        
        {/* Optimized floating geometric shapes with much higher opacity */}
        <div className="absolute -top-64 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-pink/45 to-brand-lavender/40 rounded-full blur-3xl animate-float transform-gpu" />
        <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-gradient-to-br from-brand-teal/43 to-brand-mint/37 rounded-full blur-2xl animate-float-delayed transform-gpu" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-brand-peach/40 to-brand-mauve/37 rounded-full blur-2xl animate-float opacity-90 transform-gpu" />
        <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-gradient-to-br from-brand-lavender/43 to-brand-pink/40 rounded-full blur-xl animate-float-delayed opacity-100 transform-gpu" />
        
        {/* Smaller optimized decorative elements with much higher opacity */}
        <div className="absolute top-20 left-1/5 w-32 h-32 bg-gradient-to-br from-brand-pink/45 to-brand-lavender/40 transform rotate-45 animate-float rounded-3xl opacity-85" />
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-brand-teal/50 to-brand-mint/45 transform -rotate-12 animate-float-delayed rounded-2xl opacity-75" />
        <div className="absolute top-1/2 right-1/5 w-20 h-20 bg-gradient-to-br from-brand-peach/55 to-brand-mauve/50 transform rotate-45 animate-tilt rounded-xl opacity-85" />
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-gradient-to-br from-brand-mint/60 to-brand-teal/55 transform -rotate-30 animate-float rounded-full opacity-75" />
        <div className="absolute bottom-1/3 left-1/6 w-28 h-28 bg-gradient-to-br from-brand-mauve/45 to-brand-pink/40 transform rotate-12 animate-float-delayed rounded-2xl opacity-65" />
        
        {/* Optimized floating particles with much higher visibility */}
        <div className="absolute top-16 right-1/6 w-6 h-6 bg-brand-pink/85 rounded-full animate-pulse opacity-90 transform-gpu" />
        <div className="absolute top-40 left-1/4 w-4 h-4 bg-brand-lavender/90 rounded-full animate-bounce opacity-85 transform-gpu" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-48 right-1/4 w-8 h-8 bg-brand-teal/75 rounded-full animate-pulse opacity-75 transform-gpu" style={{animationDelay: '1s'}} />
        <div className="absolute top-3/4 left-1/5 w-5 h-5 bg-brand-peach/85 rounded-full animate-bounce opacity-85 transform-gpu" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-16 right-1/6 w-7 h-7 bg-brand-mint/80 rounded-full animate-pulse opacity-80 transform-gpu" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10">
        <NavBar />
        <main className="flex-grow">
          <div className="animate-fade-in transform-gpu">
            <Hero />
          </div>
          <div className="animate-fade-in animation-delay-200 transform-gpu">
            <Features />
          </div>
          <div className="animate-fade-in animation-delay-400 transform-gpu">
            <CyclePhases />
          </div>
          <div className="animate-fade-in animation-delay-200 transform-gpu">
            <TestimonialSection />
          </div>
          <div className="animate-fade-in animation-delay-400 transform-gpu">
            <CallToAction />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
