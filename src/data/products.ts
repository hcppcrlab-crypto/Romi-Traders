export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  rating: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    rating: 4.8
  },
  {
    id: "2",
    name: "Smart Fitness Watch v2",
    price: 199.50,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Wearables",
    rating: 4.6
  },
  {
    id: "3",
    name: "Ergonomic Leather Chair",
    price: 450.00,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=500",
    category: "Furniture",
    rating: 4.9
  }
];
