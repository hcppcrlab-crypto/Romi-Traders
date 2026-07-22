/**
 * ============================================
 * ROMI TRADERS
 * Utility Functions
 * ============================================
 */

/**
 * Format Currency (PKR)
 */
export function formatCurrency(
  amount: number
): string {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Format Date
 */
export function formatDate(
  date: Date | string
): string {
  return new Intl.DateTimeFormat("en-PK", {
    dateStyle: "medium"
  }).format(new Date(date));
}

/**
 * Format Date & Time
 */
export function formatDateTime(
  date: Date | string
): string {
  return new Intl.DateTimeFormat("en-PK", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(date));
}

/**
 * Generate Slug
 */
export function slugify(
  text: string
): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Generate Random ID
 */
export function generateId(
  length = 12
): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
}

/**
 * Calculate Discount Percentage
 */
export function calculateDiscount(
  originalPrice: number,
  salePrice: number
): number {
  return Math.round(
    ((originalPrice - salePrice) / originalPrice) * 100
  );
}

/**
 * Truncate Text
 */
export function truncateText(
  text: string,
  maxLength = 100
): string {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
}

/**
 * Capitalize First Letter
 */
export function capitalize(
  text: string
): string {
  if (!text) {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Generate Order Number
 */
export function generateOrderNumber(): string {
  const now = new Date();

  const year = now.getFullYear();

  const month = String(
    now.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    now.getDate()
  ).padStart(2, "0");

  const random = Math.floor(
    100000 + Math.random() * 900000
  );

  return `RT-${year}${month}${day}-${random}`;
}

/**
 * Pagination
 */
export function paginate(
  page: number,
  limit: number
) {
  const skip = (page - 1) * limit;

  return {
    skip,
    take: limit
  };
}

/**
 * Sleep
 */
export function sleep(
  ms: number
): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/**
 * Is Email Valid
 */
export function isValidEmail(
  email: string
): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Remove Extra Spaces
 */
export function cleanText(
  value: string
): string {
  return value.replace(/\s+/g, " ").trim();
}

/**
 * Generate SKU
 */
export function generateSKU(
  prefix = "RT"
): string {
  const random = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `${prefix}-${random}`;
}

/**
 * Convert String to Boolean
 */
export function toBoolean(
  value: unknown
): boolean {
  return (
    value === true ||
    value === "true" ||
    value === 1 ||
    value === "1"
  );
}
