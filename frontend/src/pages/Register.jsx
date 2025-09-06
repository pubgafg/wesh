import React from 'react'
import { API } from '../api'
import { useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Register(){
  const { t } = useTranslation()
  const nav = useNavigate()
  const [email,setEmail]=React.useState('')
  const [password,setPassword]=React.useState('')
  const [name,setName]=React.useState('')
  const [msg,setMsg]=React.useState('')
  const submit=async(e)=>{
    e.preventDefault()
    try{
      await API.post('/auth/register',{email,password,name})
      setMsg(t('register_ok'))
      nav('/login')
    }catch(err){ setMsg(err?.response?.data?.error||'Error') }
  }
  return (
    <div className="container">
      <div className="card">
        <h2>{t('register')}</h2>
        <form onSubmit={submit}>
          <input className="input" placeholder={t('name')} value={name} onChange={e=>setName(e.target.value)} />
          <br/><br/>
          <input className="input" placeholder={t('email')} value={email} onChange={e=>setEmail(e.target.value)} />
          <br/><br/>
          <input className="input" type="password" placeholder={t('password')} value={password} onChange={e=>setPassword(e.target.value)} />
          <br/><br/>
          <button className="btn btn-primary" type="submit">{t('register')}</button>
          <span style={{marginInlineStart:12}}><Link to="/login">{t('have_account')}</Link></span>
        </form>
        <p>{msg}</p>
      </div>
    </div>
  )
}
