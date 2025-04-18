
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Truck, Clock, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "Organic Cotton Pads - Regular",
    category: "pads",
    price: 6.99,
    rating: 4.8,
    image: "/placeholder.svg",
    tags: ["Bestseller", "Organic"],
    isNew: false
  },
  {
    id: 2,
    name: "Menstrual Cup - Small",
    category: "cups",
    price: 24.99,
    rating: 4.7,
    image: "/placeholder.svg",
    tags: ["Eco-friendly"],
    isNew: false
  },
  {
    id: 3,
    name: "Period Underwear - Medium",
    category: "underwear",
    price: 32.99,
    rating: 4.5,
    image: "/placeholder.svg",
    tags: ["Reusable"],
    isNew: true
  },
  {
    id: 4,
    name: "Herbal Cramp Relief Tea",
    category: "wellness",
    price: 12.99,
    rating: 4.3,
    image: "/placeholder.svg",
    tags: ["Natural"],
    isNew: false
  },
  {
    id: 5,
    name: "Heating Pad - Electric",
    category: "wellness",
    price: 29.99,
    rating: 4.9,
    image: "/placeholder.svg",
    tags: ["Pain relief"],
    isNew: false
  },
  {
    id: 6,
    name: "Magnesium & B6 Supplements",
    category: "wellness",
    price: 18.99,
    rating: 4.6,
    image: "/placeholder.svg",
    tags: ["PMS support"],
    isNew: true
  },
  {
    id: 7,
    name: "Organic Tampons - Super",
    category: "tampons",
    price: 7.99,
    rating: 4.4,
    image: "/placeholder.svg",
    tags: ["Organic"],
    isNew: false
  },
  {
    id: 8,
    name: "Dark Chocolate Selection Box",
    category: "wellness",
    price: 15.99,
    rating: 4.8,
    image: "/placeholder.svg",
    tags: ["Comfort food"],
    isNew: false
  }
];

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

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Period Essentials</h1>
              <p className="text-muted-foreground">Fast, discreet delivery of all your menstrual care needs.</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <ShoppingCart className="h-4 w-4" />
                Cart ({cartItems.length})
              </Button>
            </div>
          </div>
          
          <div className="bg-muted/40 rounded-xl p-4 mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-background rounded-full p-2">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-muted-foreground">On orders over $35</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-background rounded-full p-2">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Fast Shipping</p>
                <p className="text-sm text-muted-foreground">Get it in 1-2 business days</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-background rounded-full p-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Discreet Packaging</p>
                <p className="text-sm text-muted-foreground">Plain, unmarked boxes</p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pads">Pads</TabsTrigger>
              <TabsTrigger value="tampons">Tampons</TabsTrigger>
              <TabsTrigger value="cups">Cups</TabsTrigger>
              <TabsTrigger value="underwear">Period Underwear</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
              <TabsTrigger value="bundles">Bundles</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeCategory}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden border-2 hover:border-primary/20 card-hover">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      {product.isNew && (
                        <Badge className="absolute top-3 left-3 bg-primary">New</Badge>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                      <h3 className="font-medium mb-1">{product.name}</h3>
                      <p className="font-bold">${product.price.toFixed(2)}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {product.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-0.5 text-xs bg-muted rounded-full text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 px-5 pb-5">
                      <Button 
                        className="w-full" 
                        onClick={() => addToCart(product.id)}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
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
