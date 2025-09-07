import React from "react";
import { Link } from "react-router-dom";
import AdsList from "../components/AdsList";

function Home() {
  return (
    <div>
      <h1>ویش – اپ شبیه دیوار</h1>
      <Link to="/post">+ ثبت آگهی</Link>
      <AdsList />
    </div>
  );
}

export default Home;
