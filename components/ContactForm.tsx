'use client'

import { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

const initialState: FormState = { name: '', email: '', phone: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label className="label" htmlFor="cf-name">Imię i nazwisko</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
          />
        </div>
        <div className="cf-field">
          <label className="label" htmlFor="cf-email">E-mail</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jan@firma.pl"
          />
        </div>
      </div>
      <div className="cf-field">
        <label className="label" htmlFor="cf-phone">
          Telefon <span className="cf-optional">— opcjonalnie</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+48 000 000 000"
        />
      </div>
      <div className="cf-field">
        <label className="label" htmlFor="cf-message">Wiadomość</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Opisz swój projekt lub zadaj pytanie..."
        />
      </div>

      {status === 'success' && (
        <p className="cf-feedback cf-success">Dziękuję! Odezwę się wkrótce.</p>
      )}
      {status === 'error' && (
        <p className="cf-feedback cf-error">Coś poszło nie tak. Spróbuj ponownie.</p>
      )}

      <button type="submit" className="cf-btn" disabled={loading}>
        {loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
      </button>
    </form>
  )
}
