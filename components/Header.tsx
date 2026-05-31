'use client'

import { useEffect, useRef } from 'react'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hdr = headerRef.current
    if (!hdr) return
    const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={headerRef} id="hdr">
      <a className="mark" href="#top">Franciszek <b>Solewicz</b></a>
      <nav>
        <a href="#uslugi">Usługi</a>
        <a href="#projekty">Projekty</a>
        <a href="#kontakt">Kontakt</a>
        <a className="cta" href="#kontakt">Napisz do mnie</a>
      </nav>
    </header>
  )
}
