import React, { useEffect, useState } from "react";
import api from "../api";

function AdsList() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await api.get("/ads"); // داده‌ها از بک‌اند
        setAds(res.data);
      } catch (err) {
        console.error("خطا در گرفتن آگهی‌ها:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  if (loading) {
    return <p>در حال بارگذاری...</p>;
  }

  return (
    <div>
      <h2>📢 آخرین آگهی‌ها</h2>
      {ads.length === 0 ? (
        <p>هیچ آگهی‌ای موجود نیست.</p>
      ) : (
        <ul>
          {ads.map((ad) => (
            <li key={ad._id}>
              <h3>{ad.title}</h3>
              <p>{ad.description}</p>
              <p>شهر: {ad.city}</p>
              <p>قیمت: {ad.price} افغانی</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdsList;
