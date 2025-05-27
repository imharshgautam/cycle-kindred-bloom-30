import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Clock, CheckCircle, Video, Calendar as CalendarIcon, Stethoscope, Brain, Heart, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const therapists = [
  {
    id: 1,
    name: "Dr. Emma Chen",
    type: "therapist",
    specialties: ["Anxiety", "Depression", "Hormonal Mood Changes"],
    image: "/placeholder.svg",
    initials: "EC",
    credentials: "PhD in Clinical Psychology",
    price: 85,
    available: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    type: "therapist",
    specialties: ["Stress Management", "PMS Support", "Self-esteem"],
    image: "/placeholder.svg",
    initials: "SJ",
    credentials: "Licensed Clinical Social Worker",
    price: 75,
    available: true
  },
  {
    id: 3,
    name: "Dr. Michelle Roberts",
    type: "gynecologist",
    specialties: ["PCOS", "Endometriosis", "Menstrual Disorders"],
    image: "/placeholder.svg",
    initials: "MR",
    credentials: "MD, Board Certified OB/GYN",
    price: 120,
    available: false
  },
  {
    id: 4,
    name: "Dr. Amara Patel",
    type: "gynecologist",
    specialties: ["Adolescent Gynecology", "Menopause", "Fertility"],
    image: "/placeholder.svg",
    initials: "AP",
    credentials: "MD, Board Certified OB/GYN",
    price: 110,
    available: true
  },
  {
    id: 5,
    name: "Dr. Leila Hassan",
    type: "gynecologist",
    specialties: ["Irregular Periods", "Hormonal Imbalances", "PCOS"],
    image: "/placeholder.svg",
    initials: "LH",
    credentials: "MD, Reproductive Endocrinology",
    price: 130,
    available: true
  },
  {
    id: 6,
    name: "Maya Nguyen",
    type: "therapist",
    specialties: ["Body Image", "Trauma", "Life Transitions"],
    image: "/placeholder.svg",
    initials: "MN",
    credentials: "Licensed Professional Counselor",
    price: 80,
    available: true
  }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const Consultation = () => {
  const [activeTab, setActiveTab] = useState("therapist");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedPractitioner, setSelectedPractitioner] = useState<number | null>(null);
  const { toast } = useToast();
  
  const filteredPractitioners = therapists.filter(practitioner => practitioner.type === activeTab);
  
  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTimeSlot || selectedPractitioner === null) {
      toast({
        title: "Incomplete selection",
        description: "Please select a practitioner, date, and time slot.",
        variant: "destructive"
      });
      return;
    }
    
    const practitioner = therapists.find(p => p.id === selectedPractitioner);
    
    toast({
      title: "Appointment booked successfully!",
      description: `Your ${activeTab} appointment with ${practitioner?.name} is scheduled for ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTimeSlot}.`,
      duration: 5000
    });
    
    // Reset selections
    setSelectedTimeSlot(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12 relative overflow-hidden">
        {/* Enhanced 3D Background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          {/* Complex gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-50/30 to-pink-100/40" />
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-100/30 via-transparent to-violet-100/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/15 to-transparent" />
          
          {/* Medical-themed floating elements */}
          <div className="absolute -top-32 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-300/25 to-cyan-400/15 rounded-full blur-3xl animate-float transform-gpu" style={{transform: 'rotateX(25deg) rotateY(-20deg) translateZ(60px)'}} />
          <div className="absolute top-1/3 -left-48 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-400/15 rounded-full blur-2xl animate-float-delayed transform-gpu" style={{transform: 'rotateX(-20deg) rotateY(30deg) translateZ(40px)'}} />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-violet-300/25 to-indigo-400/20 rounded-full blur-2xl animate-float opacity-60 transform-gpu" style={{transform: 'rotateX(15deg) rotateZ(-25deg) translateZ(50px)'}} />
          
          {/* Decorative medical icons */}
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-500/15 transform rotate-12 animate-tilt rounded-2xl flex items-center justify-center">
            <Stethoscope className="h-8 w-8 text-blue-300" />
          </div>
          <div className="absolute bottom-32 right-1/4 w-20 h-20 bg-gradient-to-br from-purple-400/25 to-pink-500/20 transform -rotate-45 animate-float-delayed rounded-full flex items-center justify-center">
            <Heart className="h-6 w-6 text-purple-300" />
          </div>
          <div className="absolute top-1/2 left-1/5 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-500/25 transform rotate-45 animate-float rounded-lg flex items-center justify-center">
            <Brain className="h-5 w-5 text-cyan-300" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-xl tracking-tight">
                Book a Consultation
              </h1>
              <div className="absolute -top-6 -right-12 animate-pulse">
                <Sparkles className="h-12 w-12 text-blue-400 animate-spin" style={{animationDuration: '4s'}} />
              </div>
              <div className="absolute -bottom-4 -left-10 animate-bounce" style={{animationDelay: '1s'}}>
                <Stethoscope className="h-10 w-10 text-purple-400" />
              </div>
            </div>
            <p className="text-muted-foreground text-lg font-medium animate-fade-in animation-delay-200">
              Talk to licensed professionals about your menstrual and reproductive health.
            </p>
          </div>
          
          {/* Enhanced Tabs */}
          <Tabs defaultValue="therapist" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-10 animate-fade-in animation-delay-300">
              <TabsList className="bg-white/60 backdrop-blur-md border-2 border-white/30 shadow-2xl rounded-2xl p-2">
                <TabsTrigger 
                  value="therapist" 
                  className="flex items-center gap-3 py-4 px-8 rounded-xl text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu"
                >
                  <Brain className="h-5 w-5" />
                  Therapists
                </TabsTrigger>
                <TabsTrigger 
                  value="gynecologist" 
                  className="flex items-center gap-3 py-4 px-8 rounded-xl text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu"
                >
                  <Stethoscope className="h-5 w-5" />
                  Gynecologists
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6 animate-fade-in animation-delay-200">
                    Available {activeTab === "therapist" ? "Therapists" : "Gynecologists"}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPractitioners.map((practitioner, index) => (
                      <Card 
                        key={practitioner.id} 
                        className={`border-0 cursor-pointer transition-all duration-500 hover:scale-105 transform-gpu card-3d group animate-fade-in ${
                          selectedPractitioner === practitioner.id 
                            ? "bg-gradient-to-br from-violet-100/80 to-pink-100/80 backdrop-blur-sm shadow-2xl scale-105" 
                            : "bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl"
                        } ${!practitioner.available ? "opacity-60" : ""}`}
                        onClick={() => {
                          if (practitioner.available) {
                            setSelectedPractitioner(practitioner.id);
                          }
                        }}
                        style={{animationDelay: `${index * 150}ms`}}
                      >
                        <CardContent className="p-6 flex">
                          <div className="relative">
                            <Avatar className="h-20 w-20 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <AvatarImage src={practitioner.image} alt={practitioner.name} />
                              <AvatarFallback className="bg-gradient-to-br from-violet-400 to-pink-400 text-white font-bold text-lg">
                                {practitioner.initials}
                              </AvatarFallback>
                            </Avatar>
                            {practitioner.available && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
                            )}
                          </div>
                          <div className="ml-5 flex-1">
                            <h3 className="font-bold text-lg mb-1 group-hover:text-violet-600 transition-colors duration-300">
                              {practitioner.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">{practitioner.credentials}</p>
                            <div className="mb-4 flex flex-wrap gap-2">
                              {practitioner.specialties.map((specialty, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="outline" 
                                  className="text-xs font-medium bg-white/70 border-violet-200 hover:bg-violet-50 transition-colors duration-300"
                                >
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="font-bold text-lg text-violet-600">${practitioner.price}/session</p>
                              {!practitioner.available && (
                                <Badge variant="outline" className="text-xs font-medium bg-red-50 border-red-200 text-red-600">
                                  Fully Booked
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced Booking Panel */}
                <div className="animate-fade-in animation-delay-400">
                  <Card className="border-0 bg-white/80 backdrop-blur-md shadow-2xl card-3d sticky top-8">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                        Schedule Appointment
                      </h2>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <CalendarIcon className="h-5 w-5 text-violet-500" />
                          Select Date
                        </h3>
                        <div className="bg-gradient-to-br from-violet-50/50 to-pink-50/50 rounded-2xl p-4 border border-violet-100">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-xl pointer-events-auto"
                            disabled={(date) => date < new Date()}
                          />
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-blue-500" />
                          Available Time Slots
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTimeSlot === time ? "default" : "outline"}
                              className={`py-3 font-medium transition-all duration-300 hover:scale-105 transform-gpu ${
                                selectedTimeSlot === time 
                                  ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg" 
                                  : "bg-white/70 border-violet-200 hover:bg-violet-50 hover:border-violet-300"
                              }`}
                              onClick={() => setSelectedTimeSlot(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      {selectedPractitioner !== null && selectedDate && selectedTimeSlot && (
                        <div className="bg-gradient-to-br from-violet-50/80 to-pink-50/80 p-6 rounded-2xl mb-8 border border-violet-100 animate-fade-in">
                          <h3 className="text-lg font-semibold mb-4 text-violet-700">Appointment Summary</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Video className="h-5 w-5 text-blue-500" />
                              <span>Video consultation with {therapists.find(p => p.id === selectedPractitioner)?.name}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <CalendarIcon className="h-5 w-5 text-violet-500" />
                              <span>{selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <Clock className="h-5 w-5 text-pink-500" />
                              <span>{selectedTimeSlot}</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <CheckCircle className="h-5 w-5 text-emerald-500" />
                              <span>45-minute session</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu rounded-xl" 
                        disabled={!selectedDate || !selectedTimeSlot || selectedPractitioner === null}
                        onClick={handleBookAppointment}
                      >
                        Book Appointment
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
