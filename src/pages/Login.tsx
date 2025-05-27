
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Heart, Sparkles, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced 3D Parallax Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Multi-layered gradients with parallax */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/30 via-brand-lavender/20 to-brand-teal/25 animate-pulse-gentle" />
        <div className="absolute inset-0 bg-gradient-to-tl from-brand-peach/20 via-transparent to-brand-mint/15" />
        
        {/* Large floating elements with parallax */}
        <div className="absolute -top-64 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-pink/40 to-brand-lavender/30 rounded-full blur-3xl animate-float transform-gpu" style={{transform: 'rotateX(20deg) rotateY(-15deg) translateZ(100px)'}} />
        <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-gradient-to-br from-brand-teal/30 to-brand-mint/20 rounded-full blur-2xl animate-float-delayed transform-gpu" style={{transform: 'rotateX(-15deg) rotateY(25deg) translateZ(80px)'}} />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-brand-peach/25 to-brand-mauve/20 rounded-full blur-2xl animate-float opacity-70 transform-gpu" />
        
        {/* Cute floating hearts */}
        <div className="absolute top-20 left-20 animate-float">
          <Heart className="h-8 w-8 text-brand-pink/60 fill-current animate-pulse" />
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed">
          <Heart className="h-6 w-6 text-brand-lavender/70 fill-current animate-pulse" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float">
          <Sparkles className="h-7 w-7 text-brand-teal/60 animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute bottom-20 right-20 animate-float-delayed">
          <Sparkles className="h-5 w-5 text-brand-peach/70 animate-pulse" style={{animationDelay: '0.5s'}} />
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 left-1/3 w-24 h-24 bg-gradient-to-br from-brand-pink/30 to-brand-lavender/25 transform rotate-45 animate-float rounded-3xl opacity-60" />
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-gradient-to-br from-brand-teal/35 to-brand-mint/30 transform -rotate-12 animate-float-delayed rounded-2xl opacity-50" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-fade-in">
        <Card className="relative backdrop-blur-xl bg-card/80 border-border/50 shadow-3xl hover:shadow-4xl transition-all duration-500 transform hover:scale-[1.02] card-3d">
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-brand-lavender/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="relative flex justify-center">
              <div className="relative">
                <Heart className="h-12 w-12 text-primary animate-pulse drop-shadow-lg" />
                <div className="absolute inset-0 h-12 w-12 bg-primary/20 rounded-full blur-md animate-pulse" />
              </div>
            </div>
            <div>
              <CardTitle className="text-3xl font-serif bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-muted-foreground/80 mt-2">
                Sign in to continue your wellness journey
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border/50" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-primary hover:text-primary/80 transition-colors duration-300 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5"
              >
                Sign In
                <Heart className="ml-2 h-4 w-4 animate-pulse" />
              </Button>
            </form>

            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:text-primary/80 font-medium transition-colors duration-300 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
