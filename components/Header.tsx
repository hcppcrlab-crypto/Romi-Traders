"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #E5E7EB",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <div
        className="container"
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* Logo */}

        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none"
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "#0A4EA3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "22px"
            }}
          >
            R
          </div>

          <div>
            <h2
              style={{
                color: "#0A4EA3",
                margin: 0,
                fontSize: "22px",
                fontWeight: 800
              }}
            >
              ROMI TRADERS
            </h2>

            <small
              style={{
                color: "#6B7280"
              }}
            >
              Online Shopping Store
            </small>
          </div>
        </Link>

        {/* Navigation */}

        <nav
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center"
          }}
        >
          <Link href="/">Home</Link>

          <Link href="/shop">Shop</Link>

          <Link href="/categories">Categories</Link>

          <Link href="/brands">Brands</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>
        </nav>

        {/* Right Side */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <button className="btn-secondary">
            Login
          </button>

          <button className="btn-primary">
            Cart (0)
          </button>
        </div>
      </div>
    </header>
  );
}
