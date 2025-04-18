
import { Calendar, Dumbbell, BookOpen, ShoppingBag, Video, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const featureItems = [
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Period Tracker",
    description: "Track your cycles, symptoms, and moods to better understand your body's patterns.",
    link: "/tracker"
  },
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    title: "Personalized Recommendations",
    description: "Get tailored diet, exercise, and self-care recommendations based on your cycle phase.",
    link: "/recommendations"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Educational Hub",
    description: "Access reliable information about menstrual health, hormones, and reproductive wellness.",
    link: "/learn"
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "Essential Products",
    description: "Shop for period products, supplements, and self-care items with fast, discreet delivery.",
    link: "/shop"
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Professional Support",
    description: "Connect with therapists and gynecologists through secure video consultations.",
    link: "/consult"
  },
  {
    icon: <Activity className="h-8 w-8 text-primary" />,
    title: "Cycle Analytics",
    description: "Gain insights into your cycle patterns and predict future periods with advanced analytics.",
    link: "/analytics"
  }
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Cycle Support</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand, manage, and nurture your menstrual wellness in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <Card className="h-full border-2 border-muted hover:border-primary/20 card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
