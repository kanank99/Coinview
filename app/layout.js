import './globals.css'
import { Dongle } from 'next/font/google'
import Header from './Header'

 
export const metadata = {
  title: 'Coinview',
  description: 'Keep a watchful eye on the world of cryptocurrencies with Coinview.',
}

 const dongle = Dongle({
  subsets: ['latin'],
  weight: ['300','400', '700'],
 })


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dongle.className}>
      <body>
          <Header />
          {children}
      </body>
    </html>
  )
}
