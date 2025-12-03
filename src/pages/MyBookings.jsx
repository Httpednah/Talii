import React, { useState, useEffect } from "react";
import { getUserBookings, deleteBooking } from "../api/bookings";

export default function MyBookings() {
  const [username, setUsername] = useState(
    localStorage.getItem("talii_user") || ""
  );
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    getUserBookings(username)
      .then((data) => setBookings(data))
      .finally(() => setLoading(false));
  }, [username]);

  async function handleCancel(id) {
    if (!confirm("Cancel this booking?")) return;
    const ok = await deleteBooking(id);
    if (ok) setBookings((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <section>
      <h2>My Bookings</h2>
      {!username && (
        <div className="form">
          <label>Enter your name to load bookings</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={() => localStorage.setItem("talii_user", username)}
            className="btn"
          >
            Save
          </button>
        </div>
      )}

      {loading && <p>Loading...</p>}
      <ul className="bookings-list">
        {bookings.map((b) => (
          <li key={b.id} className="booking-item">
            <div>
              <strong>{b.experience_title || "Experience"}</strong>
              <div>{b.date}</div>
            </div>
            <div>
              <button className="btn small" onClick={() => handleCancel(b.id)}>
                Cancel
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
