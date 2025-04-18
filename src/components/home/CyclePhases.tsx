
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
    }
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
    }
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
    }
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
    }
  }
];

const CyclePhases = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-lavender rounded-full -z-10 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-pink rounded-full -z-10 opacity-40 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Your Cycle Phases</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each phase of your menstrual cycle brings unique changes and needs. Learn about your body's rhythm and how to support yourself through each phase.
          </p>
        </div>

        <Tabs defaultValue="menstrual" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {phaseData.map((phase) => (
              <TabsTrigger 
                key={phase.id} 
                value={phase.id}
                className="data-[state=active]:bg-primary/10 text-sm md:text-base"
              >
                {phase.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {phaseData.map((phase) => (
            <TabsContent key={phase.id} value={phase.id} className="animate-fade-in">
              <Card className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">{phase.name}</h3>
                      <p className="font-medium text-sm mb-4">Typical duration: {phase.duration}</p>
                      <p className="text-muted-foreground mb-6">{phase.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-brand-pink"></span>
                          Nutrition Recommendations
                        </h4>
                        <p className="text-sm text-muted-foreground">{phase.recommendations.diet}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-brand-lavender"></span>
                          Suggested Activities
                        </h4>
                        <p className="text-sm text-muted-foreground">{phase.recommendations.activities}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-brand-teal"></span>
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
