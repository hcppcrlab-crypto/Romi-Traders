"use client";

import Link from "next/link";

const flashSaleProducts = [
  {
    id: 1,
    name: "Gaming Mouse",
    price: 2999,
    oldPrice: 4500,
    discount: "33%",
    image: "🖱️"
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 8999,
    oldPrice: 11999,
    discount: "25%",
    image: "⌨️"
  },
  {
    id: 3,
    name: "Bluetooth Earbuds",
    price: 5499,
    oldPrice: 7499,
    discount: "27%",
    image: "🎧"
  },
  {
    id: 4,
    name: "Power Bank",
    price: 3999,
    oldPrice: 5200,
    discount: "23%",
    image: "🔋"
  }
];

export default function FlashSale() {
  return (
    <section
      style={{
        background: "#0A4EA3",
        color: "#FFFFFF",
        padding: "80px 0"
      }}
    >
      <div className="container">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "40px"
          }}
        >
          <div>

            <span
              style={{
                background: "#F58220",
                padding: "8px 18px",
                borderRadius: "30px",
                fontWeight: 700
              }}
            >
              ⚡ Limited Time Offer
            </span>

            <h2
              style={{
                fontSize: "42px",
                marginTop: "20px",
                fontWeight: 800
              }}
            >
              Flash Sale
            </h2>

            <p
              style={{
                opacity: 0.9,
                marginTop: "10px"
              }}
            >
              Grab these amazing deals before they're gone.
            </p>

          </div>

          <div
            style={{
              display: "flex",
              gap: "15px"
            }}
          >

            <div
              style={{
                background: "#FFFFFF",
                color: "#0A4EA3",
                padding: "15px",
                borderRadius: "12px",
                textAlign: "center",
                minWidth: "80px"
              }}
            >
              <h3>12</h3>
              <small>Hours</small>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                color: "#0A4EA3",
                padding: "15px",
                borderRadius: "12px",
                textAlign: "center",
                minWidth: "80px"
              }}
            >
              <h3>30</h3>
              <small>Minutes</small>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                color: "#0A4EA3",
                padding: "15px",
                borderRadius: "12px",
                textAlign: "center",
                minWidth: "80px"
              }}
            >
              <h3>45</h3>
              <small>Seconds</small>
            </div>

          </div>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px"
          }}
        >
          {flashSaleProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                overflow: "hidden",
                color: "#111827"
              }}
            >

              <div
                style={{
                  background: "#EEF5FF",
                  height: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "70px",
                  position: "relative"
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "#DC2626",
                    color: "#FFFFFF",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: 700
                  }}
                >
                  -{product.discount}
                </span>

                {product.image}
              </div>

              <div
                style={{
                  padding: "25px"
                }}
              >
                <h3
                  style={{
                    color: "#0A4EA3",
                    marginBottom: "15px"
                  }}
                >
                  {product.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "20px"
                  }}
                >
                  <strong
                    style={{
                      color: "#0A4EA3",
                      fontSize: "24px"
                    }}
                  >
                    Rs. {product.price.toLocaleString()}
                  </strong>

                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#888"
                    }}
                  >
                    Rs. {product.oldPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  className="btn-secondary"
                  style={{
                    width: "100%"
                  }}
                >
                  Buy Now
                </button>

              </div>

            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "50px"
          }}
        >
          <Link
            href="/flash-sale"
            className="btn-primary"
          >
            View All Flash Deals
          </Link>
        </div>

      </div>
    </section>
  );
}
