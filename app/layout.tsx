import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import { Analytics } from '@vercel/analytics/next'

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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-bg="mesh" data-font="Aktiv-Grotesk-(≈-Hanken)" suppressHydrationWarning>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
