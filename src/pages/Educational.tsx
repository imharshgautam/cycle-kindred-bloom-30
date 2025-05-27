
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, BookOpen, FileText, BarChart, Sparkles, Brain } from "lucide-react";

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
      <main className="flex-grow py-12 relative overflow-hidden">
        {/* Enhanced 3D Background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          {/* Complex gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100/60 via-pink-50/50 to-cyan-100/40" />
          <div className="absolute inset-0 bg-gradient-to-tl from-rose-100/40 via-transparent to-indigo-100/30" />
          
          {/* Floating 3D orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-300/40 to-pink-400/30 rounded-full blur-3xl animate-float transform-gpu perspective-1000" style={{transform: 'rotateX(15deg) rotateY(25deg)'}} />
          <div className="absolute top-1/3 -left-48 w-80 h-80 bg-gradient-to-br from-cyan-300/35 to-blue-400/25 rounded-full blur-2xl animate-float-delayed transform-gpu perspective-1000" style={{transform: 'rotateX(-10deg) rotateY(-20deg)'}} />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-300/30 to-teal-400/20 rounded-full blur-2xl animate-float opacity-70 transform-gpu perspective-1000" style={{transform: 'rotateX(20deg) rotateZ(15deg)'}} />
          
          {/* Geometric shapes */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-purple-500/15 transform rotate-45 animate-tilt rounded-2xl blur-sm" />
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/25 to-rose-500/20 transform -rotate-12 animate-float-delayed rounded-full blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="relative inline-block">
                <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight perspective-1000">
                  Educational Hub
                </h1>
                <div className="absolute -top-2 -right-8 animate-pulse">
                  <Sparkles className="h-8 w-8 text-pink-400 animate-spin" style={{animationDuration: '3s'}} />
                </div>
                <div className="absolute -bottom-2 -left-6 animate-pulse">
                  <Brain className="h-6 w-6 text-violet-400 animate-bounce" style={{animationDelay: '1s'}} />
                </div>
              </div>
              <p className="text-muted-foreground text-lg font-medium animate-fade-in animation-delay-200">
                Evidence-based resources about menstrual and reproductive health.
              </p>
            </div>
            
            {/* Enhanced Search Bar */}
            <div className="mb-12 relative animate-fade-in animation-delay-400">
              <div className="max-w-2xl mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-300/30 to-pink-300/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 z-10" />
                    <Input 
                      type="search" 
                      placeholder="Search for topics, questions, or keywords..." 
                      className="pl-12 py-7 text-lg rounded-2xl border-2 border-white/50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02] transform-gpu"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Tabs */}
            <Tabs defaultValue="articles" className="w-full">
              <div className="flex justify-center mb-10 animate-fade-in animation-delay-200">
                <TabsList className="bg-white/60 backdrop-blur-md border-2 border-white/30 shadow-2xl rounded-2xl p-2">
                  <TabsTrigger 
                    value="articles" 
                    className="flex items-center gap-3 py-4 px-6 rounded-xl text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu"
                  >
                    <BookOpen className="h-5 w-5" /> 
                    Articles & Resources
                  </TabsTrigger>
                  <TabsTrigger 
                    value="faq" 
                    className="flex items-center gap-3 py-4 px-6 rounded-xl text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu"
                  >
                    <FileText className="h-5 w-5" /> 
                    FAQ
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Articles Tab */}
              <TabsContent value="articles" className="animate-fade-in">
                <div className="mb-10">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {[
                      { key: "all", label: "All Topics", gradient: "from-gray-400 to-gray-600" },
                      { key: "basics", label: "Cycle Basics", gradient: "from-violet-400 to-purple-600" },
                      { key: "health", label: "Health Conditions", gradient: "from-pink-400 to-rose-600" },
                      { key: "nutrition", label: "Nutrition", gradient: "from-emerald-400 to-teal-600" },
                      { key: "fitness", label: "Fitness", gradient: "from-cyan-400 to-blue-600" }
                    ].map((category) => (
                      <Button 
                        key={category.key}
                        variant={activeCategory === category.key ? "default" : "outline"} 
                        onClick={() => setActiveCategory(category.key)}
                        className={`px-6 py-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 transform-gpu shadow-lg ${
                          activeCategory === category.key 
                            ? `bg-gradient-to-r ${category.gradient} text-white border-transparent shadow-2xl` 
                            : "bg-white/70 backdrop-blur-sm border-white/50 hover:bg-white/90 hover:shadow-xl"
                        }`}
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                      <Card 
                        key={article.id} 
                        className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform-gpu card-3d group animate-fade-in"
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        <div className="relative">
                          <div className="h-52 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-pink-400/20 z-10" />
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 transform-gpu"
                            />
                          </div>
                          <div className="absolute top-4 right-4 z-20">
                            <span className={`inline-block px-4 py-2 text-xs font-bold rounded-full backdrop-blur-sm border ${
                              article.category === 'basics' ? 'bg-violet-500/80 text-white border-violet-300' :
                              article.category === 'health' ? 'bg-pink-500/80 text-white border-pink-300' :
                              article.category === 'nutrition' ? 'bg-emerald-500/80 text-white border-emerald-300' :
                              'bg-cyan-500/80 text-white border-cyan-300'
                            }`}>
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-violet-600 transition-colors duration-300">{article.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                          <Button variant="link" className="px-0 py-0 h-auto mt-4 text-violet-600 hover:text-pink-600 font-semibold transition-colors duration-300">
                            Read more →
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 animate-fade-in">
                    <div className="relative inline-block">
                      <BarChart className="h-16 w-16 text-muted-foreground mx-auto mb-6 animate-pulse" />
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-ping" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">No matching articles</h3>
                    <p className="text-muted-foreground text-lg">
                      Try adjusting your search terms or category filters.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="animate-fade-in">
                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {filteredFaqs.length > 0 ? (
                      filteredFaqs.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${index}`}
                          className="border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] transform-gpu animate-fade-in"
                          style={{animationDelay: `${index * 100}ms`}}
                        >
                          <AccordionTrigger className="text-left px-6 py-6 hover:no-underline text-lg font-semibold hover:text-violet-600 transition-colors duration-300 rounded-2xl">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <div className="pt-2 border-t border-violet-100">
                              <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))
                    ) : (
                      <div className="text-center py-16 animate-fade-in">
                        <div className="relative inline-block">
                          <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-6 animate-pulse" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">No matching FAQs</h3>
                        <p className="text-muted-foreground text-lg">
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
