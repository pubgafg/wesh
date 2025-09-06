import React from 'react'
import { API } from '../api'
import { useTranslation } from 'react-i18next'
import ProtectedRoute from '../components/ProtectedRoute'

function MyAdsInner(){
  const { t } = useTranslation()
  const [ads,setAds]=React.useState([])
  const load=async()=>{ const {data}=await API.get('/ads/mine'); setAds(data) }
  React.useEffect(()=>{ load() },[])

  const toggleSold=async(id)=>{ await API.patch(`/ads/${id}/sold`); load() }
  const remove=async(id)=>{ await API.delete(`/ads/${id}`); load() }

  return (
    <div className="container">
      <div className="card"><h2>{t('my_ads')}</h2></div>
      {ads.map(ad=> (
        <div className="card" key={ad._id}>
          <h3>{ad.title}</h3>
          <p>{ad.desc}</p>
          <div style={{display:'flex', gap:8}}>
            <button className="btn btn-outline" onClick={()=>toggleSold(ad._id)}>{ad.sold? t('mark_unsold'): t('mark_sold')}</button>
            <button className="btn" onClick={()=>remove(ad._id)}>{t('delete')}</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function MyAds(){
  return (
    <ProtectedRoute>
      <MyAdsInner />
    </ProtectedRoute>
  )
}
