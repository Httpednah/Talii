const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8001";

/**
 * Fetch all reviews for a specific experience
 * @param {number} experienceId
 * @returns {Promise<Array>}
 */
export async function getReviews(experienceId) {
  const res = await fetch(`${API_BASE}/experiences/${experienceId}/reviews`);
  if (!res.ok) throw new Error("Failed to load reviews");
  return res.json();
}

/**
 * Create a new review
 * @param {Object} payload
 * Example payload:
 * {
 *   username: "johndoe",
 *   experience_id: 1,
 *   rating: 5,
 *   comment: "Amazing experience!"
 * }
 * @returns {Promise<Object>}
 */
export async function createReview(payload) {
  const res = await fetch(`${API_BASE}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

/**
 * Delete a review by ID
 * @param {number} id
 * @returns {Promise<boolean>}
 */
export async function deleteReview(id) {
  const res = await fetch(`${API_BASE}/reviews/${id}`, { method: "DELETE" });
  return res.ok;
}
