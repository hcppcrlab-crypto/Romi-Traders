"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0A4EA3 0%, #083F84 60%, #062C5A 100%)",
        color: "#FFFFFF",
        padding: "90px 0"
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          alignItems: "center",
          gap: "60px"
        }}
      >
        {/* Left Side */}

        <div>

          <span
            style={{
              display: "inline-block",
              background: "#F58220",
              padding: "10px 20px",
              borderRadius: "50px",
              fontWeight: 700,
              marginBottom: "20px"
            }}
          >
            Trusted Online Store
          </span>

          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.1",
              fontWeight: 800,
              marginBottom: "25px"
            }}
          >
            Welcome To
            <br />
            ROMI TRADERS
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "34px",
              opacity: 0.95,
              marginBottom: "35px",
              maxWidth: "650px"
            }}
          >
            Buy Electronics, Fashion, Home Appliances,
            Mobile Accessories, Industrial Products,
            Office Supplies and much more with
            secure payment and nationwide delivery.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap"
            }}
          >
            <Link
              href="/shop"
              className="btn-secondary"
            >
              Shop Now
            </Link>

            <Link
              href="/categories"
              className="btn-primary"
              style={{
                background: "#FFFFFF",
                color: "#0A4EA3"
              }}
            >
              Browse Categories
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "50px",
              flexWrap: "wrap"
            }}
          >
            <div>
              <h2 style={{ fontSize: "34px" }}>50K+</h2>
              <p>Happy Customers</p>
            </div>

            <div>
              <h2 style={{ fontSize: "34px" }}>10K+</h2>
              <p>Products</p>
            </div>

            <div>
              <h2 style={{ fontSize: "34px" }}>24/7</h2>
              <p>Customer Support</p>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: "430px",
              height: "430px",
              background: "#FFFFFF",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 30px 60px rgba(0,0,0,.25)"
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "#0A4EA3",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "52px",
                fontWeight: 800,
                marginBottom: "25px"
              }}
            >
              R
            </div>

            <h2
              style={{
                color: "#0A4EA3",
                fontSize: "42px",
                fontWeight: 800,
                marginBottom: "10px"
              }}
            >
              ROMI TRADERS
            </h2>

            <p
              style={{
                color: "#6B7280",
                textAlign: "center",
                maxWidth: "280px",
                lineHeight: "28px"
              }}
            >
              Professional Online Shopping Platform
              For Quality Products Across Pakistan.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
