import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quran App",
  description: "Read the Quran online",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-green-600 text-white py-6 mb-8">
          <div className="container mx-auto px-4">
            <Link href="/">
              <h1 className="text-4xl font-bold text-center">Quran App</h1>
            </Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-100 py-4 mt-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            &copy; 2023 Quran App. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

