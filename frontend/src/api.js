// frontend/src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://wesh-backend.onrender.com/api", // آدرس بک‌اندت روی Render
});

export default api;
