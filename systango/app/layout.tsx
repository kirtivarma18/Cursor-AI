import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Systango - Leading in Google Cloud AI',
  description: 'Innovative digital experiences, reimagined applications, and high-impact software powered by Blockchain, Generative AI, Automation, & Cloud solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
} 