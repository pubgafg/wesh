import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function AdDetails() {
  const { id } = useParams(); // گرفتن آیدی آگهی از URL
  const navigate = useNavigate();

  // این دیتا فعلاً نمونه است. بعداً میشه از API گرفت
  const fakeAds = [
    { id: "1", title: "خانه برای فروش", price: "250000 افغانی", description: "خانه ۳ اطاقه در غزنی" },
    { id: "2", title: "موتر Corolla", price: "750000 افغانی", description: "Corolla 2012 مدل، بسیار عالی" },
  ];

  const ad = fakeAds.find((item) => item.id === id);

  if (!ad) {
    return (
      <div className="p-4">
        <h2>آگهی یافت نشد ❌</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-4 py-2 rounded mt-3"
        >
          بازگشت به خانه
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">{ad.title}</h1>
      <p className="text-lg mb-2">💰 قیمت: {ad.price}</p>
      <p className="mb-4">{ad.description}</p>

      <button
        onClick={() => navigate("/")}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        بازگشت به خانه
      </button>
    </div>
  );
}

export default AdDetails;
