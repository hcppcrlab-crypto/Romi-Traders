import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Link from "next/link";

export const metadata = {
  title: "Romi Traders | International E-Commerce",
  description: "Worldwide automated e-commerce shopping platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <CartProvider>
          <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
                ROMI<span className="text-gray-900">TRADERS</span>
              </Link>
              <nav className="flex items-center gap-6">
                <Link href="/" className="hover:text-blue-600 font-medium">Products</Link>
                <Link href="/cart" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                  Cart 🛒
                </Link>
              </nav>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

          <footer className="bg-white border-t border-gray-200 mt-16 py-8 text-center text-sm text-gray-500">
            © 2026 Romi Traders. All international rights reserved.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
