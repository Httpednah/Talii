import React from "react";

export default function RatingStars({ rating = 0 }) {
  const full = Math.round(rating);
  return (
    <div className="rating-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "star full" : "star"}>
          ★
        </span>
      ))}
      <span className="rating-number">
        {rating ? rating.toFixed(1) : "0.0"}
      </span>
    </div>
  );
}
