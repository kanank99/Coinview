"use client"

import './globals.css'
import { useState, useEffect } from 'react'
import { Dongle } from 'next/font/google'
import Header from './components/Header'
import SlashScreen from './components/SlashScreen'
import { usePathname } from 'next/navigation'

 
// export const metadata = {
//   title: 'Coinview',
//   description: 'Keep a watchful eye on the world of cryptocurrencies with Coinview.',
// }

 const dongle = Dongle({
  subsets: ['latin'],
  weight: ['300','400', '700'],
 })


export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) return
    }, [isLoading])

  return (
    <html lang="en" className={dongle.className}>
      <body>
          {isLoading && isHome ? (
          <SlashScreen  finishLoading={() => setIsLoading(false)} /> 
          ) : (
          <>
            <Header />
            {children}
          </>
          )}
      </body>
    </html>
  )
}
