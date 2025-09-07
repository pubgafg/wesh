import { useParams, Link } from "react-router-dom";

function AdDetails({ ads }) {
  const { id } = useParams();
  const ad = ads.find((a) => a.id.toString() === id);

  if (!ad) {
    return <h2>آگهی پیدا نشد</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ بازگشت</Link>
      <h2>{ad.title}</h2>
      {ad.image && (
        <img
          src={ad.image}
          alt={ad.title}
          style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
        />
      )}
      <p>💰 قیمت: {ad.price} $</p>
      <p>📌 توضیحات: {ad.description || "توضیحات وارد نشده"}</p>
      <p>📞 شماره تماس: {ad.phone || "ثبت نشده"}</p>
    </div>
  );
}

export default AdDetails;
