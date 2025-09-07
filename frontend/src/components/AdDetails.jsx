import React from "react";
import { useParams, Link } from "react-router-dom";

function AdDetails({ ads }) {
  const { id } = useParams();
  const ad = ads[id];

  if (!ad) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <p className="text-red-500">❌ آگهی پیدا نشد</p>
        <Link to="/" className="text-green-600 underline">
          ← بازگشت به لیست
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* دکمه بازگشت */}
      <Link
        to="/"
        className="text-green-600 underline block mb-4"
      >
        ← بازگشت به لیست آگهی‌ها
      </Link>

      {/* نمایش جزئیات آگهی */}
      <div className="bg-white shadow rounded-xl p-4 border">
        {/* (در آینده می‌تونی عکس هم اضافه کنی) */}
        <div className="bg-gray-100 h-48 mb-4 flex items-center justify-center rounded">
          <span className="text-gray-400">📷 بدون تصویر</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">{ad.title}</h1>
        <p className="text-green-700 font-semibold text-lg mb-4">
          {ad.price} تومان
        </p>
        <p className="text-gray-700">{ad.description || "بدون توضیحات"}</p>
      </div>
    </div>
  );
}

export default AdDetails;
