/*
==================================================
ROMI TRADERS
Validation Helpers
==================================================
*/

export interface ValidationResult {
  success: boolean;
  errors: string[];
}

export function validateEmail(email: string): ValidationResult {
  const errors: string[] = [];

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errors.push("Email is required.");
  }

  if (email && !regex.test(email)) {
    errors.push("Invalid email address.");
  }

  return {
    success: errors.length === 0,
    errors
  };
}

export function validatePhone(phone: string): ValidationResult {
  const errors: string[] = [];

  const regex =
    /^(\+92|0)?3[0-9]{9}$/;

  if (!phone) {
    errors.push("Phone number is required.");
  }

  if (phone && !regex.test(phone)) {
    errors.push("Invalid Pakistani phone number.");
  }

  return {
    success: errors.length === 0,
    errors
  };
}

export function validatePassword(
  password: string
): ValidationResult {

  const errors: string[] = [];

  if (!password) {
    errors.push("Password is required.");
  }

  if (password.length < 8) {
    errors.push(
      "Password must be at least 8 characters."
    );
  }

  if (!/[A-Z]/.test(password)) {
    errors.push(
      "Password must contain an uppercase letter."
    );
  }

  if (!/[a-z]/.test(password)) {
    errors.push(
      "Password must contain a lowercase letter."
    );
  }

  if (!/[0-9]/.test(password)) {
    errors.push(
      "Password must contain a number."
    );
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push(
      "Password must contain a special character."
    );
  }

  return {
    success: errors.length === 0,
    errors
  };
}

export function validateRegister(data: {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}) {

  const errors: string[] = [];

  if (!data.fullName.trim()) {
    errors.push("Full name is required.");
  }

  errors.push(...validateEmail(data.email).errors);

  errors.push(...validatePhone(data.phone).errors);

  errors.push(...validatePassword(data.password).errors);

  return {
    success: errors.length === 0,
    errors
  };
}

export function validateLogin(data: {
  email: string;
  password: string;
}) {

  const errors: string[] = [];

  errors.push(...validateEmail(data.email).errors);

  if (!data.password) {
    errors.push("Password is required.");
  }

  return {
    success: errors.length === 0,
    errors
  };
}

export function validateCategory(data: {
  name: string;
}) {

  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push("Category name is required.");
  }

  if (data.name.length < 2) {
    errors.push(
      "Category name is too short."
    );
  }

  return {
    success: errors.length === 0,
    errors
  };
}

export function validateProduct(data: {
  name: string;
  description: string;
  price: number;
  stock: number;
}) {

  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push("Product name is required.");
  }

  if (data.description.length < 20) {
    errors.push(
      "Description should contain at least 20 characters."
    );
  }

  if (data.price <= 0) {
    errors.push(
      "Price must be greater than zero."
    );
  }

  if (data.stock < 0) {
    errors.push(
      "Stock cannot be negative."
    );
  }

  return {
    success: errors.length === 0,
    errors
  };
}

export function validateOrder(data: {
  customerName: string;
  phone: string;
  address: string;
}) {

  const errors: string[] = [];

  if (!data.customerName.trim()) {
    errors.push(
      "Customer name is required."
    );
  }

  errors.push(...validatePhone(data.phone).errors);

  if (!data.address.trim()) {
    errors.push(
      "Delivery address is required."
    );
  }

  return {
    success: errors.length === 0,
    errors
  };
}

export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim() === "";
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
}

export function hasErrors(
  validation: ValidationResult
): boolean {
  return !validation.success;
}
