import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

export default function ExperienceCard({ exp }) {
  return (
    <article className="exp-card">
      <img
        src={exp.image || "/placeholder.jpg"}
        alt={exp.title}
        className="exp-image"
      />
      <div className="exp-body">
        <h3 className="exp-title">{exp.title}</h3>
        <p className="exp-location">{exp.location}</p>
        <p className="exp-price">KSh {exp.price}</p>
        <RatingStars rating={exp.avg_rating || 0} />
        <p className="exp-desc">
          {exp.description?.slice(0, 120)}
          {exp.description?.length > 120 ? "..." : ""}
        </p>
        <div className="exp-actions">
          <Link to={`/experiences/${exp.id}`} className="btn small">
            View
          </Link>
          <Link to={`/book/${exp.id}`} className="btn small primary">
            Book
          </Link>
        </div>
      </div>
    </article>
  );
}
