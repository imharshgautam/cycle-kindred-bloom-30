
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
import { CheckCircle, Calendar as CalendarIcon, CircleAlert } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

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
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Period Tracker</h1>
            <p className="text-muted-foreground mb-8">Monitor your cycle, symptoms, and patterns over time.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Cycle Overview</CardTitle>
                    <CardDescription>Your current cycle information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-primary" />
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
                      
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-md flex items-start gap-3">
                        <CircleAlert className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                          This is an estimate based on your past cycles. Your actual period may vary.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Log Today's Information</CardTitle>
                    <CardDescription>Record how you're feeling and any symptoms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="period" className="w-full">
                      <TabsList className="grid grid-cols-3 mb-6">
                        <TabsTrigger value="period">Period Flow</TabsTrigger>
                        <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                        <TabsTrigger value="mood">Mood & Notes</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="period" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-lg font-medium mb-4">Select Date</h3>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              className="rounded-md border pointer-events-auto"
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
                              
                              <div className="bg-muted/50 p-4 rounded-md">
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
                              className={`h-auto py-2 px-3 justify-start text-sm ${
                                selectedSymptoms.includes(symptom) ? "" : "border-2"
                              }`}
                            >
                              {symptom}
                            </Button>
                          ))}
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-md mt-8">
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
                            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                          >
                            {moodOptions.map((mood) => (
                              <div key={mood.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={mood.value} id={mood.value} />
                                <Label htmlFor={mood.value}>{mood.label}</Label>
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
                              className="h-20"
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="border-t pt-6 flex justify-end">
                    <Button onClick={handleSave}>Save Entry</Button>
                  </CardFooter>
                </Card>
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
