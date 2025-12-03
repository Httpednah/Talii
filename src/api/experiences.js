const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export async function getExperiences() {
  const res = await fetch(`${API_BASE}/experiences`);
  if (!res.ok) throw new Error("Failed to fetch experiences");
  return res.json();
}

export async function getExperience(id) {
  const res = await fetch(`${API_BASE}/experiences/${id}`);
  if (!res.ok) throw new Error("Failed to fetch experience");
  return res.json();
}

export async function createExperience(payload) {
  const res = await fetch(`${API_BASE}/experiences`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function updateExperience(id, payload) {
  const res = await fetch(`${API_BASE}/experiences/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function deleteExperience(id) {
  const res = await fetch(`${API_BASE}/experiences/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}
