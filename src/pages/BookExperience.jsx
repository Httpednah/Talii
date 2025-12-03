import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import { getExperience } from "../api/experiences.js";
import { createBooking } from "../api/bookings.js";

export default function BookExperience() {
  const { id } = useParams();
  const nav = useNavigate();
  const { data: exp, loading } = useFetch(() => getExperience(id), [id]);
  const [name, setName] = useState(localStorage.getItem("talii_user") || "");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (!exp) return <p>Experience not found</p>;

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!name || !date) return setError("Name and date required");
    try {
      await createBooking({ user_name: name, date, experience_id: exp.id });
      localStorage.setItem("talii_user", name);
      nav("/my-bookings");
    } catch (err) {
      setError(err.message || err.toString());
    }
  }

  return (
    <section>
      <h2>Book: {exp.title}</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Your name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Booking date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {error && <p className="error">{error}</p>}
        <button className="btn primary" type="submit">
          Confirm booking
        </button>
      </form>
    </section>
  );
}
