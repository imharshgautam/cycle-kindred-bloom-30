
import { Truck, Clock, ShieldCheck } from "lucide-react";

const ShippingInfo = () => {
  return (
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
  );
};

export default ShippingInfo;
