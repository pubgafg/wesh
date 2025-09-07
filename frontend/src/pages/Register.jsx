import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import API from "../api"; // ✅ درست مثل Login.jsx

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await API.post("/auth/register", formData);
      // فرض: بک‌اند بعد از ثبت‌نام توکن می‌ده
      localStorage.setItem("token", res.data.token);

      navigate("/"); // بعد از ثبت‌نام میره صفحه اصلی
    } catch (err) {
      console.error(err);
      setError("ثبت‌نام ناموفق بود، لطفاً دوباره امتحان کنید");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("ایجاد حساب کاربری")}
        </h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t("نام کامل")}
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("ایمیل")}
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder={t("رمز عبور")}
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-green-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            {loading ? t("در حال ثبت‌نام...") : t("ثبت‌نام")}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {t("حساب داری؟")}{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            {t("وارد شو")}
          </Link>
        </p>
      </div>
    </div>
  );
}
