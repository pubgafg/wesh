import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostAd from "./pages/PostAd";
import AdDetails from "./pages/AdDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostAd />} />
        <Route path="/ad/:id" element={<AdDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
