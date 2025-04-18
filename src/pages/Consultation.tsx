
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
import { Clock, CheckCircle, Video, Calendar as CalendarIcon } from "lucide-react";
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
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Book a Consultation</h1>
          <p className="text-muted-foreground mb-8">Talk to licensed professionals about your menstrual and reproductive health.</p>
          
          <Tabs defaultValue="therapist" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="therapist" className="flex items-center gap-2 py-3">
                Therapists
              </TabsTrigger>
              <TabsTrigger value="gynecologist" className="flex items-center gap-2 py-3">
                Gynecologists
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-medium mb-4">Available {activeTab === "therapist" ? "Therapists" : "Gynecologists"}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPractitioners.map((practitioner) => (
                      <Card 
                        key={practitioner.id} 
                        className={`border-2 cursor-pointer ${
                          selectedPractitioner === practitioner.id 
                            ? "border-primary" 
                            : "hover:border-primary/20"
                        } ${!practitioner.available ? "opacity-60" : ""}`}
                        onClick={() => {
                          if (practitioner.available) {
                            setSelectedPractitioner(practitioner.id);
                          }
                        }}
                      >
                        <CardContent className="p-5 flex">
                          <Avatar className="h-16 w-16 border-2 border-muted">
                            <AvatarImage src={practitioner.image} alt={practitioner.name} />
                            <AvatarFallback>{practitioner.initials}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <h3 className="font-medium">{practitioner.name}</h3>
                            <p className="text-sm text-muted-foreground">{practitioner.credentials}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {practitioner.specialties.map((specialty, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs font-normal">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                              <p className="font-medium">${practitioner.price}/session</p>
                              {!practitioner.available && (
                                <Badge variant="outline" className="text-xs font-normal bg-muted">
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
                
                <div>
                  <Card className="border-2">
                    <CardContent className="p-5">
                      <h2 className="text-xl font-medium mb-4">Schedule Appointment</h2>
                      
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">Select Date</h3>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border pointer-events-auto"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">Available Time Slots</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTimeSlot === time ? "default" : "outline"}
                              className="text-sm"
                              onClick={() => setSelectedTimeSlot(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      {selectedPractitioner !== null && selectedDate && selectedTimeSlot && (
                        <div className="bg-muted/50 p-3 rounded-md mb-6">
                          <h3 className="text-sm font-medium mb-2">Appointment Summary</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div className="flex items-center gap-2">
                              <Video className="h-4 w-4" />
                              <span>Video consultation with {therapists.find(p => p.id === selectedPractitioner)?.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{selectedTimeSlot}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4" />
                              <span>45-minute session</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full" 
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
