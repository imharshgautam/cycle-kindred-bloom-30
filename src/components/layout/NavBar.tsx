
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
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center">
              <Heart className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-serif font-semibold">Luna Cycle</span>
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-10 w-[200px] rounded-full bg-muted/50"
              />
            </div>
            <RouterLink to="/tracker" className="px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors flex items-center gap-1">
              <Calendar className="h-4 w-4" /> Track
            </RouterLink>
            <RouterLink to="/learn" className="px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors flex items-center gap-1">
              <Book className="h-4 w-4" /> Learn
            </RouterLink>
            <RouterLink to="/shop" className="px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors flex items-center gap-1">
              <ShoppingBag className="h-4 w-4" /> Shop
            </RouterLink>
            <RouterLink to="/consult" className="px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors flex items-center gap-1">
              <Video className="h-4 w-4" /> Consult
            </RouterLink>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-10 w-full rounded-full bg-muted/50"
              />
            </div>
            <RouterLink to="/tracker" className="px-3 py-2.5 rounded-md hover:bg-muted transition-colors flex items-center gap-2">
              <Calendar className="h-5 w-5" /> Period Tracker
            </RouterLink>
            <RouterLink to="/learn" className="px-3 py-2.5 rounded-md hover:bg-muted transition-colors flex items-center gap-2">
              <Book className="h-5 w-5" /> Educational Hub
            </RouterLink>
            <RouterLink to="/shop" className="px-3 py-2.5 rounded-md hover:bg-muted transition-colors flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" /> Shop Essentials
            </RouterLink>
            <RouterLink to="/consult" className="px-3 py-2.5 rounded-md hover:bg-muted transition-colors flex items-center gap-2">
              <Video className="h-5 w-5" /> Book Consultation
            </RouterLink>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <User className="h-4 w-4 mr-2" /> Sign In
              </Button>
              <Button className="w-full justify-center">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
