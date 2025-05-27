
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah K.",
    age: 28,
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    initials: "SK",
    content: "Luna Cycle has changed my relationship with my period. The personalized recommendations have helped me manage my PMS symptoms so much better!"
  },
  {
    name: "Maya R.",
    age: 34,
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    initials: "MR",
    content: "Being able to consult with a gynecologist from home has been a game-changer. I got answers to questions I was too embarrassed to ask in person."
  },
  {
    name: "Jamie L.",
    age: 22,
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    initials: "JL",
    content: "The educational resources helped me understand my PCOS in ways my doctor never explained. I feel more in control of my health now."
  },
  {
    name: "Priya S.",
    age: 31,
    avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    initials: "PS",
    content: "I love how accurate the tracker is! It's predicted my cycle perfectly for six months straight, and the symptom tracking helps me spot patterns."
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thousands of women have transformed their relationship with their menstrual health through Luna Cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 hover:border-primary/30 card-hover group">
              <CardContent className="p-6">
                <div className="mb-6 flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="transform transition-all duration-300 group-hover:scale-110"
                    />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Age {testimonial.age}</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
