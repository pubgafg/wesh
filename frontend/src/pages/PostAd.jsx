// src/pages/PostAd.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import API from "../api";   // ✅ درست شد

function PostAd() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // بعدا اینجا می‌تونی API.postAd(...) بزنی
    alert("آگهی شما ثبت شد ✅");
    navigate("/");
  };

  return (
    <div>
      <h2>{t("ثبت آگهی جدید")}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="عنوان آگهی" required />
        <input type="number" placeholder="قیمت" required />
        <button type="submit">ثبت</button>
      </form>
    </div>
  );
}

export default PostAd;
