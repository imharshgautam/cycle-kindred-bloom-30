
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const phaseData = [
  {
    id: "menstrual",
    name: "Menstrual Phase",
    duration: "Day 1-5",
    description: "This is when your period occurs as your uterine lining sheds. Hormone levels are low, and you may experience cramps, fatigue, and mood changes.",
    recommendations: {
      diet: "Iron-rich foods, warm soups, herbal teas, dark chocolate",
      activities: "Gentle yoga, walking, meditation, rest when needed",
      selfCare: "Warm baths, heating pads, extra sleep, comfort activities"
    },
    gradient: "from-red-400/20 to-pink-400/20"
  },
  {
    id: "follicular",
    name: "Follicular Phase",
    duration: "Day 6-13",
    description: "Following your period, estrogen begins to rise. You'll likely experience increased energy, creativity, and positivity.",
    recommendations: {
      diet: "Fresh fruits, leafy greens, fermented foods, lean proteins",
      activities: "Cardio workouts, strength training, new challenges, socializing",
      selfCare: "Start new projects, plan activities, skin treatments, learning"
    },
    gradient: "from-green-400/20 to-emerald-400/20"
  },
  {
    id: "ovulatory",
    name: "Ovulatory Phase",
    duration: "Day 14-16",
    description: "Estrogen peaks and an egg is released. You're likely to feel confident, social, and at your physical best.",
    recommendations: {
      diet: "Cruciferous vegetables, antioxidant-rich foods, omega-3 fatty acids",
      activities: "High-intensity workouts, team sports, networking events",
      selfCare: "Social connections, difficult tasks, important conversations"
    },
    gradient: "from-yellow-400/20 to-orange-400/20"
  },
  {
    id: "luteal",
    name: "Luteal Phase",
    duration: "Day 17-28",
    description: "Progesterone rises, then both hormones decline if pregnancy doesn't occur. You may experience PMS symptoms like mood changes, bloating, and fatigue.",
    recommendations: {
      diet: "Magnesium-rich foods, complex carbs, calcium-rich foods, avoid caffeine",
      activities: "Yoga, swimming, walking, relaxing activities",
      selfCare: "Journaling, massage, warm baths, mindfulness, prioritize rest"
    },
    gradient: "from-purple-400/20 to-indigo-400/20"
  }
];

const CyclePhases = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-lavender rounded-full -z-10 opacity-40 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-pink rounded-full -z-10 opacity-40 blur-3xl animate-float-delayed"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-20 right-1/4 w-24 h-24 bg-brand-teal rounded-full opacity-30 blur-xl animate-float"></div>
      <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-brand-peach rounded-full opacity-30 blur-xl animate-float-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 transform hover:scale-105 transition-transform duration-300 animate-tilt">
            Understanding Your Cycle Phases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            Each phase of your menstrual cycle brings unique changes and needs. Learn about your body's rhythm and how to support yourself through each phase.
          </p>
        </div>

        <Tabs defaultValue="menstrual" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 transform perspective-1000">
            {phaseData.map((phase) => (
              <TabsTrigger 
                key={phase.id} 
                value={phase.id}
                className="data-[state=active]:bg-primary/10 text-sm md:text-base transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
              >
                {phase.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {phaseData.map((phase) => (
            <TabsContent key={phase.id} value={phase.id} className="animate-fade-in">
              <Card className="border-2 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl perspective-1000 card-3d">
                <CardContent className="p-6 md:p-8 relative overflow-hidden">
                  {/* Dynamic gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-50 rounded-lg`}></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <h3 className="text-2xl font-bold mb-2 text-primary transform transition-all duration-300 hover:scale-110">
                        {phase.name}
                      </h3>
                      <p className="font-medium text-sm mb-4 transform transition-all duration-300 hover:scale-105">
                        Typical duration: {phase.duration}
                      </p>
                      <p className="text-muted-foreground mb-6 transform transition-all duration-300 hover:scale-105">
                        {phase.description}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-3 rounded-lg hover:bg-white/50">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-brand-pink animate-pulse"></span>
                          Nutrition Recommendations
                        </h4>
                        <p className="text-sm text-muted-foreground">{phase.recommendations.diet}</p>
                      </div>
                      
                      <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-3 rounded-lg hover:bg-white/50">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-brand-lavender animate-pulse"></span>
                          Suggested Activities
                        </h4>
                        <p className="text-sm text-muted-foreground">{phase.recommendations.activities}</p>
                      </div>
                      
                      <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-3 rounded-lg hover:bg-white/50">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-brand-teal animate-pulse"></span>
                          Self-Care Focus
                        </h4>
                        <p className="text-sm text-muted-foreground">{phase.recommendations.selfCare}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CyclePhases;
