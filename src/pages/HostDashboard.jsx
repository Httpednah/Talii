import React from "react";
import { Link } from "react-router-dom";

export default function HostDashboard() {
  return (
    <section>
      <h2>Host Dashboard</h2>
      <div className="host-actions">
        <Link to="/host/add" className="btn">
          Add Experience
        </Link>
        <Link to="/host/manage" className="btn">
          Manage Experiences
        </Link>
      </div>
    </section>
  );
}
