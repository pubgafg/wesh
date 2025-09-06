import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PostAd from './pages/PostAd'
import MyAds from './pages/MyAds'

export default function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<PostAd />} />
        <Route path="/my-ads" element={<MyAds />} />
        <Route path="*" element={<div className="container"><div className="card">Not found</div></div>} />
      </Routes>
    </div>
  )
}
