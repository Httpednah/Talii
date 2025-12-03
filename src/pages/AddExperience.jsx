import React, { useState } from "react";
import { createExperience } from "../api/experiences.js";
import { useNavigate } from "react-router-dom";

export default function AddExperience() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await createExperience({
      title,
      price: Number(price),
      location,
      description,
    });
    nav("/host/manage");
  }

  return (
    <section>
      <h2>Add Experience</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Price (KSh)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Location</label>
        <input value={location} onChange={(e) => setLocation(e.target.value)} />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn primary" type="submit">
          Add
        </button>
      </form>
    </section>
  );
}
