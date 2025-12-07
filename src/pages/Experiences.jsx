import React, { useState, useEffect } from "react";
import ExperienceCard from "../components/ExperienceCard.jsx";
import LocationFilter from "../components/LocationFilter.jsx";
import { getExperiences } from "../api/experiences.js";

export default function Experiences() {
  const [locationQuery, setLocationQuery] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadExperiences() {
      try {
        setLoading(true);
        const data = await getExperiences();
        setExperiences(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    loadExperiences();
  }, []);

  // Filter experiences by location
  const filteredExperiences = experiences.filter((exp) =>
    (exp.location || "").toLowerCase().includes(locationQuery.toLowerCase())
  );

  return (
    <section>
      <h2>Experiences</h2>

      <LocationFilter value={locationQuery} onChange={setLocationQuery} />

      {loading && <p>Loading experiences...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {filteredExperiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>

      {!loading && filteredExperiences.length === 0 && (
        <p>No experiences found.</p>
      )}
    </section>
  );
}
