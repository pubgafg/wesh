import React, { useState } from "react";
import { ADS } from "../api";

function AddAd() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    city: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(ADS.CREATE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage("آگهی با موفقیت ثبت شد ✅");
        setForm({ title: "", description: "", price: "", city: "", image: "" });
      } else {
        setMessage("خطا در ثبت آگهی ❌");
      }
    } catch (err) {
      console.error(err);
      setMessage("ارتباط با سرور برقرار نشد ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">ثبت آگهی جدید</h2>

      {message && <p className="mb-3 text-center text-sm">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="title"
          placeholder="عنوان آگهی"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <textarea
          name="description"
          placeholder="توضیحات"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows="3"
        />
        <input
          type="number"
          name="price"
          placeholder="قیمت (افغانی)"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="شهر"
          value={form.city}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="لینک تصویر (URL)"
          value={form.image}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "در حال ثبت..." : "ثبت آگهی"}
        </button>
      </form>
    </div>
  );
}

export default AddAd;
