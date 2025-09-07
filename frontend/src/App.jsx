import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdsList from "./components/AdsList";
import AdDetails from "./components/AdDetails";
import { useState } from "react";

function App() {
  const [ads, setAds] = useState([]);

  const addAd = (newAd) => {
    setAds([...ads, newAd]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdsList ads={ads} onAddAd={addAd} />} />
        <Route path="/ads/:id" element={<AdDetails ads={ads} />} />
      </Routes>
    </Router>
  );
}

export default App;
