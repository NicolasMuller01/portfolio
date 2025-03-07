import type React from "react"
import "@/components/ui/toaster"
import "@/app/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nicolas Muller | Full Stack Developer",
  description: "Full Stack Developer | Backend & Frontend | Passionate about AI",
  icons: {
    icon: "/placeholder-logo.svg",
    shortcut: "/placeholder-logo.svg",
    apple: "/placeholder-logo.svg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'