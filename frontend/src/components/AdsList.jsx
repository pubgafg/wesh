// src/components/AdsList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api"; // ✅ درست شد

function AdsList() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    API.getAds().then(setAds).catch(console.error);
  }, []);

  return (
    <div>
      <h2>لیست آگهی‌ها</h2>
      <ul>
        {ads.map((ad) => (
          <li key={ad.id}>
            <Link to={`/ads/${ad.id}`}>
              {ad.title} - {ad.price} افغانی
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdsList;
