"use client";

const brands = [
  {
    id: 1,
    name: "Samsung",
    logo: "📱"
  },
  {
    id: 2,
    name: "Apple",
    logo: "🍎"
  },
  {
    id: 3,
    name: "HP",
    logo: "💻"
  },
  {
    id: 4,
    name: "Dell",
    logo: "🖥️"
  },
  {
    id: 5,
    name: "Sony",
    logo: "🎧"
  },
  {
    id: 6,
    name: "LG",
    logo: "📺"
  },
  {
    id: 7,
    name: "Lenovo",
    logo: "🖱️"
  },
  {
    id: 8,
    name: "Asus",
    logo: "⌨️"
  }
];

export default function Brands() {
  return (
    <section
      className="section"
      style={{
        background: "#F8FAFC"
      }}
    >
      <div className="container">

        <div
          style={{
            textAlign: "center",
            marginBottom: "50px"
          }}
        >
          <span
            style={{
              color: "#F58220",
              fontWeight: 700,
              letterSpacing: "1px"
            }}
          >
            TRUSTED PARTNERS
          </span>

          <h2
            style={{
              color: "#0A4EA3",
              fontSize: "42px",
              marginTop: "15px",
              fontWeight: 800
            }}
          >
            Popular Brands
          </h2>

          <p
            style={{
              color: "#6B7280",
              marginTop: "10px",
              fontSize: "18px"
            }}
          >
            Shop products from the world's leading brands.
          </p>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "25px"
          }}
        >

          {brands.map((brand) => (

            <div
              key={brand.id}
              className="card"
              style={{
                padding: "35px 20px",
                textAlign: "center",
                cursor: "pointer"
              }}
            >

              <div
                style={{
                  fontSize: "65px",
                  marginBottom: "20px"
                }}
              >
                {brand.logo}
              </div>

              <h3
                style={{
                  color: "#0A4EA3",
                  fontSize: "22px",
                  fontWeight: 700
                }}
              >
                {brand.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
