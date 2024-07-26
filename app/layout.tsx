import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'

import './globals.css'
import { NextUIProvider } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NEXT BLOG',
  description: 'A blog built with Next.js and MDX.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4">
              <Navbar />
              <main className="py-4">{children}</main>
            </div>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
