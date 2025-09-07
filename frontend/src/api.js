import axios from "axios";

// آدرس بک‌اند (Render یا لوکال)
const API = axios.create({
  baseURL: "https://wesh-backend.onrender.com/api", 
});

// توکن JWT رو اگر داشتیم بفرستیم
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API; // ✅ دیگه export default داریم
