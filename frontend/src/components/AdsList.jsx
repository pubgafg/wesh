import { Link } from "react-router-dom";
import PostAd from "./PostAd";
import { useState } from "react";

function AdsList() {
  const [ads, setAds] = useState([]);

  const addAd = (newAd) => {
    setAds([...ads, newAd]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>آگهی‌ها</h1>
      <PostAd onAddAd={addAd} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {ads.map((ad) => (
          <div key={ad.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <Link to={`/ads/${ad.id}`} style={{ textDecoration: "none", color: "black" }}>
              {ad.image && (
                <img
                  src={ad.image}
                  alt={ad.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
              )}
              <h3>{ad.title}</h3>
              <p>{ad.price} $</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdsList;
