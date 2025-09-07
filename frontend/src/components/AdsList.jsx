import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdsList({ ads, onAddAd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !price) return;

    const newAd = { title, description, price };
    onAddAd(newAd);

    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">لیست آگهی‌ها</h1>

      {/* فرم اضافه کردن آگهی */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="عنوان آگهی"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <textarea
          placeholder="توضیحات"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="قیمت"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          ➕ اضافه کردن آگهی
        </button>
      </form>

      {/* نمایش لیست آگهی‌ها */}
      <ul className="space-y-3">
        {ads.map((ad, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <Link
              to={`/ads/${index}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {ad.title}
            </Link>
            <p className="text-gray-600">💲 {ad.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdsList;
