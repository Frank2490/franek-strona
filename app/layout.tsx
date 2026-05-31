import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Franciszek Solewicz — Atelier',
  description: 'Projektuję i koduję strony internetowe, które budują zaufanie i pomagają zdobywać klientów.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&family=Hanken+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-bg="mesh" data-font="Aktiv-Grotesk-(≈-Hanken)" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
