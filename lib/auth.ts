import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "CHANGE_THIS_SECRET";

const JWT_EXPIRES_IN =
  process.env.JWT_EXPIRES_IN || "7d";

/**
 * Hash Password
 */
export async function hashPassword(
  password: string
): Promise<string> {
  const salt = await bcrypt.genSalt(12);

  return bcrypt.hash(password, salt);
}

/**
 * Compare Password
 */
export async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * Generate JWT Token
 */
export function generateAccessToken(payload: {
  id: string;
  email: string;
  role: string;
}) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
}

/**
 * Verify JWT Token
 */
export function verifyAccessToken(
  token: string
) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

/**
 * Get Bearer Token
 */
export function getBearerToken(
  authorization?: string
): string | null {
  if (!authorization) {
    return null;
  }

  if (!authorization.startsWith("Bearer ")) {
    return null;
  }

  return authorization.substring(7);
}

/**
 * Validate Password Strength
 */
export function validatePassword(
  password: string
) {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push(
      "Password must be at least 8 characters."
    );
  }

  if (!/[A-Z]/.test(password)) {
    errors.push(
      "Password must contain one uppercase letter."
    );
  }

  if (!/[a-z]/.test(password)) {
    errors.push(
      "Password must contain one lowercase letter."
    );
  }

  if (!/[0-9]/.test(password)) {
    errors.push(
      "Password must contain one number."
    );
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push(
      "Password must contain one special character."
    );
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Generate Random OTP
 */
export function generateOTP(
  length = 6
): string {
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
}
