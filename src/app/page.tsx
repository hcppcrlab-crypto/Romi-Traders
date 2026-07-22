"use client";

import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";

export default function HomePage() {
  const { addToCart } = useCart();

  return (
    <div>
      <section className="mb-10 text-center py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-3">International E-Commerce Experience</h1>
        <p className="text-lg opacity-90">Fast delivery, fully secure payments, and global shipping.</p>
      </section>

      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{product.category}</span>
                <h3 className="text-lg font-bold mt-1 mb-2">{product.name}</h3>
                <p className="text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
