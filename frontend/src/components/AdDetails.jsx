import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdsList({ ads, onAddAd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleAdd = () => {
    if (!title || !price) return alert("عنوان و قیمت اجباری است!");

    const newAd = {
      title,
      price,
      description,
      image: image ? URL.createObjectURL(image) : null, // عکس موقت
    };

    onAddAd(newAd);

    setTitle("");
    setPrice("");
    setDescription("");
    setImage(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">لیست آگهی‌ها</h1>

      {/* فرم ثبت آگهی */}
      <div className="bg-white p-4 shadow rounded-xl mb-6">
        <input
          type="text"
          placeholder="عنوان آگهی"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />
        <input
          type="text"
          placeholder="قیمت"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />
        <textarea
          placeholder="توضیحات"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />

        {/* آپلود عکس */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 w-full mb-2 rounded"
        />

        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          ➕ اضافه کردن آگهی
        </button>
      </div>

      {/* لیست آگهی‌ها */}
      <ul className="space-y-3">
        {ads.map((ad, index) => (
          <li key={index} className="bg-white shadow p-3 rounded-xl">
            <Link to={`/ads/${index}`} className="text-green-700 font-semibold">
              {ad.title} - {ad.price} تومان
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdsList;
