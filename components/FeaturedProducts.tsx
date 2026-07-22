"use client";

import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    category: "Electronics",
    price: 185000,
    oldPrice: 205000,
    rating: 5,
    image: "💻",
    badge: "SALE"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Accessories",
    price: 8500,
    oldPrice: 11000,
    rating: 5,
    image: "🎧",
    badge: "HOT"
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Wearables",
    price: 13500,
    oldPrice: 16500,
    rating: 4,
    image: "⌚",
    badge: "NEW"
  },
  {
    id: 4,
    name: "Android Phone",
    category: "Mobile",
    price: 65000,
    oldPrice: 72000,
    rating: 5,
    image: "📱",
    badge: "SALE"
  },
  {
    id: 5,
    name: "Office Chair",
    category: "Furniture",
    price: 19500,
    oldPrice: 22000,
    rating: 4,
    image: "🪑",
    badge: "TOP"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 9500,
    oldPrice: 12000,
    rating: 5,
    image: "🔊",
    badge: "HOT"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="section">

      <div className="container">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          <div>

            <h2
              style={{
                color: "#0A4EA3",
                fontSize: "42px",
                fontWeight: 800
              }}
            >
              Featured Products
            </h2>

            <p
              style={{
                color: "#6B7280",
                marginTop: "10px"
              }}
            >
              Best Selling Products Selected For You
            </p>

          </div>

          <Link
            href="/shop"
            className="btn-secondary"
          >
            View All Products
          </Link>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px"
          }}
        >

          {products.map((product) => (

            <div
              key={product.id}
              className="card"
              style={{
                overflow: "hidden"
              }}
            >

              <div
                style={{
                  background: "#EEF5FF",
                  height: "230px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  fontSize: "90px"
                }}
              >

                <span
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "#F58220",
                    color: "#fff",
                    padding: "8px 14px",
                    borderRadius: "30px",
                    fontWeight: 700,
                    fontSize: "13px"
                  }}
                >
                  {product.badge}
                </span>

                <button
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#fff",
                    fontSize: "18px"
                  }}
                >
                  ❤️
                </button>

                {product.image}

              </div>

              <div
                style={{
                  padding: "25px"
                }}
              >

                <small
                  style={{
                    color: "#F58220",
                    fontWeight: 700
                  }}
                >
                  {product.category}
                </small>

                <h3
                  style={{
                    marginTop: "10px",
                    color: "#0A4EA3",
                    fontSize: "22px"
                  }}
                >
                  {product.name}
                </h3>

                <div
                  style={{
                    margin: "15px 0",
                    color: "#F59E0B",
                    fontSize: "18px"
                  }}
                >
                  {"⭐".repeat(product.rating)}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px"
                  }}
                >

                  <span
                    style={{
                      color: "#0A4EA3",
                      fontWeight: 800,
                      fontSize: "24px"
                    }}
                  >
                    Rs. {product.price.toLocaleString()}
                  </span>

                  <span
                    style={{
                      color: "#999",
                      textDecoration: "line-through"
                    }}
                  >
                    Rs. {product.oldPrice.toLocaleString()}
                  </span>

                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px"
                  }}
                >

                  <button
                    className="btn-primary"
                    style={{
                      flex: 1
                    }}
                  >
                    Add To Cart
                  </button>

                  <button
                    className="btn-secondary"
                  >
                    View
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
