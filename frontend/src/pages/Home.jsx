import React from 'react'
import { API } from '../api'
import { useTranslation } from 'react-i18next'

const CITIES = ['all','Kabul','Herat','Mazar','Kandahar','Nangarhar','Ghazni']

export default function Home(){
  const { t } = useTranslation()
  const [ads,setAds]=React.useState([])
  const [city,setCity]=React.useState('all')
  const [condition,setCondition]=React.useState('')
  const [q,setQ]=React.useState('')

  const load=async()=>{
    const params = new URLSearchParams()
    if(city) params.set('city', city)
    if(condition) params.set('condition', condition)
    if(q) params.set('q', q)
    const {data}=await API.get('/ads?'+params.toString())
    setAds(data)
  }
  React.useEffect(()=>{ load() },[])

  return (
    <div className="container">
      <div className="card">
        <h2>{t('latest_ads')}</h2>
        <div className="row">
          <select className="input" value={city} onChange={e=>setCity(e.target.value)}>
            {CITIES.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
          <select className="input" value={condition} onChange={e=>setCondition(e.target.value)}>
            <option value="">{t('all_conditions')}</option>
            <option value="new">{t('new')}</option>
            <option value="almost_new">{t('almost_new')}</option>
            <option value="used">{t('used')}</option>
          </select>
        </div>
        <div className="row" style={{marginTop:12}}>
          <input className="input" placeholder={t('search_placeholder')} value={q} onChange={e=>setQ(e.target.value)} />
          <button className="btn btn-primary" onClick={load}>{t('filter')}</button>
        </div>
      </div>

      {ads.map(ad=> (
        <div className="card" key={ad._id}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h3>{ad.title}</h3>
            {ad.sold && <span className="badge">{t('sold')}</span>}
          </div>
          <p>{ad.desc}</p>
          <div style={{display:'flex', gap:12, alignItems:'center'}}>
            <span className="badge">{ad.city}</span>
            <span className="badge">{t(ad.condition)}</span>
            <strong>{ad.price?.toLocaleString()} AFN</strong>
          </div>
        </div>
      ))}
    </div>
  )
}
