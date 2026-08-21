import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MDM Security - Employee Monitoring & HR Management Suite',
  description: 'Track, Manage, and Secure — All in One Platform. The future of employee monitoring and HR management with check-in/check-out, time tracking, screenshots, and more.',
  keywords: 'employee monitoring, HR management, time tracking, workforce management, productivity tools, business software',
  authors: [{ name: 'MDM Security' }],
  creator: 'MDM Security',
  publisher: 'MDM Security',
  robots: 'index, follow',
  openGraph: {
    title: 'MDM Security - Employee Monitoring & HR Management Suite',
    description: 'Track, Manage, and Secure — All in One Platform.',
    url: 'https://mdmsecurity.com',
    siteName: 'MDM Security',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MDM Security - Employee Monitoring & HR Management Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDM Security - Employee Monitoring & HR Management Suite',
    description: 'Track, Manage, and Secure — All in One Platform.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
