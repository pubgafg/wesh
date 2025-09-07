import React from "react";
import { API } from "../api";  // همینطور که داشتی درسته
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
  console.log("API URL:", API); // تست
  return (
    <div>
      <h1>Login Page</h1>
      <p>API: {API}</p>
    </div>
  );
}

export default Login;
