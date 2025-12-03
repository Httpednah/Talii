import React from "react";

export default function LocationFilter({ value, onChange }) {
  return (
    <div className="filter-row">
      <label>Location:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. Nairobi"
      />
    </div>
  );
}
