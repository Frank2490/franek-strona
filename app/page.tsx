import Image from 'next/image'
import Header from '@/components/Header'
import BgLayer from '@/components/BgLayer'
import ScrollReveal from '@/components/ScrollReveal'
import TweaksPanelApp from '@/components/TweaksPanel'
import ContactForm from '@/components/ContactForm'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M4 12l5 5L20 6" />
  </svg>
)

export default function Home() {
  return (
    <>
      <BgLayer />
      <Header />

      <main id="top">
        {/* Hero */}
        <section className="hero" data-screen-label="Atelier — Hero">
          <h1 className="hero-title reveal">
            Profesjonalne strony internetowe, które&nbsp;<em>przyciągają klientów</em>.
          </h1>
          <p className="hero-sub reveal d2">
            Projektuję i koduję nowoczesne strony internetowe, które budują zaufanie i pomagają zdobywać klientów.
          </p>
        </section>

        {/* Services */}
        <section className="block services" id="uslugi" data-screen-label="Atelier — Usługi">
          <div className="sec-head reveal">
            <span className="num">01</span>
            <h2>Co dla Ciebie zrobię</h2>
          </div>
          <div className="svc-list">
            <div className="svc-row reveal">
              <span className="idx">/ 01</span>
              <h3>Strony<br />firmowe</h3>
              <p>Profesjonalna obecność w sieci, która buduje zaufanie. Czytelna struktura, dopracowane detale i treści, które przekonują odwiedzających do kontaktu.</p>
              <ul className="svc-deliver">
                <li className="dl-h">Co dostajesz</li>
                <li><CheckIcon />Pełna responsywność na telefonach</li>
                <li><CheckIcon />Wdrożenie, domena na rok i hosting</li>
                <li><CheckIcon />Podstawowa optymalizacja SEO</li>
                <li><CheckIcon />14 dni opieki po wdrożeniu</li>
              </ul>
            </div>
            <div className="svc-row reveal">
              <span className="idx">/ 02</span>
              <h3>Landing page i&nbsp;strony sprzedażowe</h3>
              <p>Strony zaprojektowane pod jeden cel: pozyskiwanie klientów. Przemyślana ścieżka, mocne wezwania do działania i układ nastawiony na konwersję.</p>
              <ul className="svc-deliver">
                <li className="dl-h">Co dostajesz</li>
                <li><CheckIcon />Układ nastawiony na konwersję</li>
                <li><CheckIcon />Teksty sprzedażowe i CTA</li>
                <li><CheckIcon />Formularz i integracje</li>
                <li><CheckIcon />14 dni opieki po wdrożeniu</li>
              </ul>
            </div>
            <div className="svc-row reveal">
              <span className="idx">/ 03</span>
              <h3>Sklepy internetowe</h3>
              <p>Sprzedawaj online bez kompromisów. Przejrzysty katalog, wygodny koszyk i płatności oraz wydajność i SEO, dzięki którym klienci Cię znajdą.</p>
              <ul className="svc-deliver">
                <li className="dl-h">Co dostajesz</li>
                <li><CheckIcon />Katalog i karty produktów</li>
                <li><CheckIcon />Koszyk i płatności online</li>
                <li><CheckIcon />Panel do samodzielnego zarządzania</li>
                <li><CheckIcon />14 dni opieki po wdrożeniu</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="stats-bar reveal">
          <div className="item">
            <span className="label">CZAS REALIZACJI</span>
            <p>Do 7 dni</p>
          </div>
          <div className="item">
            <span className="label">CENY OD</span>
            <p>800 zł</p>
          </div>
          <div className="item">
            <span className="label">LOKALIZACJA</span>
            <p>Polska · zdalnie</p>
          </div>
        </div>

        {/* Projects */}
        <section className="block projects" id="projekty" data-screen-label="Atelier — Projekty">
          <div className="sec-head reveal">
            <span className="num">02</span>
            <h2>Wybrane realizacje</h2>
          </div>
          <div className="proj-grid">
            <div className="proj reveal">
              <div className="thumb">
                <span className="badge">Strona firmowa</span>
                <span className="arrow">↗</span>
                <Image
                  src="/assets/proj-salon.png"
                  alt="Strona salonu kosmetycznego — Warszawa"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div className="proj-info">
                <h3>Salon kosmetyczny</h3>
                <span className="yr"></span>
              </div>
              <p>Elegancka strona salonu kosmetycznego z galerią zabiegów oraz przejrzystym cennikiem usług.</p>
            </div>

            <div className="proj reveal d1">
              <div className="thumb">
                <span className="badge">Strona firmowa</span>
                <span className="arrow">↗</span>
                <Image
                  src="/assets/proj-barber.png"
                  alt="Strona barbershopu BarberStan"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div className="proj-info">
                <h3>BarberStan</h3>
                <span className="yr"></span>
              </div>
              <p>Nowoczesna strona barbershopu z cennikiem usług i umawianiem wizyt online.</p>
            </div>

            <div className="proj reveal">
              <div className="thumb">
                <span className="badge">Landing page</span>
                <span className="arrow">↗</span>
                <Image
                  src="/assets/proj-touchnlock.png"
                  alt="Landing page Touch 'n' Lock — biometryczna kłódka na odcisk palca"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div className="proj-info">
                <h3>Touch &apos;n&apos; Lock</h3>
                <span className="yr"></span>
              </div>
              <p>Sprzedażowy landing page biometrycznej kłódki otwieranej odciskiem palca.</p>
            </div>

            <div className="proj reveal d1">
              <div className="thumb">
                <span className="badge">Landing page</span>
                <span className="arrow">↗</span>
                <Image
                  src="/assets/proj-promptify.png"
                  alt="Promptify — aplikacja webowa do generowania profesjonalnych promptów AI"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div className="proj-info">
                <h3>Promptify</h3>
                <span className="yr"></span>
              </div>
              <p>Aplikacja webowa, która z prostych słów użytkownika tworzy profesjonalne, zoptymalizowane prompty dla modeli AI.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact" id="kontakt" data-screen-label="Atelier — Kontakt">
          <div className="contact-header">
            <span className="num reveal">03</span>
            <h2 className="reveal d1">Kontakt</h2>
            <p className="contact-sub reveal d2">Masz pomysł? Zróbmy z niego coś realnego.</p>
          </div>
          <div className="contact-inner">
            <ContactForm />
            <div className="contact-side reveal d1">
              <div className="row">
                <span className="label">E-mail</span>
                <a href="mailto:franeksolewicz228@gmail.com">franeksolewicz228@gmail.com</a>
              </div>
              <div className="row">
                <span className="label">Telefon</span>
                <p>+48 792 069 836</p>
              </div>
              <div className="row">
                <span className="label">Sieci</span>
                <div className="socials">
                  <a href="https://github.com/Frank2490" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/franciszek-solewicz-46879b3a5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://www.instagram.com/franciszek.builds/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Franciszek Solewicz</span>
        <span>Portfolio · Strony internetowe</span>
      </footer>

      <TweaksPanelApp />
      <ScrollReveal />
    </>
  )
}
