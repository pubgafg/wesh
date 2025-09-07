import React from "react";
import { useParams, Link } from "react-router-dom";

function AdDetails({ ads }) {
  const { id } = useParams();
  const ad = ads[id]; // چون id همون index آگهی هست

  if (!ad) {
    return (
      <div className="p-4">
        <h2>آگهی پیدا نشد ❌</h2>
        <Link to="/" className="text-blue-500 underline">
          بازگشت به لیست آگهی‌ها
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2">{ad.title}</h2>
      <p className="text-gray-700 mb-4">{ad.description}</p>
      <p className="font-semibold text-green-600 mb-4">💲 {ad.price}</p>

      <Link to="/" className="text-blue-500 underline">
        ⬅ بازگشت
      </Link>
    </div>
  );
}

export default AdDetails;
