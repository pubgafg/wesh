import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import API from "../api"; // ✅ درست شد

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const user = await API.login(username, password);
    if (user) {
      navigate("/ads");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="username" placeholder="نام کاربری" />
      <input name="password" type="password" placeholder="رمز" />
      <button type="submit">ورود</button>
      <p>
        حساب نداری؟ <Link to="/register">ثبت نام</Link>
      </p>
    </form>
  );
}
