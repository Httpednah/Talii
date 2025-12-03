import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import { getExperience } from "../api/experiences.js";
import RatingStars from "../components/RatingStars.jsx";

export default function ExperienceDetails() {
  const { id } = useParams();
  const { data: exp, loading, error } = useFetch(() => getExperience(id), [id]);

  if (loading) return <p>Loading...</p>;
  if (error)
    return <p className="error">{error.message || error.toString()}</p>;
  if (!exp) return <p>Not found</p>;

  return (
    <section className="exp-details">
      <img
        src={exp.image || "/placeholder.jpg"}
        alt={exp.title}
        className="exp-large"
      />
      <div className="exp-meta">
        <h2>{exp.title}</h2>
        <p className="exp-location">{exp.location}</p>
        <p className="exp-price">KSh {exp.price}</p>
        <RatingStars rating={exp.avg_rating || 0} />
        <p style={{ marginTop: 12 }}>{exp.description}</p>

        <div className="exp-actions" style={{ marginTop: 14 }}>
          <Link to={`/book/${exp.id}`} className="btn primary">
            Book this experience
          </Link>
        </div>
      </div>
    </section>
  );
}
