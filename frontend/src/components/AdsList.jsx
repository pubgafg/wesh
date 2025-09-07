import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdsList({ ads, onAddAd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!title || !price) return;
    onAddAd({ title, description, price });
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-6">لیست آگهی‌ها</h1>

      {/* فرم افزودن آگهی */}
      <div className="bg-white shadow p-4 rounded-xl mb-6">
        <input
          type="text"
          placeholder="عنوان آگهی"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <textarea
          placeholder="توضیحات"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="قیمت (تومان)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <button
          onClick={handleAdd}
          className="w-full bg-green-600 text-white py-2 rounded mt-2"
        >
          + ثبت آگهی
        </button>
      </div>

      {/* نمایش آگهی‌ها */}
      <div className="grid gap-4">
        {ads.length === 0 ? (
          <p className="text-gray-500">هیچ آگهی ثبت نشده است.</p>
        ) : (
          ads.map((ad, index) => (
            <Link
              key={index}
              to={`/ads/${index}`}
              className="block bg-white shadow rounded-xl p-4 border hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold text-gray-800">{ad.title}</h2>
              <p className="text-gray-600 text-sm truncate">{ad.description}</p>
              <p className="text-green-700 font-semibold mt-1">{ad.price} تومان</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default AdsList;
