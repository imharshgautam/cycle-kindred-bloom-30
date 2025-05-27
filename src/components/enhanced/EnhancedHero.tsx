
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ParallaxSection } from "@/components/interactive/ParallaxSection";
import { GlowingOrb } from "@/components/interactive/GlowingOrb";
import { Heart, Sparkles, ArrowRight } from "lucide-react";

export const EnhancedHero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background with Parallax */}
      <ParallaxSection speed={0.3} className="absolute inset-0 z-0">
        <div className="gradient-background absolute inset-0"></div>
        <GlowingOrb size={200} color="brand-pink" className="absolute top-10 right-1/4" />
        <GlowingOrb size={150} color="brand-lavender" className="absolute bottom-20 left-1/4" />
        <GlowingOrb size={120} color="brand-teal" className="absolute top-1/2 right-10" />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          <ParallaxSection speed={0.1} className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-pink/20 via-brand-lavender/20 to-brand-teal/20 rounded-3xl blur-xl opacity-70 animate-pulse"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
                Understand your cycle, 
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-brand-pink to-brand-lavender bg-clip-text text-transparent animate-pulse-gentle">
                    empower
                  </span>
                  <Heart className="absolute -top-2 -right-8 h-6 w-6 text-brand-pink animate-bounce" />
                </span> 
                your life
              </h1>
            </div>
            
            <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-muted-foreground mb-8 animate-fade-in animation-delay-200">
              Track, learn, and thrive with personalized period insights, expert support, and self-care recommendations tailored to your unique cycle.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in animation-delay-400">
              <Button 
                size="lg" 
                className="group relative overflow-hidden rounded-full transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-primary to-brand-pink"
                asChild
              >
                <Link to="/tracker">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Tracking
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-lavender/20 to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group relative overflow-hidden rounded-full transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm border-2 hover:border-primary/50"
                asChild
              >
                <Link to="/learn">
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-mint/10 to-brand-peach/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
            </div>
          </ParallaxSection>
          
          <ParallaxSection speed={0.2} className="w-full lg:w-1/2 relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/30 via-brand-lavender/20 to-brand-teal/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
              <div className="relative overflow-hidden rounded-3xl shadow-3xl group-hover:shadow-4xl transition-all duration-500 transform group-hover:scale-[1.02]">
                <img 
                  src="/placeholder.svg" 
                  alt="Woman using period tracking app" 
                  className="w-full h-auto transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500" />
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute -top-4 -right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                <Heart className="h-6 w-6 text-brand-pink" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float-delayed">
                <Sparkles className="h-6 w-6 text-brand-lavender" />
              </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </div>
  );
};
