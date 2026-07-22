"use client";

import Link from "next/link";

const menuItems = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Shop",
    href: "/shop"
  },
  {
    name: "Categories",
    href: "/categories"
  },
  {
    name: "Brands",
    href: "/brands"
  },
  {
    name: "Flash Sale",
    href: "/flash-sale"
  },
  {
    name: "New Arrivals",
    href: "/new-arrivals"
  },
  {
    name: "Best Sellers",
    href: "/best-sellers"
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#0A4EA3",
        color: "#FFFFFF",
        height: "60px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                color: "#FFFFFF",
                fontWeight: 600,
                transition: "0.3s"
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div
          style={{
            background: "#F58220",
            padding: "8px 18px",
            borderRadius: "30px",
            fontWeight: 700,
            fontSize: "14px"
          }}
        >
          🚚 Free Shipping Over Rs. 5,000
        </div>
      </div>
    </nav>
  );
}
