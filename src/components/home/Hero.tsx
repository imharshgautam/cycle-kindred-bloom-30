
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient-background absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Understand your cycle, <span className="text-primary">empower</span> your life
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-muted-foreground mb-8">
              Track, learn, and thrive with personalized period insights, expert support, and self-care recommendations tailored to your unique cycle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link to="/tracker">Start Tracking</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link to="/learn">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <img 
              src="/placeholder.svg" 
              alt="Woman using period tracking app" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-brand-lavender rounded-full -z-10 opacity-70"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-pink rounded-full -z-10 opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
