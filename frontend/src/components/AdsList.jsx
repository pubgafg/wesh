import React from "react";
import { Link } from "react-router-dom";

function AdsList({ ads }) {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-bold mb-4">آگهی‌ها</h2>
      {ads.map((ad, index) => (
        <div key={index} className="p-4 bg-white rounded-2xl shadow-md flex items-center gap-4">
          {ad.image && (
            <img src={ad.image} alt={ad.title} className="w-20 h-20 object-cover rounded-lg" />
          )}
          <div>
            <Link to={`/ads/${index}`} className="text-lg font-semibold text-blue-600">
              {ad.title}
            </Link>
            <p className="text-gray-700">{ad.price} $</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdsList;
