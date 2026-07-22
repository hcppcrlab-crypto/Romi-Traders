export default function HomePage() {
  return (
    <main>

      {/* Hero Section */}

      <section className="bg-primary text-white">

        <div className="container section">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              alignItems: "center",
              gap: "50px"
            }}
          >
            {/* Left */}

            <div>

              <span
                style={{
                  display: "inline-block",
                  background: "#F58220",
                  padding: "8px 18px",
                  borderRadius: "50px",
                  fontWeight: 600,
                  marginBottom: "20px"
                }}
              >
                Welcome To ROMI TRADERS
              </span>

              <h1
                style={{
                  fontSize: "58px",
                  fontWeight: 800,
                  lineHeight: "1.1",
                  marginBottom: "25px"
                }}
              >
                Pakistan's Professional
                <br />
                Online Shopping Store
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "32px",
                  opacity: 0.9,
                  marginBottom: "35px"
                }}
              >
                Buy Premium Quality Products with Secure Payments,
                Fast Delivery, Easy Returns and 24/7 Customer Support.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap"
                }}
              >
                <button className="btn-secondary">
                  Shop Now
                </button>

                <button
                  style={{
                    padding: "14px 28px",
                    borderRadius: "12px",
                    background: "#ffffff",
                    color: "#0A4EA3",
                    fontWeight: 700
                  }}
                >
                  View Categories
                </button>
              </div>

            </div>

            {/* Right */}

            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div
                className="card"
                style={{
                  width: "420px",
                  height: "420px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff"
                }}
              >
                <h2
                  style={{
                    color: "#0A4EA3",
                    fontSize: "38px",
                    textAlign: "center"
                  }}
                >
                  ROMI
                  <br />
                  TRADERS
                </h2>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="section">

        <div className="container">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "25px"
            }}
          >

            <div className="card" style={{ padding: "30px", textAlign: "center" }}>
              <h3 className="text-primary">🚚 Fast Delivery</h3>
              <p style={{ marginTop: "10px" }}>
                Nationwide Shipping Available
              </p>
            </div>

            <div className="card" style={{ padding: "30px", textAlign: "center" }}>
              <h3 className="text-primary">💳 Secure Payment</h3>
              <p style={{ marginTop: "10px" }}>
                JazzCash, EasyPaisa, Cards & COD
              </p>
            </div>

            <div className="card" style={{ padding: "30px", textAlign: "center" }}>
              <h3 className="text-primary">🛡️ Warranty</h3>
              <p style={{ marginTop: "10px" }}>
                Genuine & Quality Products
              </p>
            </div>

            <div className="card" style={{ padding: "30px", textAlign: "center" }}>
              <h3 className="text-primary">📞 24/7 Support</h3>
              <p style={{ marginTop: "10px" }}>
                Customer Care Always Available
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
