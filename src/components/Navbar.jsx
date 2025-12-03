import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">
          Talii
        </Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/guides">Guides</Link>
        <Link to="/reviews">Reviews</Link>
      </div>
      <div className="nav-right">
        <Link to="/my-bookings">My Bookings</Link>
        <Link to="/host">Host</Link>
        <Link to="/user">Profile</Link>
      </div>
    </nav>
  );
}
