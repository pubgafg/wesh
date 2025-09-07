import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function PostAd() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newAd = {
      title: form.get("title"),
      price: form.get("price"),
      desc: form.get("desc"),
    };
    await API.addAd(newAd);
    navigate("/");
  };

  return (
    <div>
      <h2>ثبت آگهی جدید</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="عنوان آگهی" required />
        <input name="price" type="number" placeholder="قیمت" required />
        <textarea name="desc" placeholder="توضیحات"></textarea>
        <button type="submit">ثبت</button>
      </form>
    </div>
  );
}

export default PostAd;
