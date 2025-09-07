import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function AdDetails() {
  const { id } = useParams();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    API.getAdById(id).then(setAd);
  }, [id]);

  if (!ad) return <p>در حال بارگذاری...</p>;

  return (
    <div>
      <h2>{ad.title}</h2>
      <p>قیمت: {ad.price} $</p>
      <p>{ad.desc}</p>
    </div>
  );
}

export default AdDetails;
