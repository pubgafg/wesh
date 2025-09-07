import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ADS } from "../api"; // ایمپورت درست

function AdsList() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await fetch(ADS.GET_ALL);
        const data = await res.json();
        setAds(data);
      } catch (err) {
        console.error("خطا در گرفتن آگهی‌ها:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
  }, []);

  if (loading) return <p className="text-center">در حال بارگذاری...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {ads.map((ad) => (
        <Link
          key={ad._id}
          to={`/ads/${ad._id}`}
          className="border rounded-xl shadow p-4 bg-white hover:shadow-lg transition"
        >
          <img
            src={ad.image || "/placeholder.jpg"}
            alt={ad.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="font-bold text-lg mt-2">{ad.title}</h2>
          <p className="text-gray-600">{ad.price} افغانی</p>
          <p className="text-sm text-gray-500">{ad.city}</p>
        </Link>
      ))}
    </div>
  );
}

export default AdsList;
