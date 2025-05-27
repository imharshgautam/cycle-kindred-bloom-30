
import { Calendar, Dumbbell, BookOpen, ShoppingBag, Video, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const featureItems = [
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Period Tracker",
    description: "Track your cycles, symptoms, and moods to better understand your body's patterns.",
    link: "/tracker",
    color: "from-brand-pink to-brand-lavender"
  },
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    title: "Personalized Recommendations",
    description: "Get tailored diet, exercise, and self-care recommendations based on your cycle phase.",
    link: "/recommendations",
    color: "from-brand-lavender to-brand-teal"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Educational Hub",
    description: "Access reliable information about menstrual health, hormones, and reproductive wellness.",
    link: "/learn",
    color: "from-brand-teal to-brand-mint"
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "Essential Products",
    description: "Shop for period products, supplements, and self-care items with fast, discreet delivery.",
    link: "/shop",
    color: "from-brand-mint to-brand-peach"
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Professional Support",
    description: "Connect with therapists and gynecologists through secure video consultations.",
    link: "/consult",
    color: "from-brand-peach to-brand-mauve"
  },
  {
    icon: <Activity className="h-8 w-8 text-primary" />,
    title: "Cycle Analytics",
    description: "Gain insights into your cycle patterns and predict future periods with advanced analytics.",
    link: "/analytics",
    color: "from-brand-mauve to-brand-pink"
  }
];

const Features = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-lavender rounded-full opacity-20 blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-pink rounded-full opacity-20 blur-2xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 transform hover:scale-105 transition-transform duration-300">
            Comprehensive Cycle Support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand, manage, and nurture your menstrual wellness in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <Link to={item.link} key={index} className="group">
              <Card className="h-full border-2 border-muted hover:border-primary/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl perspective-1000 group-hover:rotate-1">
                <CardContent className="p-6 flex flex-col items-center text-center relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="rounded-full bg-primary/10 p-4 mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2 relative z-10 transform transition-all duration-300 group-hover:scale-105">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground relative z-10 transform transition-all duration-300 group-hover:scale-105">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
