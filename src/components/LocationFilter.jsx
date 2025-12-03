import React from "react";

export default function LocationFilter({ value, onChange }) {
  return (
    <div className="filter-row">
      <label style={{ minWidth: 80 }}>Location:</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. Nairobi"
      />
    </div>
  );
}
