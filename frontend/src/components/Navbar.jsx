import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar(){
  const { t, i18n } = useTranslation()
  const nav = useNavigate()
  const toggleLng = ()=>{
    const next = i18n.language === 'fa' ? 'ps' : 'fa'
    i18n.changeLanguage(next); localStorage.setItem('lng', next); window.location.reload()
  }
  const toggleDark = ()=>{
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('dark', isDark? '1':'0')
  }
  React.useEffect(()=>{
    if(localStorage.getItem('dark')==='1') document.documentElement.classList.add('dark')
  },[])
  const logout=()=>{ localStorage.removeItem('token'); nav('/login') }

  return (
    <div className="nav container">
      <div style={{display:'flex', gap:8, alignItems:'center'}}>
        <span className="badge">Wesh</span>
        <Link to="/" className="btn btn-outline">{t('home')}</Link>
        <Link to="/post" className="btn btn-primary">{t('post_ad')}</Link>
        <Link to="/my-ads" className="btn btn-outline">{t('my_ads')}</Link>
      </div>
      <div style={{display:'flex', gap:8}}>
        <button className="btn btn-outline" onClick={toggleLng}>{t('lang')}</button>
        <button className="btn btn-outline" onClick={toggleDark}>{t('dark_mode')}</button>
        <Link to="/login" className="btn btn-outline">{t('login')}</Link>
        <button className="btn" onClick={logout}>{t('logout')}</button>
      </div>
    </div>
  )
}
