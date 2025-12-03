import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <header className="hero">
        <h1>Discover Local Experiences</h1>
        <p>Book tours, classes and unique activities close to you.</p>
        <div className="hero-actions">
          <Link to="/experiences" className="btn large primary">
            Browse Experiences
          </Link>
          <Link to="/guides" className="btn large">
            See Guides
          </Link>
        </div>
      </header>

      <section style={{ marginTop: 20 }}>
        <h2>How it works</h2>
        <ol>
          <li>Browse by category or location</li>
          <li>View details and availability</li>
          <li>Book and get confirmation</li>
        </ol>
      </section>
    </section>
  );
}
