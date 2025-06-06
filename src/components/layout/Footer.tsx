import { Heart, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-serif font-semibold">Luna Cycle</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Supporting women through every phase of their cycle with personalized care and education.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/tracker" className="text-muted-foreground hover:text-foreground text-sm">Period Tracker</Link></li>
              <li><Link to="/recommendations" className="text-muted-foreground hover:text-foreground text-sm">Personalized Plans</Link></li>
              <li><Link to="/learn" className="text-muted-foreground hover:text-foreground text-sm">Educational Resources</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground text-sm">Shop Essentials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/consult" className="text-muted-foreground hover:text-foreground text-sm">Therapy Sessions</Link></li>
              <li><Link to="/consult" className="text-muted-foreground hover:text-foreground text-sm">Gynecologist Connect</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground text-sm">FAQs</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm">Privacy Policy</Link></li>
              <li><Link to="/accessibility" className="text-muted-foreground hover:text-foreground text-sm">Accessibility</Link></li>
              <li><Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Luna Cycle. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Made with care for every phase of your cycle</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
