
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-2 hover:border-primary/20 card-hover">
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
          onClick={() => onAddToCart(product.id)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
