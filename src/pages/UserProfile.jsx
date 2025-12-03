import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState(localStorage.getItem("talii_user") || "");

  function save() {
    localStorage.setItem("talii_user", name);
    alert("Saved");
  }

  return (
    <section>
      <h2>User Profile</h2>
      <div className="form">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button className="btn" onClick={save}>
          Save
        </button>
      </div>
    </section>
  );
}
