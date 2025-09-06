import React from 'react'
import { API } from '../api'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function PostAd(){
  const { t } = useTranslation()
  const nav = useNavigate()
  const [form,setForm]=React.useState({ title:'', desc:'', price:'', city:'Kabul', condition:'used', category:'general' })
  const [msg,setMsg]=React.useState('')
  const change=(k,v)=> setForm(p=>({ ...p, [k]:v }))
  const submit=async(e)=>{
    e.preventDefault()
    try{
      await API.post('/ads', { ...form, price: Number(form.price) })
      setMsg(t('ad_posted'))
      nav('/')
    }catch(err){ setMsg(err?.response?.data?.error||'Error') }
  }
  return (
    <div className="container">
      <div className="card">
        <h2>{t('post_ad')}</h2>
        <form onSubmit={submit}>
          <input className="input" placeholder={t('title')} value={form.title} onChange={e=>change('title',e.target.value)} />
          <br/><br/>
          <textarea className="input" placeholder={t('desc')} value={form.desc} onChange={e=>change('desc',e.target.value)} />
          <br/><br/>
          <div className="row">
            <input className="input" placeholder={t('price')} value={form.price} onChange={e=>change('price',e.target.value)} />
            <select className="input" value={form.city} onChange={e=>change('city',e.target.value)}>
              <option>Kabul</option><option>Herat</option><option>Mazar</option><option>Kandahar</option><option>Nangarhar</option><option>Ghazni</option>
            </select>
          </div>
          <br/>
          <div className="row">
            <select className="input" value={form.condition} onChange={e=>change('condition',e.target.value)}>
              <option value="new">{t('new')}</option>
              <option value="almost_new">{t('almost_new')}</option>
              <option value="used">{t('used')}</option>
            </select>
            <input className="input" placeholder={t('category')} value={form.category} onChange={e=>change('category',e.target.value)} />
          </div>
          <br/>
          <button className="btn btn-primary" type="submit">{t('submit')}</button>
          <p>{msg}</p>
        </form>
      </div>
    </div>
  )
}
