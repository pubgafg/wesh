import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function AdsList() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    API.getAds().then(setAds);
  }, []);

  return (
    <div>
      <h2>آگهی‌ها</h2>
      <ul>
        {ads.map((ad) => (
          <li key={ad.id}>
            <Link to={`/ad/${ad.id}`}>
              {ad.title} - {ad.price} $
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdsList;
