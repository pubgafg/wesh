// frontend/src/services/api.js
const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000" // وقتی لوکال تست می‌کنی
    : "https://wesh-backend.onrender.com"; // روی Render

export async function fetchAds() {
  const res = await fetch(`${API_BASE}/api/ads`);
  return res.json();
}

export async function createAd(ad) {
  const res = await fetch(`${API_BASE}/api/ads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ad),
  });
  return res.json();
}
