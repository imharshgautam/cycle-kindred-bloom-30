
export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  isNew: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Cotton Pads - Regular",
    description: "Soft, breathable organic cotton pads for comfortable protection",
    category: "pads",
    price: 6.99,
    originalPrice: 8.99,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg",
    tags: ["Bestseller", "Organic"],
    isNew: false,
    inStock: true
  },
  {
    id: 2,
    name: "Menstrual Cup - Small",
    description: "Eco-friendly silicone cup for sustainable period care",
    category: "cups",
    price: 24.99,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg",
    tags: ["Eco-friendly"],
    isNew: false,
    inStock: true
  },
  {
    id: 3,
    name: "Period Underwear - Medium",
    description: "Ultra-absorbent underwear for leak-free confidence",
    category: "underwear",
    price: 32.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 67,
    image: "/placeholder.svg",
    tags: ["Reusable"],
    isNew: true,
    inStock: true
  },
  {
    id: 4,
    name: "Herbal Cramp Relief Tea",
    description: "Soothing herbal blend to ease menstrual discomfort",
    category: "wellness",
    price: 12.99,
    rating: 4.3,
    reviews: 156,
    image: "/placeholder.svg",
    tags: ["Natural"],
    isNew: false,
    inStock: true
  },
  {
    id: 5,
    name: "Heating Pad - Electric",
    description: "Therapeutic heating pad for targeted pain relief",
    category: "wellness",
    price: 29.99,
    originalPrice: 34.99,
    rating: 4.9,
    reviews: 203,
    image: "/placeholder.svg",
    tags: ["Pain relief"],
    isNew: false,
    inStock: true
  },
  {
    id: 6,
    name: "Magnesium & B6 Supplements",
    description: "Essential vitamins to support your menstrual health",
    category: "wellness",
    price: 18.99,
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg",
    tags: ["PMS support"],
    isNew: true,
    inStock: false
  },
  {
    id: 7,
    name: "Organic Tampons - Super",
    description: "100% organic cotton tampons for reliable protection",
    category: "tampons",
    price: 7.99,
    originalPrice: 9.99,
    rating: 4.4,
    reviews: 142,
    image: "/placeholder.svg",
    tags: ["Organic"],
    isNew: false,
    inStock: true
  },
  {
    id: 8,
    name: "Dark Chocolate Selection Box",
    description: "Premium dark chocolate to satisfy your cravings",
    category: "wellness",
    price: 15.99,
    rating: 4.8,
    reviews: 91,
    image: "/placeholder.svg",
    tags: ["Comfort food"],
    isNew: false,
    inStock: true
  }
];
