import React, { useEffect, useState } from "react";
import { getExperiences, deleteExperience } from "../api/experiences.js";

export default function ManageExperiences() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getExperiences()
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  async function handleDelete(id) {
    if (!confirm("Delete this experience?")) return;
    const ok = await deleteExperience(id);
    if (ok) setItems((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <section>
      <h2>Manage Experiences</h2>
      <ul className="manage-list">
        {items.map((i) => (
          <li key={i.id} className="manage-item">
            <div>
              <strong>{i.title}</strong>
              <div>
                {i.location} • KSh {i.price}
              </div>
            </div>
            <div>
              <button
                className="btn small"
                onClick={() => alert("Edit flow (future)")}
              >
                Edit
              </button>
              <button
                className="btn small danger"
                onClick={() => handleDelete(i.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
