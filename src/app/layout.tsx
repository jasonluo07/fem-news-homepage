import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Self-hosted Inter 400/700/800. The files are the static TTFs from the
// challenge assets, subset to Latin and converted to WOFF2 (~25 KB each).
const inter = localFont({
  src: [
    { path: '../fonts/Inter-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Inter-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/Inter-ExtraBold.woff2', weight: '800', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Frontend Mentor | News homepage',
  description:
    'A news homepage with a featured story, the latest headlines and trending articles.',
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
