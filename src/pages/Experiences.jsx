import React, { useState, useEffect } from "react";
import ExperienceCard from "../components/ExperienceCard.jsx";
import LocationFilter from "../components/LocationFilter.jsx";
import { getExperiences } from "../api/experiences.js";

export default function Experiences() {
  const [qLocation, setQLocation] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getExperiences()
      .then((data) => setItems(data))
      .catch((err) => setError(err.message || err.toString()))
      .finally(() => setLoading(false));
  }, []);

  const filtered = items.filter((e) =>
    (e.location || "").toLowerCase().includes(qLocation.toLowerCase())
  );

  return (
    <section>
      <h2>Experiences</h2>
      <LocationFilter value={qLocation} onChange={setQLocation} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {filtered.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>

      {!loading && filtered.length === 0 && <p>No experiences found.</p>}
    </section>
  );
}
