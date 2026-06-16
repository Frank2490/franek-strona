'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', '1')
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
