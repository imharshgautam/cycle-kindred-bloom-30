
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'pads':
        return 'from-pink-400/20 to-rose-500/10';
      case 'tampons':
        return 'from-purple-400/20 to-violet-500/10';
      case 'cups':
        return 'from-emerald-400/20 to-teal-500/10';
      case 'underwear':
        return 'from-cyan-400/20 to-blue-500/10';
      case 'wellness':
        return 'from-amber-400/20 to-orange-500/10';
      case 'bundles':
        return 'from-indigo-400/20 to-purple-500/10';
      default:
        return 'from-gray-400/20 to-gray-500/10';
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'pads':
        return 'bg-pink-100 text-pink-700 border-pink-200';
      case 'tampons':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'cups':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'underwear':
        return 'bg-cyan-100 text-cyan-700 border-cyan-200';
      case 'wellness':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'bundles':
        return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <Card className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform-gpu card-3d animate-fade-in">
      <div className="relative overflow-hidden">
        {/* Enhanced image container with gradient overlay */}
        <div className={`h-56 relative overflow-hidden bg-gradient-to-br ${getCategoryGradient(product.category)}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Enhanced floating elements */}
        <div className="absolute top-4 left-4 z-20">
          <Badge className={`${getCategoryBadgeColor(product.category)} font-semibold text-xs px-3 py-1 rounded-full border backdrop-blur-sm`}>
            {product.category}
          </Badge>
        </div>
        
        <div className="absolute top-4 right-4 z-20">
          <Button
            variant="ghost"
            size="sm"
            className={`h-10 w-10 rounded-full backdrop-blur-sm border-2 transition-all duration-300 hover:scale-110 transform-gpu ${
              isLiked 
                ? "bg-pink-500/90 border-pink-300 text-white" 
                : "bg-white/80 border-white/50 text-gray-600 hover:bg-pink-50"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart 
              className={`h-4 w-4 transition-all duration-300 ${
                isLiked ? "fill-current" : ""
              }`} 
            />
          </Button>
        </div>

        {/* Discount badge */}
        {product.originalPrice && (
          <div className="absolute bottom-4 left-4 z-20">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg animate-pulse">
              SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="mb-3">
          <h3 className="font-bold text-lg mb-2 group-hover:text-violet-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
        
        {/* Enhanced rating display */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? "text-amber-400 fill-current" 
                    : "text-gray-300"
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        
        {/* Enhanced price display */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-violet-600">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.inStock ? (
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 font-medium">
              In Stock
            </Badge>
          ) : (
            <Badge className="bg-red-100 text-red-700 border-red-200 font-medium">
              Out of Stock
            </Badge>
          )}
        </div>
        
        {/* Enhanced add to cart button */}
        <Button 
          className="w-full py-3 bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={() => onAddToCart(product.id)}
          disabled={!product.inStock}
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          {product.inStock ? "Add to Cart" : "Sold Out"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
