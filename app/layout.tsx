import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AdmirerX BPO - Business Process Outsourcing',
  description: 'Premium BPO services with AI-powered automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
