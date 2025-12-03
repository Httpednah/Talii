import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <header className="hero">
        <h1>Discover Local Experiences</h1>
        <p>Book tours, classes and unique activities in your area.</p>
        <div className="hero-actions">
          <Link to="/experiences" className="btn large primary">
            Browse Experiences
          </Link>
          <Link to="/guides" className="btn large">
            See Guides
          </Link>
        </div>
      </header>

      <section className="home-intro">
        <h2>How Talii works</h2>
        <ol>
          <li>Browse by category or location</li>
          <li>View details and availability</li>
          <li>Book and receive confirmation</li>
        </ol>
      </section>
    </section>
  );
}
