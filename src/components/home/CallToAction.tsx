
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-pink/60 to-brand-lavender/60 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden backdrop-blur-sm border border-border/20">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-pink/60 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-lavender/60 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Wellness Journey Today</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of women who've transformed their relationship with their menstrual health. Your first step toward cycle harmony is just a click away.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link to="/signup">Create Free Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link to="/learn">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
