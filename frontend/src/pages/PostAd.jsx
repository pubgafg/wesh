import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostAd({ addAd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAd({ title, price, image });
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">ثبت آگهی</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="عنوان آگهی"
          className="w-full border rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="قیمت"
          className="w-full border rounded p-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="preview" className="w-32 mt-2 rounded" />}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          ثبت
        </button>
      </form>
    </div>
  );
}

export default PostAd;
