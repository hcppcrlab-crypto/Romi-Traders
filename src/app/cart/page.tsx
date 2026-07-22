"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, totalAmount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link href="/" className="text-blue-600 font-medium hover:underline">&larr; Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-0">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center pt-6 mt-6 border-t font-extrabold text-xl">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>
      <button 
        onClick={() => alert("Redirecting to International Automated Payment Gateway...")}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-lg transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
