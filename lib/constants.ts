/*
==================================================
ROMI TRADERS
Application Constants
==================================================
*/

export const APP = {
  NAME: "ROMI TRADERS",
  SHORT_NAME: "ROMI",

  DESCRIPTION:
    "Professional Enterprise Online Shopping Store",

  URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  VERSION: "1.0.0",

  CURRENCY: "PKR",

  CURRENCY_SYMBOL: "Rs.",

  COUNTRY: "Pakistan",

  LANGUAGE: "en",

  SUPPORT_EMAIL: "support@romitraders.com",

  SALES_EMAIL: "sales@romitraders.com",

  PHONE: "+92-300-0000000",

  WHATSAPP: "+92-300-0000000"
};

export const USER_ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",

  ADMIN: "ADMIN",

  MANAGER: "MANAGER",

  CUSTOMER: "CUSTOMER"
} as const;

export const ORDER_STATUS = {
  PENDING: "PENDING",

  CONFIRMED: "CONFIRMED",

  PROCESSING: "PROCESSING",

  SHIPPED: "SHIPPED",

  DELIVERED: "DELIVERED",

  CANCELLED: "CANCELLED",

  RETURNED: "RETURNED"
} as const;

export const PAYMENT_METHODS = [
  "Cash On Delivery",

  "JazzCash",

  "EasyPaisa",

  "Bank Transfer",

  "Stripe",

  "PayPal"
];

export const SHIPPING = {
  FREE_SHIPPING_LIMIT: 5000,

  DEFAULT_SHIPPING_CHARGE: 250,

  EXPRESS_SHIPPING: 500
};

export const PAGINATION = {
  DEFAULT_PAGE: 1,

  DEFAULT_LIMIT: 12,

  ADMIN_LIMIT: 20,

  MAX_LIMIT: 100
};

export const PRODUCT = {
  LOW_STOCK: 5,

  DEFAULT_STOCK: 0,

  MAX_IMAGES: 10,

  MAX_DESCRIPTION: 5000
};

export const PASSWORD = {
  MIN_LENGTH: 8,

  MAX_LENGTH: 100
};

export const FILES = {
  MAX_IMAGE_SIZE: 5 * 1024 * 1024,

  MAX_DOCUMENT_SIZE: 10 * 1024 * 1024,

  ALLOWED_IMAGES: [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp"
  ]
};

export const COLORS = {
  PRIMARY: "#0A4EA3",

  SECONDARY: "#F58220",

  SUCCESS: "#16A34A",

  WARNING: "#F59E0B",

  DANGER: "#DC2626",

  WHITE: "#FFFFFF",

  BLACK: "#111827"
};

export const API = {
  AUTH: "/api/auth",

  PRODUCTS: "/api/products",

  CATEGORIES: "/api/categories",

  ORDERS: "/api/orders",

  USERS: "/api/users",

  DASHBOARD: "/api/dashboard",

  UPLOAD: "/api/upload"
};

export const SEO = {
  TITLE: "ROMI TRADERS",

  DESCRIPTION:
    "Pakistan's Professional Online Shopping Store",

  KEYWORDS: [
    "romi traders",
    "online shopping",
    "pakistan",
    "electronics",
    "fashion",
    "ecommerce"
  ]
};

export const SOCIAL = {
  FACEBOOK: "",

  INSTAGRAM: "",

  YOUTUBE: "",

  LINKEDIN: "",

  X: ""
};
