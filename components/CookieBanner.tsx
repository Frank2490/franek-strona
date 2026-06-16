'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie-consent'

function hasConsent(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function saveConsent(): void {
  try {
    localStorage.setItem(STORAGE_KEY, '1')
  } catch {}
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!hasConsent()) setVisible(true)
  }, [])

  const accept = () => {
    saveConsent()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        Ta strona używa plików cookies w celu zapewnienia prawidłowego działania.
        Korzystając ze strony, wyrażasz na to zgodę.
      </p>
      <button className="cookie-btn" onClick={accept}>Rozumiem</button>
    </div>
  )
}
