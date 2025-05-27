
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/data/products";
import ShopHeader from "@/components/shop/ShopHeader";
import ShippingInfo from "@/components/shop/ShippingInfo";
import ProductGrid from "@/components/shop/ProductGrid";
import { Package, Sparkles, Star } from "lucide-react";

const Store = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartItems, setCartItems] = useState<number[]>([]);
  const { toast } = useToast();
  
  const filteredProducts = products.filter(product => {
    return activeCategory === "all" || product.category === activeCategory;
  });
  
  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
    const product = products.find(p => p.id === productId);
    
    toast({
      title: "Added to cart",
      description: `${product?.name} has been added to your cart.`,
      duration: 3000
    });
  };

  const categories = [
    { value: "all", label: "All Products", icon: Package, gradient: "from-gray-400 to-gray-600" },
    { value: "pads", label: "Pads", icon: Package, gradient: "from-pink-400 to-rose-500" },
    { value: "tampons", label: "Tampons", icon: Package, gradient: "from-purple-400 to-violet-500" },
    { value: "cups", label: "Cups", icon: Package, gradient: "from-emerald-400 to-teal-500" },
    { value: "underwear", label: "Period Underwear", icon: Package, gradient: "from-cyan-400 to-blue-500" },
    { value: "wellness", label: "Wellness", icon: Star, gradient: "from-amber-400 to-orange-500" },
    { value: "bundles", label: "Bundles", icon: Sparkles, gradient: "from-indigo-400 to-purple-600" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12 relative overflow-hidden">
        {/* Enhanced 3D Background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          {/* Multi-layered gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-purple-50/40 to-cyan-100/30" />
          <div className="absolute inset-0 bg-gradient-to-tl from-rose-100/30 via-transparent to-indigo-100/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-50/20 to-transparent" />
          
          {/* Floating geometric shapes */}
          <div className="absolute -top-40 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-300/30 to-rose-400/20 rounded-full blur-3xl animate-float transform-gpu" style={{transform: 'rotateX(20deg) rotateY(-15deg) translateZ(50px)'}} />
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-purple-300/25 to-violet-400/15 rounded-full blur-2xl animate-float-delayed transform-gpu" style={{transform: 'rotateX(-15deg) rotateY(25deg) translateZ(30px)'}} />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-300/20 to-blue-400/15 rounded-full blur-2xl animate-float opacity-60 transform-gpu" style={{transform: 'rotateX(10deg) rotateZ(-20deg) translateZ(40px)'}} />
          
          {/* Shopping-themed decorative elements */}
          <div className="absolute top-32 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-400/25 to-rose-500/20 transform rotate-45 animate-float rounded-xl" />
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-violet-500/25 transform -rotate-12 animate-float-delayed rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-cyan-400/35 to-blue-500/30 transform rotate-45 animate-tilt rounded-lg" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-xl tracking-tight">
                Period Essentials
              </h1>
              <div className="absolute -top-4 -right-10 animate-spin" style={{animationDuration: '4s'}}>
                <Sparkles className="h-10 w-10 text-pink-400" />
              </div>
              <div className="absolute -bottom-2 -left-8 animate-bounce" style={{animationDelay: '0.5s'}}>
                <Package className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <p className="text-muted-foreground text-lg font-medium animate-fade-in animation-delay-200">
              Fast, discreet delivery of all your menstrual care needs.
            </p>
          </div>

          <div className="animate-fade-in animation-delay-300">
            <ShopHeader cartItemsCount={cartItems.length} />
          </div>
          
          <div className="animate-fade-in animation-delay-400">
            <ShippingInfo />
          </div>
          
          {/* Enhanced Category Tabs */}
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full animate-fade-in animation-delay-200">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-white/60 backdrop-blur-md border-2 border-white/30 shadow-2xl rounded-2xl p-2 grid grid-cols-3 md:grid-cols-7 gap-1">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <TabsTrigger 
                      key={category.value}
                      value={category.value}
                      className={`flex items-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 transform-gpu ${
                        activeCategory === category.value 
                          ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg data-[state=active]:shadow-xl` 
                          : "hover:bg-white/50"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="hidden sm:inline">{category.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
            
            <TabsContent value={activeCategory} className="animate-fade-in">
              <div className="relative">
                {/* Decorative background for product grid */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40 rounded-3xl backdrop-blur-sm" />
                <div className="relative z-10 p-8">
                  <ProductGrid 
                    products={filteredProducts}
                    onAddToCart={addToCart}
                  />
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

export default Store;
