"use client";

import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "Brands", href: "/brands" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" }
];

const customerLinks = [
  { name: "My Account", href: "/account" },
  { name: "My Orders", href: "/orders" },
  { name: "Wishlist", href: "/wishlist" },
  { name: "Track Order", href: "/track-order" },
  { name: "Returns", href: "/returns" },
  { name: "Support", href: "/support" }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0A4EA3",
        color: "#FFFFFF",
        marginTop: "80px"
      }}
    >
      <div
        className="container"
        style={{
          padding: "70px 0"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "40px"
          }}
        >
          {/* Company */}

          <div>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: 800,
                marginBottom: "20px"
              }}
            >
              ROMI TRADERS
            </h2>

            <p
              style={{
                lineHeight: "30px",
                opacity: 0.9
              }}
            >
              Professional Online Shopping Store providing quality
              products, secure payments, nationwide delivery and
              trusted customer service.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "25px"
              }}
            >
              <span>📘</span>
              <span>📷</span>
              <span>▶️</span>
              <span>💼</span>
              <span>❌</span>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              style={{
                marginBottom: "20px",
                color: "#F58220"
              }}
            >
              Quick Links
            </h3>

            {quickLinks.map((link) => (
              <div
                key={link.name}
                style={{
                  marginBottom: "12px"
                }}
              >
                <Link href={link.href}>
                  {link.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Customer */}

          <div>
            <h3
              style={{
                marginBottom: "20px",
                color: "#F58220"
              }}
            >
              Customer Area
            </h3>

            {customerLinks.map((link) => (
              <div
                key={link.name}
                style={{
                  marginBottom: "12px"
                }}
              >
                <Link href={link.href}>
                  {link.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}

          <div>
            <h3
              style={{
                marginBottom: "20px",
                color: "#F58220"
              }}
            >
              Contact Us
            </h3>

            <p style={{ marginBottom: "12px" }}>
              📍 Pakistan
            </p>

            <p style={{ marginBottom: "12px" }}>
              📞 +92-300-0000000
            </p>

            <p style={{ marginBottom: "12px" }}>
              ✉️ info@romitraders.com
            </p>

            <p>
              🕒 Mon - Sat : 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        <hr
          style={{
            margin: "50px 0 30px",
            border: "none",
            borderTop: "1px solid rgba(255,255,255,.2)"
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          <p>
            © {year} ROMI TRADERS. All Rights Reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions">
              Terms & Conditions
            </Link>

            <Link href="/refund-policy">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
