import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostAd({ onAddAd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;

    onAddAd({ title, price, description });
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-xl font-bold mb-4">ثبت آگهی جدید</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-4 space-y-4"
      >
        <input
          type="text"
          placeholder="عنوان آگهی"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="قیمت (دلار)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2 rounded-lg"
        />
        <textarea
          placeholder="توضیحات"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          ثبت آگهی
        </button>
      </form>
    </div>
  );
}

export default PostAd;
