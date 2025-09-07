import React from "react";
import { Link } from "react-router-dom";

function AdsList({ ads, onAddAd }) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">آگهی‌ها</h2>
        <Link
          to="/post"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          + ثبت آگهی
        </Link>
      </div>

      {ads.length === 0 ? (
        <p className="text-gray-500">هیچ آگهی ثبت نشده است.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ads.map((ad, index) => (
            <Link
              key={index}
              to={`/ads/${index}`}
              className="block border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{ad.title}</h3>
              <p className="text-gray-600">{ad.price} $</p>
              <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                {ad.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdsList;
