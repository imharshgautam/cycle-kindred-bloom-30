
import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/data/products";
import ShopHeader from "@/components/shop/ShopHeader";
import ShippingInfo from "@/components/shop/ShippingInfo";
import ProductGrid from "@/components/shop/ProductGrid";

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
          <ShopHeader cartItemsCount={cartItems.length} />
          <ShippingInfo />
          
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
              <ProductGrid 
                products={filteredProducts}
                onAddToCart={addToCart}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
