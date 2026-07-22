"use client";

const testimonials = [
  {
    id: 1,
    name: "Ali Raza",
    city: "Lahore",
    rating: 5,
    review:
      "Excellent service. Fast delivery and original products. Highly recommended."
  },
  {
    id: 2,
    name: "Ahmed Khan",
    city: "Karachi",
    rating: 5,
    review:
      "Website is easy to use. Customer support is very helpful and responsive."
  },
  {
    id: 3,
    name: "Sara Malik",
    city: "Islamabad",
    rating: 5,
    review:
      "Very satisfied with the quality. Packaging and delivery were perfect."
  }
];

export default function Testimonials() {
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
              fontWeight: 700
            }}
          >
            CUSTOMER REVIEWS
          </span>

          <h2
            style={{
              fontSize: "42px",
              color: "#0A4EA3",
              marginTop: "15px",
              fontWeight: 800
            }}
          >
            What Our Customers Say
          </h2>

          <p
            style={{
              color: "#6B7280",
              marginTop: "10px",
              fontSize: "18px"
            }}
          >
            Thousands of happy customers trust ROMI TRADERS.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px"
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                padding: "35px"
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  marginBottom: "20px"
                }}
              >
                {"⭐".repeat(item.rating)}
              </div>

              <p
                style={{
                  color: "#555",
                  lineHeight: "30px",
                  marginBottom: "25px"
                }}
              >
                "{item.review}"
              </p>

              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #E5E7EB",
                  marginBottom: "20px"
                }}
              />

              <h3
                style={{
                  color: "#0A4EA3",
                  marginBottom: "6px"
                }}
              >
                {item.name}
              </h3>

              <small
                style={{
                  color: "#6B7280"
                }}
              >
                {item.city}, Pakistan
              </small>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
