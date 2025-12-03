const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export async function createBooking(payload) {
  const res = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function getUserBookings(username) {
  const res = await fetch(
    `${API_BASE}/bookings/user/${encodeURIComponent(username)}`
  );
  if (!res.ok) throw new Error("Failed to fetch bookings");
  return res.json();
}

export async function deleteBooking(id) {
  const res = await fetch(`${API_BASE}/bookings/${id}`, { method: "DELETE" });
  return res.ok;
}
