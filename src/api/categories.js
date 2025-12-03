const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export async function getCategories() {
  const res = await fetch(`${API_BASE}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
