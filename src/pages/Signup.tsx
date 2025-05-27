
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Heart, Sparkles, User, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8">
      {/* Enhanced 3D Parallax Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Multi-layered gradients with parallax */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-lavender/30 via-brand-teal/20 to-brand-mint/25 animate-pulse-gentle" />
        <div className="absolute inset-0 bg-gradient-to-tl from-brand-mauve/20 via-transparent to-brand-peach/15" />
        
        {/* Large floating elements with different positioning */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-lavender/40 to-brand-teal/30 rounded-full blur-3xl animate-float transform-gpu" style={{transform: 'rotateX(-20deg) rotateY(15deg) translateZ(120px)'}} />
        <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-gradient-to-br from-brand-mint/30 to-brand-peach/20 rounded-full blur-2xl animate-float-delayed transform-gpu" style={{transform: 'rotateX(15deg) rotateY(-25deg) translateZ(90px)'}} />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-brand-mauve/25 to-brand-pink/20 rounded-full blur-2xl animate-float opacity-70 transform-gpu" />
        
        {/* Cute floating elements */}
        <div className="absolute top-16 right-20 animate-float">
          <Sparkles className="h-10 w-10 text-brand-lavender/60 animate-pulse" />
        </div>
        <div className="absolute top-1/3 left-16 animate-float-delayed">
          <Heart className="h-7 w-7 text-brand-teal/70 fill-current animate-pulse" style={{animationDelay: '1.5s'}} />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-float">
          <Sparkles className="h-6 w-6 text-brand-mint/60 animate-pulse" style={{animationDelay: '2.5s'}} />
        </div>
        <div className="absolute bottom-16 left-1/4 animate-float-delayed">
          <Heart className="h-8 w-8 text-brand-peach/70 fill-current animate-pulse" style={{animationDelay: '0.8s'}} />
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-40 right-1/3 w-28 h-28 bg-gradient-to-br from-brand-lavender/30 to-brand-teal/25 transform rotate-12 animate-float rounded-3xl opacity-60" />
        <div className="absolute bottom-32 left-1/5 w-24 h-24 bg-gradient-to-br from-brand-mint/35 to-brand-mauve/30 transform -rotate-45 animate-float-delayed rounded-2xl opacity-50" />
      </div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-fade-in">
        <Card className="relative backdrop-blur-xl bg-card/80 border-border/50 shadow-3xl hover:shadow-4xl transition-all duration-500 transform hover:scale-[1.02] card-3d">
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-lavender/10 to-brand-teal/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          
          <CardHeader className="text-center space-y-4 pb-6">
            <div className="relative flex justify-center">
              <div className="relative">
                <Sparkles className="h-12 w-12 text-primary animate-pulse drop-shadow-lg" />
                <div className="absolute inset-0 h-12 w-12 bg-primary/20 rounded-full blur-md animate-pulse" />
              </div>
            </div>
            <div>
              <CardTitle className="text-3xl font-serif bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Join Luna Cycle
              </CardTitle>
              <CardDescription className="text-muted-foreground/80 mt-2">
                Start your personalized wellness journey
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 bg-muted/30 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 hover:bg-muted/40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 bg-muted/30 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 hover:bg-muted/40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 bg-muted/30 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 hover:bg-muted/40"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-300" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-300" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 pr-10 bg-muted/30 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 hover:bg-muted/40"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-300" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors duration-300" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <input type="checkbox" className="rounded border-border/50 mt-0.5" required />
                <span className="text-muted-foreground leading-relaxed">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:text-primary/80 transition-colors duration-300 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:text-primary/80 transition-colors duration-300 hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5"
              >
                Create Account
                <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
              </Button>
            </form>

            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium transition-colors duration-300 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
