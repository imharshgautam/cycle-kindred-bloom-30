
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X, Heart, Calendar, Book, ShoppingBag, Video, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* 3D Background with glass morphism effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-xl border-b border-border/50">
        {/* 3D decorative elements */}
        <div className="absolute top-0 left-1/4 w-32 h-1 bg-gradient-to-r from-brand-pink/40 to-brand-lavender/40 blur-sm animate-pulse" />
        <div className="absolute top-0 right-1/3 w-24 h-1 bg-gradient-to-r from-brand-teal/40 to-brand-mint/40 blur-sm animate-pulse animation-delay-500" />
        <div className="absolute bottom-0 left-1/3 w-40 h-0.5 bg-gradient-to-r from-brand-peach/30 to-brand-mauve/30 blur-sm" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center group">
              <div className="relative">
                <Heart className="h-6 w-6 text-primary mr-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg" />
                <div className="absolute inset-0 h-6 w-6 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-serif font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 drop-shadow-sm">
                Luna Cycle
              </span>
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative mr-4 group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 to-brand-lavender/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-muted/60 backdrop-blur-sm rounded-full border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                <Input 
                  type="search" 
                  placeholder="Search..." 
                  className="pl-10 w-[200px] rounded-full bg-transparent border-0 focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/70"
                />
              </div>
            </div>

            {/* Navigation Links with 3D effects */}
            <RouterLink to="/tracker" className="relative px-4 py-2.5 text-sm rounded-xl hover:bg-gradient-to-br hover:from-muted/80 hover:to-muted/60 transition-all duration-300 flex items-center gap-2 group transform hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-border/30">
              <Calendar className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
              <span className="font-medium">Track</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-brand-lavender/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </RouterLink>

            <RouterLink to="/learn" className="relative px-4 py-2.5 text-sm rounded-xl hover:bg-gradient-to-br hover:from-muted/80 hover:to-muted/60 transition-all duration-300 flex items-center gap-2 group transform hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-border/30">
              <Book className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
              <span className="font-medium">Learn</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-mint/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </RouterLink>

            <RouterLink to="/shop" className="relative px-4 py-2.5 text-sm rounded-xl hover:bg-gradient-to-br hover:from-muted/80 hover:to-muted/60 transition-all duration-300 flex items-center gap-2 group transform hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-border/30">
              <ShoppingBag className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
              <span className="font-medium">Shop</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-peach/10 to-brand-mauve/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </RouterLink>

            <RouterLink to="/consult" className="relative px-4 py-2.5 text-sm rounded-xl hover:bg-gradient-to-br hover:from-muted/80 hover:to-muted/60 transition-all duration-300 flex items-center gap-2 group transform hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-border/30">
              <Video className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
              <span className="font-medium">Consult</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-lavender/10 to-brand-pink/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </RouterLink>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative rounded-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-border/30 hover:shadow-lg group"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button className="relative rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 border-0 group overflow-hidden">
              <span className="relative z-10 font-medium">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile menu button with 3D effect */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              className="relative rounded-xl hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-border/30 hover:shadow-lg group"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu with enhanced 3D effects */}
      {isMenuOpen && (
        <div className="md:hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl border-b border-border/50">
            {/* Mobile menu decorative elements */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-pink/30 via-brand-lavender/30 to-brand-teal/30 blur-sm" />
          </div>
          
          <div className="relative container mx-auto px-4 py-6 flex flex-col space-y-4 animate-fade-in">
            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 to-brand-lavender/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-muted/60 backdrop-blur-sm rounded-full border border-border/50 shadow-lg">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  type="search" 
                  placeholder="Search..." 
                  className="pl-10 w-full rounded-full bg-transparent border-0 focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <RouterLink to="/tracker" className="relative px-4 py-4 rounded-xl hover:bg-gradient-to-br hover:from-muted/80 hover:to-muted/60 transition-all duration-300 flex items-center gap-3 group transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-sm hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-border/30">
              <Calendar className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
              <span className="font-medium">Period Tracker</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-brand-lavender/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </RouterLink>

            <RouterLink to="/learn" className="relative px-4 py-4 rounded-xl hover:bg-gradient-to-br hover:from-muted/80 hover:to-muted/60 transition-all duration-300 flex items-center gap-3 group transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-sm hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-border/30">
              <Book className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
              <span className="font-medium">Educational Hub</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-mint/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </RouterLink>

            <RouterLink to="/shop" className="relative px-4 py-4 rounded-xl hover:bg-gradient-to-br hover:from-muted/80 hover:to-muted/60 transition-all duration-300 flex items-center gap-3 group transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-sm hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-border/30">
              <ShoppingBag className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
              <span className="font-medium">Shop Essentials</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-peach/10 to-brand-mauve/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </RouterLink>

            <RouterLink to="/consult" className="relative px-4 py-4 rounded-xl hover:bg-gradient-to-br hover:from-muted/80 hover:to-muted/60 transition-all duration-300 flex items-center gap-3 group transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-sm hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-border/30">
              <Video className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
              <span className="font-medium">Book Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-lavender/10 to-brand-pink/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </RouterLink>

            <div className="pt-4 flex flex-col space-y-3">
              <Button 
                variant="outline" 
                className="relative w-full justify-start rounded-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm border-border/50 hover:border-border group shadow-sm hover:shadow-lg" 
                size="sm"
              >
                <User className="h-4 w-4 mr-2 group-hover:text-primary transition-colors duration-300" />
                <span className="font-medium">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Button>
              
              <Button className="relative w-full justify-center rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 border-0 group overflow-hidden">
                <span className="relative z-10 font-medium">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
