
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  tags: string[];
  isNew: boolean;
}

export const products: Product[] = [
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
