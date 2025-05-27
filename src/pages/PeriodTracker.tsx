
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Calendar as CalendarIcon, CircleAlert, Sparkles, Heart } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import AIPrediction from "@/components/tracker/AIPrediction";
import { CycleData } from "@/services/cyclePrediction";
import HistoryTable from "@/components/tracker/HistoryTable";

const symptomsOptions = [
  "Cramps", "Headache", "Backache", "Fatigue", 
  "Bloating", "Acne", "Mood Swings", "Cravings", 
  "Insomnia", "Breast Tenderness"
];

const moodOptions = [
  { value: "happy", label: "Happy" },
  { value: "calm", label: "Calm" },
  { value: "irritable", label: "Irritable" },
  { value: "anxious", label: "Anxious" },
  { value: "sad", label: "Sad" },
  { value: "energetic", label: "Energetic" },
];

const PeriodTracker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [flowIntensity, setFlowIntensity] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<string>("calm");
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  // Simulated historical data for AI predictions
  const [historicalData] = useState<CycleData[]>([
    {
      date: "2024-12-15",
      flowIntensity: 2,
      symptoms: ["Cramps", "Fatigue"],
      mood: "irritable"
    },
    {
      date: "2024-11-18",
      flowIntensity: 3,
      symptoms: ["Headache", "Bloating", "Mood Swings"],
      mood: "sad"
    },
    {
      date: "2024-10-20",
      flowIntensity: 2,
      symptoms: ["Cramps", "Backache"],
      mood: "calm"
    }
  ]);

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSave = () => {
    // Here we would typically save the data to a backend
    toast({
      title: "Entry saved successfully",
      description: `Data for ${format(selectedDate!, "MMMM d, yyyy")} has been recorded.`,
      duration: 3000
    });
  };

  const getPeriodPhase = () => {
    // This would normally be calculated based on user's cycle data
    // For demo purposes, we're returning a static value
    return {
      phase: "Menstrual Phase",
      day: "Day 2",
      nextPeriod: "May 15, 2025",
      description: "You're in your menstrual phase. This is when your period occurs as the uterine lining sheds."
    };
  };

  const cycleInfo = getPeriodPhase();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12 relative overflow-hidden">
        {/* Enhanced 3D Background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          {/* Complex gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 via-indigo-50/50 to-teal-100/40" />
          <div className="absolute inset-0 bg-gradient-to-tl from-rose-100/40 via-transparent to-cyan-100/30" />
          
          {/* Floating 3D orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-pink-300/40 to-fuchsia-400/30 rounded-full blur-3xl animate-float transform-gpu perspective-1000" style={{transform: 'rotateX(15deg) rotateY(25deg)'}} />
          <div className="absolute top-1/3 -left-48 w-80 h-80 bg-gradient-to-br from-cyan-300/35 to-indigo-400/25 rounded-full blur-2xl animate-float-delayed transform-gpu perspective-1000" style={{transform: 'rotateX(-10deg) rotateY(-20deg)'}} />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-teal-300/30 to-emerald-400/20 rounded-full blur-2xl animate-float opacity-70 transform-gpu perspective-1000" style={{transform: 'rotateX(20deg) rotateZ(15deg)'}} />
          
          {/* Geometric shapes */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-rose-500/15 transform rotate-45 animate-tilt rounded-2xl blur-sm" />
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-br from-fuchsia-400/25 to-pink-500/20 transform -rotate-12 animate-float-delayed rounded-full blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="relative inline-block">
                <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight perspective-1000">
                  Period Tracker
                </h1>
                <div className="absolute -top-2 -right-8 animate-pulse">
                  <Sparkles className="h-8 w-8 text-pink-400 animate-spin" style={{animationDuration: '3s'}} />
                </div>
                <div className="absolute -bottom-2 -left-6 animate-pulse">
                  <Heart className="h-6 w-6 text-fuchsia-400 animate-bounce" style={{animationDelay: '1s'}} />
                </div>
              </div>
              <p className="text-muted-foreground text-lg font-medium animate-fade-in animation-delay-200">
                Monitor your cycle, symptoms, and patterns over time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Sidebar: 4 columns on lg+ screens */}
              <div className="lg:col-span-4 flex flex-col gap-6 h-full animate-fade-in animation-delay-200">
                <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform-gpu card-3d group flex-1 min-h-[350px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-fuchsia-400/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative z-20">
                    <CardTitle className="text-xl font-bold group-hover:text-pink-600 transition-colors duration-300">Cycle Overview</CardTitle>
                    <CardDescription>Your current cycle information</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-20">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-400/20 to-fuchsia-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <CheckCircle className="h-5 w-5 text-pink-500" />
                      </div>
                      <div>
                        <p className="font-medium">{cycleInfo.phase}</p>
                        <p className="text-sm text-muted-foreground">{cycleInfo.day} of cycle</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <div>
                        <p className="text-sm font-medium">Next period expected</p>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />{cycleInfo.nextPeriod}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Cycle phase information</p>
                        <p className="text-sm text-muted-foreground">{cycleInfo.description}</p>
                      </div>
                      
                      <div className="p-3 bg-gradient-to-r from-amber-50/80 to-orange-50/80 border border-amber-200/50 rounded-xl flex items-start gap-3 backdrop-blur-sm">
                        <CircleAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                          This is an estimate based on your past cycles. Your actual period may vary.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="animate-fade-in animation-delay-400">
                  <AIPrediction 
                    historicalData={historicalData}
                    lastPeriodDate={new Date("2024-12-15")}
                  />
                </div>
              </div>

              {/* Main Log Area: 8 columns on lg+ screens */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform-gpu card-3d group animate-fade-in animation-delay-300 min-h-[750px] flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-cyan-400/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative z-20">
                    <CardTitle className="text-2xl font-bold group-hover:text-pink-600 transition-colors duration-300">Log Today's Information</CardTitle>
                    <CardDescription>Record how you're feeling and any symptoms</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-20">
                    <Tabs defaultValue="period" className="w-full">
                      <div className="flex justify-center mb-6">
                        <TabsList className="bg-white/60 backdrop-blur-md border-2 border-white/30 shadow-xl rounded-2xl p-2">
                          <TabsTrigger 
                            value="period" 
                            className="flex items-center gap-2 py-3 px-4 rounded-xl text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-fuchsia-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu"
                          >
                            Period Flow
                          </TabsTrigger>
                          <TabsTrigger 
                            value="symptoms" 
                            className="flex items-center gap-2 py-3 px-4 rounded-xl text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu"
                          >
                            Symptoms
                          </TabsTrigger>
                          <TabsTrigger 
                            value="mood" 
                            className="flex items-center gap-2 py-3 px-4 rounded-xl text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu"
                          >
                            Mood & Notes
                          </TabsTrigger>
                        </TabsList>
                      </div>
                      
                      <TabsContent value="period" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-lg font-medium mb-4">Select Date</h3>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              className="rounded-2xl border-2 border-white/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
                            />
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-4">Flow Intensity</h3>
                            <div className="space-y-6">
                              <div>
                                <Label htmlFor="flow-intensity" className="mb-2 block">
                                  {flowIntensity === 0 ? "No flow" : 
                                   flowIntensity === 1 ? "Light flow" : 
                                   flowIntensity === 2 ? "Medium flow" : 
                                   "Heavy flow"}
                                </Label>
                                <Slider
                                  id="flow-intensity"
                                  max={3}
                                  step={1}
                                  value={[flowIntensity]}
                                  onValueChange={(value) => setFlowIntensity(value[0])}
                                  className="py-4"
                                />
                              </div>
                              
                              <div className="bg-gradient-to-r from-pink-50/80 to-fuchsia-50/80 p-4 rounded-xl border border-pink-200/50 backdrop-blur-sm">
                                <p className="font-medium mb-2">Your selection:</p>
                                <p className="text-sm text-muted-foreground">
                                  {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "No date selected"} - {" "}
                                  {flowIntensity === 0 ? "No period flow" : 
                                   flowIntensity === 1 ? "Light flow" : 
                                   flowIntensity === 2 ? "Medium flow" : 
                                   "Heavy flow"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="symptoms" className="space-y-6">
                        <h3 className="text-lg font-medium mb-4">Select Symptoms</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                          {symptomsOptions.map((symptom) => (
                            <Button
                              key={symptom}
                              variant={selectedSymptoms.includes(symptom) ? "default" : "outline"}
                              onClick={() => toggleSymptom(symptom)}
                              className={`h-auto py-3 px-4 justify-start text-sm rounded-xl transition-all duration-300 hover:scale-105 transform-gpu ${
                                selectedSymptoms.includes(symptom) 
                                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg border-transparent" 
                                  : "border-2 bg-white/70 backdrop-blur-sm border-white/50 hover:bg-white/90 hover:shadow-xl"
                              }`}
                            >
                              {symptom}
                            </Button>
                          ))}
                        </div>
                        
                        <div className="bg-gradient-to-r from-cyan-50/80 to-indigo-50/80 p-4 rounded-xl border border-cyan-200/50 backdrop-blur-sm mt-8">
                          <p className="font-medium mb-2">Selected symptoms:</p>
                          <p className="text-sm text-muted-foreground">
                            {selectedSymptoms.length > 0 
                              ? selectedSymptoms.join(", ") 
                              : "No symptoms selected"}
                          </p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="mood" className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">How are you feeling today?</h3>
                          <RadioGroup 
                            value={selectedMood} 
                            onValueChange={setSelectedMood}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                          >
                            {moodOptions.map((mood) => (
                              <div key={mood.value} className="flex items-center space-x-3 p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white/90 hover:shadow-lg transition-all duration-300">
                                <RadioGroupItem value={mood.value} id={mood.value} />
                                <Label htmlFor={mood.value} className="font-medium">{mood.label}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-4">Notes</h3>
                          <div className="grid w-full gap-2">
                            <Label htmlFor="notes">Add any additional thoughts or observations</Label>
                            <Input
                              id="notes"
                              placeholder="Example: Had trouble sleeping last night"
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                              className="h-20 rounded-xl border-2 border-white/50 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] transform-gpu"
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="border-t border-white/20 pt-6 flex justify-end relative z-20">
                    <Button 
                      onClick={handleSave}
                      className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu"
                    >
                      Save Entry
                    </Button>
                  </CardFooter>
                </Card>
                {/* Place HistoryTable horizontally below the log card, spanning full width */}
                <div className="w-full animate-fade-in animation-delay-500">
                  <HistoryTable data={historicalData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PeriodTracker;
