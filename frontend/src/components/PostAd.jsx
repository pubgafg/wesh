import { useState } from "react";

function PostAd({ onAddAd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;

    onAddAd({
      id: Date.now(),
      title,
      price,
      image,
    });

    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <h2>ثبت آگهی</h2>
      <input
        type="text"
        placeholder="عنوان آگهی"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="قیمت"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="لینک عکس"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <button type="submit">ذخیره آگهی</button>
    </form>
  );
}

export default PostAd;
