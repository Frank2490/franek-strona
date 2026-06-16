import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Polityka Prywatności — Franciszek Solewicz',
  description: 'Informacje o przetwarzaniu danych osobowych przez Franciszka Solewicza.',
}

export default function PolitykaPrywatnosci() {
  return (
    <>
      <div className="bg-layer">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="blob b4" />
        <div className="grain" />
      </div>

      <main className="pp-wrap">
        <Link href="/" className="pp-back">← Wróć na stronę główną</Link>

        <article className="pp-body">
          <h1 className="pp-title disp">Polityka Prywatności</h1>
          <p className="pp-updated">Ostatnia aktualizacja: 16 czerwca 2026&nbsp;r.</p>

          <section className="pp-section">
            <h2>1. Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest <strong>Franciszek Solewicz</strong>,
              działający jako freelancer. Kontakt:{' '}
              <a href="mailto:franeksolewicz228@gmail.com">franeksolewicz228@gmail.com</a>.
            </p>
          </section>

          <section className="pp-section">
            <h2>2. Jakie dane zbieram</h2>
            <p>
              Poprzez formularz kontaktowy na stronie przetwarzam wyłącznie dane, które
              samodzielnie podajesz:
            </p>
            <ul>
              <li><strong>Imię i nazwisko</strong></li>
              <li><strong>Adres e-mail</strong></li>
              <li><strong>Numer telefonu</strong> (opcjonalnie)</li>
              <li><strong>Treść wiadomości</strong></li>
            </ul>
            <p>
              Nie zbieram danych automatycznie (pliki cookie, dane analityczne, adresy IP)
              w żaden inny sposób niż wynikający z przesłania formularza.
            </p>
          </section>

          <section className="pp-section">
            <h2>3. Cel i podstawa przetwarzania</h2>
            <p>
              Twoje dane przetwarzam wyłącznie w celu <strong>odpowiedzi na Twoje
              zapytanie</strong> przesłane przez formularz kontaktowy. Podstawą prawną
              przetwarzania jest Twoja <strong>dobrowolna zgoda</strong> (art. 6 ust. 1 lit. a
              RODO), wyrażona przez zaznaczenie checkboxa przed wysłaniem formularza.
            </p>
            <p>
              Zgoda jest dobrowolna. Możesz ją wycofać w dowolnym momencie, kontaktując się
              ze mną mailowo — bez wpływu na zgodność z prawem przetwarzania, które miało
              miejsce przed jej cofnięciem.
            </p>
          </section>

          <section className="pp-section">
            <h2>4. Przechowywanie danych</h2>
            <p>
              Dane przesłane przez formularz są zapisywane w bazie danych prowadzonej przez
              serwis <strong>Supabase</strong> (infrastruktura chmurowa zgodna z RODO,
              certyfikowana według SOC 2). Dane przechowuję przez czas niezbędny do
              obsługi zapytania, nie dłużej jednak niż <strong>12 miesięcy</strong> od jego
              otrzymania.
            </p>
          </section>

          <section className="pp-section">
            <h2>5. Udostępnianie danych</h2>
            <p>
              Twoje dane osobowe <strong>nie są przekazywane żadnym podmiotom trzecim</strong>,
              partnerom handlowym ani służbom reklamowym. Jedynym podmiotem przetwarzającym
              dane w moim imieniu jest Supabase Inc. jako dostawca infrastruktury bazy danych,
              z którym wiąże mnie umowa powierzenia przetwarzania danych.
            </p>
          </section>

          <section className="pp-section">
            <h2>6. Twoje prawa</h2>
            <p>Na podstawie RODO przysługują Ci następujące prawa:</p>
            <ul>
              <li><strong>Prawo dostępu</strong> — możesz zażądać informacji o tym, jakie dane przechowuję.</li>
              <li><strong>Prawo do sprostowania</strong> — możesz poprosić o poprawienie nieprawidłowych danych.</li>
              <li><strong>Prawo do usunięcia</strong> — możesz zażądać usunięcia swoich danych („prawo do bycia zapomnianym").</li>
              <li><strong>Prawo do ograniczenia przetwarzania</strong> — możesz zażądać ograniczenia przetwarzania w określonych przypadkach.</li>
              <li><strong>Prawo do wycofania zgody</strong> — w każdej chwili, bez podania przyczyny.</li>
              <li><strong>Prawo do skargi</strong> — możesz wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.</li>
            </ul>
            <p>
              Aby skorzystać z któregokolwiek z powyższych praw, napisz na adres{' '}
              <a href="mailto:franeksolewicz228@gmail.com">franeksolewicz228@gmail.com</a>.
              Odpowiem bez zbędnej zwłoki, nie później niż w ciągu 30 dni.
            </p>
          </section>

          <section className="pp-section">
            <h2>7. Zmiany polityki prywatności</h2>
            <p>
              W przypadku istotnych zmian w niniejszej polityce poinformuję o tym przez
              aktualizację daty w nagłówku dokumentu. Zachęcam do okresowego sprawdzania
              tej strony.
            </p>
          </section>
        </article>
      </main>
    </>
  )
}
