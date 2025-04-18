
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ShopHeaderProps {
  cartItemsCount: number;
}

const ShopHeader = ({ cartItemsCount }: ShopHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Period Essentials</h1>
        <p className="text-muted-foreground">Fast, discreet delivery of all your menstrual care needs.</p>
      </div>
      
      <div className="mt-4 md:mt-0 flex items-center">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <ShoppingCart className="h-4 w-4" />
          Cart ({cartItemsCount})
        </Button>
      </div>
    </div>
  );
};

export default ShopHeader;
