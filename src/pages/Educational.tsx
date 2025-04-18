
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, BookOpen, FileText, BarChart } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Understanding Your Menstrual Cycle",
    category: "basics",
    image: "/placeholder.svg",
    excerpt: "Learn about the four phases of your menstrual cycle and the hormonal changes that occur during each phase."
  },
  {
    id: 2,
    title: "PMS vs. PMDD: What's the Difference?",
    category: "health",
    image: "/placeholder.svg",
    excerpt: "Understand the symptoms, causes, and treatments for premenstrual syndrome and premenstrual dysphoric disorder."
  },
  {
    id: 3,
    title: "Nutrition for Hormonal Balance",
    category: "nutrition",
    image: "/placeholder.svg",
    excerpt: "Discover which foods support hormonal balance throughout your cycle and which ones to avoid."
  },
  {
    id: 4,
    title: "Exercise Through Your Cycle",
    category: "fitness",
    image: "/placeholder.svg",
    excerpt: "Learn how to adjust your workout routine based on your menstrual cycle phases for optimal results."
  },
  {
    id: 5,
    title: "Managing Endometriosis Naturally",
    category: "health",
    image: "/placeholder.svg",
    excerpt: "Natural approaches to managing endometriosis symptoms alongside medical treatment."
  },
  {
    id: 6,
    title: "The Science of Period Pain",
    category: "basics",
    image: "/placeholder.svg",
    excerpt: "Understanding what causes menstrual cramps and evidence-based ways to find relief."
  }
];

const faqItems = [
  {
    question: "How long should a normal period last?",
    answer: "A typical period lasts anywhere from 3 to 7 days. However, what's 'normal' varies from person to person. If your period consistently lasts longer than 7 days or is extremely short (less than 2 days), it may be worth discussing with your healthcare provider."
  },
  {
    question: "Can stress affect my menstrual cycle?",
    answer: "Yes, stress can definitely affect your menstrual cycle. Stress activates your body's fight-or-flight response, which can suppress reproductive hormones and lead to irregular periods, missed periods, or more painful periods. Practicing stress management techniques like meditation, yoga, or regular exercise can help maintain cycle regularity."
  },
  {
    question: "Is it normal to have clots in my period blood?",
    answer: "Small blood clots (smaller than a quarter) during your period are generally normal. They occur when the blood flow is heavy and anticoagulants in the body don't have time to prevent clotting. However, large clots or very frequent clotting might indicate conditions like fibroids or endometriosis and should be discussed with a healthcare provider."
  },
  {
    question: "How can I manage period pain without medication?",
    answer: "Several non-medication approaches can help with period pain: applying heat to your lower abdomen, gentle exercise like walking or yoga, staying hydrated, reducing caffeine and alcohol, practicing relaxation techniques, and ensuring adequate sleep. Some people also find relief from dietary changes like reducing inflammatory foods or taking supplements such as magnesium."
  },
  {
    question: "Why does my cycle length change sometimes?",
    answer: "Cycle length can vary due to several factors including stress, significant weight changes, intense exercise, travel across time zones, illness, certain medications, and approaching perimenopause. Occasional variation is normal, but consistent irregularity might warrant a conversation with your healthcare provider."
  },
  {
    question: "Can I get pregnant during my period?",
    answer: "While it's less likely, it is possible to get pregnant while on your period, especially if you have a shorter menstrual cycle or longer periods. Sperm can survive in the reproductive tract for up to 5 days, so if you have a shorter cycle and ovulate soon after your period ends, pregnancy is possible. If you're trying to avoid pregnancy, using protection during all phases of your cycle is recommended."
  }
];

const Educational = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const filteredFaqs = faqItems.filter(faq => 
    searchQuery === "" || 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Educational Hub</h1>
            <p className="text-muted-foreground mb-8">
              Evidence-based resources about menstrual and reproductive health.
            </p>
            
            <div className="mb-10 relative">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    type="search" 
                    placeholder="Search for topics, questions, or keywords..." 
                    className="pl-10 py-6"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="articles" className="flex items-center gap-2 py-3">
                  <BookOpen className="h-4 w-4" /> Articles & Resources
                </TabsTrigger>
                <TabsTrigger value="faq" className="flex items-center gap-2 py-3">
                  <FileText className="h-4 w-4" /> FAQ
                </TabsTrigger>
              </TabsList>
              
              {/* Articles Tab */}
              <TabsContent value="articles" className="animate-fade-in">
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant={activeCategory === "all" ? "default" : "outline"} 
                      onClick={() => setActiveCategory("all")}
                      size="sm"
                    >
                      All Topics
                    </Button>
                    <Button 
                      variant={activeCategory === "basics" ? "default" : "outline"} 
                      onClick={() => setActiveCategory("basics")}
                      size="sm"
                    >
                      Cycle Basics
                    </Button>
                    <Button 
                      variant={activeCategory === "health" ? "default" : "outline"} 
                      onClick={() => setActiveCategory("health")}
                      size="sm"
                    >
                      Health Conditions
                    </Button>
                    <Button 
                      variant={activeCategory === "nutrition" ? "default" : "outline"} 
                      onClick={() => setActiveCategory("nutrition")}
                      size="sm"
                    >
                      Nutrition
                    </Button>
                    <Button 
                      variant={activeCategory === "fitness" ? "default" : "outline"} 
                      onClick={() => setActiveCategory("fitness")}
                      size="sm"
                    >
                      Fitness
                    </Button>
                  </div>
                </div>
                
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                      <Card key={article.id} className="overflow-hidden h-full border-2 hover:border-primary/20 card-hover">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-5">
                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground capitalize">
                              {article.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                          <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                          <Button variant="link" className="px-0 py-0 h-auto mt-3">Read more</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BarChart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No matching articles</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search terms or category filters.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="animate-fade-in">
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.length > 0 ? (
                      filteredFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No matching FAQs</h3>
                        <p className="text-muted-foreground">
                          Try adjusting your search query to find relevant questions.
                        </p>
                      </div>
                    )}
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Educational;
