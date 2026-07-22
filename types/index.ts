/*
=========================================
ROMI TRADERS
Global TypeScript Types
=========================================
*/

export type UserRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "MANAGER"
  | "CUSTOMER";

export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED";

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;

  price: number;
  salePrice?: number;

  stock: number;

  image?: string;

  isFeatured: boolean;

  isPublished: boolean;

  categoryId: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  productId: string;

  productName: string;

  image?: string;

  price: number;

  quantity: number;

  subtotal: number;
}

export interface Cart {
  items: CartItem[];

  totalItems: number;

  subtotal: number;

  shipping: number;

  discount: number;

  tax: number;

  total: number;
}

export interface Address {
  id: string;

  fullName: string;

  phone: string;

  country: string;

  province: string;

  city: string;

  postalCode: string;

  address: string;

  isDefault: boolean;
}

export interface OrderItem {
  productId: string;

  productName: string;

  quantity: number;

  price: number;

  subtotal: number;
}

export interface Order {
  id: string;

  orderNumber: string;

  customerId: string;

  status: OrderStatus;

  items: OrderItem[];

  subtotal: number;

  shipping: number;

  discount: number;

  tax: number;

  total: number;

  createdAt: Date;

  updatedAt: Date;
}

export interface Review {
  id: string;

  userId: string;

  productId: string;

  rating: number;

  comment: string;

  createdAt: Date;
}

export interface Wishlist {
  id: string;

  userId: string;

  productId: string;

  createdAt: Date;
}

export interface DashboardStats {
  totalSales: number;

  totalOrders: number;

  totalCustomers: number;

  totalProducts: number;

  pendingOrders: number;

  revenueToday: number;
}

export interface Pagination {
  page: number;

  limit: number;

  total: number;

  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;

  message: string;

  data?: T;

  errors?: string[];

  pagination?: Pagination;
}
