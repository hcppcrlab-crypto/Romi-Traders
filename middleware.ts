import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "CHANGE_THIS_SECRET"
);

const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/shop",
  "/product",
  "/categories",
  "/brands",
  "/about",
  "/contact"
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore Next.js internals & static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Allow public routes
  const isPublic = PUBLIC_ROUTES.some((route) =>
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isPublic) {
    return NextResponse.next();
  }

  // Read token from cookies
  const token = request.cookies.get("access_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);

    const role = payload.role as string;

    // Admin Routes
    if (
      pathname.startsWith("/admin") &&
      role !== "SUPER_ADMIN" &&
      role !== "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/403", request.url));
    }

    // Manager Routes
    if (
      pathname.startsWith("/manager") &&
      role !== "SUPER_ADMIN" &&
      role !== "ADMIN" &&
      role !== "MANAGER"
    ) {
      return NextResponse.redirect(new URL("/403", request.url));
    }

    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(
      new URL("/login", request.url)
    );

    response.cookies.delete("access_token");

    return response;
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)"
  ]
};
