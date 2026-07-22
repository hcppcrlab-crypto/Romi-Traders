"use client";

import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: "💻",
    products: "1,250+ Products",
    href: "/category/electronics"
  },
  {
    id: 2,
    name: "Fashion",
    icon: "👕",
    products: "2,100+ Products",
    href: "/category/fashion"
  },
  {
    id: 3,
    name: "Home & Kitchen",
    icon: "🏠",
    products: "950+ Products",
    href: "/category/home-kitchen"
  },
  {
    id: 4,
    name: "Mobile",
    icon: "📱",
    products: "650+ Products",
    href: "/category/mobile"
  },
  {
    id: 5,
    name: "Beauty",
    icon: "💄",
    products: "520+ Products",
    href: "/category/beauty"
  },
  {
    id: 6,
    name: "Sports",
    icon: "⚽",
    products: "430+ Products",
    href: "/category/sports"
  },
  {
    id: 7,
    name: "Office",
    icon: "🖨️",
    products: "780+ Products",
    href: "/category/office"
  },
  {
    id: 8,
    name: "Industrial",
    icon: "🏭",
    products: "300+ Products",
    href: "/category/industrial"
  }
];

export default function Categories() {
  return (
    <section className="section">
      <div className="container">

        <div
          style={{
            textAlign: "center",
            marginBottom: "50px"
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              color: "#0A4EA3",
              fontWeight: 800,
              marginBottom: "15px"
            }}
          >
            Shop By Categories
          </h2>

          <p
            style={{
              color: "#6B7280",
              fontSize: "18px"
            }}
          >
            Explore thousands of premium quality products.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px"
          }}
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="card"
              style={{
                padding: "30px",
                textAlign: "center"
              }}
            >
              <div
                style={{
                  fontSize: "55px",
                  marginBottom: "15px"
                }}
              >
                {category.icon}
              </div>

              <h3
                style={{
                  color: "#0A4EA3",
                  marginBottom: "10px",
                  fontSize: "24px"
                }}
              >
                {category.name}
              </h3>

              <p
                style={{
                  color: "#6B7280"
                }}
              >
                {category.products}
              </p>

              <button
                className="btn-secondary"
                style={{
                  marginTop: "20px"
                }}
              >
                Explore
              </button>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
