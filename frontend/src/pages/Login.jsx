import React from "react";
import { API } from "../api";  // اینجا درست ایمپورت شد
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = () => {
    console.log("Login request to:", API);
    // بعداً اینجا fetch یا axios اضافه میکنی برای لاگین
    navigate("/"); 
  };

  return (
    <div className="login-page">
      <h1>{t("login")}</h1>
      <button onClick={handleLogin}>{t("loginButton")}</button>
      <p>
        {t("noAccount")} <Link to="/register">{t("register")}</Link>
      </p>
    </div>
  );
}

export default Login;
