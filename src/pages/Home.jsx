import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="hero"
        style={{ minHeight: "80vh", padding: "60px 20px" }}
      >
        <h1>Discover Local Experiences</h1>
        <p>Book tours, classes and unique activities close to you.</p>
        <div className="hero-actions" style={{ marginTop: "20px" }}>
          <Link
            to="/experiences"
            className="btn large primary"
            style={{ marginRight: "10px" }}
          >
            Browse Experiences
          </Link>
          <Link to="/guides" className="btn large">
            See Guides
          </Link>
        </div>
      </header>

      {/* How it works Section */}
      <section
        className="how-it-works"
        style={{ padding: "60px 20px", background: "#fff6fb" }}
      >
        <h2>How it works</h2>
        <ol>
          <li>Browse by category or location</li>
          <li>View details and availability</li>
          <li>Book and get confirmation</li>
        </ol>
      </section>

      {/* About Us Section */}
      <section
        className="about-us"
        style={{ padding: "60px 20px", background: "#ffeef4" }}
      >
        <h2>About Us</h2>
        <p>
          Talii is dedicated to helping you discover authentic local
          experiences. Our mission is to connect travelers and locals with
          unique adventures, tours, and activities that create unforgettable
          memories.
        </p>
      </section>

      {/* Contact / Info Section */}
      <section
        className="contact"
        style={{ padding: "60px 20px", background: "#fff" }}
      >
        <h2>Get in Touch</h2>
        <form
          style={{
            maxWidth: "500px",
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #eee",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #eee",
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #eee",
            }}
          ></textarea>
          <button type="submit" className="btn primary large">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
