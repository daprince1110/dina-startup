import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dina',
  description: 'AI Driven Data Analytics For Your Business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
